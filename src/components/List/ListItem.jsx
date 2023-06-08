import React from 'react';
import PropTypes from 'prop-types';
import './list.css';
import { Button } from '../Button/Button';

export const ListItem = ({ label, title, artists, album, img, ...props }) => {
  return (
    <li className="list-item" {...props}>
      <div className="item">
        <img
          role="img" 
          aria-label="Cover album image"
          draggable="false" 
          loading="eager" 
          src={img.url}
          width="40" 
          height="40"
          className="img-item"
        />
        <div className="name-item">
          {title}
          <span title="artistsInfo">
            {artists.map((artist) => artist.name).join(", ")} | {album}
          </span>
        </div>
      </div>
      {label 
        ? <Button 
            role="button"
            label={label} 
            variant="outlined" 
            onClick={() => { console.log('Add item') }}/> 
        : null
      }
      
    </li>
  )
}

ListItem.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  artists: PropTypes.array,
  album: PropTypes.string,
  img: PropTypes.object,
  onClick: PropTypes.func,
};

ListItem.defaultProps = {
  title: "",
  artists: [],
  album: "",
  img: {},
  onClick: () => {},
};
