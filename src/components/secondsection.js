import React from 'react';
import imgDemo from '../images/izquierda.png';
import './style.scss';

const Secondsection = () => (
	<div>
		<section className="section our-services">
			<div className="container">
				<div className="has-title title-grey">
					<h3 className="title">Traditional services vs codefen</h3>
					<h4 className="subtitle">traditional it security vs our online services</h4>
				</div>
				<div className="columns services-list">
					<div className="column is-half">
						<article className="media">
							<figure>
								<img src={imgDemo} alt="screenshot" />
							</figure>
						</article>
					</div>
					<div className="column is-half">
						<article className="media">
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-5">permanent infrastructure monitoring </h1>
									<p className="subtitle is-size-6">
									La vulnerabilidad es confirmada por un proceso de verificación de pares, realizado de forma interna por personal de codefen, cero porciento false positives.									</p>
								</div>
							</div>
						</article>
						<article className="media">
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-5">verified vulnerabilities & express reporting</h1>
									<p className="subtitle is-size-6">
									Common security companies run scans once a year, instead we scan on daily basis, as well, we don’t waste a minute to communicate a flaw, we address issues as soon as we can.		</p>						</div>
							</div>
						</article>
						<article className="media">
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-5">online, encrypted & safe plataform</h1>
									<p className="subtitle is-size-6">
									Goodbye to those endless documents, vulnerabilities are documented online in our safe servers, ready to be addressed one by one, well-documented and well-evidenced.									</p>
								</div>
							</div>
						</article>
					</div>
					
				</div>
			</div>
		</section>
	</div>
);

export default Secondsection;
