const colors = [
	"#FF69B4", // Hot Pink
	"#FF00FF", // Magenta
	"#FF1493", // Deep Pink
	"#8A2BE2", // Blue Violet
	"#9932CC", // Dark Orchid
	"#9400D3", // Dark Violet
	"#8B008B", // Dark Magenta
	"#800080", // Purple
	"#4B0082", // Indigo
	"#6A5ACD", // Slate Blue
	"#483D8B", // Dark Slate Blue
	"#7B68EE", // Medium Slate Blue
	"#4169E1", // Royal Blue
	"#0000FF", // Blue
	"#1E90FF", // Dodger Blue
	"#00BFFF", // Deep Sky Blue
	"#87CEEB", // Sky Blue
	"#00CED1", // Dark Turquoise
	"#20B2AA", // Light Sea Green
	"#008B8B", // Dark Cyan
	"#008080", // Teal
	"#00FA9A", // Medium Spring Green
	"#ADFF2F", // Green Yellow
	"#32CD32", // Lime Green
	"#00FF00", // Green
	"#7FFF00", // Chartreuse
	"#FFFF00", // Yellow
	"#FFD700", // Gold
	"#FFA500", // Orange
	"#FF8C00"  // Dark Orange
  ];

  

  function choseColorStartIndex(i){
	const modiefiedColors = [...colors].slice(i)

	return(modiefiedColors)
}


export {colors, choseColorStartIndex}