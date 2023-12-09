import React, { Fragment, useState } from 'react';
import AuthNavbar from '../Components/AuthNavbar';
import { useNavigate } from 'react-router-dom';

function MenuTechNoInter() {
    const navigate = useNavigate();
    return (
        <Fragment>
            <AuthNavbar />
            <div class="grid grid-cols-25 grid-rows-1">
                <div class="col-span-4 p-3 text-4xl border-8 border-transparent">ร้านเทคโนอินเตอร์</div>
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
                </div>
                <div class="bg-white p-3 border-8 border-[#ffffff]">
                    <div class="flex items-center justify-center">
                        <div class="grid grid-cols-1 gap-2 text-lg">หมวดของว่างรองท้อง
                            <h2 class="list-inside text-left">
                                <li>ครีมซุบเห็ด ครีมซุบไก่ 35 บาท</li>
                                <li>สลัดเทคโน ไก่ทอด ไก่ย่าง หมูทอด ปลาทอด 45 บาท</li>
                                <li>ไข่กะทะทรงเครื่อง 35 บาท</li>
                            </h2>
                            <br></br>
                            <div class="grid grid-cols-1 gap-2 text-lg">หมวดชุดอาหารเช้า
                                <h2 class="list-inside text-left">
                                    <li>ชุดอาหารเช้า  45 บาท</li>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-3 border-8 border-[#ffffff]">
                    <div class="flex items-center justify-center">
                        <div class="grid grid-cols-1 gap-2 text-lg">หมวดเมนูแนะนำ
                            <h2 class="list-inside text-left">
                                <li>ข้าวหน้าหมูทอดแกงกะหรี่ หมูทอดทงคัตสึ หมูทอดซอสแฮม 40 บาท</li>
                                <li>ข้าวไก่ย่างเทอริยากิ ข้าวยำไก่ย่าง  35 บาท</li>
                                <li>ข้าวไก่แพนง ไก่เขียวหวาน 35 บาท</li>
                                <li>สเต็ก อกไก่ ไก่สไปซี่ สันคอหมู เนื้อโคขุน 35 บาท</li>
                                <li>ข้าวไก่ชีส 30 บาท</li>
                                <li>ข้าวไก่ทอดเทคโน ข้าวไก่คาราเกะ ไก่ทอดกระเพรา 40 บาท</li>
                                <li>ข้าวหมูสไปซี่ ข้าวหมูกะทะผัดไข่ 40 บาท</li>
                                <li>ข้าวเบคอนไข่กระทะ 35 บาท</li>
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

export default MenuTechNoInter;