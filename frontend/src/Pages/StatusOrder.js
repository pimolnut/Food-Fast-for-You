import React, { Fragment, useState, useEffect } from "react";
import { BsCircleFill, BsFillStarFill } from "react-icons/bs";
import axios from "axios";
import AuthNavbar from "../Components/AuthNavbar";
import { useNavigate } from "react-router-dom";

function StatusOrder() {
  // 5 Status Order
  // if true status dot will be green
  const navigate = useNavigate();
  // if false status dot will be gray
  let orderStatus = false;
  let goingStatus = false;
  let waitingStatus = false;
  let sendingStatus = false;
  let confirmStatus = false;
  const [data, setdata] = useState([]);
  // const [username] = useState('');
  // const [phoneNumber] = useState('');
  useEffect(() => {
    axios({
      method: "get",
      url: "https://localhost:7276/status",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    }).then((Response) => {
      console.log(Response.data);
      setdata(Response.data);
    });
  }, []);

  const starRating = (e) => {
    if (e == 0) {
      return;
    } else if (e == 1) {
      return <BsFillStarFill class="text-[#FF7F41]" />;
    } else if (e == 2) {
      return (
        <Fragment>
          <BsFillStarFill class="text-[#FF7F41]" />
          <BsFillStarFill class="text-[#FF7F41]" />
        </Fragment>
      );
    } else if (e == 3) {
      return (
        <Fragment>
          <BsFillStarFill class="text-[#FF7F41]" />
          <BsFillStarFill class="text-[#FF7F41]" />
          <BsFillStarFill class="text-[#FF7F41]" />
        </Fragment>
      );
    } else if (e == 4) {
      return (
        <Fragment>
          <BsFillStarFill class="text-[#FF7F41]" />
          <BsFillStarFill class="text-[#FF7F41]" />
          <BsFillStarFill class="text-[#FF7F41]" />
          <BsFillStarFill class="text-[#FF7F41]" />
        </Fragment>
      );
    } else if (e == 5) {
      return (
        <Fragment>
          <BsFillStarFill class="text-[#FF7F41]" />
          <BsFillStarFill class="text-[#FF7F41]" />
          <BsFillStarFill class="text-[#FF7F41]" />
          <BsFillStarFill class="text-[#FF7F41]" />
          <BsFillStarFill class="text-[#FF7F41]" />
        </Fragment>
      );
    }
  };
  try {
    if (data.status == 0) {
      orderStatus = true;
    }
    if (data.status == 1) {
      goingStatus = true;
    }
    if (data.status == 2) {
      waitingStatus = true;
    }
    if (data.status == 3) {
      sendingStatus = true;
    }
    if (data.status == 4) {
      confirmStatus = true;
    }
  } catch (error) {}
  return (
    <Fragment>
      <AuthNavbar />
      <div class="grid gap-3 m-auto mt-2 sm:pl-5 sm:pr-5">
        <label class="text-[calc(125%+0.8vmin)]">สถานะรายการอาหาร</label>
        <div>
          <div class="grid gap-5 bg-[#CFC7B1] rounded-xl pt-3 pb-3 sm:p-5">
            <div class="grid grid-cols-5 justify-items-center">
              <img
                class="w-12 h-12 sm:w-16 sm:h-16"
                src="https://cdn.discordapp.com/attachments/1046281833949708299/1101588591076986990/image.png"
              />
              <img
                class="w-12 h-12 sm:w-16 sm:h-16"
                src="https://cdn.discordapp.com/attachments/1046281833949708299/1101588640938860564/image.png"
              />
              <img
                class="w-12 h-12 sm:w-16 sm:h-16"
                src="https://cdn.discordapp.com/attachments/1046281833949708299/1101588675076300870/image.png"
              />
              <img
                class="w-12 h-12 sm:w-16 sm:h-16"
                src="https://cdn.discordapp.com/attachments/1046281833949708299/1101588695850684437/image.png"
              />
              <img
                class="w-12 h-12 sm:w-16 sm:h-16"
                src="https://cdn.discordapp.com/attachments/1046281833949708299/1101588757574078535/image.png"
              />
            </div>

            <div class="z-10 grid grid-cols-5 justify-items-center">
              {orderStatus ? (
                <BsCircleFill class="text-[#8DB280] border-[#8DB280] rounded-full" />
              ) : (
                <BsCircleFill class="text-[#D9D9D9]" />
              )}
              {goingStatus ? (
                <BsCircleFill class="text-[#8DB280]" />
              ) : (
                <BsCircleFill class="text-[#D9D9D9]" />
              )}
              {waitingStatus ? (
                <BsCircleFill class="text-[#8DB280]" />
              ) : (
                <BsCircleFill class="text-[#D9D9D9]" />
              )}
              {sendingStatus ? (
                <BsCircleFill class="text-[#8DB280]" />
              ) : (
                <BsCircleFill class="text-[#D9D9D9]" />
              )}
              {confirmStatus ? (
                <BsCircleFill class="text-[#8DB280]" />
              ) : (
                <BsCircleFill class="text-[#D9D9D9]" />
              )}
            </div>
            <div class="grid grid-cols-5 justify-items-center">
              <label>รับ order แล้ว</label>
              <label>กำลังไปร้านอาหาร</label>
              <label>กำลังรออาหาร</label>
              <label>รับอาหารแล้วกำลังนำไปส่ง</label>
              <label>จัดส่งอาหารเรียบร้อย</label>
            </div>
          </div>
        </div>
        {data.status >= 0 ? (
          <div class="flex gap-5 items-center bg-[#ECD8A5] rounded-xl p-5">
            <img
              class="block border border-[#E3C67B] rounded-full shadow w-36 h-36"
              src="https://i.ibb.co/bFZLMgd/Food-Fast-For-U.png"
            ></img>
            <div class="grid justify-items-start items-center">
              <div class="flex gap-2">
                <label class="text-[calc(100%+0.8vmin)]">ชื่อผู้รับฝาก:</label>
                <label class="text-[calc(100%+0.8vmin)]">{data.receiver}</label>
              </div>
              <div class="flex gap-2">
                <label class="text-[calc(100%+0.8vmin)]">เบอร์โทรศัพท์:</label>
                <label class="text-[calc(100%+0.8vmin)]">
                  {data.receivertel}
                </label>
              </div>
            </div>
          </div>
        ) : null}
        {data.status >= 4 ? (
          <div class="flex justify-evenly">
            <button
              onClick={() => {
                console.log(5);
                axios({
                  method: "delete",
                  url: "https://localhost:7276/Order",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: localStorage.getItem("token"),
                  },
                }).then((Response) => {
                  navigate("/user");
                });
              }}
              type="button"
              class="bg-[#BBD9B0] hover:bg-[#9DC88E] rounded py-2 px-3 mt-6 mb-6 hover:scale-110 ease-in-out duration-200"
            >
              รับ ORDER เรียบร้อย
            </button>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
}

export default StatusOrder;
// /* /*<div class="grid gap-1 justify-items-start">
//                             <label class="text-[calc(100%+0.8vmin)]">
//                                 คะแนนความพึงพอใจ
//                             </label>
//                             <div class="flex gap-5 text-[calc(100%+0.8vmin)]">
//                                 {starRating(2)}
//                                 <BsFillStarFill class="text-[#FF7F41]" /> *
//                             </div>
//                         </div>*/ */
