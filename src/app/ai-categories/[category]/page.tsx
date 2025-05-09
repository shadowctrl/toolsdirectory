'use client';
import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import Image from 'next/image';
import Footer from '../../components/Footer';
import { useParams } from 'next/navigation';
import Link from 'next/link';

import URL from '../../../../public/url.png';
import SEO from '@/app/components/SEO';

export default function Page() {
	const [category, setCategory] = useState<any>(null);
	const [tools, setTools] = useState<any[]>([]);

	const [loading, setLoading] = useState<boolean>(true);
	const params = useParams<{ category: string }>();

	useEffect(() => {
		Promise.all([
			fetch(`/api/categories?category=${params?.category}`).then((res) =>
				res.json(),
			),
			fetch('/api/tools').then((res) => res.json()),
		])
			.then(([categoryData, toolsData]) => {
				setCategory(categoryData);

				// Filter tools that belong to the current category
				const filteredTools = toolsData.filter((tool: any) =>
					tool.categories.some((cat: any) => cat.id === categoryData.id),
				);

				setTools(filteredTools);
				setLoading(false);
			})
			.catch((err) => {
				console.error('Failed to fetch data:', err);
				setLoading(false);
			});
	}, [params?.category]);

	return (
		<div className="flex flex-col min-h-screen">
			{tools.length > 0 && (
				<SEO
					title={`Top ${params?.category.replaceAll(
						'-',
						' ',
					)} Tools: Compare, Price & Reviews | AI41`}
					description={`Discover the best ${params?.category.replaceAll(
						'-',
						' ',
					)} tools with detailed comparisons, pricing tiers, and reviews. Choose your perfect AI chatbot on AI41.`}
				/>
			)}
			<Header />
			<main className="flex-grow bg-white dark:bg-gray-800 w-full pt-10 pl-6 pr-6 pb-6 text-center">
				<h1 className="font-bold text-4xl uppercase">{params?.category}</h1>
				{loading === false ? (
					<div className="container mx-auto px-4 py-8">
						<div className="max-w-7xl mx-auto px-8">
							{tools.length > 0 ? (
								<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10">
									{tools.map(
										(
											tool: {
												url: string;
												name: any;
												icon: string;
												slug: string;
												description: string;
												shortDescription: string;
											},
											idx: number,
										) => (
											<div
												key={idx}
												className="flex bg-white border-2 border-black dark:bg-gray-800 dark:border ml-2 dark:border-slate-500 rounded-lg shadow-lg p-2 py-4"
											>
												<div className="flex flex-col gap-3">
													<div className="flex flex-row justify-center mb-1">
														<Image
															src={tool.icon}
															width={32}
															height={32}
															alt={tool.name}
															className="w-8 h-8"
														/>
														<span className="mt-1 ml-2">
															<Link
																href={`/tool/${tool.slug}`}
																className="text-black dark:text-white hover:underline"
															>
																{tool.name}
															</Link>
														</span>
													</div>
													<div className="flex">
														<p
															className="text-center text-balance line-clamp-2 overflow-hidden text-sm"
															dangerouslySetInnerHTML={{
																__html: tool.shortDescription,
															}}
														></p>
													</div>
													<div className="flex flex-row justify-center mt-1">
														<Link
															href={`/tool/${tool.slug}`}
															className="text-blue-500 hover:underline flex gap-2"
														>
															<Image
																src={URL}
																alt="url"
																width={24}
																height={24}
															/>
															<button className="px-2 bg-blue-600 text-white rounded-md">
																view
															</button>
														</Link>
													</div>
												</div>
											</div>
										),
									)}
								</div>
							) : (
								<div className="text-center py-10 text-gray-500">
									No tools found in this category.
								</div>
							)}
						</div>
					</div>
				) : (
					<div className="flex flex-row justify-center items-center">
						<div className="animate-spin rounded-full h-16 w-16 border-t-4 border-bg-black dark:border-bg-white"></div>
					</div>
				)}
			</main>
			<Footer />
		</div>
	);
}
