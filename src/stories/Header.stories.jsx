import { Header } from "../components/Header/Header";
import SpotifyLogo from "../components/svg/SpotifyLogo";
import SpotifyLogoText from "../components/svg/SpotifyLogoText";

export default {
  title: "Header",
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: 'Jane Doe',
    },
    logo: 'Spoty-Fire'
  },
};

export const LoggedOut = {
  args: {
    logo: <SpotifyLogo />
  },
};

export const LoggedInLogo = {
  args: {
    user: {
      name: 'Jane Doe',
    },
    logo: <SpotifyLogoText />
  },
};