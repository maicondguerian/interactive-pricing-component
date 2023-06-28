import React from 'react'
import { styled } from 'styled-components'

const Teste = styled.div`

`

const Containers = styled.main`
    background-image: url('/bg-pattern.svg');
    background-repeat: no-repeat;
    background-size: auto;
    background-position: top left;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 100;

    &::after{
        content: '';
        height: 449px;
        width: 500px;
        background-color: #F1F5FE;
        position: absolute;
        display: block;
        right: 0;
        top: 0;
        z-index: 0;
    }

    >div:first-of-type{
        display: flex;
        flex-direction: column;
        z-index: 100;
        align-items: center;
        background-image: url(/pattern-circles.svg);
        background-repeat: no-repeat;
        background-position: top center;
        background-size: contain;
        width: 100%;
        height: 200px;
        margin-bottom: 50px;
        margin-top: -150px;

        h1{
            font-size: 30px;
            color: ${props => props.theme.primaryColors.DarkDesaturatedBlue};

        }

        span{
            font-size: 16px;
            font-weight: 600;
            color: ${props => props.theme.primaryColors.GrayishBlue};
        }

        @media screen and (max-width: 740px){
            margin-top: 0;

            h1{
                font-size: 25px;
            }

            span{
                text-align: center;
            }
        }
    }
`
const Container = ({ children }) => {
    return (
        <Containers>
            <div>
                <h1>
                    Simple, traffic-based pricing
                </h1>
                <span>Sign-up for our 30-day trial. No credit card required.</span>
            </div>
            {children}
        </Containers>
    )
}

export default Container;