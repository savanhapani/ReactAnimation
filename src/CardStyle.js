
import styled from 'styled-components';
import img from 'C:/Users/savan hapani/react/intership/main_project/src/dark-hardwood-background-background-wallpaper-5c74078612cfe.jpg';
import img1 from 'C:/Users/savan hapani/react/intership/main_project/src/images.jpg';




export const CardBox=styled.div`
       width: 330px;
       height: 330px;
       transition:all 0.6s ease;
       transform-style: preserve-3d;
       text-align:center;
       margin:28px;
    
       
       


       &:hover{
           transform: rotateY(180deg);
       }

       .back{
        transform: rotateY(180deg);
        background: url(${img1});
        color:white
       }

       .front
       {
           background:  url(${img});
           background-size: cover;
           color:white;
       }

       .front, .back{
           position: absolute;
           width: 330px;
           height: 330px;
           backface-visibility:hidden;
           border-radius: 15px;
           display:flex;
           align-items: center;
           justify-content:center;
       }

       


    `;
    