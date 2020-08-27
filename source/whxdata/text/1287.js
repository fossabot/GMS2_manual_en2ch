rh._.exports({"0":["gpu_set_colorwriteenable"],"1":["gpu_set_colorwriteenable,gpu_set_colourwriteenable"],"2":["gpu_set_colorwriteenable,gpu_set_colourwriteenable"],"3":["\n  ","\n  ","\n  ","With this function you can switch on or off the colour channels and the alpha channel for all further drawing. For example, you can use this function to create alpha-channel only surfaces (switch off the RGB writing before using the surface), or to\n    create special effects while drawing to the screen. The default value for each of the components is ","true",", and can be supplied as either four unique arguments or as a 4 element 1D array with the following elements in it which will be either\n    ","true"," (enabled) or ","false"," (disabled):","\n  ","\n    ","[0] = Red channel enabled/disabled","\n    ","[1] = Green channel enabled/disabled","\n    ","[2] = Blue channel enabled/disabled","\n    ","[3] = Alpha channel enabled/disabled","\n  ","\n  "," ","\n  ","\n  ","gpu_set_colorwriteenable(red, green, blue, alpha);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","red","\n        ","Enable/disable the red channel","\n      ","\n      ","\n        ","green","\n        ","Enable/disable the green channel","\n      ","\n      ","\n        ","blue","\n        ","Enable/disable the blue channel","\n      ","\n      ","\n        ","alpha","\n        ","Enable/disable the alpha channel","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var cw = gpu_get_colorwriteenable();"," cw[3] = false;"," gpu_set_colorwriteenable(cw);\n  ","\n  ","The above code gets the current colour write values and then sets the alpha component to ","false",".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","GPU Control","\n        ","Next: ","gpu_set_alphatestenable","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["gpu_set_colourwriteenable"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1287"})