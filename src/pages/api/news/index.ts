import prisma from '../../../lib/primsa'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { title, url, icon } = JSON.parse(req.body)

    const newTutorial = await prisma.news.create({
      data: {
        title: title,
        url: url,
        icon: icon
      }
    })
    return res.json(newTutorial)
  } else if (req.method === 'GET') {
    const tools = await prisma.news.findMany()
    return res.json(tools)
  }
}