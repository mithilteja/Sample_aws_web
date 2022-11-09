import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width: 1200px){
        font-size: 80%; // Reduce font size when making screen smaller
    }
    @media (max-width: 600px){
        font-size: 70%; // Reduce font size when making screen smaller
    }
}

body {
    background: #fcfdff;
    font-family: 'Space Grotesk', sans-serif;
    overflow-x: hidden; // Fixes vertical scrolling
}

button {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #009a82;
    color: #009a82;
    background:transparent;
    transition: all 0.5s ease;
    font-family: 'Space Grotesk', sans-serif;
    &:hover {
        background: #009a82;
        color: #fcfdff;
    }
}

.removeLeftBorder {
    border-left:none;
}

h2 {
    font-size:4rem;
    font-weight:700;
    color:#011627;
    font-family: 'Space Grotesk', sans-serif;
}
h3 {
    font-size:3rem;
    font-weight:700;
    color:#011627;
    font-family: 'Space Grotesk', sans-serif;
}
h4 {
    font-size:2rem;
    font-weight:700;
    font-family: 'Space Grotesk', sans-serif;
}
span {
    font-weight:900;
    color:#009a82;
}
p {
    padding: 3rem 0rem;
    color:#011627;
    font-size:1.4em;
    line-height:150%;
    font-family: 'Space Grotesk', sans-serif;
}

::-webkit-scrollbar-track
{
	background-color: #f2f4f7;;
}

::-webkit-scrollbar
{
	width: 5px;
	background-color: #f2f4f7;;
}

::-webkit-scrollbar-thumb
{
	background-color: #3f7d6e;
}

`;

export default GlobalStyle;
