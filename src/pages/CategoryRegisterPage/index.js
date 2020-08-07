import React, { useState, useEffect } from 'react';

import TemplateDefault from '../../components/TemplateDefault';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

function CategoryRegisterPage() {
  const valoresIniciais = {
    name: '',
    description: '',
    color: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  // ============

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
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
    }
  }, []);

  return (
    <TemplateDefault>
      <h1>Cadastro de Categoria</h1>

      <form>
        <FormField name="name" type="text" label="Nome da Categoria" value={values.name} onChange={handleChange} />
        <FormField name="description" type="text" label="Descrição" tag="textarea" value={values.description} onChange={handleChange} />
        <FormField name="color" type="color" label="Cor" value={values.color} onChange={handleChange} />
        <Button>
          Cadastrar
        </Button>
      </form>
    </TemplateDefault>
  );
}

export default CategoryRegisterPage;
