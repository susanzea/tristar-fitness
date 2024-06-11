import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectMenu = ({
  selected,
  setSelected,
  className = "select-menu",
  label = "select",
  options,
  variant = "filled",
}) => {
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div className={className}>
      <FormControl variant={variant} sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id='demo-simple-select-standard-label'>{label}</InputLabel>
        <Select
          labelId='demo-simple-select-standard-label'
          id='demo-simple-select-standard'
          value={selected}
          onChange={handleChange}
          label={label}
          inputProps={{
            MenuProps: {
              MenuListProps: {
                sx: {
                  color: "#FFFFFF",
                  backgroundColor: "#181818",
                },
              },
            },
          }}>
          {options.map((o, i) => (
            <MenuItem key={i} value={o.value}>
              {o.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectMenu;
