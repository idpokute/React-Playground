import React, { createContext, useContext } from "react";

// 클라이언트 환경: null
// 서버 환경: {done: false, promises: []}
const PreloadContext = createContext(null);

export default PreloadContext;

// 아무것도 그리지 않는 컴포넌트로, 렌더링 될때 서버 환경에서 resolve 함수를 호출해준다.
export const Preloader = ({ resolve }) => {
  const preloadContext = useContext(PreloadContext);

  if (!preloadContext) return null; // Context 값이 유효하지 않다면 아무것도 하지 않음

  if (preloadContext.done) return null; // 이미 작업이 끝났다면 아무것도 하지 않음

  // promise 배열에 프로미스 등록
  // resolve 함수가 프로미스를 반환하지 않더라도, 프로미스 취급을 하기 위해 promise.resolve 함수 사용
  preloadContext.promises.push(Promise.resolve(resolve()));
  return null;
};

console.log("done preloadcontext.js");
