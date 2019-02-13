import styled, { keyframes } from 'styled-components';
import is from 'styled-is';

const minimizedH = '200px';
const maximizedH = '300px';

export const colors = {
  defrost: '#f47f98',
  iceberg: '#B7E2E4',
  frost: '#f3f4f6',
  frostbite: '#4c505b',
  glacier: '#8fdecb',
  new: '#F79F79',
  handled: '#3496A0',
  dispatched: '#69A2B0',
  delivered: '#87B6A7',
  grey: '#ddd',
  lightgrey: '#FAFAFA',
  red: '#EF4836',
  green: '#0be881',
  error: '#EF4836',
  light: '#dfdfdf',
  lighttext: 'rgba(0,0,0,0.7)',
  roboto: "'Roboto', sans-serif",
  varela: "'Varela', sans-serif"
};

const circleAnimateDown = keyframes`
  0% { transform: scale(17.5); color: #FFF; }
  80% { color: #FFF; }
  100% { transform: scale(1.5); color: #4c505b; }
`;

const circleAnimateUp = keyframes`
  0% { transform: scale(0.5); color: #FFF; }
  100% { transform: scale(20.5); color: #FFF; }
`;

const slideUp = keyframes`
  0% { height: ${minimizedH}; background-color: white }
  50% { background-color: white }
  100% { height: ${maximizedH}; background-color: white }
`;

const slideDown = keyframes`
  0% { height: ${maximizedH}; color: ${colors.frost}; display: none; }
  100% { height: ${minimizedH}; color: ${colors.frost}; }
`;

const transitionToWhite = keyframes`
  0% { opacity: 0; background-color: ${colors.frost}; }
  100% { opacity: 1; background-color: white; }
`;

export const ContextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Card = styled.div`
  margin: 20px 0px;
  padding: 10px 50px;
  width: 400px;
  background-color: #c2e5e1;
`;

export const UL = styled.ul`
  flex: 1 1 auto;
  list-style-type: none;
  padding: 10px 0 0;
  margin: 0;
`;

export const LI = styled.li`
  // padding: 10px 5px;
  // margin: 5px 5px;
  // background-color: white;
  // box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const SelectionContainer = styled.div`
  margin-top: 20px;
`;

export const SelectionCard = styled.div`
  margin: 20px 0px;
  width: 400px;
  background-color: #c2e5e1;
`;

export const SelectedCircleButton = styled.div`
  align-items: center;
  justify-content: center;
  min-width: 0;
  background: #fff;
  color: #4c505b;
  padding: 8px 16px;
  text-align: left;
  text-decoration: none !important;
  font-size: 14px;
  transition: background-color 100ms;
  position: relative;
  font-weight: 600;
  border-radius: 40px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  display: -webkit-inline-box;
  transform: scale(1.5);
  cursor: pointer;
  z-index: 5;
`;

export const CollapsedView = styled.div`
  z-index: 1;
  height: ${minimizedH};
  display: grid;
  align-items: center;
  color: black;
  backgound-color: ${colors.frost};
  
  ${is('isHover')`
    animation: ${transitionToWhite} 0.7s forwards;
    animation-timing-function: cubic-bezier(0,1.28,.74,.7);
  `};

`;

export const DefaultView = styled.div`
  display: inline;
  z-index: 0;
  text-align: center;

  p {
    font-size: 20px;
  }
`;

export const ShowSelection = styled.div`
  text-align: left;
  margin: 10px 30px;
  overflow-y: scroll;
  overflow-x: hidden;

  div:first-child {

    p {
      display: inline;
      cursor: pointer;
      float: right;
      margin: 0;
      font-size: 16px;
    }
  }

  h4 {
    display: inline;
    padding: 10px 0px;
  }
`;

export const SelectionHeader = styled.div`
  padding: 20px 0px;
`;


export const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  margin: `10px 0 10px 0`,
  padding: isDragging ? '10px 0px 10px 30px' : '10px 30px',
  // width: isDragging ? cardWidth : cardWidth,
  opacity: isDragging ? '0.7' : '1',
  boxShadow: isDragging
    ? '0 4px 8px rgba(0,0,0,0.05)'
    : '0 0 0 rgba(0,0,0,0.0)',
  background: isDragging ? '#fff' : '#fff',
  ...draggableStyle
});
