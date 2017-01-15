import React from 'react';

// Import common JS
import scrollPlugin from 'scrollPlugin';

class ReactTaskPreview extends React.Component {
	componentDidMount() {
		scrollPlugin.attachEvents();
	}
	componentWillUnmount() {
		scrollPlugin.destroy();
	}
	render() {
		const { taskId } = this.props.params;
		const i = this.props.reactTasks.findIndex((task) => task.id === taskId);
		const task = this.props.reactTasks[i];
		return (
			<div>
				<div id="wrapper">
					<div className="scene global-perspective" style={{perspective: 700, perspectiveOrigin: '50% 25%'}}>
						<main id="main">
							<div className="container">
								<h1> {task.title}</h1>
								<div className="single-task-holder">
									<div className="front face">
										<div className="single-task">
											<div className="img-holder">
												<img src={`../static/${task.image_url}`} alt="image description"/>
											</div>
											<div className="text-holder">
												<p>
													Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ea earum nihil quaerat recusandae tempora aliquam numquam, commodi nesciunt quidem accusamus, voluptatum fugit laborum debitis id ut eveniet doloribus vero?
												</p>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad accusamus sit sunt rem voluptates, a itaque earum impedit placeat! Dolore sed commodi, consequatur debitis est totam a autem iste eligendi.
												</p>
												<p>
													<a href="#" className="link">Demo</a>
												</p>
												<p>
													<a href={task.codelink} className="link" target="_blank">Source Code</a>
												</p>
											</div>
										</div>
									</div>
									<div className="back face"></div>
									<div className="top face"></div>
									<div className="bottom face"></div>
									<div className="left face"></div>
									<div className="right face"></div>
								</div>
							</div>
						</main>
						<iframe className="demoframe" src={`../reactTasks/${task.id}/index.html`}></iframe>
					</div>
				</div>
			</div>
		)
	}
};

export default ReactTaskPreview;

