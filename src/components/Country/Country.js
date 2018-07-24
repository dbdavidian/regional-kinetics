import React from 'react'
import classes from './Country.css'
function importAll(r) {
    return r.keys().map(r);
}
const armenia = importAll(require.context('../../../public/recommandations/armenia', false, /\.(pdf)$/));
const azerbaijan = importAll(require.context('../../../public/recommandations/azerbaijan', false, /\.(pdf)$/));
// to add new country first create a new file in public/recomandation folder. for example turkey then import as is done above.For
// example  const turkey = importAll(require.context('../../../public/recommandations/turkey', false, /\.(pdf)$/));
const Country = (props) => {
    switch (props.match.params.country) {
        case 'armenia':
            return (<div className={classes.a1}>
                <a href={`/recommandations/armenia${armenia[0]}`}> Map of Armenia </a>
            </div>
            );
        case 'azerbaijan':
            return (<div className={classes.a1}>
                <a href={`/recommandations/azerbaijan${azerbaijan[0]}`}>Map of Azerbaijan</a>
            </div>
            );

        // case 'turkey':
        // return (<div className = {classes.a1}>
        //     <a  href = {`/recommandations/turkey${turkey[0]}`}>Map of Turkey</a>
        //     <a  href = {`/recommandations/turkey${turkey[1]}`}>Map of Turkey</a>  
        // </div>
        // );

        default: return (<p>No such Country</p>)
    }
}

export default Country;