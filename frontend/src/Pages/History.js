import React, { Fragment, useState } from 'react';


function History() {
    const [rateValue, setRateValue] = useState(0);
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = () => {
        if (rateValue) {
            setIsSubmit(true);
        }
    };
    return (
        
        <Fragment>
            <div class="grid grid-flow-row auto-rows-max gap-5 m-auto ml-10 mr-10 mt-[70px]">
                <div>
                    <span class="font-bold text-3xl mb-4 gap-5">
                        ประวัติการสั่งอาหาร<br />
                    </span>
                </div>
                <div>
                    <a href="#" class="group grid justify-start rounded-3xl pt-7 pb-5 bg-[#D9D9D9]">
                        <div class="font text-2xl text-left ml-4 mb-4 gap-5">
                            ชื่อร้าน:<br />
                            เมนู:<br />
                            สั่งเมื่อวันที่:<br />
                            ชื่อคนรับฝาก:<br />
                        </div>

                    </a>
                </div>
                <div>
                    <a href="#" class="group grid justify-start rounded-3xl pt-7 pb-5 bg-[#D9D9D9]">
                        <div class=" font text-2xl text-left ml-4 mb-4 gap-5">
                            ชื่อร้าน:<br />
                            เมนู:<br />
                            สั่งเมื่อวันที่:<br />
                            ชื่อคนรับฝาก:<br />
                        </div>
                    </a>
                </div>
                <a href="#" class="group grid justify-start rounded-3xl pt-7 pb-5 bg-[#D9D9D9]">
                    <div class=" font text-2xl text-left ml-4 mb-4 gap-5">
                        ชื่อร้าน:<br />
                        เมนู:<br />
                        สั่งเมื่อวันที่:<br />
                        ชื่อคนรับฝาก:<br />
                    </div>
                </a>
                <a href="#" class="group grid justify-start rounded-3xl pt-7 pb-5 bg-[#D9D9D9]">
                    <div class=" font text-2xl text-left ml-4 mb-4 gap-5">
                        ชื่อร้าน:<br />
                        เมนู:<br />
                        สั่งเมื่อวันที่:<br />
                        ชื่อคนรับฝาก:<br />
                    </div>
                </a>
                <a href="#" class="group grid justify-start rounded-3xl pt-7 pb-5 bg-[#D9D9D9]">
                    <div class=" font text-2xl text-left ml-4 mb-4 gap-5">
                        ชื่อร้าน:<br />
                        เมนู:<br />
                        สั่งเมื่อวันที่:<br />
                        ชื่อคนรับฝาก:<br />
                    </div>
                </a>
                
            </div>


        </Fragment>
    )
}

export default History;