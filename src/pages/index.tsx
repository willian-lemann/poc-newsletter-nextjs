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
  CheckboxContainer,
  TermsOfService,
  Checkbox,
  Label,
} from '../styles/pages/home';
import { subscribe } from '../services/subscribe';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [newsletter, setNewsletter] = useState({
    email: '',
    terms: false,
  });
  const [errors, setErrors] = useState({
    email: false,
    terms: false,
  });

  function handleChangeTerms() {
    setNewsletter((state) => ({ ...state, terms: !state.terms }));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setIsLoading(true);

    const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    if (!emailRegex.test(newsletter.email) || !newsletter.terms) {
      setErrors({ email: !emailRegex.test(newsletter.email), terms: !newsletter.terms });
      setIsLoading(false);
      return;
    }

    const response = await subscribe(newsletter.email);

    const { subscription } = response.data;

    if (!subscription) {
      alert(`error trying to subscribe ${newsletter.email}`);
      return;
    }

    alert(`${newsletter.email} was added successfully`);

    setIsLoading(false);

    setErrors({ email: false, terms: false });
  }

  return (
    <Container>
      <SubscribeContainer onSubmit={handleSubmit}>
        <LogoSection>
          <Icon>W</Icon>
          <CompanyName>Willian's newsletter</CompanyName>
        </LogoSection>

        <Input
          value={newsletter.email}
          onChange={({ target }) => setNewsletter((state) => ({ ...state, email: target.value }))}
          placeholder="Type your best email"
          bordered={errors.email}
          onFocus={() => setErrors((state) => ({ ...state, email: false }))}
        />

        <TermsOfService>
          <CheckboxContainer>
            <Checkbox
              type="checkbox"
              value={newsletter.email}
              checked={newsletter.terms}
              onChange={handleChangeTerms}
              onFocus={() => setErrors((state) => ({ ...state, terms: false }))}
            />
            <Label error={errors.terms}>I Agree the terms of service to this subscription</Label>
          </CheckboxContainer>
        </TermsOfService>
        <SubmitButton>Subscribe {isLoading && <Loading size={30} />}</SubmitButton>
      </SubscribeContainer>
    </Container>
  );
};

export default Home;
