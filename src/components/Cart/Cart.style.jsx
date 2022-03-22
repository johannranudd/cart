import styled from 'styled-components';

export const StyledDiv = styled.div`
  /* background-color: green; */
  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
  .section-center {
    width: 100%;
    max-width: 700px;
    margin: auto;
    display: grid;
    /* place-items: center; */
    grid-gap: 2rem;
    /* cart list */
    ul {
      display: grid;
      place-content: center;
      row-gap: 2rem;
      li {
        display: flex;
        align-items: center;
        img {
          max-width: 150px;
        }
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          p {
          }
          button {
            background: transparent;
            border: none;
            font-size: 1.5rem;
            display: flex;
          }
        }
      }
    }
    /* total-container */
    .total-container {
      background: #def;
      display: grid;
      place-content: center;
      row-gap: 1rem;
      button {
        background: #3f72ff;
        border: none;
        font-size: 1.5rem;
        border-radius: 5px;
        padding: 0.3rem;
        cursor: pointer;
        width: 110px;
        transition: 0.3s;
        :hover {
          color: white;
        }
      }
    }
  }

  /* MEDIA */
`;
