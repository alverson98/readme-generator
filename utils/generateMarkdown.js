// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function generateSection(name, content) {
//name
//content - user response
//return the title combined w/ the response
return `## ${name} 

${content}`
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
  //title
  //description
  generateSection("Description", responses.description);
  //table of contents
  //installation
  generateSection("Installation", responses.install);
  //usage
  generateSection("Usage", responses.usage);
  //license
  //contributing
  generateSection("Contributing", responses.contribute);
  //tests
  generateSection("Tests", responses.test);
  //questions
  
  return `# ${responses.title}
`;
}

module.exports = generateMarkdown;
