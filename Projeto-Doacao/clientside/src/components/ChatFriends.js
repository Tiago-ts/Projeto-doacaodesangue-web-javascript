import React , { useEffect, useState } from 'react';
import { FriendsChat } from './Styles/ChatFriends'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserAltSlash } from '@fortawesome/free-solid-svg-icons';
export const ChatFriends= () =>{

    return(
        <FriendsChat>
        <div className="searchFriend">
            <label>
                <input></input>
                <FontAwesomeIcon icon={faSearch} />
            </label>
        </div>
        <div className="friends">
            <div className="singlefriends">
                <div className="img">
                    <img alt=''></img>
                </div>
                <div className="info">
                    <p>Name User</p>
                </div>
                <div className="userSlash">
                    <FontAwesomeIcon icon={faUserAltSlash} />
                </div>

            </div>
            <div className="singlefriends">
                <div className="img">
                    <img alt=''></img>
                </div>
                <p>Name User1</p>
            </div>
            <div className="singlefriends">
                <div className="img">
                    <img alt=''></img>
                </div>
                <p>Name User2</p>
            </div>
            <div className="singlefriends">
                <div className="img">
                    <img alt=''></img>
                </div>
                <p>Name User3</p>
            </div>
            <div className="singlefriends">
                <div className="img">
                    <img alt=''></img>
                </div>
                <p>Name User4</p>
            </div>
        </div>
    </FriendsChat>
    )
}