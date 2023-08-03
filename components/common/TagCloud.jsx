import { Badge } from '@/components/common'
export default function TagCloud({data }) {
	console.log(data)
	return (

		<div className='flex flex-wrap gap-1'>
			{data.map((obj, i) => (
				<Badge key={i} type="info">
					{obj.name}
				</Badge>
			))}
		</div>

	)
}