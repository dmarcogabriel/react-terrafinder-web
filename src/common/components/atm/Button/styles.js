import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const modifierConfig = {
  default: ({ theme: { color } }) => css`
    background: ${color.white.df};
    color: ${color.black.df};
  `,
  primary: ({ theme: { color } }) => css`
    background: ${color.primary.df};
    color: ${color.white.df};
  `,
  secondary: ({ theme: { color } }) => css`
    background: ${color.white.df};
    color: ${color.blue.df};
  `,
  success: ({ theme: { color } }) => css`
    background: ${color.green.df};
    color: ${color.white.df};
  `,
  // todo: fix rounded button
  rounded: () => css`
    /* border-radius: 20%; */
  `,
  // todo: add a disabled style
  disabled: () => css`
    /*  */
  `,
};

export const ButtonBase = styled.button.attrs({ type: 'button' })`
  cursor: pointer;
  text-align: center;
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.roboto};
    box-shadow: ${theme.shadow};
    padding: ${theme.size.sm};
    border-radius: ${theme.size.borderRadius};
  `}

  ${applyStyleModifiers(modifierConfig)}
`;
