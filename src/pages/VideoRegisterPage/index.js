import React from 'react';

import TemplateDefault from '../../components/TemplateDefault';
import FormField from '../../components/FormField';

function VideoRegisterPage() {
  function handleSubmit(data) {
    console.log(data);
    // { email: 'test@example.com', password: '123456' }
  }

  return (
    <TemplateDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={handleSubmit}>
        <FormField name="name" type="text" label="Nome da Categoria" />
        <FormField name="description" type="text" label="Descrição" tag="textarea" />
        <FormField name="color" type="color" label="Cor" />
        <button type="submit">Sign in</button>
      </form>
    </TemplateDefault>
  );
}

export default VideoRegisterPage;
