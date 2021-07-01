function storeValues() {
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var gender = document.getElementById('gender');
    var age = document.getElementById('age');
    var number = document.getElementById('number');
    var userData = {
        username : username.value,
        email : email.value,
        gender : gender.value,
        age : age.value,
        number : number.value
    }
    localStorage.setItem('userData',JSON.stringify(userData));
}

var getData = JSON.parse(localStorage.getItem('userData')) 

function getValues(){
    var getUserName = document.getElementById('getUsername')
    var getEmail = document.getElementById('getEmail')
    var getGender = document.getElementById('getGender')
    var getAge = document.getElementById('getAge')
    var getNumber = document.getElementById('getNumber')
    getUserName.innerHTML = "Username : " + getData.username;
    getEmail.innerHTML = "Email : " + getData.email;
    getGender.innerHTML = "Gender : "+ getData.gender;
    getAge.innerHTML = "Age : " + getData.age;
    getNumber.innerHTML = "Number : " + getData.number;
    var getHeading = document.getElementById('userDataHead')
    getHeading.innerHTML = "USER DATA"
}

