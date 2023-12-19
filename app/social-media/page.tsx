import BasePage from "@/app/components/BasePage";
import Section from "@/app/components/Section";
import ClientContent from "./ClientContent";
import type { Metadata } from "next";
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
  },
};

export default function Page() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <BasePage
      title="Social Media"
      headline="Social Media"
      subtitle="Explode your social media presence with Importlio's social media management tools."
      shadowText="Social Media"
      size="md"
    >
      <Section>
        <ClientContent />
        <h3 className="text-2xl font-bold mb-4">Instructions</h3>
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
        </p>
        <form className="mx-auto rounded px-8 pt-6 pb-8 mb-4 w-full max-w-[600px]">
          {/* username & password form */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>

          {/* submit button */}
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Followers
            </button>
          </div>
        </form>
      </Section>
    </BasePage>
  );
}
