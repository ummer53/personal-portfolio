import '../index.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';
import networkImg from '../assets/network-bar.png';
import homeIcon from '../assets/white-home-icon-png-16.png';
import { useEffect, useState } from 'react';

const Demo = () => {
	const [time, setTime] = useState(0);

	useEffect(() => {
		const updateTime = () => {
			const currentTime = new Date();
			const formattedTime =
				currentTime.getHours() + ':' + currentTime.getMinutes();
			setTime(formattedTime);
		};

		// Initial call to set the time immediately when the component mounts
		updateTime();

		// Set up an interval to update the time every minute
		const intervalId = setInterval(updateTime, 60000);

		// Clean up the interval when the component unmounts
		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
		<div className="bg-[#0a192f] flex items-center justify-left h-screen w-full pb-4 main-div">
			<div className="hidden">
				<Carousel
					className="custom-carousel tablet:bg-[#e5e7eb] flex items-center justify-left h-screen w-full py-0 mx-auto"
					autoPlay
					infiniteLoop
					showIndicators={false}
					showStatus={false}
					showThumbs={false}
				>
					<div className="laptop-screen flex justify-right p-auto mx-auto ">
						<div className="laptop-screen__terminal1 bg-black hi-auto ml-4 mt-4 w-[60%] h-[40%] ">
							<p className=" text-white">
								<span className="text-green-600 font-semibold font-mono">
									{' '}
									ummer@ummer-ideapad
								</span>
								:~$ npm start
							</p>
						</div>
					</div>
					<div className="laptop-screen flex justify-center p-auto mx-auto">
						<div className="laptop-screen__terminal2  bg-black hi-auto ml-4 mt-4 w-[80%] h-[40%]">
							{/* ... */}
							<p className=" text-blue-600 font-mono p-2">
								starting the development server...
							</p>
						</div>
					</div>
					<div className="laptop-screen flex justify-center p-auto mx-auto">
						<div className="laptop-screen__terminal3 bg-black hi-auto m-auto text-left w-[90%] h-[95%] p-auto">
							<p className="bg-black text-green-600 font-mono ">
								Compiled successfully!
							</p>
							<p className="bg-black text-green-400 font-mono py-1 ">
								You can now view{' '}
								<span className="text-red-600">my-portfolio</span> in the
								browser.
							</p>
							<p className="bg-black text-blue-400 font-mono ml-2 w-auto">
								<span className="text-red-600">Local:</span>{' '}
								http://localhost:3000/personal-portfolio
							</p>
							<p className="bg-black text-blue-400 font-mono pb-1 pl-2 w-auto">
								<span className="text-red-600">On Your Network:</span>{' '}
								http://192.168.1.4:3000/personal-portfolio
							</p>
							<p className="bg-black text-white font-mono  ">
								Note that the development build is not optimized. To create a
								production build,{' '}
								<span className="text-blue-300">use npm run build.</span>
							</p>
							<p className="bg-black text-white font-mono pt-1 ">
								webpack compiled{' '}
								<span className="text-green-600">successfully</span>
							</p>
						</div>
					</div>
				</Carousel>
			</div>
			<div className="mobile bg-black w-[80%] h-[90%] flex  justify-center items-center rounded-xl max-w-xs:hidden mx-auto">
				<div className="mobile-screen bg-[#e6e9ee] w-[90%] h-[95%] flex flex-col justify-center items-center rounded-xl p-2">
					<div className="status-bar flex flex-row w-full border-2">
						<span className="bg-white h-[20px] w-full float-left">{time}</span>
						<img
							src={networkImg}
							alt="network"
							className="w-[70%] h-[20px] float-right"
						/>
					</div>
					<div className="browser-bar w-full h-10 rounded-md border-2 flex flex-row justify-between">
						<img
							src={homeIcon}
							alt="home"
							className="w-6 h-6 overflow-hidden"
						/>
						<input
							type="text"
							value={'https://ummer53.github.io/personal-portfolio/'}
							onChange={() => {}}
							placeholder="Type something..."
							className="text-white w-full border-solid-2 border-black h-[95%] bg-gray-400 rounded-2xl"
						/>
					</div>
					<iframe
						src="https://ummer53.github.io/personal-portfolio/"
						className=" site-content h-full w-full overflow-hidden rounded-md border-2"
						title="demo"
					>
						{' '}
					</iframe>
				</div>
			</div>
		</div>
	);
};

export default Demo;
