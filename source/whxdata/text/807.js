rh._.exports({"0":["path_assign"],"1":["path_assign"],"2":["path_assign"],"3":["\n  ","\n  ","\n  ","With this function you can copy the path data from one path to another. The path being copied ","to"," will be cleared first (should it have any path points) and be ","completely overwritten"," by the path being\n    copied from. Neither path is deleted in the process and the result is two paths, with two different indexes, but the exact same form and points. In general you would want to use this function on a path created using ","path_add()",",\n    since if you use it on a path asset, ","it will permanently affect the path for all instances in the game"," from the moment the function is used until the end of the game.","\n  "," ","\n  ","\n  ","path_assign(index, path);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The index of the path to be overwritten.","\n      ","\n      ","\n        ","path","\n        ","The index of the path that will overwrite 'index'.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","mypath = path_add();"," path_assign(mypath, choose(path_1, path_2, path_3));","\n  ","The above code will create a new, empty path indexed in the variable \"mypath\" and then copy over the path data from one of the three available path resources.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Path Manipulation","\n        ","Next: ","path_delete","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["path_assign"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"807"})