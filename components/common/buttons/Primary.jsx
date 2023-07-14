export default function Primary({ children,type="button", success }) {

    if(type === "submit") {
        return (
        <input type="submit" className="px-6 py-2 font-bold font-apercu-bold w-full text-white capitalize transition-colors duration-300 transform bg-bg-button bg-button rounded-lg hover:shadow-2xl hover:bg-button-hover" value={children} />
    );
    }
    const text = success ? 'Saved!' : children;
    return (
        <button className="px-6 py-2 font-medium w-full text-white capitalize transition-colors duration-300 transform bg-button rounded-lg hover:bg-button-hover hover:shadow-2xl">
            {text}
        </button>
    );
}