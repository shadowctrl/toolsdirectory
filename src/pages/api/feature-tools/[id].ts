import { del, put } from '@vercel/blob'
import { PrismaClient } from '@prisma/client'
import { IncomingForm } from 'formidable'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query

  if (req.method === 'PUT') {
    const { title, description, url, icon } = JSON.parse(req.body)
    const existingTool = await prisma.featureProject.findUnique({
      where: { id: Number(id) }
    })
    if (
      (icon !== '' || icon !== undefined || icon !== null) &&
      existingTool?.icon
    ) {
      await del(existingTool?.icon as string)
    }
    const updatedTool = await prisma.featureProject.update({
      where: { id: Number(id) },
      data: {
        icon: icon ?? existingTool?.icon,
        title: title,
        description: description,
        link: url
      }
    })
    return res.status(200).json(updatedTool)
  }

  if (req.method === 'DELETE') {
    const existingTool = await prisma.featureProject.findUnique({
      where: {
        id: Number(id)
      }
    })
    await del(existingTool?.icon as string)
    // Delete a tool
    await prisma.featureProject.delete({
      where: { id: Number(id) }
    })
    const featureProjects = await prisma.featureProject.findMany()
    return res.status(200).json(featureProjects)
  }

  if (req.method === 'GET') {
    const tool = await prisma.featureProject.findUnique({
      where: { id: Number(id) }
    })
    return res.status(200).json(tool)
  }
  return res.status(404).json({ message: 'Not Found' })
}
