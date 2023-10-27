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
	"#FF8C00",  // Dark Orange
	"#FF4500", // Orange Red
	"#FF6347", // Tomato
	"#FF7F50", // Coral
	"#FFA07A", // Light Salmon
	"#FFDAB9", // Peach Puff
	"#F08080", // Light Coral
	"#CD5C5C", // Indian Red
	"#DC143C", // Crimson
	"#FF0000", // Red
	"#B22222", // Fire Brick
	"#8B0000", // Dark Red
	"#2E8B57", // Sea Green
	"#3CB371", // Medium Sea Green
	"#556B2F", // Dark Olive Green
	"#8FBC8F"  // Dark Sea Green
  ];

  

  function choseColorStartIndex(i){
	const modiefiedColors = [...colors].slice(i)

	return(modiefiedColors)
}


export {colors, choseColorStartIndex}