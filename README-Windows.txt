Windows environment
===================
Required: Node.js 22 (includes npm), Git for Windows, Pandoc.
Java 21 is installed locally for Java tools; Hexo itself does not require Java.

On this machine, double-click windows.cmd to open a configured command prompt.
Or run from PowerShell (no PowerShell script required):
  .\windows.cmd ci
  .\windows.cmd run build
  .\windows.cmd run server

The local portable tools are in the parent directory's .tools folder.
These binaries are not committed. On another computer, install the tools above
and add them to PATH; windows.cmd also works with standard installations.

Branches: hexo contains sources; master contains generated pages.
Only these two branches are needed. Do not create additional backup branches.
From the project directory in Git Bash:
  hexo clean && hexo g && hexo d
This publishes pages to master; it does not push source files to hexo.
To back up source changes separately, while on branch hexo:
  git add -A
  git commit -m "Update blog sources"
  git push origin hexo

On this PC Git uses the existing local proxy for github.com:
  http://127.0.0.1:7897
Keep the proxy application running when publishing or pushing.
If you stop using this proxy, remove the setting with:
  git config --global --unset http.https://github.com/.proxy
GitHub authentication uses HTTPS and Git Credential Manager.
Do not commit access tokens, SSH private keys, or local tool binaries.
