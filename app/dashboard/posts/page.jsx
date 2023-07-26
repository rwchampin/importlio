"use client"
import Table from './Table';
import {useEffect, useState} from 'react';

export default function Page() {
	const [ posts, setPosts ]=useState([]);
	
	useEffect(() => {
		fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(res => res.json()).then(data => {
			setPosts(data);
		});
	}, []);

	return (

			<Table posts={posts} />

	)
}