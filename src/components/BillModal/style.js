import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  .highlighted {
    background: #ef9a9a;
  }
  .color-box {
    display: flex;
    margin-bottom: 20px;
    .color {
      height: 20px;
      width: 20px;
      background: #ef9a9a;
    }
    h5 {
      margin: 0 10px;
    }
  }
  .input-box {
    width: 150px;
    margin-bottom: 20px;
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
    width: 25%;
    font-weight: 500;
    padding: 25px 0 25px 20px;
  }
  td {
    padding: 10px 0px 10px 20px;
  }
`;
