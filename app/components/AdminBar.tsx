"use client"
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice';
import Link from 'next/link';
import { useParams } from 'next/navigation'

export default function AdminBar() {
	const { data: user, isLoading } = useRetrieveUserQuery();
    const { slug } = useParams();


    // if(isLoading) return null;

    if(user && user.is_admin) {
        return (
            <div className="fixed top-0 w-full  left-0 right-0 z-[999999999] flex items-center justify-center bg-black p-3 text-white border-t border-gray-200">
                <Link href={`/dashboard/posts/${slug}`}>
                    {slug }
                </Link>
            </div>
        )
    }

    return null;
}