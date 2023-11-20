import React from 'react'

export default function URLForn({
    setProducts
}: any) {
    const [value, setValue] = React.useState(
        "https://www.amazon.com/s?k=new-releases/baby-products"
      );
    
      
      const handleSubmit = async (event: any) => {
        event.preventDefault();
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/scrape/get-data/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ url: value }),
          }
        );
    
        const data = await res.json();
    
        if (data) {
          setProducts(data);
        }
      };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-2">
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="Enter a search term"
          className="border-2 border-gray-300 rounded-md p-2 w-full"
        />
        <button type="submit" className="bg-button text-white p-2 rounded-md w-full lg:max-w-xs">
          Submit
        </button>
      </form>
  )
}
