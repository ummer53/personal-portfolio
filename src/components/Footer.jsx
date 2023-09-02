import { SocialIcon } from 'react-social-icons';

const Footer = () => {
	return (
		<div className="w-full h-20 bg-[#607491] flex justify-center items-center">
			<div className="flex justify-center items-center">
				<SocialIcon
					url="https://www.github.com/ummer53"
					className="mr-4"
					target="_blank"
					fgColor="#fff"
					style={{ height: 35, width: 35 }}
				/>
				<SocialIcon
					url="https://linkedin.com/in/ummer53"
					className="mr-4"
					target="_blank"
					fgColor="#fff"
					style={{ height: 35, width: 35 }}
				/>
				<SocialIcon
					url="https://www.instagram.com/ummer_53/"
					className="mr-4"
					target="_blank"
					fgColor="#fff"
					style={{ height: 35, width: 35 }}
				/>
			</div>
		</div>
	);
};

export default Footer;
