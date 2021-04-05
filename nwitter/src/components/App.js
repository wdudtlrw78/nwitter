import React, { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import { authService } from 'fbase';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser); //authService.currentUser 이 부분에서 로드될 때 너무 빠르게 흘러가서 실제로 로그인인지 아닌지 판단할 수 없다
  // 그래서 항상 로그아웃이 된다. 바로 즉시 왜냐하면 firebase가 초기화되고 모든 걸 로드할 때까지 기다려줄 시간이 없기때문

  useEffect(() => {
    // 실제로 유저들이 로그인이 되었는지 안 되었는지 알 수있다.
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true); // false면 router 숨길 것 이다.
    });
  }, []);

  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : 'Initializing...'}
      <footer>&copy; {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
