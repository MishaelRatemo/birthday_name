const form_Data = document.getElementById('form_data');
const birth_Day = document.getElementById('birth_day');
let birth_Month = document.getElementById('birth_month');
let birth_Year = document.getElementById('birth_year');
let ErrorsDay = document.getElementById('errorday');
let ErrorMonth = document.getElementById('errormonth');
let ErrorYear = document.getElementById('erroryear');

form_Data.addEventListener('submit', validateDay);
form_Data.addEventListener('submit', validateMonth);
form_Data.addEventListener('submit', validateYear);

// clear form after submission
form_Data.addEventListener('submit', function(){
    document.user_data.reset();
});

function validateDay(e) {
    e.preventDefault();
    var b_Day = birth_Day.value.trim();
    if (b_Day ===""){
        ErrorsDay.innerHTML="Error: MUST Enter a Day";
    }else if(b_Day <= 0){
        ErrorsDay.innerHTML=" Less than 0  accepted ";
        b_Day="";
    } else if(b_Day >31){
        ErrorsDay.innerHTML="Day can't be more than 31!!"
    }
}

function validateMonth(e){
    e.preventDefault();
    var m_month = birth_Month.value.trim();
    var b_Day = birth_Day.value.trim();
     if(m_month ===""){
        ErrorMonth.innerHTML="Error: MUST Enter a Month";
    }else if(m_month <0 ){
        ErrorMonth.innerHTML="No month is Less than 1 ";
    }else if(m_month >12 ){
        ErrorMonth.innerHTML="Month More than 12 not accepted";
    }else if(m_month === '2' && b_Day >29 ){
        ErrorMonth.innerHTML="February does not have more than 29 days!!";
    }
}
function validateYear(e){
    let year= birth_Year.value.trim();
    e.preventDefault();
    if ( year ===""){
        ErrorYear.innerHTML= " Year Can't be empty";
    } else if(year.length >4){
        ErrorYear.innerHTML= "Year: Only 4 digits allowed";
    } else if(year.length < 4){
        ErrorYear.innerHTML=" Year: format should be 4 digits -2000";
    }
}