import Image from "next/image";
import React from "react";
import UserEditAccountModal from "./UserEditAccountModal";

const UserDetails = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image    
        src={"/img/humans/h1.jpg"}
        alt="pro-img"
        width={100}
        height={100}
        className="mx-auto  rounded-full "
      />

      <div>
        <h1 className="text-xl text-center my-5 font-semibold leading-tight tracking-tight text-gray-500 md:text-2xl ">
         rabeeh
        </h1>
        <p className="text-gray-500 mb-4">email@.com</p>
     
          <UserEditAccountModal />
       
      </div>
    </div>
  );
};

export default UserDetails;
