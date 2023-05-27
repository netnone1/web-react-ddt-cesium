import { Link } from "react-router-dom";
const Header = () => {
    return (
        <nav className='flex justify-between bg-white p-3'>
            <div className=''>
                <Link to='/'>Digital twin</Link>
            </div>
            <Link to='/manage'>
                {/* Hamburger Menu  */}
                <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
                {/* ./Hamburger Menu */}
            </Link>
        </nav>
    )
}

export default Header;