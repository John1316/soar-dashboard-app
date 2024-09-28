import SearchIcon from "../../../assets/svgs/SearchIcon";

export default function SearchInput() {
  return (
    <div className="search">
    <form className="max-w-md mx-auto">   
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-[24px] pointer-events-none">
                <SearchIcon />
            </div>
            <input type="search" id="default-search" className="search__input rounded-full block w-full p-4 ps-10 text-sm dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        </div>
    </form>
    </div>
  )
}
