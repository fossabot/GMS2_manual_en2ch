rh._.exports({"0":["ds_map_secure_save_buffer"],"1":["ds_map_secure_save_buffer"],"2":["ds_map_secure_save_buffer"],"3":["\n  ","\n  ","\n  ","This function will save a previously created DS map to a buffer. You supply the DS map ID value (as returned by the function ","ds_map_create()",") and the ID of the buffer to write to (as returned by the function\n    ","buffer_create()","). Note that if the DS map being saved contains an array, this will be converted into a DS list instead when saved.","\n  ","IMPORTANT!"," The secure saved DS map file can only be loaded on the device that created it, and if you try to load a file that was saved on a different device, then it will not work.","\n  "," ","\n  ","\n  ","ds_map_secure_save_buffer(filename);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","The DS map ID value.","\n      ","\n      ","\n        ","buffer","\n        ","The buffer ID value.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Integer (DS map index)","\n  "," ","\n  ","\n  ","buff = buffer_create(128,buffer_grow,4);"," var map = ds_map_create();"," ds_map_add(map,\"bob\",\"ajob\");\n    "," ds_map_add(map,\"money\",10);\n    "," ds_map_secure_save_buffer(map, buff);"," ds_map_destroy(map);\n  ","\n  ","The above code will create a buffer and a DS map, then populate the map with some values and write it to the buffer before deleting the map.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Maps","\n        ","Next: ","ds_map_secure_load","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["ds_map_secure_save_buffer"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1841"})