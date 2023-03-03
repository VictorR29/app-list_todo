import React from 'react';
import "./TodoIcon.css";
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './cross.svg';

const iconTypes = {
  "check": color => (
    <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
  ),
  "delete": color => (
    <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
  ),
};

function TodoIcon({type, color = "black", onClick}) {
  return(
    <span
      className={`Icon__container Icon__container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
};

export {TodoIcon};