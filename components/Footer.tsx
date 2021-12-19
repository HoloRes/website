import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faDiscord, faGithub, faTwitter, faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Footer = function () {
	return (
		<footer className="h-16 text-center mt-2">
			Find us at:
			<div className="flex justify-center items-center text-black gap-4 mt-1">
				<a href="https://twitter.com/HLRDiscord" title="Twitter" target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faTwitter} size="lg" />
				</a>
				<a href="https://discord.gg/HoloRes" title="Discord" target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faDiscord} size="lg" />
				</a>
				<a href="https://www.youtube.com/channel/UCweNMiLJU3IsVUhZM3Uh0vg" title="YouTube: Hololive Resort Subs" target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faYoutube} size="lg" />
				</a>
				<a href="https://github.com/HoloRes" title="GitHub" target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faGithub} size="lg" />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
