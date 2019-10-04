document.getElementById('contact-form').addEventListener('submit', postData);

async function postData(e) {
    e.preventDefault();
    let array = [];
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');

    for (var i = 0; i < checkboxes.length; i++) {
        array.push(checkboxes[i].value)
    }
    let arrStr = array.toString();

    const body = {
        Customer_Name: document.getElementById("name").value,
        Email: document.getElementById("customer-email").value,
        Phone: document.getElementById("customer-phone").value,
        Customer_comments: document.getElementById("comments").value,
        Pref_Contact: document.querySelector('input[name="contact-method"]:checked').value,
        Discovery_Methods: arrStr
    }

    const res = await fetch('http://localhost:8080/contact', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(body)
    })

    console.log(res);

    document.getElementById('contact-form').reset();
}