// import { Link } from 'react-router-dom'
import {MdEmail,MdLock} from 'react-icons/md'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import {
    Conteiner,
    Wrapper,
    Column, Row,
    Title, TitleLogin, SubTitleLogin,
    EsqueciText, CriarText,
} from './styles'

import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
const Login = () => {
    const navigate  = useNavigate();
    const handleClickSigIn = () => {
        navigate('/feed')
    }
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
                        <form>
                            <Input placeholder="E-mail" leftIcon={MdEmail}/>
                            <Input placeholder="Senha" type="passeword" leftIcon={MdLock}/>
                            <Button title='Entrar' variant='secondary' onClick={handleClickSigIn} type="button"/>
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