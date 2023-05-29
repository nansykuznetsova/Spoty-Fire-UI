import { List } from "../components/List/List";

export default {
  title: "List",
  component: List,
  tags: ['autodocs'],
};

export const ListTab = {
  args: {
    list: [{
      id: "id1",
      name: "trackName1",
      artists: [{name: "artist1"}, {name: "artist1"}],
      album: {
        name: "albumName1",
        images: {
          url: "https://i.scdn.co/image/ab67616d00004851003f81b1f4246362638e682d",
          height: 40,
          width: 40
        }
      }
    }, {
      id: "id2",
      name: "trackName2",
      artists: [{name: "artist2"}],
      album: {
        name: "albumName2",
        images: {
          url: "https://i.scdn.co/image/ab67616d00004851eb6dc5900a0d8632af9913ca",
          height: 40,
          width: 40
        }
      }
    }, {
      id: "id3",
      name: "trackName3",
      artists: [{name: "artist3"}, {name: "artist3"}],
      album: {
        name: "albumName3",
        images: {
          url: "https://i.scdn.co/image/ab67616d000048514ac4dc1d0979e17534c8993e",
          height: 40,
          width: 40
        }
      }
    }],
  },
};