import styled from "styled-components";

export const Main = styled.div`
   width:100%;
   height:100vh;

`;

export const TableContent = styled.div`
 margin-left:10px;
 padding-bottom:20px;
        
 .tableClassification{
        border:1px solid #000000;
        border-collapse: collapse;
        width:70%;
       
        
     td, th{
        padding:10px;
        border: 1px solid #000000;
     }

     th{
        text-align:left;
        padding-top:12px;
        padding-top:12px;
        background-color:#E5E5E5;
     }
     
      tr:nth-child(-n+9){
         background-color: hsla(120, 100%, 75%, 0.3);
     }
     td{
        text-align:left;
     }
 }



           
`;

