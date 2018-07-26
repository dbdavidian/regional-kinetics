import React from 'react';
import classes from './Country.css';

const importAll = (r) => r.keys().map(r);

const armenia = importAll(require.context('../../../public/recommendations/armenia', false, /\.(pdf)$/));
const azerbaijan = importAll(require.context('../../../public/recommendations/azerbaijan', false, /\.(pdf)$/));
// to add new country first create a new file in public/recomandation folder. for example turkey then import as is done above.For
// example  const turkey = importAll(require.context('../../../public/recommendations/turkey', false, /\.(pdf)$/));

const Country = (props) => {
  switch (props.match.params.country) {
    case 'armenia':
      return (
        <ul className={classes.flexcontainer}>
          <li className={classes.flexitem}>
            <a href={`/recommendations/armenia${armenia[0]}`}>
              Map of Armenia
            </a>
          </li>
        </ul>
      );
    case 'azerbaijan':
      return (
        <ul className={classes.flexcontainer}>
          <li className={classes.flexitem}>
            <a href={`/recommendations/azerbaijan${azerbaijan[0]}`}>
              Map of Azerbaijan
            </a>
          </li>
        </ul>
      );

      /* case 'turkey':
      return (
        <ul className={classes.flexcontainer}>
          <li className={classes.flexitem}>
            <a href={`/recommendations/turkey${turkey[0]}`}>
              Map of Turkey1
            </a>
            <a href={`/recommendations/turkey${turkey[1]}`}>
              Map of Turkey2
            </a>
          </li>
        </ul>
      ); */

    default: return (
      <p>No such Country</p>
    );
  }
};

export default Country;
