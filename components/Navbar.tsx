import Image from 'next/image';
import Link from 'next/link';

const Navbar = function () {
	return (
		<div className="bg-hololive-blue w-full h-20 p-2 flex items-center border-b border-white justify-center lg:justify-start">
			<Link href="/" passHref>
				<Image
					height={85}
					width={200}
					quality={100}
					objectFit="contain"
					src="/img/logo.png"
					className="cursor-pointer"
				/>
			</Link>
		</div>
	);
};

export default Navbar;
