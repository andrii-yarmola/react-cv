import React from 'react';
import { Link } from 'react-router';

const SingleTaskOptions = React.createClass({
	render() {
		const { opt, i } = this.props;
		const optionCompliance = {
			'html-five' : 'HTML5/CSS3',
			'responsive' : 'Responsive Look',
			'retina' : 'Retina support',
			'css3' : 'CSS animation',
			'jquery' : 'jQuery plugins',
			'custom-js' : 'Custom JS',
			'bootstrap' : 'Twitter Bootstrap',
			'wordpress' : 'WordPress',
			'print' : 'Print version',
			'microformat' : 'Microformats'
		}
		return (
			<li>
				<i className={`icon-${opt}`} aria-hidden="true"></i>
				{optionCompliance[opt] ? optionCompliance[opt] : "UNKNOWN OPTION"}
			</li>
		)
	}
});

export default SingleTaskOptions;

