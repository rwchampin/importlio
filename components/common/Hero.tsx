import Headline from "@/app/_components/typography/Headline";
import Title from "@/app/_components/typography/Title";
import Subtitle from "@/app/_components/typography/Subtitle";
import ShadowText from "@/app/_components/typography/ShadowText";
import { Spacer } from "@/components/utils";
import { Modal } from "@/components/common/";

import Image from "next/image";


interface Props {
  bg?: string | null | undefined;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  belowSubtitle?: string | null | undefined;
  headline?: string | React.ReactNode;
  shadowText?: string | React.ReactNode;
  showButton?: boolean | null | undefined;
  customComponent?: React.ReactNode | null | undefined;
}
export default function Hero({
  bg,
  title,
  subtitle,
  belowSubtitle,
  headline,
  shadowText,
  showButton,
  customComponent,
}: Props) {

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
            priority
            fill
            className="absolute top-0 left-0 m-0 w-full h-full object-cover z-0"
          />
        )}
        <div className="flex-1 z-10 md:p-0 flex flex-col text-left justify-center w-full max-w-[90vw] z-200">
          <Headline >{headline}</Headline>
          {/* <Spacer size={.5} /> */}
          <Title>
            {title}
          </Title>
          <Spacer size={1} />
          <Subtitle>
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
              <Modal  />
            </>
          )}
          <Spacer size={2} />
          {customComponent}
        </div>
        <Spacer size={2} />

      </section>
      <ShadowText  text={shadowText} />
    </>
  );
}
