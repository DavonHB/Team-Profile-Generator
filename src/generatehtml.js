// create manager card
const generateManager = function (manager) {
    return `
    <div class="col-3 mt-5">
        <div class="card">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="material-icons">content</i>
            </div>
            
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

//create engineer card
const generateEngineer = function (engineer) {
    return `
    <div class="col-3 mt-5">
        <div class="card">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="material-icons">content</i>
            </div>
            
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: ${engineer.github}</p>
            </div>
        </div>
    </div>
    `;
}

//create intern card
const generateIntern = function (intern) {
    return `
    <div class="col-3 mt-5">
        <div class="card">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="material-icons">content</i>
            </div>
            
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
}

//push array to page
generateHTML = (data) => {
    //array for cards
    pageArray = []

    for(let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();
        //call roles
        if(role === 'Manager') {
            const managerCard = generateManager(employee);
            pageArray.push(managerCard);
        }

        if(role ==="Engineer") {
            const engineerCard = generateEngineer(employee);
            pageArray.push(engineerCard);
        }

        if(role === 'Intern') {
            const internCard = generateIntern(employee);
            pageArray.push(internCard);
        }
    }

    //join strings
    const employeeCards = pageArray.join('')

    //return to generated page
    return generateTeamPage(employeeCards)
}

//generate HTML page
const generateTeamPage = function (employeeCards) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>
    <header>
        <nav class="navbar" id="navabar">
            <span class="mb-2 h1 w-200" id="navbar-text">Team Profile</span>
        </nav>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center" id="team-cards">
                <!-- Team Cards -->
                ${employeeCards}
            </div>
        </div>
    </main>
    
</body>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</html>
    `;
}

//exports
module.exports = generateHTML;