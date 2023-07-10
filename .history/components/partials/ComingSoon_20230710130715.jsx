import { EmailRegister } from '@/components/forms';


export default function ComingSoon() {

    return (
        <section className="hero flex items-center flex-1">
        <div className="flex flex-col items-center w-full mt-5">
            <div className="text-center text-sm font-apercu text-gray-400">The #1 AI powered</div>
            <h1 className="font-montserrat text-center text-black max-w-4xl  font-black text-3xl md:text-4xl lg:text-5xl">
          Bulk Import Amazon Dropshipping Products
        </h1>
        <h2 className='font-apercu-bold text-center text-md font-bold text-black mt-5'>
            Import <u>UNLIMITED</u> amazon products into Shopify in minutes
            </h2>

           

            <EmailRegister />

            <div className="mt-10 text-center text-xl max-w-2xl font-apercu-bold font-bold text-black">Pre-register today for a chance to be one of the first 1000 customers to get a free membership</div>
            <p className="max-w-xl mt-5 text-sm">
                            The only true <i>unlimited</i> bulk shopify product importer on
                            the web! Pre-register today for a chance to be one of the first
                            1000 customers to get a free membership. Find & import unlimited
                            products to your shopify store and watch your profits grow like
                            never before.
                        </p>
        </div>
    </section>
    )
}