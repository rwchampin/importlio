import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

 
export const Header = ({
    heading,
    style
}:any) => (
  <>
    <Heading>{heading}</Heading>
    <Link
      href="https://www.importlio.com"
      target="_blank"
      style={{
        ...link,
        display: "block",
        marginBottom: "16px",
        textDecoration: "none",
      }}
    >
      <Img
        src="https://importlio-bucket.nyc3.digitaloceanspaces.com/assets/logo-black.svg"
        width="120"
        height="120"
        alt="Notion's Logo"
        style={{
          margin: "0 auto",
        }}
      />
      <Heading
        style={{
          ...h1,
          color: "#333",
          fontSize: "54px",
          fontWeight: "bold",
          margin: "0 auto",
          padding: "0",
          textAlign: "center",
          fontFamily: "Montserrat Black, sans-serif"
        }}

      >
        Importlio
      </Heading>
      <Heading style={h2}>
        Amazon Dropshipping Product Importer & Management App for Shopify
      </Heading>
    </Link>
  </>
);

export default Header;

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
  textAlign: "center",
};

const h2 = {
  color: "#999",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "20px",
  fontWeight: "bold",
  margin: "0 auto",
  padding: "0",
  textAlign: "center",
};
const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};

const code = {
  display: "inline-block",
  padding: "16px 4.5%",
  width: "90.5%",
  backgroundColor: "#f4f4f4",
  borderRadius: "5px",
  border: "1px solid #eee",
  color: "#333",
};
