import { useState } from 'react';
import { Link } from 'react-router';
import { Collapse } from '@kunukn/react-collapse'
import Body from '../components/Body';

import YouTube from 'react-youtube';

import MarusotoLogo from '../assets/logos/marusotoLogo.svg?react';
// import MarusotoLogo from '../assets/logos/marusotoAnimation.svg?react';
import TententenLogo from '../assets/logos/tententenLogo.svg?react';
import KitsuneLogo from '../assets/logos/kitsuneLogo.svg?react';
import QuestLogo from '../assets/logos/questLogo.svg?react';
import RetroLogo from '../assets/logos/aboutLogo.svg?react';
import ContactLogo from '../assets/logos/contactLogo.svg?react';

import Quest from '../assets/titles/quest.svg?react';
import Retro from '../assets/titles/retro.svg?react';
import Contact from '../assets/titles/contact.svg?react';

import kitsuneGumi from '../assets/img/kitsuneGumiLogo.webp';
import TeamKitsuneLogo from '../assets/img/teamKitsuneLogo.svg?react';
import TeamKitsuneText from '../assets/img/teamKitsuneText.svg?react';

import CabinAlaska from '../assets/img/cabinAlaska.svg?react';
import MyakuraNigero from '../assets/img/myakuraNigero.svg?react';
import OsakaBanpaia from '../assets/img/osakaBanpaia.svg?react';
import MyakuraGojira from '../assets/img/myakuraVSGojira.svg?react';
import H2CE2 from '../assets/img/h2ce2.svg?react';

import Video from "../assets/video/contactVideo.mp4";
import VideoPreview from "../assets/video/videoPlaceholder.svg";

