import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthNavbar from '../Components/AuthNavbar';
function ReceiveOrder() {
    const [orders, setOrders] = useState([]);
    const [reload, setreload] = useState(0);
    const navigate = useNavigate();
    
    const handleAcceptOrder = (ID) => {
        console.log(ID);
        axios({
            method: "get",
            url: 'https://localhost:7276/Order/'+ID,
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token"),
            },
          }).then((Response) => {
            console.log(Response.data);
            setreload((x)=>x+1)
          });
    };


    useEffect(() => {
        axios({
            method: "get",
            url: "https://localhost:7276/Order",
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token"),
            },
          }).then((Response) => {
            console.log(Response.data);
            setOrders(Response.data)
          });
    }, [reload]);

    return (
        <div>
            <AuthNavbar />
            <div className="text-[26px] mt-5 mb-5 font-bold">ออเดอร์</div>
            {orders.length === 0 ? (
                <div className="text-xl text-center">ไม่มีออเดอร์อยู่ในระบบ</div>
            ) : (
                orders.map(order => (
                    <div className="grid bg-white rounded-[30px] p-5 w-4/5 h-342 m-auto mt-5" style={{ backgroundColor: '#CFC7B1' }}>
                        <div>
                            <div className="text-black text-2xl mt-5 mb-5 text-left">
                                <div style={{ fontSize: '24px' }}>ชื่อ: {order.user.name}</div>
                                <div style={{ fontSize: '24px' }}>เบอร์โทรศัพท์: {order.user.phoneNumber}</div>
                                <div style={{ fontSize: '24px' }}>รายละเอียด: {order.munu}</div>
                                <div style={{ fontSize: '24px' }}>หมายเหตุ: {order.note}</div>
                                <div style={{ fontSize: '24px' }}>ชื่อร้าน: {order.restaurants}</div>
                                <div style={{ fontSize: '24px' }}>ที่อยู่: {order.address}</div>
                            </div>
                        </div>
                        <div className="flex justify-end items-end ">
                            <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleAcceptOrder(order.id)}>
                                ยืนยัน
                            </button>
                        </div>
                    </div>
                ))
            )}
            <div className="fixed bottom-0 left-0 mb-5 ml-5">
                <button onClick={() => navigate('/user/rider')} className="bg-[#ECD8A5] hover:bg-[#E3C67B] rounded pl-4 pr-4 py-2 px-3 text-xl hover:scale-110 ease-in-out duration-200">
                    กลับ
                </button>
            </div>
        </div>
    );
}

export default ReceiveOrder;
