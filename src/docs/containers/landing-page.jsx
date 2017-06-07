import React from 'react';
import createClass from 'create-react-class';
import { lucidClassNames } from '../../util/style-helpers';
import { toMarkdown, handleHighlightCode } from '../util';
import { Motion, spring } from 'react-motion';

const readmeRaw = require('!!raw!../../../README.md'); // eslint-disable-line

const cx = lucidClassNames.bind('&-LandingPage');

const squareDelta = -60;
const damping = 30;

const LandingPage = createClass({
	getInitialState() {
		return {
			isCarpeted: false,
		};
	},

	componentDidMount: handleHighlightCode,
	componentDidUpdate: handleHighlightCode,

	toggleCarpet() {
		this.setState({ isCarpeted: !this.state.isCarpeted });
	},

	render() {
		const { isCarpeted } = this.state;
		return (
			<div
				className={cx('&', {
					'&-is-carpeted': isCarpeted,
				})}
			>
				{/* Logo */}
				<svg className={cx('&-logo')} viewBox="0 0 400.4 179.8" width={400}>
					<g>
						<path d="M50.6,140.8c-1.3,1.2-3,2.1-5.2,2.1s-3.9-0.9-5.2-2.1c-2.3-2.2-2.5-5.5-2.5-8.4c0-2.9,0.3-6.2,2.5-8.4
							c1.3-1.2,3-2.1,5.2-2.1s3.9,0.9,5.2,2.1c2.3,2.2,2.5,5.5,2.5,8.4C53.1,135.3,52.9,138.6,50.6,140.8z M49.5,125
							c-1.1-1-2.5-1.6-4.1-1.6c-1.6,0-3,0.5-4.1,1.6c-2,1.9-2.1,5-2.1,7.4c0,2.4,0.1,5.6,2.1,7.5c1.1,1,2.5,1.6,4.1,1.6
							c1.6,0,3-0.5,4.1-1.6c2-1.9,2.1-5.1,2.1-7.5C51.6,130,51.5,126.9,49.5,125z" />
						<path d="M65.5,141.4c-0.9,0.9-2.2,1.5-3.9,1.5c-2,0-4-1.1-4.8-2.8v8.1h-1.4v-19.9h1.3l0.2,2.5c0.8-1.8,2.8-2.9,4.7-2.9
							c1.6,0,2.8,0.5,3.8,1.3c1.6,1.4,2.3,3.7,2.3,6.1C67.7,137.7,67,140,65.5,141.4z M64.4,130.3c-0.7-0.6-1.6-1-2.8-1
							c-1.3,0-2.2,0.5-2.9,1.1c-1.3,1.3-1.8,3-1.8,5c0,2.1,0.5,3.8,1.8,5c0.7,0.7,1.7,1.1,3,1.1c1.3,0,2.3-0.5,3-1.3
							c1.1-1.2,1.6-3,1.6-4.8C66.2,133.4,65.7,131.4,64.4,130.3z" />
						<path d="M82,135.7H71.1c0,1.7,0.6,3.2,1.5,4.3c0.8,0.9,1.9,1.5,3.4,1.5c1.3,0,2.3-0.5,3.1-1.3c0.5-0.5,0.9-1.2,1.1-2
							h1.5c-0.2,1.2-0.8,2.2-1.6,3c-1,1-2.4,1.7-4.1,1.7c-2.1,0-3.5-0.9-4.5-2c-1.2-1.4-1.8-3.2-1.8-5.4c0-1.8,0.3-3.6,1.4-5.1
							c1.2-1.6,2.8-2.5,4.8-2.5c3.8,0,6.1,3.3,6.1,6.9C82,135.1,82,135.4,82,135.7z M75.9,129.2c-2.9,0-4.8,2.4-4.8,5.2h9.4
							C80.5,131.7,78.8,129.2,75.9,129.2z" />
						<path d="M94.9,142.5v-9.3c0-2.5-1.1-3.9-3.7-3.9c-3.5,0-4.7,3-4.7,6.1v7.1h-1.4v-14.2h1.3l0.2,2.6c0.8-1.8,2.8-3,4.8-3
							c3.3,0,5,2,5,5.2v9.4H94.9z" />
						<path d="M114.8,141.2c-1,1.1-2.7,1.7-4.6,1.7c-1.9,0-3.6-0.6-4.7-1.8c-0.8-0.9-1.1-1.7-1.2-2.9h1.5
							c0.1,0.9,0.5,1.6,1.1,2.2c0.8,0.8,2,1.1,3.4,1.1c1.5,0,2.6-0.3,3.4-1.1c0.5-0.5,0.8-1,0.8-1.8c0-1.3-0.9-2.4-2.6-2.6l-2.8-0.4
							c-1.2-0.1-2.4-0.5-3.2-1.4c-0.5-0.6-0.8-1.3-0.8-2.2c0-1.1,0.5-2.1,1.2-2.8c1-0.9,2.4-1.3,3.9-1.3c1.7,0,3.3,0.5,4.3,1.7
							c0.7,0.8,1.1,1.7,1.1,2.6H114c-0.1-0.5-0.3-1.2-0.7-1.7c-0.7-0.8-1.8-1.3-3.2-1.3c-1.1,0-1.9,0.2-2.6,0.7c-0.7,0.5-1.1,1.2-1.1,2
							c0,1.2,0.6,2.1,2.8,2.4l2.7,0.4c2.7,0.4,3.9,2.2,3.9,3.9C115.7,139.6,115.4,140.4,114.8,141.2z" />
						<path d="M128.1,141.2c-1,1-2.4,1.7-4.2,1.7c-1.8,0-3.2-0.7-4.2-1.7c-1.5-1.5-2-3.4-2-5.8c0-2.4,0.5-4.3,2-5.8
							c1-1,2.4-1.7,4.2-1.7c1.8,0,3.2,0.7,4.2,1.7c1.5,1.5,2,3.4,2,5.8C130.1,137.8,129.6,139.7,128.1,141.2z M127.1,130.5
							c-0.7-0.8-1.8-1.3-3.1-1.3c-1.4,0-2.4,0.5-3.1,1.3c-1.3,1.3-1.6,3-1.6,4.8c0,1.9,0.3,3.5,1.6,4.8c0.7,0.8,1.8,1.3,3.1,1.3
							c1.4,0,2.4-0.5,3.1-1.3c1.3-1.3,1.6-3,1.6-4.8C128.7,133.5,128.4,131.9,127.1,130.5z" />
						<path d="M143.1,142.5l-0.2-2.6c-0.8,1.8-2.8,3-4.8,3c-3.3,0-5-2-5-5.2v-9.4h1.4v9.3c0,2.5,1.1,3.9,3.7,3.9
							c3.5,0,4.7-3,4.7-6.1v-7.1h1.4v14.2H143.1z" />
						<path d="M154.8,129.5c-3.6,0-4.5,3.2-4.5,6.2v6.8h-1.4v-14.2h1.3l0.2,2.9c0.6-2,2.5-3,4.5-3c0.5,0,0.9,0,1.4,0.1v1.4
							C155.7,129.5,155.3,129.5,154.8,129.5z" />
						<path d="M163,142.9c-1.8,0-3.2-0.7-4.2-1.7c-1.5-1.5-2-3.4-2-5.8c0-2.4,0.5-4.3,2-5.8c1-1,2.4-1.7,4.2-1.7
							c3,0,5.2,1.9,5.5,4.8H167c-0.3-2-1.9-3.4-4-3.4c-1.4,0-2.4,0.5-3.2,1.2c-1.3,1.3-1.6,3-1.6,4.9c0,1.9,0.3,3.6,1.6,4.9
							c0.7,0.8,1.8,1.2,3.2,1.2c2.2,0,3.7-1.5,4-3.5h1.5C168.2,140.8,166,142.9,163,142.9z" />
						<path d="M182.6,135.7h-10.9c0,1.7,0.6,3.2,1.5,4.3c0.8,0.9,1.9,1.5,3.4,1.5c1.3,0,2.3-0.5,3.1-1.3
							c0.5-0.5,0.9-1.2,1.1-2h1.5c-0.2,1.2-0.8,2.2-1.6,3c-1,1-2.4,1.7-4.1,1.7c-2.1,0-3.5-0.9-4.5-2c-1.2-1.4-1.8-3.2-1.8-5.4
							c0-1.8,0.3-3.6,1.4-5.1c1.2-1.6,2.8-2.5,4.8-2.5c3.8,0,6.1,3.3,6.1,6.9C182.6,135.1,182.6,135.4,182.6,135.7z M176.5,129.2
							c-2.9,0-4.8,2.4-4.8,5.2h9.4C181.1,131.7,179.4,129.2,176.5,129.2z" />
						<path d="M195.4,142.5l-0.2-2.5c-0.8,1.8-2.8,2.9-4.7,2.9c-1.6,0-2.8-0.5-3.8-1.3c-1.6-1.4-2.3-3.7-2.3-6.1
							c0-2.3,0.7-4.6,2.2-6c0.9-0.9,2.2-1.5,3.9-1.5c2,0,4,1.1,4.8,2.8v-8.7h1.4v20.6H195.4z M193.5,130.4c-0.7-0.7-1.7-1.1-3-1.1
							c-1.3,0-2.3,0.5-3,1.3c-1.1,1.2-1.6,3-1.6,4.8c0,2,0.6,3.9,1.9,5.1c0.7,0.6,1.6,1,2.8,1c1.3,0,2.2-0.5,2.9-1.1c1.3-1.3,1.8-3,1.8-5
							C195.3,133.3,194.8,131.6,193.5,130.4z" />
						<path d="M216.1,141.5c-0.9,0.8-2.2,1.3-3.8,1.3c-1.9,0-4-1.1-4.7-2.9l-0.2,2.5h-1.3v-20.6h1.4v8.7
							c0.8-1.6,2.7-2.8,4.8-2.8c1.7,0,2.9,0.6,3.9,1.5c1.5,1.4,2.2,3.7,2.2,6C218.4,137.9,217.7,140.1,216.1,141.5z M215.4,130.5
							c-0.7-0.8-1.7-1.3-3-1.3c-1.3,0-2.3,0.4-3,1.1c-1.3,1.2-1.8,2.9-1.8,5c0,2,0.5,3.7,1.8,5c0.7,0.7,1.7,1.1,2.9,1.1
							c1.2,0,2.1-0.4,2.8-1c1.3-1.2,1.9-3.1,1.9-5.1C217,133.6,216.5,131.7,215.4,130.5z" />
						<path d="M225.1,145.5c-0.7,1.8-1.9,2.9-3.8,2.9c-0.5,0-1.3-0.1-1.8-0.3V147c0.6,0.1,1.2,0.2,1.7,0.2
							c1.4,0,2.1-0.9,2.6-2.1l0.9-2.3l-5.8-14.5h1.5l5,12.6l4.8-12.6h1.5L225.1,145.5z" />
						<path
							id="XMLID_15_"
							d="M243.7,122l-7.2,20.6h3.7l1.3-4h8.1l1.3,4h3.9l-7.2-20.6H243.7z M242.8,135.1l2.9-8.6l2.9,8.6
							H242.8z"
						/>
						<path
							id="XMLID_12_"
							d="M267.7,128.4c-0.9-0.7-2.1-1.3-3.6-1.3c-1.6,0-3.3,0.6-4.2,2l-0.2-1.6h-3v20.2h3.6v-6.4
							c0.4,0.8,2.1,1.5,3.8,1.5c1.5,0,2.7-0.5,3.6-1.2c1.8-1.5,2.7-3.7,2.7-6.7C270.4,132.1,269.5,129.9,267.7,128.4 M265.8,138.6
							c-0.5,0.7-1.3,1.2-2.4,1.2c-2.8,0-3.4-2.6-3.4-4.8c0-2.2,0.6-4.8,3.4-4.8c1.1,0,1.9,0.5,2.4,1.2c0.7,1,0.9,2.4,0.9,3.6
							C266.7,136.3,266.5,137.6,265.8,138.6"
						/>
						<path
							id="XMLID_9_"
							d="M283.3,128.4c-0.9-0.7-2.1-1.3-3.6-1.3c-1.6,0-3.3,0.6-4.2,2l-0.2-1.6h-3v20.2h3.6v-6.4
							c0.8,0.8,2.1,1.5,3.9,1.5c1.5,0,2.7-0.5,3.6-1.2c1.8-1.5,2.7-3.7,2.7-6.7C285.9,132.1,285,129.9,283.3,128.4 M281.3,138.6
							c-0.5,0.7-1.3,1.2-2.4,1.2c-2.8,0-3.4-2.6-3.4-4.8c0-2.2,0.6-4.8,3.4-4.8c1.1,0,1.9,0.5,2.4,1.2c0.7,1,0.9,2.4,0.9,3.6
							C282.3,136.3,282.1,137.6,281.3,138.6"
						/>
						<polygon
							id="XMLID_8_"
							points="300.7,135.9 292.1,122 288,122 288,142.6 292,142.6 292,128.4 300.6,142.6 304.7,142.6
							304.7,122 300.7,122 	"
						/>
						<path
							id="XMLID_5_"
							d="M315.5,139.2c-0.5,0.5-1.1,0.7-2.2,0.7c-1,0-1.7-0.3-2.2-0.8c-0.7-0.7-1.1-2-1.1-2.8h10
							c0-0.4,0-1.1,0-1.1c0.1-1.9-0.2-3.6-1.3-5.2c-1.2-1.9-3.2-2.8-5.5-2.8c-2,0-3.6,0.7-4.8,1.9c-1.4,1.5-2.2,3.6-2.2,6
							c0,2.4,0.8,4.5,2.3,6c1.2,1.1,2.7,1.8,4.7,1.8c1.9,0,3.8-0.7,5-2.1c0.6-0.7,1.2-1.6,1.3-2.8h-3.4
							C316,138.7,315.8,138.9,315.5,139.2 M310.7,131.2c0.5-0.7,1.4-1.2,2.5-1.2c1,0,1.8,0.4,2.3,0.9c0.6,0.6,0.9,1.4,0.9,2.6h-6.5
							C310,132.3,310.2,131.8,310.7,131.2"
						/>
						<polygon
							id="XMLID_4_"
							points="330.6,127.6 327.4,132.4 324.1,127.6 319.9,127.6 325.2,134.9 319.9,142.6 323.9,142.6
							327.2,137.6 330.5,142.6 334.5,142.6 329.4,135 334.6,127.6 	"
						/>
						<path
							id="XMLID_3_"
							d="M345.1,135.4c0,1.2-0.2,2.6-1.1,3.4c-0.4,0.4-1,0.7-1.8,0.7c-1.9,0-2.6-1.1-2.6-2.8v-9.1H336
							v9.9c0,3.2,2,5.3,5.2,5.3c1.9,0,3.6-0.8,4.3-2.2l0.3,2h3v-15.1h-3.6V135.4z"
						/>
						<path
							id="XMLID_2_"
							d="M359.2,133.6c-1.5-0.2-1.8-0.3-3.2-0.4c-0.8-0.1-1.7-0.4-1.7-1.5c0-0.8,0.5-1.3,1.1-1.6
							c0.5-0.2,1-0.2,1.6-0.2c0.7,0,1.5,0.2,2,0.7c0.3,0.4,0.6,1,0.6,1.4h3.4c0-1.2-0.5-2.2-1.3-3.1c-1.1-1.2-2.9-1.7-4.7-1.7
							c-1.9,0-3.4,0.6-4.5,1.5c-0.9,0.8-1.5,1.8-1.5,3.4c0,1.9,1.4,3.6,3.4,4c1.3,0.3,2.8,0.4,4.1,0.6c0.9,0.1,1.5,0.7,1.5,1.6
							c0,1.6-1.8,1.9-3,1.9c-1,0-1.7-0.3-2.3-0.7c-0.5-0.4-0.8-1-0.8-1.8h-3.4c0,1.6,0.7,2.7,1.6,3.6c1.2,1.2,2.9,1.8,4.8,1.8
							c2,0,3.9-0.5,5.1-1.7c0.8-0.8,1.3-1.8,1.3-3.3C363.3,135.4,361.6,134,359.2,133.6"
						/>
						<path d="M125.5,103.6l-0.9-6.4c-2.4,4.8-7.8,7.6-14.1,7.6c-10.5,0-17-7.1-17-17.6V55.1h11.8v29.6
							c0,5.8,2.3,9.3,8.5,9.3c2.7,0,4.6-1,6-2.5c2.8-2.6,3.6-7.1,3.6-11V55.1h11.8v48.5H125.5z" />
						<path d="M183.6,96.9c-3.4,4.2-9.3,7.7-16.8,7.7c-7.5,0-13.7-3.6-17.1-7.7c-3.7-4.6-5.4-10.8-5.4-17.9
							c0-7.2,1.7-13.3,5.4-17.9c3.4-4.1,9.6-7.7,17.1-7.7c7.5,0,13.4,3.5,16.8,7.7c2.3,2.9,3.6,6.8,3.8,10.7h-11.6
							c-0.1-1.8-0.7-3.3-1.4-4.5c-1.4-2.2-4-3.7-7.5-3.7c-3.2,0-5.6,1.3-7.2,3c-2.8,3.1-3.3,7.8-3.3,12.5c0,4.6,0.5,9.2,3.3,12.4
							c1.6,1.7,4,3.1,7.2,3.1c3.6,0,6.1-1.5,7.5-3.7c0.8-1.2,1.3-2.7,1.4-4.5h11.6C187.2,90.1,185.9,94,183.6,96.9z" />
						<path d="M195.7,103.6V55.1h12v48.5H195.7z" />
						<path d="M252,103.6l-0.8-5.4c-2.9,4.5-8.4,6.5-13.8,6.5c-4.9,0-9-1.7-12-4.1c-5.8-4.8-8.7-12.2-8.7-21.4
							c0-9.6,2.9-17.1,8.8-21.9c3-2.5,7-4,12-4c6.2,0,10.8,2.1,12.8,4.6V35.5h11.8v68.1H252z M239.8,63.2c-3.7,0-6.2,1.7-7.9,3.9
							c-2.5,3.2-3.1,7.6-3.1,11.9c0,4.2,0.7,8.8,3.1,12c1.7,2.2,4.2,3.9,7.9,3.9c9.2,0,11.1-8.8,11.1-15.8
							C250.9,71.9,249,63.2,239.8,63.2z" />
						<path d="M313.2,104.8C296,104.8,287,93.9,287,78V36.7h12.2v41c0,9.5,4.3,16,14.1,16c9.7,0,14.1-6.5,14.1-16v-41h12.2
							V78C339.5,93.9,330.5,104.8,313.2,104.8z" />
						<rect x="350.9" y="54.9" width="12.4" height="48.7" />
						<Motion
							defaultStyle={{ opacity: 0 }}
							style={{ opacity: spring(1, { damping: 4 }) }}
						>
							{value =>
								<rect
									className={cx('&-primary', '&-carpetize')}
									onClick={this.toggleCarpet}
									x="350.9"
									y="36.8"
									width="12.4"
									height="12.4"
									style={value}
								/>}
						</Motion>
						<rect x="195.7" y="36.8" width="12" height="12.4" />
						<path d="M86.2,91.2v12.4H37.5V91.2C37.5,91.2,86.4,91.2,86.2,91.2z" />
						<Motion
							defaultStyle={{
								opacity: 0,
								x: 37.5,
								y: 36.7 + squareDelta,
							}}
							style={{
								opacity: spring(1),
								x: spring(37.5),
								y: spring(36.7, { damping }),
							}}
						>
							{value =>
								<rect
									x={value.x}
									y={value.y}
									className={cx('&-primary')}
									width="12.4"
									height="12.4"
									style={{ opacity: value.opacity }}
								/>}
						</Motion>
						<Motion
							defaultStyle={{
								opacity: 0,
								x: 37.5 - squareDelta,
								y: 54.9,
							}}
							style={{
								opacity: spring(1),
								x: spring(37.5, { damping }),
								y: spring(54.9),
							}}
						>
							{value =>
								<rect
									x={value.x}
									y={value.y}
									className={cx('&-primary')}
									width="12.4"
									height="12.4"
									style={{ opacity: value.opacity }}
								/>}
						</Motion>
						<Motion
							defaultStyle={{
								opacity: 0,
								x: 37.5 + squareDelta,
								y: 73,
							}}
							style={{
								opacity: spring(1),
								x: spring(37.5, { damping }),
								y: spring(73),
							}}
						>
							{value =>
								<rect
									x={value.x}
									y={value.y}
									className={cx('&-primary')}
									width="12.4"
									height="12.4"
									style={{ opacity: value.opacity }}
								/>}
						</Motion>
					</g>
					{/* put a bird on it */}
					<Motion
						style={{
							opacity: spring(isCarpeted ? 1 : 0),
							x: spring(isCarpeted ? 140 : 20),
							y: spring(isCarpeted ? 8 : -50),
						}}
					>
						{value =>
							<g
								transform={`translate(${value.x}, ${value.y})`}
								className={cx('&-bird')}
								style={{
									opacity: value.opacity,
								}}
							>
								<path
									d="M33.49,3.228 C35.125,3.062 37.25,3.313 38.125,3.688 C39,4.062 41.327,5.479 42.184,7.029 L47.125,6.063 L47.201,6.054 C48.274,5.997 48.312,6.394 47.75,7.188 C46.562,8.563 46.312,8.563 46.312,8.563 C46.312,8.563 47.562,8.5 48.375,8.563 C49.188,8.625 49.375,9.063 48.625,9.75 C47.37,10.812 46.053,11.801 44.744,12.796 C44.917,13.329 44.785,12.897 45,14.125 C45.312,16.875 45.938,22.438 41.188,29.25 C38.224,33.523 33.806,36.715 28.564,37.371 L28.188,43.5 C28.188,43.5 29.25,43.375 30.188,43.375 C31.125,43.375 32.75,43.625 32.938,45.062 C33.125,46.5 31.562,46.8 31.562,46.8 L22.438,46.8 C20.688,46.8 20.688,45.125 20.688,45.125 L20.628,37.667 C12.595,37.018 4.732,31.957 0.996,24.75 C0.366,22.812 2.188,22.938 3.875,23.125 C5.563,23.312 10.75,23.375 14.625,21.188 C18.5,19 21.188,14.875 22.75,12.5 C24.312,10.125 27.375,6.125 28.562,5.188 C30.013,4.014 31.855,3.394 33.49,3.228 z M25.487,37.739 L24,37.812 L23.861,37.813 C23.664,39.705 23.496,41.601 23.375,43.5 C24.655,43.352 25.438,43.438 25.438,43.438 L25.487,37.739 z"
									fill="#000000"
								/>
								<path
									fill="#2abbb0"
									d="M35,13.312 C33.688,13.312 32.625,12.249 32.625,10.938 C32.625,9.626 33.688,8.562 35,8.562 C36.312,8.562 37.375,9.626 37.375,10.938 C37.375,12.249 36.312,13.312 35,13.312 z"
								/>
							</g>}
					</Motion>
				</svg>

				<div
					className={cx('&-readme')}
					dangerouslySetInnerHTML={toMarkdown(readmeRaw)}
				/>

			</div>
		);
	},
});

export default LandingPage;
