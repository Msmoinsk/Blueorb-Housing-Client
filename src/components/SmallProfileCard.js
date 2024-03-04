import React from "react";
import { primaryGrey, textGrey, textWhite } from "@/constants/index";

function SmallProfileCard() {
  return (
    <div className="flex items-center">
      <div className="px-2">
        <img src="Akash Yadav.png" alt="" width={50} height={50} />
      </div>
      <div className="px-2">
        <div className="font-[600] text-[14px] text-primaryBlack dark:text-textWhite">
          Akash
        </div>
        <div className="font-[400] text-[14px] text-primaryGrey dark:text-textGrey">
          Company Manager
        </div>
      </div>
    </div>
  );
}

export default SmallProfileCard;
