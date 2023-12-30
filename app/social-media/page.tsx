import BasePage from "@/app/components/BasePage";
import Section from "@/app/components/Section";
import ClientContent from "./ClientContent";
import type { Metadata } from "next";
import Features from "./Features";
import AddFollowers from "./AddFollowers";
const title = "Social Media";
const description = "Social media to help your ecommerce business grow";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Instagram follower growth",
    "Increase Instagram followers",
    "Social media follower tool",
    "Instagram growth strategy",
    "Boost Instagram followers",
    "Organic follower growth",
    "Instagram engagement tool",
    "Gain followers on Instagram",
    "Follower acquisition tool",
    "Instagram marketing tool",
    "Instagram follower boost",
    "Grow Instagram audience",
    "Automated follower tool",
    "Get more Instagram followers",
    "Enhance Instagram presence",
    "Real Instagram followers",
    "Increase social media reach",
    "Instagram growth service",
    "Effective follower strategy",
    "Boost social media presence",
    "Gain Instagram followers fast",
    "Follower management tool",
    "Improve Instagram influence",
    "Social media growth tool",
    "Automated follower acquisition",
    "Targeted Instagram followers",
    "Grow followers organically",
    "Instagram engagement strategy",
    "Follower increase tool",
    "Boost online influence",
    "Instagram follower enhancement",
    "Increase social media followers",
    "Advanced follower acquisition",
    "Optimize Instagram followers",
    "Boost Instagram engagement",
    "Realistic follower growth",
    "Social media marketing tool",
    "Gain targeted followers on Instagram",
    "Enhance Instagram follower count",
    "Boost Instagram visibility",
    "Instagram audience expansion",
    "Effective social media strategy",
    "Improve Instagram follower base",
    "Automated follower growth",
    "Instagram growth and engagement",
    "Boost online presence",
    "Increase Instagram follower count"
  ],
  openGraph: {
    title,
    description,
    images: "https://www.importlio.com/threads.jpg",
  },
};

export default function Page() {
  

  return (
    <BasePage
      title="Boost Your Followers"
      headline="Social Media"
      subtitle="Explode your social media presence with Importlio's social media management tools."
      shadowText="Grow Your Social Media"
      size="md"
    >
      <Section>
       <Features />
        {/* <h3 className="text-2xl font-bold mb-4">Instructions</h3>
        <p>
          Currently, we only offer an 'Add Followers' tool for Instagram &
          Threads. This is a members only feature. You can try a demo for free
          by registering for an account.
        </p>

        <p>
          The 'Add Followers' tool allows you to add followers to your Instagram
          Threads account. More platforms are being developed. The software is
          not fake & nor does it add fake followers to your account.
        </p>
        <p>
          The 'Add Followers' tool is a tool that allows you to add followers to
          your account by following other users. The tool will follow users with
          long periods of time inbetween each action to prevent getting your
          account banned. This is not a fake 'instant click' tool. This is a
          tool that will add followers to your account over time to safely &
          organically grow your account.
        </p>
        <p>
          You must stay on the Importlio website while the tool is running. If
          you close the Importlio website, the tool will stop running. You can
          minimize the Importlio website, but you must keep it open.
        </p>
        <p>
          This tool is still under daily development and will have new features
          added frequently. If you have any questions or suggestions, please
          contact us.
        </p> */}
        <AddFollowers />
      </Section>
      <ClientContent />
    </BasePage>
  );
}
