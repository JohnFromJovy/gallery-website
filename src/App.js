import React from 'react';
// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
//import Nav from "./components/Nav/Nav";
import Homepage from './components/Views/Homepage/Homepage';
import About from './components/Views/About/About';
import Gallery from './components/Views/Gallery/Gallery';
import Contact from './components/Views/Contact/Contact';
import Sidebar from './components/Sidebar/Sidebar';

// import Footer from './components/Footer/Footer';
import './styles/style.css';

function App() {
	// const [currentPage, setCurrentPage] = useState(0); // 0 表示第一个页面, 1 表示第二个页面，以此类推

	return (
		<div className="App">
			{/* <Sidebar>
					<div className="content-wrapper">
					<div
						className="content"
						style={{ transform: `translateY(-${currentPage * 100}%)` }}>
						<div className="page">
							<Homepage />
		
						</div>
						<div className="page">
							<About />
	
						</div>
						<div>
							<Gallery />

						</div>
						<div>
							<Contact />

						</div>
					</div>
				</div>
					</Sidebar> */}
			<Sidebar>
				<Routes>
					<Route
						index
						element={<Homepage />}
					/>
					<Route
						path="/about"
						element={<About />}
					/>
					<Route
						path="/gallery"
						element={<Gallery />}
					/>
					<Route
						path="/contact"
						element={<Contact />}
					/>
				</Routes>
			</Sidebar>
			{/* <Routes>
				<Route
					index
					element={<Homepage />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/gallery"
					element={<Gallery />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/>
			</Routes>
		</div> */}
			{/* // <Nav />
			//{' '}
			<Routes>
				//{' '}
				<Route
					index
					element={<Homepage />}
				/>
				//{' '}
				<Route
					path="/about"
					element={<About />}
				/>
				//{' '}
				<Route
					path="/gallery"
					element={<Gallery />}
				/>
				//{' '}
				<Route
					path="/contact"
					element={<Contact />}
				/>
				//{' '}
			</Routes>
			// <Footer />
			*/}
		</div>
	);
}

export default App;
