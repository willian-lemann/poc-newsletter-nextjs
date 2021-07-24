import styled, { keyframes, Keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.colors['gray-100']};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubscribeContainer = styled.form`
  height: 400px;
  width: 400px;
  border-radius: 4px;
  background-color: #202024;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const LogoSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div`
  background-color: ${({ theme }) => theme.colors['purple-rocketseat']};
  font-size: ${({ theme }) => theme.fontSize.body.lg};
  font-family: ${({ theme }) => theme.fonts.primary};
  border-radius: 4px;
  width: 40px;
  height: 40px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CompanyName = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.body.lg};
  color: ${({ theme }) => theme.colors.white};
  padding-left: 1rem;
`;

export const Input = styled.input`
  width: 80%;
  height: 60px;
  border-radius: 3px;
  border: none;
  outline: none;
  padding: 0rem 1rem;
  background-color: #121214;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.body.lg};
`;

export const SubmitButton = styled.button`
  width: 80%;
  height: 60px;
  border-radius: 3px;
  border: none;
  background-color: ${({ theme }) => theme.colors['purple-rocketseat']};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.body.lg};
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

interface LoadingProps {
  size: number;
}

export const Loading = styled.div<LoadingProps>`
  margin-left: 1rem;
  animation: ${rotate} 0.5s linear infinite;
  width: ${({ size }) => `${size || 18}px`};
  height: ${({ size }) => `${size || 18}px`};
  border: 3px solid ${({ theme }) => theme.colors['gray-90']};
  border-top: 3px solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;
`;
