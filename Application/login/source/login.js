var database = firebase.database().ref('/')

var email = document.getElementById('userid');
var password = document.getElementById('pwd');

document.getElementById('stop').addEventListener("submit", function (event) {
    event.preventDefault()
    var user = {
        email: email.value,
        password: password.value
    }

    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(function (res) {
            // console.log(res.uid)
            database.child('users/' + res.uid).once('value', function (snapshot) {
                var convert = JSON.stringify(snapshot.val())
                localStorage.setItem('loggedInUser', convert)
                location = 'createevent/createevent.html'
                // console.log(convert)
            })
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });

})