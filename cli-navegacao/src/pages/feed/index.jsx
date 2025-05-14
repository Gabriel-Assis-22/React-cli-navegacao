// import { Link } from 'react-router-dom'
// import { Button } from '../../components/Button'
import { Conteiner, Title, TitleHighlight, TextContent } from './styles'
// import bannerImage from '../../assets/banner.png'
import { Header } from '../../components/Header'
import { Card } from '../../components/Card'
const Feed = () => {
    return (
        <>
            <Header />
            <Conteiner>
                <Card/>
            </Conteiner>
            {/* <Button title="test 1" /> */}

            {/* <Link to='/login'>Fazer login</Link> */}
        </>
    )
}

export { Feed }