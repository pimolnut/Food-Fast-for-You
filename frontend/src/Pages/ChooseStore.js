import React from "react";
import { Fragment } from "react";
import ImageSlider from "../Components/ImageSlider";
import AuthNavbar from "../Components/AuthNavbar";
import { Link } from "react-router-dom";

function ChooseStore() {
    return (
        <Fragment>
            <AuthNavbar />
            <ImageSlider />
            <div class='block text-2xl rounded-full bg-[#ECD8A5] m-auto w-96 h-12 py-3 mt-4'>
                เลือกร้านอาหาร
            </div>
            <div class="mt-2">
                <div class="grid mb-2 sm:grid-cols-3 md:grid-cols-6">
                    <Link to='/user/restaurant/technointer' class="rounded-xl hover:bg-[#ECD8A5] m-3 pt-3 hover:scale-110 ease-in-out duration-200">
                        {/* Store No.1 */}
                        <img class=" block w-24 h-24 border border-[#E3C67B] rounded-full shadow m-auto mb-2" src='https://cdn.discordapp.com/attachments/1101922222542700617/1101927154758987866/techno_2.jpg' />
                        <label for="Username" class="grid justify-items-center block mb-2 text-base">
                            ร้านเทคโนอินเตอร์</label>
                    </Link>
                    <Link to='/user/restaurant/pasri' class="rounded-xl hover:bg-[#ECD8A5] m-3 pt-3 hover:scale-110 ease-in-out duration-200">
                        {/* Store No.2 */}
                        <img class="block w-24 h-24 border border-[#E3C67B] rounded-full shadow m-auto mb-2" src='https://cdn.discordapp.com/attachments/1101922222542700617/1101927148232658994/Pasri_2.jpg' />
                        <label for="Username" class="grid justify-items-center block mb-2 text-base">
                            ร้านป้าศรีส้มตำ</label>
                    </Link>
                    <Link to='/user/restaurant/inhauy' class="rounded-xl hover:bg-[#ECD8A5] m-3 pt-3 hover:scale-110 ease-in-out duration-200">
                        {/* Store No.3 */}
                        <img class="block w-24 h-24 border border-[#E3C67B] rounded-full shadow m-auto mb-2" src='https://cdn.discordapp.com/attachments/1101922222542700617/1101927146299064420/INhauy_2.jpg' />
                        <label for="Username" class="grid justify-items-center block mb-2 text-base">
                            ร้านไอหนวด</label>
                    </Link>
                    <Link to='/user/restaurant/mama' class="rounded-xl hover:bg-[#ECD8A5] m-3 pt-3 hover:scale-110 ease-in-out duration-200">
                        {/* Store No.4 */}
                        <img class="block w-24 h-24 border border-[#E3C67B] rounded-full shadow m-auto mb-2" src='https://cdn.discordapp.com/attachments/1101922222542700617/1101927147154723009/MaMa_2.jpg' />
                        <label for="Username" class="grid justify-items-center block mb-2 text-base">
                            ร้านมามา<br />ก๋วยเตี๋ยวเรือ</label>
                    </Link>
                    <Link to='/user/restaurant/narong' class="rounded-xl hover:bg-[#ECD8A5] m-3 pt-3 hover:scale-110 ease-in-out duration-200">
                        {/* Store No.5 */}
                        <img class="block w-24 h-24 border border-[#E3C67B] rounded-full shadow m-auto mb-2" src='https://cdn.discordapp.com/attachments/1101922222542700617/1101927147490258954/NarRong_2.jpg' />
                        <label for="Username" class="grid justify-items-center block mb-2 text-base">
                            ร้านณรงค์<br />ข้าวมันไก่</label>
                    </Link>
                    <Link to='/user/restaurant/billion' class="rounded-xl hover:bg-[#ECD8A5] m-3 pt-3 hover:scale-110 ease-in-out duration-200">
                        {/* Store No.6 */}
                        <img class="block w-24 h-24 border border-[#E3C67B] rounded-full shadow m-auto mb-2" src='https://cdn.discordapp.com/attachments/1101922222542700617/1101927145586053130/billion_2.jpg' />
                        <label for="Username" class="grid justify-items-center block mb-2 text-base">
                            ร้านบิลเลียน</label>
                    </Link>
                    <Link to='/user/restaurant/itlist' class="rounded-xl hover:bg-[#ECD8A5] m-3 pt-3 hover:scale-110 ease-in-out duration-200">
                        {/* Store No.7 */}
                        <img class="block w-24 h-24 border border-[#E3C67B] rounded-full shadow m-auto mb-2" src='https://cdn.discordapp.com/attachments/1101922222542700617/1101927146575908986/ItList_2.jpg' />
                        <label for="Username" class="grid justify-items-center block mb-2 text-base">
                            ร้านอิดริส</label>
                    </Link>
                    <Link to='/user/restaurant/iyen' class="rounded-xl hover:bg-[#ECD8A5] m-3 pt-3 hover:scale-110 ease-in-out duration-200">
                        {/* Store No.8 */}
                        <img class="block w-24 h-24 border border-[#E3C67B] rounded-full shadow m-auto mb-2" src='https://cdn.discordapp.com/attachments/1101922222542700617/1101927146852712468/IYen_2.jpg' />
                        <label for="Username" class="grid justify-items-center block mb-2 text-base">
                            ร้านไอเย็น</label>
                    </Link>
                    <Link to='/user/restaurant/pfon' class="rounded-xl hover:bg-[#ECD8A5] m-3 pt-3 hover:scale-110 ease-in-out duration-200">
                        {/* Store No.9 */}
                        <img class="block w-24 h-24 border border-[#E3C67B] rounded-full shadow m-auto mb-2" src='https://cdn.discordapp.com/attachments/1101922222542700617/1101927148605943890/PFon_2.jpg' />
                        <label for="Username" class="grid justify-items-center block mb-2 text-base">
                            ร้านพี่ฝน<br />กาแฟสด&น้ำปั่น</label>
                    </Link>
                    <Link to='/user/restaurant/ochana' class="rounded-xl hover:bg-[#ECD8A5] m-3 pt-3 hover:scale-110 ease-in-out duration-200">
                        {/* Store No.10 */}
                        <img class="block w-24 h-24 border border-[#E3C67B] rounded-full shadow m-auto mb-2" src='https://cdn.discordapp.com/attachments/1101922222542700617/1101927147850956851/OChaNa_2.jpg' />
                        <label for="Username" class="grid justify-items-center block mb-2 text-base">
                            ร้านโอชานะ</label>
                    </Link>
                    <Link to='/user/restaurant/curry' class="rounded-xl hover:bg-[#ECD8A5] m-3 pt-3 hover:scale-110 ease-in-out duration-200">
                        {/* Store No.11 */}
                        <img class="block w-24 h-24 border border-[#E3C67B] rounded-full shadow m-auto mb-2" src='https://cdn.discordapp.com/attachments/1101922222542700617/1101927145946755134/curry_2.jpg' />
                        <label for="Username" class="grid justify-items-center block mb-2 text-base">
                            ร้าน Curry Shop</label>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default ChooseStore