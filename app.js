// //  chapter # 1
// //  task 1
// //  1.Write a script to display following message on your web page:

//     alert("Error! Please enter a valid password")

// //   task 2
// //   2.   Write a script to display following message on your web page: (Hint : Use line break)

//  alert("Wellcome to JS Land..." + "\n" + "Happy Coding!")


// //  task 3
// //  3. Write a script to display following messages in sequence:

// alert("Wellcome to JS Land...")
// alert("Happy Coding!")

// //  task 4
// //  4. Generate the following message through browser’s developer console:

// var a = ("Hello...I can run JS through my web browser's console")
// alert(a)
// console.log(a)

// //  chapter # 1 end






// //  chapter # 2
// //  task 1
// //   1. Declare a variable called username.
// //   2. Declare a variable called myName & assign to it a string that represents your Full Name.

//  var  username = prompt("First name");
//  var myName = prompt("Last name");
//  alert(username+myName)

// //   task 2
// //   3. Write script to
// //   a) Declare a JS variable, titled message.
// //   b) Assign “Hello World” to variable message
// //   c) Display the message in alert box.

//  var message = "Hello World"
//  alert(message)

// //   task 3 
// //   4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.

//  var name = prompt("Name");
//  var age = prompt("Age");
//  var course = prompt("Course");
//  alert(name)
//  alert(age + " " + "years old")
//  alert(course)

// //   task 4
// //   5. Write a script to display the following alert using one JS variable:

//  var a = "PIZZA" + '\n' + "PIZZ" + '\n' + "PIZ" + '\n' + "PI" + '\n' + "P";
//  document.write(a)

// //   task 5
// //   6. Declare a variable called email and assign to it a string that represents 
// //   your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.
// //   (Hint: use string concatenation)

//  var a = prompt("Email")
//  alert("My email address is"+ " " + a)

// //   task 6
// //   Declare a variable called book & give it the value “A smarter way to learn JavaScript”. 
// //   Display the following message in an alert box:

//  var book =  "A Smarter Way to learn JavaScript";
//  alert("I am trying to learn from the book" + " " + book)

// //   task 7 
// //   8. Write a script to display this in browser through JS

//  var a = "Yah! I can write HTML content through JavaScript"
//  document.write(a)

// //   task 8
// //   9. Store following string in a variable and show in alert and browser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”

//  var a = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
//  alert(a)

// //   chapter # 2 end






// //   chapter # 3
// //   task 1
// //   1. Declare a variable called age & assign to it your age. Show your age in an alert box.

//  var a = prompt("age")
//  alert("I am" + " " + a + " " + "years old")

// //   task 2
// //   2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. 
// //   Show his/her number of visits on your web page. For example: “You have visited this site N times”.

//  var a = prompt("how many times you visited this site??");
//  var b = "You have visited this site" + " " + a + " " + "times"
//  alert(b)

// //   task 3
// //   3. Declare a variable called birthYear & assign to it your birth year.
// //    Show the following message in your browser:

//  var a = prompt("Birth year")
//  document.write("My birth year is" + " " + a + "<br>")
//  if (a > 0){
//      document.write("Date type of my declared variable is number")
//  }
//  else{
//      document.write("Date type of my declared variable is Alphabet")
//  }

// //   task 4
// //   4. A visitor visits an online clothing store www.xyzClothing.com .

//  var a = prompt("Your name");
//  var b = prompt("Product title"); 
//  var c = prompt("Quantity" + " " , "how many products you wants to order"); 
//  document.write(a + " " + "ordered" + " " + c + " " + b + " " + "on XYZ clothing store")

// //   chapter # 3 end





// //   chapter # 4
// //   task 1
// //   1. Declare 3 variables in one statement.
// //   2. Declare 5 legal & 5 illegal variable names.
// //   3. Display this in your browser

//  var a = 'Rules for naming JS variables' + '<br>';
//  var b = 'Variable names can only contain ,letters, numbers, dollar signs, and underscores.For example $my_1stVariable' + '<br>';
//  var c = 'Variables must begin with a letter , dolor sign or minus sign. For example $name, _name or name' + '<br>';
//  var d = 'Variables names are case sensitive' + '<br>';
//  var e = 'Variables names should not not be JS keywords'
//  var f = (a+b+c+d+e);
//  document.write(f)

// //   chapter # 4 end





// //   chapter # 5
// //   task 1
// //   1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

//  var a = +prompt("your first value");
//  var b = +prompt("your secound value");
//  document.write("Sum of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + (a+b))

// //   task 2
// //   2. Repeat task1 for subtraction, multiplication, division & modulus.

