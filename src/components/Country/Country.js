import React from 'react';
import CardView from '../CardView/CardView';
import { Helmet } from 'react-helmet';
import '../CardView/CardView.css';

const Country = (props) => {
  switch (props.match.params.country) {
  case 'armenia':
    return (
      <div>
        <Helmet>
          <link rel="canonical" href="https://www.regionalkinetics.com/recommendations/armenia" />
          <meta name="description" content="Foreign policy recommendations for the Armenian government"></meta>
        </Helmet>
        <div className="container">
          <h1>Armenia</h1>
        </div>
        <ul className="flexcontainer">
          <CardView
            headline={'For Armenia'}
            body={'Sample Empty Document'}
            link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Recommendations%2FSample.pdf?alt=media&token=479b762b-0985-48ab-b4df-0c5fedec6765'}
          />
        </ul>
      </div>
    );
  case 'azerbaijan':
    return (
      <div>
        <Helmet>
          <link rel="canonical" href="https://www.regionalkinetics.com/recommendations/azerbaijan" />
          <meta name="description" content="Foreign policy and full Armenian genocide recognition recommendations for the Azerbaijani government"></meta>
        </Helmet>
        <div className="container">
          <h1>Azerbaijan</h1>
        </div>
        <ul className="flexcontainer">
          <CardView
            headline={'For Azerbaijan'}
            body={'Sample Empty Document'}
            link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Recommendations%2FSample.pdf?alt=media&token=479b762b-0985-48ab-b4df-0c5fedec6765'}
          />
        </ul>
      </div>
    );

  case 'georgia':
    return (
      <div>
        <Helmet>
          <link rel="canonical" href="https://www.regionalkinetics.com/recommendations/georgia" />
          <meta name="description" content="Foreign policy and full Armenian genocide recognition recommendations for the Georgian government"></meta>
        </Helmet>
        <div className="container">
          <h1>Georgia</h1>
        </div>
        <ul className="flexcontainer">
          <CardView
            headline={'Full Recognition of the Armenian Genocide is in the National Interest of the Republic of Georgia'}
            body={'Policy Brief'}
            link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Recommendations%2FGeorgia%2FPosition_Paper--Georgian_Recognition_of_the_Armenian_Genocide_11-18.pdf?alt=media&token=59c94b2d-4d44-41f5-a3c1-5695d7b6fdb1'}
          />
        </ul>
      </div>
    );

  case 'turkey':
    return (
      <div>
        <Helmet>
          <link rel="canonical" href="https://www.regionalkinetics.com/recommendations/turkey" />
          <meta name="description" content="Foreign policy and full Armenian genocide recognition recommendations for the Turkish government"></meta>
        </Helmet>
        <div className="container">
          <h1>Turkey</h1>
        </div>
        <ul className="flexcontainer">
          <CardView
            headline={'Full Recognition of the Armenian Genocide is in the National Interest of the Republic of Turkey'}
            body={'Policy Brief'}
            link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Recommendations%2FTurkey%2FPosition-Paper-Turkish-Recognition-of-the-Armenian-Genocide-10-18.pdf?alt=media&token=18e9b05b-3d13-4616-b6c4-f7f0fa9650b0'}
          />
        </ul>
      </div>
    );

  case 'russia':
    return (
      <div>
        <Helmet>
          <link rel="canonical" href="https://www.regionalkinetics.com/recommendations/russia" />
          <meta name="description" content="Foreign policy and full Armenian genocide recognition recommendations for the Russian government"></meta>
        </Helmet>
        <div className="container">
          <h1>Russia</h1>
        </div>
        <ul className="flexcontainer">
          <CardView
            headline={'Full Recognition of the Armenian Genocide is in the National Interest of the Russian Federation'}
            body={'Policy Brief'}
            link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Recommendations%2FRussia%2FPosition_Paper--Russian_Recognition_of_the_Armenian_Genocide_01-2019.pdf?alt=media&token=b7f2008a-4654-4a4d-a8c7-d077c0f597e8'}
          />
        </ul>
      </div>
    );

  case 'iran':
    return (
      <div>
        <Helmet>
          <link rel="canonical" href="https://www.regionalkinetics.com/recommendations/iran" />
          <meta name="description" content="Foreign policy and full Armenian genocide recognition recommendations for the Iranian government"></meta>
        </Helmet>
        <div className="container">
          <h1>Iran</h1>
        </div>
        <ul className="flexcontainer">
          <CardView
            headline={'Full Recognition of the Armenian Genocide is in the National Interest of the Islamic Republic of Iran'}
            body={'Policy Brief'}
            link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Recommendations%2FIran%2FPosition_Paper--Iranian_Recognition_of_the_Armenian_Genocide_12-2018.pdf?alt=media&token=f838c3c4-a922-4188-9af2-cb18c1a86f13'}
          />
        </ul>
      </div>
    );
      
  case 'israel':
    return (
      <div>
        <Helmet>
          <link rel="canonical" href="https://www.regionalkinetics.com/recommendations/israel" />
          <meta name="description" content="Foreign policy and full Armenian genocide recognition recommendations for the Israeli government"></meta>
        </Helmet>
        <div className="container">
          <h1>Israel</h1>
        </div>
        <ul className="flexcontainer">
          <CardView
            headline={'Full Recognition of the Armenian Genocide is in the National Interest of the State of Israel'}
            body={'Policy Brief'}
            link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Recommendations%2FIsrael%2FPosition_Paper--Israeli_Recognition_of_the_Armenian_Genocide_01-2019.pdf?alt=media&token=288dbe44-4fc1-4b9f-b07f-30e2c45630e6'}
          />
        </ul>
      </div>
    );


  case 'unitedStates':
    return (
      <div>
        <Helmet>
          <link rel="canonical" href="https://www.regionalkinetics.com/recommendations/unitedStates" />
          <meta name="description" content="Foreign policy and full Armenian genocide recognition recommendations for the United State government"></meta>
        </Helmet>
        <div className="container">
          <h1>United States</h1>
        </div>
        <ul className="flexcontainer">
          <CardView
            headline={'Full Recognition of the Armenian Genocide is in the National Interest of the United States'}
            body={'Policy Brief'}
            link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Recommendations%2FUnited%20States%2FPosition_Paper_US_Recognition_of_Armenian_Genocide_2-19_update.pdf?alt=media&token=d29507db-917b-4154-8020-63b7f5c9dcf7'}
          />
        </ul>
      </div>
    );

  case 'china':
    return (
      <div>
        <Helmet>
          <link rel="canonical" href="https://www.regionalkinetics.com/recommendations/china" />
          <meta name="description" content="Foreign policy and full Armenian genocide recognition recommendations for the Chinese government"></meta>
        </Helmet>
        <div className="container">
          <h1>China</h1>
        </div>
        <ul className="flexcontainer">
          <CardView
            headline={'Full Recognition of the Armenian Genocide is in the National Interest of the People\'s Republic of China'}
            body={'Policy Brief'}
            link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Recommendations%2FChina%2FPosition_Paper--Chinese_Recognition_of_the_Armenian_Genocide_01-2019.pdf?alt=media&token=73a87c89-d991-4a29-ac15-c44d8f998717'}
          />
        </ul>
      </div>
    );

  case 'kurdistan':
    return (
      <div>
        <Helmet>
          <link rel="canonical" href="https://www.regionalkinetics.com/recommendations/kurdistan" />
          <meta name="description" content="Foreign policy and full Armenian genocide recognition recommendations for the Kurdistani government"></meta>
        </Helmet>
        <div className="container">
          <h1>Kurdistan</h1>
        </div>
        <ul className="flexcontainer">
          <CardView
            headline={'Full Recognition of the Armenian Genocide is in the National Interest of Kurdistan'}
            body={'Policy Brief'}
            link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Recommendations%2FKurdistan%2FPosition_Paper--Kurdistani_Recognition_of_the_Armenian_Genocide_01-2019.pdf?alt=media&token=579ab161-8170-40e1-ba6e-e02a699cd9a7'}
          />
        </ul>
      </div>
    );

  case 'europeanUnion':
    return (
      <div>
        <Helmet>
          <link rel="canonical" href="https://www.regionalkinetics.com/recommendations/europeanUnion" />
          <meta name="description" content="Foreign policy and full Armenian genocide recognition recommendations for the European Union"></meta>
        </Helmet>
        <div className="container">
          <h1>European Union</h1>
        </div>
        <ul className="flexcontainer">
          <CardView
            headline={'Full Recognition of the Armenian Genocide is in the Collective Interest of the European Union'}
            body={'Policy Brief'}
            link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Recommendations%2FEU%2FPosition_Paper--European_Union_Recognition_of_the_Armenian_Genocide_01-2019.pdf?alt=media&token=c741f95f-c7e8-45d0-9021-58c6b43bb51a'}
          />
        </ul>
      </div>
    );

  case 'other':
    return (
      <div>
        <Helmet>
          <link rel="canonical" href="https://www.regionalkinetics.com/recommendations/other" />
          <meta name="description" content="Foreign policy and full Armenian genocide recognition recommendations for the Other governments"></meta>
        </Helmet>
        <div className="container">
          <h1>Other</h1>
        </div>
        <ul className="flexcontainer">
          <CardView
            headline={'For Other'}
            body={'Sample Empty Document'}
            link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Recommendations%2FSample.pdf?alt=media&token=479b762b-0985-48ab-b4df-0c5fedec6765'}
          />
        </ul>
      </div>
    );
  default: return (
    <p>No such Country</p>
  );
  }
};

export default Country;
