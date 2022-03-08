/* eslint-disable prettier/prettier */
import {useEffect, useState} from 'react';
import UseSingleuser from './UseSingleUser';

const UseProfileImg = () => {
  const [userImg, setuserImg] = useState();
  const {singleUser} = UseSingleuser();
  useEffect(() => {
    fetch(`https://www.alijahan.xyz/profilepic?url=${singleUser.url}`)
      .then(res => res.json())
      .then(data => setuserImg(data));
  }, [singleUser.url]);
  return {
    userImg,
  };
};
export default UseProfileImg;
