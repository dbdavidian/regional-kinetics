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
          <meta name="description" content="Armenia"></meta>
        </Helmet>
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
          <meta name="description" content="Azerbaijan"></meta>
        </Helmet>
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
          <meta name="description" content="Georgia"></meta>
        </Helmet>
        <ul className="flexcontainer">
          <CardView
            headline={'For Georgia'}
            body={'Sample Empty Document'}
            link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Recommendations%2FSample.pdf?alt=media&token=479b762b-0985-48ab-b4df-0c5fedec6765'}
          />
        </ul>
      </div>
    );

  case 'turkey':
    return (
      <div>
        <Helmet>
          <link rel="canonical" href="https://www.regionalkinetics.com/recommendations/turkey" />
          <meta name="description" content="Turkey"></meta>
        </Helmet>
        <ul className="flexcontainer">
          <CardView
            headline={'For Turkey'}
            body={'Sample Empty Document'}
            link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Recommendations%2FSample.pdf?alt=media&token=479b762b-0985-48ab-b4df-0c5fedec6765'}
          />
        </ul>
      </div>
    );

  case 'russia':
    return (
      <div>
        <Helmet>
          <link rel="canonical" href="https://www.regionalkinetics.com/recommendations/russia" />
          <meta name="description" content="Russia"></meta>
        </Helmet>
        <ul className="flexcontainer">
          <CardView
            headline={'For Russia'}
            body={'Sample Empty Document'}
            link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Recommendations%2FSample.pdf?alt=media&token=479b762b-0985-48ab-b4df-0c5fedec6765'}
          />
        </ul>
      </div>
    );

  case 'iran':
    return (
      <div>
        <Helmet>
          <link rel="canonical" href="https://www.regionalkinetics.com/recommendations/iran" />
          <meta name="description" content="Iran"></meta>
        </Helmet>
        <ul className="flexcontainer">
          <CardView
            headline={'For Iran'}
            body={'Sample Empty Document'}
            link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Recommendations%2FSample.pdf?alt=media&token=479b762b-0985-48ab-b4df-0c5fedec6765'}
          />
        </ul>
      </div>
    );

  case 'unitedStates':
    return (
      <div>
        <Helmet>
          <link rel="canonical" href="https://www.regionalkinetics.com/recommendations/unitedStates" />
          <meta name="description" content="United States"></meta>
        </Helmet>
        <ul className="flexcontainer">
          <CardView
            headline={'For United States'}
            body={'Sample Empty Document'}
            link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Recommendations%2FSample.pdf?alt=media&token=479b762b-0985-48ab-b4df-0c5fedec6765'}
          />
        </ul>
      </div>
    );

  case 'china':
    return (
      <div>
        <Helmet>
          <link rel="canonical" href="https://www.regionalkinetics.com/recommendations/china" />
          <meta name="description" content="China"></meta>
        </Helmet>
        <ul className="flexcontainer">
          <CardView
            headline={'For China'}
            body={'Sample Empty Document'}
            link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Recommendations%2FSample.pdf?alt=media&token=479b762b-0985-48ab-b4df-0c5fedec6765'}
          />
        </ul>
      </div>
    );

  case 'kurdistan':
    return (
      <div>
        <Helmet>
          <link rel="canonical" href="https://www.regionalkinetics.com/recommendations/kurdistan" />
          <meta name="description" content="Kurdistan"></meta>
        </Helmet>
        <ul className="flexcontainer">
          <CardView
            headline={'For Kurdistan'}
            body={'Sample Empty Document'}
            link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Recommendations%2FSample.pdf?alt=media&token=479b762b-0985-48ab-b4df-0c5fedec6765'}
          />
        </ul>
      </div>
    );

  case 'europeanUnion':
    return (
      <div>
        <Helmet>
          <link rel="canonical" href="https://www.regionalkinetics.com/recommendations/europeanUnion" />
          <meta name="description" content="European Union"></meta>
        </Helmet>
        <ul className="flexcontainer">
          <CardView
            headline={'For European Union'}
            body={'Sample Empty Document'}
            link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Recommendations%2FSample.pdf?alt=media&token=479b762b-0985-48ab-b4df-0c5fedec6765'}
          />
        </ul>
      </div>
    );

  case 'other':
    return (
      <div>
        <Helmet>
          <link rel="canonical" href="https://www.regionalkinetics.com/recommendations/other" />
          <meta name="description" content="Other"></meta>
        </Helmet>
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
