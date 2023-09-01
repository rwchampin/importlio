
import { TooltipProps } from '@/lib/constants'
import { Tooltip as ToolTipComp } from "@nextui-org/react";

export default function Tooltip({ 
    children = <div>CHANGE ME</div>,
    showArrow = true,
    content,
    isOpen,
    placement="right",
 }: TooltipProps) {

    return (
        <ToolTipComp
        showArrow={showArrow}
        content={content}
        placement={placement}
      >
        {children}
      </ToolTipComp>
    )
}