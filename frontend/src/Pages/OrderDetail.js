import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import AuthNavbar from '../Components/AuthNavbar';

function OrderDetail() {
  const [order, setOrder] = useState({});
  const { id } = useParams();
  const [selectedButton, setSelectedButton] = useState(null);
  const handleButtonClick = () => {
    if (selectedButton === 4) {
      return;
    }
    const newIndex = selectedButton + 1;
    setSelectedButton(newIndex);
    axios({
      method: "put",
      url: "https://localhost:7276/Receive/"+order.order.id,
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
  };



  useEffect(() => {
    
    axios({
      method: "get",
      url: "https://localhost:7276/Receive/"+id,
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    }).then((Response) => {
      setOrder(Response.data);
      setSelectedButton(Response.data.order.status)
      console.log(5);
    });
  }, []);
  
  try {
    return (
      <div>
        <AuthNavbar />
        <div className="grid grid-col-2 grid-flow-col gap-10 bg-white rounded-[30px] pl-4 pr-4 w-4/5 h-342 m-auto mt-5" style={{ backgroundColor: '#CFC7B1' }}>
          <div>
            {/* forms */ console.log(order)}
            <div className="text-[26px] mt-5 mb-5 font-bold">Order Details</div>
            <div className="text-black text-2xl mt-5 mb-5 text-left">
              <div style={{ fontSize: '24px' }}>Name: {order.order.user.name}</div>
              <div style={{ fontSize: '24px' }}>Tel: {order.order.user.phoneNumber}</div>
              <div style={{ fontSize: '24px' }}>Order Detail: {order.order.munu}</div>
              <div style={{ fontSize: '24px' }}>Note: {order.order.note}</div>
              <div style={{ fontSize: '24px' }}>Restaurant Name: {order.order.restaurants}</div>
              <div style={{ fontSize: '24px' }}>Address: {order.order.address}</div>
            </div>
          </div>
        </div>
        <div className="bg-[#ECD8A5] rounded-[30px] pl-4 pr-4 w-1/5 h-16 m-auto mt-5 text-black text-xl text-center flex items-center justify-center font-bold">
          Update Status
        </div>
        <div className="bg-[#B29A89] rounded-[30px] pl-4 pr-4 w-4/5 h-16 m-auto mt-5 flex items-center justify-center">
          <div className="grid grid-cols-5 gap-20 ">
            <div className={`w-4/5 h-full flex items-center justify-center font-bold rounded-[30px] ${selectedButton >= 1 ? 'bg-gray-400' : 'bg-green-500'}`}>Order Accepted</div>
            <div className={`w-4/5 h-full flex items-center justify-center font-bold rounded-[30px] ${selectedButton === 1 ? 'bg-green-500' : 'bg-gray-400'}`}>On the way</div>
            <div className={`w-4/5 h-full flex items-center justify-center font-bold rounded-[30px] ${selectedButton === 2 ? 'bg-green-500' : 'bg-gray-400'}`}>Pending</div>
            <div className={`w-4/5 h-full flex items-center justify-center font-bold rounded-[30px] ${selectedButton === 3 ? 'bg-green-500' : 'bg-gray-400'}`}>Accepted Food</div>
            <div className={`w-4/5 h-full flex items-center justify-center font-bold rounded-[30px] ${selectedButton === 4 ? 'bg-green-500' : 'bg-gray-400'}`}>Delivered</div>
          </div>
        </div>
        <button className="bg-[#CDC5AF] hover:bg-[#B9AE90] rounded pl-4 pr-4 py-2 px-3 absolute bottom-5 left-5 text-xl hover:scale-110 ease-in-out duration-200">
          Back To Order
        </button>
        <button className="bg-[#BBD9B0] hover:bg-[#9DC88E] rounded pl-4 pr-4 py-2 px-3 absolute bottom-5 right-5 text-xl hover:scale-110 ease-in-out duration-200" onClick={() => handleButtonClick(0)}>
          Update Status
        </button>
      </div>
    );
  } catch (error) {
    
  }
}

export default OrderDetail;
