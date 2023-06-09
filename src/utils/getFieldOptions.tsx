export default function getFieldOptions(widget: string) {
  let properties = {};
  let validationRules = {};

  switch (widget) {
    case "TextArea":
      properties = {
        label: { type: "text", value: "Textarea Field" },
        placeholder: { type: "text", value: "Enter text" },
        maxLength: { type: "number", value: 100 },
        showCount: { type: "switch", value: true },
      };
      validationRules = {
        required: true,
        maxLength: {
          value: 100,
          message: "Maximum length exceeded",
        },
      };
      break;
    case "Input":
      properties = {
        label: { type: "text", value: "Input Field" },
        placeholder: { type: "text", value: "Enter text" },

        prefix: { type: "text", value: "" },
        suffix: { type: "text", value: "" },
        addonBefore: { type: "text", value: "" },
        addonAfter: { type: "text", value: "" },
        maxLength: { type: "number", value: 50 },
      };
      validationRules = {
        required: true,
        maxLength: {
          value: 50,
          message: "Maximum length exceeded",
        },
        pattern: {
          value: /^[A-Za-z\s]+$/,
          message: "Only alphabets and spaces are allowed",
        },
      };
      break;
    case "NumberInput":
      properties = {
        label: { type: "text", value: "Number Field" },
        placeholder: { type: "text", value: "Enter number" },
        step: { type: "number", value: "" },
        min: { type: "number", value: 0 },
        max: { type: "number", value: 100 },
      };
      validationRules = {
        required: true,
        min: {
          value: 0,
          message: "Value must be greater than or equal to 0",
        },
        max: {
          value: 100,
          message: "Value must be less than or equal to 100",
        },
      };
      break;
    case "Select":
      properties = {
        label: { type: "text", value: "Select Field" },
        options: {
          type: "select",
          value: ["Option 1", "Option 2", "Option 3"],
        },
      };
      validationRules = {
        required: true,
      };
      break;
    case "Radio":
      properties = {
        label: { type: "text", value: "Radio Field" },
        options: {
          type: "select",
          value: ["Option 1", "Option 2", "Option 3"],
        },
      };
      validationRules = {
        required: true,
      };
      break;
    case "Checkbox":
      properties = {
        label: { type: "text", value: "Checkbox Field" },
        options: {
          type: "select",
          value: ["Option 1", "Option 2", "Option 3"],
        },
      };
      validationRules = {
        required: true,
      };
      break;
    case "Upload":
      properties = {
        label: { type: "text", value: "Upload Field" },
        placeholder: { type: "text", value: "Upload" },
        accepts: {
          type: "select",
          value: ["*"],
        }, //jpeg, png, etc.
        multiple: { type: "switch", value: false },
      };
      validationRules = {
        required: true,
      };
      break;
    case "Switch":
      properties = {
        label: { type: "text", value: "Switch Field" },
      };
      validationRules = {
        required: true,
      };
      break;
    default:
      break;
  }

  return { properties, validationRules };
}
