import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { FlexWrapper } from '../../../../components/FlexWrapper';

type SkillPropsType = {
    iconId: string
    title: string
    // description: string
}

export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction='column' align='center'>
            <Icon iconId={props.iconId} />
            <SkillTitle>{props.title}</SkillTitle>
            {/* <SkillText>{props.description}</SkillText> */}
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 300px;
    padding: 62px 20px 40px;
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */
    /* margin: 30px; */
    /* background-color: #bdb9b9; */
    /* text-align: center; */
`
const SkillTitle = styled.h3 `

`
// const SkillText = styled.p`

// `