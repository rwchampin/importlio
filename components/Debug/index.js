import {LogoBlack } from '@/components/common';

export default function Index() {
    const { debugState } = useCore();
    const debugInfo = [
        {
            title: "Debug State",
        }
    ]
    return (
        <div className="w-3/4 max-w-xl p-3 rounded-xl bg-gray-5 border border-gray-7 shadow-xl drop-shadow-xl text-xs text-gray-11">
            <LogoBlack />
        </div>
    )
}