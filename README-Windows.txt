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
GitHub authentication uses HTTPS and Git Credential Manager.
Do not commit access tokens, SSH private keys, or local tool binaries.
