import React from 'react';
import { Link } from 'react-router';
import SingleTaskOptions from './SingleTaskOptions';

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
									{task.options_list.map((opt, i) => <SingleTaskOptions {...this.props} key={i} i={i} opt={opt} />)}
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
