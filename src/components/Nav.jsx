import {headerLogo} from '../../public/assets/images/index';
import { useState } from 'react';
import {hamburger} from '../../public/assets/icons/index';
import { headerMenu } from '../constants/index';

const Nav = () => {
    const [menu,setMenu]=useState(false);
    return (
        <header className="lg:absolute top-0 start-0 w-full z-10">
            <nav className="container py-4 flex justify-between gap-5">
                <img className='cursor-pointer' src={headerLogo} alt="Nike" />
                <ul className={`md:flex md:gap-3 cursor-pointer text-gray-500 transition
                ${menu?`absolute top-full left-0 bg-white w-full grid text-center py-2`:`sm:hidden`}`}>
                    {headerMenu.map((item,index)=>{
                        return <li key={index} className='hover:text-black p-3 transition sm:hover:bg-gray-100 md:hover:bg-inherit'><a href={item.src}>{item.title}</a></li>
                    })}
                </ul>
                <button onClick={()=>setMenu(!menu)} className='md:hidden'><img src={hamburger} width={25} alt="" /></button>
            </nav>
        </header>
    )
}

export default Nav;