//  var val1 = +prompt('your first value');
//  var sign = prompt('Your operator');
//  var val2 = +prompt('your secound value');
//  if(sign === '+'){
//  document.write("Sum of" + " " + val1 + " " + "and" + " " + val2 + " " + "is" + " " + (val1+val2))
//  }
//  else if(sign === '-'){
//  document.write("Subtraction of" + " " + val1 + " " + "and" + " " + val2 + " " + "is" + " " + (val1-val2))
//  }
//  else if(sign === '*'){
//  document.write("Multiplication of" + " " + val1 + " " + "and" + " " + val2 + " " + "is" + " " + (val1*val2))
//  }
//  else if(sign === '/'){
//  document.write("Division of" + " " + val1 + " " + "and" + " " + val2 + " " + "is" + " " + (val1/val2))
//  }
//  else if(sign === '%'){
//  document.write("Percentage of" + " " + val1 + " " + "and" + " " + val2 + " " + "is" + " " + (val1/val2*100+'%'))
//  }

// //   task 3
// //   3. Do the following using JS Mathematic Expressions


//  var a = prompt("Enter your initial value");
//  var b = ("Value after variable declaration is:" + " " + undefined + "<br>");
//  var c = ("Initial value:" + " " + a) + "<br>";
//  var d = ++a + "<br>";
//  var e = ("Value after increment is:" + d + "<br>");
//  var f = a+7 + "<br>";
//  var g = ("Value after addition is:" + f + "<br>");
//  var h =  (a+6);
//  var i = h + "<br>";
//  var j = ("Value after decrement is:"+ i + "<br>");
//  var k = h/3 + "<br>";
//  var l = ("The remainder is:" + k);
//  document.write(b+c+e+g+j+l)


// //   task 4
// //   4. Cost of one movie ticket is 600 PKR. Write a script to store

//  var tickets = prompt("How many Tickets you buy");
//  var print = "Total cost to buy " + tickets + " tickets to a movie is " + 600*tickets + "PKR";
//  document.write(print)

// //   task 5
// //   5. Write a script to display multiplication table of any number in your browser. E.g

//  var table = prompt("Which table you can find")
//  var table1 = 'Table of ' + table;
//  var tablex1 = table + ' x ' + ' 1 ' + ' = ' + table*1 + "<br>";
//  var tablex2 = table + ' x ' + ' 2 ' + ' = ' + table*2 + "<br>";
//  var tablex3 = table + ' x ' + ' 3 ' + ' = ' + table*3 + "<br>";
//  var tablex4 = table + ' x ' + ' 4 ' + ' = ' + table*4 + "<br>";
//  var tablex5 = table + ' x ' + ' 5 ' + ' = ' + table*5 + "<br>";
//  var tablex6 = table + ' x ' + ' 6 ' + ' = ' + table*6 + "<br>";
//  var tablex7 = table + ' x ' + ' 7 ' + ' = ' + table*7 + "<br>";
//  var tablex8 = table + ' x ' + ' 8 ' + ' = ' + table*8 + "<br>";
//  var tablex9 = table + ' x ' + ' 9 ' + ' = ' + table*9 + "<br>";
//  var tablex10 = table + ' x ' + ' 10 ' + ' = ' + table*10;
//  var plus = tablex1+tablex2+tablex3+tablex4+tablex5+tablex6+tablex7+tablex8+tablex9+tablex10; 
//  document.write(plus)


// //   task 6
// //   6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.

//  var a = prompt("Enter temprature to convert")
//  var b = (a-32) * 5 / 9;
//  var c = (a * 9 / 5) + 32;
//  var d = a + 'oC is ' + c + "oF" + '<br>';
//  var e = a + 'oF is ' + b + "oC";
//  document.write(d+e)


// //   task 5
// //   7. Write a program to implement checkout process of a shopping cart system for an e-commerce website.

// var a = prompt("Quantity item 1?")
// var b = prompt("Quantity item 2?")
// var c = "Price of item 1 is " + 650 + "<br>";
// var d = "Quantity of item 1 is " + a + "<br>";
// var e = "Price of item 2 is " + 100 + "<br>";
// var f = "Quantity of item 2 is " + b + "<br>";
// var g = "Shipping charges 150" + "<br>" + "<br>";
// var h = "Total cost of your order is " + 150*a+a+20*b+b+150;
// document.write(c+d+e+f+g+h)

// // task 6
// // 8.Store total marks & marks obtained by a student in 2 variables

// var totalMarks = prompt("Total marks")
// var marksobtained = prompt("Marks obtained")
// var a = "Marks Sheet" + "<br>";
// var b = "<br>" + "Total marks: " + totalMarks + "<br>";
// var c = "Total marks: " + marksobtained + "<br>";
// var d = "Percentage: " + marksobtained/totalMarks*100 + "%";
// var e = (a+b+c+d);
// document.write(e)

// // task 7
// // 9.Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.


