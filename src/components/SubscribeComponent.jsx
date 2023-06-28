import * as S from '../styles/styled-components/globalStyles';
import { CheckList as CheckListIcon } from './CheckListIcon';

export const LastComponent = () => {
    return (
        <S.BenefitsWrapper>
            <ul>
                <li><CheckListIcon />Unlimited websites</li>
                <li><CheckListIcon />100% data ownership</li>
                <li><CheckListIcon />Email reports</li>
            </ul>
            <button>Start My trial</button>
        </S.BenefitsWrapper>
    );
};