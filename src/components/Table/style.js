import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 60px;
  @media (max-width: 700px) {
    padding: 25px 10px;
  }

  .filter-box {
    align-items: center;
    margin-bottom: 50px;
    .select-box {
      width: 300px;
      .ant-select-selector {
        height: 50px;
        border-radius: 10px;
        padding: 0 25px;
        .ant-select-selection-item {
          display: flex;
          align-items: center;
        }
      }
    }
  }

  table {
    border: 1px solid #dddddd;
    padding: 10px;
    width: 100%;
  }
  tr {
    border-bottom: 1px solid #dddddd;
    text-align: left;
  }
  th {
    width: 20%;
    font-weight: 500;
    padding: 25px 0 25px 20px;
  }
  td {
    padding: 10px 0px 10px 20px;
  }
  .action {
    .del-btn {
      margin-left: 10px;
      @media (max-width: 990px) {
        margin-left: 0;
        margin-top: 10px;
      }
    }
  }
`;

export const EditWrapper = styled.div`
  padding: 10px 30px;
  .input {
    margin: 0 0 15px 0;
  }
  .input-btn {
    margin-top: 10px;
  }
  p {
    margin: 0 0 5px 0;
  }
`;
