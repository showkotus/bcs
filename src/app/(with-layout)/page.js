import Image from "next/image";
import img from "@/assets/pic01.jpg";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";

export const metadata = {
  title: "Bangla Channel Swimming",
  description: "The finest adventure in Bangladesh",
};

export default function Home() {
  return (
    <main>
      {/* <Image
        src="https://i.ibb.co/6tf63p3/08.jpg"
        width={1200}
        height={550}
        alt=""
        style={{ width: "100%" }}
      ></Image> */}
      {/* <Hero /> */}
     {/* <Navbar/> */}
    </main>
  );
}
