import styled from 'styled-components'
import { Colors } from './colors'

export const Text = styled.span`
    font-size: 2rem;
    color: ${props => props.color};
    font-weight: ${props => props.weight};
`

Text.defaultProps = {
    color: Colors.Blue,
    weight: '600'
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
    background-color: ${props => props.color};
    width: 100rem;
    height: 0.3rem;
    position: absolute;
    top: 0;
    right: 0;
`

TopBar.defaultProps = {
    color: Colors.Blue
}