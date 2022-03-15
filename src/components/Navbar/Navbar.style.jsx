import styled from 'styled-components';

export const StyledDiv = styled.div`
  /* background: #def; */
  width: 90%;
  height: 4rem;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    font-size: 1.5rem;
    color: black;
  }
  .logo {
    font-size: 2rem;
  }
  .cart {
    position: relative;
    span {
      position: absolute;
      top: 5px;
      left: -5px;
      height: 15px;
      width: 15px;
      background: red;
      font-size: 0.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }
  }
`;
