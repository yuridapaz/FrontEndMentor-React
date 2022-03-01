import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Outfit', sans-serif;
  background-color: ${({ theme }) => theme.colors.mainBg};
  box-sizing: border-box;
`;
/////////////////// Full Card ///////////////////
export const Card = styled.div`
  width: 300px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.cardBg};
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/////////////////// IMG Div ///////////////////
const ImgDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  div {
    position: absolute;
    width: 100%;
    height: 99%;
    border-radius: 10px;
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      opacity: 0;
      transition: 0.5s;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.cyanBg};
      svg {
        opacity: 1;
      }
    }
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: transparent;

    &:hover {
      background-color: blue;
    }
  }
`;

export const Img = () => {
  return (
    <ImgDiv>
      <div>
        <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path d="M0 0h48v48H0z" />
            <path
              d="M24 9C14 9 5.46 15.22 2 24c3.46 8.78 12 15 22 15 10.01 0 18.54-6.22 22-15-3.46-8.78-11.99-15-22-15Zm0 25c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10Zm0-16c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Z"
              fill="#FFF"
              fill-rule="nonzero"
            />
          </g>
        </svg>
      </div>
      <img src="./images/image-equilibrium.jpg"></img>
    </ImgDiv>
  );
};

/////////////////// Titulo ///////////////////
const Title = styled.div`
  h1 {
    margin-top: 1rem;
    font-size: 1.3rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.cyan};
    }
  }
  p {
    font-size: 1rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.softBlue};
  }
`;

export const Description = () => {
  return (
    <Title>
      <h1>Equilibrium #3429</h1>
      <p>Our Equilibrium collection promotes balance and calm.</p>
    </Title>
  );
};

/////////////////// Etherium ///////////////////
const Eth = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};

  h2 {
    color: ${({ theme }) => theme.colors.cyan};
    font-size: 0.9rem;
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.3rem;
    }
  }

  span {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.softBlue};
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.3rem;
    }
  }
`;

export const EthValue = () => {
  return (
    <Eth>
      <h2>
        <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
            fill="#00FFF8"
          />
        </svg>
        0.041 ETH
      </h2>
      <span>
        <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
            fill="#8BACD9"
          />
        </svg>
        {'    '}3 days left{' '}
      </span>
    </Eth>
  );
};

/////////////////// Usuário ///////////////////
const User = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0.5rem;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.white};
    margin-right: 0.7rem;
  }

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.softBlue};
  }

  span {
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.cyan};
    }
  }
`;

export const UserDescription = () => {
  return (
    <User>
      <img src="./images/image-avatar.png"></img>
      <p>
        Creation of <span>Jules Wyvern</span>
      </p>
    </User>
  );
};
