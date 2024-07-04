import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./app/data/dataSlice";

const ListUsers = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.users.loading);

  const listUsers = useSelector((state) => state.users.listUsers);

  console.log(listUsers);

  useEffect(() => {
    dispatch(fetchUsers(2));
    //manejar un servicio como hemos hecho antes y cuando tengo la data recien hacer un dispatch con un acción normalita????
  }, []);

  return (
    <>
      {listUsers.map((user) => (
        <p key={user.id}>{user.first_name}</p>
      ))}
    </>
  );
};

export default ListUsers;
