#!/usr/bin/env node

import createProject from '../src/createProject.js';

// Get project name from command line arguments
const args = process.argv.slice(2);
const projectName = args[0];

createProject(projectName);