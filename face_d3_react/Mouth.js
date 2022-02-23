import {arc} from 'd3';

export const Mouth = ({innerRadius, outerRadius})=>{
  const mouthArc = arc()
	.innerRadius(innerRadius)
	.outerRadius(outerRadius)
	.startAngle(Math.PI / 2)
	.endAngle(Math.PI* 3/2);
    
	return <path d={mouthArc()}></path>
};