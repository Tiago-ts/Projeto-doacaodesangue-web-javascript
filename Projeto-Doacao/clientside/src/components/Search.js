import React, { useEffect, useState } from 'react';
import { SearchContent, Person } from './Styles/Search'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { getAllUsers, addNewFriend, getFriends } from './functions/UserFunctions';
import jwt from 'jwt-decode';
export const Search = (input) => {
    const [users, setUsers] = useState([]);
    const [usersFilters, setUsersFilters] = useState([]);
    const userId = jwt(localStorage.token).id
    const searchingFor = (term) => {
        return (x) => {
            return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
        }
    }
    const filterData = (data) => {
        let dataFilter = users.filter(searchingFor(data)).map((x) => {
            return x;
        })
        setUsersFilters(dataFilter)
    }
    useEffect(() => {
        filterData(input.input);
    }, [input.input]);
    useEffect(() => {
        filterData(input.input);
    }, [users]);
    useEffect(() => {
        getUsers();
    }, []);
    const getUsers = async () => {
        const newArray = [];
        getAllUsers(localStorage.token).then(response => {
            if (response) {
                response.map((y)=>{
                    let index = input.friends.findIndex((x)=>{return x.friend._id === y._id})
                    if(index === -1 && y._id !== userId){
                        newArray.push(y) 
                    }
                })
                return setUsers(newArray);
            }
        })
    }
    const addFriend = (id, index)=>{
        input.clear();
        addNewFriend({friend: id}, localStorage.token).then(response =>{
            getFriends(localStorage.token).then(response =>{
                input.setFriends(response.friendsData)
                setUsers(users.splice(users.findIndex((x)=>{return x._id === id})))
             })
        })
    }
    return (
        <SearchContent>
            {usersFilters.map((values, index) => {
                return (
                    <Person image={values.profileImage}>
                        <div className='img'>
                        </div>
                        <div className='name'>
                            {values.name}
                        </div>
                        <div className='add'>
                            <FontAwesomeIcon icon={faUserPlus} onClick={()=>{addFriend(values._id, index)}}/>
                        </div>
                    </Person>
                )
            })}



        </SearchContent>
    )
}