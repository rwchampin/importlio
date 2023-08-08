// components/JsonLd.js
import Script from "next/script";
const JsonLd = ({ json }) => (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
  
  export default JsonLd;