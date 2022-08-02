
import { React } from 'react'
import { IoLocationSharp } from 'react-icons/io5'
export default function Header () {
  return (
    <>
      <div className='flex flex-col items-center'>
        <img className='w-28 h-28 rounded-full pointer-events-none' src='https://media-exp1.licdn.com/dms/image/C4D03AQGgSor5-xZ00g/profile-displayphoto-shrink_100_100/0/1607097041235?e=1665014400&v=beta&t=nyIvYG4WIZ6JTY28jmh_dQuOPKLridZgdgBcI5A82bY' />
        <div className='avatar-info p-8'>
          <a className='px-8 pb-2 text-xl text-center text-white' href='https://github.com/ricmiber96' target='_blank' rel='noreferrer'>@ricmiber96</a>
          <div className='flex flex-row text-center justify-between mt-4'>
            <IoLocationSharp size={26} className='text-white' />
            <p className='text-2xl text-white'> Valencia, Spain</p>
          </div>
        </div>
      </div>
      <div className='border-4 mt-6 border-white rounded-lg shadow-md p-8'>
        <h5 className='text-3xl text-white'>Welcome to my social page!👋</h5>
        <p className='font-bold text-white selection:text-gray-400 text-xs'>Check out my links below.</p>
      </div>
    </>
  )
}
