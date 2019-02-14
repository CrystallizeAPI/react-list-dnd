import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
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


class MainComponent extends React.Component {

  constructor(props) {
    super(props);
  }

	render() {
		return (
      <AppWrapper>
        <Header />
        <Body>
          <DnDContext />
        </Body>
        <Footer />
      </AppWrapper>
		);
	}
}

export default DragDropContext(HTML5Backend)(MainComponent);
