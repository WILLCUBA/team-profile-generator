const generateCard = function(employees) {
    employees.forEach(element => {
        `    
        <div class="card text-white bg-primary mb-3 p-0" style="max-width: 18rem;">
        <h5 class="card-title">${element.name}</h5>
        <h6 class="card-subtitle mb-2 text-white">${element.role}</h6>
        <div class="card-body bg-light text-dark">
                <ul class="list-group list-group-flush bg-white">
                    <li class="list-group-item">${element.id}</li>
                    <li class="list-group-item">${element.email}</li>
                    <li class="list-group-item">${element.officeNu}</li>
                </ul>
            </div>
        </div>
        `
    });
}

const generateTemplate = function(employees) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Team Profile</title>
</head>
<body class="bg-primary">
    <div class="container d-flex justify-content-around">
        ${generateCard(employees)}
    </div>
</body>
</html>
`
}
