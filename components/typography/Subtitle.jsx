export default function Subtitle({ children, ...props }) {

    return (
        <h2 className="font-apercu-bold text-center text-md font-bold text-black mt-5">
            {children}
        </h2>
    )
}