"use client";
// import { CSVUploader } from '@/components/forms'
 import ProductImportInput from './ProductImportInput';

export default function Page() {
  
  const importTypes = {
    "Single Import": "single",
    "Bulk Import": "bulk",
  }
  return (
    <div className="w-full h-full px-2 sm:px-0 flex flex-col items-center justify-center">
      <ProductImportInput />
    </div>
  )
}
