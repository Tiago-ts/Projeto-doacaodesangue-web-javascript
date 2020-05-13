import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #f2f2f2;
  }
`
export const TodoContent = styled.div`
position: fixed;
    top: 70px;
    height: 100vh;
    left: 2px;
    right: 2px;
    display: flex;
    justify-content: space-between;
    padding: 0px 10px;
`;

export const Page = styled.div`
position: absolute;
width: 100%;
`;
export const Profile = styled.div`
position: relative;
width: 200px;
height: 100vh;
    margin-top: -38px;
    margin-right: -13px;
.contentProfile{
    text-align: center;
    border-radius: 5px;
    position: absolute;
    width: 100%;
    background-color: #6666CC;
    height: 100%;
    
    .circleProfile{
        
        width: 115px;
        height: 115px;
        background-color: #3E3E87;
        border-radius: 80px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 15px;
        background-image: url(${props => props.image});
        position: relative;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        .uploadImage{
            display: none;
            border-radius: 80px;
            width: 100%;
            height: 100%;
            position: relative;
            background-color: rgba(153, 153, 153, 0.9);
            justify-content: center;
            align-items: center;
            svg{
                color: white;
                width: 30px;
                height: 30px;
            }
            input{
                display: none;
            }
        }
        &:hover{
            .uploadImage{
            display: flex;

            }
        }
    }
    .infoProfile{
        width: 173px;
        height: 285px;
        background: #3E3E87;
        margin-left: auto;
        margin-right: auto;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        ul{
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            outline: none;
            text-decoration: none;
            list-style-type: none;
            color:  #ECECEF;
            li{
                margin-bottom: 4px;
                display: flex;
            }
            
        }
        .friendscont{
            background: #6666CC;
            min-width: 25px;
            border-radius: 5px;
            margin-left: 5px;
        }
    }
}
`;

export const Navbar = styled.div`
position: fixed;
width: 100%;
height: 40px;
display:flex;
justify-content: center;
align-items: center;
background-color: #6666CC;
.logo{
    display:flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    img{
        width: auto;
        height: 30px; 
    }
}
.search{
    position: relative;
    display:flex;
    justify-content: center;
    align-items: center;
    
    width: 60%;
    .label-input{
        display: flex;
        align-items: center;
        background: #3E3E87;
        border-radius: 5px;
        input{
        margin: 1px;
        background: #3E3E87;
        outline: none;
        border: none;
        border-radius: 5px;
        height: 20px;
        width: 300px;
        color: white;
    }
    .svg{
        padding: 10px;
        cursor: pointer;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        display:flex;
        justify-content: center;
        align-items: center;
        width: 12%;
        background-color: #ECECEF;
        height: 8px;
      
    }
    }
  
}
.logout{
    width: 20%;
    svg{
        cursor: pointer;
    color: #ECECEF;
    float: right;
    margin-right: 10px;
    width: 30px;
    height: 30px;
    &:hover{
        color:#3E3E87;
    }
    }
}
`;
