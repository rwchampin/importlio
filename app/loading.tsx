 
import Spinner from '@/app/components/Spinner'
export default function Loading() {

    return (
        <div className="w-full h-full flex justify-center items-center bg-gray-400">
            <Spinner lg />
        </div>
    )
}