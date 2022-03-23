import styled from 'styled-components';

export const StyledDiv = styled.div`
  /* background-color: green; */
  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
  .section-center {
    width: 100%;
    max-width: 750px;
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
            font-size: 1.2rem;
          }
          button {
            background: transparent;
            border: none;
            font-size: 1.5rem;
            display: flex;
            cursor: pointer;
            color: #2079ff;
            :active {
              transform: scale(0.9, 0.9);
            }
            :hover {
              opacity: 0.7;
            }
          }
          .remove-all-items-btn {
            margin-top: 1rem;
            font-size: 1rem;
            color: black;
            :hover {
              color: #2079ff;
            }
          }
        }
      }
    }
    /* total-container */
    .total-container {
      background: #353535;
      color: white;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      display: grid;
      place-content: center;
      row-gap: 1rem;
      padding: 2rem;
      border-radius: 5px;
      form {
        p {
          margin-bottom: 1rem;
        }
        div {
          display: flex;
          flex-direction: column;
          label {
          }
          input {
            margin-bottom: 2rem;
          }
          button {
            background: #2079ff;
            border: none;
            font-size: 1.5rem;
            border-radius: 5px;
            padding: 0.3rem;
            cursor: pointer;
            width: 120px;
            transition: 0.3s;
            :active {
              transform: scale(0.9, 0.9);
            }
            :hover {
              color: white;
            }
          }
        }
      }
    }
  }

  /* MEDIA */
  @media (min-width: 800px) {
    .section-center {
      grid-template-columns: repeat(2, 1fr);
      .total-container {
        place-content: start start;
      }
      ul {
        li {
          img {
            width: 100px;
          }
        }
      }
    }
  }
`;
