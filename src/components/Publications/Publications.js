import React, { Component } from 'react';
import CardView from '../CardView/CardView';
import { Helmet } from 'react-helmet';
import { storage } from '../../firebase';
import '../CardView/CardView.css';

const storageRef = storage.ref('/Publications/');

class Publications extends Component {

  state = {
    pdfs: []
  }

  filenameHandler = (index, filename) => {
    storageRef.child(filename).getDownloadURL().then((url) => {
      let newState = Object.assign({}, this.state.pdfs);
      newState[index] = url;
      this.setState({pdfs: newState});
      return url;
    });
  };

  render() {
    this.filenameHandler(0, 'Oligarchies-and-Strategic-Danger-to-Small-State-Security.pdf');
    this.filenameHandler(1, 'Returns-on-Diplomatic-Investment-Zionist-Policies-and-the-Armenians.pdf');
    this.filenameHandler(2, 'The-Challenge-of-the-Indigenous-Arms-Industry.pdf');
    this.filenameHandler(3, 'The-Programmable-Diplomatic-Kill-Switch.pdf');
    this.filenameHandler(4, 'Why-Azerbaijan-is-unable-to-offer-viable-solutions-to-the-Nagorno-Karabakh-Conflict.pdf');

    return (
      <div>
        <Helmet>
          <title>Significant Publications</title>
          <meta name="description" content="Peer-reviewed articles about diplomatic, political, military, and security issues."></meta>
          <link rel="canonical" href="https://www.regionalkinetics.com/publications" />
        </Helmet>
        <div className="container">
          <h1>Significant Publications</h1>
          <p>Peer-reviewed articles about diplomatic, political, military, and security issues.</p>
        </div>
        <ul className="flexcontainer">
          <CardView
            headline={'Oligarchies and Strategic Danger to Small State Security'}
            body={'Sample Summary'}
            link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Publications%2FOligarchies-and-Strategic-Danger-to-Small-State-Security.pdf?alt=media&token=e39ac68d-daed-46f0-a910-ac95db574924'}
          />

          <CardView
            headline={'Returns on Diplomatic Investment Zionist Policies and the Armenians'}
            body={'Sample Summary'}
            link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Publications%2FReturns-on-Diplomatic-Investment-Zionist-Policies-and-the-Armenians.pdf?alt=media&token=3ae50c6f-4206-45ac-ad9e-49a5239174bf'}
          />

          <CardView
            headline={'The Challenge of the Indigenous Arms Industry'}
            body={'Sample Summary'}
            link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Publications%2FThe-Challenge-of-the-Indigenous-Arms-Industry.pdf?alt=media&token=2ac74a1e-69dd-49f1-964d-b07c4444bdb4'}
          />

          <CardView
            headline={'The Programmable Diplomatic Kill Switch'}
            body={'Sample Summary'}
            link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Publications%2FThe-Programmable-Diplomatic-Kill-Switch.pdf?alt=media&token=8c86e9f6-aeb0-4566-b873-6c1ceffeabd7'}
          />

          <CardView
            headline={'Why Azerbaijan is unable to offer viable solutions to the Nagorno-Karabakh Conflict'}
            body={'Sample Summary'}
            link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Publications%2FWhy-Azerbaijan-is-unable-to-offer-viable-solutions-to-the-Nagorno-Karabakh-Conflict.pdf?alt=media&token=4fc2f218-847a-4e4e-836d-d33fec36193f'}
          />
        </ul>
      </div>
    );
  }
}

export default Publications;