// var a = prompt("How much Convert??");
// var b = prompt("Dollar or Riyal?")
// var c = "Currency in PKR" + "<br>";
// var d = a*104.80;
// var e = a*28;
// if (b === "Dollar"){
//     document.write(c + "<br>" +  "Total Currency in PKR: " + d)
// }
// else if (b === "Riyal"){
//     document.write(c + "<br>" + "Total Currency in PKR: " + e)
// }
// else {
//    alert("Exchange is not available")
// }


// // task 8
// // 11. The Age Calculator: Forgot how old someone is? Calculate it!

// var curYear = prompt("Current year??");
// var brtYear = prompt("Your Birth year??");
// var a = "Age Calculator" + "<br>";
// var b = "<br>" + "Current Year: " + curYear + "<br>";
// var c = "Birth Year: " + brtYear + "<br>";
// var d = "Your Age is: " + (curYear-brtYear);
// var e = (a+b+c+d)
// document.write(e)

// // task 9
// // 12. The Geometrizer: Calculate properties of a circle.

// var radius = prompt("Enter a radius");
// var a = "The Geometrizer" + "<br>";
// var b = "<br>" + "Radius of a circle: " + radius + "<br>";
// var circumFerence = (2*3.142*radius);
// var c = "The circumference is: " + circumFerence + "<br>";
// var arEa = (3.142*radius*radius)
// var d = "The area is: " + arEa;
// var e = (a+b+c+d);
// document.write(e);


// // task 10
// // 13. The Lifetime Supply Calculator:


// var favSnack = prompt("Favourite snake?");
// var curAge = prompt("Your current age?");
// var maxAge = prompt("Estimated Maximum age?");
// var amount = prompt("Amount of snacks per day you ate?");

// var a = "The Lifetime Supply Calculator" + "<br>";
// var b = "<br>" + "Favourite snake: "+ favSnack + "<br>";
// var c = "Current age: "+ curAge + "<br>";
// var d = "Estimated Maximum Age: " + maxAge + "<br>";
// var e = "Amount of snacks per day: " + amount + "<br>";
// var f = (maxAge-curAge);
// var g = "<br>" + "You will need " + " " + f*amount + " " +  favSnack + " to last until the ripe old age of " + maxAge; 
// var h = (a+b+c+d+e+g);
// document.write(h)


// // chapter # 5 end










// // chapter # 6-9
// // task 1


// var a = prompt("Enter value of a");
// var b = "Result: " + "<br>";
// var c = "The value of a is: " + a + "<br>";
// var d = "............................................."
// var postInc = ++a;
// var e = "<br>" + "The value of ++a is: " + postInc + "<br>";
// var f = "Now the value of a is: " + postInc + "<br>";
// var preInc =  postInc++;
// var g = "<br>" + "The value of a++ is: " + preInc + "<br>";
// var h = "Now the value of a is: " + postInc + "<br>";
// var postDec = --postInc;
// var i = "<br>" + "The value of --a is: " + postDec + "<br>";
// var j = "Now the value of a is: " + postDec + "<br>";
// var preDec = postDec--;
// var k = "<br>" + "The value of a-- is: " + preDec + "<br>";
// var l = "Now the value of a is: " + postDec + "<br>";
// var m = (b+c+d+e+f+g+h+i+j+k+l);
// document.write(m)


// // task 2
// // 2. What will be the output in variables a, b & result after execution of the following script:


// var a = prompt("Enter value of a");
// var b = prompt("Enter value of b");
// var result = --a - --b + ++b + b--;
// var vala = "a is " + (1+a) + "<br>";
// var valb = "b is " + (1+b)+ "<br>";
// var result = "result is " + result + "<br>"; 
// var code= "The code is " + "<br>" + "--a;" + "<br>" + "--a - --b;" + "<br>" + "--a - --b + ++b;" + "<br>" + "--a - --b + ++b + b--;";
// var c = (vala + valb + result + code);
// document.write(c)  

// // task 3
// // 3. Write a program that takes input a name from user & greet the user.


// var userName = prompt("Enter your name?");
// var a = "Assalam-o-alaikum " + userName;
// document.write(a)

// // task 4 
// // 5. Write a program to take input a number from user & display it’s multiplication table on your browser.



