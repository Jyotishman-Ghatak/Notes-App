# Notes-App
This is a NodeJs command-line application to Create, Read and Delete your notes.
## Getting started
To get the Node app running locally:
- Clone this repo
- `npm install` to install all required dependencies

## Code Overview
### Dependencies
- **yargs:** To build interactive command line tools, by parsing arguments and generating an elegant user interface.
- **chalk:** Terminal string styling.
- **fs:** File system module, to write and read from a file.
### Application Structure
- **app.js:** Entry point of the application. It handels all the commands given in the command line argument and calls the respective functions in note.js.
- **note.js:** It contains function to create, read, delete and list the notes. 
