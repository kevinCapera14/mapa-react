
const Header = ({location,setLocation}) => {
  return (
    <header className="sticky top-0 z-10 flex justify-between px-8 py-7 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
      <div className="font-semibold text-xl">GeoCult</div>
      <div className="flex gap-8 font-serif "><button className={`${location==="Home" ? "text-orange-500": ""}`} onClick={()=> setLocation("Home")}>Home</button> <button onClick={()=> setLocation("About")} className={`${location==="About" ? "text-orange-500": ""}`}>About</button></div>
    </header>
  );
};

export default Header;
