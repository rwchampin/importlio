'use client';
// import Spinner from '@/app/components/Spinner';
import { useAppSelector } from '@/redux/hooks';
import { useEffect, useState } from 'react';
import UserAccountWidget from './widgets/UserAccountWidget';
import BlogPostWidget from './widgets/BlogPostWidget';
import ProductWidget from './widgets/ProductWidget';
import AiAssistantWidget from './widgets/AiAssistantWidget';
import AiChatWidget from './widgets/AiChatWidget';

export default function Page() {

	const widgets = [
		{
			title: "User Accounts",
			description: "Manage your user accounts",
			component: UserAccountWidget
		},{
			title: "Blog Posts",
			description: "Manage your blog posts",
			component: BlogPostWidget
		}, {
			title: "Products",
			description: "Manage your products",
			component: ProductWidget
		}, {
			title: "Ai Assistants",
			description: "Manage your ai assistants",
			component: AiAssistantWidget
		}, {
			title: "Ai Chats",
			description: "Manage your ai chats",
			component: AiChatWidget
		}
	]

	return (
		 
			<main className='mx-auto max-w-7xl py-6 my-8 sm:px-6 lg:px-8'>
				<div className='px-4 py-6 sm:px-0'>

						{widgets.map((widget, index) => {
							const WidgetComponent = widget.component;
							return (
								<WidgetComponent key={index} />
							)
						})}
					</div>

			</main>
		 
	);
}
