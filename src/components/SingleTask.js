import React from 'react';
import { Link } from 'react-router';

const SingleTask = React.createClass({
	render() {
		const { task, i } = this.props;
		return (
			<div className="col">
				<div className="box shape">
					<div className="front face">
						<a className="link" href="#">
							<strong className="title ellipsis">{task.title}</strong>
							<span className="img-holder">
								<img src={task.image_url} alt="image description"/>
							</span>
							<span className="options-holder">
								<ul className="options-list">
									<li>
										<i className="fa fa-html5" aria-hidden="true"></i>
										HTML5/CSS3
									</li>
									<li>
										<i className="fa fa-expand" aria-hidden="true"></i>
										Responsive Look
									</li>
									<li>
										<i className="fa fa-apple" aria-hidden="true"></i>
										Retina support
									</li>
									<li>
										<i className="fa fa-css3" aria-hidden="true"></i>
										CSS animation
									</li>
									<li>
										<i className="fa fa-cogs" aria-hidden="true"></i>
										jQuery default plugins
									</li>
									<li>
										<i className="fa fa-cogs" aria-hidden="true"></i>
										Custom JS
									</li>
									<li>
										<i className="fa fa-cogs" aria-hidden="true"></i>
										Twitter Bootstrap
									</li>
									<li>
										<i className="fa fa-wordpress" aria-hidden="true"></i>
										WordPress
									</li>
								</ul>
							</span>
						</a>
					</div>
					<div className="back face"></div>
					<div className="top face"></div>
					<div className="bottom face"></div>
					<div className="left face"></div>
					<div className="right face"></div>
				</div>
			</div>
		)
	}
});

export default SingleTask;
