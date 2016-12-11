import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
	render() {
		return (
			<div>
				<h1>
					<Link to="/">Reduxstagram</Link>
				</h1>
				<div id="wrapper">
					<div className="home-holder">
						<div className="container">
							<h1>Hello and Welcome to My Single-Page App</h1>
							<div className="cube-holder">
								<div className="container-cube">
									<button className="arrow a-top">
										<i className="fa fa-angle-up" aria-hidden="true"></i>
									</button>
									<button className="arrow a-bottom">
										<i className="fa fa-angle-down" aria-hidden="true"></i>
									</button>
									<button className="arrow a-left">
										<i className="fa fa-angle-left" aria-hidden="true"></i>
									</button>
									<button className="arrow a-right">
										<i className="fa fa-angle-right" aria-hidden="true"></i>
									</button>
									<img src={'images/img1.jpg'} alt="image description"/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
});

export default Main;
