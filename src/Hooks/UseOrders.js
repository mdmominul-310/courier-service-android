/* eslint-disable prettier/prettier */
import {useEffect, useState} from 'react';

const UseOrders = () => {
  const [tabledata, setTableData] = useState([]);
  const [isLooding, setIsLooding] = useState(false);
  let ordersData = [...tabledata];

  useEffect(() => {
    setIsLooding(true);
    fetch('https://www.alijahan.xyz/orders')
      .then(res => res.json())
      .then(data => {
        data.map(order => {
          let orderInfo = {
            _id: order._id,
            date: order.orderSummaray.date,
            marchentName: `${order?.marchentInfo?.name},`,
            deliveryArea: order.recieverDetails.deliveryArea,
            status: order.orderSummaray.status,
            marachentNumber: `${order.marchentInfo.number},`,
            location: order.marchentInfo.location,
            customer: order?.recieverDetails?.name,
          };
          ordersData.push(orderInfo);
        });
      })
      .finally(() => {
        setTableData(ordersData);
        setIsLooding(false);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    tabledata,
    isLooding,
  };
};
export default UseOrders;
