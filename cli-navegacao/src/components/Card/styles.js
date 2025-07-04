import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    background-color: #3b4651;
    position: relative;
    margin-bottom: 24px;

`
export const ImageBackground = styled.img`
    width: 100%;
    height: 180px;

`
export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 12px;

`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;

    div{
       margin-left: 12px;
    }

    h4{
        font-family: 'Open Sans';
        font-size: 18px;
        font-weight: 700;
        font-style: normal;
        line-height: 25px;
        color: #FFFFFF;
    }

    p{
        font-family: 'Open Sans';
        font-size: 12px;
        font-weight: 400;
        font-style: normal;
        line-height: 25px;
        color: #FFFFFF;
    }

`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 1px solid #FFFFFF;

`

export const PostInfo = styled.div`

       margin-bottom: 12px;


    h4{
        font-family: 'Open Sans';
        font-size: 18px;
        font-weight: 700;
        font-style: normal;
        line-height: 25px;
        color: #FFFFFF;
    }

    p{
        font-family: 'Open Sans';
        font-size: 12px;
        font-weight: 400;
        font-style: normal;
        line-height: 25px;
        color: #FFFFFF;
    }

`

export const HasInfo = styled.div`

       margin-bottom: 12px;


    h4{
        font-family: 'Open Sans';
        font-size: 12px;
        font-weight: 700;
        font-style: normal;
        line-height: 16px;
        color: #FFFFFF80;
    }

    p{
        font-family: 'Open Sans';
        font-size: 16px;
        font-weight: 400;
        font-style: normal;
        line-height: 22px;
    }

`