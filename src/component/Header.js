import React from 'react';
import { BLUE_THEME_COLOR, BLUE_THEME_BACKGROUND_COLOR, BLACK_THEME_COLOR, BLACK_THEME_BACKGROUND_COLOR } from '../constants/style';

const headerStyle = {
  padding: 5,
  backgroundColor: "#c3c3c3",
  display: "flex",
  justifyContent: "flex-end"
}

const blueButtonStyle = {
  color: BLUE_THEME_COLOR,
  backgroundColor: BLUE_THEME_BACKGROUND_COLOR,
  marginRight: 10
}

const blackButtonStyle = {
  color: BLACK_THEME_COLOR,
  backgroundColor: BLACK_THEME_BACKGROUND_COLOR
}

export default function Header(props) {
  return (
    <header style={headerStyle}>
      <button onClick={() => props.onThemeChange('blue')} style={blueButtonStyle}>Blue</button>
      <button onClick={() => props.onThemeChange('black')} style={blackButtonStyle}>Black</button>
    </header>
  )
}