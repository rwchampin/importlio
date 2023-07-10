import { EmailRegister } from '@/components/forms';


export default function ComingSoon() {

    return (
        <section className="flex items-center flex-1">
        <div className="flex flex-col items-center w-full mt-5">
            <div className="text-center text-sm font-apercu text-gray-400">The #1 AI powered</div>
            <h1 className="font-montserrat text-center text-black max-w-2xl  font-black text-3xl md:text-4xl lg:text-5xl">
          Bulk Import Amazon Dropshipping Products
        </h1>
        <h2 className='font-apercu-bold text-center text-md font-bold text-black'>
            Import <u>UNLIMITED</u> amazon products into Shopify in minutes
            </h2>

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