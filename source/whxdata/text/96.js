rh._.exports({"0":["Draw Events"],"1":["Objects - Draw Events"],"2":["draw event,draw begin,draw end,pre-draw,post draw,draw GUI,draw order"],"3":["\n  ","\n  ","\n  ","The Draw event category is the one that has all the events that governs what you see on the screen when you run your game. It is split into various\n    separate events to better handle the different drawing requirements for your game, and the image below illustrates the order in which each event is performed:","\n  ","The normal Draw event falls into three sub-types: The ","Draw Begin",", the standard ","Draw"," and the\n    ","Draw End"," events. In general, you will only need to use the standard Draw event and you should be aware that all instances in a room will have this event triggered each step of the game, so this event will always be called as long\n    as the instance has the ","visible ","flag set to true. It is important to understand that even if you have defined nothing for this sub-event in the object properties (ie: no code nor actions), ","if the object has a sprite assigned it will still have a draw event which will be triggered",".\n    This is because GameMaker Studio 2 has two ways to draw things in the Draw event:","\n  ","\n    ","the ","default draw",", which is when you define the sprite in the object properties and place no actions or code in the normal Draw event, and in this case GameMaker Studio 2 will draw the assigned sprite automatically. Note that any transforms\n      you perform in other events to change the image scale, index, blending etc... will be reflected too as long as the draw event is empty.","\n    ","the ","custom draw",", which is when you place code or actions in the draw event. This is telling GameMaker Studio 2 \" ","I want to control what you draw for instances of this object","\" and it completely overrides the default\n      drawing. This means that, for example, you can have an object with a sprite assigned, then set the draw event to draw text and the text will be drawn on-screen, but the sprite will ","not ","be drawn as you have not told GameMaker Studio 2 to\n      draw it along with the text.","\n  ","\n  ","The rest of the draw events are explained in the sections listed below:","\n  "," ","\n  ","Draw Begin And Draw End","Draw Begin And Draw End","\n  ","\n    ","Apart from the main Draw event, you also have a "," Draw Begin"," and a ","Draw End"," event too. These act exactly the same as a standard Draw event (ie: they will draw whatever you put in them every step of the game and for\n      all viewports), but they do not \"default draw\" anything if they have not been explicitly added to an object, and they will always run before/after the standard Draw event. So, when the game is running you will ","always"," have the\n      Draw Begin event for all instances, then the Draw event for all instances, then finally the Draw End event for all instances.","\n    ","In this way, you can draw things or set draw properties in the Draw Begin step in one instance and be sure that all instances with a standard Draw event or Draw End event will use these properties or draw over what the first instance has drawn. Basically\n      its a sure fire way to guarantee that certain things are drawn at certain times, much like the ","Begin Step"," and ","End Step ","events do.","\n    ","There are a few things to note when drawing things in GameMaker Studio 2, whether it's a sprite you are drawing or a shader, or a 3D buffer:","\n    ","\n      ","The draw event is a very intensive event, in that it's one of the events that takes up most time and resources... to that end it is never a good idea to do anything in the draw event other than drawing. So save your large code or complex actions\n        for the Step event or Alarms or whatever other event fits, but leave the draw event clear for the drawing as that's what it does best.","\n      ","If your object has had the visible parameter set to ","off ","(so that the instances of the object are not drawn) then ","all draw events are skipped ","(except for the ","Resize ","event). This means that making an instance\n        invisible will stop all code placed in any of these events from running, so don't put essential code in the draw events if they are not going to be visible.","\n      ","What you draw has nothing to do with the collision engine you choose (traditional or physics) as that is defined by the object properties and the sprite (or mask) that the object has been given.","\n    ","\n    "," ","\n  ","\n  ","Draw GUI","Draw GUI","\n  ","\n    ","The Draw GUI event type falls under the Draw Event category and is specifically designed for drawing ","GUI"," elements that are not affected by the view camera scale or rotation. This means that you\n      can have an instance draw all the elements for your ","HUD"," or user interface without having to base all the positioning of the elements on the the instance position within the room or the position\n      of the current camera view.","\n    ","When drawing in these event it is important that you understand that the draw coordinates do not change even when camera views are active and (0,0) is ","always ","the top left hand corner of either the application surface or the display (see the\n      note at the bottom of this section), and the default width and height are 1:1 with the application surface. Depth ordering is still maintained between different instances on different layers (so an instance on a higher layer will be drawn under\n      one at a lower layer) and also within the events themselves, as the ","Draw GUI Begin"," event will draw for all instances first, then the standard ","Draw GUI"," will draw for all instances over that, and finally the ","Draw Gui End ","event\n      is triggered.","\n    ","In this way, you can draw things or set draw properties in the Draw GUI Begin in one instance and be sure that all instances with a standard Draw GUI or Draw GUI End event will use these properties or draw over what the first instance has drawn. Basically\n      it's a sure fire way to guarantee that certain things are drawn at certain times, much like the ","Begin Step"," and ","End Step"," events do.","\n    ","These events can also be used in conjunction with the normal Draw events (which will be affected by the camera view position, scale and rotation as normal). If you have no Draw Event but you do have a Draw GUI Event, then GameMaker Studio 2 will still\n      default draw the sprite for the instance (if it has one) as normal.","\n    ","With relation to the other draw events, the Draw GUI events will always draw over anything drawn in the normal draw events. So, if you have an instance on a lower layer with a Draw GUI event, it will draw over the instance that is on a higher layer\n      with a regular draw event. If both instances have a Draw GUI event, then the layer order will be respected.","\n    ","NOTE",": This event will, by default, draw 1:1 with the application surface size, which is normally the size of the room or the view port. This means that when you have ","Aspect Ratio Correction"," on in the Game Options\n      the GUI is not going to be drawn over the black bars that \"letterbox\" the game. This behavior can be switched off using the "," ","display_set_gui_maximise()"," function,\n      and you can also lock the GUI event to a specific size which will then be scaled to fit the display or application surface dimensions automatically by using the function ","display_set_gui_size()",".","\n    "," ","\n  ","\n  ","Pre And Post Draw","Pre And Post Draw","\n  ","\n    ","The Pre Draw and Post Draw events are part of the Draw Event category. However, unlike the other Draw events these draw ","directly ","to the ","display buffer",", which will be the size\n      of the combined screen space for all viewports currently visible, ","or ","the window size if only using one viewport or none at all. The image below illustrates this:","\n    ","So, if you are using the Pre or Post draw events, you are drawing to the full screen render target (display buffer) which will have\n      the same size as the window to which all viewports are made to fit. If you have no viewports active, this is instead set to the size of the window itself.","\n    ","The Pre Draw event is triggered before any other draw event, and in it you can set values, set draw properties and even draw things without worrying about the viewports or the size of the GUI layer (the GUI layer size may be the same as the screen\n      buffer, but it may not be since you can set the GUI resolution in code).","\n    ","It is worth noting that this event happens ","before ","the display buffer is cleared for regular drawing meaning that if you do not switch off view clearing in the room editor then nothing that is drawn in the Pre Draw event will be seen, as the\n      first viewport draw will clear it. If you want to be able to see through the viewports themselves, or you are not using viewports at all, then you should also have set the background colour to have an alpha of 0 in the ","Room Editor",".","\n    ","NOTE",": If you switch off these options, you may notice unwanted artefacts being drawn on the screen when the game is tested (like \"trails\" from instances). This is because you are drawing directly over the previous frame\n      of the display buffer without it being cleared. However you can use ","draw_clear_alpha()"," ","to do this\n      yourself.","\n    ","The Post Draw event is triggered ","after ","all the standard draw events, but ","before ","the Draw GUI events. Like the Pre Draw event, it is based on the size of the display buffer, and is placed before the Draw GUI events to enable you to\n      perform post-processing effects and other things on a full screen basis simply and easily without interfering with any ","HUD","/ ","GUI"," elements\n      that you may have in your game.","\n    "," ","\n  ","\n  ","Window Resize","Window Resize","\n  ","\n    ","This event type falls under the Draw Event category, and although it doesn't actually draw anything, it does react to changes in the display buffer - specifically, it is designed for reacting to the change in the UWP display buffer size when the\n      game window is \"snapped\".","\n    ","On the UWP target platform it is important that you catch any resizing of the display buffer from the \"snapping\" of the game window (when the user drags the window to the side of the display, for example). This event will do just that and\n      is triggered every time the window is changed, permitting you to add custom code here that will resize the view or re-position ","HUD"," elements as necessary. This function is provided as a convenient\n      way to avoid having step event code that checks for these things all the time.","\n    ","NOTE",": You cannot draw in this event! It is triggered by resizing the window and is only for catching this change... any drawing that should be done still must be in one of the other draw events.","\n    "," ","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Object Events","\n        ","Next: ","Async Events","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["The Draw Events"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"96"})