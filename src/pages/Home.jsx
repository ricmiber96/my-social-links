
import { React } from 'react'
import ContainerButtons from '../components/ContainerButtons'
import Header from '../components/Header'

export default function Home () {
  return (
    <div class='flex flex-col items-center justify-center w-screen h-screen bg-background-color'>
      <Header />
      <ContainerButtons />
    </div>
  )
}
