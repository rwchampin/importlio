import Badge from '@/app/components/Badge'

export default function TagCloud({ data, type }) {

	return (
		

	<div className="flex gap-1 flex-nowrap scrollbar-hide relative">
			{data.map((obj, i) => (
				<Badge key={i} href={obj.slug} type={type}>
					{obj.name}
				</Badge>
			))}
			</div>


	)
}