// var table = prompt("Which table you can find")
// var table1 = 'Table of ' + table;
// var tablex1 = table + ' x ' + ' 1 ' + ' = ' + table*1 + "<br>";
// var tablex2 = table + ' x ' + ' 2 ' + ' = ' + table*2 + "<br>";
// var tablex3 = table + ' x ' + ' 3 ' + ' = ' + table*3 + "<br>";
// var tablex4 = table + ' x ' + ' 4 ' + ' = ' + table*4 + "<br>";
// var tablex5 = table + ' x ' + ' 5 ' + ' = ' + table*5 + "<br>";
// var tablex6 = table + ' x ' + ' 6 ' + ' = ' + table*6 + "<br>";
// var tablex7 = table + ' x ' + ' 7 ' + ' = ' + table*7 + "<br>";
// var tablex8 = table + ' x ' + ' 8 ' + ' = ' + table*8 + "<br>";
// var tablex9 = table + ' x ' + ' 9 ' + ' = ' + table*9 + "<br>";
// var tablex10 = table + ' x ' + ' 10 ' + ' = ' + table*10;
// var plus = tablex1+tablex2+tablex3+tablex4+tablex5+tablex6+tablex7+tablex8+tablex9+tablex10; 

// var table1 = 'Table of ' + table;
// var tabley1 = "5" + ' x ' + ' 1 ' + ' = ' + 5*1 + "<br>";
// var tabley2 = "5" + ' x ' + ' 2 ' + ' = ' + 5*2 + "<br>";
// var tabley3 = "5" + ' x ' + ' 3 ' + ' = ' + 5*3 + "<br>";
// var tabley4 = "5" + ' x ' + ' 4 ' + ' = ' + 5*4 + "<br>";
// var tabley5 = "5" + ' x ' + ' 5 ' + ' = ' + 5*5 + "<br>";
// var tabley6 = "5" + ' x ' + ' 6 ' + ' = ' + 5*6 + "<br>";
// var tabley7 = "5" + ' x ' + ' 7 ' + ' = ' + 5*7 + "<br>";
// var tabley8 = "5" + ' x ' + ' 8 ' + ' = ' + 5*8 + "<br>";
// var tabley9 = "5" + ' x ' + ' 9 ' + ' = ' + 5*9 + "<br>";
// var tabley10 = "5" + ' x ' + ' 10 ' + ' = ' + 5*10;
// var plus2 = tabley1+tabley2+tabley3+tabley4+tabley5+tabley6+tabley7+tabley8+tabley9+tabley10;

// if (table === ""){
//     document.write(plus2)
// }
// else {
//     document.write(plus)
// }


// // task 5
// // 6. Takea) Take three subjects name from user and store them in 3 different variables.


// var sub1 = prompt("Enter first subject");
// var sub2 = prompt("Enter second subject");
// var sub3 = prompt("Enter third subject");
// var obtMarks1 = +prompt("Obtained marks in first subject");
// var obtMarks2 = +prompt("Obtained marks in second subject");
// var obtMarks3 = +prompt("Obtained marks in third subject");

// var a = "Subject " +  " Total Marks " + " Obtained Marks " + " Percentage" + "<br>";
// var b = sub1 + " 100 " + obtMarks1 + obtMarks1 + "%" + "<br>";
// var c = sub2 + " 100 " + obtMarks2 + obtMarks2 + "%" + "<br>";
// var d = sub3 + " 100 " + obtMarks3 + obtMarks3 + "%" + "<br>";
// var g = (obtMarks1 + obtMarks2 + obtMarks3)
// var e = "300" + "  "  + g + "  " + (g/3) + "%";
// var f = (a+b+c+d+e);
// document.write(f)

// // chapter # 6-9 end




// // Chapter # 21
// // Task 1
// // 1. Write a program that takes two user inputs for first and last name using prompt



// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = (firstName + " " + lastName);
// alert(fullName)


// // task 2
// // 2. Write a program to take a user input about his favorite mobile phone model.


// var phone = prompt("Enter Your Favourite phone");
// var result = ("My favourite phone is: " + phone);
// var lenghtOf = phone.length;
// document.write(result + "<br>" + "Length of string: " + lenghtOf)


// // task 3
// // 3. Write a program to find the index of letter “n”

// var city = "Pakistani";
// var cityind = city.indexOf("n");
// var str = ("String: " + city);
// var indOf = ("Index of 'n': " + cityind);
// document.write(str + "<br>" + indOf)


// // task 4
// // 4. Write a program to find the last index of letter

// var a = "Hello World";
// var aind = a.lastIndexOf("l");
// var str = ("String: " + a);
// var indOf = ("Index of 'l': " + aind);
// document.write(str + "<br>" + indOf)


// // task 5
// // 5. Write a program to find the character


// var city = "Pakistani";
// var cityind = city.charAt("3");
// var str = ("String: " + city);
// var indOf = ("Character at index 3: " + cityind);
// document.write(str + "<br>" + indOf)


// // task 7
// // 7. Write a program to replace the “Hyder” to “Islam”

// var city1 = "Hyderabad";
// var rep = city1.replace("Hyder" , "Islam")
// var city = "City: Hyderabad";
// var repl = "After replacement: " + rep;
// document.write(city+ "<br>" + repl)


// // task 9
// // 9. Write a program that converts a string “472”

