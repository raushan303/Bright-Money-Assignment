import React, { useState, useEffect } from 'react';
import { Modal, InputNumber } from 'antd';
import { connect } from 'react-redux';
import { Wrapper } from './style';

function Index({ billList, visible, setVisible }) {
  const [limit, setLimit] = useState(0);
  const [selectedBill, setSelectedBill] = useState({});

  const sortedDataList = [...billList];
  sortedDataList.sort((a, b) => b.amount - a.amount);

  useEffect(() => {
    const list = {};
    let totalSum = 0;
    sortedDataList.forEach((element) => {
      if (element.amount <= limit - totalSum) {
        list[element.id] = true;
        totalSum += element.amount;
      }
    });
    setSelectedBill(list);
  }, [limit]);

  return (
    <Modal width={800} footer={false} visible={visible} onCancel={() => setVisible(false)}>
      <Wrapper>
        <h3>Enter Your monthly Budget</h3>
        <InputNumber className='input-box' value={limit} onChange={(value) => setLimit(value)} />
        <div className='color-box'>
          <div className='color'></div>
          <h5>Highlighted Bills You Can Pay</h5>
        </div>
        <table border='1' frame='void' rules='rows'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {billList.map((row, index) => {
              return (
                <tr key={index} className={selectedBill[row.id] ? 'highlighted' : ''}>
                  <td>{row.date}</td>
                  <td>{row.description}</td>
                  <td>{row.category}</td>
                  <td>{row.amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Wrapper>
    </Modal>
  );
}

const mapStateToProps = (state) => {
  return {
    billList: state,
  };
};

export default connect(mapStateToProps, null)(Index);
