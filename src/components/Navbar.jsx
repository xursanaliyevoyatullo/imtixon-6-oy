import { Link } from "react-router-dom"
import ColorContainer from "../components/ColorContainer"

function Navbar() {
    return (
        <nav className="bg-yellow-300">
            <div className="align-element flex justify-between items-center py-5">
                <Link to='/' className="text-3xl cursor-pointer font-medium">KINO <span className="text-orange-700">POISK!</span></Link>
                <div className="text-4xl">
                    <ColorContainer />
                </div>
            </div>
        </nav>
    )
}

export default Navbar   