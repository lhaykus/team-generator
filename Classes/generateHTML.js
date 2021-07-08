function generateHTML (answers) {
    switch (answers.role) {
        case "Manager":
            return `
            <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
              <div class="card text-white bg-primary mb-3">
                <div class="card-body">
                  <h5 class="card-title">${answers.name}</h5>
                  <p class="card-text">Job ${answers.role}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${answers.id}</li>
                    <li class="list-group-item"><a href="#" class="card-link">${answers.email}</a></li>
                    <li class="list-group-item"><a href="#" class="card-link">${answers.officeNumber}</a>
                  </ul>
              </div>
            </div>
            `;
            case "Intern":
                return `
                <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                  <div class="card text-white bg-primary mb-3">
                    <div class="card-body">
                      <h5 class="card-title">${answers.name}</h5>
                      <p class="card-text">Job ${answers.role}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${answers.id}</li>
                        <li class="list-group-item"><a href="#" class="card-link">${answers.email}</a></li>
                        <li class="list-group-item"><a href="#" class="card-link">${answers.school}</a>
                      </ul>
                  </div>
                </div>`;
                case "Engineer":
                    return `
                    <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                      <div class="card text-white bg-primary mb-3">
                        <div class="card-body">
                          <h5 class="card-title">${answers.name}</h5>
                          <p class="card-text">Job ${answers.role}</p>
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
