// Creating License Badges
function generateLicenseBadge(licenses) {
  if (licenses.length === 0) {
    return "";
  } else {
    var licenseMarkdown = "";

    licenses.forEach((licenseChoice) => {
      console.log(JSON.stringify(licenseChoice));
      licenseMarkdown += `[![License: ${licenseChoice.licenseName}](${licenseChoice.badgeImageURL})](${licenseChoice.licenseLink}) `;
    });
    return licenseMarkdown;
  }
}

// Creating sections with only title & content - description, installation, usage, contributing, & tests
function generateSection(name, content) {
  return `## ${name} 

${content}`;
}

// Creating title
function generateTitle(content) {
  return `## ${content}`;
}

// Creating TOC
function generateTableOfContents(name) {
  return `## ${name}

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)`;
}

// Creating license section
function generateLicenseSection(name, licenses) {
  if (licenses.length === 0) {
    return "";
  } else {
    var licenseSectionContent = "";

    licenses.forEach((licenseChoice) => {
      licenseSectionContent += `
- ${licenseChoice.licenseName}`;
    });

    return `## ${name}
This project has the following license(s)
${licenseSectionContent}`;
  }
}

//Creating question/contact section
function generateQuestionSection(
  name,
  fullName,
  email,
  gitHub,
  contactInstructions
) {
  return `## ${name}

${contactInstructions}

${fullName}

Email: ${email}
 
GitHub Profile: [Link](${gitHub})
`;
}

//Creating README file content
function generateMarkdown(responses) {
  return `${generateLicenseBadge(responses.licenses)}
  
  ${generateTitle(responses.title)}

  ${generateSection("Description", responses.description)}

${generateTableOfContents("Table of Contents")}

${generateSection("Installation", responses.install)}

${generateSection("Usage", responses.usage)}

${generateLicenseSection("Licenses", responses.licenses)}

${generateSection("Contributing", responses.contribute)}

${generateSection("Tests", responses.test)}

${generateQuestionSection(
  "Questions",
  responses.fullName,
  responses.email,
  responses.gitHub,
  responses.contactInstructions
)}
  `;
}

module.exports = generateMarkdown;
