function generateHTML (answers) {
    switch (answers.role) {
        case "Manager":
            return `
            <div class="col">
              <div class="card h-100 text-white bg-primary mb-3">
                <div class="card-body">
                  <h5 class="card-title">${answers.name}</h5>
                  <p class="card-text"> ${answers.role}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${answers.id}</li>
                    <li class="list-group-item"><a href="#" class="card-link">${answers.email}</a></li>
                    <li class="list-group-item">${answers.officeNumber}</li>
                  </ul>
              </div>
            </div>
            `;
            
            case "Intern":
                return `
                <div class="col">
                  <div class="card h-100 text-white bg-primary mb-3">
                    <div class="card-body">
                      <h5 class="card-title">${answers.name}</h5>
                      <p class="card-text"> ${answers.role}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${answers.id}</li>
                        <li class="list-group-item"><a href="#" class="card-link">${answers.email}</a></li>
                        <li class="list-group-item">${answers.school}</li>
                      </ul>
                  </div>
                </div>`;

                case "Engineer":
                    return `
                    <div class="col">
                      <div class="card h-100 text-white bg-primary mb-3">
                        <div class="card-body">
                          <h5 class="card-title">${answers.name}</h5>
                          <p class="card-text"> ${answers.role}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${answers.id}</li>
                            <li class="list-group-item"><a href="#" class="card-link">${answers.email}</a></li>
                            <li class="list-group-item"><a href="#" class="card-link">${answers.github}</a>
                          </ul>
                      </div>
                    </div>`;
    }
}

module.exports = generateHTML;
