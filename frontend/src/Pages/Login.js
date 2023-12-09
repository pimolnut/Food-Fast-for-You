import React, { Fragment, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Header from '../Components/Header';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Cookies from 'universal-cookie';


function Login() {
    const cookies = new Cookies();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (value) => {
        setUsername(value);
    };
    const handlePasswordChange = (value) => {
        setPassword(value);
    };

    const handleSignIn = async  () => {
        try{
        const response = await axios.post(`https://localhost:7276/User/Authenticate`,{
            userName: username,
            password: password
        }).then((res)=>{
            localStorage.setItem('token',"Bearer "+res.data);
            navigate('/user');
        }).catch((err)=>{
            console.log(err.response.data)
            if (err.response.status == 401){
                alert('ข้อมูลผิดพลาด');
            }
        });
        }catch(err){
            console.log(err.response.data)
            if (err.response.status == 404){
                alert(err.response.data['message']);
            }

        }
    }


    return (
        <Fragment>
            <Header />
            <div class='grid grid-col-2 grid-flow-col gap-10 bg-white rounded-[30px] pl-4 pr-4 w-4/5 sm:w-3/5 md:w-3/5 lg:w-3/5 xl:w-2/5 m-auto mt-5'>
                <div>
                    <div class='text-[30px] mt-5 mb-5'>ลงชื่อเข้าใช้</div>
                    <div class='text-[24px] mb-5'>กรอกข้อมูลของคุณเพื่อลงชื่อเข้าใช้</div>
                    <div class="mb-5">
                        <div>
                            {/* <label for="Username" class="grid justify-items-start block mb-2 text-m">Username</label> */}
                            <input type="text" id="txtUsername" class="bg-[#EBEBEB] border border-gray-200 text-[18px] rounded block w-full p-2.5" placeholder="รหัสนักศึกษา / อีเมล" required onChange={(e) => handleUsernameChange(e.target.value)} />
                        </div>
                    </div>

                    <div class="mb-5">
                        {/* <label for="password" class="grid justify-items-start block mb-2 text-m">Password</label> */}
                        <input type="password" id="password" class="bg-[#EBEBEB] border border-gray-200 text-[18px] rounded block w-full p-2.5" placeholder="รหัสผ่าน" required onChange={(e) => handlePasswordChange(e.target.value)} />
                    </div>
                    <div class="mb-5">
                        <button class='bg-[#ECD8A5] hover:bg-[#E3C67B] text-[20px] rounded py-2 px-4 w-full mb-2' onClick={() => handleSignIn()}>ลงชื่อเข้าใช้</button>
                    </div>
                    <div class='grid grid-flow-col items-center mb-5'>
                        <div class='text-[20px]'>
                            ไม่มีบัญชีใช่หรือไม่ ?
                        </div>
                        <Link to='/register' class='bg-[#ECD8A5] hover:bg-[#E3C67B] text-[20px] rounded w-full mb-2'>ลงทะเบียน</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login;