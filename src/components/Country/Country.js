import React from 'react';
import CardView from '../CardView/CardView';
import '../CardView/CardView.css';

const Country = (props) => {
  switch (props.match.params.country) {
  case 'armenia':
    return (
      <ul className="flexcontainer">
        <CardView
          headline={'For Armenia'}
          body={'Sample Empty Document'}
          link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics.appspot.com/o/Recommendations%2FSample.pdf?alt=media&token=737bd627-ef86-4ad0-8fb8-0412fd62049b'}
        />
      </ul>
    );
  case 'azerbaijan':
    return (
      <ul className="flexcontainer">
        <CardView
          headline={'For Azerbaijan'}
          body={'Sample Empty Document'}
          link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics.appspot.com/o/Recommendations%2FSample.pdf?alt=media&token=737bd627-ef86-4ad0-8fb8-0412fd62049b'}
        />
      </ul>
    );

  case 'georgia':
    return (
      <ul className="flexcontainer">
        <CardView
          headline={'For Georgia'}
          body={'Sample Empty Document'}
          link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics.appspot.com/o/Recommendations%2FSample.pdf?alt=media&token=737bd627-ef86-4ad0-8fb8-0412fd62049b'}
        />
      </ul>
    );

  case 'turkey':
    return (
      <ul className="flexcontainer">
        <CardView
          headline={'For Turkey'}
          body={'Sample Empty Document'}
          link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics.appspot.com/o/Recommendations%2FSample.pdf?alt=media&token=737bd627-ef86-4ad0-8fb8-0412fd62049b'}
        />
      </ul>
    );

  case 'russia':
    return (
      <ul className="flexcontainer">
        <CardView
          headline={'For Russia'}
          body={'Sample Empty Document'}
          link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics.appspot.com/o/Recommendations%2FSample.pdf?alt=media&token=737bd627-ef86-4ad0-8fb8-0412fd62049b'}
        />
      </ul>
    );

  case 'iran':
    return (
      <ul className="flexcontainer">
        <CardView
          headline={'For Iran'}
          body={'Sample Empty Document'}
          link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics.appspot.com/o/Recommendations%2FSample.pdf?alt=media&token=737bd627-ef86-4ad0-8fb8-0412fd62049b'}
        />
      </ul>
    );

  case 'unitedStates':
    return (
      <ul className="flexcontainer">
        <CardView
          headline={'For United States'}
          body={'Sample Empty Document'}
          link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics.appspot.com/o/Recommendations%2FSample.pdf?alt=media&token=737bd627-ef86-4ad0-8fb8-0412fd62049b'}
        />
      </ul>
    );

  case 'china':
    return (
      <ul className="flexcontainer">
        <CardView
          headline={'For China'}
          body={'Sample Empty Document'}
          link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics.appspot.com/o/Recommendations%2FSample.pdf?alt=media&token=737bd627-ef86-4ad0-8fb8-0412fd62049b'}
        />
      </ul>
    );

  case 'kurdistan':
    return (
      <ul className="flexcontainer">
        <CardView
          headline={'For Kurdistan'}
          body={'Sample Empty Document'}
          link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics.appspot.com/o/Recommendations%2FSample.pdf?alt=media&token=737bd627-ef86-4ad0-8fb8-0412fd62049b'}
        />
      </ul>
    );

  case 'europeanUnion':
    return (
      <ul className="flexcontainer">
        <CardView
          headline={'For European Union'}
          body={'Sample Empty Document'}
          link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics.appspot.com/o/Recommendations%2FSample.pdf?alt=media&token=737bd627-ef86-4ad0-8fb8-0412fd62049b'}
        />
      </ul>
    );

  case 'other':
    return (
      <ul className="flexcontainer">
        <CardView
          headline={'For Other'}
          body={'Sample Empty Document'}
          link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics.appspot.com/o/Recommendations%2FSample.pdf?alt=media&token=737bd627-ef86-4ad0-8fb8-0412fd62049b'}
        />
      </ul>
    );
  default: return (
    <p>No such Country</p>
  );
  }
};

export default Country;
