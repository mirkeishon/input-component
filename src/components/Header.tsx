import React from 'react'
import { FaCaretRight } from 'react-icons/fa'

const Header: React.FC<{
  menu: boolean,
  open: () => void
}> = ({menu, open}) => {

  return (
    <header className='flex items-center lg:ml-52 ml-0 pl-7 pt-7'>
      {!menu && <FaCaretRight onClick={open} className='lg:hidden block text-3xl'/>}
      <h1 className='text-2xl text-zinc-700 font-medium font-Poppins'>Inputs</h1>
    </header>
  )
}

export default Header