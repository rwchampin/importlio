export default function Outline({children}) {
    return (
        <button class="px-6 py-2 font-medium tracking-wide text-black capitalize transition-colors duration-300 transform rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            {children}
</button>
    );
}