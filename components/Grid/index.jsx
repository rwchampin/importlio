"use client";
import React, {useState} from 'react';
import Widget from './Widget';
import {Responsive, WidthProvider} from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveReactGridLayout=WidthProvider(Responsive);

const Grid=() => {
  // Default sort order, desktop size & desktop position
  const gridData=[
    {i: 'W1', name: "Widget One", x: 0, y: 0, w: 1, h: 2, enabled: true, newItem: false},
    {i: 'W2', name: "Widget Two", x: 1, y: 0, w: 1, h: 2, enabled: true, newItem: false},
    {i: 'W3', name: "Widget Three", x: 0, y: 2, w: 1, h: 3, enabled: true, newItem: false},
    {i: 'W4', name: "Widget Four", x: 1, y: 2, w: 1, h: 3, enabled: true, newItem: false},
    {i: 'W5', name: "Widget Five", x: 0, y: 5, w: 2, h: 3, enabled: true, newItem: false},
    {i: 'W6', name: "Widget Six", x: 0, y: 8, w: 1, h: 2, enabled: true, newItem: false},
    {i: 'W7', name: "Widget Seven", x: 1, y: 8, w: 1, h: 2, enabled: true, newItem: false},
    {i: 'W8', name: "Widget Eight", x: 0, y: 10, w: 1, h: 3, enabled: true, newItem: false},
    {i: 'W9', name: "Widget Nine", x: 1, y: 10, w: 1, h: 4, enabled: true, newItem: false},
    {i: 'W10', name: "Widget Ten", x: 0, y: 13, w: 1, h: 4, enabled: true, newItem: false},
    {i: 'W11', name: "Widget Eleven", x: 1, y: 14, w: 1, h: 3, enabled: true, newItem: false},
    {i: 'W12', name: "Widget Twelve", x: 0, y: 17, w: 1, h: 2, enabled: true, newItem: false},
    {i: 'W13', name: "Widget Thirteen", x: 1, y: 17, w: 1, h: 2, enabled: true, newItem: false},
    {i: 'W14', name: "Widget Fourteen", x: 0, y: 19, w: 2, h: 2, enabled: true, newItem: false},
  ]

  
  // ... rest of the stateful variables and functions ...

  // Helper function to compute the mobile grid
  const computeMobileGrid=(gridData) => {
    let result=[];
    let rowPosition=0;
    let sorted=gridData.sort((a, b) => {
      if(a.y<b.y) return -1;
      if(a.y>b.y) return 1;
      if(a.x<b.x) return -1;
      if(a.x>b.x) return 1;
      return 0;
    }).forEach((row) => {
      result.push({...row, x: 0, y: rowPosition, w: 1});
      rowPosition+=row.h;
    });
    return result;
  };

  // Helper function to add an item to the desktop layout
  const addToDesktopLayout=(newItem, layoutAr) => {
    let colAHeight=layoutAr.filter((item) => item.x===0).reduce((max, curr) => (max=Math.max(max, curr.h+curr.y)), 0);
    let colBHeight=layoutAr.filter((item) => (item.x===0&&item.w===2)||item.x===1).reduce((max, curr) => (max=Math.max(max, curr.h+curr.y)), 0);
    return layoutAr.concat({
      i: newItem.i,
      x: colAHeight<=colBHeight? 0:1,
      y: newItem.w===1? Math.min(colAHeight, colBHeight):Math.max(colAHeight, colBHeight),
      h: newItem.h,
      w: newItem.w,
    });
  };

  // Helper function to add new items to the top layouts
  const addToTopLayouts=(newItems, layouts) => {
    const result={lg: [], xxs: []};

    // We add all the new items to the top for lg
    newItems.forEach((item) => (result.lg=addToDesktopLayout(item, result.lg)));
    // We use calculated conversion to populate the xxs
    result.xxs=computeMobileGrid(result.lg);
    // We now add the original items starting on a 'new row'
    let deskHeight=result.lg.reduce((max, curr) => (max=Math.max(max, curr.h+curr.y)), 0);
    let mobHeight=result.xxs.reduce((max, curr) => (max=Math.max(max, curr.h+curr.y)), 0);
    result.lg=result.lg.concat(layouts.lg.map((item) => ({
      ...item,
      y: deskHeight+item.y,
    })));
    result.xxs=result.xxs.concat(layouts.xxs.map((item) => ({
      ...item,
      y: mobHeight+item.y,
    })));
    return result;
  };


  // Helper function to remove an item from the layout
  const onRemoveItem=(id, gridData, layouts, disabledSequence, setGridData, setLayouts, setDisabledSequence) => {
    const updatedGridData=gridData.map((row) => ({...row, enabled: row.i===id? false:row.enabled}));
    const updatedLayouts={
      lg: layouts.lg.filter((row) => row.i!==id),
      xxs: layouts.xxs.filter((row) => row.i!==id),
    };
    const updatedDisabledSequence=disabledSequence.concat([ id ]);
    setGridData(updatedGridData);
    setLayouts(updatedLayouts);
    setDisabledSequence(updatedDisabledSequence);
  };

  // Helper function to add an item to the layout
  const onAddItems=(id, gridData, layouts, disabledSequence, setGridData, setLayouts, setDisabledSequence) => {
    const match=gridData.find((row) => row.i===id);
    const updatedGridData=gridData.map((row) => ({...row, enabled: row.i===id? true:row.enabled}));
    const updatedDisabledSequence=disabledSequence.filter((seq) => seq!==id);
    setGridData(updatedGridData);
    setDisabledSequence(updatedDisabledSequence);
  };

  // Helper function to handle layout changes
  const onLayoutChange=(layout, layouts, setLayouts) => {
    setLayouts({...layouts, ...layout});
  };



  // Helper function for render()
  const renderGridItems=(items, enableDisableFunction) => {
    return items
      .filter((item) => item.enabled!==undefined)
      .map((item, i) => <Widget key={i} item={item} enableDisableFunction={enableDisableFunction} />);
  };

  const [ layouts, setLayouts ]=useState({
    lg: gridData.filter((item) => !item.newItem),
    xxs: computeMobileGrid(gridData).filter((item) => !item.newItem),
  });

  const [ gridDataState, setGridDataState ]=useState(gridData);
  const [ disabledSequence, setDisabledSequence ]=useState([]);

  // Render the functional component
  return (
    <>
      <div key="current_items">
        <ResponsiveReactGridLayout
          className="layout gap-5"
          breakpoints={{lg: 960, xxs: 0}}
          cols={{lg: 2, xxs: 1}}
          layouts={layouts}
          isResizable={false}
          rowHeight={25}
          onLayoutChange={setLayouts}
          margin={[ 20, 20 ]}
          measureBeforeMount={true}
          isBounded={true}
        >
          {renderGridItems(
            gridDataState,
            (id) => onRemoveItem(id)
          )}
        </ResponsiveReactGridLayout>
      </div>

      <div
        key="disabled_items"
        style={{borderTop: '1px #fff solid'}}
      >
        <ResponsiveReactGridLayout
          className="layout gap-5"
          breakpoints={{lg: 960, xxs: 0}}
          cols={{lg: 2, xxs: 1}}
          layouts={disabledSequence}
          isResizable={false}
          isDraggable={false}
          rowHeight={25}
          margin={[ 20, 20 ]}
          measureBeforeMount={true}
          isBounded={true}
        >
          {renderGridItems(
            gridDataState,
            (id) => onAddItems(id)
          )}
        </ResponsiveReactGridLayout>
      </div>
    </>
  );
};

export default Grid;
