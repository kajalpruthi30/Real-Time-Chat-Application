import React from 'react'

function GenderCheckbox() {
  return (
    <div className='flex'>
        <div className='form-control pr-2'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text text-gray-400'>Male</span>
                <input type='checkbox' className='checkbox border-slate-500' />
            </label>
        </div>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text text-gray-400'>Female</span>
                <input type='checkbox' className='checkbox border-slate-500' />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox
