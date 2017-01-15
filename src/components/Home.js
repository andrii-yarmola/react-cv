import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
	render() {
		return (
			<div>
				<div id="wrapper">
					<div className="home-holder">
						<div className="container">
							<h1>Hello and Welcome to My Single-Page App</h1>
							<div className="cube-holder">
								<div className="container-cube">
									<button className="arrow a-top">
										<i className="icon-circle-up" aria-hidden="true"></i>
									</button>
									<button className="arrow a-left">
										<i className="icon-undo2" aria-hidden="true"></i>
									</button>
									<button className="arrow a-right">
										<i className="icon-redo2" aria-hidden="true"></i>
									</button>
									<div className="cube">
										<div className="face n1 medium">
											<Link to="/about" className="link">
												<span className="img-holder">
													<img src={'static/images/img4.jpg'} alt="image description"/>
												</span>
												<strong className="glitch" data-title="About me / contacts">About me / contacts</strong>
											</Link>
										</div>
										<div className="face n2">
											<Link to="/commercy-list" className="link">
												<span className="img-holder">
													<img src={'static/images/img1.png'} alt="image description"/>
												</span>
												<strong className="glitch" data-title="Commercy works">Commercy works</strong>
											</Link>
										</div>
										<div className="face n3"></div>
										<div className="face n4"></div>
										<div className="face n5">
											<Link to="/react-list" className="link">
												<span className="img-holder">
													<img src={'static/images/img3.jpg'} alt="image description"/>
												</span>
												<strong className="glitch" data-title="React home tasks">React home tasks</strong>
											</Link>
										</div>
										<div className="face n6"></div>
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
