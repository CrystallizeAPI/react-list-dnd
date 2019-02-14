import React from 'react';
import { DragSource } from 'react-dnd';
import { LI } from './styles';

const draggableConfig = {
  spec: {
    beginDrag(props) {
      return { item: props.item }
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

export const DraggableList = DragSource(
  'item',
  draggableConfig.spec,
  draggableConfig.collect
)(function(props) {
  const { connectDragSource, connectDropTarget, hidden, item, key } = props;

  const drag = connectDragSource(
    <div><LI>{item.id}</LI></div>
  );

  if (connectDropTarget) {
    return connectDropTarget(drag);
  }

  return drag;
});
