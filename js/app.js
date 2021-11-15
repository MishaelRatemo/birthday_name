const form_Data = document.getElementById('form_data');
const birth_Day = document.getElementById('birth_day');
let birth_Month = document.getElementById('birth_month');
let birth_Year = document.getElementById('birth_year');
let Gender = document. getElementById('gender');
let ErrorsDay = document.getElementById('errorday');
let ErrorMonth = document.getElementById('errormonth');
let ErrorYear = document.getElementById('erroryear');
let ErrorGender =document.querySelector('.errorGender');
 
// Add event listeners
form_Data.addEventListener('submit', validateDay);
form_Data.addEventListener('submit', validateMonth);
form_Data.addEventListener('submit', validateYear);
form_Data.addEventListener('submit', validateGender);
form_Data.addEventListener('submit',get_my_akanName);

// save the user data in array and convert  data to int
 var    my_birthday_date =[];
// get correct day
function validateDay(e) {
    e.preventDefault();  
    let b_Day = birth_Day.value.trim();  
    if (b_Day ===""){
        ErrorsDay.innerHTML="Error: MUST Enter a Day";
    }else if(b_Day <= 0){
        ErrorsDay.innerHTML=" Less than 0  accepted ";
        b_Day="";
    } else if(b_Day >31){
        ErrorsDay.innerHTML="Day can't be more than 31!!"
    }else{
        ErrorsDay.innerHTML="";
        my_birthday_date.push(parseInt(b_Day));
    }
}
// get the correct month
function validateMonth(e){
    e.preventDefault(); 
    let m_month = birth_Month.value.trim(); 
    let b_Day =birth_Day.value.trim();  
     if(m_month ===""){
        ErrorMonth.innerHTML="Error: MUST Enter a Month";
    }else if(m_month <0 ){
        ErrorMonth.innerHTML="No month is Less than 1 ";
    }else if(m_month >12 ){
        ErrorMonth.innerHTML="Month More than 12 not accepted";
    }else if(m_month === '2' && b_Day >29 ){// this will prevent entering dates ore than 29 for February
        ErrorMonth.innerHTML="February does not have more than 29 days!!";
    }else{
        ErrorMonth.innerHTML="";
        my_birthday_date.push(b_Day);
    }
}
// get a year with 4 digits
function validateYear(e){
    e.preventDefault();
    let year= birth_Year.value.trim();
    if ( year ===""){
        ErrorYear.innerHTML= " Year Can't be empty";
    } else if(year.length <4 || year.length <4 ){
      ErrorYear.innerHTML=" Year: format should be 4 digits -2000";
    }else{
        my_birthday_date.push(year);
    }
}
//get user to select gender
function validateGender(){
  if(Gender.value ==="") {
    ErrorGender.innerHTML="Please choose Gender";
  }  else{
      my_birthday_date.push(Gender.value);
      console.log(my_birthday_date)
  }
}

// clear form after submission
form_Data.addEventListener('submit', function(){
    document.user_data.reset();
});
//Days of the week with Male Akan Names
const male_week_days_names ={Sunday:"Kwasi",Monday:"Kwadwo",Tuesday:"Kwabena", Wednesday:"Kwaku",Thursday:"Yaw",Friday:"Kofi",Saturday:"Kwame"};

//Days of the week with Female Akan Names
const female_week_days_names ={Sunday:"Akosua",Monday:"Adwoa",Tuesday:"Abenaa", Wednesday:"Akua",Thursday:"Yaa",Friday:"Afua",Saturday:"Ama"};
 
function get_my_akanName(){
    var gender =Gender.value;
    var DD = parseInt(birth_Day.value);
    var MM =parseInt(birth_Month.value);
    var YY = parseInt(birth_Year.value.substr(2,4));
    var CC =parseInt(birth_Year.value.substr(0,2));

    var day_of_the_week= Math.floor((((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10)) + DD )% 7);

    if (gender==="male" && day_of_the_week === 0){
        alert(male_week_days_names.Sunday)
    }else if(gender==="male" && day_of_the_week ===1){
        alert(male_week_days_names.Monday);
    }else if(gender==="male" && day_of_the_week ===2){
        alert(male_week_days_names.Tuesday);
    }else if(gender==="male" && day_of_the_week ===3){
        alert(male_week_days_names.Wednesday);
    }else if(gender==="male" && day_of_the_week ===4){
        alert(male_week_days_names.Thursday);
    }else if(gender==="male" && day_of_the_week ===5){
        alert(male_week_days_names.Friday);
    }else if(gender==="male" && day_of_the_week ===6){
        alert(male_week_days_names.Saturday);
    }else if(gender==="female" && day_of_the_week ===0){
        alert(female_week_days_names.Sunday);
    }else if(gender==="female" && day_of_the_week ===1){
        alert(female_week_days_names.Monday);
    }else if(gender==="female" && day_of_the_week ===2){
        alert(female_week_days_names.Tuesday);
    }else if(gender==="female" && day_of_the_week ===3){
        alert(female_week_days_names.Wednesday);
    }else if(gender==="female" && day_of_the_week ===4){
        alert(female_week_days_names.Thursday);
    }else if(gender==="female" && day_of_the_week ===5){
        alert(female_week_days_names.Friday);
    }else {
        alert(female_week_days_names.Saturday);
    }
}
