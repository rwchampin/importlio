import Badge from '@/app/components/Badge'
export default function TagCloud({data, type }) {

	return (

		<div className='flex flex-wrap gap-1'>
			{data.map((obj, i) => (
				<Badge key={i} href={obj.slug}>
					{obj.name}
				</Badge>
			))}
		</div>

	)
}