

// import { EmailForm } from '../forms'
export default function FadingBackgroundCta() {
  
    return (
        <div className="relative overflow-hidden bg-gray-dark-1 min-h-[500px] py-10 text-center">

   


  <section aria-labelledby="sale-heading" className="relative mx-auto flex w-full h-full flex-col items-center justify-center px-5 py-10  text-center  ">
    <div className="mx-auto max-w-2xl lg:max-w-none flex items-center justify-center flex-col">
      <div id="sale-heading" className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
        Give us your email. Get a free trial.
        </div>
      <p className="mx-auto mt-4 max-w-xl text-xl text-white">Preregister today to get a free trial of our membership program. We&apos;ll send you a discount code when we launch our program.</p>
     <div className='mt-4 max-w-lg mx-auto w-full group group-text-white' style={{color: 'white !important'}}>
        {/* <EmailForm className="text-white text-sm"  /> */}
     </div>
    </div>
  </section>


   
</div>

    )
}