import React from 'react';
import { Link } from 'react-router';
import SingleTask from './SingleTask';

// Import common JS
import scrollPlugin from 'scrollPlugin';

class CommercyList extends React.Component {
	componentDidMount() {
		scrollPlugin.attachEvents();
	}
	componentWillUnmount() {
		scrollPlugin.destroy();
	}
	render() {
		return (
			<div>
				<div id="wrapper">
					<div className="scene global-perspective" style={{perspective: 700, perspectiveOrigin: '50% 25%'}}>
						<main id="main">
							<div className="container">
								<h1>A couple of my commercial tasks</h1>
								<div className="row">
									{this.props.commercyTasks.map((task, i) => <SingleTask {...this.props} key={i} i={i} task={task} />)}
								</div>
							</div>
						</main>
					</div>
				</div>
			</div>
		)
	}
};

export default CommercyList;
