"use client"
import Navbar from "@/components/Navbar";
import useStore from "@/zustand/store";

const Page = () => {
  const count = useStore((state) => state.count);
  const inc = useStore((state) => state.inc);
  

  return (
    <>
      <Navbar />
      <div>
        <div className="m-10 text-5xl">
          {count}
        </div>

        
        <button onClick={inc} className="m-10 bg-red-500 p-2">Increase</button>
      </div>
    
    </>
   
   

  )
}

export default Page
