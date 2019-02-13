import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import {
  ContextWrapper, Card, UL, LI, SelectionContainer, SelectionCard, CollapsedView, DefaultView,
  ShowSelection, SelectionHeader, SelectedCircleButton
} from './styles';

class DnDContextComponent extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
      open: false,
      closeDrawer: false,
      spread: null
    };
	}
	
	render() {
    const selection = [1];
    const isOver = false;
    const { open, closeDrawer, spread } = this.state;

    const ExpandedDiv = data => (
      <ShowSelection>
        <SelectionHeader>
          <h4>Manage selections</h4>
          <p onClick={() => this.closeSelection()} > x </p>
        </SelectionHeader>
          <UL>
            <LI>1</LI>
          </UL>
      </ShowSelection>
    );

    const OnHoverDiv = (
      <CollapsedView isHover={true}>
        <DefaultView>
          <div>
            <p>Drop it like it's hot</p>
          </div>
        </DefaultView>
      </CollapsedView>
    );

    const CollapsedDiv = data => (
      <CollapsedView>
        <DefaultView>
          <div>
            <p>Drag an item over this section to select</p>
          </div>
          {data.length > 0 ? (
            <SelectedCircleButton
              onClick={() => this.openSelection()}
              spread={spread === true}
              contract={spread === false}
            >
              {data.length}
            </SelectedCircleButton>
          ) : (
            ''
          )}
        </DefaultView>
      </CollapsedView>
    );

    return (
			<ContextWrapper>
        <h2>Beautiful React Drag and Drop</h2>
        <Card>
            <UL>
              <LI>1</LI>
              <LI>1</LI>
              <LI>1</LI>
              <LI>1</LI>
              <LI>1</LI>
            </UL>
        </Card>

        <SelectionContainer>
          <SelectionCard>
            {
              isOver
              ? OnHoverDiv
              : open
              ? ExpandedDiv(selection)
              : CollapsedDiv(selection)
            }
          </SelectionCard>
        </SelectionContainer>

      </ContextWrapper>
		);
	}
}

export default DragDropContext(HTML5Backend)(DnDContextComponent);
