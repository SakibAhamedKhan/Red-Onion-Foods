import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import SearchPart from '../SearchPart/SearchPart';


const Home = () => {
	return (
		<div>
			<Header></Header>
			<SearchPart></SearchPart>
			<Footer></Footer>
		</div>
	);
};

export default Home;