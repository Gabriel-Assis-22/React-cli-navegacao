import React from 'react'
import {FiThumbsUp} from 'react-icons/fi'
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
            <ImageBackground src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fblogger.googleusercontent.com%2Fimg%2Fb%2FR29vZ2xl%2FAVvXsEiU64qjXEPwzBG6jTyKyLQDfh4q1gxKLAH2foZz0t0pTONTyBA0WO-G37XPiWKvA7d-AFfA_psXq7JaZsOXzJFC8NZOxbJRgnfdeWoZIejvSX4U7AZplqcbssxi1NWRlWVpb5Vi7uK1mduVdFJvqAF1-AfxvMYjlRfYaXMSWKxjR2NUBZK90pfsQ9Nu7w%2Fs16000%2Fdio-digital-innovation-one.jpg&tbnid=Mzk6poiDBDeEKM&vet=10CAQQxiAoAWoXChMIsMTxvvejjQMVAAAAAB0AAAAAEA8..i&imgrefurl=https%3A%2F%2Fwww.cupomdescontoo.com%2F2022%2F04%2Fdigital-innovation-one-vale-pena.html&docid=pmFTsiMHQziU7M&w=250&h=250&itg=1&q=banner%20DIO%20plataforma%20de%20programa%C3%A7%C3%A3o%20&ved=0CAQQxiAoAWoXChMIsMTxvvejjQMVAAAAAB0AAAAAEA8' alt='banner'/>
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
