interface Props {
    size?: number
    showLine?: boolean
    color?: string
}
export default function Spacer({ size=1, showLine=false, color }:Props) {

    return (
        <div
            style={{
                height: `${size/2}rem`
            }} 
            className={'not-prose'}
        />
    );
}