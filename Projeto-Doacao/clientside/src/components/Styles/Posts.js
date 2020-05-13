import styled from 'styled-components';

export const Content = styled.div`
    position: relative;
    width: 500px;
    background-color: #f2f2f2;
    overflow: auto;
    ::-webkit-scrollbar { 
display: none; 
}
   
`;
export const Post = styled.div`
        border: 1px solid #E1E1E1;
        border-radius: 9px;
        padding: 7px;
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        background-color: #FFFF;
        width: 95%;
        .profile{
            display: flex;
            .profileInfo{
                display: flex;
                .img{
                    height: 40px;
                    width: 40px;
                    background-image: url(${props => props.image});
                    border-radius: 30px;
                    margin-right: 15px;
                    position: relative;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                }
            }
        }
        .contentPost{
            
            .imgPost{
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
    
`;