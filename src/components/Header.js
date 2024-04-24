import Menuitem from "./Menuitem"
import {AiFillHome} from "react-icons/ai"
import Link from "next/link"
import {BsFillInfoCircleFill} from "react-icons/bs"
import DarkModeSwitch from "./DarkModeSwitch"
const Header = () => {
  return (
    <div className="flex justify-between items-start p-3 max-w-6xl mx-auto">

<div className="flex gap-4">
    <Menuitem  title="home" address="/" Icon={AiFillHome}/>
    <Menuitem  title="about" address="/about" Icon={BsFillInfoCircleFill}/>

</div>
<div className="flex items-center gap-4">
<DarkModeSwitch/>
<Link href="/" className="flex gap-1 items-center">
    <span className="text-1xl font-bold bg-amber-500 py-1 px-2 rounded-lg">IMDB</span>
    <span className='text-xl hidden sm:inline'>clone</span>

    
</Link>
</div>

    </div>
  )
}

export default Header