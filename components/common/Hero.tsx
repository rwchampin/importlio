import { ShadowText, Title, Subtitle, Headline } from "@/components/typography";
import { Spacer } from "@/components/utils";
import { Modal } from "@/components/common/";

import Image from "next/image";

interface Props {
  bg?: string;
  title: string;
  subtitle?: string;
  belowSubtitle?: string;
  headline?: string;
  shadowText?: string;
  theme?: "dark" | "light";
  showButton?: boolean;
  xPos?: string;
  yPos?: string;
  customComponent?: React.ReactNode;
}
export default function Hero({
  bg,
  title,
  subtitle,
  belowSubtitle,
  headline,
  shadowText,
  theme,
  showButton,
  xPos = "0",
  yPos = "50",
  customComponent,
}: Props) {
  if (!theme) {
    throw new Error("Page must have a theme");
  }

  return (
    <>
      <section
        style={{ zIndex: 100 }}
        className={`z-100 mx-auto h-screen w-screen relative flex flex-col items-center justify-center`}
      >
        {bg && (
          <Image
            src={bg}
            alt="background"
            fill
            className="absolute top-0 left-0 m-0 w-full h-full object-cover z-0"
          />
        )}
        <div className="flex-1 z-10 md:p-0 flex flex-col text-left justify-center w-full max-w-[90vw] z-200">
          <Headline theme={theme}>{headline}</Headline>
          {/* <Spacer size={.5} /> */}
          <Title data-enter={1} theme={theme}>
            {title}
          </Title>
          <Spacer size={1} />
          <Subtitle data-enter={2} theme={theme}>
            {subtitle}
          </Subtitle>

          <Spacer size={2} />
          {belowSubtitle && (
            <>
              {belowSubtitle}
              <Spacer size={2} />
            </>
          )}
   <Spacer size={2} />

          {showButton && (
            <>
              <Spacer size={2} />
              <Modal theme={theme} data-enter={3} />
            </>
          )}
          <Spacer size={2} />
          {customComponent}
        </div>
        <Spacer size={2} />

      </section>
      <ShadowText xPos={xPos} yPos={yPos} text={shadowText} />
    </>
  );
}
