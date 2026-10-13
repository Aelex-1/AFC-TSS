import { Link } from '@tanstack/react-router'
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
    const year = new Date().getFullYear()

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/menu', label: 'Menu' },
        { to: '/franchise', label: 'Franchise' },
        { to: '/locations', label: 'Location' },
        { to: '/blogs', label: 'Blogs' },
    ]
    return (
        <footer className=" bg-(--color-footer) mt-auto px-4 pt-8 pb-5">
            <div className="page-wrap flex flex-col items-center justify-between gap-4 text-center md:items-start md:flex-row md:text-left">
                <Link to="/" className="">
                    <img 
                    src="./logos/afc-logo.webp" 
                    alt="Site Logo" 
                    width={200}
                    height={200}
                    className="h-14 w-auto" 
                    />
                </Link>

                <div className="flex flex-wrap flex-col items-center md:items-start gap-4 ">
                    <span className=" text-lg text-white m-0 font-bold">Follow Us!</span>
                    <a 
                    href="https://www.facebook.com/arthursfriedchicken" 
                    target="_blank" 
                    aria-label='Facebook Homepage Link'
                    className="text-white hover:text-blue-700">
                        <FaFacebook className="text-3xl" />
                    </a>
                </div>

                <hr className="page-wrap border-(--color-footer-border) my-2 md:hidden" />

                <div className="flex flex-wrap flex-col items-center md:items-start gap-4 ">
                    <span className=" text-lg text-white m-0 font-bold">Quick Links</span>
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className="nav-link footer-link"
                            activeProps={{ className: 'nav-link ' }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <hr className="page-wrap border-(--color-footer-border) my-2 md:hidden" />

                <div className="flex flex-wrap flex-col items-center md:items-start gap-4 ">
                    <span className=" text-lg text-white m-0 font-bold">Other Links</span>

                    <Link
                        to="/policy"
                        className="nav-link footer-link"
                        activeProps={{ className: 'nav-link ' }}
                    >
                        Privacy Policy
                    </Link>

                    <Link
                        to="/careers"
                        className="nav-link footer-link"
                        activeProps={{ className: 'nav-link ' }}
                    >
                        Careers
                    </Link>
                </div>

                <hr className="page-wrap border-(--color-footer-border) my-2 md:hidden" />

                <div className="flex flex-wrap flex-col items-center md:items-start gap-4 ">
                    <span className=" text-lg text-white m-0 font-bold">Deliveries</span>
                    <p className="text-white">
                        Your favorite AFC meal is <br/> available in <span className="text-green-400 font-bold"> GrabFood </span> soon!
                    </p>
                </div>
            </div>

            <hr className="page-wrap border-(--color-footer-border) my-4" />

            <div className="page-wrap flex flex-col items-center justify-between text-center pt-2">
                <p className="text-white m-auto">
                    &copy; {year} Arthur's Fried Chicken. All rights reserved.
                </p>
            </div>
        </footer>
    )
}