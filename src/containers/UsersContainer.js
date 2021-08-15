import React, { useEffect } from "react";
import Users from "../components/Users";
import { connect } from "react-redux";
import { getUsers } from "../modules/users";
import { Preloader } from "../lib/PreloadContext";

const UsersContainer = ({ users, getUsers }) => {
  useEffect(() => {
    // ssr 에서는 이미 있는 정보를 재 요청하지 않게 처리하는게 중요
    if (users) return;

    getUsers();
  }, [getUsers, users]);

  return (
    <>
      <Users users={users} />
      <Preloader resolve={getUsers} />
    </>
  );
};

// state.users.users ? state.payload.users가 아니고?
export default connect((state) => ({ users: state.users.users }), { getUsers })(
  UsersContainer,
);
