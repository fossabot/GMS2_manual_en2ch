rh._.exports({"0":["Expressions And Operators"],"1":["Expressions And Operators,=,&&,||,^^,<,>,<=,>=,==,!=,|,&,^,<<,>>,+,-,*,/,++,--,div,%,mod,!,~"],"2":["expressions,order of operation,operators,div,mod,&&,||,xor,^^,|,^,&,++,--,<<,>>,<=,>=,==,=,:=,$"],"3":["\n  ","\n  ","\n  ","An expression is a mathematical phrase that can contain ordinary numbers, variables, strings, or functions as well as one or more ","operators ","(like add, subtract, multiply, etc...). The values used in an expression can be real numbers\n    (e.g. ","3.4 * 6","), hexadecimal numbers starting with a ","$"," sign (e.g. ","$00FFAA | $88FFAA","), strings between double quotes (e.g. ","\"hello\"","    + ","\"world\"",") or more complicated expressions using multiple operators and values.","\n  ","For expressions, the following operators exist (in order of priority):","\n  "," ","\n  ","Assigning (=)","Assigning (=)","\n  ","\n    ","="," - Used to assign a value to a variable. Note that this can ","also"," be used for comparing variables in GameMaker Studio 2 and you may see this in examples and other peoples codes. However, this is a legacy from old ","GameMaker"," versions\n      and you should use the ","=="," operators for comparing and ","="," for assigning, as shown in these examples:","\n    ","a = 12;"," speed = 5;"," val = (old_val + 5);","\n    "," ","\n  ","\n  ","Combining (&&, ||, ^^)","Combining (&&, ||, ^^)","\n  ","\n    ","&&, ||, ^^ (and, or and xor)"," - Combine Boolean values to give either true or false. If any of the following examples resolves to ","true"," then the code would be run:","\n    ","if (a == b && c == d) {do something...}  // and"," if (a == b || c ==d) {do something...}   // or"," if (a == b ^^ c == d) {do something...}  // xor","\n    "," ","\n  ","\n  ","Comparing (<, <=, ==, !=, >, >=)","Comparing (<, <=, ==, !=, >, >=)","\n  ","\n    ","<, <=, ==, !=, >, >="," - These are comparisons and can only give a ","true"," or ","false"," result (where true can also be interpreted as 1, and false as 0). Examples of use:","\n    ","if (a < b) {do something...}"," if (a != b) {do something...}","\n    "," ","\n  ","\n  ","Bitwise (|, &, ^, <<, >>)","Bitwise (|, &, ^, <<, >>)","\n  ","\n    ","|, &, ^, <<, >>",": You can perform bitwise operations with these, where | = bitwise or, & = bitwise and, ^ = bitwise xor, << = shift left, >> = shift right. Examples of use:","\n    ","x = (x & $ffffffe0) + 32;"," if (y ^ $1f) > 0 {do something...};","\n    ","You can find additional information on how to use the bitwise operators and what they do from the section: ","Bitwise Operators",".","\n    "," ","\n  ","\n  ","Arithmetical (+, -, *, /)","Arithmetical (+, -, *, /)","\n  ","\n    ","+, -, *, /"," - Add, subtract, multiply and divide. Examples of use:","\n    ","c = a * b;"," str = a + \"world\";","\n    "," ","\n  ","\n  ","Increment/Decrement (++, --)","Increment/Decrement (++, --)","\n  ","\n    ","++",", ","--"," : Add or subtract one from a value. It is worth noting that placing this before or after the value to be added to or subtracted from will have slightly different results. For example:","\n    ","\n      ","++a"," will increment the variable and return the incremented value.","\n      ","a++"," will increment the variable but return the value before it was incremented.","\n    ","\n    ","Therefore, if you have something like this:","\n    ","var a = 1;"," show_debug_message(string(a++));\n      "," show_debug_message(string(++a));\n    ","\n    ","The debug output would be 1 and 3. Here are some examples of use:","\n    ","for (var i = 0; i < 10; i++;)","     {","     do something...","     };","\n    ","if (hit == true)","     {","     --score;","     }","\n    ","NOTE",": On the YoYo Compiler target platforms (those marked (YYC)), these expressions are evaluated from left to right, while on all other target platforms they are evaluated from right to left, meaning that this:","\n    ","val = max(num, ++num, num++);","\n    ","will give different results depending on the platform.","\n    "," ","\n  ","\n  ","Division and Modulo (div, %, mod)","Division and Modulo (div, %, mod)","\n  ","\n    ","div, mod (%)"," - Division and modulo, where div gives you the amount a value can be divided into producing only an integer quotient, while mod gives you only the remainder of a division. Note that you can only div or mod using integer values.\n      Examples of use:","\n    ","secs = time mod 60;"," time_str = string(time div 60);","\n    "," ","\n  ","\n  ","Unary (!, -, ~)","Unary (!, -, ~)","\n  ","\n    ","Also, the following ","unary"," operators exist:","\n    ","\n      ","!"," : boolean \"not\", so ","!true == false","\n      ","-"," : negates the next real or integer value (not valid for strings or booleans)","\n      ","~"," : negates the next value bitwise","\n    ","\n    "," ","\n  ","\n  "," ","\n  ","As values in all expressions you can use numbers, variables, or functions that return a value, and sub-expressions can be placed between brackets too. All operators work for real number values, but ","comparisons ","also work for strings and\n    the \"","+","\" operator can be used to concatenate strings.","\n  ","When doing multiple operations in a single expression, it is ","very important"," that you use brackets ","()"," to separate out the order of operation, as different platforms may perform them differently if not explicitly stated\n    in this way. For example, consider the following code:","\n  ","a = b == c || d;","\n  ","The different target compilers will perform the operations in different orders since they are not explicitly shown, giving rise to \"odd\" results that you may not expect when you play your game. to avoid this, use the ","()","    to separate out the parts, like this:","\n  ","a = (b == c || d);   //better"," a = ((b == c) || d); //best","\n  ","Also note that when using various operations and expressions in a single code block, these too should be separated. For example, the following ","looks"," like valid code:","\n  ","if my_var == your_var ++their_var;","\n  ","However, the compiler could interpret this in one of two ways:","\n  ","if my_var == your_var++ then their_var;","\n    "," // or","\n    "," if my_var == your_var then ++their_var;","\n  ","Now, you can tell looking at the code that one of those is a bit stupid, but that's because we know what we are wanting to achieve and what we want to happen, but the compiler doesn't. All it sees is two variables with the ++ operator between\n    them so it has to choose which one to apply it to. Therefore, you should ","always explicitly bracket expressions, operations and statements",". The correct version of the above code should be:","\n  ","if (my_var == your_var)"," {\n    "," ++their_var;\n    "," }\n  ","\n  ","This may appear more verbose, but there is no ambiguity about the operations being performed and it will compile and behave consistently across all platforms. Also note that while you can chain expressions and statements without the use of brackets\n    at the moment, this is a legacy feature and going forward may be deprecated and removed from GML, so using brackets appropriately now will \"future-proof\" your code (and is generally good practice anyway).","\n  ","Here are some final examples of the various different expressions:","\n  ","{"," x = 23 div 2;"," colour = $FFAA00 + $00BB12;"," str = \"hello\" + \"world\";"," y += 5;"," x *= y;"," x = y << 2;"," x = 23 * ((2 + 4) / sin(y));"," b = (x < 5) && !((x == 2) || (x == 4));"," }\n  ","\n  ","One final thing to note is that there are also some expression \"short-cuts\" called ","accessors"," for use with certain ","Data Structures"," and ","Arrays",".\n    These enable you to add, or replace data within these formats quickly and easily and without the use of any function calls. For full details, please see the following page","\n  ","\n    ","Accessors","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","GML Overview","\n        ","Next: ","Accessors","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Expressions And Operators"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"488"})