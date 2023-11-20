import { useAppSelector, useAppDispatch } from "@/redux/hooks";

import { setSelectedProducts } from "@/redux/features/products/productSlice";

const DropWrapper = () => {
  const dispatch = useAppDispatch();
  const { products, selectedProducts } = useAppSelector((state:any) => state.product);

   

 

  if(!products.length) return null

  return (
    <div

    className="bg-white p-3 rounded-lg shadow-lg"
    >
      <p className="text-xl uppercase font-bold font-montserrat">Select the products you want to import.</p>
      {products.map((item: any) => {
        return (
         <p className="py-2 hover:bg-gray-400 flex gap-2 p-2 rounded-lg">
            <input
             type="checkbox" 
             value={item.id} 
             onChange={(e:any) => {
                if(e.target.checked) {
                  const r = [...selectedProducts, item.id]
                  dispatch(setSelectedProducts(r))
                }else{
                  dispatch(setSelectedProducts(selectedProducts.filter((p:any) => p !== item.id)))
                }
             }}
              />
              {item.title}
         </p>
        );
      })}
    </div>
  );
};


export default DropWrapper;