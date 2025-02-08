import styled from "styled-components";

type WorkPropsType = {
    title?: string
    text?: string
    src?: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt="" />
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={'#'}>Demo</Link>
            <Link href={'#'}>Code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: #c3d255;
    max-width: 540px;
    width: 100%;
`

const Image = styled.img`
    width: 70%;
    height: 260px;
    object-fit: cover;    
`
const Title = styled.h3`
    
`

const Link = styled.a`
    
`

const Text = styled.p`
    
`