import React from 'react'

const TextArea = ({placeholder}) => {
  return (
    <div className="bg-[#f5f6f7] rounded-[10px] overflow-hidden">
      <textarea className='w-full bg-transparent border-0 px-6 pt-3' placeholder={placeholder} rows={5} style={{resize: 'none'}}></textarea>
    </div>
  )
}

export default TextArea
