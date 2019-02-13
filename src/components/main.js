import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';

import DnDContext from './dnd-context';

const AppWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #eaf6f5;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: 'Josefin Sans', sans-serif;
`;

export const Header = styled.div`
  flex: 0 0 30px;
  padding: 20px 0px;
`;

export const Body = styled.div`
  flex: 1 1 auto;
  padding: 20px 0px;
`;

export const Footer = styled.div`
  flex: 0 0 30px;
  padding: 20px 0px;
`;


export default class MainComponent extends React.Component {

  constructor(props) {
    super(props);
		this.state = { isDragging: false };
  }

  onDragStart = () =>  this.setState({ isDragging: true })
  onDragEnd = () => this.setState({ isDragging: false })
	
	render() {

		return (
      <AppWrapper>
        <Header />
        <Body>
          <DragDropContext
            onDragStart={this.onDragStart}
            onDragEnd={this.onDragEnd}
          >
            <DnDContext isDragging={this.state.isDragging} />
          </DragDropContext>
        </Body>
        <Footer />
      </AppWrapper>
		);
	}
}
