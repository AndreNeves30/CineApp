import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
          
        <header className="flex justify-around bg-black text-white">
            <span>Olá, visitante</span>
            <h1>Bem vindo ao CineApp</h1>
            <Navbar/>
        </header>
        
     );
}

export default Header;