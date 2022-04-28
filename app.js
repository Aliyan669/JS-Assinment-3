// ///////  CHAPTER :  21 To 25  //////////
//
//   Ques No : 01
//
// var firstName =prompt("Enter First Name ")
// var LastName =prompt("Enter Last Name ")
// var fullname = firstName.concat(LastName)
// document.write(fullname)
//
// Ques No : 02
//
// var mobile= prompt("Enter your Favourite Mobile phone model")
//  document.write("My Favourite Phone is :  "+ mobile+"</br>")
//    document.write("Length of String :"+mobile.length)
//
// Ques No: 03
//
//  var why="Pakistani"
//  document.write("String : "+why+"</br>")
//  document.write("Index of 'n' : " +why.indexOf("n"))
//
// Ques No : 04
//
//  var why="Hello World"
//  document.write("String : "+why+"</br>")
//  document.write("Last Index of 'l' : " +why.lastIndexOf("l"))
//
// Ques No : 05
//
// var why="Pakistani"
// document.write("String : "+why+"</br>")
// document.write("character at index 3 : " +why.charAt("3"))
//
// Ques No : 07
//
// var city ="Hyder "
// document.write("city :  "+city.replace("Hyder","Hyderabad")+"</br>")
// var cities="Islam"
// document.write("After Replacement :  "+cities.replace("Islam","Islamabad")+"</br>")
//
// Ques No : 08
//
// var message = "Ali and Sami are best friends. They play cricket and football together";
// document.write(message.replace(/and/g,"&"))
//
// Ques No : 09
//
// var str = "472"
// document.write("value : "+str+"</br>"+"Type : "+typeof(str)+"</br>")
// var num = Number(str)
// document.write("value : "+str+"</br>"+"Type : "+typeof(num)+"</br>")
//
// Ques  No : 10 
//
// var user= prompt("Enter a name in lowercase")
// document.write("user input : "+user+"</br>")
// document.write("UPPARCASE : "+user.toUpperCase())
//
// Ques No : 11
//
// var user= prompt("Enter a name")
// document.write("user Input : "+user+"</br>")
// var cap =user[0].toUpperCase()+ user.slice(1).toLowerCase()
// document.write("Title Case :  "+cap)
//
// Ques No : 12 
//
// var num = 35.36 ;
// var str = num.toString();
// document.write(str.replace(".",""));
//
// Ques No :13
//
// var email = prompt("Enter your email")
// var flag = 0
// for(var i = 0 ; i < email.length; i ++ ) {
//     if(email.charAt(i) === "@" ||email.charAt(i) === "!" || email.charAt(i) === "." ||email.charAt(i) === ",") {
//         alert("This is a valid email")
//         flag = 1
//         break;
//     }
// } 
// if (flag == 0){
//    alert("This is not a valid email")
// }
//
// Ques No : 14
//
//  var arr = ["cake", "apple", "cookie", "chips", "patties"]
// var user = prompt("Enter the Bakkery Product")
// var flag = false
// for( var i = 0 ;i < arr . length ; i++){
//     if(user === arr[i].toLowerCase()){
//         flag = true
//         alert(user+" is availible at "+arr.indexOf(user))
//         break;
//     }else{
//         alert(" we are sorry "+user+" is not availible ")
//     }
// }
// if (flag == false) {
//   alert("not found");
// }
//
// Ques No : 16 
//
// var university = "University of Karachi";
// var split = university.split(" ").join("  ")
// // document.write(split)
// for( i=0;i<split.length; i++){
//     document.write(split[i]+"</br>")
// }
//
// Ques No : 17 
//
// var why =prompt("Enter Name")
// document.write("User Input : "+ why+"</br>")
// var str=why.charAt(why.length -1)
//  document.write("Last Character of Input : "+str)
//
// Ques No : 18
//
// function count(main_str, sub_str) 
//     {
//     main_str += '';
//     sub_str += '';
//     if (sub_str.length <= 0) 
//     {
//         return main_str.length + 1;
//     }
//        subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//        return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
//     }
//  document.write("Text : The quick brown fox jumps over the lazy dog </br> There are  "+count("The quick brown fox jumps over the lazy dog", 'the ')+"  Occurance (s) of Word 'the'</br>");
//