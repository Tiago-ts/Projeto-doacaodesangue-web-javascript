import styled from 'styled-components';

export const FriendsChat = styled.div`

    position: relative;
    width: 300px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #E1E1E1;
.user{
    margin-bottom: 10px;
    display: flex;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    height: 6%;
    width: 100%;
    background: #3E3E87;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 8px 6px -6px black;
    color: white;
}
.allmessages{
    width: 92%;
    height: 70%;
    .received{
        display: flex;
        position: relative;
        margin-bottom: 5px;
          .ballom{
        width: 70%;
        border-radius: 15px;
        background: #6666CC;
        color: #fff;
        padding: 5px 0px 5px 20px;
        font-weight: bold;
        font-family: arial;
        position: relative;
        p{
        }
        &:before{
            content: "";
            width: 0px;
            height: 0px;
            position: absolute;
            border-left: 15px solid transparent;
            border-right: 15px solid #6666CC;
            border-top: 15px solid #6666CC;
            border-bottom: 15px solid transparent;
            left: -16px;
            top: 0px;
    }
    }
    .profileimg{
        height: 40px;
        width: 15%;
        background: blue;
        border-radius: 30px;
        margin-right: 15px;
}
        }
        .sent{
        width: 92%;
        position: relative;
    .ballomsent{
        width: 92%;
        border-radius: 15px;
        background: #6666CC;
        color: #fff;
        padding: 5px 0px 5px 20px;
        font-weight: bold;
        font-family: arial;
        position: relative
        p{
        }
        &:before{
            content: "";
            width: 0px;
            height: 0px;
            position: absolute;
            border-right: 15px solid transparent;
            border-left: 15px solid #6666CC;
            border-top: 15px solid #6666CC;
            border-bottom: 15px solid transparent;
            right: -16px;
            top: 0px;
    }
    }
    }
    }
    .send{
        display: flex;
        align-items: center;
        justify-content: center;
        width:95%;
        input{
            width: 85%;
            border: none;
            min-height: 30px;
            margin: 5px;
            box-shadow: inset 0 0 29px #3E3E87;
            background: #6666CC;
            border-radius: 5px;
            outline: none;
            color: white;
        }
    
        .sendIco{
            display: flex;
    width: 35px;
    height: 35px;
    background: #3E3E87;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    color: white;
        }
    }

`;

