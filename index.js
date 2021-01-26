let nameButton = document.getElementById("addButton")

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
    nameInput = ""
    console.log(meetingNameArray + " = meetingNameArray")
    console.log(localStorage)
    displayNotes()
})

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
    
}