import styled, { css } from 'styled-components';
import Button from 'common/components/atm/Button';

export const CreateAdButton = styled(Button).attrs({ modifiers: 'success' })`
  display: flex;
  margin: 1rem 0;

  ${({ theme: { breakpoint } }) => css`
    @media (${breakpoint.desktop}) {
      position: absolute;
      right: 2rem;
      top: 9rem;
    }
  `}

  > p {
    margin-left: 1rem;
  }
`;
