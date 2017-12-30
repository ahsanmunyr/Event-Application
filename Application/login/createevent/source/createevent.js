var database = firebase.database().ref('/');
var user = localStorage.getItem('loggedInUser');
var convertToParse = JSON.parse(user);
var name = document.getElementById('Name').innerHTML = convertToParse.firstName + " " + convertToParse.lastName;
var email = document.getElementById('Email').innerHTML = convertToParse.email;

var eventName= document.getElementById('eventName');
var eventLocation=document.getElementById('inputLocation');
var eventTime=document.getElementById('eventtime');
var eventData=document.getElementById('eventdate');
var phoneNumber=document.getElementById('inputNumber');
var people=document.getElementById('people');
var longEvent=document.getElementById('timeEvent');
var hearAbout=document.getElementById('hearAbout');
// var fileName=
var description=document.getElementById('eventdescription');

// console.log(eventName);
function submit(){
        var event = {
         name: convertToParse.firstName + " " + convertToParse.lastName,
         email: convertToParse.email,
           eventName: eventName.value,
           eventLocation: eventLocation.value,
           eventTime: eventTime.value,
           eventData: eventData.value,
           phoneNumber: phoneNumber.value,
           people: people.value,
           longEvent: longEvent.value,
           hearAbout: hearAbout.value,
           description: description.value
        }

        database.child('Events Create').push(event);
        eventName.value = "";
        eventData.value = "";
        eventLocation.value = "";
        eventTime.value = "";
        phoneNumber.value = "";
        longEvent.value = "";
        hearAbout.value = "";
        description.value = "";
        // if (eventName.value == ""&& eventData.value == ""&& eventLocation.value == ""&& eventTime.value == "" && phoneNumber.value == ""&& longEvent.value == "" &&hearAbout.value == ""&&description.value == ""){
        //     alert("Please give main whole information");
        // }
        // else{
        //     alert('Congo you create events :)')
        // }

    }
function logout(){
    localStorage.removeItem(user);
    localStorage.removeItem(email);

}

// var image = document.getElementById('file').value;
// function uploadFile(){
    
//     var filename = image.name;
//     var storageRef = firebase.storage().ref('/Images/' + filename);
//     var uploadTask = storageRef.put(image);
//     uploadTask.on('state_changed', function(snapshot){

//     }, function(error){

//     }, function(){
//         var downloadURL = uploadTask.snapshot.downloadURL;
//         console.log(downloadURL);
//     })
// }

// var uploader = document.getElementById('uploader');
// var fileButton = document.getElementById('fileButton');
// fileButton.addEventListener('change', function(e){
//     var file = e.target.files[0];
//     var storageRef = firebase.storage().ref(file.name);
//     storageRef.put(file);
// }); 

// fileButton.addEventListener('change', function(e){
//     var file = e.target.files[0];

//     var storageRef = firebase.storage().ref('images/' + file.name);
    

//     var task = storageRef.put(file);

//     task.on('state_changed' ,
//     function progress(snapshot){
//         var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         uploader.value = percentage;
//     }
//     )
// })



//         function error(err){
//             console.log('error')
            

//         },
//         function complete(){
//             console.log("complete")
//         })
//         console.log(task)
// })


// function uploadFile() {
//     var canvas = document.getElementById("fileButton");
//     canvas.toBlob(blob => {
//       var storage = firebase.app().storage().ref();
//       var name = id + "/" + (new Date()).getTime() + ".png";
//       var f = storage.child("drawings/" + name);
//       var task = f.put(blob);
//       task.on('state_changed', function(snapshot) {
//       }, function(error) {
//         console.error("Unable to save image.");
//         console.error(error);
//       }, function() {
//         var url = task.snapshot.downloadURL;
//         console.log("Saved to " + url);

//         var db = firebase.database();
//         var chats = db.ref().child("chats");
//         chats.child(id).child("drawingURL").set(url);
//       });
//     });
//   };