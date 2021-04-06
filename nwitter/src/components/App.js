import React, { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import { authService } from 'fbase';

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    // 실제로 유저들이 로그인이 되었는지 안 되었는지 알 수있다.
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true); // false면 router 숨길 것 이다.
    });
  }, []);

  return (
    <>
      {init ? <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} /> : 'Initializing...'}
      <footer>&copy; {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
