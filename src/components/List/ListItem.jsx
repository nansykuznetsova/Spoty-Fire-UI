import React from 'react';
import PropTypes from 'prop-types';
import './list.css';
import { Button } from '../Button/Button';

export const ListItem = ({ title, artists, album, img, ...props }) => {
  return (
    <li className="listItem" {...props}>
      <div className="item">
        <img
          aria-hidden="false" 
          draggable="false" 
          loading="eager" 
          src={img.url}
          alt="" 
          width="40" 
          height="40"
          className="imgItem"
        />
        <div className="nameItem">
          {title}
          <span>
            {artists.map((artist) => artist.name).join(", ")} | {album}
          </span>
        </div>
      </div>
      <Button label="Add" variant="outlined" onClick={() => { console.log('Add item') }}/>
    </li>
  )
}

ListItem.propTypes = {
  title: PropTypes.string,
  artists: PropTypes.array,
  album: PropTypes.string,
  img: PropTypes.object,
};

ListItem.defaultProps = {
  title: "",
  artists: [],
  album: "",
  img: {},
};
