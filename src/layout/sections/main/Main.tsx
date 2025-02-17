import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import photo from '../../../assets/img/MainAvatar1.jpg';
import { Container } from '../../../components/Container';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'left'} justify={'flex-start'}>
                    <MainText>
                        <SmallText>HI EVERYONE</SmallText>
                        <Name>Sharapov Nikolay</Name>
                        <MainTitle>A Web Developer</MainTitle>
                    </MainText>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    display: flex;
    align-items: center;
    min-height: 100vh;
    background-image: url(${photo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center ;
    
`
const MainText = styled.div`

`

const MainTitle = styled.h1`
    font-weight: 400;
    background-color: #3333334e;
    text-align: center;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`

const Name = styled.h1`
    font-weight: 600;
    font-size: 50px;
    /* margin: -5px; */
    /* text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.8); */

`

const SmallText = styled.p`
    font-family: 'Inconsolata';
    text-align: center;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
    /* background: linear-gradient(10deg, #121212, #e9e7e5); */
    /* border: 1px solid black; */
    /* background-color: white; */
    /* background-color: #3333334e; */
`


// const Photo = styled.img `
//     position: center;
//     left: 0;
//     right: 0;
//     z-index: -1;
// `