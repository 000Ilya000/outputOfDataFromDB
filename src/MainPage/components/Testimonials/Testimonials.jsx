import React, { useEffect, useState } from 'react';
import ReviewComponent from './components/ReviewComponent/ReviewComponent';
import styled from 'styled-components';

function Testimonials() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/reviews")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Возникла ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <Container>
        <SubTitle>Reviews</SubTitle>
        <Title>Testimonials</Title>
        <ReviewList>
          {items.map((item, index) => (
            <ReviewComponent key={index} {...item} />
          ))}
        </ReviewList>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  @media (max-width: 1100px) {
    padding: 600px 0 80px 0;
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