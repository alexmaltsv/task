import styled from 'styled-components';

export const EventsFormWrapper = styled.form`
    max-width: 400px;
    width: 100vw;
`;

export const EventsFormFooter = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;

export const EventsFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const EventsFormField = styled.div`
    margin-bottom: 12px;
    
    &:last-child {
        margin-bottom: 0;
    }
`;

export const EventsFormTitle = styled.div`
    padding-top: 20px;
    text-align: center;
    font-weight: bold;
`;

export const EventsFormError = styled.div`
    text-align: center;
    color: red;
`;
