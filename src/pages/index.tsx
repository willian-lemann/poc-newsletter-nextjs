import { FormEvent, useState } from 'react';

import axios from 'axios';

import {
  Container,
  SubscribeContainer,
  LogoSection,
  Icon,
  CompanyName,
  Input,
  SubmitButton,
  Loading,
} from '../styles/pages/home';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setIsLoading(true);

    if (email === '') {
      setIsLoading(false);
      return;
    }

    const response = await axios.post('/api/newsletter', { email });

    const { email: subscribedEmail } = response.data;

    alert(`${subscribedEmail} was added successfully`);

    setIsLoading(false);
  }

  return (
    <Container>
      <SubscribeContainer onSubmit={handleSubmit}>
        <LogoSection>
          <Icon>W</Icon>
          <CompanyName>Willian's newsletter</CompanyName>
        </LogoSection>

        <Input value={email} onChange={({ target }) => setEmail(target.value)} placeholder="Type your best email" />

        <SubmitButton>Subscribe {isLoading && <Loading size={30} />}</SubmitButton>
      </SubscribeContainer>
    </Container>
  );
};

export default Home;
