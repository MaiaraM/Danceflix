import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import TemplateDefault from '../../components/TemplateDefault';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm';
import videosAPI from '../../services/videosAPI';

function VideoRegisterPage() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const { handleChange, values } = useForm({
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
    categoria: 'Front End',
  });

  function sendNewVideo(event) {
    event.preventDefault();

    const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

    videosAPI.create({
      titulo: values.titulo,
      url: values.url,
      categoriaId: categoriaEscolhida.id,
    })
      .then(() => {
        console.log('Cadastrou com sucesso!');
        history.push('/');
      });
  }

  return (
    <TemplateDefault>
      <h1>Cadastro de Vídeo</h1>
      <form onSubmit={(event) => sendNewVideo(event)}>
        <FormField name="titulo" type="text" label="Nome da Categoria" value={values.titulo} onChange={handleChange} />
        <FormField name="url" type="text" label="Descrição" tag="textarea" value={values.url} onChange={handleChange} />
        <FormField name="categoria" type="color" label="Cor" value={values.categoria} onChange={handleChange} />
        <Button>
          Cadastrar
        </Button>
      </form>
    </TemplateDefault>
  );
}

export default VideoRegisterPage;
