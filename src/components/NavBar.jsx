
import logo from '../images/logo5.png';

const NavBar = () => {

  return (
	<nav className="flex items-center justify-between py-5 bg-black">
	
			<a href="/">
				<img className="h-14" src={logo} alt="Logo"/>
			</a>

			<div className="hidden lg:block lg:w-auto">

				<ol className="lg:flex lg:space-x-8 lg:font-medium lg:text-white lg:pr-20">
					<li>
						<a href="/" className=" hover:text-gray-300">Home</a>
					</li>
					<li>
						<a href="/weightlifting-course" className=" hover:text-gray-300">Nutrition & Weightlifting</a>
					</li>
					<li>
						<a href="/english-course" className="hover:text-gray-300">Social & Business English Language</a>
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
