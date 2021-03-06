import styled from 'styled-components';

export const Container = styled.div`
  & + & {
    margin-top: 16px;
  }

  small {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.danger.main};
    display: block;
    margin-top: 8px;
  }
`;
