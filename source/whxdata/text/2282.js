rh._.exports({"0":["steam_get_user_persona_name"],"1":["steam_get_user_persona_name"],"2":["steam_get_user_persona_name"],"3":["\n  ","\n  ","\n  ","This function can be used to retrieve the user name (screen name) for any specific user ID. You give the user ID then the function returns a unique async ID value which can be used to check the details correctly in the ","Steam Async event",".\n    This event will have the ","async_load"," DS map which will be populated with the following key/value pairs:","\n  ","\n    ","\"","id","\" - The async ID returned by the function that triggered the event","\n    ","\"","event_type","\" - The string \"","user_persona_name","\"","\n    ","\"","steamid\"","\" - The Steam ID value used to get the user name.","\n    ","\"","persona_name","\" - The user name for the given Steam ID","\n  ","\n  "," ","\n  ","\n  ","steam_get_user_persona_name(steamID);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","steamID","\n        ","The unique Steam ID for a user.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","request = steam_get_user_persona_name(global.UGC_UserID);","\n  ","The above code will request the user name of the user ID stored in the global variable \"UGC_UserID\", storing the returned value in a variable for parsing in the Async Event.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","General Steam API","\n        ","Next: ","steam_is_user_logged_on","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["steam_get_user_persona_name"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2282"})