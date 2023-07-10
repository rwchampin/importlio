import { EmailRegister } from '@/components/forms';
import { h1 className='font-montserrat' } from '@/components/typography';

export default function ComingSoon() {

    return (
        <section className="flex items-center flex-1">
        <div className="flex flex-col w-full ">
            <div className="eyebrow">The #1 AI powered</div>
            <h1 className="font-montserrat">
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