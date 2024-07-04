import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./app/data/dataSlice";

const ListUsers = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.users.loading);

  console.log(loading)

  return <div>ListUsers</div>;
};

export default ListUsers;
