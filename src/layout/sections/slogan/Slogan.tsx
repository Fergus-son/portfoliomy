import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle>I Am Available For Freelance</SectionTitle>
            <Button color="white">HIRE ME</Button>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
        min-height: 30vh;
        text-align: center;
`