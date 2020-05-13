import styled  from 'styled-components';
export const SearchContent = styled.div`
    z-index: 2;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    width: 338px;
    height: auto;
    background: white;
    margin-top: 40px;
    padding: 5px;
    border-radius: 5px;
    border: 2px solid #E1E1E1;
    max-height: 230px;
    overflow: auto;
}

`;
export const Person = styled.div`
    border-radius: 5px;
    margin: 5px;
    width: 95%;
    height: 60px;
    display: flex;
    background: #f2f2f2;
    border: 1px solid #E1E1E1;
    align-items: center;
    padding: 5px;
    justify-content: space-around;
    transition: 0.5s;
.img{
    width: 13%;
    height: 40px;
    border-radius: 40px;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

}
.name{
    width: 70%;
    height: 20px;
    color: #3E3E87;
    font-weight: bold;
}
.add{
    width: 11%;
    height: 35px;
    border-radius: 40px;
    color: #3E3E87;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    &:hover{
        background: #3E3E87;
        color: white;
    }
}
&:hover{
        background: #E1E1E1;
    }

`;