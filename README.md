# Store-ReactJS

******************************************************************************************************************************************
Git commands
## Get code from GitHub
$git clone https://github.com/ganapathygit/IonicApps.git


## 1. Add origin
$ git remote add origin https://github.com/ganapathygit/IonicApps.git

##2. Add .
$ git add .

##3.Git commit
$ git commit
 Add commit comment then Esc :wq Enter

##4.Git push
$ git push origin master

##5. Add modified files
$ git add files (i.e.README.TXT)

##6. Find status
$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   README.TXT
        modified:   package.json
##7. Find the changes in the file

$ git diff --cached
diff --git a/package.json b/package.json
index b3f0da8..e99e222 100644
--- a/package.json
+++ b/package.json
@@ -1,6 +1,6 @@
 {
   "name": "TheApp",
-  "version": "0.0.1",
+  "version": "0.0.2",
   "author": "Ionic Framework",
   "homepage": "https://ionicframework.com/",
   "scripts": {
******************************************************************************************************************************************