export const Eyes = ({eyeR,eyeOffsetX,eyeOffsetY }) =>(
  <>
		<circle
                r={eyeR}
                fill="white"
                stroke = "black"
                stroke-width = "10"
                cx={-eyeOffsetX}
                cy={-eyeOffsetY}
                ></circle>
      <circle
                r={eyeR}
                fill="white"
                stroke = "black"
                stroke-width = "10"
                cx={eyeOffsetX}
                cy={-eyeOffsetY}
                ></circle>
    </>
  );