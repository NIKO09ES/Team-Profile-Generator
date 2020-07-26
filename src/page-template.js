

module.exports.generators = {
  manager: ({ name, id, email, officeNumber }) => {
    return `
          <div class="card col-3 border border-info" style="width: 18rem;">
                <div class="card-header p-3 mb-2 bg-primary text-white text-center">
                    <h2>${name}</h2>
                    </br>
                    <i class="icon large material-icons">business_center</i>
                    <span>Manager</span>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: ${email}</li>
                    <li class="list-group-item">Office Number: ${officeNumber}</li>
                </ul>
              </div>
      `;
  },
  // Create the project section
  engineer: ({ name, id, email, github }) => {
    return `
          <div class="card col-3 border border-info" style="width: 18rem;">
                <div class="card-header p-3 mb-2 bg-primary text-white text-center">
                    <h2>${name}</h2>
                    </br>
                    <i class="icon large material-icons">laptop_mac</i>
                    <span>Engineer</span>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: ${email}</li>
                    <li class="list-group-item">GitHub: ${github}</li>
                </ul>
              </div>
      `;
  },

  // create the about section
  intern: ({ name, id, email, school }) => {
    return `
        <section class="my-3" id="intern">
          <div class="flex-row justify-space-between">
          <div class="card  col-3 border border-info" style="width: 18rem;">
                <div class="card-header p-3 mb-2 bg-primary text-white text-center">
                    <h2>${name}</h2>
                    </br>
                    <i class="icon large material-icons">school</i>
                    <span>Intern</span>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: ${email}</li>
                    <li class="list-group-item">School: ${school}</li>
                </ul>
              </div>
          </div>
        </section>
      `;
  }
}
// destructure page data by section

module.exports.generatePage = html => {
  return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile Generator</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <div class="flex-row justify-space-between py-3">
          <h1 class="page-title text-center text-light bg-dark py-2 px-3">My Team</h1>
        </div>
      </header>
      <main class="container my-5">
        <div class="row">
            ${html}
        </div>  
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; 2020 by Nicolas Esquivel</h3>
      </footer>
    </body>
    </html>
    `;
}
