import React from 'react';
import PropTypes from 'prop-types';
import './list.css';
import { ListItem } from './ListItem';

export const List = ({ list }) => {
  return (
    <ul className="list" >
      {list.map((item) => (
        <ListItem 
          key={item.id}
          title={item.name}
          artists={item.artists}
          album={item.album.name}
          img={item.album.images}
          >
          {item.label}
        </ListItem>
      ))}
    </ul>
  )
}

List.propTypes = {
  list: PropTypes.array,
};

List.defaultProps = {
  list: [],
};
