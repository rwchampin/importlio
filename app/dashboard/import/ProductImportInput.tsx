"use client";
import { useState } from "react";
// import { scrapeUrl } from '@/lib/api';
import { BsQuestionCircleFill } from "react-icons/bs";
export default function ProductImportInput() {
  const [results, setResults] = useState<any>([
    {
        "title": `ANMESC Laptop, Windows 11 Traditional Computer, 15.6" 1080P Full HD Display, Intel Celeron N5095 Processors, 12GB DDR4 512GB SSD, 2.4G/5G WiFi, Bluetooth 4.2`,
        "price": "$359.99",
        "rating": "5.0 out of 5 stars",
        "reviews": "8,408",
        "image_url": "https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UY218_.jpg"
    },
    {
        "title": "Lenovo IdeaPad, 20GB RAM, 1TB SSD, AMD Dual-core Processor, 15.6 Inch HD Anti-Glare Display, Long Battery Life Up to 9.5Hr, HDMI, SD Card Reader, Windows 11, 1 Year Microsoft 365",
        "price": "$429.98",
        "rating": "4.1 out of 5 stars",
        "reviews": "774",
        "image_url": "https://m.media-amazon.com/images/I/81aKrWbFRWL._AC_UY218_.jpg"
    },
    {
        "title": `jumper Laptop, 16GB RAM 512GB SSD, Quad-Core Intel N100 Processor, 16" FHD IPS Screen(1920x1200), Windows 11 Laptops Computer with 4 Stereo Speakers, Dual-Band WiFi, Cooling System, 38WH Battery,Gray.`,
        "price": "$379.98",
        "rating": "4.4 out of 5 stars",
        "reviews": "2,678",
        "image_url": "https://m.media-amazon.com/images/I/81i2d4zxFHL._AC_UY218_.jpg"
    },
    {
        "title": `HP Newest 14" Ultral Light Laptop for Students and Business, Intel Quad-Core N4120, 8GB RAM, 192GB Storage(64GB eMMC+128GB Micro SD), 1 Year Office 365, Webcam, HDMI, WiFi, USB-A&C, Win 11 S `,
        "price": "$299.99",
        "rating": "4.3 out of 5 stars",
        "reviews": "7,046",
        "image_url": "https://m.media-amazon.com/images/I/81divYKpeTL._AC_UY218_.jpg"
    },
    {
        "title": `Apple 2023 MacBook Air Laptop with M2 chip: 15.3-inch Liquid Retina Display, 8GB Unified Memory, 256GB SSD Storage, 1080p FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Gray`,
        "price": "$1,099.00",
        "rating": "4.8 out of 5 stars",
        "reviews": "252",
        "image_url": "https://m.media-amazon.com/images/I/81xW62KXNhL._AC_UY218_.jpg"
    }
])
  const [formValues, setFormValues] = useState<any>('')
  const isString = (value: any) => {
    if (typeof value === "string") {
      return true;
    }
    return false;
  }

  const isAmazonUrl = (value: any) => {
      if (value.includes("amazon")) {
        return true;
      }
    return false;
  }

  const isUrl = (value: any) => {
      if (value.includes("http") || value.includes("https")) {
          return true;
      }
    return false;
  }

  const identifySource = (value: any) => {
    if (isString(value)) {
      if (isAmazonUrl(value) && isUrl(value)) {
        return "amazon_url";
      }
    }
    return "invalid";
  };

  const handleChange = (e: any) => {
    const { value } = e.target;
    const valid_amazon_url = identifySource(value);

    if (valid_amazon_url === "amazon_url") {
      setFormValues(value);
    }
  };

  const handleSubmit = (e: any) => {
    const fake = [
      {
          "title": `ANMESC Laptop, Windows 11 Traditional Computer, 15.6" 1080P Full HD Display, Intel Celeron N5095 Processors, 12GB DDR4 512GB SSD, 2.4G/5G WiFi, Bluetooth 4.2`,
          "price": "$359.99",
          "rating": "5.0 out of 5 stars",
          "reviews": "8,408",
          "image_url": "https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UY218_.jpg"
      },
      {
          "title": "Lenovo IdeaPad, 20GB RAM, 1TB SSD, AMD Dual-core Processor, 15.6 Inch HD Anti-Glare Display, Long Battery Life Up to 9.5Hr, HDMI, SD Card Reader, Windows 11, 1 Year Microsoft 365",
          "price": "$429.98",
          "rating": "4.1 out of 5 stars",
          "reviews": "774",
          "image_url": "https://m.media-amazon.com/images/I/81aKrWbFRWL._AC_UY218_.jpg"
      },
      {
          "title": `jumper Laptop, 16GB RAM 512GB SSD, Quad-Core Intel N100 Processor, 16" FHD IPS Screen(1920x1200), Windows 11 Laptops Computer with 4 Stereo Speakers, Dual-Band WiFi, Cooling System, 38WH Battery,Gray.`,
          "price": "$379.98",
          "rating": "4.4 out of 5 stars",
          "reviews": "2,678",
          "image_url": "https://m.media-amazon.com/images/I/81i2d4zxFHL._AC_UY218_.jpg"
      },
      {
          "title": `HP Newest 14" Ultral Light Laptop for Students and Business, Intel Quad-Core N4120, 8GB RAM, 192GB Storage(64GB eMMC+128GB Micro SD), 1 Year Office 365, Webcam, HDMI, WiFi, USB-A&C, Win 11 S `,
          "price": "$299.99",
          "rating": "4.3 out of 5 stars",
          "reviews": "7,046",
          "image_url": "https://m.media-amazon.com/images/I/81divYKpeTL._AC_UY218_.jpg"
      },
      {
          "title": `Apple 2023 MacBook Air Laptop with M2 chip: 15.3-inch Liquid Retina Display, 8GB Unified Memory, 256GB SSD Storage, 1080p FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Gray`,
          "price": "$1,099.00",
          "rating": "4.8 out of 5 stars",
          "reviews": "252",
          "image_url": "https://m.media-amazon.com/images/I/81xW62KXNhL._AC_UY218_.jpg"
      }
  ]
    setResults(fake);
    // const res = scrapeUrl(formValues).then((res) => {
    //   debugger
    //   setResults(fake);
    // });

    // e.preventDefault();
  };
  return (
    <div className="flex flex-col gap-3 w-full">
      <form className="flex flex-col gap-3 w-full" onSubmit={handleSubmit}>
      <label className="text-black text-sm flex gap-x-1">
        <span>Enter Product Source</span>
        <span>
          <BsQuestionCircleFill />
        </span>
      </label>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Product Source"
        value={formValues}
        className="p-5 rounded-lg bg-gray-dark-3 h-auto flex items-center justify-center md:justify-start gap-5 md:flex-col"
      />
      </form>
      <div className="flex flex-col gap-3 w-full">
        Enter a single product url or an entire list of product urls separated
        by a comma. You can also drop a csv file with product urls.
      </div>
      {results.length > 0 && results.map((result:any, i:any) => (
        <div key={i} className="p-5 mb-5 w-full h-full bg-offwhite shadow-xl rounded-xl flex flex-col items-center justify-start gap-5">
        <div className="w-full h-full flex items-center justify-start">
        <img src={result.image_url} alt={result.title} className='rounded-xl shadow-xl mr-3'/>
         <div className="text-2xl font-bold flex flex-col">
          <h3>{result.title}</h3>
          <p className='text-sm text-gray-500'>{result.price}</p>
          <p className='text-sm text-gray-500'>{result.rating}</p>
          <p className='text-sm text-gray-500'>{result.reviews}</p>
          </div>
          </div>
          
        </div>
      ))}
    </div>
  );
}
