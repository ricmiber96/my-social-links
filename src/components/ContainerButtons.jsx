
import { React } from 'react'
import data from '../assets/ data'
import LinkButton from './LinkButton'

export default function ContainerButtons () {
  return (
    <div className='flex flex-col items-center justify-between mt-8'>
      {
        data.map((link, i) =>
          <LinkButton key={i} name={link.name} icon={link.icon} bgColor={link.bgColor} textColor={link.textColor} link={link.link} />
        )
}
    </div>
  )
}
