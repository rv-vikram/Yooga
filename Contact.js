// For Validation of Form Details
function validate(e) {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let name = document.getElementById('name').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    let t1 = false, t2 = false, t3 = false, t4 = false;
    if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email)) {
        t1 = true;
    } else {
        document.getElementById('error2').style.visibility = 'visible';

    }
    if (/^[a-z ]+$/i.test(name)) {
        t2 = true;
    } else {
        document.getElementById('error1').style.visibility = 'visible';

    }
    if (subject == "") {
        document.getElementById('error3').style.visibility = 'visible';
    } else {
        t3 = true;
    }
    if (message == "") {
        document.getElementById('error4').style.visibility = 'visible';
    } else {
        t4 = true;
    }

    if (t1 && t2 && t3 && t4) {

        /*
            DETAILS TO BE PUSHED TO THE SERVER
        */

        let results = document.getElementById("results");
        results.innerHTML = '<img src="./public/spin.gif" alt="spinner">';

        setTimeout(() => {
            results.innerHTML = 'Submitted!';
        }, 1500);
        setTimeout(() => {
            results.innerHTML = '';
            document.getElementById("email").value = '';
            document.getElementById("name").value = '';
            document.getElementById("subject").value = '';
            document.getElementById("message").value = '';
        }, 3000);

    }
}

function inputCheck(err) {
    if (err == 1) {
        document.getElementById('error1').style.visibility = 'hidden';

    } else if (err == 2) {
        document.getElementById('error2').style.visibility = 'hidden';

    } else if (err == 3) {
        document.getElementById('error3').style.visibility = 'hidden';

    } else {
        document.getElementById('error4').style.visibility = 'hidden';

    }
}

//For Hamburger
function ham() {
    let links = document.getElementById("links");
    if (links.style.display === "flex") {
        links.style.display = "none";
    } else {
        links.style.display = "flex";
    }
}