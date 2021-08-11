let button = document.querySelector("#submit")
let usernameElement = document.querySelector("#username");
let reviewElement = document.querySelector("#review");
let dateElement = document.querySelector("#date");
//Set up reference to your firebase:
let database = firebase.database().ref();


button.onclick = function updateDB(event){
   
   let username = usernameElement.value
   let message = reviewElement.value
   let date = dateElement.value;
    event.preventDefault();

    let value = {
        NAME : username,
        REVIEW: message,
        DATE: date,

    }
    database.push(value)
}

database.on("child_added", sendPost);

function sendPost(rowData) {
    let row = rowData.val();
    let board = document.querySelector(".allReviews")
    let message = document.createElement("p")

    message.innerHTML = "Book Name:" + row.NAME + "<br>" + "Review:" + row.REVIEW + "<br>" + "Date:" + row.DATE + "<hr>"
    board.appendChild(message);
    console.log(row.NAME);
    console.log(row.REVIEW);
    console.log(row.DATE);

}
