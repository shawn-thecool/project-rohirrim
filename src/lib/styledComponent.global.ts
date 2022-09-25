import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{margin:0;padding:0;box-sizing:border-box}
div{padding:24px}
section{display:flex;gap:12px;padding:12px}
ul{display:flex;flex-flow:column;gap:12px}
li{display:flex;list-style:none;gap:12px}
pre{border:1px solid green}
.g_item{display:flex;justify-content:center;align-items:center; width:50%; height:77px}

`
