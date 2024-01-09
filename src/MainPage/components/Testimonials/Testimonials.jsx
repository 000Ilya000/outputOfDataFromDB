import React from 'react';
import ReviewComponent from './components/ReviewComponent/ReviewComponent';
import diana from '../imgs/Diana.jpg';
import kostya from '../imgs/Kostya.jpg';
import anton from '../imgs/Anton.jpg';
import styled from 'styled-components';
const reviews = [
  {
    img: diana,
    text: 'Ilya is an incredible learner! He advances to the middle, solves difficult problems, and asks the right questions',
    name: 'Diana',
    post: 'Front-end developer',
  },
  {
    img: kostya,
    text: 'Not afraid of new things and taking responsibility for his decisions, actively pumping self-propulsion',
    name: 'Kostya',
    post: 'Product manager',
  },
  {
    img: anton,
    text: 'Caring colleague, developer, willing to support the team, share knowledge and solve challenges together',
    name: 'Anton',
    post: 'Front-end developer',
  },
];
const Testimonials = () => (
  <Container>
    <SubTitle>Reviews</SubTitle>
    <Title>Testimonials</Title>
    <ReviewList>
      {reviews.map((item, index) => (
        <ReviewComponent key={index} {...item} />
      ))}
    </ReviewList>
  </Container>
);
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  @media (max-width: 1100px) {
    padding: 600px 0px 80px 0px;
  }
`;
const SubTitle = styled.p`
  color: #656d72;
  font-size: 12px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 7.5px;
  display: flex;
  gap: 16px;
  margin-bottom: 9px;
  align-items: center;
  &::before {
    content: '';
    width: 16px;
    height: 2px;
    background: #d9d9d9;
  }
  @media (max-width: 1100px) {
    justify-content: center;
  }
`;
const Title = styled.p`
  color: #232e35;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 132px;
  @media (max-width: 1100px) {
    margin-bottom: 0;
    width: 100%;
    text-align: center;
  }
`;
const ReviewList = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 80px;
    padding-top: 80px;
  }
`;
export default Testimonials;