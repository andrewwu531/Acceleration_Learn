
import logo from '../images/logo5.png';

const NavBar = () => {

  return (
	<nav className="bg-black flex justify-between py-5 items-center">
	
			<a href="/">
				<img className="h-14" src={logo} alt="Logo"/>
			</a>

			<div className="hidden xl:block xl:w-auto">

				<ol className="xl:flex xl:space-x-8 xl:font-medium xl:text-white xl:pr-20">
					<li>
						<a href="/" className=" hover:text-gray-300">Home</a>
					</li>
					<li>
						<a href="/weightlifting-course" className=" hover:text-gray-300">Nutrition & Weightlifting</a>
					</li>
					<li>
						<a href="/social-media" className="hover:text-gray-300">Social & Business English Language</a>
					</li>
					<li>
						<a href="/about" className="hover:text-gray-300">Login</a>
					</li>
				</ol>

			</div>
	
	</nav>

  );
};


export default NavBar;
