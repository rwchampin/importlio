import { Badge } from '@/components/common'
export default function TagCloud({data, type }) {

	return (

		<div className='flex flex-wrap gap-1'>
			{data.map((obj, i) => (
				<Badge type={type} key={i} href={obj.slug}>
					{obj.name}
				</Badge>
			))}
		</div>

	)
}