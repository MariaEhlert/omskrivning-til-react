import './Header.scss'

export const Header = () => {
    return (
        <header>
            <figure>
                <img src={require ('../../../Assets/images/ColorWheel.png')} alt="headerImg" />
            <figcaption>
                <h1>THE GLOBAL GOALS</h1>
                <h2>For sustainable Developement</h2>
            </figcaption>
            </figure>
            <nav>
                <ul>
                    <li><a href="#world-goals">VERDENSMÅLENE</a></li>
                    <li><a href="#the-sub-goals">DELMÅLENE</a></li>
                    <li><a href="#challenges">UDFORDRINGER</a></li>
                    <li><a href="#contact">KONTAKT</a></li>
                </ul>
            </nav>
        </header>
    )
}