import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>CONTACTS</SectionTitle>
            <StyledForm>
                <Field placeholder="name" />
                <Field placeholder="subject" />
                <Field placeholder="message" as={'textarea'}/>
                <Button color="black" type="submit">Send message</Button>
            </StyledForm>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    min-height: 50vh;
    background-color: #3e2a2a;
`

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`

const Field = styled.input`
    
`
