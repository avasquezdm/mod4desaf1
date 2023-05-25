import './Header.css'

const Header = ({title}) => {
    return (
        <header>
            <div>
            <h1>{title}</h1>
            <hr />
            <br />
            </div>
        </header>
    )
}

export default Header

// props sin corchete: recibe un objeto; él nos recomienda usar corchetes para que sea más entendible