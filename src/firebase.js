import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCoKxC0wlxZEsoalRvPONxnwYLFc0qnmAY',
  projectId: 'regional-kinetics-dd',
  storageBucket: 'regional-kinetics-dd.appspot.com',
};

firebase.initializeApp(config);

export default firebase;
export const storage = firebase.storage();