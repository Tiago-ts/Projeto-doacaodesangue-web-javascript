import styled from 'styled-components';

export const Content = styled.div`
    position: relative;
    width: 500px;
    background-color: #f2f2f2;
    
    .postinput{
        border: 1px solid #E1E1E1;
        border-radius: 9px;
        padding: 7px;
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        background-color: #FFFF;
        width: 95%;
        .profileinput{
            display: flex;
            justify-content: space-between;
            padding: 5px;
            .profileInfoinput{
                display: flex;
                .imginput{
                    height: 40px;
                    width: 40px;
                    border-radius: 30px;
                    margin-right: 15px;
                    background-image: url(${props => props.image});
                    position: relative;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                }
            }
            .confirm{
                button{
                border: none;
                width: 70px;
                height: 30px;
                border-radius: 7px;
                margin: 5px;
                outline: none;
                background: #3E3E87;
                color: white;
                font-weight: bold;
                transition: background 0.5s;
                &:hover{
                    background: white;
                    color:  #3E3E87; 
                    border: 2px solid   #3E3E87;
                }
                
                }

            }
}
    
        }
        .contentPostinput{
            
            .imgPostinput{
                position: relative;
                border-radius: 5px;
                max-height: 400px;
                display: flex;
                justify-content: center;
                align-items:center;
                overflow: hidden;
                position: relative;
                height: 400px;
}
                img{
                    position: relative;
                    max-height: 100%;
                    width: auto;
                    height: auto;
                }
            }
            textarea{
                width: 95%;
                margin-left: 1px;
                border: none;
                resize: none;
                padding: 10px;
                outline: none;
            }
            input{
                margin-bottom: 10px;
            }
        }
    
`;