"use client";
import {useState, useEffect, useCallback} from 'react';
import "@/assets/styles/likes.css";
import { Spinner } from '@/app/_components';
export default async function Likes({postId, likes}) {
	const [isLoading, setIsLoading] = useState(false)
	const [liked, setLiked] = useState(false)

	const handleLike=useCallback(async () => {
		setIsLoading(true)
		const res=await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/posts/${postId}/${liked? 'remove':'add'}`, (res) => {
			if(res.ok) {
				setIsLoading(false)
				setLiked(true)
			}
		})
	}, [liked, postId])

	useEffect(() => {
		handleLike()
	}, [ handleLike])
	 
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