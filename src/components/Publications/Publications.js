import React, { Component } from 'react';
import CardView from '../CardView/CardView';
import { Helmet } from 'react-helmet';
import { storage } from '../../firebase';
import '../CardView/CardView.css';

const storageRef = storage.ref('/Publications/');

class Publications extends Component {

  state = {
    one: null
  }

  filenameHandler = (filename) => {
    storageRef.child(filename).getDownloadURL().then((url) => {
      // What about the two (second link)
      this.setState({ one: url });
      return url;
    });
  };

  render() {
    // I call it from here! What about the second link?
    this.filenameHandler('Oligarchies and Strategic Danger to Small State Security.final.pdf');

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
            link={this.state.one}
          />

          <CardView
            headline={'Returns on Diplomatic Investment Zionist Policies and the Armenians'}
            body={'Sample Summary'}
            link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Publications%2FReturns%20on%20Diplomatic%20Investment_%20%20%20Zionist%20Policies%20and%20the%20Armenians%20--%20final.pdf?alt=media&token=11c1607e-1487-4f38-8791-88c0b7616636'}
          />

          <CardView
            headline={'The Challenge of the Indigenous Arms Industry'}
            body={'Sample Summary'}
            link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Publications%2FThe%20Challenge%20of%20the%20Indigenous%20Arms%20Industry.pdf?alt=media&token=69e215b1-c5ed-45f1-86eb-697a51c13d74'}
          />

          <CardView
            headline={'The Programmable Diplomatic Kill Switch'}
            body={'Sample Summary'}
            link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Publications%2FThe%20Programmable%20Diplomatic%20Kill%20Switch.final.pdf?alt=media&token=a9a02532-49b9-48cb-87fa-4ed69c37c839'}
          />

          <CardView
            headline={'Why Azerbaijan is unable to offer viable solutions to the Nagorno-Karabakh Conflict'}
            body={'Sample Summary'}
            link={'https://firebasestorage.googleapis.com/v0/b/regional-kinetics-dd.appspot.com/o/Publications%2FWhy%20Azerbaijan%20is%20unable%20to%20offer%20viable%20solutions%20to%20the%20Nagorno-Karabakh%20Conflict.pdf?alt=media&token=c249cd2b-3da3-4ccb-96fd-359dd54297a7'}
          />
        </ul>
      </div>
    );
  }
}

export default Publications;
