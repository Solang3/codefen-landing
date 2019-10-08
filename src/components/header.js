import React from 'react';

import './style.scss';
import {
	FaCheck
} from 'react-icons/fa';
import imgDemo from '../images/derecha.png';

const Header = ({ siteTitle }) => (
	<section className="hero is-primary">
		<div className="hero-body">
			<div className="container">
				<div className="columns">
					<div className="column has-title">
						<h1 className="title">Red team on demand</h1>
						<h3 className="subtitle">online & hassle free, vulnerability detection & management</h3>
						<ul className="features-list">
							<li>
								<i className="icon"><FaCheck color="#fff" /></i>
								<p>real time network & information survilliance</p>
							</li>
							<li>
								<i className="icon"><FaCheck color="#fff" /></i>
								<p>dynamic, actionable, & content-rich reports</p>
							</li>
							<li>
								<i className="icon"><FaCheck color="#fff" /></i>
								<p>easy to print security reports</p>
							</li>
							<li>
								<i className="icon"><FaCheck color="#fff" /></i>
								<p>professional assistance</p>
							</li>
							<li>
								<i className="icon"><FaCheck color="#fff" /></i>
								<p>recheck until solved</p>
							</li>
							<li>
								<i className="icon"><FaCheck color="#fff" /></i>
								<p>peer review issues</p>
							</li>
							<li>
								<i className="icon"><FaCheck color="#fff" /></i>
								<p>contest: distributed hacker based security</p>
							</li>
							<li>
								<i className="icon"><FaCheck color="#fff" /></i>
								<p>supervisor.js pattern analyzer</p>
							</li>
						</ul>
					</div>
					<div className="column"><img src={imgDemo} alt="demo" /></div>
				</div>
			</div>
		</div>
	</section>
);

export default Header;
