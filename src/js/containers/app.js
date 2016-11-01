import React, { Component } from 'react';
import * as motion from 'popmotion';
import Layerlax from '../../../../react-layerlax/dist/';
import img1 from '../../images/Q1-BOTTOM-A.png';
import img2 from '../../images/Q1-BOTTOM-B.png'
import img3 from '../../images/Q1-TOP-A.png'
import img4 from '../../images/Q1-TOP-B.png'


class App extends Component {

	componentDidMount() {

		// todo: study popmotion and do this properly
		const h1 = document.querySelector('.app h1');
		const p = document.querySelector('.app p');
		const myDiv = document.querySelector('.app .myDiv');

		const tw1 = motion.tween({
			ease: motion.easing.cubicBezier(0, .42, 0, 1),
			duration: 600,
			values: {
				x: {
					from: -30,
					to: 0
				},
				opacity: {
					from: 0,
					to: 1
				}
			}
		}).on(h1);

		const tw2 = motion.tween({
			ease: motion.easing.anticipate,
			duration: 600,
			values: {
				x: {
					from: -30,
					to: 0
				},
				opacity: {
					from: 0,
					to: 1
				}
			}
		}).on(p);

		const tw3 = motion.tween({
			ease: motion.easing.anticipate,
			duration: 600,
			values: {
				x: {
					from: -30,
					to: 0
				},
				opacity: {
					from: 0,
					to: 1
				}
			}
		}).on(myDiv);

		const tl = motion.timeline([
			{
				tween: tw1
			},
			{
				tween: tw2
			},
			{
				tween: tw3
			}
		]);


		setTimeout(() => {

			tl.start();

		}, 800);

	}

	render() {


		return (
			<div className="app">
				<h1>Engage Front-end Boilerplate</h1>
				<p>A React Redux Webpack Gulp Sass Mocha Enzyme Zombie Chai Boilerplate by <span>Punkbit</span></p>
				<div className="myDiv">
					<Layerlax
						imgLayer1={img1}
						imgLayer2={img2}
						imgLayer3={img3}
						imgLayer4={img4}
					/>
				</div>
			</div>
		);

	}

}

export default App;
