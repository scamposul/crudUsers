import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({getUser, userSelected, deselectUser, openModal, onClose}) => {

    if(!openModal) return null;

    const {register, handleSubmit, reset} = useForm();

    useEffect(() => {
        if(userSelected) {
            reset(userSelected);
        }
    }, [userSelected])

    const submit = (data) => {
        if(userSelected) {
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, data)
              .then(() => getUser());
        } else {
            axios.post('https://users-crud1.herokuapp.com/users/', data)
          .then(() => getUser())
          .catch(error => console.log(error.response));
        console.log(data);
        }
        getUser();
        clear();
        onClose();
    }

    const clear = () => {
        reset({
            first_name: '', 
            last_name: '', 
            email: '', 
            password: '', 
            birthday: ''
        });
        deselectUser();
    }

    return (
        <form onSubmit={handleSubmit(submit)} className='usersForm'>
            <p className='closeBtn' onClick={onClose}>X</p>
            <h1>Add user</h1>
            <div className='input-container'>
                <label htmlFor="first_name">First name</label>
                <input type="text" {...register('first_name')} />
            </div>
            <div className='input-container'>
                <label htmlFor="last_name">Last name</label>
                <input type="text" {...register('last_name')} />
            </div>
            <div className='input-container'>
                <label htmlFor="email">Email</label>
                <input type="email" {...register('email')} />
            </div>
            <div className='input-container'>
                <label htmlFor="password">Password</label>
                <input type="text" {...register('password')} />
            </div>
            <div className='input-container'>
                <label htmlFor="birthday">Birthday</label>
                <input type="date" {...register('birthday')}/>
            </div>
            <button><i class="fa-solid fa-square-plus">Submit</i></button>
            <button onClick={clear} type='button'><i class="fa-solid fa-broom">Clear</i></button>
        </form>
    );
};

export default UsersForm;