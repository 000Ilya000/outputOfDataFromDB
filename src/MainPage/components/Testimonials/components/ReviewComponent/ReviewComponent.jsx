import React from 'react';
import styled from 'styled-components';
const ReviewComponent = ({ img, text, name, post }) => (
  <Container>
    <Avatar img={img} />
    <Text>{text}</Text>
    <InfoBlock>
      <Name>{name}</Name>
      <Post>{post}</Post>
    </InfoBlock>
  </Container>
);
const Container = styled.div`
  width: 360px;
  height: 289px;
  border-radius: 8px;
  background: #fbfbfb;
  padding: 0px 18px 29px 32px;
  gap: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: flex-end;
`;
const Avatar = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 1000px;
  border: 2px solid var(--White, #fff);
  background: url(${(props) => props.img}), lightgray 50% / cover no-repeat;
  background-size: cover;
  position: absolute;
  top: -45px;
`;
const Text = styled.p`
  color: #232e35;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
`;
const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  width: 100%;
`;
const Name = styled.p`
  color: #232e35;
  font-size: 14px;
  font-weight: 500;
`;
const Post = styled.p`
  color: #656d72;
  font-size: 12px;
  font-weight: 500;
  padding: 4px 8px;
`;
export default ReviewComponent;