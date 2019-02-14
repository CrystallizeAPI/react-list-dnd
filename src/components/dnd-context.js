import React from 'react';
import SelectionCmp from './selection';
import { DraggableList } from './list';

import {
  ContextWrapper, Card, UL
} from './styles';


export default class DnDContextComponent extends React.Component {
	
	constructor(props) {
    super(props);
		this.state = {
      open: null
    };
  }
	
	render() {
    const selection = [1];
    const isOver = false;

    const list = [
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

    return (
      <ContextWrapper>
        <h2>Beautiful React Drag and Drop</h2>
        <Card>
          <UL>
            {list.map((item, index) => (
              <DraggableList item={item} key={index} />
            ))}
          </UL>
        </Card>
        <SelectionCmp selection={selection} />
      </ContextWrapper>
		);
	}
}
