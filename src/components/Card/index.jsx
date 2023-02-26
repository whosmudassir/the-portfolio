import React, { useState } from "react";
import Image from "next/image";
import img1 from "../../assets/images/img-01.png";
import img2 from "../../assets/images/img-02.png";
import img3 from "../../assets/images/img-03.png";
import img4 from "../../assets/images/img-04.png";
import img5 from "../../assets/images/img-05.png";
import img6 from "../../assets/images/img-06.png";
import img7 from "../../assets/images/img-07.png";
import img8 from "../../assets/images/img-08.png";
import img9 from "../../assets/images/img-09.png";
import img10 from "../../assets/images/img-10.png";
import img11 from "../../assets/images/img-11.png";
import img12 from "../../assets/images/img-12.png";
import img13 from "../../assets/images/img-13.png";
import img14 from "../../assets/images/img-14.png";
import img15 from "../../assets/images/img-15.png";
import img16 from "../../assets/images/img-16.png";
import img17 from "../../assets/images/img-17.png";
import img18 from "../../assets/images/img-18.png";
import img19 from "../../assets/images/img-19.png";

const Card = () => {
  const imgArray = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
  ];
  const [browseImg, setBrowseImg] = useState(0);

  const loopThroughImgs = () => {
    const randomIndex = Math.floor(Math.random() * imgArray.length);
    setBrowseImg(randomIndex);
  };

  return (
    <div
      className="h-[300px] bg-[#f8f8f8] w-full rounded-lg cursor-pointer hover:scale-95 transform transition duration-500 ease-in-out"
      onClick={loopThroughImgs}
    >
      <div>
        <Image src={imgArray[browseImg]} alt="img" width={180} height={180} />
      </div>
    </div>
  );
};

export default Card;
