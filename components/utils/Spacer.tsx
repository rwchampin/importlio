interface Props {
    size?: number
    showLine?: boolean
    color?: string
}
export default function Spacer({ size=1, showLine=false, color }:Props) {
    const classes = `
    h-[${size}] 
    `

    return (
        <hr 
            className={classes}
        />
    );
}