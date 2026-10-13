
import { createPortal } from "react-dom";
import { CopyToClipboard } from "./CopyToClipboard";

import { LuX } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ContactProps {
    isOpen: boolean;
    onClose: () => void;
}


const ContactModal = ({ isOpen, onClose }: ContactProps) => {
    if (!isOpen) return null;
    return createPortal(
        <div
            aria-hidden={!isOpen}
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
            <div
                onClick={onClose}
                className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
            <div className={`relative z-10 w-full max-w-2xl rounded-xl bg-white border border-gray-300 p-6 shadow-xl transform transition-all duration-300 ease-out
              ${isOpen ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-95 opacity-0'}`}>
                <LuX
                    onClick={onClose}
                    className='ml-auto text-2xl hover:cursor-pointer hover:text-(--color-secondary)'
                />

                <div className='text-center'>
                    <h3 className=''>CONTACT US</h3>
                    <h5 className=' text-gray-700 font-medium'>
                        For any concerns, you may reach us through the channels below.
                    </h5>
                </div>

                <div className='pt-8'>
                    <h4 className='pb-2'>Email:</h4>
                    <div className='grid grid-cols-[1fr_8fr] items-center md:grid-cols-[30px_1fr] md:pl-4'>
                        <MdEmail className='text-(--color-primary) text-2xl' />
                        <div className='flex flex-row gap-x-2'>
                            <p>info@arthursfriedchicken.com</p>
                            <CopyToClipboard text='info@arthursfriedchicken.com' />
                        </div>
                    </div>
                </div>

                <div className='pt-8'>
                    <h4 className='pb-2'>Address:</h4>
                    <div className='grid grid-cols-[1fr_8fr] items-baseline md:grid-cols-[30px_1fr] md:pl-4'>
                        <FaLocationDot className='text-(--color-primary) text-xl' />
                        <a
                            href='https://maps.app.goo.gl/6uATqqwddGTyx7zH9'
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-base hover:text-(--color-secondary)'>
                            Quezon Avenue, Midsayap, Cotabato, Region 12
                            <FaExternalLinkAlt className="inline-block align-middle ml-2 mb-1" />
                        </a>
                    </div>
                </div>

                <div className='pt-8'>
                    <h4 className='pb-2'>Social Media:</h4>
                    <div className='grid grid-cols-[1fr_8fr] items-baseline md:grid-cols-[30px_1fr] md:pl-4'>
                        <FaFacebook className='text-(--color-primary) text-xl' />
                        <a
                            href='https://www.facebook.com/arthursfriedchicken'
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-base hover:text-(--color-secondary)'>
                            f/arthursfriedchicken
                            <FaExternalLinkAlt className="inline-block align-middle ml-2 mb-1" />
                        </a>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    )
}

export { ContactModal }