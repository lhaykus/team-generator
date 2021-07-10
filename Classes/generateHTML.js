function generateHTML (answers) {
    switch (answers.role) {
        case "Manager":
            return `
            <div class="col">
              <div class="card h-100 text-white bg-info bg-gradient mb-3">
                <div class="card-body">
                  <h5 class="card-title">${answers.name}</h5>
                  <p class="card-text"> ${answers.role}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Id: ${answers.id}</li>
                    <li class="list-group-item"><a href="#" class="card-link">Email: ${answers.email}</a></li>
                    <li class="list-group-item">Office Number: ${answers.officeNumber}</li>
                  </ul>
              </div>
            </div>
            `;
            
            case "Intern":
                return `
                <div class="col">
                  <div class="card h-100 text-white bg-info bg-gradient mb-3">
                    <div class="card-body">
                      <h5 class="card-title">${answers.name}</h5>
                      <p class="card-text"> ${answers.role}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Id: ${answers.id}</li>
                        <li class="list-group-item"><a href="#" class="card-link">Email: ${answers.email}</a></li>
                        <li class="list-group-item">School Attended: ${answers.school}</li>
                      </ul>
                  </div>
                </div>`;

                case "Engineer":
                    return `
                    <div class="col">
                      <div class="card h-100 text-white bg-info bg-gradient mb-3">
                        <div class="card-body">
                          <h5 class="card-title">${answers.name}</h5>
                          <p class="card-text"> ${answers.role}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Id: ${answers.id}</li>
                            <li class="list-group-item"><a href="#" class="card-link">Email: ${answers.email}</a></li>
                            <li class="list-group-item"><a href="#" class="card-link">Github: ${answers.github}</a>
                          </ul>
                      </div>
                    </div>`;
    }
}

module.exports = generateHTML;
