import React from 'react';
import axios from 'axios';
import { Fragment, useState } from 'react';
// import { useNavigate, Link } from "react-router-dom"
import Upload from '../Components/upload';
import AuthNavbar from '../Components/AuthNavbar';

function EditProfile() {

    const [error, setError] = useState('กรอกข้อมูลไม่ถูกต้อง');

    // const navigate = useNavigate()
    const [firstname, setFirstname] = useState("first")
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [checkInvalid, setCheckInvalid] = useState(false)
    const [passwordReCheck, setPasswordRecheck] = useState(false)

    const enterEvent = async (e) => {
        if (e.key === 'Enter') {
            await onsubmit()
        }
    }

    const onsubmit = async () => {
        if (firstname.length === 0 || lastname.length === 0 || username.length === 0 || email.length === 0 || phoneNumber.length === 0) {
            setCheckInvalid(true)
        }
        else if (password !== confirmPassword || password === '') {
            setPasswordRecheck(true)
        }
        else {
            setPasswordRecheck(false)
            setCheckInvalid(false)
            try {
                const data = await axios.post(`${process.env.REACT_APP_API}/Auth/Register`, {
                    FirstName: firstname,
                    LastName: lastname,
                    Username: username,
                    Email: email,
                    PhoneNumber: phoneNumber,
                    Password: password
                })
                console.log(data.status)

                //if Success go to login
                if (data.status === 200) {
                    // navigate('/login')
                    window.location.reload()
                }

            } catch (err) {
                console.log(err.response.status)
                if (err.response.status === 400) {
                    // setCheckInvalid(true)
                    setPasswordRecheck(false)
                }
            }
        }
    }

    return (
        <Fragment>
            <AuthNavbar />
            <div class='grid grid-flow-col gap-5 bg-white rounded-[30px] pl-5 pr-5 sm:pl-10 sm:pr-10 xl:pl-0 m-auto mt-[16px] mb-[2px] sm:w-4/5'>
                <img
                    src="https://i.ibb.co/bFZLMgd/Food-Fast-For-U.png"
                    class="hidden xl:block w-[483px]"
                    alt="..." />
                <div>
                    <div class='text-[calc(80%+0.8vmin)] mt-6 mb-2'>แก้ไข้ข้อมูล</div>
                    <div class="flex flex-col-reverse md:grid gap-2 md:grid-cols-2">
                        <div>
                            <div class="mb-3">
                                <label for="firstname" class="grid justify-items-start block text-base">ชื่อจริง</label>
                                <input type="text" id="txtUsername" class="bg-[#EBEBEB] border border-gray-200 text-base rounded block w-full p-2.5" placeholder="Jardani" required value={firstname} onChange={e => setFirstname(e.target.value)} onKeyDown={enterEvent} />
                            </div>
                            <div class="mb-3">
                                <label for="lastname" class="grid justify-items-start block text-base">นามสกุล</label>
                                <input type="text" id="txtlastname" class="bg-[#EBEBEB] border border-gray-200 text-base rounded block w-full p-2.5" placeholder="Jovonovich" required value={lastname} onChange={e => setLastname(e.target.value)} onKeyDown={enterEvent} />
                            </div>
                        </div>
                        <div class=''>
                            <label for="Upload_photo" class="grid block text-base">อัพโหลดรูปภาพ</label>
                            <Upload />
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="Username" class="grid justify-items-start block text-base">รหัสนักศึกษา</label>
                        <input type="text" id="txtUsername" class="bg-[#EBEBEB] border border-gray-200 text-base rounded block w-full p-2.5" placeholder="6401XXXX" required value={username} onChange={e => setUsername(e.target.value)} onKeyDown={enterEvent} />
                    </div>
                    <div class="mb-3">
                        <div class="flex gap-5">
                            <label for="E-mail" class="grid justify-items-start block text-m">อีเมล</label>
                            {/* {email ? '' : <label class="text-red-500">ยังไม่ได้กรอกข้อมูล</label>} */}
                        </div>
                        <input type="email" id="txtEmail" class="bg-[#EBEBEB] border border-gray-200 text-base rounded block w-full p-2.5" placeholder="6401XXXX@email.com" required value={email} onChange={e => setEmail(e.target.value)} onKeyDown={enterEvent} />
                    </div>
                    <div class="mb-3">
                        <div class="flex gap-5">
                            <label for="phone" class="grid justify-items-start block text-m">เบอร์โทรศัพท์</label>
                            {/* {phoneNumber ? '' : error} */}
                            {/* {phoneNumber ? '' : <label class="text-red-500">ยังไม่ได้กรอกข้อมูล</label>} */}
                        </div>
                        <input type="tel" id="phone" class="bg-[#EBEBEB] border border-gray-200 text-base rounded block w-full p-2.5" placeholder="0123456789" pattern="[0-9]{10}" required value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} onKeyDown={enterEvent} />
                    </div>
                    <div class="grid gap-2 md:grid-cols-2">
                        <div class="mb-3">
                            <label for="password" class="grid justify-items-start block text-m">รหัสผ่าน</label>
                            <input type="password" id="password" class="bg-[#EBEBEB] border border-gray-200 text-base rounded block w-full p-2.5" placeholder="ใส่รหัสผ่าน" required value={password} onChange={e => setPassword(e.target.value)} onKeyDown={enterEvent} />
                        </div>
                        <div class="">
                            <label for="confirm_password" class="grid justify-items-start block text-m">ยืนยันรหัสผ่าน</label>
                            <input type="password" id="confirm_password" class="bg-[#EBEBEB] border border-gray-200 text-base rounded block w-full p-2.5" placeholder="ใส่รหัสผ่าน" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} onKeyDown={enterEvent} />
                        </div>
                    </div>
                    {checkInvalid ? <label className='text-red-500 text-m'>** กรอกข้อมูลไม่ครบถ้วน **</label> : ''}
                    {passwordReCheck ? <label className='text-red-500 text-m'>** รหัสผ่านและการยืนยันรหัสผ่านไม่ถูกต้อง **</label> : ''}
                    <div>
                        <button class='bg-[#ECD8A5] hover:bg-[#E3C67B] text-lg rounded py-2 px-3 mt-6 mb-6' onClick={onsubmit}>ยืนยัน</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EditProfile;