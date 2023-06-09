import React, { ChangeEvent, useEffect, useState } from "react";
import splitAndCapitalizeString from "../../utils/splitAndCapitalizeString";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

interface PropertyField {
  value: any;
  type: string;
}

interface FieldValidationRule {
  value: any;
  message: string;
}

export interface FieldOptions {
  _id: string;
  type: string;
  properties: { [key: string]: PropertyField };
  validationRules: { [key: string]: FieldValidationRule };
}

interface SideMenuProps {
  fieldOptions: FieldOptions;
  setActiveItem: any;
}

function SideMenu({ fieldOptions, setActiveItem }: SideMenuProps) {
  const { properties, validationRules } = fieldOptions;
  const [propertiesActive, setPropertiesActive] = useState(true);
  const [validationsActive, setValidationsActive] = useState(true);

  useEffect(() => {
    setPropertiesActive(true);
    setValidationsActive(false);
  }, [fieldOptions._id]);
  const handlePropertyChange = (property: string, value: any) => {
    properties[property].value = value;
    setActiveItem({
      _id: fieldOptions._id,
      type: fieldOptions.type,
      properties,
      validationRules,
    });
  };

  const renderMenuItems = () => {
    return Object.entries(properties).map(([property, value]) => {
      return (
        <div key={property} className="menu-item">
          <h3 className="flex-1">{splitAndCapitalizeString(property)}</h3>
          {renderInputField(property, value)}
        </div>
      );
    });
  };

  const renderInputField = (property: string, propertyValue: PropertyField) => {
    if (Array.isArray(propertyValue.value)) {
      // Render an array input field
      return (
        <div className="array-input flex-1">
          {propertyValue.value.map((item: string, index: number) => (
            <div key={index} className="flex-1 flex mb-2 ">
              <input
                className="input-field mr-2"
                type="text"
                value={item}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleArrayInputChange(property, index, e.target.value)
                }
              />
              <button onClick={() => handleArrayItemRemove(property, index)}>
                <CiCircleMinus color="red" size={15} />
              </button>
            </div>
          ))}
          <button
            className="array-add-button"
            onClick={() => handleArrayItemAdd(property)}
          >
            <CiCirclePlus size={25} />
          </button>
        </div>
      );
    } else if (propertyValue.type == "switch") {
      return (
        <div className="flex-1">
          <input
            type="checkbox"
            value={propertyValue.value}
            id={fieldOptions._id}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handlePropertyChange(property, e.target.value)
            }
          />
        </div>
      );
    } else {
      // Render input fields for other property types
      return (
        <input
          className="input-field"
          type={propertyValue.type}
          value={propertyValue.value}
          placeholder={propertyValue.value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handlePropertyChange(property, e.target.value)
          }
        />
      );
    }
  };

  const handleArrayInputChange = (
    property: string,
    index: number,
    newValue: string
  ) => {
    const updatedArray = [...properties[property].value];
    updatedArray[index] = newValue;
    handlePropertyChange(property, updatedArray);
  };

  const handleArrayItemAdd = (property: string) => {
    const updatedArray = [...properties[property].value, ""];
    handlePropertyChange(property, updatedArray);
  };

  const handleArrayItemRemove = (property: string, index: number) => {
    const updatedArray = [...properties[property].value];
    updatedArray.splice(index, 1);
    handlePropertyChange(property, updatedArray);
  };

  return (
    <div className="side-menu border  bg-white w-[300px] h-[364px] overflow-y-scroll scrollbar-thin ">
      {/* <h2 className="text-primary mb-4">
        {splitAndCapitalizeString(fieldOptions?.type)} Field Parameters
      </h2> */}
      <div
        onClick={() => setPropertiesActive(!propertiesActive)}
        style={{ marginBottom: propertiesActive ? "16px" : 0 }}
        className="items-center w-full mb-4 bg-zinc-100 text-zinc-800 cursor-pointer flex text-[0.81rem]  py-1 px-5 border-zinc-300 border-[0.06rem]"
      >
        <div
          className="text-[0.75rem] -ml-3 mr-1 "
          style={
            propertiesActive
              ? {
                  transition: "all 0.15s ease-in-out",
                  transform: "rotate(0deg)",
                }
              : {
                  transform: "rotate(-90deg)",
                  transition: "all 0.15s ease-in-out",
                }
          }
        >
          <span className="inline-block text-center">
            <svg
              viewBox="0 0 1024 1024"
              height="10"
              width="10"
              fill="currentColor"
              focusable="false"
              aria-hidden="true"
            >
              <path d="M512.002047 771.904425c-10.152221 0.518816-20.442588-2.800789-28.202319-10.598382L77.902254 315.937602c-14.548344-14.618952-14.548344-38.318724 0-52.933583 14.544251-14.614859 38.118156-14.614859 52.662407 0l381.437385 418.531212L893.432269 263.004019c14.544251-14.614859 38.125319-14.614859 52.662407 0 14.552437 14.614859 14.552437 38.314631 0 52.933583L540.205389 761.307066C532.451798 769.103636 522.158361 772.424264 512.002047 771.904425z"></path>
            </svg>
          </span>
        </div>
        <div>Field Properties</div>
      </div>
      <div
        className="menu-container p-4"
        style={{
          display: propertiesActive ? "inherit" : "none",
          transition: "all 0.15s ease-in-out",
        }}
      >
        {renderMenuItems()}
      </div>
      <div
        onClick={() => setValidationsActive(!validationsActive)}
        className="items-center w-full mb-4 bg-zinc-100 text-zinc-800 cursor-pointer flex text-[0.81rem]  py-1 px-5 border-zinc-300      
      border-[0.06rem]"
      >
        <div
          className="text-[0.75rem] -ml-3 mr-1 "
          style={
            validationsActive
              ? {
                  transition: "all 0.15s ease-in-out",
                  transform: "rotate(0deg)",
                }
              : {
                  transform: "rotate(-90deg)",
                  transition: "all 0.15s ease-in-out",
                }
          }
        >
          <span className="inline-block text-center">
            <svg
              viewBox="0 0 1024 1024"
              height="10"
              width="10"
              fill="currentColor"
              focusable="false"
              aria-hidden="true"
            >
              <path d="M512.002047 771.904425c-10.152221 0.518816-20.442588-2.800789-28.202319-10.598382L77.902254 315.937602c-14.548344-14.618952-14.548344-38.318724 0-52.933583 14.544251-14.614859 38.118156-14.614859 52.662407 0l381.437385 418.531212L893.432269 263.004019c14.544251-14.614859 38.125319-14.614859 52.662407 0 14.552437 14.614859 14.552437 38.314631 0 52.933583L540.205389 761.307066C532.451798 769.103636 522.158361 772.424264 512.002047 771.904425z"></path>
            </svg>
          </span>
        </div>
        <div>Validation Rules</div>
      </div>
    </div>
  );
}

export default SideMenu;
