import Badge from '@/app/components/Badge'

export default function TagCloud({ data, type }) {

	return (
		
<div className="w-full">
	<div className="flex gap-1 flex-nowrap overflow-x-scroll scrollbar-hide">
			{data.map((obj, i) => (
				<Badge key={i} href={obj.slug} type={type}>
					{obj.name}
				</Badge>
			))}
			</div>
		</div>

	)
}