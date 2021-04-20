import React, { useState, useEffect } from 'react';
import { Wrapper } from './style';
import { connect } from 'react-redux';
import { deleteBill } from '../../redux/action';
import { Button, Select, Row } from 'antd';
import EditModal from './editModal';

const { Option } = Select;

function Index({ billList, deleteBill }) {
  const [dataList, setDataList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [editData, setEditData] = useState({});
  const [filter, setFilter] = useState(null);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    let uniqueCategory = {};
    const formatCategory = [];
    billList.forEach((element) => {
      if (!uniqueCategory[element.category]) {
        formatCategory.push(element.category);
        uniqueCategory[element.category] = true;
      }
    });
    setCategoryList(formatCategory);

    if (filter) {
      setDataList(billList.filter((obj) => obj.category === filter));
    } else setDataList(billList);
  }, [billList]);

  const handleSelectChange = (val, child) => {
    setFilter(val);
    setDataList(billList.filter((obj) => obj.category === val));
  };

  const handleResetFilter = () => {
    setFilter(null);
    setDataList(billList);
  };

  return (
    <Wrapper>
      <EditModal visible={visible} setVisible={setVisible} data={editData} />
      <Row className='filter-box'>
        <div>
          <h3>You can filter here</h3>
          <Select value={filter} className='select-box' onChange={handleSelectChange}>
            {categoryList.map((category) => (
              <Option value={category}>{category}</Option>
            ))}
          </Select>
        </div>
        {filter && (
          <Button style={{ margin: 'auto 0 10px 50px' }} onClick={handleResetFilter}>
            Reset Filter
          </Button>
        )}
      </Row>
      <table border='1' frame='void' rules='rows'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Description</th>

            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((row, index) => {
            return (
              <tr key={index}>
                <td>{row.date}</td>
                <td>{row.category}</td>
                <td>{row.description}</td>
                <td>{row.amount}</td>
                <td className='action'>
                  <Button
                    onClick={() => {
                      setEditData(row);
                      setVisible(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button onClick={() => deleteBill(row.id)} className='del-btn'>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    billList: state,
  };
};

export default connect(mapStateToProps, {
  deleteBill,
})(Index);
