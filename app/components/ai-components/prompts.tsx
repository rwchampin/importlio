
const businessInfo = " My business is an Ecommerce Product management app - so utilize keywords for that niche"
const seoRules = "It should be no less than 2500 words long.  It should also be written with SEO in mind, try to limit the use of filler words.  Additionally, YOU MUST use at least 1-3 keywords per 100 words of copy."
const linkRules = " There must also be links used as frequently as possible without over doing it.  Use at least one link per 1-2 paragraphs.  You may link to outside content directly related to the post, or to other blog posts or pages within the site.  Links MUST contain at least ONE keyword, preferrably used as the first word of the link"
export const createBlogPost = (topic:any) => `write me a blog post on ${topic}. ${seoRules} ${businessInfo} ${linkRules}`  
            

export const createShadowText = () => `write a 2-3 word sentence which is related to the post, <TOPIC> that will be displayed sideways on the left side of the screen - its mainly a visual aid for the site - but also a useful additional title for seo purposes. Try to use at least one of the keywords from the post in the shadow text.`

export const createSeoTitle = () => `write a 50-60 character seo title, the '<title>' tag, that MUST contain 1 seo keyword as the FIRST word, and contain at least 1-2 additional keywords anywhere else in the title.`

export const createPostExcerpt = () => `write a 150-160 character post excerpt, which is a short description of the post that is displayed on the blog page.  The use of 1-3 keywords in this is required.`

export const createSeoDescription = () => `write a 150-160 character seo description, the '<meta name="description" content="">' tag, that MUST contain 1 seo keyword as the FIRST word, and contain at least 1-2 additional keywords anywhere else in the description.`

export const createSeoKeywords = () => `write a 150-160 character seo keywords, the '<meta name="keywords" content="">' tag, use ALL the keywords you have used in the post, and add 1-2 additional keywords that are related to the post.`

export const createPostHeadline = () => `write a 3-6 word post headline, which is a small title ABOVE the main title which is used to augment the main title.  The use of keywords in this is optional.`

export const createPostSubHeadline = () => `write a subtitle, which is an h2 tag - an additional title BELOW the main title which is used to reinforce the topic of the page.  The use of keywords in this is required but do not repeat the use of any keywords used in the main title.`

export const createPostTitle = () => `write a post title of MAXIMUM 60 characters, which is the main h1 title of the post.  The use of keywords in this is required, the first word MUST be a keyword, and the use of 1-2 additional keywords is preferred.`

export const createPostTags = () => ``

