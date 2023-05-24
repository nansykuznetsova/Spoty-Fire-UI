import * as React from "react";
import { Field as FieldComponent } from "../components/Field/Field";

const FieldExample = (props) => {
  const [value, setValue] = React.useState("");

  return <FieldComponent value={value} onChange={setValue} {...props} />;
};

export default {
  title: "Field",
  component: FieldExample,
  tags: ['autodocs'],
};

export const Field = {
  args: {
    label: "Field",
  },
};

export const SearchBar = {
  args: {
    label: "Search",
    searchBar: true,
  },
};
