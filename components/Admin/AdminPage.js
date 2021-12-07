import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/actions/productActions";
import { getAllUsers } from "../../redux/actions/userActions";
import Sidebar from "./Sidebar";

const AdminPage = () => {

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const userLogged = useSelector(state => state.userLogged);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!(userLogged ? userInfo.isAdmin :false )) {
      router.push('/')
    }
    
    const init = async () => {
      await dispatch(getAllUsers())
      await dispatch(listProducts()) 
    }

    init()
  },[])

  return (
    <div>
      <Sidebar />
    </div>
  );
}

export default AdminPage;