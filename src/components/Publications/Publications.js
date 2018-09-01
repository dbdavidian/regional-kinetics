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
            link={this.state.pdfs[0]}
          />

          <CardView
            headline={'Returns on Diplomatic Investment Zionist Policies and the Armenians'}
            body={'Sample Summary'}
            link={this.state.pdfs[1]}
          />

          <CardView
            headline={'The Challenge of the Indigenous Arms Industry'}
            body={'Sample Summary'}
            link={this.state.pdfs[2]}
          />

          <CardView
            headline={'The Programmable Diplomatic Kill Switch'}
            body={'Sample Summary'}
            link={this.state.pdfs[3]}
          />

          <CardView
            headline={'Why Azerbaijan is unable to offer viable solutions to the Nagorno-Karabakh Conflict'}
            body={'Sample Summary'}
            link={this.state.pdfs[4]}
          />
        </ul>
      </div>
    );
  }
}

export default Publications;
