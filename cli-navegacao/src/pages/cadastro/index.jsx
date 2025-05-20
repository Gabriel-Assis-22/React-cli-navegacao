import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input } from '../../components/Input2';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: auto;
  padding-top: 50px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #e4105d;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
`;

const schema = yup.object().shape({
  nome: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  senha: yup.string().min(6, 'No mínimo 6 caracteres').required('Senha é obrigatória'),
});

const Cadastro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log('Dados enviados:', data);
  };

  return (
    <Container>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Nome" name="nome" register={register} error={errors.nome} type="text" />
        <Input label="Email" name="email" register={register} error={errors.email} type="email" />
        <Input label="Senha" name="senha" register={register} error={errors.senha} type="password" />
        <Button type="submit">Cadastrar</Button>
      </form>
    </Container>
  );
}

export {Cadastro}; 

