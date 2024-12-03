/**
1. Scenario: Online Library Membership
---------------------------------------
Context: An online library offers different levels of membership. Depending on the type of membership, users have access to different resources:
Basic Membership: Access to only free books.
Standard Membership: Access to free books and discounted paid books.
Premium Membership: Access to all books, including exclusive content.
Question: Imagine you have a variable that stores a user’s membership type. Using conditional statements, determine what resources the user can access and display a message indicating their access level. Consider how you would handle a situation where the membership type is invalid.
*/

// var membershipType="";
// if(membershipType==='basicMembership'){
//     console.log('Access to only free books');
// }
// else if(membershipType==='standardMembership'){
//     console.log('Access to free books and discounted paid books');
// }
// else if(membershipType==='premiumMembership'){
//     console.log('Access to all books, including exclusive content');
// }
// else{
//     console.log("You didn't have any Membership, Please Take any Membership")
// }



/**
2. Scenario: E-Commerce Discount Application
---------------------------------------------
Context: An e-commerce platform applies discounts based on the user's membership status and the total purchase amount:
Regular Customers: No discount for purchases under $100. A 5% discount for purchases between $100 and $500. A 10% discount for purchases over $500.
VIP Customers: A 10% discount for purchases under $100. A 15% discount for purchases between $100 and $500. A 20% discount for purchases over $500.
Question: Suppose you have variables that represent a user’s membership status and purchase amount. Use conditional statements to determine the final price after applying the appropriate discount. Think about how to handle invalid inputs, such as negative purchase amounts or unrecognized membership statuses.
*/


//Method-1
// if((membershipType!=='Premium' && membershipType!=='Basic')||price<=0){
//     console.log("Please Enter Correct Values");
// }
// else if(membershipType==='Premium'&&price<100){
//     console.log(`You are a premium member.You will get a discount of 10%.You need to pay ${price-price*10/100}`);
// }
// else if(membershipType==='Premium'&&(price>=100&&price<=500)){
//     console.log(`You are a premium member.You will get a discount of 15%.You need to pay ${price-price*15/100}`);
// }
// else if(membershipType==='Premium'&&price>500){
//     console.log(`You are a premium member.You will get a discount of 20%.You need to pay ${price-price*20/100}`);
// }

// else if(membershipType==='Basic'&&price<100){
//     console.log(`You are a Basic member.You will get a discount of 0%.You need to pay the Exact Billing Amount`);
// }
// else if(membershipType==='Basic'&&(price>=100&&price<=500)){
//     console.log(`You are a Basic member.You will get a discount of 5%.You need to pay ${price-price*5/100}`);
// }
// else if(membershipType==='Basic'&&price>500){
//     console.log(`You are a Basic member.You will get a discount of 10%.You need to pay ${price-price*10/100}`);
// }

//Method-2
// var membershipType = 'Monday';
// var price = 234;
// if(membershipType==='Basic'){
//     if(price>0 && price<100){
//         console.log(`You are a Basic member.You will get a discount of 0%.You need to pay the Exact Billing Amount`);       
//     }
//     else if(price>=100 && price<=500){
//         console.log(`You are a Basic member.You will get a discount of 5%.You need to pay ${price-price*5/100}`); 
//     }
//     else{
//         console.log(`You are a Basic member.You will get a discount of 10%.You need to pay ${price-price*10/100}`);     
//     }
// }
// else if(membershipType==='Premium'){
//     if(price>0 && price<100){
//         console.log(`You are a Premium member.You will get a discount of 0%.You need to pay the Exact Billing Amount`);       
//     }
//     else if(price>=100 && price<=500){
//         console.log(`You are a Premium member.You will get a discount of 5%.You need to pay ${price-price*5/100}`); 
//     }
//     else{
//         console.log(`You are a Premium member.You will get a discount of 10%.You need to pay ${price-price*10/100}`);     
//     }
// }
// else{
//     console.log("Please Enter Correct Values");
// }


/**
3. Scenario: Academic Scholarship Eligibility
----------------------------------------------
Context: A university offers scholarships to students based on their GPA and extracurricular involvement:
Merit-Based Scholarship: Requires a GPA of 3.5 or higher.
Leadership Scholarship: Requires active participation in at least two extracurricular activities and a GPA of 3.0 or higher.
Community Service Scholarship: Requires 100 or more hours of community service and a GPA of 2.5 or higher.
Question: Given variables that store a student's GPA, number of extracurricular activities, and community service hours, use conditional statements to determine which scholarships the student is eligible for. Consider scenarios where a student qualifies for multiple scholarships or none.
*/

// var GPA = 2.7;
// var coCurricularActivitesCount = 3;
// var servicesHours = 100;
// if(GPA>=3.5){
//     console.log('You are Eligible for Merit ScholarShip');
// }
// else if(GPA>=3.0 && coCurricularActivitesCount>=2){
//     console.log('You are Eligible for LeaderShip ScholarShip');
// }
// else if(GPA>=2.5 && servicesHours>=100){
//     console.log('You are Eligible for Community Service ScholarShip');
// }
// else{
//     console.log("You didn't Eligible for any scholarships");
// }








//Question-4

/**
4. Scenario: Movie Ticket Pricing
----------------------------------
Context: A movie theater charges different prices based on the day of the week and the customer's age:
Weekdays: Standard price of $12. Seniors (65 and older) and children (under 12) receive a 50% discount.
Weekends: Standard price of $15. Seniors and children receive a 30% discount.
Question: Assume you have variables for the day of the week and the customer’s age. Use conditional statements to determine the correct ticket price. Consider how to handle situations where the day or age is invalid.
*/
// var age = 25;
// var weekdays = 7;

// if(((age>=65 &&age<=100) ||(age>0&&age<12))&& (weekdays<=0 && weekdays<=5)){
//     console.log(`You Get 50% Discount and your total amoount is ${12-12*(50/100)}$`);
// }
// else if((age>12 && age<65) && (weekdays<=5)){
//     console.log(`You didn't got  any Discount and your total amount is  12$`);
// }
// else if(((age>=65 &&age<=100) ||(age>0&&age<12)) && (weekdays>=6 && weekdays<=7)){
//     console.log(`You Get 30% Discount and your total amoount is ${15-15*(30/100)}$`);
// }
// else if((age>12&&age<65) && (weekdays>=6 && weekdays<=7)){
//     console.log(`You didn't got  any Discount and your total amount is  15$`);
// }
// else{
//     console.log("Please Enter Correct Details")
// }


//Question-5
/**
5. Scenario: Event Registration Validation
-------------------------------------------
Context: An event registration system needs to validate user inputs before confirming their registration:
The user must be 18 years or older to register.
The event allows a maximum of 100 participants. If the event is full, no more registrations are accepted.
The user must provide a valid email address.
Question: You have variables for the user’s age, the number of participants already registered, and their email address. Use conditional statements to validate whether the user can register for the event. Think about how to handle cases where some or all conditions are not met.
*/
var age = 22;
var isValidEmail = false;
var participantsCount = 99;
if(age>18&&isValidEmail&&(0>participantsCount<100)){
    console.log('You can Register to the event');
}
else{
    console.log("You didn't Meet the Requirments or The Event is Filled");
}
