import { LogoBlack } from '@/components/common';
import { useDebug } from '@/store/DebugStore';

export default function Index() {
    const { debugState } = useDebug();
    const debugInfo = [
        {
            title: "Debug State",
        }
    ]
    return (
        <div
            id="debug"
            className="fixed bottom-10 w-screen z-[99999999] left-0 right-0 flex items-center justify-center  bg-red-500">
            <div
                className="flex justify-between items-center bg-blue-700 rounded-xl w-5/6 p-3   shadow-xl drop-shadow-xl text-xs text-gray-11"
            >
                <LogoBlack />
            </div>
        </div>
    )
}