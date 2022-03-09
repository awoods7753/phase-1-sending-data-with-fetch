function submitData(name, email) {
    let values = {
        name: name,
        email: email}
        const configurationObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                 Accept: "application/json",
            },
            body: JSON.stringify(values),
    };
fetch("http://localhost:3000/users", configurationObject)
.then(function (response) {
    return response.json();
  })
  .then(function (object) {
    document.body.innerHTML = object.id
  })
  .catch(function (error) {
    document.body.innerHTML = error.message
  });

}
