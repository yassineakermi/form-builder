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
  activeItem: string;
  setActiveItem: any;
  setItems: any;
}

export function Droppable({
  items = [],
  activeItem = "",
  setActiveItem = (_: any) => {},
  setItems = (_: any) => {},
}: DroppableProps) {
  return (
    <SortableContext
      items={items.map((item) => item._id)}
      strategy={verticalListSortingStrategy}
    >
      <div className="flex flex-col w-[500px] h-[364px] items-center py-[16px] px-[10px] border border-gray-300 overflow-y-scroll">
        {!items.length && <p>Drop elements here!</p>}
        {items.map((item) => {
          return (
            <Sortable
              clickedId={activeItem}
              key={item._id}
              id={item._id}
              setItems={setItems}
            >
              <Field
                onClick={(_: any) => {
                  setActiveItem(item);
                }}
                id={item._id}
                key={item._id}
                widget={item.type}
                item={item}
              />
            </Sortable>
          );
        })}
      </div>
    </SortableContext>
  );
}
