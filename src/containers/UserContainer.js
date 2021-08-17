import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "../components/User";
import { Preloader, usePreloader } from "../lib/PreloadContext";
import { getUser } from "../modules/users";

const UserContainer = ({ id }) => {
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();

  usePreloader(() => dispatch(getUser(id))); // ssr할때 API 호출하기

  useEffect(() => {
    // 사용자가 존재하고 id가 일치한다면 요청하지 않음.
    if (user && user.id === parseInt(id, 10)) return;
    dispatch(getUser(id));
  }, [dispatch, id, user]);

  // 컨테이너 유효성 검사 후 return null을 해야하는 경우에 null 대신 preloader반환
  if (!user) return null;

  return <User user={user} />;
};

export default UserContainer;
