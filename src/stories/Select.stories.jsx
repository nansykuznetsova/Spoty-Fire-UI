import { Select } from "../components/Select/Select";

export default {
  title: "Select",
  component: Select,
  tags: ['autodocs'],
};

export const SelectTab = {
  args: {
    label: "Select",
    list: [{
      id: "name1",
      label: "name1",
      value: 1,
    }, {
      id: "name2",
      label: "name2", 
      value: 2,
    }, {
      id: "name3",
      label: "name3", 
      value: 3,
    }],
    onChange: (item) => {
      console.log(item.value);
    }
  },
};

