import { useState, useEffect, useRef } from "react";

interface DropdownProps {
    buttonText: string;
    content: React.ReactNode;
}

import { MdArrowDropDown } from "react-icons/md";

const DropdownButton = ({ children, open, toggle }: { children: string; open: boolean; toggle: () => void }) => {
    return (
        <div
            onClick={toggle}
            className={`dropdown-button ${open ? 'dropdown-open' : null}`}
        >
            {children}
            <span className="text-2xl ml-2">
                {open ? <MdArrowDropDown className="transition-transform duration-300 rotate-180 " /> : <MdArrowDropDown className="transition-transform duration-300 rotate-0 " />}
            </span>
        </div>
    )
}

const DropdownContent = ({
    children,
    open,
    onClick,
}: {
    children: React.ReactNode
    open?: boolean
    onClick?: React.MouseEventHandler<HTMLDivElement>
}) => {
    return (
        <div
            className={`dropdown-content ${open ? 'dropdown-content-open' : null}`}
            onClick={onClick}
        >
            {children}
        </div>
    )
}


const DropdownItems = ({ children, onClick }: { children: React.ReactNode; onClick?: React.MouseEventHandler<HTMLDivElement> }) => {
    return (
        <div className="dropdown-item"
            onClick={onClick}>
            {children}
        </div>
    )
}


const Dropdown = ({ buttonText, content }: DropdownProps) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [dropdownRef])

    const toggleDropdown = () => {
        setOpen(!open);
    }

    return (
        <div className="dropdown"
            ref={dropdownRef}>
            <DropdownButton toggle={toggleDropdown} open={open}>
                {buttonText}
            </DropdownButton>
            <DropdownContent open={open} onClick={() => setOpen(false)}>
                {content}
            </DropdownContent>
        </div>
    )
}

export  {Dropdown, DropdownButton, DropdownContent, DropdownItems};