import React from 'react';
import { DragSource } from 'react-dnd';
import { LI } from './styles';

const draggableConfig = {
  spec: {
    beginDrag(props) {
      console.log(props);
    },
    endDrag(props, monitor, component) {
      console.log({props, monitor, component});
    }
  },
  collect: function collectDrag(connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging()
    };
  }
};

const droppableConfig = {
  spec: {
    drop(props, monitor, component) {
      console.log('drop props', props);

      return {
        itemDrop: {
          ...props
        }
      };
    }
  },
  collect(connect, monitor) {
    return {
      connectDropTarget: connect.dropTarget()
    };
  }
};

export const DraggableList = DragSource(
  'item',
  draggableConfig.spec,
  draggableConfig.collect
)(function(props) {
  const { connectDragSource, connectDropTarget, hidden, item, key } = props;

  // Don't display item if it is hiddden
  if (hidden) {
    return null;
  }

  const drag = connectDragSource(
    <div><LI>{item.id}</LI></div>
  );

  if (connectDropTarget) {
    return connectDropTarget(drag);
  }

  return drag;
});
