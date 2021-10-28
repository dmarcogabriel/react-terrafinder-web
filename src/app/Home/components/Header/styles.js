import styled, { css } from 'styled-components';
import Button from 'common/components/atm/Button';
import { MdPhoneInTalk } from 'react-icons/md';

export const ContactButton = styled(Button).attrs({ modifiers: 'primary' })`
  display: none;
  flex-direction: column;
  padding: 1rem;

  ${({ theme: { breakpoint } }) => css`
    @media (${breakpoint.desktop}) {
      display: flex;
    }
  `}

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContactButtonText = styled.p`
  display: inline-block;
  font-size: 0.75rem;
  padding: 0.25rem 0;
`;

export const PhoneIcon = styled(MdPhoneInTalk)`
  font-size: 2rem;

  ${({ theme }) => css`
    @media (${theme.breakpoint.desktop}) {
      font-size: 1.5rem;
    }
  `}
`;

export const Logo = styled.img`
  height: 4rem;
  cursor: pointer;
`;
