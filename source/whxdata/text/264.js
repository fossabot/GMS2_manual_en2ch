rh._.exports({"0":["If Gamepad Button Released"],"1":["DnD™ Action - If Gamepad Button Released"],"2":["If Gamepad Button Released"],"3":["\n  ","\n  ","\n  ","This action checks for when a gamepad button has been released for the given gamepad index. It will return ","true"," on the single game tick that the button is released on and ","false"," at all other times. If you enable the ","not"," modifier,\n    this action will be reversed, and check if the button has ","not"," been released, returning ","false"," on the game tick that it has been released on and ","true"," at all other times.","\n  ","If the button being checked is an analogue button, then the release will not be detected until the button value has gone below the threshold set using the action ","Set Gamepad Button Threshold",".","\n  ","Note that to add actions into the \"if\" block, they should be dropped to the side of the action, as shown in the image below:","\n  ","These actions will now be run if the \"if\" evaluates to\n    ","true",", while any actions dropped elsewhere will be performed after the \"if\" block.","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Gamepad","\n        ","The gamepad index.","\n      ","\n      ","\n        ","Button","\n        ","The name of the button to check.","\n      ","\n      ","\n        ","Not","\n        ","Negate the check (true becomes false and vice versa)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code polls the button state of gamepad 0 every step and\n    if a button is being held down it checks for the initial button down press. If the check is ","true"," on the initial down press, a sound is played, then, while the button is held down, the instance speed is set to 10. If the button is not being\n    held down, a check is done on the button release to reset the speed to 0 again.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Gamepad Actions","\n        ","Next: ","Gamepad Get Axis","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" If Gamepad Button Released"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"264"})