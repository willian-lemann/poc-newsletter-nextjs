import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.colors['gray-100']};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubscribeContainer = styled.div`
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

export const Icon = styled.img.attrs(() => ({
  src: '/logo.png',
  alt: 'company logo',
}))`
  width: 40px;
  height: 40px;
`;

export const CompanyName = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.body.lg};
  color: ${({ theme }) => theme.colors.white};
  padding-left: 1rem;
`;

export const Input = styled.input`
  width: 80%;
  height: 40px;
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
  height: 40px;
  border-radius: 3px;
  border: none;
  background-color: ${({ theme }) => theme.colors['purple-rocketseat']};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.body.lg};
  cursor: pointer;
  font-weight: bold;
`;
