import React, { Fragment, useState } from 'react';

function Review() {
    const [rateValue, setRateValue] = useState(0);
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = () => {
        if (rateValue) {
            setIsSubmit(true);
        }
    };
    return (
        <Fragment>
            <div class="flex justify-center md:justify-start md:ml-12">
                <span class="text-[calc(125%+0.8vmin)] mt-10 mb-4">
                    รีวิวคำสั่งซื้อของคุณ
                </span>
            </div>
            <div class="flex justify-center md:justify-start md:ml-12">
                <p class="text-[calc(100%+0.8vmin)] mb-8">
                    ให้เรทคะแนนแก่ผู้รับฝากหิ้วข้าวของคุณ</p>
            </div>
            <div class="grid justify-center md:grid-cols-2 md:gap-5 w-full mb-8 m-auto pl-2 pr-2">
                <div class="flex justify-center gap-2">
                    <div class="text-xl">ชื่อ:</div>

                    <div class="text-xl">firstName</div>
                    <div class="text-xl">lastName</div>
                </div>
                <div class="flex justify-center gap-2">
                    <div class="text-xl">อีเมล:</div>

                    <div class="text-xl">email</div>
                </div>
                <div class="flex justify-center gap-2">
                    <div class="text-xl">รหัสนักศึกษา:</div>

                    <div class="text-xl">userName</div>
                </div>
                <div class="flex justify-center gap-2">
                    <div class="text-xl">เบอร์โทร:</div>

                    <div class="text-xl">092xxxXXXX</div>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-3 m-auto mb-8 sm:ml-10 sm:mr-10">
                <div class="grid items-start py-1">
                    <p class="text text-xl">ความพึงพอใจ <br />(มากสุด 5 คะแนน)</p>
                    <div className="grid self-start grid-cols-5 justify-items-center ">
                        {[1, 2, 3, 4, 5].map((value) => {
                            return (
                                <div
                                    key={value}
                                    class={`grid place-content-center h-6 w-6 sm:h-12 sm:w-12 rounded-full cursor-pointer  transition-all ${value === rateValue
                                        ? "bg-orange-500 text-white"
                                        : "text-gray-400 hover:bg-[white] hover:text-orange-500 bg-zinc-900"
                                        }`}
                                    onClick={() => setRateValue(value)}
                                >
                                    {value}
                                </div>

                            );
                        })}
                    </div>
                </div>
                <div class="grid items-center">
                    <textarea type="text" placeholder="คำแนะนำ" class='h-36 w-full text-lg text-black bg-[#CFC7B1] border-0 rounded-lg' />
                </div>

            </div>

            <div>
                <button type="button" class="bg-[#BBD9B0] hover:bg-[#9DC88E] text-lg rounded py-2 px-3 hover:scale-110 ease-in-out duration-200"
                    onClick={handleSubmit}>
                    เสร็จสิ้น
                </button>
            </div>


        </Fragment>
    )
}

export default Review