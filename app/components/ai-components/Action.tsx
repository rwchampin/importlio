"use client";
import { Button } from "@nextui-org/react"
export default function Action({ action }: any) {


  
  return (
    
     <Button
      variant="solid"
      size="lg"
      className="w-auto text-sm bg-button text-offwhite px-5 flex-shrink-0"
      onClick={action.callback}
    >
      {action.name}
    </Button>
     
    
    
  );
}
