import '../styles/Navbar.css';

const Navbar = () => {
    return(
        <div class="navbar">
            <a href="/" class="active">Home</a>
            <a href="/contact">Contact</a>
            <a href="/about">About</a>
        </div>
    );
};

export default Navbar;