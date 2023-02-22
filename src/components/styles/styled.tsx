import { Grid } from "@mui/material"
import styled, { css, keyframes } from "styled-components"

import Button from "../Button"
import { Colors } from "./colors"

export const Text = styled.span`
  font-size: 2rem;
  color: ${(props) => props.color || Colors.Blue};
  font-weight: ${(props) => props.weight || 600};
`

export const TextContainer = styled.div`
  margin-top: 0.7rem;
  margin-bottom: 1.5rem;
`

const ContainerStyles = css`
  border: 2px solid;
  border-radius: 22px;
  text-align: center;
  overflow: hidden;
  position: relative;
  padding-bottom: 2.3rem;
  border-color: ${Colors.Secondary};
`

export const Container = styled.div`
  ${ContainerStyles}
  padding: 1rem 2.7rem;
`

export const LinkContainer = styled(Container)`
  ${ContainerStyles}
  padding: 0;
  text-align: left;
`

export const TopBar = styled.div`
  background-color: ${(props) => props.color || Colors.Blue};
  width: 100%;
  height: 0.3rem;
  position: absolute;
  top: 0;
  right: 0;
`

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
  border-radius: inherit;
  background-color: white;
  display: inline-flex;
  padding: 0.1rem 0;
  border: 1px solid;
  border-color: ${Colors.Blue};
  ${({ secondary }) =>
    secondary &&
    `
    opacity: 0;
    transform: translateX(-80%);
    transition: all 0.2s linear 0s;
    ${ButtonContainer}:hover & {
      opacity: 1;
      transform: translateY(0);
    }
  `}
`

export const FloatingButtonText = styled(Text)`
  font-size: 0.9rem;
  font-weight: 500;
  padding-right: 0.5rem;
`

export const Icon = styled.img`
  float: left;
  padding: 0.15rem 0.5rem 0 0.5rem;
`

export const ButtonContainer = styled.div`
  border-radius: 22px;
  border-radius: 10px;
  background-color: white;
  display: contents;
`
