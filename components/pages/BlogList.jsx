import { Hero } from "../common";
// import { EmailForm } from "../forms";
import Image from 'next/image';
export default function BlogList({ posts }) {

    return (
        <>

        <Hero 
        title="Ecommerce Dropshipping Tutorials"
        subtitle="Learn about the latest in Ecommerce & Dropshipping"
        eyebrow="Amazon & Shopify"
        // cta={<EmailForm />}
        cta={null}
        />
        <section className="bg-white dark:bg-gray-300 rounded-lg">
    <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
            <h1 
            className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-black">
                Amazon Dropshipping Product Importer App Tutorials
                </h1>

            <h2>
                The Official Amazon Dropshipping Handbook & Product Importer App Tutorials
            </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => {
                return (
            <div key={post.id}>
                <div className="relative">
                    <Image 
                    fill
                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80" 
                    src={post.image} alt=""
                    />

                    <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                        <Image 
                            height={64}
                            width={64}
                            className="object-cover object-center w-10 h-10 rounded-full" 
                            src={post.author.avatar} 
                            alt=""
                        />

                        <div className="mx-4">
                            <h1 className="text-sm text-gray-700 dark:text-gray-200">{post.author.first_name} {post.author.last_name}</h1>
                        </div>
                    </div>
                </div>

                <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
                    {post.title}
                </h1>

                <hr className="w-32 my-6 text-blue-500"/>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {post.content}
                </p>

                {/* <a href="#" className="inline-block mt-4 text-blue-500 underline hover:text-blue-400">Read more</a> */}
            </div>
                )
            })}
            
        </div>
    </div>
</section>
        </>
    )
}







