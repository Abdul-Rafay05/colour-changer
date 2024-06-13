let change_color_btn = document.getElementById("change_color_btn");
let color_name = document.querySelector(".color_name");
let Array_of_colours = ["AliceBlue", "aliceblue", "antiquewhite", "aqua", "aquamarin", "chartreuse", "chocolate", "coral",
    "cornflowerblue", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "cornsilk", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray",
    "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indianred", "ivory", "khaki", "khaki", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow"
];
let Random_Num;
change_color_btn.addEventListener('click', () => {
    Random_Num = Math.floor(Math.random() * 60);
    let Color = Array_of_colours[Random_Num];
    document.body.style.backgroundColor = Color
    change_color_btn.innerHTML = Color
    color_name.innerHTML = Color
})