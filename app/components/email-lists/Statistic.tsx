import cn from "classnames";


export default function Statistic({
    statistic,
    index
}:any) {
    const classNames = cn(
        `flex`, 
    {
        'flex-row-reverse': index % 2 === 0,
        'flex-row': index % 2 !== 0
    }
    );

    return (
        <div
            className={classNames}
        >
            <div className="flex flex-col justify-center items-center w-1/2">
                <div className="text-5xl font-bold">{statistic.name}</div>
                <div className="text-2xl">{statistic.description}</div>
            </div>
            <div className="w-1/2">
                {/* <img src={statistic.image} alt={statistic.title} /> */}
            </div>
        </div>
    )
}