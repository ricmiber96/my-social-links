
import { React } from 'react'

export default function LinkButton ({ name, icon, bgColor, textColor, link }) {
  return (
    <a
      className={`${textColor} ${bgColor} hover:bg-gray/90 hover:scale-110 transform transition duration-500 font-medium rounded-lg text-lg w-96 px-6 py-4 flex justify-around mb-2 shadow-lg cursor-pointer mb-4`}
      href={link}
      target='_blank' rel='noreferrer'
    >
      <div>{icon}</div>
      <div>{name}</div>
      <div />
    </a>
  )
}
