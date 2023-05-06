import React from 'react';
import styled from "styled-components";

const CardBox = styled.div`
  width: 580px;
  height: 630px;
  margin: 60px;
  border-radius: 30px;
  display: inline-block;
  flex-direction: row;
  background-color: ${(props) => (props.styledCardColor ? props.styledCardColor : "green")};
`

const ImageEach = styled.div`
  width: 537px;
  height: 300px;
  position: absolute;
  margin-left:20px;
  margin-top:20px;
  border-radius:20px;
  background-image:url(${(props) => (props.imageUrl)});
  background-size: 100%;
  
`
const Title = styled.p`
  font-style: ;
  font-size: 40px;
  font-weight: 900;
  position: absolute;
  margin-left:40px;
  margin-top:350px;
`
const Content = styled.p`
    font-size: 30px;
  font-weight: 300;
  position: absolute;
  margin-left:40px;
  margin-top:420px;
`
const Button = styled.div`
  width: 530px;
  height: 95px;
  position: absolute;
  margin-left:25px;
  margin-top:510px;
  border-radius: 40px;
  background:${(props) => (props.styledButton ? props.styledButton : "green")};
`
const ButtonContent = styled.p`
    font-size: 30px;
  font-weight: 500;
  color:white;
  position: absolute;
  margin-left:220px;
  margin-top:28px;
`
    

const Name = (props) =>{
    return(
    
    <CardBox styledCardColor ={props.cardColor}>
        <Title>{props.cardText}</Title>
        <Content>{props.cardText2}</Content>
        <Button styledButton ={props.cardButton}>
            <ButtonContent>{props.buttonText}</ButtonContent>
        </Button>
        <ImageEach imageUrl ={props.imgUrl}>
        </ImageEach>

    </CardBox>
        
        );
};
export default Name;