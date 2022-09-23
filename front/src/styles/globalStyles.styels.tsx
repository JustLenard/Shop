import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Open Sans', sans-serif; 

   }

   img{
    width: 100%;
    height: 100%;
   }
   
   a{
    text-decoration: none;
   }

   #root{
       margin:0 auto;


       --grayBorder: #E5E5E5;
       --mutedGray: rgb(202, 202, 202);
       --mutedText: #888888;

       --white: #fff;
       --black: #000000;
       --green: #5ECE7B;

       --redButton: #eb3434;

       --hoverBlue: #005eb8;
       
   }

`
