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
      <h1>Cadastro de Categoria</h1>

      <Form onSubmit={handleSubmit}>
        <Input name="name" type="text" label="Nome da Categoria" />
        <Input name="description" type="text" label="Descrição" />
        <Input name="color" type="color" label="Cor" />
        <button type="submit">Sign in</button>
      </Form>
    </TemplateDefault>
  );
}

export default VideoRegisterPage;
