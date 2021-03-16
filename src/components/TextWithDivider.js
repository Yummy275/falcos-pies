import React from 'react';
import styled from 'styled-components';

const Word = styled.div`
    width: 90%;
    padding: 1rem 0;
    margin: 0 auto;
    font-size: 1.2rem;
    border-bottom: 1px solid grey;
`;

const TextWithDivider = ({ word }) => {
    return <Word>{word}</Word>;
};

export default TextWithDivider;
