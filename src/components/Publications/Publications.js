import React from 'react';
import classes from './Publications.css';

const importAll = (r) => r.keys().map(r);

const images = importAll(require.context('../../../public/publications', false, /\.(pdf)$/));

const Publications = () => (
  <ul className={classes.flexcontainer}>
    <li className={classes.flexitem}>
      <a href={`/publications${images[0]}`}>
        armenia-migration
      </a>
    </li>
    <li className={classes.flexitem}>
      <a href={`/publications${images[1]}`}>
        azerbaijan-map
      </a>
    </li>
    <li className={classes.flexitem}>
      <a href={`/publications${images[2]}`}>
        pdf-sample
      </a>
    </li>
    {/* add pdf file in  /public/publications and then
    <a href={`/publications${images[3]}`}>title</a> note the order in /public/publications */}
  </ul>
);

export default Publications;
