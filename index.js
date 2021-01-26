let nameButton = document.getElementById("addButton")
displayNotes()

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
                    <button href="#" class="btn btn-primary">Delete</button>
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
        meetingNameElem.innerHTML = `You have no meetings. Add a meeting from above!`
    }
    
}