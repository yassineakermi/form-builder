import React, { useState } from "react";

function Field(props:any) {
  let inputField;
  let label;
  let placeholder;


  switch (props.widget) {
    case "TextArea":
      label = "Textarea Field";
      placeholder = "Enter text";
      inputField = (
        <div  className="flex items-center space-x-2">
          <label htmlFor="textarea" className="text-[0.75rem]">{label}</label>
          <textarea
            id="textarea"
            className="border rounded-lg p-1 h-12 resize-none text-[0.75rem]"
            placeholder={placeholder}
          />
        </div>
      );
      break;
    case "Input":
      label = "Input Field";
      placeholder = "Enter text";
      inputField = (
        <div  className="flex items-center space-x-2">
          <label htmlFor="input" className="text-[0.75rem]">{label}</label>
          <input
            id="input"
            className="border rounded-lg p-1 w-20 text-[0.75rem]"
            type="text"
            placeholder={placeholder}
          />
        </div>
      );
      break;
    case "NumberInput":
      label = "Number Field";
      placeholder = "Enter number";
      inputField = (
        <div className="flex items-center space-x-2">
          <label htmlFor="number-input" className="text-[0.75rem]">{label}</label>
          <input
            id="number-input"
            className="border rounded-lg p-1 w-12 text-[0.75rem]"
            type="number"
            placeholder={placeholder}
          />
        </div>
      );
      break;
    case "Select":
      label = "Select Field";
      inputField = (
        <div className="flex items-center space-x-2">
          <label htmlFor="select" className="text-[0.75rem]">{label}</label>
          <select id="select" className="border rounded-lg p-1 text-[0.75rem]">
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      );
      break;
    case "Radio":
      label = "Radio Field";
      inputField = (
        <div className="flex flex-col">
          <label className="mb-2 text-[0.75rem]">{label}</label>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-1">
              <input type="radio" id="option1" name="radio" />
              <label htmlFor="option1" className="text-[0.75rem]">Option 1</label>
            </div>
            <div className="flex items-center space-x-1">
              <input type="radio" id="option2" name="radio" />
              <label htmlFor="option2" className="text-[0.75rem]">Option 2</label>
            </div>
            <div className="flex items-center space-x-1">
              <input type="radio" id="option3" name="radio" />
              <label htmlFor="option3" className="text-[0.75rem]">Option 3</label>
            </div>
          </div>
        </div>
      );
      break;
    case "Checkbox":
      label = "Checkbox Field";
      inputField = (
        <div className="flex flex-col">
          <label className="mb-2 text-[0.75rem]">{label}</label>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-1">
              <input type="checkbox" id="option1" />
              <label htmlFor="option1" className="text-[0.75rem]">Option 1</label>
            </div>
            <div className="flex items-center space-x-1">
              <input type="checkbox" id="option2" />
              <label htmlFor="option2" className="text-[0.75rem]">Option 2</label>
            </div>
            <div className="flex items-center space-x-1">
              <input type="checkbox" id="option3" />
              <label htmlFor="option3" className="text-[0.75rem]">Option 3</label>
            </div>
          </div>
        </div>
      );
      break;
    case "Upload":
      label = "Upload Field";
      inputField = (
        <div className="flex items-center space-x-2">
          <label htmlFor="upload" className="text-[0.75rem]">{label}</label>
          <input id="upload" type="file" className="border rounded-lg p-1 text-[0.75rem]" />
        </div>
      );
      break;
    case "Switch":
      label = "Switch Field";
      inputField = (
        <div className="flex items-center space-x-1">
          <input type="checkbox" className="form-checkbox h-4 w-4 text-green-500" id="switch" />
          <label htmlFor="switch" className="text-[0.75rem]">{label}</label>
        </div>
      );
      break;
    default:
      inputField = null;
  }

  return <div onMouseDown={_=>props?.onClick(_,props?.id)}  className="py-1">{inputField}</div>;
}

export default Field;
