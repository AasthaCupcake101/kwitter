//YOUR FIREBASE LINKS
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

    username = localStorage.getItem("user_name")
    room_name = localStorage.getItem("room_name")
function send()
{
      msg=document.getElementById("message").value;
      firebase.database().ref(room_name).push ({
            name:username,
            message:msg,
            like : 0
      })
      document.getElementById ("messege").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name=message_data["name"]
message=message_data["message"]
like=message_data["like"]
namewithtag="<h4>"+name+ "<img  class='user_tick' src='tick.png'></h4>"
messagetag="<h4 class='message_h4'>" +message+ "</h4>" 
likebutton="<button class='btn btn-imfo' id="+firebase_message_id+" value="+like+" onclick='updatalike(this.id)' >"
spanwithtag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>"
row=namewithtag+messagetag+likebutton+spanwithtag
document.getElementById("output").innerHTML+=row
      } });  }); }
getData();
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
    }
    function logout() {
    window.location="index.html"
    localStorage.removeItem("user_name") 
    localStorage.removeItem("room_name") 
    }

   function updatalike(message_id) {
      buttonid=message_id
      likes=document.getElementById(buttonid).value
      updatedlikes=Number(likes)+1
      firebase.database().ref(room_name).child(message_id).update({
            like:updatedlikes
      })
   }