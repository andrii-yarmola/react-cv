import React from 'react';
import { Link } from 'react-router';

const SingleTaskOptions = React.createClass({
	render() {
		const { opt, i } = this.props;
		return (
			<div>
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
			</div>
		)
	}
});

export default SingleTaskOptions;
