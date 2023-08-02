"use client";
import { RxDragHandleDots1 } from "react-icons/rx";

import {useRef,useState,useEffect} from "react";

interface Props {
  item: any;
  enableDisableFunction: any;
}

export default function Widget({ item, enableDisableFunction }:Props) {
	
	return (
		<div className="grid-item bg-white-1 group">
          <div className='widget-header bg-gray-12 p-3'>
            <RxDragHandleDots1 className='grip opacity-0 group-hover:opacity-100 ease-in duration-200' />
          </div>
          <span>{item.name}</span>
          <button onClick={() => enableDisableFunction(item.i)}>
            {item.enabled? 'Disable':'Enable'}
          </button>
		</div>
	);
}