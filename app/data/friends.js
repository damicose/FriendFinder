// Need to fold this into a post request or something~~
// Figure out if we're posting and evaluating ("friend finding") in the same function ?? Seems ugly--

// With help from https://stackoverflow.com/questions/7275597/getting-the-selected-radio-without-using-id-but-name

// Empty friends array

const friends = [];


function getNPushValues() {
    document.getElementById("submitBtn").addEventListener("click", function (event) {
        event.preventDefault();
        console.log("You got this far");
        const newEntry = {
            nombre: document.getElementById("nameInput").value ,
            answers: [
                document.querySelector('input[name=inlineRadioOptions1]:checked').value,
                document.querySelector('input[name=inlineRadioOptions2]:checked').value,
                document.querySelector('input[name=inlineRadioOptions3]:checked').value,
                document.querySelector('input[name=inlineRadioOptions4]:checked').value,
                document.querySelector('input[name=inlineRadioOptions5]:checked').value,
                document.querySelector('input[name=inlineRadioOptions6]:checked').value,
                document.querySelector('input[name=inlineRadioOptions7]:checked').value,
                document.querySelector('input[name=inlineRadioOptions8]:checked').value,
                document.querySelector('input[name=inlineRadioOptions9]:checked').value,
                document.querySelector('input[name=inlineRadioOptions10]:checked').value
            ]
        };
        // Not functioning past here, but may need the routes to actually be set up
        // fetching here or express??
        fetch("/api/friends", {
                method: "POST",
                body: JSON.stringify(newEntry),
                headers: {
                    "Content-Type": "application/json"
                },
            })
            .then((res) => res.json())
            .then(function (data) {
                console.log(data);
                alert("Adding entry...");
            });
    })
};

getNPushValues();