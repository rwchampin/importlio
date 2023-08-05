// components/JsonLd.js
import Script from "next/script";
const JsonLd = ({ data }) => (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
  
  export default JsonLd;