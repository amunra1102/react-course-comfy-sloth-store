import styled from 'styled-components';

const Wrapper = styled.main`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: var(--clr-primary-10);

  h1 {
    font-size: 10rem;
  }

  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default Wrapper;
