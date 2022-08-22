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

   #root{
       margin:0 auto;


       --grayBorder: #E5E5E5;
       /* --grayBorder: red; */
       --white: #fff;
       --black: #000000;

       
   }
`
