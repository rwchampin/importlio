import Badge from '@/app/components/Badge'
import ScrollShadow from './ScrollShadow'
export default function TagCloud({ data, type }) {

	return (
		
<ScrollShadow hideScrollBar orientation="horiontal" className="flex gap-1 bg-red-500 w-full">
			{data.map((obj, i) => (
				<Badge key={i} href={obj.slug} type={type}>
					{obj.name}
				</Badge>
			))}

		</ScrollShadow>

	)
}