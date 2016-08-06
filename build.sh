#!/bin/sh

cleancss -o css/style.min.css css/style.css

read -p "Commit message: " commitMessage
git commit -am "$commitMessage"

read -p "Do you want to add tag? (y/n)" answer
case $answer in
  y)
    git tag
    read -p "Tag Version: " tagVersion
    read -p "Tagging Message: " taggingMessage
    git tag -a $tagVersion -m "$taggingMessage"
    git push --tags
    ;;
  n)
    ;;
  *)
    ;;
esac

git push

git checkout gh-pages
git rebase master
git push origin gh-pages
git checkout master