import logo from "../images/logo.png"

const Header = () => {
    return(
        <div className="pt-2 py-2 pl-2" style={{borderBottom: "1px solid #777"}}>
            <img src={logo} alt="" style={{height: "35px", verticalAlign: "top"}}></img>
            <span className="h2 pt-3 pl-2 text-white">WatchOPedia</span>
        </div>
    )
}

export default Header;