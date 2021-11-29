import React, {useState} from 'react'
import Link from 'next/link'

export default function NavBar() {

    const [activeButton, setActiveButton] = useState(0)

    const buttons =[
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Profile",
            link: "/profile"
        },
        {
            name: "Contact",
            link: "/contact"
        },
    ]


    return (
        <div className="text-center">


        {buttons.map((button, index) => (
                <Link 
                    key={index}
                    href={button.link}
                >
                    <a 
                    className={index === activeButton ? "btn btn-outline-secondary active" : "btn btn-outline-secondary"} 
                    onClick={() => setActiveButton(index)}
                    >{button.name}</a>
                </Link>                      
        ))}

    </div>
    )
}
