import { useState } from "react";

export default function NavComponent() {
  const [showMenu, setShowMenu] = useState(false);
  const [showConnect, setShowConnect] = useState(false);

  const clickHandler = () => {
    setShowMenu(!showMenu);
  };

  const clickHandlerConnect = () => {
    setShowConnect(!showConnect);
  };

  return (
    <nav className="nav">
      <section>
        <div className="div-desktop">
          <div>
            <img src="/images/logo.svg" alt="" />
          </div>
          <div className="nav-desktop">
            <ul>
              <li>
                Product
                <img src="/images/icon-arrow-light.svg" alt="" />
              </li>
              <li>
                Company
                <img src="/images/icon-arrow-light.svg" alt="" />
              </li>
              <li>
                Connect
                {showConnect ? (
                  <img
                    src="/images/icon-arrow-light.svg"
                    alt=""
                    onClick={clickHandlerConnect}
                    className="light"
                  />
                ) : (
                  <img
                    src="/images/icon-arrow-light.svg"
                    alt=""
                    onClick={clickHandlerConnect}
                  />
                )}
                <ul>
                  {showConnect ? (
                    <div className="inner-menu-connect">
                      <p>Contact</p>
                      <p>Newsletter</p>
                      <p>LinkedIn</p>
                    </div>
                  ) : (
                    ""
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="div-desktop-login">
          <div>
            <p>Login</p>
          </div>
          <div>
            <button>Sign Up</button>
          </div>
        </div>
        <div className="nav-mobile">
          {!showMenu ? (
            <img
              src="/images/icon-hamburger.svg"
              alt=""
              onClick={clickHandler}
            />
          ) : (
            <img src="/images/icon-close.svg" alt="" onClick={clickHandler} />
          )}
        </div>
      </section>
      {showMenu ? (
        <div className="inner-menu">
          <div>
            <ul>
              <li>
                Product
                <img src="/images/icon-arrow-dark.svg" alt="" />
              </li>
              <li>
                Company
                <img src="/images/icon-arrow-dark.svg" alt="" />
              </li>
              <li style={{ color: "rgb(121, 133, 145)" }}>
                Connect
                {showConnect ? (
                  <img
                    src="/images/icon-arrow-dark.svg"
                    alt=""
                    onClick={clickHandlerConnect}
                    className="light"
                  />
                ) : (
                  <img
                    src="/images/icon-arrow-dark.svg"
                    alt=""
                    onClick={clickHandlerConnect}
                  />
                )}
                <ul>
                  {showConnect ? (
                    <div className="inner-menu-connect">
                      <p>Contact</p>
                      <p>Newsletter</p>
                      <p>LinkedIn</p>
                    </div>
                  ) : (
                    ""
                  )}
                </ul>
              </li>
            </ul>
          </div>
          <div className="login">
            <p>Login</p>
            <button>Sign Up</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}
