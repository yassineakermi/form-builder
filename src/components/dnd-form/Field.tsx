import generateId from "@/utils/generate_id";
import React from "react";

function Field(props: any) {
  const { properties } = props?.item;
  let inputField;
  let label;
  let placeholder;
  let maxLength;
  let options;
  switch (props?.widget) {
    case "TextArea":
      label = properties?.label?.value ?? "Textarea Field";
      placeholder = properties?.placeholder?.value ?? "Enter text";
      maxLength = properties?.maxLength?.value ?? 100;
      const showCount = properties?.showCount?.value ?? false;
      maxLength = properties?.maxLength?.value ?? 50;
      inputField = (
        <div className="flex items-center space-x-2 w-full">
          <label htmlFor="textarea" className="text-[0.75rem]">
            {label}
          </label>
          <textarea
            id="textarea"
            className="border w-[80%] p-1 h-12 resize-none text-[0.75rem] flex-1"
            placeholder={placeholder}
            maxLength={maxLength}
          />
        </div>
      );
      break;
    case "Input":
      label = properties?.label?.value ?? "Input Field";
      placeholder = properties?.placeholder?.value ?? "Enter text";
      const prefix = properties?.prefix?.value ?? "";
      const suffix = properties?.suffix?.value ?? "";
      const addonBefore = properties?.addonBefore?.value ?? "";
      const addonAfter = properties?.addonAfter?.value ?? "";
      inputField = (
        <div className="flex items-center space-x-2 w-full">
          <label htmlFor="input" className="text-[0.75rem] w-[30%]">
            {label}
          </label>
          <input
            id="input"
            className="border  p-1  text-[0.75rem] flex-1"
            type="text"
            placeholder={placeholder}
            value={prefix + suffix}
            maxLength={maxLength}
          />
        </div>
      );
      break;
    case "NumberInput":
      label = properties?.label?.value ?? "Number Field";
      placeholder = properties?.placeholder?.value ?? "Enter number";
      const step = properties?.step?.value ?? "";
      const min = properties?.min?.value ?? 0;
      const max = properties?.max?.value ?? 100;
      inputField = (
        <div className="flex items-center space-x-2 w-full">
          <label htmlFor="number-input" className="text-[0.75rem] w-[30%]">
            {label}
          </label>
          <input
            id="number-input"
            className="border  p-1  text-[0.75rem] flex-1"
            type="number"
            placeholder={placeholder}
            step={step}
            max={max}
            min={min}
          />
        </div>
      );
      break;
    case "Select":
      label = properties?.label?.value ?? "Select Field";
      options = properties?.options?.value ?? ["option1", "option2", "option3"];
      inputField = (
        <div className="flex items-center space-x-2 w-full">
          <label htmlFor="select" className="text-[0.75rem] w-[30%]">
            {label}
          </label>
          <select id="select" className="border  p-1 text-[0.75rem] flex-1">
            <option value="">Select an option</option>
            {options.map((option: string, index: number) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      );
      break;
    case "Radio":
      label = properties?.label?.value ?? "Radio Field";
      options = properties?.options?.value ?? ["option1", "option2", "option3"];

      inputField = (
        <div className="flex flex-col">
          <label className="mb-2 text-[0.75rem] w-[30%]">{label}</label>
          <div className="flex space-x-4 flex-1">
            {options.map((option: string, index: number) => (
              <>
                <div className="flex items-center space-x-1">
                  <input
                    type="radio"
                    id={option + index.toString()}
                    name="radio"
                  />
                  <label
                    htmlFor={option + index.toString()}
                    className="text-[0.75rem]"
                  >
                    {option}
                  </label>
                </div>
              </>
            ))}
          </div>
        </div>
      );
      break;
    case "Checkbox":
      label = properties?.label?.value ?? "Checkbox Field";
      options = properties?.options?.value ?? ["option1", "option2", "option3"];
      inputField = (
        <div className="flex flex-col">
          <label className="mb-2 text-[0.75rem] w-[30%]">{label}</label>
          <div className="flex space-x-4 flex-1">
            {options.map((option: string, index: number) => (
              <>
                <div className="flex items-center space-x-1">
                  <input type="checkbox" id={option + index.toString()} />
                  <label
                    htmlFor={option + index.toString()}
                    className="text-[0.75rem]"
                  >
                    {option}
                  </label>
                </div>
              </>
            ))}
          </div>
        </div>
      );
      break;
    case "Upload":
      label = properties?.label?.value ?? "Upload Field";
      const accepts = properties?.accepts?.value ?? ["*"];
      const multiple = properties?.multiple?.value ?? false;
      // placeholder = properties?.placeholder?.value ?? "Enter text";
      inputField = (
        <div className="flex items-center space-x-2 w-full">
          <label htmlFor="upload" className="text-[0.75rem] w-[30%]">
            {label}
          </label>
          <input
            id="upload"
            type="file"
            className="border  p-1 text-[0.75rem] flex-1"
            multiple={multiple}
          />
        </div>
      );
      break;
    case "Switch":
      label = properties?.label?.value ?? "Switch Field";

      inputField = (
        <div className="flex items-center space-x-1 ">
          <input
            type="checkbox"
            className="form-checkbox h-4  text-green-500 mr-2 "
            id="switch"
          />
          <label htmlFor="switch" className="text-[0.75rem]">
            {label}
          </label>
        </div>
      );
      break;
    default:
      inputField = null;
  }

  return (
    <div
      onMouseDown={(_: any) => props?.onClick(_, props?.id)}
      className="py-1 flex flex-1"
      key={new Date().getMilliseconds().toString()}
    >
      {inputField}
    </div>
  );
}

export default Field;
