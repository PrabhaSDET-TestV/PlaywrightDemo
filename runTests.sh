#!/bin/bash
npm run e2e
allure generate ./allure-results --clean
allure open ./allure-report
