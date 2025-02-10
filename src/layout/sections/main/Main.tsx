import styled from 'styled-components';
import photo from '../../../assets/img/MainAvatar-_1_.webp'
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                    <span>HI EVERYONE</span>
                    <Name>Sharapov Nikolay</Name>
                    <MainTitle>A Web Developer</MainTitle>
                </div>

                {/* <Photo src={photo} alt="" /> */}
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div `
    min-height: 100vh;
    background-color: #444245;
    color: black;
`

// const Photo = styled.img`
//     width: 1920px;
//     height: 993px;
//     object-fit: cover;
// `

const MainTitle = styled.h1 `
    
`

const Name = styled.h1 `

`