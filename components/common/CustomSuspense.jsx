"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const SkeletonNav = dynamic(() => import("@/components/common/skeletons/SkeletonNav"));

export default function CustomSuspense({ children }) {

    return (
        <Suspense fallback={<SkeletonNav />}>
            {children}
        </Suspense>
    )
}