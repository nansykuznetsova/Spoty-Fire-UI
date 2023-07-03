import { Select } from '../components/Select/Select'

export default {
  title: 'Select',
  component: Select,
  tags: ['autodocs'],
}

export const SelectTab = {
  args: {
    label: 'Select',
    options: [
      {
        id: 'name1',
        name: 'name1',
      },
      {
        id: 'name2',
        name: 'name2',
      },
      {
        id: 'name3',
        name: 'name3',
      },
    ],

    onChange: (item) => {
      console.log(item.value)
    },
  },
}