// var d = "472";
// var a = "Value: " + d;
// var b = "<br>" +"Type: String" + "<br>";
// var c = Number(d)
// var e = "Value: " + c;
// var f = "<br>" +"Type: number" + "<br>";
// document.write(a+b+e+f)


// // task 10
// // 10. Write a program that takes user input. Convert and show the input in capital letters.

// var inp = prompt("Enter your input");
// var result = inp.toUpperCase("")
// var show = "User input: " + inp + "<br>";
// var cas = "Upper case: " + result;
// document.write(show + cas)


// // task 11
// // 11. Write a program that takes user input. Convert and show the input in title case.


// var inp = prompt("Enter your input");
// var result = inp.slice(0,1);
// var result2 = inp.slice(1);
// var sss = result.toUpperCase();
// var ppp = result2.toLowerCase()
// var add = sss+ppp;
// var use = "User input: " + inp + "<br>";
// var titl = "Title case: " +  add;
// document.write(use + titl);


// // task 12
// // 12. Write a program that converts the variable num to string.


// var num = 35.36;
// var a = "Number: " + num;
// var conv = num.toString()
// var par = parseInt(conv);
// var b ="Result: " + par;
// document.write(a+ "<br>" + b)


// // task 13
// // 13. Write a program to take user input and store username in a variable.

// var userName = prompt("Enter User name");
// var stor = userName;
// var char = stor.charCodeAt(33 , 44 , 46)
// var char2 = stor.charCodeAt(64)
// if (userName === char){
//     alert("Please enter a valid username")
// }
// else if(userName === char2){
//     alert("Username is valid")
// }
// else{
//     var vv2 = prompt("Enter a valid username")
//     alert(vv2)
// }


// // task 14
// // 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]


// var  a =  ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Wellcome to ABC Bakery.What do you want to order sir/ma'am?");
// var b =  a.indexOf(search);
// if(a.indexOf(search) !== -1){
//     document.write(search + " is <b> available </b> at index " + b + " in our bakery")
// }
// else {
//     document.write("We are sorry. " + search + " is <b> not available </b> in our bakery")
// }


// // task 16
// // 16. Write a program to convert the following string to an array using string split method.

// var university = ['U','n','i','v','e','r','s','i','t','y',' ' , 'O','f', ' ' , 'K','a','r','a','c','h','i'];
// for(var i = 0; i<university.length; i++){
//     document.write(university[i]+"<br>")
// }


// // task 17
// // 17. Write a program to display the last character of a user input.

// var inp = prompt("Enter your Input");
// var lcf = inp.charAt(inp.lenght -1)
// var a = "User input: " + inp;
// var b = "Last character of input: " + lcf;
// document.write(a + "<br>" + b)


// // task 18
// // 18. You have a string “The quick brown fox jumps over the lazy dog”.

// var text1 = "Text: The quick brown fox jumps over the lazy dog";
// var text2 = "There are 2 occurrence(s) of word 'the'"
// document.write(text1+"<br>"+text2)


// // chapter # 21-25 end








// // chapter # 26-30

// // task 1
// // 1. Write a program that takes a positive integer


// var int = prompt("Enter your positive integer");
// var a = "number: " + int + "<br>";
// var a1 = Math.round(int);
// var b = "round off value: " + a1 + "<br>";
// var b1 = Math.floor(int);
// var c = "floor value: " + b1 + "<br>";
// var c1 = Math.ceil(int)
// var d = "ceil value: " + c1;
// document.write(a+b+c+d)


// // task 2
// // 2. Write a program that takes a negative floating point


// var int = prompt("Enter your negative integer");
// var a = "number: " + int + "<br>";
// var a1 = Math.round(int);
// var b = "round off value: " + a1 + "<br>";
// var b1 = Math.floor(int);
// var c = "floor value: " + b1 + "<br>";
// var c1 = Math.ceil(int)
// var d = "ceil value: " + c1;
// document.write(a+b+c+d)


// // task 4
// // 4. Write a program that simulates a dice using random() method of JS Math class


// var a = 4;
// var b = 6;
// var c = Math.random() * 7;
// var d = Math.floor(c);
// var e = Math.round(d);
// var r1 = "Random dice value: " + e;
// document.write(r1);


// // task 5
// // 5. Write a program that simulates a coin toss

// var heads = prompt("Enter heads player name");
// var tails = prompt("Enter tails player name");
// var tosss = Math.random() * 2;
// var result = Math.floor(tosss)
 
// if  (result === 0){
//     alert("Heads " + heads + " win the toss")
// }
// else{
//     alert("Tails " + tails + " win the toss")
// }


// // task 6
// // 6. Write a program that shows a random number between 1 and 100 in your browser.


// var r1 = Math.random() * 101;
// var r2 = Math.round(r1);
// var a = "Random number between 1 and 100: " + r2;
// document.write(a);



