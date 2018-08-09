import React from 'react';
import CardView from '../CardView/CardView';
import '../CardView/CardView.css';

//const importAll = r => r.keys().map(r);

//const pdfs = importAll(require.context('../../../public/publications', false, /\.(pdf)$/));

const Publications = () => (
  <ul className="flexcontainer">
    <CardView
      headline={'Oligarchies and Strategic Danger to Small State Security'}
      body={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
      link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics.appspot.com/o/Publications%2FOligarchies%20and%20Strategic%20Danger%20to%20Small%20State%20Security.final.pdf?alt=media&token=77599d0a-555c-4386-b8be-2a7c36d6feb8'}
    />

    <CardView
      headline={'Returns on Diplomatic Investment Zionist Policies and the Armenians'}
      body={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
      link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics.appspot.com/o/Publications%2FReturns%20on%20Diplomatic%20Investment_%20%20%20Zionist%20Policies%20and%20the%20Armenians%20--%20final.pdf?alt=media&token=9b4ec61d-076b-4c49-8fec-e1eb6a36a45e'}
    />

    <CardView
      headline={'The Challenge of the Indigenous Arms Industry'}
      body={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
      link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics.appspot.com/o/Publications%2FThe%20Challenge%20of%20the%20Indigenous%20Arms%20Industry.pdf?alt=media&token=6f7cf652-4fbe-48fc-83ad-be6f2606c3ad'}
    />

    <CardView
      headline={'The Programmable Diplomatic Kill Switch {random text here for pushing the button down}'}
      body={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
      link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics.appspot.com/o/Publications%2FThe%20Programmable%20Diplomatic%20Kill%20Switch.final.pdf?alt=media&token=6c68129d-3581-46f7-b516-b5ee52b3a84f'}
    />

    <CardView
      headline={'Why Azerbaijan is unable to offer viable solutions to the Nagorno-Karabakh Conflict'}
      body={'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
      link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics.appspot.com/o/Publications%2FWhy%20Azerbaijan%20is%20unable%20to%20offer%20viable%20solutions%20to%20the%20Nagorno-Karabakh%20Conflict.pdf?alt=media&token=21469814-9453-48b5-affe-bddca0485e1a'}
    />

    {/* add pdf file in  /public/publications and then here. */}
  </ul>
);

export default Publications;
