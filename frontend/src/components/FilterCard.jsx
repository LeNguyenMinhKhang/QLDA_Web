import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "./ui/label";
import { useEffect, useState } from "react";
import { setSearchedQuery } from "../redux/jobSlice";
import { useDispatch } from "react-redux";

const filterData = [
  {
    filterType: "Location",
    array: ["Vietnam", "USA", "UK", "Canada"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
  },
  {
    filterType: "Salary",
    array: ["5-10tr VNĐ", "10-15tr VNĐ", "15-20tr VNĐ", "20-30tr VNĐ"],
  },
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();
  const ChangeHandler = (value) => {
    setSelectedValue(value);
  }

  useEffect(() => {
    dispatch (setSearchedQuery(selectedValue));
  }
  , [selectedValue]);

  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter</h1>
      <hr className="mt-3" />
      <RadioGroup  value={selectedValue} onValueChange={ChangeHandler}>

        {filterData.map((data, index) => (
          <div>
            <h1 className="font-bold text-lg">{data.filterType}</h1>
            {data.array.map((item, idx) => {
              const itemId = `id${index} - ${idx}`;
              return (
                <div className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={item} id={itemId} />
                  <Label htmlFor={itemId}>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
