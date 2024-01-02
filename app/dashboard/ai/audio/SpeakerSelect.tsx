import React from 'react';
// Update your SelectDropdown component
const SelectDropdown = ({ options, updateTranscript, selected }:any) => {
    const [selectedName, setSelected] = React.useState(selected || "-1");
  
    const onChange = (e:any) => {
      setSelected(e.target.value);
      updateTranscript(e.target.value);
    };
  
    return (
      <select onChange={onChange} value={selectedName}>
        <option value="-1">Select a Speaker</option>
        {options.map((option:any) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  };

export default SelectDropdown;