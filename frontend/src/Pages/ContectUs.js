import React from "react";
import Header  from "../Components/Header";
import { Fragment, useState } from "react";
import { BsGithub } from "react-icons/bs"
import { Location, useLocation } from "react-router-dom";
import AuthNavbar from "../Components/AuthNavbar";

function ContectUs() {
    const [rateValue, setRateValue] = useState(0);
    const [isSubmit, setIsSubmit] = useState(false);
    let location = useLocation();

    const handleSubmit = () => {
        if (rateValue) {
            setIsSubmit(true);
        }
    };
    return (
        <Fragment>
            {location.state === "Login success" ? <AuthNavbar />:<Header />}
            <div class="grid sm:grid-cols-2 sm:grid-flow-col justify-center gap-5 m-auto ml-10 mr-10 mt-10">
                <div class="group grid justify-center">
                    <span class="flex justify-start font-bold text-3xl mb-4 gap-5">
                        ทีมผู้พัฒนา :<br />
                    </span>
                    <div class="group grid ">
                        <a class="group grid justify-center mb-5 rounded-3xl pt-7 pb-5 bg-[#E0D7BF]">
                            <img class="w-20 mb-5 justify-self-center" src="https://imgz.io/images/2023/04/29/image365db00484dd53cd.png"  ></img>

                            <div className='ohm'>
                                <div class="text-xl ">
                                    พนธกร วัลลานนท์<br />
                                    64010552
                                </div>
                            </div>
                        </a>

                        <a class="group grid justify-center mb-5 rounded-3xl pt-7 pb-5 bg-[#FFFFFF]">
                            <img class="w-20 mb-5 justify-self-center" src=" https://imgz.io/images/2023/04/29/img.jpeg"  ></img>
                            <div className='memee'>
                                <div class="text-xl ">
                                    พิมลณัฐ ศรีเผด็จกุลชา<br />
                                    64010605
                                </div>
                            </div>
                        </a>

                        <a class="group grid justify-center mb-5 rounded-3xl pt-7 pb-5 bg-[#E0D7BF]">
                            <img class="w-20 mb-5 justify-self-center" src="https://imgz.io/images/2023/04/29/IMG_6183.jpeg"  ></img>
                            <div className='pich'>
                                <div class="text-xl ">
                                    ภาพพิชญ์ พงศ์พัฒนาวุฒิ<br />
                                    64010670
                                </div>
                            </div>
                        </a>

                        <a class="group grid justify-center mb-5 rounded-3xl pt-7 pb-5 bg-[#FFFFFF]">
                            <img class="w-20 mb-5 justify-self-center" src="https://imgz.io/images/2023/04/29/Worathut.jpeg"  ></img>
                            <div className='petch'>
                                <div class="text-xl">
                                    วรธัช จิตติชัย<br />
                                    64010759
                                </div>
                            </div>
                        </a>

                        <a class="group grid justify-center mb-5 rounded-3xl pt-7 pb-5 bg-[#E0D7BF]">
                            <img class="w-20 mb-5 justify-self-center" src="https://imgz.io/images/2023/04/29/two.jpeg"  ></img>
                            <div className='two'>
                                <div class="text-xl">
                                    วิฑูรย์ วัชรกฤตเวคิน<br />
                                    64010806
                                </div>
                            </div>
                        </a>

                    </div>
                </div>
                <div class="group grid justify-start">

                    <div class="flex flex-col space-y-4">
                        <div class="text-xl mt-4 mb-4">
                            ช่องทางการติดต่อ
                        </div>
                        <div class="rounded-2xl pt-3 pb-1  bg-[#ECD8A5] ">
                            <div className='ohm'>
                                <div class="text-xl ml-5 text-left">
                                    Email:64010552@kmitl.ac.th
                                </div>
                            </div>
                        </div>
                        <div class="rounded-2xl pt-3 pb-1 bg-[#ECD8A5]">
                            <div className='ohmTel'>
                                <div class="text-xl ml-5 text-left">
                                    Tel:0918198555
                                </div>
                            </div>
                        </div>
                        <a class="px-8 py-2 bg-[#B29A89] rounded-2xl " href="https://github.com/PlasticxPlastic" target="_blank" rel="noopener noreferrer">
                            <BsGithub class="w-8 h-auto" />
                        </a>

                        <br />
                        <br />
                        <br />

                        <div class="rounded-2xl pt-3 pb-1  bg-[#ECD8A5] ">
                            <div className='ohm'>
                                <div class="text-xl ml-5 text-left">
                                    Email:64010605@kmitl.ac.th
                                </div>
                            </div>
                        </div>
                        <div class="rounded-2xl pt-3 pb-1 bg-[#ECD8A5]">
                            <div className='ohmTel'>
                                <div class="text-xl ml-5 text-left">
                                    Tel:0945559645
                                </div>
                            </div>
                        </div>
                        <a class="px-8 py-2 bg-[#B29A89] rounded-2xl" href="https://github.com/pimolnut" target="_blank" rel="noopener noreferrer">
                            <BsGithub class="w-8 h-auto " />
                        </a>

                        <br />
                        <br />

                        <div class="rounded-2xl pt-3 pb-1  bg-[#ECD8A5] ">
                            <div className='ohm'>
                                <div class="text-xl ml-5 text-left">
                                    Email:64010670@kmitl.ac.th
                                </div>
                            </div>
                        </div>
                        <div class="rounded-2xl pt-3 pb-1 bg-[#ECD8A5]">
                            <div className='ohmTel'>
                                <div class="text-xl ml-5 text-left">
                                    Tel:0869201512
                                </div>
                            </div>
                        </div>
                        <a class="px-8 py-2 bg-[#B29A89] rounded-2xl" href="https://github.com/Pappich" target="_blank" rel="noopener noreferrer">
                            <BsGithub class="w-8 h-auto " />
                        </a>

                        <br />
                        <br />
                        <br />

                        <div class="rounded-2xl pt-3 pb-1  bg-[#ECD8A5] ">
                            <div className='ohm'>
                                <div class="text-xl ml-5 text-left">
                                    Email:64010759@kmitl.ac.th
                                </div>
                            </div>
                        </div>
                        <div class="rounded-2xl pt-3 pb-1 bg-[#ECD8A5]">
                            <div className='ohmTel'>
                                <div class="text-xl ml-5 text-left">
                                    Tel:0926415614
                                </div>
                            </div>
                        </div>
                        <a class="px-8 py-2 bg-[#B29A89] rounded-2xl" href="https://github.com/WoraPhet" target="_blank" rel="noopener noreferrer">
                            <BsGithub class="w-8 h-auto " />
                        </a>

                        <br />
                        <br />


                        <div class="rounded-2xl pt-3 pb-1 bg-[#ECD8A5] ">
                            <div className='ohm'>
                                <div class="text-xl ml-5 mr-5 text-left">
                                    Email:64010806@kmitl.ac.th
                                </div>
                            </div>
                        </div>
                        <div class="rounded-2xl pt-3 pb-1 bg-[#ECD8A5]">
                            <div className='ohmTel'>
                                <div class="text-xl ml-5 text-left">
                                    Tel:0616193031
                                </div>
                            </div>
                        </div>
                        <a class="px-8 py-2 bg-[#B29A89] rounded-2xl" href="https://github.com/UnixVextor" target="_blank" rel="noopener noreferrer">
                            <BsGithub class="w-8 h-auto " />

                        </a>

                    </div>

                </div>

            </div>

        </Fragment>
    )
}

export default ContectUs;