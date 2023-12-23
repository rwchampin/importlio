import BasePage from "@/app/components/BasePage";
import PostGenerator from "./PostGenerator";
import type { Metadata } from "next";

const title = "Social Media Post Generator: create viral post captions & images instantly";
const description = "Generate a catchy post hashtags & image for your social media accounts in a single click.";
const keywords = [
    'Social media post generator',
    'Custom post creation',
    'Automated content creation',
    'Social media content tool',
    'Post ideas generator',
    'Creative post generator',
    'Engaging social posts',
    'Content creation platform',
    'Social media marketing',
    'Post scheduling tool',
    'Instant post creation',
    'Unique post ideas',
    'Trending content generator',
    'Social media management',
    'Creative caption ideas',
    'Shareable content creation',
    'Viral post generator',
    'Social media strategy',
    'Post scheduling app',
    'Content automation',
    'Social media branding',
    'Eye-catching visuals',
    'Interactive post ideas',
    'Hashtag suggestions',
    'Social media outreach',
    'Brand promotion ideas',
    'Post optimization',
    'SEO-friendly posts',
    'Social media trends',
    'Engaging captions',
    'Influencer marketing',
    'Visual storytelling',
    'Content curation',
    'Share-worthy posts',
    'Online presence booster',
    'Campaign planning',
    'Social media analytics',
    'Trendy post formats',
    'Post frequency tips',
    'Conversation starters',
    'Audience engagement',
    'Post performance tracking',
    'Hashtag trends',
    'Content scheduling',
    'Social sharing tips',
    'Cross-platform promotion',
    'SEO for social media',
    'Shareable graphics',
    'User-generated content',
    'Viral marketing strategies',
];


export const metadata: Metadata = {
    title,
    description,
    keywords,
    openGraph: {
        title,
        description,
        url: "https://www.importlio.com/social-media/post-generator/",
        images: "https://www.importlio.com/og-image.jpg",
    },
};
export default function Page() {
  return (
    <BasePage
        title="Social Media Post Generator"
        subtitle="Generate a catchy post caption, hashtags & images instantly."
        headline="Social Media Tools"
        shadowText="Social Media Generator"
        size="md"
        >
            <PostGenerator />
        </BasePage>
  )
}
