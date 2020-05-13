import styled, { createGlobalStyle, keyframes   } from 'styled-components';

const slidein = keyframes`
from{
left: 0;
width:40%;
}
25%{
  left: 5%;
  width:50%;
}
50%{
  left: 25%;
  width:60%;
}
75%{
  left: 45%;
  width:50%;
}
to{
  left: 60%;
width:40%;
}
`;
const slideout = keyframes`
from{
left: 60%;
width:40%;
}
25%{
  left: 45%;
  width:50%;
}
50%{
  left: 25%;
  width:60%;
}
75%{
  left: 5%;
  width:50%;
}
to{
  left: 0;
width:40%;
}
`;
const deslocamento = keyframes`
from{
left: 0;
opacity: 1;
z-index: 12;
}
25%{
  left: -80px;
  opacity: .5;
}
50%{
  left: -100px;
  opacity: .2;
}
to{
  left: -110px;
  opacity: 0;
  z-index: -1;

}
`;
const deslocamentoRigth= keyframes`
from{
left: 0;
opacity: 1;
z-index: 12;
}
25%{
  left: 80px;
  opacity: .5;
}
50%{
  left: 100px;
  opacity: .2;
}
to{
  left: 110px;
  opacity: 0;
  z-index: -1;

}
`;

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .sign-in-js{
  .first-content{
    .first-column{
      z-index: -1;
    }
    .second-column{
      position: relative;
      z-index: -1;
      animation: ${deslocamento} 1s;
    }
  }
  .second-content{
    .first-column{
      z-index: 14;
    }
    .second-column{
      z-index: 12;
    }
  }
  .content::before{
    left: 60%;
    border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    animation: ${slidein} 1s;
    z-index: 13;
  }
}
.sign-up-js{
  .second-content{
    .first-column{
      z-index: -1;
    }
    .second-column{
      position: relative;
      z-index: -1;
      animation: ${deslocamentoRigth} 1s;
    }
  }
  .first-content{
    .first-column{
      z-index: 14;
    }
    .second-column{
      z-index: 12;
    }
  }
  .content::before{
   z-index: 13;
    animation: ${slideout} 1s;
  }
}
`

export const Container = styled.div`
background-color: #9197ff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(240)'%3E%3Cstop offset='0' stop-color='%239197ff'/%3E%3Cstop offset='1' stop-color='%236148d9'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='540' height='450' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.02'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;


display: flex;
justify-content: center;
align-items:center;
height: 100vh;
background-color: #ecf0f1;
.title{
  font-size:28px;
  font-weight: bold;
  text-transform: capitalize;
}
.title-primary{
  color: #fff;
}
.title-second{
  color: #773CBB;
}
.description{
  font-size: 14px;
  font-weight: 300;

  line-height: 30px;
}
.description-primary{
  color: #fff;
}
.description-second{
  margin: 0;
  color: #7f8c8d;
}
.btn{
  border-radius: 15px;
  text-transform: uppercase;
  color: #fff;
  font-size: 10px;
  padding: 10px 0;
  font-weight: bold;
  cursor: pointer;
  width: 150px;
  align-self: center;
  outline: none;
  border: none;
}
.btn-primary{
  background-color: transparent;
  border: 1px solid #fff;
  transition: background-color .5s;
&:hover{
  background-color: #fff;
  color: #773CBB;
}
}
.btn-second{
  background-color: #773CBB;
  border: 1px solid #773CBB;
  transition: background-color .5s;

&:hover{
  background-color: #fff;
  color: #773CBB;
}
}
.first-content{
  box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
  display: flex;
  position: relative;
  .second-column{
    z-index: 12;
  }
}

.list-social-media{
  list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
  .item-social-media{
    border: 1px solid #bdc3c7;
    border-radius: 50%;
    width: 35px;
    height:35px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px; 
    svg{
      color: #95a5a6;
      }
    
  }
  .form{
    display: flex;
    flex-direction: column;
    width: 55%;
    text-align: center;
    input{
      outline: none;
      height: 45px;
      border: none;
      background-color: #ecf0f1;
      margin: 8px;
      width: 100%;
     
    }
  }
 .label-input{
   border-radius: 2px;
background-color: #ecf0f1;
display:flex;
align-items:center;
margin: 8px;
svg{
  color: #7f8c8d;
  padding: 0 5px;
}
 }
  .content {
    border-radius: 15px;
    background: white;
    width: 960px;
    height: 70%;
    justify-content: space-between;
    align-items:center;
    &:before{
      content: "";
      position: absolute;
      background: #773CBB;
      width: 40%;
      height: 100%;
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
      left: 0;
    }
  }

  .first-column{
    z-index: 1;
    text-align: center;
   width: 40%;
  }
  .second-column{
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .second-content{
   box-shadow: 0 1px 6px 0 rgba(32,33,36,0.28);
  position: absolute;
  display: flex;
  .first-column{
    order: 2;
    z-index: -1;
  }
  .second-column{
    order:1;
    z-index: -1;
  }
  }

.password{
  color: #34495e;
  font-size: 14px;
  margin: 15px 0;
  &::first-letter{
    text-transform: capitalize;
  }
}

`;