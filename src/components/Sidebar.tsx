import React from 'react'
import { FaCaretRight } from 'react-icons/fa';
import { FaCaretLeft } from 'react-icons/fa';
import links from '../assets/Data'


const Sidebar: React.FC<{
    menu: boolean,
    open: () => void
}> = ({menu, open}) => {
  return (
    <aside className={`h-full w-52 fixed z-50 top-0 bg-white border-r-2 border-gray-300 ${menu ? 'block': 'hidden'} lg:block`}>
        <div className='flex items-center pl-10 h-20 mb-24'>
            <p className=' text-sm font-semibold text-slate-700 font-Poppins'><span className='text-orange-500'>Dev</span>challenges.io</p>
            {!menu ? <FaCaretRight className='text-3xl lg:hidden' onClick={open}/>: <FaCaretLeft className='text-3xl lg:hidden' onClick={open}/>}
        </div>        
        <ul>
            {links.map((link, index)=>{

                const { name } = link;
                return (
                    <li className='pl-10 h-11' key={`${name}-${index}`}>
                        <a href="/" className='font-medium text-sm text-gray-400 hover:font-bold hover:text-slate-700'>{name}</a>
                    </li>
                )
            })}
        </ul>
    </aside>
  )
}

export default Sidebar