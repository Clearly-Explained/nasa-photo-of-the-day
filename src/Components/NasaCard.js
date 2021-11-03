import React from "react";
import styled from 'styled-components'

const StyledNasa = styled.div`
  background-color: lightblue;
  justify-content: center;
  color: blue;
`
const Title = styled.h1 `
  background-color: turquoise;
  color: darkorange;
  justify-content: center;
`
const Exp = styled.p `
  background-color: teal;
  color: white;
  justify-content: center;
`
const NasaCard = (props) => {
    return (
        <StyledNasa className = "cardContainer">
            <Title>{props.data.title}</Title>
            <h2>{props.data.copyright}</h2>
            <h2>Date : {props.data.date}</h2>
            <div className = "cardImgInfo">
                <img src = {props.data.url} alt="space" />
                <Exp>{props.data.explanation}</Exp>
            </div>
        </StyledNasa>
    )
}

export default NasaCard; 