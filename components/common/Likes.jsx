"use client";
import {useState, useEffect} from 'react';
import "@/assets/styles/likes.css";
import { Spinner } from '@/components/common';
export default async function Likes({postId, likes}) {
	const [isLoading, setIsLoading] = useState(false)
	const [liked, setLiked] = useState(false)

	const handleLike=async () => {
		setIsLoading(true)
		const res=await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/${postId}/${liked? 'remove':'add'}`, (res) => {
			if(res.ok) {
				setIsLoading(false)
				setLiked(true)
			}
		})
	}

	useEffect(() => {
		handleLike()
	}, [liked])
	 
	return (
		<div class='middle-wrapper'>	
			<div   class='like-wrapper'>
				<span class={`like-button ${liked === true ? "liked" : ''}`}>
					<span class='like-icon'>
						<div class='heart-animation-1'></div>
						<div class='heart-animation-2'></div>
					</span>
						{isLoading? <Spinner /> : <span class='like-text'>{likes}</span>}
				</span>

			</div>
		</div>

	)
}