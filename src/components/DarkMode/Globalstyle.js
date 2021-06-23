import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    font-family: 'Nunito', sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
  
  th, td {
    color: ${({ theme }) => theme.text};
  }

  .accordion {
    background-color: ${({ theme }) => theme.accordionBg};
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 1em;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  p {
    color: ${({ theme }) => theme.text};
  }

  .btn-av-soft {
    background: ${({ theme }) => theme.btnSoftBg};
    color: ${({ theme }) => theme.btnSoft} !important;
  }

  .btn-av-soft:hover {
    background: ${({ theme }) => theme.btnSoftBgHover};
    color: ${({ theme }) => theme.btnSoft} !important;
  }

  .av-text-main {
    color: ${({ theme }) => theme.titleMain};
  }

  .scrollTop, body {
    color: ${({ theme }) => theme.scrollButton};
  }

  .card {
    background: ${({ theme }) => theme.cardBody};
  }

  hr {
    border-top-color: ${({ theme }) => theme.hr};
  }

  .nav-link-footer {
    color: ${({ theme }) => theme.linkFooter} !important;
  }

  .nav-link-footer:hover {
    color: ${({ theme }) => theme.linkFooterHover} !important;
  }

  .link-mail{
    color: ${({ theme }) => theme.linkMail} !important;
  }

  .link-mail:hover{
    color: ${({ theme }) => theme.linkMailHover} !important;
  }

  `;
