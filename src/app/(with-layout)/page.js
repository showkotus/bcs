import Image from 'next/image'
import img from '@/assets/pic01.jpg'

export default function Home() {
  return (
    <main >
      <Image src='https://i.ibb.co/6tf63p3/08.jpg' width={1200} height={550}   alt='' 
      style={{'width':'100%'}}
      ></Image>
     <h1>Home Page</h1>
    </main>
  )
}
