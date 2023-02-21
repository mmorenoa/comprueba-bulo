import { Grid } from "@mui/material"
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

export const TextContainer = styled.div`
  margin-top: 0.7rem;
  margin-bottom: 1.5rem;
`

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter");
  font-family: "Inter", sans-serif;
  border: 2px solid;
  border-radius: 22px;
  border-color: ${Colors.Blue};
  text-align: center;
  padding: 1rem 2.7rem;
  overflow: hidden;
  position: relative;
  padding-bottom: 2.3rem;
`

export const TopBar = styled.div`
  background-color: ${(props) => props.color};
  width: 100%;
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

export const LinkTitle = styled(Text)`
  font-size: 1.2rem;
`

export const LinkSubtitle = styled(LinkTitle)`
  font-size: 0.9rem;
  color: ${Colors.Secondary};
  font-weight: 400;
`

export const LinkImage = styled.img`
  width: 100%;
  height: 60%;
`

export const LinkContainer = styled(Container)`
  padding: 0;
  text-align: left;
`

export const LinkTitleContainer = styled(Grid)`
  margin: 0 1rem;
  padding: 1rem 1.7rem;
`

export const LinkDateNameContainer = styled(Grid)`
  margin: 0 1rem;
  padding: 0 1.7rem 1.7rem 1.7rem;
`

export const HyperLink = styled.a`
  text-decoration: none;
`

export const FloatingButton = styled.button`
  border-radius: 22px;
  @import url("https://fonts.googleapis.com/css2?family=Inter");
  font-family: "Inter", sans-serif;
  border: 1px solid;
  border-radius: 10px;
  background-color: white;
`

export const FloatingButtonText = styled(Text)`
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 0.5rem;
  padding-right: 0.5rem;
`

export const Icon = styled.img`
  float: left;
  padding: 0.1rem 0.5rem;
`
