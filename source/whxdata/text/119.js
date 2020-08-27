rh._.exports({"0":["JSDoc Script Comments"],"1":["Code Editor - JSDoc Comments,JSDoc"],"2":["JSDoc,JSDoc Comments"],"3":["\n  ","\n  ","\n  ","If you wish your custom functions to have code completion and to show the required arguments etc... in the code editor, then you need to add some ","JSDoc style"," comments.\n    These comments are used to tell the autocomplete feature how the function should be used and filled out in the ","script editor",".","\n  ","The format for a typical function header would be to have the function name, the description of the function, and then the list of the different arguments (parameters) that the function takes, making sure to start each line with a triple backslash \"\n    ","///","\" as that tells GameMaker Studio 2 to parse the comment as being JSDoc style. The comments themselves need to be given an identifier (preceded by \"","@","\") and content, and the available\n    identifiers are as follows:","\n  "," ","\n  ","\n    ","\n      ","\n        ","Identifier","\n        ","Content","\n      ","\n      ","\n        ","@function"," / ","@func","\n        ","The full function name and arguments for the function, eg:","\n          ","my_func(x, y, colour)",".","\n      ","\n      ","\n        ","@description"," / ","@desc","\n        ","A general description of what the function does.","\n      ","\n      ","\n        ","@param"," / ","@arg"," / ","@argument","\n        ","The argument type (optional), enclosed in ","{}",", the argument name, and a short description (with space(s) in between)","\n      ","\n    ","\n  ","\n  "," ","\n  ","To get an idea of how this would work when writing your own functions, let's take this basic example:","\n  ","function is_same_object(_id, _obj)"," {\n    "," if _id.object_index == _obj","     {","     return true;","     }"," else return false;"," }\n  ","\n  ","All this script does is check to see if an instance has the same ","object_index"," as a given object and would be called simply as:","\n  ","if is_same_object(id, obj_Player)","     {","     instance_destroy()","     }","\n  ","However, writing that into the code editor wouldn't show you the arguments nor give you any help when using it, so we need to add in a description, a function name, and the arguments as JSDoc comments like this:","\n  ","/// @function            is_same_object(id, object)"," /// @description         Compare an instance object index with that of another."," /// @param {real} _id    The unique instance ID value of the instance to check."," /// @param {real} _obj\n      The object index to be checked against."," function is_same_object(_id, _obj)"," {\n    "," if _id.object_index == _obj","     {","     return true;","     }"," else return false;"," }\n  ","\n  ","Now, when calling this function in code anywhere, you will get auto-complete and argument help etc...","\n  ","\n  ","In the image above, the top part shows the function in the auto-complete and the bottom part shows how the argument helper at the bottom works. Note that both the optional \"type\" and the obligatory \"description\" parts of ","@param","    are not displayed by default in the IDE code complete, and to see them you must activate the options in the ","GML Preferences",".","\n  ","Since scripts can have multiple functions in them, you should get used to defining the function like this before each one in the script, like this:","\n  ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","The Script Editor","\n        ","Next: ","Code Snippets","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["JSDoc Script Comments"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"119"})