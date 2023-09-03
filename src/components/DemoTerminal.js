export const Terminal1 = () => {
	return (
		<div className="terminal justify-self-center m-auto p-auto bg-black w-[60%] h-[40%] rounded-lg text-gray-100">
			<p className="p-2">
				<span className="text-green-400">ummer@ummer-Lenovo:~$</span> npm start
			</p>
		</div>
	);
};

export const Terminal2 = () => {
	return (
		<div className="terminaljustify-self-center m-auto p-auto bg-black w-[60%] h-[40%] rounded-lg text-gray-100">
			<p>
				<span className="text-blue-300 items-center mx-[25%] my-8">
					starting the development server...
				</span>{' '}
			</p>
		</div>
	);
};

export const Terminal3 = () => {
	return (
		<div className="terminal justify-self-center m-auto p-auto bg-black w-[80%] h-[50%] rounded-lg px-2">
			<p className="bg-black text-green-600 font-mono ">
				Compiled successfully!
			</p>
			<p className="bg-black text-green-400 font-mono py-1 ">
				You can now view <span className="text-red-600">my-portfolio</span> in
				the browser.
			</p>
			<div className="grid grid-cols-4 py-4 px-8">
				<span className="text-red-600 font-bold col-span-1">Local:</span>
				<span className="bg-black text-blue-400 font-mono col-span-3">
					{/* <span className="text-red-600">Local:</span>{' '} */}
					http://localhost:3000/personal-portfolio
				</span>
				<span className="text-red-600 font-bold col-span-1">
					On Your Network:
				</span>
				<span className="bg-black text-blue-400 font-mono col-span-3">
					{/* <span className="text-red-600">On Your Network:</span>{' '} */}
					http://192.168.1.4:3000/personal-portfolio
				</span>
			</div>
			<p className="bg-black text-white font-mono  ">
				Note that the development build is not optimized. To create a production
				build, <span className="text-blue-300">use npm run build.</span>
			</p>
			<p className="bg-black text-white font-mono pt-1 ">
				webpack compiled <span className="text-green-600">successfully</span>
			</p>
		</div>
	);
};
