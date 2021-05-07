import styled, { css } from 'styled-components';
import Button from 'common/components/atm/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme: { color, size, shadow } }) => css`
    background: ${color.white.df};
    box-shadow: ${shadow};
    width: ${size.full};
  `}
`;

export const SearchButton = styled(Button).attrs({ modifiers: 'primary' })`
  ${({ theme: { fontSize, size } }) => css`
    font-size: ${fontSize.md};
    padding: ${size.lg};
  `}
`;
