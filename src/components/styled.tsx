import styled, { keyframes } from "styled-components"

import { Colors } from "./colors"

export const Text = styled.span`
  font-size: 2rem;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
`

Text.defaultProps = {
  color: Colors.Blue,
  weight: "600"
}

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter");
  font-family: "Inter", sans-serif;
  border: 2px solid;
  border-radius: 22px;
  border-color: ${Colors.Blue};
  text-align: center;
  white-space: nowrap;
  padding: 1rem 2.7rem;
  overflow: hidden;
  position: relative;
`

export const TopBar = styled.div`
  background-color: ${(props) => props.color};
  width: 100rem;
  height: 0.3rem;
  position: absolute;
  top: 0;
  right: 0;
`

TopBar.defaultProps = {
  color: Colors.Blue
}

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 2em auto;
`
