import logo from '../../../assets/name-logo.png'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 text-white font-bold">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#about'>About Me</a></li>
      </ul>
    </div>
    <a className=""><img className='h-8' src={logo} alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li tabIndex={0}>
          <summary><a href='#projects'>Projects</a></summary>
      </li>
      <li><a href='#skills'>Skills</a></li>
      <li><a href='#about'>About Me</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href='contact' className="btn">Contact Me</a>
  </div>
</div>
    );
};

export default Navbar;