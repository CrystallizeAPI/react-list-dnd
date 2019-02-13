import React from 'react';

import styled from 'styled-components';

export const AppWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`;


export default class MainComponent extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = { counter: 0 };
	}
	
	render() {

		const incCounter = () => { this.setState({ counter: this.state.counter + 1 }) }
		const {counter} = this.state;
		return (
			<AppWrapper>
				<h2>Counter Number 1</h2><br /> 
				{counter}
				<button onClick={() => incCounter()}>Increment</button>
			</AppWrapper>
		);
	}
}
