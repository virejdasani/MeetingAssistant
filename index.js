let nameButton = document.getElementById("addButton")
displayMeetings()

// On add button click
nameButton.addEventListener("click", function (e) {
    let nameInput = document.getElementById("nameInput")
    let linkInput = document.getElementById("linkInput")

    // Fetch the meeting name from local 
    let meetingName = localStorage.getItem("meetingName")

    // In case it doesn't exist
    if (meetingName === null) {
        meetingNameArray = []
    } else {
        // Else, assign the input to meetingNameArray
        meetingNameArray = JSON.parse(meetingName)
    }

    let meetingNameLink = {
        name: nameInput.value,
        link: linkInput.value
    }

    // Push the input name value to meetingNameArray
    meetingNameArray.push(meetingNameLink)
    console.log(nameInput.value)

    // Set it in local storage in string format
    localStorage.setItem("meetingName", JSON.stringify(meetingNameArray))

    // Clear the input fields
    nameInput.value = ""
    linkInput.value = ""

    console.log(meetingNameArray + " = meetingNameArray")
    console.log(localStorage)

    displayMeetings()
})

// To show notes in cards in the app
function displayMeetings() {
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
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">${element.link}</p>
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
        meetingNameElem.innerHTML = `<div id="centre">You have no meetings. Add a meeting from above!</div>`
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
    displayMeetings()


}