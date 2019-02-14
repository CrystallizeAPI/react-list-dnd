import React from 'react';
import { DropTarget } from 'react-dnd';

import { SelectionContainer, SelectionCard, CollapsedView, DefaultView, SelectedCircleButton } from './styles';

const spec = {
  drop(props, monitor, component) {
    // Obtain the dragged item
    const item = monitor.getItem();
    console.log(item);
  }
};  

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  };
}

class SelectionCmp extends React.Component {

  constructor(props) {
    console.log(props);
    super(props);
		this.state = {
      open: null
    };
  }


  render() {

    const { isDraggingOver, selection, connectDropTarget } = this.props;
    console.log({isDraggingOver, selection});

    const OnHoverDiv = (  
      <CollapsedView>
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

    return connectDropTarget(
      <div>
        <SelectionContainer>
          <SelectionCard>
            {
              isDraggingOver
              ? OnHoverDiv
              : CollapsedDiv(selection)
            }
          </SelectionCard>
        </SelectionContainer>
      </div>
    );
  }


}

export default DropTarget('item', spec, collect)(SelectionCmp);