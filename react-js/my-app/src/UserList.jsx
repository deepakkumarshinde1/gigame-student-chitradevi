import { useEffect } from "react";
import { getUserList } from "./redux/services/user.service";
import { useDispatch, useSelector } from "react-redux";

function UserList() {
  let dispatch = useDispatch();
  let { users, loading, error } = useSelector((state) => state.userSlice);
  // on mount call a api
  useEffect(() => {
    dispatch(getUserList());
  }, []);
  return (
    <center>
      UserList
      <div>{loading && "Loading ..."}</div>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </center>
  );
}

export default UserList;
