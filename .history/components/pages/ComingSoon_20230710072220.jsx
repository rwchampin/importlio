import { EmailRegister } from '@/components/forms';


export default function ComingSoon() {

    return (
        <section className="flex items-center flex-1">
        <div className="flex flex-col w-full ">
            <div className="text-center font-bold font-apercu text-gray-400">The #1 AI powered</div>
            <h1 className="font-montserrat text-center text-black font-black text-5xl md:text-3xl">
          Amazon Dropshipping Product Import App
        </h1>
        <h2>Import UNLIMITED amazon products into Shopify in minutes</h2>

            <p className="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-700 dark:text-white md:text-xl">
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Fugit alias nihil incidunt.
            </p>

            <EmailRegister />

            <p className="mt-8 text-center text-gray-700 dark:text-white text-md md:text-xl">Notify me when App is launched :)</p>
        </div>
    </section>
    )
}