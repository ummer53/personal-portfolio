import '../index.css';
import Carousel from 'react-material-ui-carousel';
import networkImg from '../assets/network-bar.png';
import homeIcon from '../assets/white-home-icon-png-16.png';
import { useEffect, useRef, useState } from 'react';
import allAppsIcon from '../assets/all-apps.png';
import { Terminal1, Terminal2, Terminal3 } from './DemoTerminal';

function importAllImages(r) {
	return r.keys().map(r);
}

const images = importAllImages(
	require.context('../assets/screen-icons/', false, /\.(png|jpe?g|svg|gif)$/)
);

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
		<div className="bg-[#0a192f] flex items-center justify-between h-screen w-full pb-4 main-div px-4">
			<Carousel
				autoPlay={true}
				animation={'slide'}
				indicators={false}
				interval={5000}
				swipe={true}
				className="demo-carousel w-full h-[620px] hidden 2k:flex flex-col 2k:w-[50%] p-auto"
			>
				<Phone time={time} url={'https://ummer53.github/personal-porfolio/'} />

				<Phone time={time} url={'https://ummer53.github/personal-porfolio/'} />

				<Phone
					time={time}
					url={'https://ummer53.github.io/personal-portfolio/'}
				/>
			</Carousel>
			<Carousel
				autoPlay={true}
				animation={'fade'}
				indicators={true}
				interval={5000}
				swipe={true}
				className="demo-carousel hidden  max-w-[1024px] max-h-[800px] w-full h-full laptop:flex flex-col items-center p-auto mx-auto"
			>
				<Monitor
					time={time}
					url={'https://ummer53.github.io/personal-porfolio/'}
					Terminal={Terminal1}
				/>
				<Monitor
					time={time}
					url={'https://ummer53.github.io/personal-porfolio/'}
					Terminal={Terminal2}
				/>
				<Monitor
					time={time}
					url={'https://ummer53.github.io/personal-porfolio/'}
					Terminal={Terminal3}
				/>
			</Carousel>
			<Carousel
				autoPlay={true}
				animation={'slide'}
				indicators={false}
				interval={5000}
				swipe={true}
				className="demo-carousel w-full h-[620px] laptop:hidden desktop:flex flex-col desktop:w-[40%] 2k:w-[50%] p-auto"
			>
				<Phone time={time} url={'https://ummer53.github/personal-porfolio/'} />

				<Phone time={time} url={'https://ummer53.github/personal-porfolio/'} />

				<Phone
					time={time}
					url={'https://ummer53.github.io/personal-portfolio/'}
				/>
			</Carousel>
		</div>
	);
};

const Phone = ({ time, url }) => {
	const iframeRef = useRef(null);

	// State to store the current URL
	const [currentUrl, setCurrentUrl] = useState(url);

	return (
		<>
			{' '}
			<div className="mobile bg-black w-[80%] h-[600px] flex  justify-center items-center rounded-xl max-w-xs:hidden mx-auto">
				<div className="mobile-screen bg-[#e6e9ee] w-[90%] h-[95%] flex flex-col justify-center items-center rounded-xl p-2">
					<span className="notch bg-[#e6e9ee] w-[20px] h-[20px] rounded-t-sm rounded-b-md mb-[-12.5px] z-10"></span>
					<div className="status-bar flex flex-row w-full border-2">
						<span className="bg-white h-[20px] w-full float-left">{time}</span>
						<img
							src={networkImg}
							alt="network"
							className="tablet:w-[30%] w-[50%] h-[20px] float-right"
						/>
					</div>
					<div className="browser-bar w-full h-10 rounded-md border-2 flex flex-row justify-between">
						<img
							onClick={() => {
								setCurrentUrl('https://www.google.com');
							}}
							src={homeIcon}
							alt="home"
							className="w-6 h-6 overflow-hidden"
						/>
						<input
							type="text"
							value={currentUrl}
							onChange={(e) => {
								setCurrentUrl(e.target.value);
							}}
							onSubmit={(e) => {
								setCurrentUrl(e.target.value);
							}}
							placeholder="Type something..."
							className="text-white w-full border-solid-2 border-black h-[95%] bg-gray-400 rounded-2xl"
						/>
					</div>
					<div className="h-full w-full overflow-auto">
						<iframe
							ref={iframeRef}
							src={currentUrl}
							className=" site-content w-[100%] h-[100%]   overflow-auto rounded-md border-2 text-left"
							title="demo"
						>
							{' '}
						</iframe>
					</div>
				</div>
			</div>
		</>
	);
};
const Monitor = ({ Terminal, time, url }) => {
	return (
		<>
			<div className="laptop hidden bg-gray-400 max-w-[1024px] max-h-[800px] w-[96%] h-[600px] laptop:flex p-auto rounded-lg">
				<span className="laptop-screen bg-gray-500 laptop:w-[98%] laptop:h-[98%] mx-[-20px] flex flex-row">
					<span className="screen-icons-tray grid flex-col gap-4   w-[6%] h-[100%] p-auto justify-center bg-gray-400 bg-opacity-80 border-0">
						<span className="screen-icons grid flex-col gap-2 ml-auto mt-[10px] w-[98%] h-[60%] rounded-md p-auto justify-center border-0">
							{images.map((image, index) => (
								<img
									key={index}
									src={image}
									alt="icon"
									onClick={() => {}}
									className="w-[100%] h-[100%] rounded-md border-2 opacity-100"
								/>
							))}
						</span>
						<img
							src={allAppsIcon}
							alt="all-apps"
							className="w-[100%] h-[25%] rounded-md border-2 place-self-end mb-[10px]"
						/>
					</span>

					<Terminal />
				</span>
			</div>
			<div className="laptop-base w-[25%] bg-gray-400 h-[100px] laptop:mx-auto">
				{/* Content of the second div */}
			</div>
			<div className="laptop-base w-[45%] bg-gray-400 h-[30px] laptop:mx-auto rounded-t-sm">
				{/* Content of the second div */}
			</div>
		</>
	);
};

export default Demo;
