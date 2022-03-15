import styled from 'styled-components';

export const StyledDiv = styled.div`
  .section-center {
    width: 90%;
    margin: auto;
    max-width: 1200px;
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
