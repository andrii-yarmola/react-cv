import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
	render() {
		return (
			<div>
				<h1>
					<Link to="/">Hello and Welcome to My Single-Page App</Link>
				</h1>
				<img src={'images/img2.jpg'} alt="image description"/>
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
									
									<div className="cube">
										<div className="face n1 medium">
											<a href="#" class="link">
												<span class="img-holder">
												</span>
												<strong class="glitch" title="About me / contacts">About me / contacts</strong>
											</a>
										</div>
									</div>
									
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
