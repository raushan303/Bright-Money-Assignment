import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 60px 50px;
  display: flex;
  align-items: center;
  @media (max-width: 700px) {
    padding: 25px 10px;
  }
  .ant-row {
    width: 100%;
  }
  .ant-col {
    padding: 0 20px;
    @media (max-width: 990px) {
      margin-bottom: 30px;
    }
  }
  .ant-input-number {
    width: 200px;
  }

  .input-box {
    height: 40px;
    border-radius: 6px;
  }
  .button-box {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    .ant-btn {
      padding: 0 50px;
    }
  }
`;
