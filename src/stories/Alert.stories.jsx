import { Alert } from '../components/Alert/Alert'

export default {
  title: 'Alert',
  component: Alert,
  tags: ['autodocs'],
}

export const Success = {
  args: {
    status: 'success',
    text: 'Your playlist has been saved!',
  },
}

export const Error = {
  args: {
    status: 'error',
    text: 'Something went wrong!',
  },
}
