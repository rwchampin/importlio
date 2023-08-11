import { Badge } from '@/components/common'
export default function TagCloud({data, type }) {

	return (

		<div className='flex flex-wrap gap-1'>
			{data.map((obj, i) => (
				<Badge type={type} key={i}>
					{obj.name}
				</Badge>
			))}
		</div>

	)
}