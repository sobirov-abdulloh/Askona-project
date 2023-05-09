import React, { useContext, useState } from 'react'
import Topadvenses from '../../assets/img/topadv.png'
import { BiSearchAlt2 } from 'react-icons/bi'
import logoAksona from '../../assets/img/logo.png'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'
import { TbPhoneCall } from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai'
import { CgLogIn, CgShoppingCart } from 'react-icons/cg'
import { IoIosStats } from 'react-icons/io'
import { HiBars3BottomLeft } from 'react-icons/hi2'
import { FaPercentage } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { StateContext } from '../../context'
import UserInfo from '../UserInfo/UserInfo'
import { IconButton } from '@mui/material'


function Navbar() {
  const { handleOpen } = useContext(StateContext)
  const { toggleDrawer, basket } = useContext(StateContext)

  const [categories, setCategories] = useState(true);
  const loggedIn = false;


  return (
    <div className=''>
      <div className="flex w-full items-center bg-[#02B9BF]">
        <img className='w-[80%] m-auto bg-[#00B6C9]' src={Topadvenses} alt="" />
        <button>
          <AiFillCloseCircle className='text-white mr-7' />
        </button>
      </div>
      <nav className='w-full py-5'>
        <div className='container m-auto flex items-center'>
          <div className="w-full flex flex-row items-center justify-between">
            <div className="flex flex-row items-center">
              <div className="flex flex-row items-center gap-10">
                <img className='' src={logoAksona} alt="logo" />
                <NavLink className='flex items-center font-normal text-sm leading-4' href="#!">Минск <BsChevronDown className='text-navTopbBg pl-2 text-3xl' /></NavLink>
                <p className='text-start flex items-center text-gray-400 text-sm'>Магазины: <span className='font-bold text-black pl-2'>30</span></p>
                <div className="flex gap-8">
                  <div className='rounded py-2 px-2 flex items-center gap-4 w-96 border border-solid'>
                    <BiSearchAlt2 className='text-[#00B6C9] text-lg font-bold' />
                    <input type="text" placeholder='Поиск по товарам...' className="outline-none w-full" />
                  </div>
                  <button className='rounded flex items-center border border-solid py-2 px-2 text-center'><TbPhoneCall className='text-gray-400  pr-2 text-2xl' /> Перезвоните мне</button>
                </div>
              </div>
              <div className="flex ml-5 items-center">
                <p className='text-black text-lg flex font-semibold'>7176</p>
                <span className='text-[#00B6C9] text-xs flex flex-col leading-4'>
                  <span>показать</span><span>номера</span>
                </span>
              </div>
            </div>
            <div className='flex gap-3 text-2xl text-black items-center '>

              {loggedIn ?
                <UserInfo />
                : <IconButton onClick={handleOpen}> <CgLogIn className='text-black' /></IconButton>
              }

              <IconButton>
                <IoIosStats className='cursor-pointer text-black' />
              </IconButton>

              <IconButton>
                <div className="relative cursor-pointer">
                  <div className="w-[18px] h-[18px] rounded-full bg-[#00BAC1] absolute top-[-5px] right-[-5px] flex justify-center items-center">
                    <p className='font-semibold text-[12px] text-white'>0</p>
                  </div>
                  <AiOutlineHeart className='cursor-pointer text-black' />
                </div>
              </IconButton>

              {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                  <IconButton onClick={toggleDrawer(anchor, true)}>
                    <div className="relative cursor-pointer">
                      <div className="w-[18px] h-[18px] rounded-full bg-[#00BAC1] absolute top-[-5px] right-[-5px] flex justify-center items-center">
                        <p className='font-semibold text-[12px] text-white'>{basket.length}
                        </p>
                      </div>
                      <CgShoppingCart className='cursor-pointer text-black' />
                    </div>
                  </IconButton>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className='w-full border-b-[1px] border-gray-200 py-3'>
          <div className="container">
            <div className="flex items-center justify-between">
              <button onClick={() => setCategories((p) => !p)} className='w-[180px] border border-solid bg-[#00B6C9] px-4 py-3 flex items-center text-white font-bold whitespace-nowrap'><HiBars3BottomLeft className='mr-5' />  Все товары </button>
              <NavLink className='text-black text-lg font-medium' to="">Матрасы</NavLink>
              <NavLink className='text-black text-lg font-medium' to="">Подушки</NavLink>
              <NavLink className='text-black text-lg font-medium' to="">Кровати</NavLink>
              <NavLink className='text-black text-lg font-medium' to="">Одеяла</NavLink>
              <NavLink className='text-black text-lg font-medium' to="">Диваны</NavLink>
              <NavLink className='text-black text-lg font-medium' to="">Детские товары</NavLink>
              <NavLink className='text-black text-lg font-medium' to="">Мебель </NavLink>
              <NavLink className='text-black text-lg font-medium' to="">Для дома</NavLink>
              <NavLink className='text-red-400 flex items-center text-lg' to=""> <FaPercentage /> Акции</NavLink>
            </div>
          </div>
        </div>
        <div className={`${categories ? "hidden" : "w-full h-[500px] bg-sky-400 absolute z-50"}`} style={{ bgcolor: 'background.paper' }}>.</div>
      </nav>
    </div>
  )
}

export default Navbar
