import styled from 'styled-components'

export const ToggleContainer = styled.button`
float: right;
display: flex;
justify-content: space-between;
background: ${({ theme }) => theme.gradient};
width: 4rem;
height: 2.3rem;
padding: 0.5em;
margin: 0 auto;
border-radius: 20px;
border: 1px solid ${({ theme }) => theme.toggleBorder};
font-size: 0.5rem;
overflow: hidden;
cursor: pointer;

img {
  max-width: 1.7rem;
  height: auto;
  transition: all 0.3s linear;

  &:first-child {
    transform: ${({ lightTheme }) => lightTheme ? 'translateX(0)' : 'translateX(26px)'};
  }

  &:nth-child(2) {
    background: #fafafa;
    transform: ${({ lightTheme }) => lightTheme ? 'translateX(500px)' : 'translateX(0)'};
  }
}
`