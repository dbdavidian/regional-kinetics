import React from 'react';
import classes from './Publications.css'
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../../../public/publications', false, /\.(pdf)$/));
console.log(images, images[0])
const Publications = () => (

  <div className={classes.a1} >
    <a href={`/publications${images[0]}`}>armenia-migration </a>
    <a href={`/publications${images[1]}`}>azerbaijan-map</a>
    <a href={`/publications${images[2]}`}>pdf-sample</a>
    {/* add pdf file in  /public/publications and then
    <a href={`/publications${images[3]}`}>title</a> note the order in /public/publications*/}
  </div>
)

export default Publications;