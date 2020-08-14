import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 5px;
  display: flex;
`;

const Icon = styled.div`
  height: 10px;
  object-fit: contain;
`;

const Text = styled.div``;

const HeaderIcon = () => (
  <Container>
    <Text>로그인</Text>
  </Container>
);

export default HeaderIcon;
