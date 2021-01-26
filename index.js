let nameButton = document.getElementById("addButton")
displayNotes()

// On add button click
nameButton.addEventListener("click", function (e) {
    let nameInput = document.getElementById("nameInput")

    // Fetch the meeting name from local 
    let meetingName = localStorage.getItem("meetingName")

    // In case it doesn't exist
    if (meetingName === null) {
        meetingNameArray = []
    } else {
        // Else, assign the input to meetingNameArray
        meetingNameArray = JSON.parse(meetingName)
    }

    // Push the input name value to meetingNameArray
    meetingNameArray.push(nameInput.value)
    console.log(nameInput.value)

    // Set it in local storage in string format
    localStorage.setItem("meetingName", JSON.stringify(meetingNameArray))

    // Clear the input field
    nameInput.value = ""

    console.log(meetingNameArray + " = meetingNameArray")
    console.log(localStorage)

    displayNotes()
})

// To show notes in cards in the app
function displayNotes() {
    // Fetch the meeting name from local 
    let meetingName = localStorage.getItem("meetingName")

    // In case it doesn't exist
    if (meetingName === null) {
        meetingNameArray = []
    } else {
        // Else, assign the input to meetingNameArray
        meetingNameArray = JSON.parse(meetingName)
    }

    // Empty at first
    let cardHTML = ""

    meetingNameArray.forEach(function (element, index) {
        cardHTML += `
        <div class="cards">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${element}</h5>
                    <p class="card-text">Some quick example text</p>
                    <button id="${index}" onclick="deleteMeeting(this.id)" class="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    `
    })
    let meetingNameElem = document.getElementById("meetings")
    // If meetings exist
    if (meetingNameArray .length != 0) {
        meetingNameElem.innerHTML = cardHTML
    }
    // If there are no meetings
    else {
        meetingNameElem.innerHTML = `<div id="noMeetings">You have no meetings. Add a meeting from above!</div>`
    }
    
}

// Deleting a meeting
function deleteMeeting(index) {
    console.log("Deleting meeting with index: " + index)


    let meetingName = localStorage.getItem("meetingName")

    // In case it doesn't exist
    if (meetingName === null) {
        meetingNameArray = []
    } else {
        // Else, assign the input to meetingNameArray
        meetingNameArray = JSON.parse(meetingName)
    }

    // Delete one meeting with the given index
    meetingNameArray.splice(index, 1)
    // Refresh the local storage 
    localStorage.setItem("meetingName", JSON.stringify(meetingNameArray))
    // Refresh and display the notes again
    displayNotes()


}