# jira-timesheet

Desktop application in electron for fetching timesheet from jira worklogs and connect them to issue numbers for logged in user.

## Used technologies:
 1. Electron https://electronjs.org/
 2. React: https://reactjs.org/
 3. Bootstrap https://react-bootstrap.github.io/
 4. Jira connector: https://www.npmjs.com/package/jira-connector

## scripts

 - `build-main` - build main.ts - entry electron file
 - `build-renderer` - build renderer (react application) to dist folder
 - `build`: build everything
 - `start-renderer-dev` - starts react application for development at port 2003
 - `start-main-dev` - starts electron application for development
 - `start-dev` - starts electron application and opens localohost:2003 in it. Main script used for development.
 - `prestart` - allias for build
 - `start` - starts electron with build files 
 - `lint` - run linter
 - `pack` - build executable