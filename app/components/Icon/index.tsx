import dynamic from "next/dynamic";


const Book: any = dynamic(() => import("@/app/components/Icon/book"));
const Cart: any = dynamic(() => import("@/app/components/Icon/cart"));
const Cog: any = dynamic(() => import("@/app/components/Icon/cog"));
const Dashboard: any = dynamic(
  () => import("@/app/components/Icon/dashboard-outline")
);
const Error: any = dynamic(() => import("@/app/components/Icon/error"));
const Eye: any = dynamic(() => import("@/app/components/Icon/open-eye"));
const File: any = dynamic(() => import("@/app/components/Icon/file"));
const Package: any = dynamic(() => import("@/app/components/Icon/package-import"));
const Pencil: any = dynamic(() => import("@/app/components/Icon/pencil"));
const Profile: any = dynamic(() => import("@/app/components/Icon/profile"));
const Send: any = dynamic(() => import("@/app/components/Icon/send"));
const OpenAi: any = dynamic(() => import("@/app/components/Icon/openai"));
const ClosedEye: any = dynamic(() => import("@/app/components/Icon/closed-eye"));
const Instagram: any = dynamic(() => import("@/app/components/Icon/instagram"));
const Twitter: any = dynamic(() => import("@/app/components/Icon/twitter"));
const Facebook: any = dynamic(() => import("@/app/components/Icon/facebook"));
const Youtube: any = dynamic(() => import("@/app/components/Icon/youtube"));
const Shopify: any = dynamic(() => import("@/app/components/Icon/shopify"));
const Close: any = dynamic(() => import("@/app/components/Icon/close"));

interface IconProps {
  type: string;
  size?: number;
  className?: string;
}

export default function Icon({ type, className, size = 54 }: IconProps) {
  const icons: any = {
    book: <Book className={className} size={size} />,
    cart: <Cart className={className} size={size} />,
    cog: <Cog className={className} size={size} />,
    dashboard: <Dashboard className={className} size={size} />,
    error: <Error className={className} size={size} />,
    eye: <Eye className={className} size={size} />,
    file: <File className={className} size={size} />,
    package: <Package className={className} size={size} />,
    pencil: <Pencil className={className} size={size} />,
    profile: <Profile className={className} size={size} />,
    send: <Send className={className} size={size} />,
    openai: <OpenAi className={className} size={size} />,
    "closed-eye": <ClosedEye className={className} size={size} />,
    instagram: <Instagram className={className} size={size} />,
    twitter: <Twitter className={className} size={size} />,
    facebook: <Facebook className={className} size={size} />,
    youtube: <Youtube className={className} size={size} />,
    shopify: <Shopify className={className} size={size} />,
    close: <Close className={className} size={size} />,
  };
  return (
    <>
      {icons[type]}
    </>
  );
}
