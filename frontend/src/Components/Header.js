import React from "react";
import { Outlet, Link } from "react-router-dom";

function Header() {

    return (
        <div class="sticky z-20 top-0">
            <div class="relative z-20 bg-[#E6EBA9]">
                <div class="px-6 lg:container lg:mx-auto lg:px-6 lg:py-2">
                    <div class="flex items-center justify-between">
                        <Link to='/' class="flex relative z-20 items-center">
                            <img class="w-16 md:w-[4.5rem] h-auto" src="https://imgz.io/images/2023/04/29/logoWebapp9874287d65c04354.png" alt="logoWebapp9874287d65c04354.png"/>
                            <label class="font-bold text-[24px]">FoodFastForU</label>
                        </Link>

                        <div class="flex items-center justify-end border-l lg:border-l-0">
                            <input type="checkbox" name="hamburger" id="hamburger" class="peer hidden" hidden />
                            <label for="hamburger" class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                                <div aria-hidden="true" class="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                                <div aria-hidden="true" class="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"></div>
                            </label>

                            <div class="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-[#E6EBA9] border-r shadow-xl transition duration-400 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                                <div class="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                                    <ul class="px-6 pt-32 text-gray-700 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
                                        <li>
                                            <Link to='/contact' class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2">
                                                <span class="relative font-bold group-hover:text-[#666B2D] text-[calc(80%+0.8vmin)] rounded py-1 px-2">ติดต่อเรา</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/register' class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2">
                                                <span class="relative font-bold group-hover:text-[#666B2D] text-[calc(80%+0.8vmin)] rounded py-1 px-2">ลงทะเบียน</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/login' class="group relative before:absolute before:inset-x-0 before:bottom-0 before:h-2">
                                                <span class="relative font-bold group-hover:text-[#666B2D] text-[calc(80%+0.8vmin)] rounded py-1 px-2">ลงชื่อเข้าใช้</span>
                                            </Link>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
