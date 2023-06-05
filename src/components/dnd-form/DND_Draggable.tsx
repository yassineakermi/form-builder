import React from 'react';
import {useDraggable} from '@dnd-kit/core';

export function Draggable(props:any) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props?.id,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className={props?.type != "sortable" ? 'items-center bg-white text-[#333] cursor-grab flex flex-col text-[0.88rem] justify-center relative w-fit max-w-[100px] max-h-[88px] hover:text-[#1890ff] hover:shadow-md hover:z-10 border border-gray-300' : ''}>
      {props.children}
    </div>
  );
}