import React, { useState, useEffect } from 'react';

import TemplateDefault from '../../components/TemplateDefault';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm';
import categoryAPI from '../../services/categoryAPI';

function CategoryRegisterPage() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const { values, handleChange, clearForm } = useForm(valoresIniciais);

  // ============

  useEffect(() => {
    categoryAPI.getAll()
      .then((categories) => {
        setCategorias(categories);
      }).catch((error) => console.error(error));

    /* if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    } */
  }, []);

  return (
    <TemplateDefault>
      <h1>Cadastro de Categoria</h1>

      <form>
        <FormField name="titulo" type="text" label="Nome da Categoria" value={values.titulo} onChange={handleChange} />
        <FormField name="descricao" type="text" label="Descrição" tag="textarea" value={values.descricao} onChange={handleChange} />
        <FormField name="cor" type="color" label="Cor" value={values.cor} onChange={handleChange} />
        <Button>
          Cadastrar
        </Button>
      </form>
      {categorias.map((category) => <p>{category.titulo}</p>)}
    </TemplateDefault>
  );
}

export default CategoryRegisterPage;
