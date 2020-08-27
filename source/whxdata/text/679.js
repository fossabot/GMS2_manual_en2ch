rh._.exports({"0":["skeleton_get_bounds"],"1":["skeleton_get_bounds"],"2":["skeleton_get_bounds"],"3":["\n  ","\n  ","\n  ","This function will return an array of values associated with any given bounding box for the currently assigned skeleton animation sprite. You supply the index number for the bounding box to get the details of (you can retrieve the total number of bounding\n    boxes for the sprite using the function ","skeleton_get_num_bounds()",") and the function will return an array with the following elements:","\n  ","\n    ","[0] - the number of points on the bounding box (a real)","\n    ","[1] - the name of the bounding box (a string)","\n    ","[2] - the x position of the first point","\n    ","[3] - the y position of the first point","\n    ","[etc...] - further x/y position data up to the number of points on the bounding box","\n  ","\n  "," ","\n  ","\n  ","skeleton_get_bounds(index);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The bounding box index to get the values of.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Array (minimum 2 elements: numPoints, name [, xPos, yPos, etc...])","\n  "," ","\n  ","\n  "," ","\n  ","var num = skeleton_get_num_bounds();"," var yy = 60;"," for(var i = 0; i < num; i++;)","     {\n    ","     var b_info = skeleton_get_bounds(i);","     if b_info[0] > 0","         {\n    ","         var data = b_info[1] + \":\";","         for(var j = 0; j < b_info[0]; j++;)","             {\n    ","             data += \" (\" + string(b_info[(j * 2) + 2]) + \", \" + string(b_info[(j * 2) + 2 + 1]) + \")\";","             }\n    ","         draw_text(20, yy, data);","         yy += 20;","         }\n    ","     }\n  ","\n  ","The above code will loop through each of the bounding boxes associated with the currently assigned sprite and then draw that data as a string to the screen.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Drawing And Miscellaneous","\n        ","Next: ","skeleton_collision_draw_set","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["skeleton_get_bounds"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"679"})