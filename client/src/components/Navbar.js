import Navitem from "./Navitem";

const Navbar = () => {
    return(
        <>
            <nav className="navbar navbar-light">
                <a className="navbar-brand" href="index.html">conduit</a>
                <ul className="nav navbar-nav pull-xs-right">
                    {/*Add "active" className when you're on that page"*/}
                    <Navitem>Home</Navitem>
                    <Navitem><i className="ion-compose"></i>&nbsp;New Article</Navitem>
                    <Navitem><i className="ion-gear-a"></i>&nbsp;Settings</Navitem>
                    <Navitem>Sign in</Navitem>
                    <Navitem>Sign up</Navitem>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
