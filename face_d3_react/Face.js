import { FaceContainer } from './FaceContainer';
import { BackgroundCirlce } from './BackgroundCircle';
import { Eyes } from './Eyes';
import { Mouth } from './Mouth';

export const Face = ({
  width, 
  height, 
  centerX, 
  centerY, 
  eyeR, 
  strokewidth,
  innerRadius, 
  outerRadius, 
  eyeOffsetX, 
  eyeOffsetY}) => (
	<FaceContainer width = {width} height={height} centerX={centerX} centerY={centerY}>
      <BackgroundCirlce radius={centerY-strokewidth /2} strokewidth={strokewidth}/>
      <Eyes eyeR= {eyeR} eyeOffsetX={eyeOffsetX} eyeOffsetY = {eyeOffsetY}/>
      <Mouth innerRadius={innerRadius} outerRadius={outerRadius}/>
     </FaceContainer>
);