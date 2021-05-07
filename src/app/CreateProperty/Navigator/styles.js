import styled, { css } from 'styled-components';
import Button from 'common/components/atm/Button';

export const Container = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  padding: 0 2rem;

  ${({ theme: { breakpoint } }) => css`
    @media (${breakpoint.desktop}) {
      flex-direction: row;
      padding: 0;
    }
  `}
`;

const BaseButton = styled(Button)`
  margin: 1rem 0;
  text-align: center;

  ${({ theme: { breakpoint } }) => css`
    @media (${breakpoint.desktop}) {
      margin: 0;
    }
  `}
`;

export const BackButton = styled(BaseButton).attrs({
  modifiers: ['secondary'],
})`
  ${({ theme: { breakpoint } }) => css`
    @media (${breakpoint.desktop}) {
      font-size: 1.3rem;
    }
  `}
`;

export const NextButton = styled(BaseButton)`
  ${({ theme: { color } }) => css`
    background: ${color.blue.df};
    color: ${color.white.df};
  `}
`;
