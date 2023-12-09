import React, { Fragment, useState } from 'react';
import AuthNavbar from '../Components/AuthNavbar';
import { useNavigate } from 'react-router-dom';

function MenuIYen() {
    const navigate = useNavigate();
    return (
        <Fragment>
            <AuthNavbar />
            <div class="grid grid-cols-25 grid-rows-1">
                <div class="col-span-4 p-3 text-4xl border-8 border-transparent">ร้านไอเย็น</div>
                <div class="p-3 bg-[#B9DBAD]">
                    <h1 class="relative h-40 w-100 absolute inset-y-0 left-0 text-black text-5xl text-center">เมนู</h1>
                </div>
                <div class="border-l-8 border-l-transparent gap-0 justify-self-end bg-left-bottom">
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div>
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div>
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div>
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div>
                </div>
                <div class="bg-white p-3 border-8 border-[#ffffff]">
                    <div class="flex items-center justify-center">
                        <div class="grid grid-cols-1 gap-2 text-lg">
                            <h2 class="list-inside text-left">
                                <li>น้ำแข็งไส/เต้าทึง 15-20 บาท</li>
                                <li>เฉาก๊วยนมสด 25 บาท</li>
                                <li>รวมมิตร/ลอดช่องสิงคโปร์ 20 บาท</li>
                                <li>ขนมหวาน/ขนมไทย 15-20-25 บาท</li>
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-3 border-8 border-[#ffffff]">
                    <div class="flex items-center justify-center">
                        <div class="grid grid-cols-1 gap-2 text-lg">
                            <h2 class="list-inside text-left">
                                <li>ผลไม้ตามฤดูกาล 15-20-25 บาท</li>
                                <li>เบเกอรี่ 15-20-25 บาท</li>
                                <li>ลูกชิ้นทอด/นักเก็ตทอด 15-20-25 บาท</li>
                                <li>ขนมขบเคี้ยว 15-20-25 บาท</li>
                                <li>ขนมจีบ ซาลาเปา 10-15-20 บาท</li>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-evenly">
                <button type="button" onClick={() => {navigate("/user/restaurant")}} class="bg-[#CDC5AF] hover:bg-[#B9AE90] text-lg rounded py-2 px-3 mt-6 mb-6 hover:scale-110 ease-in-out duration-200">กลับไปหน้าร้านอาหาร</button>
                <button type="button" onClick={() => {navigate("/user/order")}} class="bg-[#BBD9B0] hover:bg-[#9DC88E] text-lg rounded py-2 px-3 mt-6 mb-6 hover:scale-110 ease-in-out duration-200">ต่อไป</button>
            </div>
        </Fragment>
    )
}

export default MenuIYen;