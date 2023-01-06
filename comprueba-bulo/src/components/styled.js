import styled from 'styled-components'
import { Colors } from './colors'

export const Container = styled.div`
    width: 800px;
    height: 600px;
    border: 2px solid;
    border-radius: 15px;
    border-color: ${Colors.Blue}
    text-align: center;
`

export const Text = styled.span`
    font-family: "Inter";
    font-color: ${props => props.color};
    font-weight: ${props => props.weight};
`

Text.defaultProps = {
    color: Colors.Blue,
    weight: '600'
}