import { useState } from 'react';
import {
  Container,
  SubscribeContainer,
  LogoSection,
  Icon,
  CompanyName,
  Input,
  SubmitButton,
} from '../styles/pages/home';

const Home = () => {
  const [email, setEmail] = useState('');

  return (
    <Container>
      <SubscribeContainer>
        <LogoSection>
          <Icon />
          <CompanyName>Willian's newsletter</CompanyName>
        </LogoSection>

        <Input value={email} onChange={({ target }) => setEmail(target.value)} />

        <SubmitButton>Subscribe</SubmitButton>
      </SubscribeContainer>
    </Container>
  );
};

export default Home;
