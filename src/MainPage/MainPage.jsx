import React from 'react';
import styled from 'styled-components';

function MainPage() {
    return (
        <Wrapper></Wrapper>
    );
}

export default MainPage;

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    padding-left: 120px;
    gap: 130px;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    /* пример шрифта */
    /* font-family: 'Inter', sans-serif; */
`