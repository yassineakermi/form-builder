import React from "react";

function Field({ widget = "" }) {
  let inputField;
  let label;
  let placeholder;

  switch (widget) {
    case "TextArea":
      label = "Textarea Field";
      placeholder = "Enter text";
      inputField = (
        <div className="flex flex-col">
          <label htmlFor="textarea" className="mb-2">
            {label}
          </label>
          <textarea
            id="textarea"
            className="border rounded-lg p-2 h-24 resize-none"
            placeholder={placeholder}
          />
        </div>
      );
      break;
    case "Input":
      label = "Input Field";
      placeholder = "Enter text";
      inputField = (
        <div className="flex flex-col">
          <label htmlFor="input" className="mb-2">
            {label}
          </label>
          <input
            id="input"
            className="border rounded-lg p-2 w-40"
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
        <div className="flex flex-col">
          <label htmlFor="number-input" className="mb-2">
            {label}
          </label>
          <input
            id="number-input"
            className="border rounded-lg p-2 w-24"
            type="number"
            placeholder={placeholder}
          />
        </div>
      );
      break;
    case "Select":
      label = "Select Field";
      inputField = (
        <div className="flex flex-col">
          <label htmlFor="select" className="mb-2">
            {label}
          </label>
          <select id="select" className="border rounded-lg p-2">
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
          <label className="mb-2">{label}</label>
          <div>
            <input type="radio" id="option1" name="radio" />
            <label htmlFor="option1" className="ml-2">
              Option 1
            </label>
          </div>
          <div>
            <input type="radio" id="option2" name="radio" />
            <label htmlFor="option2" className="ml-2">
              Option 2
            </label>
          </div>
          <div>
            <input type="radio" id="option3" name="radio" />
            <label htmlFor="option3" className="ml-2">
              Option 3
            </label>
          </div>
        </div>
      );
      break;
    case "Checkbox":
      label = "Checkbox Field";
      inputField = (
        <div className="flex flex-col">
          <label className="mb-2">{label}</label>
          <div>
            <input type="checkbox" id="option1" />
            <label htmlFor="option1" className="ml-2">
              Option 1
            </label>
          </div>
          <div>
            <input type="checkbox" id="option2" />
            <label htmlFor="option2" className="ml-2">
              Option 2
            </label>
          </div>
          <div>
            <input type="checkbox" id="option3" />
            <label htmlFor="option3" className="ml-2">
              Option 3
            </label>
          </div>
        </div>
      );
      break;
    case "Upload":
      label = "Upload Field";
      inputField = (
        <div className="flex flex-col">
          <label htmlFor="upload" className="mb-2">
            {label}
          </label>
          <input id="upload" type="file" className="border rounded-lg p-2" />
        </div>
      );
      break;
    case "Switch":
      label = "Switch Field";
      inputField = (
        <div className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-6 w-6 text-green-500"
            id="switch"
          />
          <label htmlFor="switch" className="ml-2">
            {label}
          </label>
        </div>
      );
      break;
    default:
      inputField = null;
  }

  return <div className="mb-4">{inputField}</div>;
}

export default Field;