// // task 7
// // 7. Write a program that asks the user about his weight.


// var weight = prompt("Enter your weight in kilograms");
// if (weight === weight + ' kgs' || 'kilograms' || 'kg'){
//     document.write("The weight of user is " + weight + " kilograms")
// }
// else{
//     alert(prompt("Enter your weight again"))
// }


// // task 8 
// // 8. Write a program that stores a random secret number

// var num = prompt("Enter a number between 1 to 10");
// var secNum = "7";
// if (num === secNum){
//     alert("Congratulations you win!")
// }
// else{
//     alert("Sorry you lose Try again!")
// }


// // chapter # 26-30 end


// // chapter # 31-34



// // task 1
// // 1. Write a program that displays current date and time in
// // your browser.

// var a = new Date ();
// document.write(a);


// // task 2 
// // 2. Write a program that alerts the current month in words.

// var a = new Date ();
// var d = a.toString();
// var b = d.slice(3,7)
// var c = "Current month: " + b;
// document.write(c)

// // task 3
// // 3. Write a program that alerts the first 3 letters of the current day

// var a = new Date ();
// var d = a.toString();
// var b = d.slice(0,3)
// var c = "Today is: " + b;
// document.write(c)

// // task 4
// // 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.


// var a = new Date ();
// var d = a.toString();
// var b = d.slice(0,3)
// if (b === "sat"){
//     document.write("It's Fun day")
// }
// else if (b === "sun"){
//     document.write("It's Fun day")
// }
// else{
//     alert("Today is not a saturday/sunday")
// }


// // task 5
// // 5. Write a program that shows the message “First fifteen days of the month

// var a = new Date ();
// var b = a.toString();
// var c = b.slice(8,10);
// var d = "First fifteen days of the month";
// var e = "Last days of the month";
// if (c <= "15"){
//     document.write(d)
// }
// else {
//     document.write(e)
// }


// // task 6
// // 6. Write a program that determines the minutes


// // var curDat = new Date ();
// // var a = "Current Date: " + curDat;
// // var sin = new Date ();
// // var str = sin.toString();
// // var sli = str.slice(18,26)
// // var b = "Elapsed miliseconds since January 1, 1970: " + elaMs;
// // var elaMn = sli.getMinutes();
// // var c = "Elapsed minutes since January 1, 1970: " + elaMn;
// // document.write(a + "<br>" + b + "<br>" + c)

// var dob = new Date("Thu Jan 01 1970 12:00:01 GMT+0500 (Pakistan Standard Time)");
// var dobmili = dob.getMilliseconds();
// var today = new Date("Thu Jan 01 1970 12:00:01 GMT+0500 (Pakistan Standard Time)");
// var todaymili = today.getMinutes();
// var d = new Date () + "<br>";
// var a = "Current date: " + d;
// var b = "Elapsed miliseconds since January 1, 1970: " + dobmili + "<br>";
// var c = "Elapsed minutes since January 1, 1970: " + todaymili;
// document.write(a+b+c)



// // task 7
// // 7. Write a program that tests whether it's before noon


// var a = new Date ();
// if (a <= 12){
//     alert("It's AM")
// }
// else {
//     alert("It's PM")
// }


// // task 8
// // 8. Write a program that creates a Date object


// var a = new Date ("Dec 31, 2020");
// var b = "Later date: " + a;
// document.write(b)

// // task 9
// // 9. Create a date object of the starting date of this Ramadan

// var newDaat = new Date ("Apr 24, 2020");
// var a = newDaat.getMonth();
// var b = newDaat.getDate();
// var c = newDaat.getFullYear();
// var arr = [a,b,c]
// var newDate = new Date ();
// var e = newDate.getMonth();
// var f = newDate.getDate();
// var g = newDate.getFullYear();
// var arr1 = [e,f,g]
// var min6 = arr1-arr;
// var i = min6 + " days have passed since 1st Ramadan,2020";
// document.write(i)



// // task 10
// // 10. Write a program that displays in your browser the seconds

// var newDate = new Date("Sat Dec 05 2015 22:50:16 GMT+0500 (Pakistan Standard Time)")
// var a = newDate.getTime();
// var newDate2 = new Date();
// var b = newDate2.getTime();
// var c = b-a;
// var result = "On refrence date " + newDate + "<br>";
// var result2 = c + " seconds had passed since beginning of 2015";
// document.write(result+result2);


// // task 11
// // 11. Create a Date object for the current date and time.


// var dates = new Date()
// var a = "current date " + dates + "<br>"
// var date2 = new Date ()
// var b = date2.getHours() + 1;
// var c = "1 hour ago,it was " + "Thu Jun 18 2020 " + b + ":23:49 GMT+0500 (Pakistan Standard Time)";
// document.write(a+c)

