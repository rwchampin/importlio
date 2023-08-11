import { BasicPage } from "@/components/pages"
import { Section } from "@/components/common"
export default function Page() {
  return (
    <BasicPage
        title="Contact Us"
        subtitle="We're here to help! Contact us with any questions or concerns."
        headline="Don&apos;t be shy, we&apos;d love to hear from you!"
        shadowText="LET&apos;S TALK"
        showButton={true}
        customComponent={null}
      >

      <Section
        className='p-5'
      >

      
      </Section>
 
    </BasicPage>
  );
}
