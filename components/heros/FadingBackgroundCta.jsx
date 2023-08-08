
"use client";
import { EmailForm } from '../forms/'
export default function FadingBackgroundCta() {
    const config = [{
        name: 'email',
        type: 'email',
        placeholder: 'Email',
        required: true,
        label: 'Email',
        labelId: 'email',
        icon: 'email'

    }]
    return (
        <div class="relative overflow-hidden bg-gray-dark-1 min-h-[500px] max-h-[50vh] text-center">

   


  <section aria-labelledby="sale-heading" class="relative mx-auto flex w-full h-full flex-col items-center justify-center p-5  text-center  ">
    <div class="mx-auto max-w-2xl lg:max-w-none flex items-center justify-center flex-col">
      <div id="sale-heading" class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
        Give us your email. Get a free trial.
        </div>
      <p class="mx-auto mt-4 max-w-xl text-xl text-white">Preregister today to get a free trial of our membership program. We'll send you a discount code when we launch our program.</p>
     <div className='mt-4 max-w-lg mx-auto w-full group group-text-white' style={{color: 'white !important'}}>
        <EmailForm className="text-white text-sm"  />
     </div>
    </div>
  </section>


   
</div>

    )
}