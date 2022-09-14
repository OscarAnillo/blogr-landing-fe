import { useState } from 'react';

export default function NavComponent(){
    const [showMenu, setShowMenu] = useState(false);
    const [showConnect, setShowConnect] = useState(false)

    const clickHandler = () => {
        setShowMenu(!showMenu);
    }

    const clickHandlerConnect = () => {
        setShowConnect(!showConnect);
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
            <div className='inner-menu'>
                <div>
                    <ul>
                        <li>Product
                            <img src="/images/icon-arrow-dark.svg" alt="" />
                        </li>
                        <li>Company
                            <img src="/images/icon-arrow-dark.svg" alt="" />
                        </li>
                        <ul>
                            <li style={{color:"rgb(121, 133, 145)"}}>Connect
                                {showConnect ? <img src="/images/icon-arrow-dark.svg" alt="" onClick={clickHandlerConnect} className="light"/> :
                                <img src="/images/icon-arrow-dark.svg" alt="" onClick={clickHandlerConnect} />
                                }
                            </li>
                            {showConnect ? 
                            <div className='inner-menu-connect'>
                                <p>Contact</p>
                                <p>Newsletter</p>
                                <p>LinkedIn</p>
                            </div>
                            : ''}
                        </ul>
                    </ul>
                </div>
            <div className='login'>
                <p>Login</p>
                <button>Sign Up</button>
            </div>
            </div>
            : ''}
        </nav>
    )
}


