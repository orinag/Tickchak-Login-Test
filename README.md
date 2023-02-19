# Tickchak-Login-Test



This is a test suite for Tikchak Login page. It includes end-to-end tests written with Cypress.

## Getting Started

To get started, you will need to clone this Git repository:

git clone https://github.com/orinag/Tickchak-Login-Test.git

Once you have cloned the repository, you can install the required dependencies by running:

npm install

## Running Tests with npx

To run the tests with `npx`, you can use the following command:

npx cypress open



This will open the Cypress Test Runner, where you can select and run the tests you want to execute. You can also run the tests headlessly by running the following command:

npx cypress run



This will run all of the tests in the suite in headless mode.


## Running Tests with Docker

To run the tests with Docker, you will need to have Docker installed on your machine. Once you have Docker installed, you can use the following command to run the tests in a Docker container:

for linux:
docker run -it -v $PWD:/e2e -w /e2e cypress/included:12.6.0 npm run cypress:runDefault

for windows:
docker run -it -v %cd%:/e2e -w /e2e cypress/included:12.6.0 npm run cypress:runDefault



This command will start a new Docker container based on the `cypress/included:12.6.0` image, and will mount the current working directory as a volume in the container at the `/e2e` path. The `-w` flag sets the working directory in the container to `/e2e`. The `npm run cypress:runDefault` command will execute the `cypress:runDefault` script defined in the `package.json` file, which should run the Cypress tests.

Note that if your tests require a specific environment or configuration, you can create a `cypress.config.js` file in the root of the project to specify these settings. You can also pass in environment variables to the Docker container using the `-e` flag, like so:

docker run -it -v %cd%:/e2e -w /e2e -e MY_ENV_VAR=value cypress/included:12.6.0 npm run cypress:runDefault


## Configuration

You can configure the tests by editing the `cypress.config.js` file in the root of the project. For more information on configuration options, please see the Cypress documentation.

## Contributing

If you find a bug or would like to contribute to this test suite, please open a pull request or issue on the GitHub repository. Thank you for your contributions!
