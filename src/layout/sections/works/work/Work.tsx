import styled from "styled-components";
import { SectionLink } from "../../../../components/SectionLink";
import { Theme } from "../../../../styles/Theme";
import { Button } from "../../../../components/Button";

type WorkPropsType = {
    title?: string
    text?: string
    src?: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Description>
                <ImageWrapper>
                    <Image src={props.src} alt="" />
                    <Button color="white">view project</Button>
                </ImageWrapper>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <SectionLink textcolor="white" href={'#'}>Demo</SectionLink>
                <SectionLink textcolor="white" href={'#'}>Code</SectionLink>
            </Description>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: ${Theme.colors.secondaryBg};
    max-width: 540px;
    width: 100%;
    border-radius: 50px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.7);
    text-align: center;
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;    
    border-radius: 20px;
`
const Title = styled.h3`
    font-family: 'Jost';
    display: inline-block;
    font-size: 30px;
    font-weight: 120;
    position: relative;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 1);
    color: white;

    &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px; 
    width: 100%; 
    height: 2px; 
    background-color: white; 
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 1);
  }
`

const Text = styled.p`
    margin: 14px 0 10px;
    background-color: white;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 50px;
    padding: 10px 0 10px 20px;
    text-align: center;
`

const Description = styled.div`
    padding: 25px 20px;
`

const ImageWrapper = styled.div`
  position: relative;
  
  &:hover {
      &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
        border-radius: 20px;
    }
    
    ${Button} {
        opacity: 1;

    }
  }

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    &::before {
        width: 100%;
        height: 100%;
    }
  }
`