// // task 12
// // 12. Write a program that creates a date object

// var dates = new Date()
// var a = "current date " + dates + "<br>";
// var newDate = new Date();
// var back = newDate.getUTCFullYear();
// var min = back - 100;
// var b = "100 years back,it was Thu Jun 18 " + min + " 13:23:49 GMT+0500 (Pakistan Standard Time)";
// document.write(a + b)

// // task 13
// // 13. Write a program to ask the user about his age


// var age = prompt("Enter your age");
// var a = "Your age is " + age  + "<br>";
// var date = new Date ();
// var min = date.getFullYear()
// var min1 = min - age;
// var b = "Your birth year is " + min1;
// document.write(a+b);


// // task 14
// // 14. Write a program to generate your K-Electric bill in your browser


// var h1 = "<h1>K-Electric Bill</h1>";
// var cn = "Customer Name: ABC Customer" + "<br>";
// var nD = new Date ();
// var ndm = nD.getMonth();
// var mn = "Month: " + ndm + "<br>";
// var noU = "Number of unite: " + 410 + "<br>";
// var cpu = "Charges per unit: " + 16 + "<br>";
// var naP =  "<br>" + "Net Amount Payable (within Due Date): " + (410*16) + "<br>";
// var lps = "Late Payment surcharge: 350"  + "<br>";
// var gaP = "Gross Amount Payable (after Due Date): " + (410*16+350);
// var a = (h1+cn+mn+noU+cpu+naP+lps+gaP)
// document.write(a);




// // chapter 31-34 end







// // chapter 35-38
// // task 1
// // 1. Write a function that displays current date & time in your browser.


// function time(){
//     var time = new Date (); 
//     document.write(time);
// }
// time();


// // task 2
// // Write a function that takes first & last name

// function fullName(){
//     var firstName = prompt("Enter your first name");
//     var lastName = prompt("Enter your last name");
//     var fullName = (firstName + " " + lastName);
//     alert(fullName)
// }

// fullName()



// // tassk 3
// // 3. Write a function that adds two numbers (

// function add(){
//     var val1 = +prompt("Enter first value");
//     var val2 = +prompt("Enter second value");
//     var ans = val1 + val2;
//     alert(ans)
// }
// add();


// // task 4
// // 4. Calculator:

// function calculator(){
//     var val1 = +prompt('your first value');
//     var sign = prompt('Your operator');
//     var val2 = +prompt('your secound value');
//     if(sign === '+'){
//     document.write("Sum of" + " " + val1 + " " + "and" + " " + val2 + " " + "is" + " " + (val1+val2))
//     }
//     else if(sign === '-'){
//     document.write("Subtraction of" + " " + val1 + " " + "and" + " " + val2 + " " + "is" + " " + (val1-val2))
//     }
//     else if(sign === '*'){
//     document.write("Multiplication of" + " " + val1 + " " + "and" + " " + val2 + " " + "is" + " " + (val1*val2))
//     }
//     else if(sign === '/'){
//     document.write("Division of" + " " + val1 + " " + "and" + " " + val2 + " " + "is" + " " + (val1/val2))
//     }
//     else if(sign === '%'){
//     document.write("Percentage of" + " " + val1 + " " + "and" + " " + val2 + " " + "is" + " " + (val1/val2*100+'%'))
//     }
// }

// calculator();



// // task 5
// // 5. Write a function that squares its argument




// // task 7
// // 7. Write a function that take start and end number as inputs


// function counting(){
//     var a = prompt("Enter your first value?")
//     var b = prompt("Enter your last value?")
//     for (var a = 1; a >= a.length; a+10){
//         for(var b = a; b >= a+9 ; b++){
//             document.write(b + " " + " ");
//         }
//         document.write("<br>")
//     }
// }
// counting()


// // task 8
// // 8. Write a nested function that computes hypotenuse of a right angle triangle.


// function hypotenuse(){
//     var a = prompt("Enter base of triangle");
//     var b = prompt("Enter perpendicular of triangle");
//     var calc = a*a;
//     var calc1 = b*b;
//     var plus = calc+calc1;
//     var hypote = "Hypotenuse<sup>2</sup>  = " + plus;
//     document.write(hypote);

// }
// hypotenuse();

// // task 9
// // 9. Write a function that calculates the area of a rectangle


// function recArea(){
//     var width = prompt("Enter width of rectangle");
//     var height = prompt("Enter height of rectangle");
//     var mult = width*height;
//     var radius = mult;
//     var finMult = 3.147*radius*radius;
//     document.write("Area of rectangle is = " + finMult)
// }
// recArea();



// // task 10
// // 10. Write a JavaScript function that checks whether a passed string is palindrome or no


