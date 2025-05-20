// import { Link } from 'react-router-dom'
import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

import { api } from '../../services/api'
import { useForm } from "react-hook-form";

import {
    Conteiner, Wrapper, Column, Row, Title, TitleLogin, SubTitleLogin, EsqueciText, CriarText,
} from './styles'

import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
const Login = () => {
    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try {
            const { data } = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);

            if (data.length && data[0].id) {
                navigate('/feed')
                return
            }

            alert('Usuário ou senha inválido')
        } catch (e) {
            //TODO: HOUVE UM ERRO 
        }
    };


    return (
        <>
            <Header />
            <Conteiner>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubTitleLogin>Faça o seu login e make de change</SubTitleLogin>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} />
                            {errors.email && <span>E-mail é obrigatório</span>}
                            <Input type="password" placeholder="Senha" leftIcon={<MdLock />} name="senha" control={control} />
                            {errors.senha && <span>Senha é obrigatório</span>}
                            <Button title="Entrar" variant="secondary" type="submit" />
                        </form>

                        <Row>
                            <EsqueciText>Esquecia minha senha </EsqueciText>
                            <CriarText>Criar conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Conteiner>
            {/* <Button title="test 1" /> */}

            {/* <Link to='/login'>Fazer login</Link> */}
        </>
    )
}

export { Login }