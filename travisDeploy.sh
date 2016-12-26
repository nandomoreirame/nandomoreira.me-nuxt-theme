#!/usr/bin/env bash

if [ "${TRAVIS_PULL_REQUEST}" != "false" ]; then
    echo "Not deploying pull request."
    exit
fi

echo -e "\nRunning Travis Deployment"
echo "Setting up Git Access"
openssl aes-256-cbc -K $encrypted_8dc7b52b04c0_key -iv $encrypted_8dc7b52b04c0_iv -in deploy_key.enc -out deploy_key -d
chmod 600 deploy_key

# Add the SSH key so it's used on git commands
eval `ssh-agent -s`
ssh-add deploy_key

HTTPS_URL=$(git config remote.origin.url)
SSH_URL=${HTTPS_URL/https:\/\/github.com\//git@github.com:}
git remote set-url origin "${SSH_URL}"

git config --global user.name ${GH_USER}
git config --global user.email ${GH_EMAIL}

bundle exec rake deploy
