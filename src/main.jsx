import React from "react";
import Box from "./components/box";
import Circles from "./components/circles";
import Name from "./components/name";


const Main = () => { 
  
  const circleColorArr = [
    "pink",
    "red",
    "black",
    "gray",
    "green",
    "blue",
    "orange",
  ];
  

  return (
    <>
      <Box boxColor="red" text="빨간색박스"/>
      <Box boxColor="blue"text="파란색박스"/>
      <Box boxColor="green" text="초록색박스"/>
      <Box boxColor="pink" text="핑크색박스"/>
      <Circles circleColor="red"/>
      <Circles circleColor="pink"/>
      <Circles circleColor="green"/>
      <Circles circleColor="lightgreen"/>
      <Circles circleColor="black"/>
      <Circles circleColor="blue"/>
      <Circles circleColor="skyblue"/>
      <Name cardColor="#e7eaf6" cardText="고양이" 
      cardText2="귀엽다" 
      cardButton="linear-gradient(90deg, #6074dc, #8e9cd9);" 
      buttonText="Action" imgUrl="./image/cat.jpg"/>

      <Name cardColor="#ffe9e3" cardText="자는 고양이" 
      cardText2="귀엽다!!" 
      cardButton="linear-gradient(90deg,  #ffb5b5, #ffcbcb);" 
      buttonText="Action" imgUrl="./image/cat2.jpg"/>

      <Name cardColor="#bbe4e9" cardText="만짐 당하는 고양이" 
      cardText2="역시 귀엽다" 
      cardButton="linear-gradient(90deg, #53a8b6, #5585b5);" 
      buttonText="Action" imgUrl="./image/cat3.jpg"/>

      <Name cardColor="#93e4c1" cardText="보더콜리" 
      cardText2="멋지다" 
      cardButton="linear-gradient(90deg, #3baea0, #118a7e);" 
      buttonText="Action" imgUrl="./image/dog1.jpg"/>

      <Name cardColor="#ffd3b6" cardText="아기 강아지" 
      cardText2="귀엽다" 
      cardButton="linear-gradient(90deg, #ff5959, #f07810);" 
      buttonText="Action" imgUrl="./image/dog2.jpg"/>
      
      
    </>
  );
  
};


export default Main;