export default function PortfolioPage() {
	const [ showShop, setShowShop ] = useState(false);
	const [ showTententen, setShowTententen ] = useState(false);
	const [ showKitsune, setShowKitsune ] = useState(false);
	const [ showRetro, setShowRetro ] = useState(false);
	const [ showQuest, setShowQuest ] = useState(false);
	const [ showContact, setShowContact ] = useState(false);
	// const [isOpen, setIsOpen] = React.useState(false)
	const toggleShop = () => setShowShop((s) => !s)
	const toggleTententen = () => setShowTententen((s) => !s)
	const toggleKitsune = () => setShowKitsune((s) => !s)
	const toggleRetro = () => setShowRetro((s) => !s)
	const toggleQuest = () => setShowQuest((s) => !s)
	const toggleContact = () => setShowContact((s) => !s)

	const opts = {
		height: '100%',
		width: '100%',
		// playerVars: {
		// 	autoplay: 1,
		// },
	};

	return (
		<Body>
			<button className="item shop" onClick={toggleShop}>
				<div className="logoButton logoButtonLeft">
					<div className="logoImage"><MarusotoLogo /></div>
				</div>
				<div className="title">
					<h1 className="heading">Marusoto<span className="smallerSpace"></span>Store</h1>
					{/* <div className="subheading">(buy merch)</div> */}
				</div>
			</button>
			
			{/* <div className={"content shop " + (showShop ? 'showContent' : 'hideContent')}></div> */}
			<Collapse isOpen={showShop}>
				<div className="content shop">
					<p>Under Construction</p>
				</div>
			</Collapse>

			<button className="item tententen" onClick={toggleTententen}>
				<div className="logoButton logoButtonRight">
					<div className="logoImage"><TententenLogo /></div>
				</div>
				<div className="title">
					<h1 className="heading">tententen.art</h1>
				</div>
			</button>

			<Collapse isOpen={showTententen}>
				<div className="content tententen">
					{/* vertically thin kaleidoscope of logo */}
					<p>I started making <a className="underline" href="https://www.tententen.art" target="_blank">tententen</a> because I'm bad at art.</p>
					<p>Really bad.</p>
					<p>I have <a className="underline" href="https://en.wikipedia.org/wiki/Aphantasia" target="_blank">aphantasia</a>, meaning I can't see images in my head. But I love art and colors, so I tried to make an app where someone like me could create bright, fun designs and bring them to kaleidoscopic life.</p>
					{/* a few of my creations */}
					<p>My hope is that even people as challenged by art as <a className="underline" href="https://www.tententen.art" target="_blank">me</a> can use <a className="underline" href="https://www.tententen.art" target="_blank">tententen</a> to make colorful patterns to help brighten up their day.</p>
					{/* kaleidoscopes embedded as youtube videos */}
					<div className="title">
						<a href="https://www.tententen.art" target="_blank">
							<h1 className="heading tententenLink">tententen.art</h1>
						</a>
					</div>
				</div>
			</Collapse>

			<button className="item kitsune" onClick={toggleKitsune}>
				<div className="logoButton logoButtonLeft">
					<div className="logoImage"><KitsuneLogo /></div>
				</div>
				<div className="title">
					<h1 className="heading">Kitsune<span className="smallerSpace"></span>Gumi</h1>
				</div>
			</button>

			<Collapse isOpen={showKitsune}>
				<div className="content kitsune">
					<p><a className="underline"  href="https://kitsunegumi.com" target="_blank">Kitsune Gumi</a> is a group of Japanese foxes (kitsune) that love to explore and learn about the various regions of Japan.</p>
					<a className="kitsuneImage"  href="https://kitsunegumi.com" target="_blank"><img className="questGallery" src={kitsuneGumi} /></a>
					<p>This project was created with the help of two native Japanese friends. We enjoy working together on various projects under the moniker of <a className="underline"  href="https://kitsune.team" target="_blank">Team Kitsune</a>.</p>
					<div className="questGallery">
						<a className="teamKitsune"  href="https://kitsune.team" target="_blank">
							<TeamKitsuneLogo />
							<TeamKitsuneText />
						</a>
					</div>
					{/* TODO: Add Kanji Kitsune. */}
				</div>
			</Collapse>

			<button className="item retro" onClick={toggleRetro}>
				<div className="logoButton logoButtonRight">
					<div className="logoImage"><RetroLogo /></div>
				</div>
				<div className="title">
					<h1 className="heading"><Retro /></h1>
				</div>
			</button>

			<Collapse isOpen={showRetro}>
				<div className="content retro">
					<p>Retro Namer is a multiple-choice quiz game where you try to guess the original Japanese names of characters from classic retro games.</p>
				</div>
			</Collapse>

			<button className="item quest" onClick={toggleQuest}>
				<div className="logoButton logoButtonLeft">
					<div className="logoImage"><QuestLogo /></div>
				</div>
				<div className="title">
					<div className="heading">
						<Quest />
					</div>
				</div>
			</button>

			<Collapse isOpen={showQuest}>
				{/* 
					cabin in alaska
					osaka banpaia
					426810
					h2ce2
					bororobo
					katsu
				*/}
				<div className="content quest">
					<p>Sometimes you need a break from the pressures of saving the realm from calamity.</p>
					<div className="questGallery">
						<a className="cabinAlaska"  href="https://www.youtube.com/watch?v=bqfVL-TyiSw" target="_blank"><CabinAlaska /></a>
					</div>
					
					<p>I've never really thought of myself as a creator, I just like making things. It's definitely an inherited trait, as evidenced by this <a className="underline"  href="https://www.youtube.com/watch?v=bqfVL-TyiSw" target="_blank">video</a> of my dad and I building a cabin in Alaska.</p>
					<div className="playerWrapper">
						<YouTube className="reactPlayer" videoId="bqfVL-TyiSw" opts={opts} iframeClassName={"youtubeIFrame"}/>
					</div>
					<p>Fun Fact: This is the only YouTube comment section in existence that is overwhelmingly positive.</p>
					<div className="questGallery">
						<a className="osakaBanpaia"  href="https://osakabanpaia.com/" target="_blank"><OsakaBanpaia /></a>
					</div>
					<p>I'm a big fan of "Myaku-Myaku," the mascot for Osaka Expo 2025. The mascot's backstory is that it's made of blood and can change into any shape at will. These traits are suspiciously similar to those associated with vampires.</p>
					<div className="questGallery">
						<a className="myakuNigero"  href="https://osakabanpaia.com/" target="_blank"><MyakuraNigero /></a>
						{/* <MyakuraGojira /> */}
					</div>
					<p>Then there's the fact that the Japanese word for "Expo" is "Banpaku," which is extremely close to "Banpaia" (i.e. the Japanese pronunciation of "vampire"). This was the inspiration for <a className="underline"  href="https://osakabanpaia.com/" target="_blank">Osaka Banpaia</a>, a minigame where you try to escape from Count Myakula.</p>
					<div className="questGallery">
						<Link className="h2ce2" to={'/H2CE2/'}><H2CE2 /></Link>
					</div>
					<p>I'm also a big fan of absurdism.</p>
					<p>Monty Python, Douglas Adams, Doctor Who.</p>
					<p>In October 2024, I started writing an absurdist horror story, but half the chapters twisted and rearranged into something weirdly autobiographical.</p>
					<p>The other half are a (hopefully) fictional, terrifying account of <Link className="underline" to={'/H2CE2/'}>How To Create Everything Ever</Link>.</p>
				</div>
			</Collapse>

			

			<button className="item contact" onClick={toggleContact}>
				<div className="logoButton logoButtonRight">
					<div className="logoImage"><ContactLogo /></div>
				</div>
				<div className="title">
					<h1 className="heading"><Contact /></h1>
				</div>
			</button>

			<Collapse isOpen={showContact}>
				<div className="content contact">
					<video controls disablePictureInPicture controlsList="nodownload noplaybackrate" poster={VideoPreview}>
						<source src={Video} type="video/mp4" />
					</video>
				</div>
			</Collapse>

		</Body>
	);
}