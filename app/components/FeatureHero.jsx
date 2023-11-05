
import { GrAmazon,GrDocumentCsv } from  'react-icons/gr';
import { MdOutlineWebAsset  } from 'react-icons/md';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { BsCardList } from 'react-icons/bs';
import { BiBarcode } from 'react-icons/bi';
import { LiaMailBulkSolid } from 'react-icons/lia';


export default function FeatureHero() {

    // useEffect(() => {

    //     const fg = gsap.utils.selector(".feature-grid")
    //     const feat = fg(".feature")

         
    //     // features.forEach((feat, index) => {
    //     gsap.from(feat, {
    //             opacity: 0,
    //             y: 50,
    //             // duration: .83,
    //         stagger: {
    //             each: .1,
    //             from: "top",
    //             amount: feat.length * .14,
    //         },
    //         ease: "expo.out",

    //             scrollTrigger: {
    //                 trigger: parent.current,
    //                 scrub: true,
    //                 // markers: false,
    //                 start: "top bottom",

    //             }

    //         })
    //     // })
      
      
    // }, [])


    const size = "text-2xl mx-auto mb-5 bg-gray-7 rounded-lg p-3 text-black h-12 w-12 flex-shrink-0 aspect-square text-center shadow-xl"
    const features = [
        {
            title: "Import Amazon Dropshipping Products in Bulk into Shopify",
            Icon:() => <LiaMailBulkSolid className={`${size} `} />,
            description: `Quickly populate your Shopify store with a diverse selection of products. Our app allows you to import Amazon products to Shopify in bulk, saving you time and effort.`
        }, {
            title: "Load Products by Amazon Results Page URL",
            Icon:() => <GrAmazon className={`${size} `} />,
            description: `Streamline the process of populating your inventory by directly importing products using Amazon's search results. Effortlessly curate a selection that resonates with your customers' preferences.`
        }, {
            title: "Fill your Shopify Store by Amazon Product Category",
            Icon:() => <BsCardList className={`${size} `} />,
            description: `Elevate your Shopify store's appeal by importing products from specific Amazon categories. Tailor your inventory to cater precisely to your target audience's desires.`
        }, {
            title: "Import in seconds with our Amazon Autocomplete Product Search",
            Icon:() => <AiOutlineFileSearch className={`${size} `} />,
            description: `Swiftly add products to your store using our Amazon Autocomplete Product Search feature. Expedite the import process and bring a diverse array of top-selling items to your customers' fingertips.`
        }, {
            title: "CSV Import/Export",
            Icon:() => <GrDocumentCsv className={`${size} `} />,
            description: `Seamlessly manage your product data with our CSV Import/Export functionality. Effortlessly transfer information between platforms, ensuring your inventory remains accurate and up to date.`
        }, {
            title: "Create Shopify Products from Amazon Product ASIN",
            Icon:() => <BiBarcode className={`${size} `} />,
            description: `Precision meets convenience as you import products using Amazon's unique ASIN identifiers. Ensure accuracy and enhance your offerings by directly incorporating products your customers already love.`
        }, {
            title: "Make Shopify Dropshipping Products from Amazon Product Keyword",
            Icon:() =><MdOutlineWebAsset className={`${size} `} />,
            description: `Tailor your product selection to customer intent by importing items based on Amazon product keywords. Effortlessly match your inventory with popular search terms, boosting your store's visibility.`
        },{
            title: "Search Amazon Dropshipping Products by keyword & directly import to Shopify",
            Icon:() =><MdOutlineWebAsset className={`${size} `} />,
            description: `Search products by keyword or title and directly import to Shopify`
        },{
            title: "Get Amazon Product Reviews & Ratings",
            Icon:() =><MdOutlineWebAsset className={`${size} `} />,
            description: `Import Amazon product reviews and ratings to your Shopify store`
        }
    ]

    return (
        <section className="relative z-10">
            <div className="py-10 mx-auto prose-xl">
                <h2 className="feature font-montserrat font-black text-heading-3">Shopify Product Importer App Features</h2>

                <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
                    <div className="feature-grid grid w-full grid-cols-1 gap-5 lg:w-full xl:gap-16 md:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature, index) => {
                            return (
                                <div key={index} className="feature space-y-3">

                                        {feature.Icon()}
                                        <h2 className="font-montserrat font-bold text-heading-4">{feature.title}</h2>

                                    <p className="text-left text-blacktext-black">
                                        {feature.description}
                                    </p>
                                </div>
                            )
                        })}

                    </div>

                    

                </div>
            </div>
        </section>
    )
}