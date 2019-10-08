import React from 'react';
import {
	FaBinoculars,
	FaBug,
	FaFilePdf,
	FaCheck,
	FaPaperPlane,
	FaTools
} from 'react-icons/fa';

import './style.scss';

const Firstsection = () => (
	<div>
		<section className="section our-process">
			<div className="container">
				<div className="has-title title-grey">
					<h3 className="title">How does our process work?</h3>
					<h4 className="subtitle">codefen security survelliance process step by step</h4>
				</div>
				<div className="columns process-list">
					<div className="column is-half">
						<article className="media">
							<figure className="media-left">
								<span className="icon is-large">
									<FaBinoculars size="fas fa-3x" color="#fff" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-5">01. our team of hackers search for vulnerabilities</h1>
									<p className="subtitle is-size-6">
									Professional hackers search for vulnerabilities in the defined scope, the research is conducted as a permanent proces. Vulnerabilities are detected and reported by individuals or teams.
									</p>
								</div>
							</div>
						</article>
						<article className="media">
							<figure className="media-left">
								<span className="icon is-large">
									<FaBug size="fas fa-3x" color="#fff" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-5">02. A vulnerability is identified!</h1>
									<p className="subtitle is-size-6">
									After some proper research, a vulnerability is identified by a meritful hacker and is tested in order to understand its risks and implications, 									</p>
								</div>
							</div>
						</article>
						<article className="media">
							<figure className="media-left">
								<span className="icon is-large">
									<FaFilePdf size="fas fa-3x" color="#fff" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-5">03. vulnerability report is created</h1>
									<p className="subtitle is-size-6">
									Once all the information is collected, our content-rich vulnerability report is created, which may include media, attachments, proof of concepts and actionable data.									</p>
								</div>
							</div>
						</article>
					</div>
					<div className="column is-half">
					<article className="media">
							<figure className="media-left">
								<span className="icon is-large">
									<FaCheck size="fas fa-3x" color="#fff" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-5">04. vulnerability validation</h1>
									<p className="subtitle is-size-6">
									La vulnerabilidad es confirmada por un proceso de verificación de pares, realizado de forma interna por personal de codefen, cero porciento false positives.									</p>
								</div>
							</div>
						</article>
						<article className="media">
							<figure className="media-left">
								<span className="icon is-large">
									<FaPaperPlane size="fas fa-3x" color="#fff" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-5">05. vulnerability communication</h1>
									<p className="subtitle is-size-6">
									Después de ser validada por pares, la vulnerabilidad se comunica al instante para ser abordada y resuelta lo antes posible.									</p>
								</div>
							</div>
						</article>
						<article className="media">
							<figure className="media-left">
								<span className="icon is-large">
									<FaTools size="fas fa-3x" color="#fff" />
								</span>
							</figure>
							<div className="media-content">
								<div className="content">
									<h1 className="title is-size-5">06. vulnerability is fixed</h1>
									<p className="subtitle is-size-6">
									Resuelva de forma simple la vulnerabilidad, por medio de las indicaciones dadas. Si lo desea, puede pedir una revisión o ayuda desde la misma sección!
									</p>
								</div>
							</div>
						</article>
					</div>
					
				</div>
			</div>
		</section>
	</div>
);

export default Firstsection;
