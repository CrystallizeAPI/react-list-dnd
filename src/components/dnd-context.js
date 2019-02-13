import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import {
  ContextWrapper, Card, UL, LI, SelectionContainer, SelectionCard, CollapsedView, DefaultView,
  ShowSelection, SelectionHeader, SelectedCircleButton, getItemStyle
} from './styles';

export default class DnDContextComponent extends React.Component {
	
	constructor(props) {
    console.log(props);
    super(props);
		this.state = {
      open: null
    };
  }
	
	render() {
    const selection = [1];
    const isOver = false;
    const { open } = this.state;

    const data = [
      {
        id: 1,
        key: 1,
        value: 1
      },
      {
        id: 2,
        key: 2,
        value: 2
      },
      {
        id: 3,
        key: 3,
        value: 3
      }
    ];

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
              spread={open === true}
              contract={open === false}
            >
              {data.length}
            </SelectedCircleButton>
          ) : (
            ''
          )}
        </DefaultView>
      </CollapsedView>
    );

    const DraggableDiv = (item, index) => 
      <Draggable
        key={item.id}
        draggableId={item.id}
        index={index}
      >
        {(provided, snapshot) => (
          <LI>
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={
                getItemStyle(
                  snapshot.isDragging,
                  provided.draggableProps.style
                )
              }
            >
            {item.id}
            </div>
          </LI>
        )}
      </Draggable>

    return (

        <ContextWrapper>
          <h2>Beautiful React Drag and Drop</h2>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
              >
              {provided.placeholder}
              <Card>
                <UL>
                {
                  data.map((item, index) => (
                    DraggableDiv(item, index)
                ))}
                </UL>
              </Card>
              </div>
            )}
          </Droppable>

          <Droppable droppableId="droppable2">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
              >
                {provided.placeholder}
                <SelectionContainer>
                <SelectionCard>
                  {
                    snapshot.isDraggingOver
                    ? OnHoverDiv
                    : CollapsedDiv(selection)
                  }
                </SelectionCard>
                </SelectionContainer>
              </div>
            )}
            </Droppable>
        </ContextWrapper>
		);
	}
}

