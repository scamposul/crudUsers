import React from 'react';

const UsersList = ({users, selectUser, deleteUser}) => {
    return (
        <div>
            <h1>Users list</h1>
            <ul className='list'>
                {
                    users.map((user) => (
                        <li key={user.id} className='box'>
                            <b>id:</b> {user.id}
                            <br />
                            <b>Name:</b> {user.first_name} {user.last_name}
                            <br />
                            <b>Email:</b> {user.email}
                            <br />
                            <b>Password:</b> {user.password}
                            <br />
                            <b>Birthday:</b> {user.birthday}
                            <br />
                            <button onClick={() => selectUser(user)}><i class="fa-solid fa-pen"></i></button>
                            <button onClick={() => deleteUser(user)}><i class="fa-solid fa-trash"></i></button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UsersList;