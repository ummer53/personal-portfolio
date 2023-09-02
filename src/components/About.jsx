import React from 'react';

const About = () => {
	return (
		<div
			name="about"
			className="w-full h-screen bg-[#0a192f] text-gray-300 main-div"
		>
			<div className="flex flex-col justify-center items-center h-full">
				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 border-pink-600">
							About
						</p>
					</div>
					<div></div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="text-4xl font-bold sm:text-right">
						<p>Hi, I am Ummer, nice to meet you, Please take a look around</p>
					</div>
					<div>
						<p>
							I have just over a year of experience as a junior software
							engineer with First Technology. In my short time there, I've
							already contributed to over a dozen projects and assisted with
							managing one project for one of the firm's long-time clients.
						</p>

						<p>
							Prior to this role, I completed a two-year internship with Mobile
							First, where I honed my mobile app development skills. Ideally, I
							would like to continue to specialize in mobile software
							engineering, an area where I know your firm excels.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
