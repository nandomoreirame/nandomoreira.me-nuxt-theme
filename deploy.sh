#!/usr/bin/env bash
set -e # halt script on error

echo 'Middleman build...'
bundle exec middleman build

cd ${HTML_FOLDER}

# config
git config --global user.email "${GH_EMAIL}"
git config --global user.name "${GH_USER}"

# deploy
git init
git add --all
git commit -m "Deploy to GitHub Pages"
git push --force --quiet "https://${GH_TOKEN}@github.com/${GH_REF}" origin master
