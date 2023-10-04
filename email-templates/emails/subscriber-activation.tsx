import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,

  Img,
  Link,
  Preview,
  Text,
} from '@react-email/components';
 
import * as React from 'react';

import Header from './Header';

 

export const SubscriberActivationEmail = () => (
  <Html>
    <Head />
    <Preview>Log in with this magic link</Preview>
    <Body style={main}>
      <Container style={container}>
        
       <Header heading="Activate your Importlio Email" />
           
           <Hr />
        <Text style={{ ...text, marginBottom: '14px', fontSize: 30, fontWeight: 'bold !important' }}>
            Hey there!
        </Text>
        <Text
          style={{
            ...text,
            color: '#ababab',
            marginTop: '14px',
            marginBottom: '16px',
          }}>
          Thanks for signing up for Importlio! We're excited to have you on board.  If you have any questions, please don't hesitate to reach out to us at <Link href="mailto:support@importlio.com">Support</Link>
          </Text>
          <Text
          style={{
            ...text,
            color: '#ababab',
            marginTop: '14px',
            marginBottom: '16px',
          }}>
            Click the button below to validate your email address.
          </Text>
          <Link
            href="{{ activation_url }}"
            style={{
              ...link,
              display: 'block',
              marginBottom: '16px',
              textDecoration: 'none',
              backgroundColor: '#222',
              color: '#fff',
              padding: '16px 24px',
              borderRadius: '12px',
              textAlign: 'center',
            }}>
            Validate Email Address
          </Link>
       
       <Heading style={h3}>
        Amazon Dropshipping Product Importer & Management App for Shopify
      </Heading>
        <Text
          style={{
            ...text,
            color: '#ababab',
            marginTop: '12px',
            marginBottom: '38px',
          }}
        >
          Want full access to over 1 Million Amazon products? <Link href="https://importlio.com/pricing">Upgrade to Importlio Pro</Link>


        </Text>
        <Heading style={h3}>
          Need more customers? See how Importlio can INSTANTLY provide you with thousands of new customers to market to today!
      </Heading>
        <Text
          style={{
            ...text,
            color: '#ababab',
            marginTop: '12px',
            marginBottom: '38px',
          }}
        >
          Browse our list of niche email marketing lists or try our custom email marketing builder now!

          
        </Text>
        <Link
          href="https://importlio.com/email-lists"
          style={{
            ...link,
            display: 'block',
            marginBottom: '16px',
            textDecoration: 'none',
            backgroundColor: '#222',
            color: '#fff',
            padding: '16px 24px',
            borderRadius: '12px',
            textAlign: 'center',
          }}>
          Browse our lists
        </Link>
      </Container>
    </Body>
  </Html>
);

export default SubscriberActivationEmail;

const main = {
  backgroundColor: '#ffffff',
};

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto',
};

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
};
const h2 = {
  color: "#999",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "30px",
  fontWeight: "bold",
  margin: "0 auto",
  padding: "0",
  textAlign: "center",
};

const h3 = {
  color: "#555",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "20px",
  fontWeight: "bold",
  margin: "0 auto",
  padding: "0",
  // textAlign: "center",
};
const link = {
  color: '#2754C5',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  textDecoration: 'underline',
};

const text = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '24px 0',
};

const footer = {
  color: '#898989',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '12px',
  lineHeight: '22px',
  marginTop: '12px',
  marginBottom: '24px',
};

const code = {
  display: 'inline-block',
  padding: '16px 4.5%',
  width: '90.5%',
  backgroundColor: '#f4f4f4',
  borderRadius: '5px',
  border: '1px solid #eee',
  color: '#333',
};
