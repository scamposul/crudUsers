import React from 'react';
import UsersForm from './UsersForm';
import { useState } from 'react';

const Modal = ({openModal, onClose}) => {

    const [users, setUsers] = useState([]);
    const getUser = () => {
        axios.get("https://users-crud1.herokuapp.com/users/")
          .then((res) => setUsers(res.data));
      };

      const [userSelected, setUserSelected] = useState(null);

      const deselectUser = () => setUserSelected(null);

    if(!openModal) return null;


    return (
      <div className="overlay">
        <div className="modal-container">
          <h2>Aquí debería ir el formulario</h2>
          <div className="modalRight">
            <p onClick={onClose}>X</p>
          </div>
          <UsersForm
            getUser={getUser}
            userSelected={userSelected}
            deselectUser={deselectUser}
          />
        </div>
      </div>
    );
};

export default Modal;