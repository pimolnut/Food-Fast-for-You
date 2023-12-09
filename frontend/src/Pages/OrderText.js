import React, { Fragment, useState } from "react";
import { useEffect } from "react";
// import Addmoreinput from '../Components/Addmoreinput';
import axios from "axios";
import { GrMap } from "react-icons/gr";
import AuthNavbar from "../Components/AuthNavbar";
import { useNavigate } from "react-router-dom";
import Cookie from "universal-cookie";
import jwtDecode from "jwt-decode";

function OrderText() {
  const cookies = new Cookie();
  const [userdata, setUserdata] = useState([]);
  const [note, setNote] = useState("");
  const [address, setAddress] = useState("");
  const [store, setstore] = useState("");
  const [foodName, setFoodName] = useState("");
  const [value, setvalue] = useState(1);
  const navigate = useNavigate();

  const handleNoteChange = (value) => {
    setNote(value);
  };

  const handleAddressChange = (value) => {
    setAddress(value);
  };

  const fetchdata = () => {
    const data = jwtDecode(cookies.get("jwt_authorization"));
    const request =
      data[
        "http://schemas.microsoft.com/ws/2008/06/identity/claims/primarysid"
      ];

    axios.get(`${process.env.REACT_APP_API}/User/${request}`).then((res) => {
      const response = res.data;
      setUserdata(response);
    });
  };

  const handleSumOrder = async () => {
    
    axios({
      method: "post",
      url: "https://localhost:7276/Order",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      data: {
        munu: foodName,
        restaurants: store,
        count: value,
        note: note,
        address: address,
      },
    }).then((Response) => {
      console.log(Response.data);
      navigate("/user/order/statusorder");
      
    });
    

    // navigate("/user/order/statusorder");
  };

  useEffect(() => {
    //fetchdata();
  }, []);

  return (
    <Fragment>
      <AuthNavbar />
      <div class="bg-[#CFC7B1] rounded-lg m-auto px-5 py-5 mt-5 mb-5 w-full sm:w-4/5 lg:w-4/5">
        <div>
          <div class="grid mb-3">
            <label class="justify-self-start mb-1 font-semibold tracking-wide text-[calc(70%+0.8vmin)]">
              พิมพ์สั่งอาหารที่นี่
            </label>
            <div class="bg-[#F6F1DD] rounded-md px-5 py-5">
              <div>
                <div class="grid grid-cols-9 items-center gap-1 md:gap-5 mb-3">
                  <div class="col-span-3">
                    <label class="font-m text-[calc(70%+0.8vmin)]">
                      ชื่ออาหาร
                    </label>
                  </div>
                  <div class="col-span-3">
                    <label class="font-m text-[calc(70%+0.8vmin)]">
                      ร้านอาหาร
                    </label>
                  </div>
                  <div class="col-span-3">
                    <label class="font-m text-[calc(70%+0.8vmin)]">จำนวน</label>
                  </div>
                </div>
                <div class="grid grid-cols-9 items-center gap-1 md:gap-5 mb-2">
                  <div class="col-span-3">
                    <input
                      type="text"
                      name="foodName"
                      class="text-[calc(70%+0.8vmin)] border-[#CFC7B1] rounded w-full p-1"
                      placeholder="ระบุชื่ออาหาร"
                      onChange={(e) => setFoodName(e.target.value)}
                    />
                  </div>
                  <div class="col-span-3">
                    <input
                      type="text"
                      name="storeName"
                      class="text-[calc(70%+0.8vmin)] border-[#CFC7B1] rounded w-full p-1"
                      placeholder="ระบุชื่อร้าน"
                      onChange={(e) => setstore(e.target.value)}
                    />
                  </div>
                  <div class="col-span-3">
                    <input
                      type="text"
                      name="value"
                      class="text-[calc(70%+0.8vmin)] border-[#CFC7B1] rounded w-full p-1"
                      placeholder="ระบุจำนวน"
                      pattern="[1-9]{1}"
                      onChange={(e) => setvalue(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid mb-4">
            <label class="justify-self-start mb-1 font-semibold tracking-wide text-[calc(70%+0.8vmin)]">
              หมายเหตุ
            </label>
            <textarea
              class="bg-[#F6F1DD] text-[calc(70%+0.8vmin)] border-0 rounded-md"
              placeholder="หมายเหตุ"
              onChange={(e) => handleNoteChange(e.target.value)}
            ></textarea>
          </div>

          <div class="grid gap-1">
            <div class="flex justify-self-start mb-1 gap-2">
              <GrMap class="scale-150 ml-2" />
              <label class="font-semibold text-[calc(70%+0.8vmin)]">
                ที่อยู่
              </label>
            </div>
            <textarea
              class="bg-[#F6F1DD] text-[calc(70%+0.8vmin)] border-0 rounded-md w-full"
              placeholder="ระบุที่อยู่"
              onChange={(e) => handleAddressChange(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>

      <div class="flex justify-evenly m-auto ">
        <button
          onClick={() => {
            navigate("/user/restaurant");
          }}
          class="bg-[#CDC5AF] hover:bg-[#B9AE90] text-lg rounded font-medium py-3 px-3 mt-6 mb-5 hover:scale-110 ease-in-out duration-200"
        >
          กลับไปที่หน้าเมนู
        </button>
        <button
          class="bg-[#BBD9B0] hover:bg-[#9DC88E] text-lg rounded font-medium py-3 px-3 mt-6 mb-5 hover:scale-110 ease-in-out duration-200"
          onClick={() => handleSumOrder()}
        >
          ยืนยันรายการอาหาร
        </button>
      </div>
    </Fragment>
  );
}

export default OrderText;
