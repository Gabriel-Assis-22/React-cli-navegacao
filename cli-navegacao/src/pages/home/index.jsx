// import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Conteiner, Title, TitleHighlight, TextContent } from './styles'
import bannerImage from '../../assets/banner.png'
import { Header } from '../../components/Header'
const Home = () => {
    return (
        <>
            <Header />
            <Conteiner>
                <div>

                    <Title>
                        <TitleHighlight>
                            Implemente
                            <br />
                        </TitleHighlight>
                        o seu futuro global agora!
                    </Title>
                    <TextContent>
                        Domine as tecnologias ultilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidades com os melhores experts.
                        <Button variant='secondary' title="Começar agora" onClick={() => null} />
                    </TextContent>

                </div>
                <div>
                    <img src={bannerImage} alt='Imagem principal' />
                </div>

            </Conteiner>
            {/* <Button title="test 1" /> */}

            {/* <Link to='/login'>Fazer login</Link> */}
        </>
    )
}

export { Home }