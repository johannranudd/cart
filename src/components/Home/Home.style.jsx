import styled from 'styled-components';

export const StyledDiv = styled.div`
  .section-center {
    width: 90%;
    margin: auto;
    max-width: 1200px;
    margin-bottom: 4rem;
    h1 {
      text-align: center;
      margin-bottom: 4rem;
    }
    ul {
      display: grid;
      row-gap: 4rem;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 100%;
          max-width: 300px;
        }
        p {
          margin-bottom: 0.5rem;
        }
        strong {
          margin-bottom: 0.5rem;
        }
        button {
          display: flex;
          padding: 0.4rem;
          font-size: 0.9rem;
          background: #2079ff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: 0.05s;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          :active {
            transform: scale(0.9, 0.9);
          }
          .cart-icon {
            margin-left: 5px;
          }
        }
      }
    }
  }

  /* !MEDIA */
  @media (min-width: 768px) {
    .section-center {
      ul {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      }
    }
  }
`;
