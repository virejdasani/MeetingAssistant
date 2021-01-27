let nameButton = document.getElementById("addButton")
displayMeetings()
displayMeetingLink()

// On add button click for name
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

    displayMeetings()
    displayMeetingLink()
})

// On add button click for link
nameButton.addEventListener("click", function (e) {
    let linkInput = document.getElementById("linkInput")

    // Fetch the meeting link from local 
    let meetingLink = localStorage.getItem("meetingLink")

    // In case it doesn't exist
    if (meetingLink === null) {
        meetingLinkArray = []
    } else {
        // Else, assign the input to meetingLinkArray
        meetingLinkArray = JSON.parse(meetingLink)
    }

    // Push the input link value to meetingLinkArray
    meetingLinkArray.push(linkInput.value)
    console.log(linkInput.value)

    // Set it in local storage in string format
    localStorage.setItem("meetingLink", JSON.stringify(meetingLinkArray))

    // Clear the input field
    linkInput.value = ""

    console.log(meetingLinkArray + " = meetingLinkArray")
    console.log(localStorage)
})


// To show meeting names in the cards
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
                    <h5 class="card-title">${element}</h5>
                    <p id="meetingLink" class="card-text">text</p>
                    <button id="${index}" onclick="deleteMeeting(this.id)" class="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    `
    })
    let meetingNameElem = document.getElementById("meetings")
    // If meetings exist
    if (meetingNameArray.length != 0) {
        meetingNameElem.innerHTML = cardHTML
    }
    // If there are no meetings
    else {
        meetingNameElem.innerHTML = `<div id="centre">You have no meetings. Add a meeting from above!</div>`
    }

}

// To show link in the cards
function displayMeetingLink() {
    let meetingLink = localStorage.getItem("meetingLink")
    // In case it doesn't exist
    if (meetingLink === null) {
        meetingLinkArray = []
    } else {
        // Else, assign the input to meetingLinkArray
        meetingLinkArray = JSON.parse(meetingLink)
    }

    // Empty at first
    let linkHTML = ""


    meetingLinkArray.forEach(function (element, index) {
        linkHTML = `${element}`
    })
    let meetingLinkElem = document.getElementById("meetingLink")
    // If meetings exist
    if (meetingLinkArray.length != 0) {
        meetingLinkElem.innerHTML = linkHTML
    }
    // If there are no meetings
    else {
        meetingLinkElem.innerHTML = `<div id="centre">You have not entered a link for this meeting.</div>`
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
    // displayMeetingLink()
}
displayMeetingLink()
