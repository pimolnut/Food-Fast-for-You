import React, { Fragment, useState } from 'react';
import AuthNavbar from '../Components/AuthNavbar';
import { useNavigate } from 'react-router-dom';
function MenuCurry() {
    const navigate = useNavigate();
    return (
        <Fragment>
            <AuthNavbar />
            <div class="grid grid-cols-25 grid-rows-1">
                <div class="col-span-4 p-3 text-4xl border-8 border-transparent">ร้าน Curry Shop</div>
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
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div>
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div>
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div>
                    <div class="w-0 h-0 border-t-[25px] border-t-transparent border-r-[50px] border-r-white border-b-[25px] border-b-transparent"></div>
                </div>
                <div class="bg-white p-3 border-8 border-[#ffffff]">
                    <div class="flex items-center justify-center">
                        <div class="grid grid-cols-1 gap-2 text-lg">หมวดเมนูไข่ๆ
                            <h2 class="list-inside text-left">
                                <li>ข้าวไข่ข้นกะเพราไก่ทอด  45 บาท</li>
                                <li>ข้าวไข่ข้นกะเพราหมูทอด  55 บาท</li>
                                <li>ข้าวไข่ข้นกะเพราปลาทอด 50 บาท</li>
                                <li>ข้าวไข่ข้นผัดผงกะหรี่ไก่ทอด 50 บาท</li>
                                <li>ข้าวไข่ข้นลาบหมู 55 บาท</li>
                                <li>ข้าวไข่ข้นไก่ทอด  40 บาท</li>
                                <li>ข้าวไข่ข้นปลาทอด  45 บาท</li>
                            </h2>
                            <br></br>
                            <div class="grid grid-cols-1 gap-2 text-lg">หมวดมาม่าคู่ใจ
                                <h2 class="list-inside text-left">
                                    <li>มาม่าต้มยำไก่ทอด 40 บาท</li>
                                    <li>มาม่าหมูสับไก่ทอด 40 บาท</li>
                                    <li>มาม่าผัดฉ่าไก่ทอด 40 บาท</li>
                                    <li>มาม่าผัดไข่ไก่ทอด 40 บาท</li>
                                    <li>มาม่าแห้งไก่ทอด 40 บาท</li>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-3 border-8 border-[#ffffff]">
                    <div class="flex items-center justify-center">
                        <div class="grid grid-cols-1 gap-2 text-lg">หมวดเมนูคิดอะไรไม่ออกสั่งกระเพรา
                            <h2 class="list-inside text-left">
                                <li>ข้าวกะเพราไก่ทอด  40 บาท</li>
                                <li>ข้าวกะเพราหมูทอด 45 บาท</li>
                                <li>ข้าวกะเพราะปลาทอด 45 บาท</li>
                                <li>ข้าวกะเพราหมูสับ 45 บาท</li>
                            </h2>
                            <br></br>
                            <div class="grid grid-cols-1 gap-2 text-lg">หมวดเมนูอื่นๆ
                                <h2 class="list-inside text-left">
                                    <li>ข้าวแกงกะหรี่หมูทอด 50 บาท</li>
                                    <li>ข้าวแกงกะหรี่ปลาทอด 45 บาท</li>
                                    <li>ข้าวผัดผงกะหรี่ไก่ทอด 50 บาท</li>
                                    <li>ข้าวลาบหมู 40  บาท</li>
                                    <li>บะหมี่แห้งต้มยำไก่ทอด  50 บาท</li>
                                    <li>ข้าวไก่เทอริยากิ  40 บาท</li>
                                    <li>ข้าวหมูคัตสึดัง  50 บาท</li>
                                    <li>ข้าวไก่คัตสึ 35 บาท</li>
                                    <li>ข้าวไก่โอโคโน่  40 บาท</li>
                                    <li>ข้าวไก่ทอด  35 บาท</li>
                                </h2>
                            </div>
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

export default MenuCurry;