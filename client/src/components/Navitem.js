
const Navitem = (props) => {
    return(
        <>
            <li className="nav-item">
                <a className="nav-link" href="">{props.children}</a>
            </li>
        </>
    );
}

export default Navitem;
