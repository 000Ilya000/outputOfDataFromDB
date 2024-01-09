import React from 'react';
import styled from 'styled-components';
import Testimonials from './components/Testimonials/Testimonials';

function MainPage() {
    return (
        <Wrapper>
            <Testimonials />
        </Wrapper>
    );
}

export default MainPage;

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`