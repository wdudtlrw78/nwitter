import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // apiKey: 'AIzaSyDOCAbC123dEf456GhI789jKl01-MnO',
  // authDomain: 'myapp-project-123.firebaseapp.com',
  // databaseURL: 'https://myapp-project-123.firebaseio.com',
  // projectId: 'myapp-project-123',
  // storageBucket: 'myapp-project-123.appspot.com',
  // messagingSenderId: '65211879809',
  // appId: '1:65211879909:web:3ae38ef1cdcb2e01fe5f0c',
  // measurementId: 'G-8GSGZQ44ST',

  // create-react-app은 이걸 만든 사람들에 의해서 .env REACT_APP으로 시작하는 환경변수를 찾도록 자동으로 설정되어 있다.
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
};

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();
