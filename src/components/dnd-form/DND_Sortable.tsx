import React, { useState } from 'react';
import {CSS} from "@dnd-kit/utilities";
import { useSortable } from '@dnd-kit/sortable';

export function Sortable(props:any) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id: props.id});

    
    const style = {
        '--translate-x': transform ? transform.x : 0,
        '--translate-y': transform ? transform.y : 0,
        '--transition': transition,
        transform:`translate3d(${transform ? transform.x : 0}px, ${transform ? transform.y : 0}px, 0)`,
        transition
        
      };
  return (
    <div  ref={setNodeRef}  style={style} {...listeners} {...attributes} className={`w-full px-[5%] mb-4 ${props?.id && props?.id === props?.clickedId ? 'border border-[#1890ff]' : ''}`}>
      {props.children}
    </div>
  );
}