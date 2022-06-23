import React, { Component } from 'react'
import { DivStyle, StyledHeader, Img } from './styles/Header.Styles'

export default class Header extends Component {
    render() {
        return (
            <DivStyle>
                <StyledHeader>
                    <Img src='./images/bg-header-desktop.svg' />
                </StyledHeader>
            </DivStyle>
        )
    }
}





