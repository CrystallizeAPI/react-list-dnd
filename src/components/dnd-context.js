import React from 'react';
import SelectionCmp from './selection';
import { DraggableList } from './list';

import {
  ContextWrapper, Card, UL, PlaceHolder
} from './styles';


export default class DnDContextComponent extends React.Component {
	
	constructor(props) {
    super(props);
  }
	
	render() {

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
        <h2>React Drag and Drop Demo</h2>
        <Card>
          <UL>
            {list.map((item, index) => (
              <DraggableList item={item} key={index} />
            ))}
          </UL>
        </Card>
        <SelectionCmp />
        <PlaceHolder />
      </ContextWrapper>
		);
	}
}
