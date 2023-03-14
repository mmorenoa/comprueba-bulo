import CloseIcon from "@mui/icons-material/Close"
import BuildIcon from '@mui/icons-material/Build';
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined"
import { Grid } from "@mui/material"
import styled, { css } from "styled-components"

import { Colors } from "./colors"
import {
  backgroundColor,
  linkContainerBackgroundColor,
  secondaryTextColor,
  textColor
} from "./darkMode/darkModeThemeColors"

export const Text = styled.span`
  font-size: 2rem;
  color: ${(props) => props.color || textColor};
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
  border-color: ${Colors.SecondaryText};
  background-color: ${backgroundColor};
`

export const Container = styled.div`
  ${ContainerStyles}
  padding: 1rem 2.7rem;
`

export const LinkContainer = styled(Container)`
  ${ContainerStyles}
  padding: 0;
  text-align: left;
  background-color: ${linkContainerBackgroundColor};
`

export const TopBar = styled.div`
  background-color: ${(props) => props.color || textColor};
  width: 100%;
  height: 0.3rem;
  position: absolute;
  top: 0;
  right: 0;
`

export const LinkTitle = styled(Text)`
  font-size: 1.2rem;
`

export const LinkSubtitle = styled(LinkTitle)`
  font-size: 0.9rem;
  color: ${secondaryTextColor};
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
  display: flex !important;
  align-items: center !important;
  box-shadow: 0px 5px 20px -5px black !important;
  padding: 2% 0;
  border: 1px solid;
  border-color: ${Colors.SecondaryText};
  cursor: pointer;
  background-color: ${backgroundColor};
  ${({ secondary }) =>
    secondary &&
    `
    opacity: 0;
    transform: translateX(-80%);
    transition: all 0.2s linear 0s;
    ${ButtonContainer}:hover & {
      opacity: 1;
      transform: translateX(0);
    }
    ${Icon} {
      padding-right: 0;
      padding-top: 0;
    }
  `}
`

export const FloatingButtonText = styled(Text)`
  font-size: 1rem !important;
  font-weight: 500 !important;
  padding-right: 0.5rem !important;
  color: ${textColor};
  font-family: "Inter", sans-serif !important;
`

export const Icon = styled.img`
  float: left !important;
  padding: 0 0.5rem !important;
`

export const ButtonContainer = styled.div`
  border-radius: 10px !important;
  background-color: white;
  display: contents !important;
  cursor: pointer !important;
`
export const OptionsContainer = styled(Container)`
  text-align: left;
  padding: 2.5rem 1.2rem 1rem 2rem;
  vertical-align: middle;
  font-size: 1rem;
  ${Icon} {
    max-width: 23px;
    min-width: 23px;
    padding: 0.5rem 0 0.5rem 0.5rem !important;
  }
  ${Text} {
    font-size: 1.25rem;
    font-weight: 500;
  }
`

export const GridWithPadding = styled(Grid)`
  padding: 0.2rem 0;
`

export const Circle = styled.a`
  height: 2.7rem;
  width: 2.7rem;
  border-radius: 0 0 0 22px;
  display: inline-block;
  position: absolute;
  top: 0%;
  right: 0%;
  background-color: ${(props) => props.color || textColor};
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CircleLeft = styled(Circle)`
  border-radius: 0 0 22px 0;
  left: 0%;
`

export const IconInLinkCircle = styled.img`
  max-width: 29px;
`

const TopLeftIconsStyles = css`
  position: absolute;
  top: 0.4%;
  left: 1.5%;
  width: 29px;
  padding: 2% 0 0 1%;
`

const TopRightIconsStyles = css`
  position: absolute;
  top: 0.4%;
  right: 1.5%;
  width: 29px;
  padding: 2% 1% 0 0;
`

export const StyledCloseIcon = styled(CloseIcon)`
  ${TopRightIconsStyles}
`
export const StyledBuildIcon = styled(BuildIcon)`
  ${TopLeftIconsStyles}
`
export const StyledBackIcon = styled(ArrowBackOutlinedIcon)`
  ${TopLeftIconsStyles}
`