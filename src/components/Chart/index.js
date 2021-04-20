import React from 'react';
import { Pie } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { Wrapper } from './style';

const Index = ({ billList }) => {
  const category = {},
    categoryNameList = [],
    totalPriceList = [];

  billList.forEach((element) => {
    if (category[element.category] >= 0) category[element.category] += element.amount;
    else {
      category[element.category] = element.amount;
      categoryNameList.push(element.category);
    }
  });

  categoryNameList.forEach((element) => totalPriceList.push(category[element]));

  const data = {
    labels: categoryNameList,
    datasets: [
      {
        label: '# of Votes',
        data: totalPriceList,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          '#ffcdd2',
          '#F8BBD0',
          '#E1BEE7',
          '#D1C4E9',
          '#C5CAE9',
          '#BBDEFB',
          '#B3E5FC',
          '#B2EBF2',
          '#B2DFDB',
          '#C8E6C9',
          '#DCEDC8',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          '#ffcdd2',
          '#F8BBD0',
          '#E1BEE7',
          '#D1C4E9',
          '#C5CAE9',
          '#BBDEFB',
          '#B3E5FC',
          '#B2EBF2',
          '#B2DFDB',
          '#C8E6C9',
          '#DCEDC8',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Wrapper>
      <h1>Monthly Billing Cycle</h1>
      <Pie data={data} />
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    billList: state,
  };
};

export default connect(mapStateToProps, null)(Index);
