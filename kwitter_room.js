var firebaseConfig = {
      apiKey: "AIzaSyDJL7EpCScHa4jA1i5rwIrRoI5GMcfBDqw",
      authDomain: "kwitter-58e33.firebaseapp.com",
      databaseURL: "https://kwitter-58e33-default-rtdb.firebaseio.com",
      projectId: "kwitter-58e33",
      storageBucket: "kwitter-58e33.appspot.com",
      messagingSenderId: "775716694699",
      appId: "1:775716694699:web:b7f59142f2cb7dd34325ee",
      measurementId: "G-EB5DX256QD"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome  " + user_name + "!";

    function addRoom() {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html";
    }

    function redirectToRoomName(name){
          console.log(name);
          localStorage.setItem("room_name",name);
          window.location = "kwitter_page.html";
    }

    function logout() {
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location = "index.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});} 
getData();
