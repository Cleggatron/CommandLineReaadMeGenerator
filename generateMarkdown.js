// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  let licenseString = "";

  switch(license){
    case "Apache License 2.0":
      licenseString = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;

      case "GNU Affero General Public License v3.0":
        licenseString = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
        break;
        
      case "BSD 2-Clause \"Simplified\" License":
        licenseString = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
        break;
      
      case "BSD 3-Clause \"New\" or \"Revised\" License":
        licenseString = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
        break;
      
      case "Boost Software License 1.0":
        licenseString = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
        break;

      case "Creative Commons Zero v1.0 Universal":
        licenseString = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/"
        break;  
        
      case "Eclipse Public License 1.0":
        licenseString = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
        break;
      
      case "GNU General Public License v2.0":
        licenseString = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
        break;

      case "GNU General Public License v3.0":
        licenseString = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        break;

      case "GNU General Public License v3.0":
        licenseString = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        break;
        
      case "MIT License":
      licenseString = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      break;  
      
      case "Mozilla Public License 2.0":
      licenseString = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
      break;

      case "The Unlicense":
      licenseString = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
      break;

      case "None":
      licenseString = "No License Selected"
      break;

      default:
        licenseString = "An error in license selection has occured."
      }

    return licenseString

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  //create our license badge
  let renderedLicenseBadge = renderLicenseBadge(data.license);


  return `# ${data.title}

  https://github.com/${data.username}/${data.title}
  
  ${renderedLicenseBadge}

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
