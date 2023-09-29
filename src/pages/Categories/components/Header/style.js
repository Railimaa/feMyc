import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 16px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};
    margin-bottom: 20px;


    strong {
      font-size: 24px;
    }

    a {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.colors.primary.main};
      text-decoration: none;
      font-weight: bold;
      border: 2px solid #5061FC;
      padding: 8px;
      border-radius: 8px;
      transition: all 0.3s ease-in;

      &:hover {
        background: ${({ theme }) => theme.colors.primary.main};
        color: #fff;
        border: 2px solid black;
      }
    }
`;
