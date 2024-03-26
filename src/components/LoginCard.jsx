

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import loginPhoto from '../images/login-photo.png';
import logo from '../images/logo5.png';

 
 function LoginCard() {
  return (
    <div>   

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
						<a href="/login" className="hover:text-gray-300">Login</a>
					</li>
				</ol>

			</div>
	
        </nav>

        <div className="relative">

            <div className="absolute inset-0 bg-[position:center_top] h-[87.5vh]"

                style={{ backgroundImage: `url(${loginPhoto})`, opacity: 0.55}} 
            >

            </div>

            <Card className="flex justify-center max-w-sm mx-auto top-24">
            
                        <Typography variant="h3" className="flex justify-center mx-auto text-gray-900 pt-7">
                        Sign In
                        </Typography>
            
                    <CardBody className="flex flex-col gap-4">
                        <Input label="Email" size="lg" />
                        <Input label="Password" size="lg" />
                        <div className="-ml-2.5">
                        <Checkbox label="Remember Me" />
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" fullWidth>
                        Sign In
                        </Button>
                        <Typography variant="small" className="flex justify-center mt-6">
                        Don&apos;t have an account?
                        <Typography
                            as="a"
                            href="#signup"
                            variant="small"
                            color="blue-gray"
                            className="ml-1 font-bold"
                        >
                            Sign up
                        </Typography>
                        </Typography>
                    </CardFooter>
            </Card>
        </div>
        
    </div>
  );
}

export default LoginCard;