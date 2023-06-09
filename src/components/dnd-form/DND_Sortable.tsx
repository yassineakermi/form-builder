import React, { useState } from "react";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

export function Sortable(props: any) {
  const setItems = props?.setItems;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    "--translate-x": transform ? transform.x : 0,
    "--translate-y": transform ? transform.y : 0,
    "--transition": transition,
    transform: `translate3d(${transform ? transform.x : 0}px, ${
      transform ? transform.y : 0
    }px, 0)`,
    transition,
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`w-full flex mb-4 gap-4 ${
        props?.id && props?.id === props?.clickedId
          ? "border border-[#1890ff]"
          : ""
      }`}
    >
      <button
        style={{ textShadow: "rgba(0, 0, 0, 0.12) 0px -1px 0px;" }}
        className="items-center w-fit bg-sky-400 text-white cursor-move flex text-[0.75rem] h-full  relative text-center whitespace-nowrap  p-3 border-sky-400  border-[0.06rem]"
      >
        <span className="relative " style={{ scale: 2 }}>
          <svg
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            fill="currentColor"
            focusable="false"
            aria-hidden="true"
            className="h-3 w-3 overflow-hidden"
          >
            <path d="M664.576 792.533333l-124.416 124.16v-256.981333h-55.296v258.389333L360.533333 793.6l-36.096 36.138667 187.264 187.349333 189.013334-188.373333-36.138667-36.224zM483.84 107.306667v256.981333h55.296V105.898667L663.466667 230.4l36.096-36.138667L512.298667 6.869333l-189.013334 188.373334 36.138667 36.224 124.416-124.16zM230.272 360.533333l-36.096-36.138666-187.392 187.264 188.416 189.013333 36.224-36.138667-124.032-124.330666h256.853333v-55.253334H105.941333l124.330667-124.458666z m598.528-37.162666l-36.224 36.096 124.032 124.330666h-256.853333v55.253334h258.304l-124.330667 124.458666 36.096 36.096 187.392-187.264-188.416-189.013333z"></path>
          </svg>
        </span>
      </button>
      {props.children}
      <button
        type="button"
        className="ant-btn ant-btn-primary dn-aux-copy"
        onMouseDown={(_: any) => {
          setItems(props?.id);
        }}
      >
        <span className="dn-icon text-[#1890ff]">
          <svg
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            fill="currentColor"
            focusable="false"
            aria-hidden="true"
          >
            <path d="M224 256v639.84A64 64 0 0 0 287.84 960h448.32A64 64 0 0 0 800 895.84V256h64a32 32 0 1 0 0-64H160a32 32 0 1 0 0 64h64zM384 96c0-17.664 14.496-32 31.904-32h192.192C625.696 64 640 78.208 640 96c0 17.664-14.496 32-31.904 32H415.904A31.872 31.872 0 0 1 384 96z m-96 191.744C288 270.208 302.4 256 320.224 256h383.552C721.6 256 736 270.56 736 287.744v576.512C736 881.792 721.6 896 703.776 896H320.224A32.224 32.224 0 0 1 288 864.256V287.744zM352 352c0-17.696 14.208-32.032 32-32.032 17.664 0 32 14.24 32 32v448c0 17.664-14.208 32-32 32-17.664 0-32-14.24-32-32V352z m128 0c0-17.696 14.208-32.032 32-32.032 17.664 0 32 14.24 32 32v448c0 17.664-14.208 32-32 32-17.664 0-32-14.24-32-32V352z m128 0c0-17.696 14.208-32.032 32-32.032 17.664 0 32 14.24 32 32v448c0 17.664-14.208 32-32 32-17.664 0-32-14.24-32-32V352z"></path>
          </svg>
        </span>
      </button>
    </div>
  );
}
