#!/usr/bin/env bash

# WISE Framework Setup consists of deleting .git directory
# and installing depedencies based on the requirements
#
# Please Note that we don't delete .git directory that has other
# remote url than git@github.com:anakraX/wise-framework.git or
# https://github.com/anakraX/wise-framework.git

SETUP_VERSION="1.0.0"
PROJECT_NAME=$1
ORIGIN_URL=$(git remote get-url origin)


if [ -z "$PROJECT_NAME" ]
then
      echo "[!] Project Name is empty, Please Fill it First!"
      exit
fi

echo "WISE Framework Setup $SETUP_VERSION"
echo "[#] Preparing to Setup $PROJECT_NAME"

echo "[#] Editing Manifests"
sed -i -e "s/wise-framework/$PROJECT_NAME/g" "package.json"
if [ -f "package.json-e" ]; then rm "package.json-e"; fi

echo "[#] Deleting .git Folder"
rm -rf .git

echo "[#] Installing Depedencies"
npm install

echo "[#] Setup Done, please do \`git init\` by yourself if neccessary"
echo "[#] use it Wise-ly ;)"