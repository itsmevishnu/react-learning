import React from 'react';
import ReactDOM from 'react-dom';
import { range } from 'd3';

import { Face } from './Face';

const width = 150;
const height = 150;
const array = range(100);

const App = () =>  array.map(()=>(
  	
			<Face 
        width = {width}
        height = {height}
        centerX = {width/2}
        centerY = {height/2}
        strokewidth = {2}
        eyeOffsetX = {20}
        eyeOffsetY = {10}
        eyeR = {5 + Math.random()*10}
        innerRadius = {40}
        outerRadius = {45}
        />
  ));
const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
