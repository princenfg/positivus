import logo from '../assets/logo.png'   
import Button from './Button.jsx'
function Header() {
    return(
        <header className="flex items-center justify-between px-4 py-3 ml-[100px] mr-[100px]">
            <img src={logo} alt="Logo" className="h-[36px] w-[219.54px] shrink-0" />

            <nav>
                <ul className="flex flex-row gap-6 items-center whitespace-nowrap list-none">
                    <li>About us</li>
                    <li>Services</li>
                    <li>Use Cases</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                    <li><Button text="Request a quote" variant="outline" /></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header