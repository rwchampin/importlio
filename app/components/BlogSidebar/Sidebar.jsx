 
"use client";
 
import { Suspense } from "react";

// import RecentPostsSkeleton from "@/app/components/skeletons/RecentPostsSkeleton";


// import TagCloud from '@/app/components/TagCloud';
// import SidebarCard from './SidebarCard';
// import { usePathname } from 'next/navigation';
import dynamic from "next/dynamic";

const PostFeed = dynamic(() => import("./PostFeed"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});
 
export default function Sidebar() {

 

  // const pathname = usePathname();
  // const [showSidebar, setShowSidebar] = useState(false);



  

  // useEffect(() => {
  //   const show =(pathname === '/' || pathname === '') ? false : true;
  //   if(show !== showSidebar) {
  //     setShowSidebar(show);
  //   }
  // }, [pathname]);

  // if(!showSidebar || !posts){
  //   return null;
  // }
  return (
    <div className="sidebar w-full bg-gray-2 overflow-y-scroll shadow-xl rounded-lg h-[calc(100vh-6rem)] flex flex-col sticky top-[5rem]">
      {/* <PostSearchBar /> */}
      <div className="flex-auto flex flex-col gap-3">

        <Suspense fallback={<div>Loading...</div>}>
          <PostFeed   />
        </Suspense>  
        <Suspense fallback={<div>Loading...</div>}>
          {/* <TagFeed   /> */}
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <CategoryFeed  /> */}
        </Suspense>

      </div>
    </div>
  );
}


