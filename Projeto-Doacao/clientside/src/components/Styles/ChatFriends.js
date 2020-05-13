import styled from 'styled-components';

export const FriendsChat = styled.div`

position: relative;
width: 300px;
background-color: #3E3E87;
.searchFriend{
    border-bottom: 1px solid white;
    margin-bottom: 5px;
    margin: 0px 5px;
    label{
        margin: 5px;
        border-radius: 5px;
        background-color: #F2F2F2;
        height: 40px;
        display: flex;
        align-items: center;
        input{
            height: 30px;
            width: 90%;
            border: none;
            border-radius: 5px;
            background-color: #F2F2F2;
            outline: none;
            margin: 3px;
}
        }
      
    }
}
.friends{
    .singlefriends{
        display: flex;
        align-items: center;
        margin: 10px;
        box-shadow: -1px 5px 8px -4px rgba(0,0,0,0.69);
        border-radius: 5px;
        padding: 5px;
        color: #F2F2F2;
        font-weight: bold;
        transition: background-color .3s linear;
        .img{
                    height: 40px;
                    width: 40px;
                    background: blue;
                    border-radius: 30px;
                    margin-right: 15px;
        }
        .info{
            width: 60%;
        }
        .userSlash{
            &:hover{
                svg{
                width: 1.65em;
                height:1.3em;
        }
            }
           
        }
        &:hover{
            background: #3E3EAE;
        }
    }
}
`;
   
