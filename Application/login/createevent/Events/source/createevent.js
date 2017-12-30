var database = firebase.database().ref('/');
var loggedIN = JSON.parse(localStorage.getItem('loggedInUser'))
var div = document.getElementById('card')
var user = localStorage.getItem('loggedInUser');
var convertToParse = JSON.parse(user);
// var fName = document.getElementById('Name').innerHTML = convertToParse.firstName + " " + convertToParse.lastName;
// div.className = 'div';
// console.log(loggedIN)
// ye mujhe data de raah hai 


// var fName = convertToParse.firstName + " " + convertToParse.lastName
database.child('Events Create').on("child_added", function (snap) {
    var obj = snap.val();
    obj.key = snap.key

  
    var mainDiv =document.createElement("div");
    mainDiv.setAttribute("class","card text-center")
    

    //// Event Name
    var eventName =  document.createElement('div');
    eventName.setAttribute('class','card-header')

    var eventNameDiv = document.createTextNode(obj.eventName);
    eventName.appendChild(eventNameDiv);
  
    var span = document.createElement('span')
    span.className = 'class';
    span.appendChild(eventName)

    var lastDiv = document.createElement('div')
    // lastDiv.setAttribute('class', 'card bg-light ')
    // lastDiv.setAttribute('style','max-width: 75rem')
   
    var createparaNode = document.createTextNode('Please feel free to contact me if you need any further information')


    var lastpara = document.createElement('p')
    lastpara.appendChild(createparaNode)
    lastDiv.appendChild(lastpara)
    // var hr = document.createElement('hr')
    // lastDiv.appendChild(hr)


    ///  email or mobile number
    var emailNode = document.createTextNode('   Email:   ' +   obj.email    +  '  or  '  +   '    Phone Number   '   +   obj.phoneNumber)
    lastDiv.appendChild(emailNode)
    // console.log(lastDiv)
   
    // console.log(span)



    //// Name 
    var cardBody = document.createElement('div');
    cardBody.setAttribute('class','card-header');

    var h4 = document.createElement('h4');
    h4.setAttribute('class','card-title')

    cardBody.appendChild(h4)
    var userNameDiv = document.createTextNode( 'Invited By ' + obj.name);
    h4.appendChild(userNameDiv);

    //// description
    var descriptionDiv = document.createElement('p');
    descriptionDiv.setAttribute('class','alert alert-primary');

    var description = document.createTextNode(obj.description)
    descriptionDiv.appendChild(description);
    // console.log(descriptionDiv)

  
    var eventLocation = document.createTextNode('Location:  '  +  obj.eventLocation)
    var btn = document.createElement('button');
    btn.setAttribute('class','btn mb-2 ')
    btn.appendChild(eventLocation);


    var css = document.createElement('p');
    css.className = 'lack'
    var css1 = document.createElement('p');
    css.className = 'lack'

    var ul = document.createElement('ul')
    
    var li1 = document.createElement('li');
    var li2 = document.createElement('li');
    var li3 = document.createElement('li');

    //// space create



    //// timing and date 

    var timeAndDateDiv = document.createTextNode(' EVENT ' + ' Date:  ' + obj.eventData + '  Time:    ' + obj.eventTime)
    timeAndDateDiv.className = 'time';

    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.setAttribute('class', 'card border-success mb-3')
    cardBodyDiv.setAttribute('style', 'max-width: 75rem')
    cardBodyDiv.setAttribute('id', 'card')
    
    var impNote = document.createElement('div');
    impNote.setAttribute('class' , 'card-header')
 

    var createTextForHeading = document.createTextNode('Important Note')
    impNote.appendChild(createTextForHeading);

    var textNodeAfterImpNote = document.createElement('div');
    textNodeAfterImpNote.setAttribute('class' , 'card-body text-success')
    // textNodeAfterImpNote.appendChild(ul)


    var peopleInfoh5 = document.createElement('h6');
    peopleInfoh5.setAttribute('class', 'card-title')
    peopleInfoh5.appendChild(ul)

    // var longEvnetInfoh5 = document.createElement('h5');
    // longEvnetInfoh5.setAttribute('class', 'card-title')

   
    var peopleAmount = document.createTextNode('People attended this event '+obj.people)
    var eventLong = document.createTextNode('Event Time ' + obj.longEvent);
    var hearAbout = document.createTextNode('Resource ' + obj.hearAbout);
    li1.appendChild(peopleAmount)
    ul.appendChild(li1)
    li2.appendChild(eventLong)
    ul.appendChild(li2)
    li3.appendChild(hearAbout)
    ul.appendChild(li3)
    // brr.appendChild(peopleAmount)
    // brr.appendChild(eventLong)
    // brr.appendChild(hearAbout)


    // peopleInfoh5.appendChild(peopleAmount);

    // peopleInfoh5.appendChild(eventLong);
    // peopleInfoh5.appendChild(hearAbout);
    textNodeAfterImpNote.appendChild(peopleInfoh5);



    cardBodyDiv.appendChild(impNote);
    cardBodyDiv.appendChild(textNodeAfterImpNote);
    // console.log(cardBodyDiv);
    // <button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
    // <button type="button" class="btn btn-secondary btn-lg btn-block">Block level button</button>
    var bt1Write = document.createTextNode('Interested')
    var bt1 = document.createElement('button');
    bt1.setAttribute('class', 'btn btn-primary btn-lg btn-block')
    bt1.setAttribute('onClick' , 'interest()')
    bt1.appendChild(bt1Write)

    var bt2Write = document.createTextNode('Not-Interested')
    var bt2 = document.createElement('button');
    bt2.setAttribute('class', 'btn btn-secondary btn-lg btn-block')
    bt2.appendChild(bt2Write)

    var rightNow = new Date();
    var pdatePost = document.createTextNode('Current Post Time  '  + rightNow);
    var pDate = document.createElement('p');
    pDate.appendChild(pdatePost);

    // var userName =  document.createElement('h4');
    // userName.setAttribute('class','card-title')
    // var userNameDiv = document.createTextNode(obj.name);
    // userName.appendChild(userNameDiv);
    // console.log(userName);
 
 

    // var cardheader=document.createElement("div");
    // cardheader.setAttribute("class","card-header");
    // var headertextnode=document.createTextNode(obj.eventname);
    // cardheader.appendChild(headertextnode);
    // var event = {
    //   1  name: convertToParse.firstName + " " + convertToParse.lastName,
    //     email: convertToParse.email,
    //     1  eventName: eventName.value,
    //     1  eventLocation: eventLocation.value,
    //     1  eventTime: eventTime.value,
    //      1 eventData: eventData.value,
    //       phoneNumber: phoneNumber.value,
    //     1  people: people.value,
    //     1  longEvent: longEvent.value,
    //     1  hearAbout: hearAbout.value,
    //     1  description: description.value
    //    }
    // var mainDiv =document.createElement("div");
    // mainDiv.setAttribute("class","card text-center")
    // mainDiv.setAttribute("id","div")
    // mainDiv.appendChild(descriptionDiv);
    // mainDiv.appendChild(timeAndDateDiv);
    // mainDiv.appendChild(btn);

    //// append child
    // div.appendChild(mainDiv)

    var mainDivCard = document.createElement("DIV");
    mainDivCard.setAttribute('id', 'div')
    mainDivCard.appendChild(span);
    mainDivCard.appendChild(h4);
    mainDivCard.appendChild(descriptionDiv);
    
    mainDivCard.appendChild(timeAndDateDiv);
    mainDivCard.appendChild(css1);
    mainDivCard.appendChild(btn);
    
    mainDivCard.appendChild(cardBodyDiv);
 
    mainDivCard.appendChild(css);
    mainDivCard.appendChild(lastDiv);
    mainDivCard.appendChild(bt1)
    mainDivCard.appendChild(bt2)
    mainDivCard.appendChild(pDate);
    div.appendChild(mainDivCard);
    // div.appendChild(descriptionDiv);
    // div.appendChild(timeAndDateDiv);

//  console.log(mainDivCard)


})




function interest(){ 
    database.child('Events Create').on("child_added", function (snap) {
        var objForFeeds =  snap.val();
        objForFeeds.key = snap.key
    
        var objFeedsName = objForFeeds.name

    var user = {
        Feeds : objFeedsName 
    }
    database.child('Feed Interest').push(user);
})
}
function logout(){
    localStorage.removeItem(user);
    localStorage.removeItem(email);

}