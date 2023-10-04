import {
    Skeleton
} from '@nextui-org/react'
export default function ListCardSkeleton() {

    return (
        <Skeleton className="rounded-lg">
        <div className="h-24 rounded-lg bg-default-300"></div>
      </Skeleton>
    )
}