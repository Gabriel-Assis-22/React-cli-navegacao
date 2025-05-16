import React from 'react'
import {FiThumbsUp} from 'react-icons/fi'
import banner from '../../assets/banner64.png'
import {
    HasInfo,
    PostInfo,
    UserInfo,
    UserPicture,
    CardContainer,
    ImageBackground,
    Content,
} from './styles'

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src={banner} alt='banner'/>
            <Content>
                <UserInfo>
                    <UserPicture src='https://avatars.githubusercontent.com/u/152230629?s=40&v=4'/>
                    <div>
                        <h4>Gabriel Assis</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso HTML e CSS </h4>
                    <p>Projeto feito no curso de HTML e CSS no Bootcamp DIO do global avanade...<strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTLM #CSS #JavaScript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>

                </HasInfo>
            </Content>
        </CardContainer >
    )
}

export { Card }
