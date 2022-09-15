export default function MainComponent(){
    return (
        <main className="main">
            <h1 className="main-title">Designed for the future</h1>
            <div className="main-row-desktop-editor">
                <div>
                    <img src="/images/illustration-editor-mobile.svg" alt="" className="editor-mobile"/>
                    <img src="/images/illustration-editor-desktop.svg" alt="" className="editor-desktop"/>
                </div>
                <div>
                    <div>
                        <h1 className="title-editor">Introducing an extensible editor</h1>
                        <p className="para-editor">Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
                    </div>
                <div>
                    <h1 className="title-management">Robust content management</h1>
                    <p className="para-management">Flexible content management enable users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format or flow. With this functionality, you're in control.</p>
                </div>
                </div>
            </div>
                <div className="phones main-row-desktop-phones">
                    <div>
                        <img src="/images/illustration-phones.svg" alt="" />
                    </div>
                    <div className="phones-div">
                        <h1>State of the art infrastructure</h1>
                        <p>With reliability and speen in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instanly, no matter where your readers are, keeping your site competitive.</p>
                    </div>
                </div>
                <div className="laptop main-row-desktop-laptop">
                    <div>
                        <img src="/images/illustration-laptop-mobile.svg" alt="" className="laptop-mobile" />
                        <img src="/images/illustration-laptop-desktop.svg" alt="" className="laptop-desktop" />
                    </div>
                    <div>
                        <div>
                            <h1 className="title-simple">Free, open, simple</h1>
                            <p className="para-simple">Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RRS feeds, social media integration, third party commenting tools, and works seamlessly with Google Analytics. The architechture is clean and relatively easy to learn.</p>
                        </div>
                        <div>
                        <h1 className="title-tooling">Powerful tooling</h1>
                            <p className="para-tooling">Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
                        </div>
                    </div>
                </div>
        </main>
    )
}