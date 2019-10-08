import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
import Firstsection from './firstsection';
import Secondsection from './secondsection';
import Navbar from './navbar';

const Layout = ({ children }) => (
	<div>
		<Helmet />
		<Navbar/>
		<Header />
		<Firstsection />
		<Secondsection />
	</div>
);

export default Layout;
