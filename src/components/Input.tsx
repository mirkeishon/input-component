import React, { useState } from 'react'
import { MdOutlineLocalGroceryStore } from 'react-icons/md'
import { MdOutlineLocalBar } from 'react-icons/md'
import { MdPhone } from 'react-icons/md'
import { MdLock } from 'react-icons/md'

interface button  {
    text: string,
    textColor: string,
    label: string,
    border: string,
    borderColor: string,
    bg: string,
    shadow: string,
    shadowColor: string,
    height: string,
    width: string,
    startIcon: any,
    endIcon: any,
}

const Input = ({
    variant = '',
    hover = false,
    focus = false,
    error = false,
    disableShadow = false,
    disabled = false,
    startIcon = '',
    endIcon = '',
    size='md',
    color='',
    helperText='',
    value='',
    fullWidth = false,
    row = '',
    multiline=false
}) => {

    let button : button = {
        text: value,
        textColor: 'text-slate-700',
        label: 'text-gray-400',
        border: 'border',
        borderColor: 'border-gray-400',
        bg: 'bg-white',
        shadow: 'shadow-md',
        shadowColor: 'shadow-gray-300',
        height: '',
        width: '',
        startIcon: '',
        endIcon: '',
    }
    
    const [text,setText] = useState(button.text)    

    if(hover){
        button = {
            ...button,
            borderColor: 'border-black',
            label: 'text-black'
        }
    }
    if(focus){
        button = {
            ...button,
            borderColor: 'border-blue-500',
            label: 'text-blue-500'
        }
        if(error){
            button = {
                ...button,
                borderColor: 'border-red-700',
                label: 'text-red-700'
            }
        }
    }
    if(error){
        button = {
            ...button,
            borderColor: 'border-red-700',
            label: 'text-red-700'
        }
    }

    if(disabled){
        button = {
            ...button,
            borderColor: 'border-gray-300',
            bg: 'bg-gray-200',
        }
    }

    if(startIcon === 'MdOutlineLocalGroceryStore'){
        button = {
            ...button,
            startIcon: <MdOutlineLocalGroceryStore className=' text-xl' />
        }
    }else if(startIcon === 'MdOutlineLocalBar'){
        button = {
            ...button,
            startIcon: <MdOutlineLocalBar className=' text-xl' />
        }
    }else if(startIcon === 'MdPhone'){
        button = {
            ...button,
            startIcon: <MdPhone className=' text-xl' />
        }
    }else if(startIcon === 'MdLock'){
        button = {
            ...button,
            startIcon: <MdLock className=' text-xl' />
        }
    }

    if(endIcon === 'MdOutlineLocalGroceryStore'){
        button = {
            ...button,
            endIcon: <MdOutlineLocalGroceryStore className=' text-xl' />
        }
    }else if(endIcon === 'MdOutlineLocalBar'){
        button = {
            ...button,
            endIcon: <MdOutlineLocalBar className=' text-xl' />
        }
    }else if(endIcon === 'MdPhone'){
        button = {
            ...button,
            endIcon: <MdPhone className=' text-xl' />
        }
    }else if(endIcon === 'MdLock'){
        button = {
            ...button,
            endIcon: <MdLock className=' text-xl' />
        }
    }

    if(size === 'sm'){
        button = {
            ...button,
            height: 'h-10',
            width: 'w-48',
        }
    }else if(size === 'md'){
        button = {
            ...button,
            height: 'h-12',
            width: 'w-48',
        }
    }else if(size === 'lg'){
        button = {
            ...button,
            height: 'h-14',
            width: 'w-48'
        }
    }

    if(fullWidth){
        button = {
            ...button,
            width: 'w-full'
        }
    }

    if(multiline){
        
        return (
            <div>
                <label className={`${button.label}`}>Label
                <div className={`flex p-2 ${button.width} font-medium ${button.border} ${button.textColor}  ${button.borderColor} ${button.bg} ${button.shadow} ${button.shadowColor} rounded-md text-sm`}>
                    {button.startIcon}
                    <textarea rows={parseInt(row)} placeholder='Placeholder' className='w-full bg-transparent border-none outline-none resize-none' onChange={(e:React.ChangeEvent<HTMLTextAreaElement>)=>{setText(e.target.value)}}>{text}</textarea>
                    {button.endIcon}                  
                </div>
                {helperText}
                </label>
            </div>
        )
    }

    return (
        disabled ? 
        <div>
            <label className={`${button.label}`}>Label
            <div className={`flex items-center p-2 ${button.height} ${button.width} font-medium ${button.border} ${button.textColor}  ${button.borderColor} ${button.bg} ${button.shadow} ${button.shadowColor} rounded-md text-sm`}>
                {button.startIcon}
                <input disabled type='text' placeholder='Placeholder' className=' h-w-full h-full bg-transparent border-none outline-none rounded-md '  value={text} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setText(e.target.value)}}/>
                {button.endIcon}                  
            </div>
            {helperText}
            </label>
        </div>
        :
        <div>
            <label className={`${button.label}`}>Label
            <div className={`flex items-center p-2 ${button.height} ${button.width} font-medium ${button.border} ${button.textColor}  ${button.borderColor} ${button.bg} ${button.shadow} ${button.shadowColor} rounded-md text-sm`}>
                {button.startIcon}
                <input  type='text' placeholder='Placeholder' className='w-full h-full border-none outline-none rounded-md '  value={text} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setText(e.target.value)}}/>
                {button.endIcon}                  
            </div>
            {helperText}
            </label>
        </div>
        
    )
}

export default Input;