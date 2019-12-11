import styled from 'styled-components';
const Cover = styled.figure`
  margin: 30px 0;
  border-radius: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export { Cover };
