export default function TagCloud({data, className}) {

	return (

		<div className='flex flex-wrap gap-1'>
			{data.map((obj, i) => (
				<h6 key={i} className={`rounded-2xl px-3 py-1 text-xxs ${className}`}>{obj.name}</h6>
			))}
		</div>

	)
}