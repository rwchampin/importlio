interface Props {
    size?: number
    showLine?: boolean
    color?: string
}
export default function Spacer({ size=1, showLine=false, color="bg-gray-400" }:Props) {

    return (
        <div
            style={{
                height: showLine ? 1 : `${size/2}rem`,
            }} 
            className={`not-prose ${showLine ? color : 'transparent'}`}
        />
    );
}