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
		level: '90%',
	},
	{
		id: 2,
		name: 'CSS',
		image: CSS,
		level: '80%',
	},
	{
		id: 3,
		name: 'Javascript',
		image: javascript,
		level: '80%',
	},
	{
		id: 4,
		name: 'React JS',
		image: ReactIcon,
		level: '70%',
	},
	{
		id: 5,
		name: 'Node JS',
		image: Node,
		level: '60%',
	},
	{
		id: 6,
		name: 'Mongo DB',
		image: Mongo,
		level: '60%',
	},
	{
		id: 7,
		name: 'GitHub',
		image: Git,
		level: '70%',
	},
	{
		id: 8,
		name: 'Java',
		image: Java,
		level: '80%',
	},
	{
		id: 9,
		name: 'C++',
		image: C,
		level: '80%',
	},
	{
		id: 10,
		name: 'Spring',
		image: spring,
		level: '50%',
	},
	{
		id: 11,
		name: 'Linux',
		image: linux,
		level: '80%',
	},
	{
		id: 12,
		name: 'SQL',
		image: sql,
		level: '60%',
	},
];

const SkillCard = () => {
	return (
		<div
			className={`w-full grid  grid-cols-2 gap-8 sm:grid-cols-4 text-center py-8 `}
		>
			{skillArray.map((skill) => {
				return (
					<div
						key={skill.id}
						onMouseEnter={(event) => {
							event.currentTarget.children[2].classList.remove('hidden');
						}}
						onMouseLeave={(event) => {
							event.currentTarget.children[2].classList.add('hidden');
						}}
						onTouchStart={(event) => {
							event.currentTarget.children[2].classList.remove('hidden');
						}}
						onTouchEnd={(event) => {
							event.currentTarget.children[2].classList.add('hidden');
						}}
						className={`skill relative shadow-md shadow-[#b5c1db] duration-50    hover:overlay`}
					>
						<img className=" w-20 mx-auto" src={skill.image} alt="HTML Icon" />

						<p className="py-4">{skill.name}</p>
						<div
							className={`overlay hidden w-[${skill.level}] h-auto absolute inset-0 bg-white opacity-50 `}
						>
							<p className="text-blue-500 text-2xl pt-20 left-0">
								{skill.level}
							</p>
						</div>
					</div>
				);
			})}
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
			<div className="max-w-[1000px] mx-auto  flex flex-col justify-center w-full h-full pt-20 ">
				<div className="max-w-[1000px] w-full grid grid-cols gap-8">
					<div className="sm:text-center pb-8 pl-4 ">
						<p className="text-4xl inline font-bold border-b-4 border-pink-600 ">
							Skills
						</p>
					</div>
				</div>
				<p className="text-center">Technologies I can work with</p>

				<SkillCard />
			</div>
		</div>
	);
};

export default Skills;
