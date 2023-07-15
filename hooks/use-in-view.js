export default function useInView(options) {
    // hook that plays video when intersecting with viewport
    const [ref, inView] = useInView(options);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (inView) {
            setIsPlaying(true);
        }
    }
    , [inView]);

    return [ref, isPlaying];
}