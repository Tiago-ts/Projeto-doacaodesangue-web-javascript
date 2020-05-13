import React, { useEffect, useState } from 'react';
import { FriendsChat } from './Styles/Chat'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
export const Chat = () => {

    return (
        <FriendsChat>
            <div className='user'>
            <FontAwesomeIcon icon={faArrowLeft} />
                <h2>nome do cabloco</h2>
            </div>
            <div className='allmessages'>
                <div className="received ">
                    <div className='profileimg'>
                    </div>
                    <div className='ballom'>
                    <p>Teste de recebida</p>
                    </div>
                </div>
                <div className="sent">
                <div className='ballomsent'>
                    <p>Teste de recebida</p>
                    </div>
                </div>
            </div>
            <div  className="send">
                <input></input>
                <div className="sendIco">
                <FontAwesomeIcon icon={faPaperPlane} />

                </div >
            </div>
        </FriendsChat>
    )
}