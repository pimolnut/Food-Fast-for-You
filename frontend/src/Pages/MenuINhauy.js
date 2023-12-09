import React, { Fragment, useState } from 'react';
import AuthNavbar from '../Components/AuthNavbar';
import { useNavigate } from 'react-router-dom';

function MenuINhauy() {
    const navigate = useNavigate();
    return (
        <Fragment>
            <AuthNavbar />
            <div class="grid grid-cols-25 grid-rows-1">
                <div class="col-span-4 p-3 text-4xl border-8 border-transparent">ร้านไอหนวด</div>
                <div class="p-3 bg-[#B9DBAD]">
                    <h1 class="relative h-40 w-100 absolute inset-y-0 left-0 text-black text-5xl text-center">เมนู</h1>
                </div>
                <div class="border-l-8 border-l-transparent gap-0 justify-self-end bg-left-bottom">
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div>
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div>
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div>
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div>
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div>
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div>
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div>
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div>
                </div>
                <div class="bg-white p-3 border-8 border-[#ffffff]">
                    <div class="flex items-center justify-center">
                        <div class="grid grid-cols-1 gap-2 text-lg">หมวดราคาข้าวราดแกง
                            <h2 class="list-inside text-left">
                                <li>ข้าวราดแกง 1 อย่าง 30 บาท</li>
                                <li>ข้าวราดแกง 2อย่าง 35 บาท</li>
                                <li>ข้าวราดแกง 3 อย่าง 40 บาท</li>
                                <li>ข้าวเปล่า  10 บาท</li>
                                <li>ไข่ดาว-ไข่เจียว  5 บาท</li>
                                <li>ไข่พะโล้ใส่ถ้วย 10-15 บาท</li>
                            </h2>
                            <br></br>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-3 border-8 border-[#ffffff]">
                    <div class="flex items-center justify-center">
                        <div class="grid grid-cols-1 gap-2 text-lg">หมวดเมนูขึ้นชื่อ
                            <h2 class="list-inside text-left">
                                <li>แกงเขียวหวานไก่</li>
                                <li>บล็อกโคลี่ผัดกุ้ง</li>
                                <li>ไข่ลูกเขย</li>
                                <li>ปลาดุกผัดพริกขิง</li>
                                <li>พะแนงหมู</li>
                                <li>มัสมั่นไก่</li>
                                <li>กะหล่ำปลีผัดน้ำปลา</li>
                                <li>ผัดวุ้นเส้นหมูสับ</li>
                                <li>ต้มข่าไก่</li>
                                <li>ทอดมันหมู</li>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-evenly">
                <button type="button"  onClick={() => {navigate("/user/restaurant")}} class="bg-[#CDC5AF] hover:bg-[#B9AE90] text-lg rounded py-2 px-3 mt-6 mb-6 hover:scale-110 ease-in-out duration-200">กลับไปหน้าร้านอาหาร</button>
                <button type="button"  onClick={() => {navigate("/user/order")}} class="bg-[#BBD9B0] hover:bg-[#9DC88E] text-lg rounded py-2 px-3 mt-6 mb-6 hover:scale-110 ease-in-out duration-200">ต่อไป</button>
            </div>
        </Fragment>
    )
}

export default MenuINhauy;