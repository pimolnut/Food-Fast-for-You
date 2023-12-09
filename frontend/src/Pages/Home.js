import React, { Fragment, useState } from 'react';
import Header from '../Components/Header';

function Home() {
    return (
        <Fragment>
            {/* Header */}
            <Header />
            {/* main */}
            <section class="bg-[#F5EED5] flex justify-center pt-32">
                {/* BG */}
                <img src='https://imgz.io/images/2023/04/29/webapp2_edit.png' class="absolute bottom-0 left-0 h-screen" />
                {/* circle */}
                <img src="https://imgz.io/images/2023/04/29/circle.png" class="z-20 animate-ping w-6 absolute left-[350px] top-[90px]" />
                <img src="https://imgz.io/images/2023/04/29/circle.png" class="z-20 animate-ping w-6 absolute right-96 top-20" />
                <img src="https://imgz.io/images/2023/04/29/circle.png" class="z-20 animate-ping w-6 absolute left-[150px] bottom-20" />
                <img src="https://imgz.io/images/2023/04/29/circle.png" class="z-20 animate-ping w-6 absolute right-40 top-64" />
                {/* waveShape */}
                <img src="https://imgz.io/images/2023/04/29/minimal-2.png" class="absolute z-10 bottom-10 right-10 object-scale-down w-60 hidden sm:block" />
                {/* sun */}
                <img src="https://imgz.io/images/2023/04/29/sun.png" class="absolute top-52 right-14 object-scale-down w-20 animate-spin hidden sm:block" />
                {/* mainImg */}
                <img src='https://imgz.io/images/2023/04/29/BG2_edit-2.png' class="absolute bottom-20 left-10 w-[550px] animate-bounce hidden md:block" />
                {/* text */}
                <div class="md:pl-52 justify-start z-40">
                    <h1 class="text-4xl leading-normal py-10 px-10 text-left">
                        Food Delivery <br />
                        & Service
                        <span class="underline decoration-wavy decoration-orange-300"> For U</span>
                        <h1 class="text-xl">ยินดีต้อนรับเข้าสู่บริการรับฝาก-ฝากซื้ออาหาร<br />
                            ที่โรงพระเทพเพื่อความสะดวกสบายของคุณ</h1>
                    </h1>
                    <h2 class="underline decoration-wavy decoration-white-400"></h2>
                </div>
            </section>
        </Fragment>
    )
}

export default Home;