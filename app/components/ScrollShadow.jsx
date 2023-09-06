import {ScrollShadow as SS} from "@nextui-org/react";

export default function ScrollShadow({ children, hideScrollBar, orientation, className }) {
  return (
    <SS 
    hideScrollBar={hideScrollBar}
    orientation={orientation}
    className="w-[200px] h-[100px]"

    >
        {children}
    </SS>
  );
}
