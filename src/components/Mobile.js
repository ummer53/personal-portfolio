import { useEffect, useState } from 'react';
import networkImg from '../assets/network-bar.png';
import homeIcon from '../assets/white-home-icon-png-16.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';

const Mobile = () => {
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
		<div name="home" className="w-full h-screen bg-[#cfd3da] ">
			{/* Container */}
			<div className="max-w-[1000px] bg-red-300 mx-auto px-8 h-full flex flex-col justify-center text-gray-400">
				<div className=" h-[90%]">
					<Carousel
						className="custom-carousel tablet:bg-[#e5e7eb] flex items-center justify-left h-full w-full py-[-10px] mx-auto"
						autoPlay
						infiniteLoop
						showIndicators={true}
						showStatus={false}
						showThumbs={false}
						interval={5000}
					>
						<div className="mobile bg-black w-[95%] h-[700px] tablet:h-[75%] flex  justify-center items-center rounded-xl max-w-xs:hidden mx-auto max-w-xs:h-75">
							<div className="mobile-screen bg-[#e6e9ee] w-[90%] h-[95%] flex flex-col justify-center items-center rounded-xl">
								<div className="status-bar flex flex-row w-full  border-2">
									<span className="bg-white h-[20px] w-full  self-start">
										{time}
									</span>
									<img
										src={networkImg}
										alt="network"
										className="w-[40%] h-[20px] float-right"
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
									className=" site-content h-[100%] w-[100%] overflow-hidden rounded-md border-2"
									title="demo"
								>
									{' '}
								</iframe>
							</div>
						</div>
						{/* <div className="mobile bg-black w-[95%] h-[700px]  tablet:h-[75%] flex  justify-center items-center rounded-xl max-w-xs:hidden mx-auto max-w-xs:h-75">
							<div className="mobile-screen bg-[#e6e9ee] w-[90%] h-[95%] flex flex-col justify-center items-center rounded-xl p-2">
								<div className="status-bar flex flex-row w-full border-2">
									<span className="bg-white h-[20px] w-full float-left">
										{time}
									</span>
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
									className=" site-content h-[300%] w-full overflow-hidden rounded-md border-2"
									title="demo"
								>
									{' '}
								</iframe>
							</div>
						</div>
						<div className="mobile bg-black w-[95%] h-[700px]  tablet:h-[75%] flex  justify-center items-center rounded-xl max-w-xs:hidden mx-auto max-w-xs:h-75">
							<div className="mobile-screen bg-[#e6e9ee] w-[90%] h-[95%] flex flex-col justify-center items-center rounded-xl p-2">
								<div className="status-bar flex flex-row w-full border-2">
									<span className="bg-white h-[20px] w-full float-left">
										{time}
									</span>
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
									className=" site-content h-[300%] w-full overflow-hidden rounded-md border-2"
									title="demo"
								>
									{' '}
								</iframe>
							</div>
						</div> */}
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default Mobile;
