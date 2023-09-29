import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;


  & + & {
    margin-top: 16px;
  }


  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
         background: ${({ theme }) => theme.colors.primary.lighter};
         color: ${({ theme }) => theme.colors.primary.main};
         font-weight: bold;
         text-transform: uppercase;
         padding: 4px;
         border-radius: 4px;
         margin-left: 8px;
      }
    }
  }

  .actions {
    display: flex;
    align-items: center;

      button {
        background: transparent;
        border: none;
        margin-left: 8px;
      }
    }
`;
