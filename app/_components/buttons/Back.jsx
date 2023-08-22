import dynamic from 'next/dynamic'
import {useRouter} from 'next/navigation'
import {Suspense} from 'react'

const FaArrowLeftCircle=dynamic(() => import('react-icons/fa').then((mod) => mod.FaArrowLeftCircle))

const CircleSkeleton=() => {
	return (
		<p className="w-32 h-32 bg-gray-200 rounded-full dark:bg-gray-700 ring-4 ring-gray-300 dark:ring-gray-600"></p>
	)
}
export default function Back() {
	const {router}=useRouter()
	
	const handleClick=() => {
		router.back()
	}

	return (
		<Suspense fallback={<CircleSkeleton/>}>
			<FaArrowLeftCircle className="absolute top-5 left-5 z-100 cursor-pointer" onClick={handleClick} />
		</Suspense>
	)
}