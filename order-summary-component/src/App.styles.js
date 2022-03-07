import styled, { css } from 'styled-components';
import imagem from './images/illustration-hero.svg';
import iconMusic from './images/icon-music.svg';

export const Card = styled.div`
  /* border: 1px solid black; */
  width: 400px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 1px 1px 50px ${({ theme }) => theme.colors.desaturatedBlue};
`;

// Top Image Div //
export const ImageDiv = styled.img`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 100%;
  height: 100%;
`;

export const TopImage = () => {
  return <ImageDiv src={imagem}></ImageDiv>;
};

// Bottom Div //

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 40px 10px 40px;
`;

// Summary description //
export const Summary = styled.div`
  h1 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin-bottom: 15px;
    text-align: center;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.desaturatedBlue};
    text-align: center;
  }
`;

export const Description = () => {
  return (
    <Summary>
      <h1>Order Summary</h1>
      <p>
        You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you
        like!
      </p>
    </Summary>
  );
};

// Plans //

export const PlanDiv = styled.div`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.veryPaleBlue};
  width: 100%;
  padding: 15px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0 30px 0;

  div {
    display: flex;

    svg {
      margin-right: 10px;
    }

    p {
      display: flex;
      flex-direction: column;
      font-weight: 600;
      font-size: 0.9rem;
      line-height: 22px;
      span {
        font-weight: 400;
        letter-spacing: 0.8px;
        color: ${({ theme }) => theme.colors.desaturatedBlue};
      }
    }
  }
  a {
    font-size: 0.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.brightBlue};
  }

  a:visited {
    color: ${({ theme }) => theme.colors.brightBlue};
  }

  a:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.desaturatedBlue};
  }
`;

export const PlansDiv = () => {
  return (
    <PlanDiv>
      <div>
        <i>
          {/* prettier-ignore */}
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#DFE6FB"/><path fill="#717FA6" fill-rule="nonzero" d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z"/></g></svg>
        </i>
        <p>
          Annual Plan
          <span>$59.99/year</span>
        </p>
      </div>
      <a href="https://github.com/yuridapaz" target="_blank">
        Change
      </a>
    </PlanDiv>
  );
};

// Buttons area //

export const ButtonStyled = styled.button`
  width: 100%;
  font-weight: 600;
  background-color: none;
  background: none;

  color: ${({ theme }) => theme.colors.desaturatedBlue};
  border: none;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: none;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  ${({ primary }) =>
    primary &&
    css`
      background-color: ${({ theme }) => theme.colors.brightBlue};
      box-shadow: 1px 4px 10px ${({ theme }) => theme.colors.desaturatedBlue};
      color: ${({ theme }) => theme.colors.veryPaleBlue};
      &:hover {
        background-color: hsl(245, 75%, 60%);
        color: ${({ theme }) => theme.colors.veryPaleBlue};
      }
    `}
`;

export const Button = ({ primary, children }) => {
  return (
    <>
      <ButtonStyled primary={primary}>{children}</ButtonStyled>
    </>
  );
};
