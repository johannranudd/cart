import styled from 'styled-components';

export const StyledDiv = styled.div`
  /* position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 4rem;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center; */

  width: 90%;
  height: 4rem;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
    font-size: 1.8rem;
    color: black;
  }
  .logo {
    font-size: 2rem;
  }
  .cart {
    position: relative;
    span {
      position: absolute;
      top: 4px;
      left: -8px;
      height: 20px;
      width: 20px;
      background: #2079ff;
      font-size: 0.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      color: white;
    }
  }
`;