// function palindrome(){
//     var word = prompt("Enter your word");
//     var check = "";
//     for(var i = word.length - 1; i >= 0 ; i--){
//         check += word[i]
//     }
//     if (word === check){
//         alert(word + " is palindrome word")
//     }
//     else{
//         alert(word + " is not palindrome word")
//     }
// }
// palindrome();


// // task 11
// // 11. Write a JavaScript function that accepts a string as a parameter


// function upperCase(){
//     var a = prompt("Enter some words")
//     var b = a.slice(0,1)
//     var c = a.slice(1)
//     var d = b.toUpperCase();
//     var e = c.toLowerCase();
//     document.write(d+e)
// }

// upperCase();


// // task 12
// // 14. The Geometrizer


// function calcCircumference(){
//     var radius = prompt("Enter a radius");
//     var circumFerence = (2*3.142*radius);
//     var c = "The circumference is: " + circumFerence + "<br>";
//     var arEa = (3.142*radius*radius)
//     var d = "The area is: " + arEa;
//     var e = (c+d);
//     document.write(e);
// }
// calcCircumference();



// // chapter 35-38 end






// // chapter # 43-48

// // task no 1-2
// // 1. Show an alert box on click on a link. 
// // 2. Display some Mobile images in browser. On click on an image Show the message in alert to user. 



// function popup(){
//     alert('Thanks for purshasing a phone from us')
// }


// // task no 3
// // 3. Display 10 student records in table and each row should contain a delete button.
// //  If you click on a button to delete a record, entire row should be deleted.




// function addRecordss(){
//     var name = document.getElementById('Name')
//     var classs = document.getElementById('Class')
//     var name2 = document.getElementById('name2')
//     var class2 = document.getElementById('class2')
//     var index = document.getElementById("index1")

//     index++
//     name2.innerHTML = name.value
//     class2.innerHTML = classs.value

//     name.value = "";
//     classs.value = "";
// }

// function deleted(){
//     var tr = document.getElementById("name2")
//     var tr1 = document.getElementById("class2")
//     var deleted = document.getElementById("delete")

//     tr.innerHTML = ""
//     tr1.innerHTML = ""
//     addRecordss();
// }


// // task no 4
// // 4. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout



// function mouseO(){
//     var mousein = document.getElementById('image')
//     mousein.src = 'images/d1.jpg';
// }
// function mouseOu(){
//     var mousein = document.getElementById('image')
//     mousein.src = 'images/d2.jpg';
// }



// // task no 5
// // 5. Show a counter in browser. 
// // Counter should increase on click on increase button and decrease on click on decrease button. 
// // And show updated counter value in browser.



// var inccc = 0;
// var incccHeading = document.getElementById('inccc')
// var interval;

// function timer(){
//     inccc++;
//     incccHeading.innerHTML = inccc;
// }
// function increaseBtn(){
//     var a = document.getElementById('disable').disabled = true;
//     var b = document.getElementById('disable1').disabled = true;
//     var c = document.getElementById('disable2').disabled = false;
    
//     interval = setInterval(timer,100)
// }


// function decreaseBtn(){
//    function timer(){
//         --inccc;
//         incccHeading.innerHTML = inccc;
//     }
//     var a = document.getElementById('disable').disabled = true;
//     var b = document.getElementById('disable1').disabled = true;
//     var c = document.getElementById('disable2').disabled = false;

//     interval = setInterval(timer,100)
// }
// function stop(){
//     var a = document.getElementById('disable').disabled = false;
//     var b = document.getElementById('disable1').disabled = false;
//     var c = document.getElementById('disable2').disabled = false;
//     clearInterval(interval)
// }



// // Chapter no 49-52

// // task no 1
// // 1. Create a signup form and display form data in your web page on submission. 



// function deploo(){
//     var a = document.getElementById("username")
//     var b = document.getElementById("email")
//     var c = document.getElementById("password")
//     var d = document.getElementById("username1")
//     var e = document.getElementById("email1")
//     var f = document.getElementById("password1")

//     d.innerHTML = a.value;
//     e.innerHTML = b.value;
//     f.innerHTML = c.value;

//     a.value="";
//     b.value="";
//     c.value="";
// }



// // task no 2
// // 2. Suppose in your webpage there is content area in which you have entered your item details, 
// // but user can only see some details on first look. When user clicks on “Read more” button, 
// // full detail of that particular item will be displayed.  




// function readMore(){
//     var a = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt eos quod impedit ut esse tenetur earum autem aliquam possimus quam! Repellendus necessitatibus maxime illum consequatur ipsam tenetur adipisci, natus voluptatibus."
//     var para = document.getElementById("para")
//     para.innerHTML = a;
// }


// // Chapter no 52-57


// // task no 1


// function showImage(e){
//     var modalimage = document.getElementById("modalImage")
//     modalimage.src = e.src;
// }
 