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
        id: '111',
        name: 'name1',
      },
      {
        id: '222',
        name: 'name2',
      },
      {
        id: '333',
        name: 'name3',
      },
    ],

    onChange: (item) => {
      console.log(item)
    },
  },
}
