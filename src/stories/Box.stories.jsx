import { Box } from '../components/Box/Box'

export default {
  title: 'Box',
  component: Box,
  tags: ['autodocs'],
}

export const FlexPrimary = {
  args: {
    children: <h2>FlexPrimary</h2>,
    primary: true,
  },
}

export const FlexSecondary = {
  args: {
    children: <h2>FlexSecondary</h2>,
    primary: false,
  },
}
