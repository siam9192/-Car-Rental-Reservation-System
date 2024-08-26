import { Dropdown } from 'primereact/dropdown';
import React, { useState } from 'react';
type TPrimaryDropdownProps = {
  onChange: (value: string) => void | any;
  options: { label: string; value: string }[];
};
const PrimaryDropDown = ({ onChange, options }: TPrimaryDropdownProps) => {
  const [selectedValue, setSelectedValue] = useState();

  return (
    <Dropdown
      value={selectedValue}
      onChange={(e) => setSelectedValue(e.value)}
      options={options}
      optionLabel="name"
      editable
      placeholder="Select a City"
      className="w-full "
    />
  );
};

export default PrimaryDropDown;
