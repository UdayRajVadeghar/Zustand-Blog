 
import useStore from "@/zustand/store";

const Navbar = () => {
  
  const inc = useStore((state) => state.inc);
 
  return (
    <div className="h-20 bg-blue-100 flex items-center justify-center">
      <div>
        <button className="bg-red-500 text-white p-2 border-2" onClick={inc}>
          Increase
        </button>
      </div>
    </div>
  )
}

export default Navbar
