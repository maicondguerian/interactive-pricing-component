import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    list-style: none;
    font-family: 'Manrope', sans-serif;
    font-size: 15px;

    input[type='range']{
        appearance: none;
        width: 100%;
        height: 10px;
        opacity: .7; 
        border-radius: 10px;
        position: relative;
        cursor: pointer;
    }

    input[type='range']::-webkit-slider-thumb{
        appearance: none;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background-color: ${props => props.theme.primaryColors.StrongCyan};
        background-image: url('/icon-slider.svg');
        background-repeat: no-repeat;
        background-size: auto;
        background-position: center;
        box-shadow: 0px 10px 25px 0px hsl(174, 86%, 45%);

        &:active{
            background-color: hsl(175, 100%, 30%);
        }
    }
}

body{
    margin: 0;
    padding: 0;
}

`
export const StyledCard = styled.div`
    height: 400px;
    width: 600px;
    display: flex;
    flex-direction: column;
    /* gap: 1.2rem; */
    border-radius: 10px;
    background-color: ${props => props.theme.primaryColors.White};
    box-shadow: 0 0.063rem 0.188rem rgb(31 50 81 / 12%), 0 0.063rem 0.125rem rgb(31 50 81 / 24%);
    padding: 3rem 2.3rem .5rem;
    z-index: 1000;
    overflow: hidden;

    input{
        margin: 1.6rem 0;
    }
        >ul{
        display: flex;
        align-items: center;
        gap: 1.2rem;
        justify-content: space-between;
        padding: 0;
        flex-wrap: wrap;
        margin: 0;

        li:nth-child(1){
            text-transform: uppercase;
            letter-spacing: 1.5px;
            font-weight: 600;
            word-spacing: 1px;
            color: ${props => props.theme.primaryColors.GrayishBlue};
        }
        
        li:nth-child(2){
            font-size: 34px;
            font-weight: 800;
            color: ${props => props.theme.primaryColors.DarkDesaturatedBlue};
            display: flex;
            align-items: center;
            gap: .3rem;
        
            span{
                font-weight: 600!important;
                font-size: 15px;
                font-weight: unset;
                color: ${props => props.theme.primaryColors.GrayishBlue};
            }
        }
    }

    @media screen and (max-width: 740px){
        padding: 2rem 1.7rem;
        height: 550px;
        width: calc(100% - 2.3rem);
        gap: 0;

         ul{
            flex-direction: column;
        }
         input{
            order: -1;
            margin: 2rem 0;
        }

        >ul li:nth-child(1){
            order: -1;
        }
    }
`;


export const MidDiv = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-end;
   font-size: 13px;
   gap: .8rem;
   color: ${props => props.theme.primaryColors.GrayishBlue};
   font-weight: 600;
   margin-right: 1.5rem;
   height: 100%;
   
   >span{
       color: ${props => props.theme.primaryColors.LightRed};
       background-color: ${props => props.theme.primaryColors.LightGrayishRed};
       border-radius: 10px;
       width: 105px;
       padding: 2px;
       font-size: 13px;
       font-weight: 700;
       text-align: center;
   }

    .switch {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 24px;
        border-radius: 50%;
        cursor: pointer;
    }

    .switch input{
        opacity: 0; 
        width: 0;
        height: 0;
    }

    .slider{
        background-color: ${props => props.theme.primaryColors.LightGrayishBlue};
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transition: .4s;
        border-radius: 20px;
    }

    .slider::before{
        content: '';
        position: absolute;
        height: 20px;
        width: 20px;
        bottom: 2px;
        left: 2px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
        box-shadow: 0 0.063rem 0.188rem rgb(31 50 81 / 12%), 0 0.063rem 0.125rem rgb(31 50 81 / 24%);
    }

    input:checked + .slider{
        background-color: ${props => props.theme.primaryColors.StrongCyan};
    }

    input:checked + .slider::before{
        transition: .4s;
        transform: translateX(26px);
    } 

    @media screen and (max-width: 740px){
       min-width: calc(100% + 1rem);
        font-size: 13px;
        margin-right: -10px;

        >span{
            width: 50px;
        }
    }
`

export const Divider = styled.span`
    width: calc(100% + 5rem);
    margin-left: -2.5rem;
    height: 2px;
    background-color: ${props => props.theme.primaryColors.LightGrayishBlue1};
    opacity: .7;
`

export const BenefitsWrapper = styled.div`
    color: ${props => props.theme.primaryColors.GrayishBlue};
    display: flex;
    align-items: center;
    margin-top: .5rem;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    font-weight: 500;


    ul{
        margin: 1.5rem 0;
        padding: 0;
    }

    li{

        width: 100%;
        display: flex;
        position: relative;
        align-items: center;
        gap: 1rem;
        line-height: 2;
        font-size: 14px;
      img{
        width: 12px;
        height: 12px;
      }
    }

    button{
        background-color: ${props => props.theme.primaryColors.DarkDesaturatedBlue};
        color: ${props => props.theme.primaryColors.White};
        box-shadow: 0 0.063rem 0.188rem rgb(31 50 81 / 12%), 0 0.063rem 0.125rem rgb(31 50 81 / 24%);
        border-radius: 20px;
        border: none;
        width: 165px;
        height: 40px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        margin-right: .5rem;
    }

    @media screen and (max-width: 740px){
       flex-direction: column;

       li{
        text-align: center;
        
       }

    }
`