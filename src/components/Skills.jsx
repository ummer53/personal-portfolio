import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import ReactIcon from '../assets/react.png';
import Node from '../assets/node.png';
import Mongo from '../assets/mongo.png';
import Git from '../assets/github.png';
import Java from '../assets/java.png';
import javascript from '../assets/javascript.png';
import C from '../assets/c++2.png';
import spring from '../assets/spring.png';
import linux from '../assets/linux.png';
import sql from '../assets/sql.png';

const skillArray = [
	{
		id: 1,
		name: 'HTML',
		image: HTML,
	},
	{
		id: 2,
		name: 'CSS',
		image: CSS,
	},
	{
		id: 3,
		name: 'Javascript',
		image: javascript,
	},
	{
		id: 4,
		name: 'React JS',
		image: ReactIcon,
	},
	{
		id: 5,
		name: 'Node JS',
		image: Node,
	},
	{
		id: 6,
		name: 'Mongo DB',
		image: Mongo,
	},
	{
		id: 7,
		name: 'GitHub',
		image: Git,
	},
	{
		id: 8,
		name: 'Java',
		image: Java,
	},
	{
		id: 9,
		name: 'C++',
		image: C,
	},
	{
		id: 10,
		name: 'Spring',
		image: spring,
	},
	{
		id: 11,
		name: 'Linux',
		image: linux,
	},
	{
		id: 12,
		name: 'SQL',
		image: sql,
	},
];

const SkillCard = ({ name, image }) => {
	return (
		<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
			<img className="w-20 mx-auto" src={image} alt="HTML Icon" />
			<p className="py-4">{name}</p>
		</div>
	);
};

const Skills = () => {
	return (
		<div
			name="skills"
			className="w-full h-full bg-[#0a192f] text-gray-300 main-div "
		>
			{/* Container */}
			<div className="max-w-[1000px] mx-auto  flex flex-col justify-center w-full h-full pt-20">
				<div className="max-w-[1000px] w-full grid grid-cols gap-8">
					<div className="sm:text-center pb-8 pl-4">
						<p className="text-4xl inline font-bold border-b-4 border-pink-600 ">
							Skills
						</p>
					</div>
				</div>
				<p className="text-center">Technologies I can work with</p>

				<div className="w-full grid grid-cols-2 gap-8 sm:grid-cols-4 text-center py-8">
					{/* skillCards*/}

					{skillArray.map((skill) => {
						return (
							// {/* skillCard*/}
							<SkillCard key={skill.id} name={skill.name} image={skill.image} />
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Skills;
