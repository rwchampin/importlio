import Headline from "@/app/components/typography/Headline";
import Title from "@/app/components/typography/Title";
import Subtitle from "@/app/components/typography/Subtitle";
import ShadowText from "@/app/components/typography/ShadowText";

// import Picture from "@/app/components/Picture";
import HeroHeader from "@/app/components/Hero/HeroHeader";
import Image from "next/image";

interface Props {
  size?: string;
  bg?: string | null | undefined;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  belowSubtitle?: string | null | undefined;
  headline?: string | React.ReactNode;
  shadowText?: string | React.ReactNode;
  shadowTextPosition?: "top" | "center";
  customComponent?: React.ReactNode | null | undefined;
  theme?: "light" | "dark";
  images?: any;
  image_alt_text?: string | null | undefined;
}
export default function ({
  bg,
  image_alt_text,
  size = "lg", // 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  title,
  subtitle,
  belowSubtitle,
  headline,
  shadowText,
  customComponent,
  shadowTextPosition,
  theme,
}: // images,
Props) {
  const titleColor = theme === "light" ? "text-gray-900" : "text-black";
  const subtitleColor = theme === "light" ? "text-gray-900" : "text-black";
  const headlineColor = theme === "light" ? "text-gray-400" : "text-gray-400";

  const getSize = () => {
    // switch to set the height of the hero either screen or 500px
    switch (size) {
      case "sm":
        return "h-[300px]";
      case "md":
        return "h-[500px]";
      case "lg":
        return "h-screen";
      default:
        return "h-screen";
    }
  };
  return (
    <>
      <section
        className={`py-10 mx-auto ${getSize()} w-screen relative flex flex-col items-center justify-center`}
      >
        <HeroHeader />
        <div className="absolute top-0 left-0 w-full h-full">
          {bg && (
            <Image
              src={bg}
              alt={image_alt_text || "background image"}
              fill
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="relative flex-1 z-10 md:p-0 flex flex-col text-left justify-center w-full max-w-[90vw] z-200">
          <Headline className={headlineColor}>{headline}</Headline>
          {/* <Spacer size={.5} /> */}
          <Title className={`${titleColor}`}>{title}</Title>

          <Subtitle className={subtitleColor}>{subtitle}</Subtitle>

          {belowSubtitle && <>{belowSubtitle}</>}

          {customComponent}
        </div>
      </section>
      <ShadowText position={shadowTextPosition}>{shadowText}</ShadowText>
    </>
  );
}
