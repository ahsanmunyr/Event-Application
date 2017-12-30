var database = firebase.database().ref('/');

var firstName = document.getElementById('validationCustom01');
var lastName = document.getElementById('validationCustom02');
var email = document.getElementById('inputEmail4');
var password = document.getElementById('inputPassword4');
var hbd = document.getElementById('exampleInputDOB1');
var address = document.getElementById('inputAddress');
var city = document.getElementById('inputCity');
var gender = document.getElementById('sex');
var province = document.getElementById('inputState');
var zip  = document.getElementById('inputZip');


function submit(){

    var user = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        hbd: hbd.value,
        address: address.value,
        city: city.value,
        province: province.value,
        zip: zip.value,
        gender: gender.value
    }

    firebase.auth().
    createUserWithEmailAndPassword(user.email, user.password)
    .then(function (res) {
        database.child('users/' + res.uid).set(user)
            .then(function () {
                location = 'login/login.html'
            })
    })
    .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
    });
}
