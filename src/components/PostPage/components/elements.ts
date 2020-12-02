import styled from "styled-components";
import { Link } from "react-router-dom";
import { Selectbox } from "../../../designsystem/SelectBox";

export const Root = styled.div`
    height: auto;
    margin: 20px 0;
`;

export const Section = styled.section`
    height: 100%;
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
    margin-bottom: 4px;
`;

export const TitleBox = styled.div`

`;
export const Title = styled.p`

`;

export const TabSelectBox = styled(Selectbox)`
    
`;
export const Box = styled.ul`
    margin: 0;
    border-top: 1px solid #ebebeb;
`;

export const Item = styled.li`
    list-style: none;
`;

export const StyleLink = styled(Link)``;
export const ItemTitle = styled.span`

`;

export const TextArea = styled.textarea`
    display: block;
    width: 100%;
    min-height: 100px;
    max-height: 500px;
    padding: 8px;
    resize: vertical;
    border: 1px solid;
    font-size: 16px;
`;

export const TitleArea = styled.input`
    display: block;
    width: 100%;
    min-height: 50px;
    max-height: 500px;
    padding: 8px;
    resize: vertical;
    border: 1px solid;
    font-size: 20px;
    autocomplete: off;
`;
export const Text = styled.p`

`;

export const DataTime = styled.p`

`;

export const SubmitButton = styled.button`
    margin-top: 20px;
    background: #D3DBE2;
    letter-spacing: .5rem;
    text-transform: uppercase;
    border: 1px solid black;
    width: 100%;
    height: 44px;
`;