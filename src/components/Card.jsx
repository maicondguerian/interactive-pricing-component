import * as React from 'react';
import * as S from '../styles/styled-components/globalStyles';
import { LastComponent as SubmitComponent } from './SubscribeComponent';
import { InputToggle } from './InputToggle';
import { useInputHooksContext } from '../contexts/GlobalContext';

const PriceComponent = () => {
    const { rangeValue, setRangeValue, setIsCheck, isCheck, newvalue } = useInputHooksContext();
    const inputRef = React.useRef(null);
    const formatter = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })
    React.useEffect(() => {
        inputRef.current.style.background = `linear-gradient(90deg, hsl(174, 77%, 80%) ${rangeValue}%, hsl(224, 65%, 95%) ${rangeValue}%)`;
      }, [rangeValue]);
      
    return (
        <ul>
            <li>100k pageviews </li>
            <li>{isCheck ? formatter.format(newvalue) : formatter.format(rangeValue)} <span>/ month</span></li>
            <input
                aria-label='inputRange'
                id="range"
                type="range"
                ref={inputRef} value={rangeValue}
                onChange={(event) => {
                    setRangeValue(event.target.value);
                    setIsCheck(false);
                }}
            />
        </ul>
    );
};

const Card = () => {
    const [displayText, setDisplayText] = React.useState('25% discount');

    React.useEffect(() => {
        const handleResize = () => {
            if (window.matchMedia("(max-width: 740px)").matches) {
                setDisplayText('-25%');
            } else {
                setDisplayText('25% discount');
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize); 

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <S.StyledCard>
            <PriceComponent />
            <S.MidDiv>
                Monthy Billing
                <InputToggle />
                Yearly Billing <span>{displayText}</span>
            </S.MidDiv>
            <S.Divider />
            <SubmitComponent />
        </S.StyledCard>
    );
};

export default Card;