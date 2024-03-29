// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !=="None"){
        return`![github License](https://img.shields.io/badge/license-${license}-blue.svg)`
    } 
    return ""

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !=="None"){
        return`\n* [License](#license)`
    }
    return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !=="None"){
        return`## License
        this application is licensed under ${license}. 
        `
    }
    return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ${
    renderLicenseBadge(data.license)
  }
  ## Description
  ${data.description}
  ## Table of Contents 

* [Installation](#installation)
${renderLicenseLink(data.license)}
* [Usage](#usage)
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)
## Technologies
 ${data.technologies}
## Installation
${data.installation}
## Usage
${data.usage}
## Deployment
${data.deployment}
## Sources
${data.sources}

${renderLicenseSection(data.license)}


`;
}

module.exports = generateMarkdown;