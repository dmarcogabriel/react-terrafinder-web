import styled, { css } from 'styled-components';
import Button from 'common/components/atm/Button';

export const UploadButton = styled(Button)`
  margin: 2rem 0;
  ${({ theme: { color } }) => css`
    background: ${color.gray.lt};
    color: ${color.gray.dk};
  `}
`;
