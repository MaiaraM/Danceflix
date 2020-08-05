import React from 'react';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import TemplateDefault from '../../components/TemplateDefault';

function VideoRegisterPage() {
  function handleSubmit(data) {
    console.log(data);
    // { email: 'test@example.com', password: '123456' }
  }

  return (
    <TemplateDefault>
      <h1>Cadastro de Vídeo</h1>

      <Form onSubmit={handleSubmit}>
        <Input name="name" type="text" />
        <Input name="password" type="password" />
        <button type="submit">Sign in</button>
      </Form>
    </TemplateDefault>
  );
}

export default VideoRegisterPage;
