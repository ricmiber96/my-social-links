import { BsCodeSquare, BsLinkedin } from 'react-icons/bs'
import { IoLogoGithub, IoLogoMedium } from 'react-icons/io5'
import { FaDev } from 'react-icons/fa'

const data = [
  {
    name: 'Portfolio',
    icon: <BsCodeSquare size={26} />,
    bgColor: 'bg-portfolio',
    textColor: 'text-white',
    link: 'https://'
  },
  {
    name: 'Github',
    icon: <IoLogoGithub size={26} />,
    bgColor: 'bg-white',
    textColor: 'text-black',
    link: 'https://github.com/ricmiber96'
  },
  {
    name: 'LinkedIn',
    icon: <BsLinkedin size={26} />,
    bgColor: 'bg-linkedin',
    textColor: 'text-white',
    link: 'https://www.linkedin.com/in/ricardomirallesbernal/'
  },
  {
    name: 'Dev.to',
    icon: <FaDev size={28} />,
    bgColor: 'bg-dev',
    textColor: 'text-white',
    link: 'https://dev.to/ricmiber96'
  },
  {
    name: 'Medium',
    icon: <IoLogoMedium size={26} />,
    bgColor: 'bg-medium',
    textColor: 'text-white',
    link: 'https://'
  }
]

export default data
