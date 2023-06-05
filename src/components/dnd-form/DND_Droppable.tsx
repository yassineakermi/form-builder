import React, { useState, useContext, useEffect } from "react";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Field from "./Field";
import { Sortable } from "./DND_Sortable";

import { ItemType } from "./Types";
interface DroppableProps {
  items?: ItemType[];
}

export function Droppable({ items = [] }: DroppableProps) {
  const [activeItem, setActiveItem] = useState("");

  return (
    <SortableContext items={items.map(item=>item._id)} strategy={verticalListSortingStrategy}>
      <div className="flex flex-col w-[500px] h-[364px] items-center py-[5%] px-[10px] border border-gray-300 overflow-scroll">
        {!items.length && <p>Drop elements here!</p>}
        {items.map((item,id) => {
          return (
            <Sortable clickedId={activeItem}  key={item._id} id={item._id}>
                <Field onClick={(_: any,id:string)=>{console.log('clicked');setActiveItem(item._id)}} id={item._id} key={item._id} widget={item.type} />
            </Sortable>
          );
        })}
      </div>
    </SortableContext>
  );
}
