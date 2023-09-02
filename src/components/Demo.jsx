import '../index.css';
import Carousel from 'react-material-ui-carousel';
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
		<div className="bg-[#0a192f] flex items-center justify-between h-screen w-full pb-4 main-div px-4">
			<Carousel
				showIndicators={false}
				showThumbs={false}
				className="w-full h-auto hidden desktop:flex flex-col desktop:w-[50%]"
			>
				<Phone
					time={time}
					url={'https://ummer53.github.io/personal-porfolio/'}
				/>

				<Phone
					time={time}
					url={'https://ummer53.github.io/personal-porfolio/'}
				/>

				<Phone
					time={time}
					url={'https://ummer53.github.io/personal-portfolio/'}
				/>
			</Carousel>
			<Carousel className="hidden bg-white max-w-[1024px] max-h-[800px] w-full h-full laptop:flex flex-col justify-center p-auto mx-auto">
				<Monitor
					time={time}
					url={'https://ummer53.github.io/personal-porfolio/'}
				/>
				<Monitor
					time={time}
					url={'https://ummer53.github.io/personal-porfolio/'}
				/>
				<Monitor
					time={time}
					url={'https://ummer53.github.io/personal-porfolio/'}
				/>
			</Carousel>
			<Carousel
				showIndicators={false}
				showThumbs={false}
				className="w-full laptop:w-[50%]  h-auto"
			>
				<Phone
					time={time}
					url={'https://ummer53.github.io/personal-porfolio/'}
				/>

				<Phone
					time={time}
					url={'https://ummer53.github.io/personal-porfolio/'}
				/>

				<Phone
					time={time}
					url={'https://ummer53.github.io/personal-portfolio/'}
				/>
			</Carousel>
		</div>
	);
};

const Phone = ({ time, url }) => {
	return (
		<>
			{' '}
			<div className="mobile bg-black w-[80%] h-[600px] flex  justify-center items-center rounded-xl max-w-xs:hidden mx-auto">
				<div className="mobile-screen bg-[#e6e9ee] w-[90%] h-[95%] flex flex-col justify-center items-center rounded-xl p-2">
					<div className="bg-[#e6e9ee] w-[20px] h-[20px] rounded-t-sm rounded-b-md mb-[-12.5px] z-10"></div>
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
							src={homeIcon}
							alt="home"
							className="w-6 h-6 overflow-hidden"
						/>
						<input
							type="text"
							value={url}
							onChange={() => {}}
							placeholder="Type something..."
							className="text-white w-full border-solid-2 border-black h-[95%] bg-gray-400 rounded-2xl"
						/>
					</div>
					<div className="h-full w-full overflow-auto">
						<iframe
							src={url}
							className=" site-content w-[100%] h-[100%]   overflow-auto rounded-md border-2"
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
const Monitor = ({ time, url }) => {
	return (
		<>
			<div className="laptop hidden bg-black max-w-[1024px] max-h-[800px] w-[96%] h-[90%] laptop:flex justify-center p-auto mx-auto">
				jhgdfhbjfgbj
			</div>
		</>
	);
};

export default Demo;
