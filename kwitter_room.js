var firebaseConfig = {
      apiKey: "AIzaSyDgdbPdLu1ekVYEBtv6edYz5vxtmmLCS5w",
      authDomain: "kwitterapp-717be.firebaseapp.com",
      databaseURL: "https://kwitterapp-717be-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-717be",
      storageBucket: "kwitterapp-717be.appspot.com",

      messagingSenderId: "43418511178",
      appId: "1:43418511178:web:064393e02cb09bd42003b3",
      measurementId: "G-5HEW680VS5"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
//ADD YOUR FIREBASE LINK
username = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="welcom " +username
function addroom() {
  roomname=document.getElementById ("room_name").value 
  localStorage.setItem("room_name",roomname)
  firebase.database().ref("/").child(roomname).update({purpose:"addingroomname"

  })
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
Room_names=childKey;
row="<div class='room_name' id="+Room_names+" onclick='rederecToRoomName(this.id)'>"+Room_names+"</div> <hr>"
document.getElementById("output").innerHTML+=row

      //End code
      });});}
getData();
function rederecToRoomName(name)
{
  console.log(name)
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";

}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}

