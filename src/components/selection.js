import React from 'react';
import { DropTarget } from 'react-dnd';

import { SelectionContainer, SelectionCard, CollapsedView, DefaultView, SelectedCircleButton } from './styles';

const spec = {
  drop(props, monitor, component) {
    // Obtain the dragged item
    const item = monitor.getItem();
    if (item) component.updateComponent(item);
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
      open: null,
      selection: []
    };
  }

  contractCircle = () => this.setState({ open: false });

  updateComponent = (item) => {
    this.setState({ open: false, selection: this.state.selection.concat(item) });
  }

  render() {

    const { connectDropTarget, isOver } = this.props;
    const { open, selection } = this.state;

    const OnHoverDiv = (  
      <CollapsedView isOver={isOver}>
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
              isOver
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