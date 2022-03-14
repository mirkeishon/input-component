import React from 'react'
import Input from './Input'

const Inputs = () => {
  return (
    <div className=' lg:ml-52 ml-0 pl-7 pt-7 pr-7 '>
        <div className='flex flex-wrap mb-4'> 
            <div className='space-y-4 mr-14 mb-4'>
                <p className='text-xs text-gray-800'>{'<Input />'}</p>
                <Input/>
            </div>
            <div className='space-y-4 mr-14 mb-4'>
                <p className='text-gray-400 text-xs'>{'&:hover'}</p>
                <Input hover/>
            </div>
            <div className='space-y-4 mr-14 mb-4'>
                <p className='text-gray-400 text-xs'>{'&:focus'}</p>
                <Input focus/>
            </div>
        </div>
        <div className='flex flex-wrap mb-4'> 
            <div className='space-y-4 mr-14 mb-4'>
                <p className='text-xs text-gray-800'>{'<Input error />'}</p>
                <Input error/>
            </div>
            <div className='space-y-4 mr-14 mb-4'>
                <p className='text-gray-400 text-xs'>{'&:hover'}</p>
                <Input hover/>
            </div>
            <div className='space-y-4 mr-14 mb-4'>
                <p className='text-gray-400 text-xs'>{'&:focus'}</p>
                <Input error focus/>
            </div>
        </div>
        <div className='flex flex-wrap mb-4'> 
            <div className='space-y-4 mr-14 mb-4'>
                <p className='text-xs text-gray-800'>{'<Input disabled />'}</p>
                <Input disabled/>
            </div>
        </div>
        <div className='flex flex-wrap mb-4'> 
            <div className='space-y-4 mr-14 mb-4'>
                <p className='text-xs text-gray-800'>{'<Input helperText="Some interesting text" />'}</p>
                <Input helperText='Some interesting text'/>
            </div>
            <div className='space-y-4 mr-14 mb-4'>
                <p className='text-xs text-gray-800'>{'<Input helperText="Some interesting text" error />'}</p>
                <Input helperText='Some interesting text' error/>
            </div>
        </div>
        <div className='flex flex-wrap mb-4'> 
            <div className='space-y-4 mr-14 mb-4'>
                <p className='text-xs text-gray-800'>{'<Input startIcon="MdPhone" />'}</p>
                <Input startIcon='MdPhone'/>
            </div>
            <div className='space-y-4 mr-14 mb-4'>
                <p className='text-xs text-gray-800'>{'<Input endIcon="MdLock" />'}</p>
                <Input endIcon='MdLock'/>
            </div>
        </div>
        <div className='flex flex-wrap mb-4'> 
            <div className='space-y-4 mr-14 mb-4'>
                <p className='text-xs text-gray-800'>{'<Input startIcon="MdPhone" />'}</p>
                <Input value='text'/>
            </div>
        </div>
        <div className='flex flex-wrap mb-4'> 
            <div className='space-y-4 mr-14 mb-4'>
                <p className='text-xs text-gray-800'>{'<Input size="sm" />'}</p>
                <Input size='sm'/>
            </div>
            <div className='space-y-4 mr-14 mb-4'>
                <p className='text-xs text-gray-800'>{'<Input size="md" />'}</p>
                <Input size='md'/>
            </div>
            <div className='space-y-4 mr-14 mb-4'>
                <p className='text-xs text-gray-800'>{'<Input size="lg" />'}</p>
                <Input size='lg'/>
            </div>
        </div>
        <div className='flex flex-wrap mb-4'> 
            <div className='space-y-4 w-full'>
                <p className='text-xs text-gray-800'>{'<Input fullWidth />'}</p>
                <Input fullWidth/>
            </div>
        </div>
        <div className='flex flex-wrap mb-4'> 
            <div className='space-y-4 w-full'>
                <p className='text-xs text-gray-800'>{'<Input multiline row="4" />'}</p>
                <Input multiline row='4'/>
            </div>
        </div>
        <p className='flex text-gray-500 text-xs font-Ubuntu'>Icons:
            <a className='ml-2 font-Ubuntu' rel='noreferrer' href="https://react-icons.github.io/react-icons/icons?name=md" target='_blank'>
                https://react-icons.github.io/react-icons/icons?name=md
            </a>
        </p>
    </div>
    )
}
export default Inputs;