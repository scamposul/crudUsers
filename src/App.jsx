import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";


function App() {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    axios.get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  }, []);

  const getUser = () => {
    axios.get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  };

  const selectUser = (user) => {
    setUserSelected(user);
    console.log(user);
  };

  const deselectUser = () => setUserSelected(null);

  const deleteUser = (userSelected) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, userSelected)
     .then(() => getUser());
  }

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <button className='newUser' onClick={() => setOpenModal(true)}>Create New User</button>
      <UsersForm
        openModal={openModal}
        onClose={() => setOpenModal(false)}
        getUser={getUser}
        userSelected={userSelected}
        deselectUser={deselectUser}
      />
      <UsersList
        users={users}
        selectUser={selectUser}
        deleteUser={deleteUser}
      />
    </div>
  );
}

export default App;
