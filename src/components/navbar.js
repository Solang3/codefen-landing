import React from 'react';

import './style.scss';

const Navbar = () => (
		<nav class="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
			<div class="navbar-brand">
				<a class="navbar-item" href="http://codefen.io">
					<h1>codefen</h1>
				</a>

				<a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar-main" href="/">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="navbar-main" class="navbar-menu">
				<div class="navbar-end">
					<a class="navbar-item" href="/">
						services
					</a>

					<a class="navbar-item" href="/">
						industries
					</a>

					<a class="navbar-item" href="/">
						pricing
					</a>

					<div class="navbar-item has-dropdown is-hoverable">
						<a class="navbar-link" href="/">
							community
						</a>

						<div class="navbar-dropdown">
							<a class="navbar-item" href="/">
								about
							</a>
							<a class="navbar-item" href="/">
								careers
							</a>
							<a class="navbar-item" href="#">
								contact
							</a>
							<hr class="navbar-divider" />
							<a class="navbar-item" href="/">
								Report an issue
							</a>
						</div>
					</div>
					<div class="navbar-item">
						<div class="buttons">
							<a class="button is-primary" href="/">
								<strong>Sign up</strong>
							</a>
							<a class="button is-light" href="/">
								Log in
							</a>
						</div>
					</div>
				</div>
  			</div>
		</nav>
);

export default Navbar;
