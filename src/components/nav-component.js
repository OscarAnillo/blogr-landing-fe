import { useState } from 'react';

export default function NavComponent(){
    const [showMenu, setShowMenu] = useState(false);

    const clickHandler = () => {
        setShowMenu(!showMenu);
    }

    return (
        <nav className="nav">
            <section>
                <div>
                    <img src="/images/logo.svg" alt="" />
                </div>
                <div>
                    {!showMenu ?
                    <img src="/images/icon-hamburger.svg" alt="" onClick={clickHandler} /> : <img src="/images/icon-close.svg" alt="" onClick={clickHandler} /> 
                    }
                </div>
            </section>
            {showMenu ? 
            <div>
                <div>
                    <ul>
                        <li>Product
                            <img src="/images/icon-arrow-dark.svg" alt="" />
                        </li>
                        <li>Company
                            <img src="/images/icon-arrow-dark.svg" alt="" />
                        </li>
                        <ul>
                            <li>Connect
                                <img src="/images/icon-arrow-dark.svg" alt="" />
                            </li>
                            <div>
                                <p>Contact</p>
                                <p>Newsletter</p>
                                <p>LinkedIn</p>
                            </div>
                        </ul>
                    </ul>
                </div>
            <div>
                <p>Login</p>
                <button>Sign Up</button>
            </div>
            </div>
            : ''}
        </nav>
    )
}


