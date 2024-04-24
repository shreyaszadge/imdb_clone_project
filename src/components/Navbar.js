import Navbaritem from "./Navbaritem"

const Navbar = () => {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6">
        <Navbaritem title="Trending" param="fetchTrending"/>
        <Navbaritem title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}

export default Navbar