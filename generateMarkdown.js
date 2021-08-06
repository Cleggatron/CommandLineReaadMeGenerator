// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  let licenseBadge = "test";
  return `# ${data.title}

  https://github.com/${data.username}/${data.title}
  
  ${licenseBadge}

  ## Description

  ${data.description}

  ## Table Of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ![File In Action](${data.usageScreenshot})

  ${data.usage}

  ## Credits

  Other Contributors: 
  ${data.contributors}

  Third Party Technologies:
  ${data.technology}

  ## License

  ${data.license}

  ## Questions

  If you have any questions you can contact me at the below email address:
  ${data.emailAddress}

  You can also find me at my Github:
  https://github.com/${data.username}


`;
}

module.exports = generateMarkdown;
