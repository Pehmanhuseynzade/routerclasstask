import React from 'react'
import { Table } from 'antd';
import { useEffect, useState } from "react";
import { getAllOrders } from "../../httpsrequests";


function Drivers() {
     let [orders, setOrders] = useState([]);
     useEffect(() => { getAllOrders().then((data) => {
          setOrders(data)
               })}, []);
               const columns = [
                    {
                      title: 'Customer Id',
                      dataIndex: 'customerId',
                    },
                    {
                      title: 'Freight',
                      dataIndex: 'freight',
                    },

                  ];
                  const data = [];
                  for (let i = 0; i < 100; i++) {
                    data.push({
                      key: i,
                      name: `Edward King ${i}`,
                      age: 32,
                      address: `London, Park Lane no. ${i}`,
                    });
                  }
  return (
    <>
    <Table
    columns={columns}
    dataSource={orders}
    rowKey={(item)=>item.id}
    pagination={{
      pageSize: 50,
    }}
    scroll={{
      y: 240,
    }}
  />
    </>
  )
}

export default Drivers
