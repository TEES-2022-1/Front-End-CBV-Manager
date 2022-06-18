import styled from 'styled-components';

export const Main = styled.div`
   

`;
export const Content = styled.div`

    background-color: #E5E5E5;
 

a {
    color:inherit;
    text-decoration:none;
}

* {
    padding:0;
    margin:0;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
}

.headerPage{
    color:#FFFFFF;
    background-color:#110338;
    height:13.25rem;
    width:100%;
    display:flex;
    align-items:center;
    justify-content: center;
    
    .login{
        display:flex;
        margin-top:10px;
        
        align-items:flex-start;
        height:100%;
       
        &__btLogin{
            justify-content:space-between;
        }
    }
    .brand{
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin-right:7.5rem;
        cursor:pointer;
        transform:scale(1);
        transition:all ease 0.3s;

            &:hover{
                transform:scale(1.1);
            }

            &__icon{
             width:6.25rem;
             height:6.25rem;
             border: 1px solid #110338;
             border-radius: 100%;
            }

            &__title{
             width:1.875rem;
             height:2rem;
             font-family:"Poppins",sans-serif;
             font-weight:600;
             margin-left:0.625rem;
            }  
        }       
    }

.register{
    display:flex;
    flex-direction:column;
    align-items:right;
    width:12.25rem;

 
    &__btsRegisterComp{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        padding-top:30px;
        padding-left:30px;
        width:16.25rem;  
     
        &__btRegisterLeague{
            transform:scale(1);
            transition:all ease 0.3s;

            &:hover{
                transform:scale(1.1);
            }
        }

        &__btRegisterTeam{
            transform:scale(1);
            transition:all ease 0.3s;

            &:hover{
                transform:scale(1.1);
            }
        }

        &__btRegisterPlayer{
            transform:scale(1);
            transition:all ease 0.2s;

            &:hover{
                transform:scale(1.1);
            }
        }
    }

}

}
`;