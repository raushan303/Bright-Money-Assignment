import React, { useState, useEffect } from 'react';
import { Modal, Input, InputNumber, Button, message } from 'antd';
import { connect } from 'react-redux';
import { editBill } from '../../redux/action';
import { EditWrapper } from './style';

function Index({ editBill, visible, setVisible, data }) {
  const [editData, setEditData] = useState({});
  const handleSubmit = () => {
    editBill(editData);
    message.success('Updated Successfully');
    setVisible(false);
  };
  const handleChange = (field) => (e) => {
    setEditData((prevState) => ({
      ...prevState,
      [field]: field === 'amount' ? e : e.target.value,
    }));
  };
  useEffect(() => {
    if (data) setEditData(data);
  }, [data]);
  return (
    <Modal footer={false} visible={visible} onCancel={() => setVisible(false)}>
      <EditWrapper>
        <p>Amount</p>
        <InputNumber className='input' value={editData.amount} onChange={handleChange('amount')} />
        <p>Category</p>
        <Input className='input' value={editData.category} onChange={handleChange('category')} />
        <p>Description</p>
        <Input
          className='input'
          value={editData.description}
          onChange={handleChange('description')}
        />
        <Button className='input-btn' onClick={handleSubmit}>
          Edit
        </Button>
      </EditWrapper>
    </Modal>
  );
}

export default connect(null, {
  editBill,
})(Index);
