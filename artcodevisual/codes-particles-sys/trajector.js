//Trajectory  particles 
const Trajector = {

	startPos: (0,0),
	vecDir: (0,0),
	
	effects: {
	
		color: "white",
		effectProper: null,
	
		},
		
	applyEffect: function( func ) {
	
		return func;
		},
		
}

export { Trajector };
