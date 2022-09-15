export default function FooterComponent(){
    return (
        <footer className="footer">
            <div className="footer-row">
                <div>
                    <img src="/images/logo.svg" alt="" />
                </div>
                <div className="product">
                    <ul>
                        <li className="head-li">Product</li>
                        <li>Overview</li>
                        <li>Pricing</li>
                        <li>Marketplace</li>
                        <li>Features</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div className="company">
                    <ul>
                        <li className="head-li">Company</li>
                        <li>About</li>
                        <li>Pricing</li>
                        <li>Team</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className="connect">
                    <ul>
                        <li className="head-li">Connect</li>
                        <li>Contact</li>
                        <li>Newsletter</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}