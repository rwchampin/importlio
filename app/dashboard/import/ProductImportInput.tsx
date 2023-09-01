import { BsQuestionCircleFill } from "react-icons/bs";
export default function ProductImportInput() {
  return (
    <div className="flex flex-col gap-3 w-full">
      <label className="text-black text-sm flex gap-x-1">
        <span>Enter Product Source</span>
        <span>
          <BsQuestionCircleFill />
        </span>
      </label>
      <input
        type="text"
        placeholder="Product Source"
        className="p-5 rounded-lg bg-gray-dark-3 h-auto flex items-center justify-center md:justify-start gap-5 md:flex-col"
      />
      <div className="flex flex-col gap-3 w-full">
        Enter a single product url or an entire list of product urls separated
        by a comma. You can also drop a csv file with product urls.
      </div>
    </div>
  );
}
