/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

const gitDefinition =
  ' Git is a version control system to manage changes to a project files and directories. User can keep track of changes and view the project history in snapshots, undo any changes, prevent bugs and loss of progress, and collaborate with others. Through git, the user can duplicate a part of a source code (or "branching") or integrate a part of the code back to the source code (or "merging"). ';

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

const gitHubDefinition =
  " Github is the cloud-based web version of git that allows user to store, maanage, track, and control changes to their code. ";

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE

const gitInitDefinition =
  " git init will initialize git tracking inside the current folder directory.";

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE

const gitCloneDefinition =
  " git clone will make a copy of an existing Git repository.";

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE

const gitStatusDefinition =
  "git status will display the current state/information of the working directory and staging area.";

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE

const gitAddDefinition =
  " git add will add a file or directory to git for tracking.";
const gitAddCode =
  "git add . will add all untracked and tracked files in the current directory to git.";

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE

const gitCommitDefinition =
  " git commit will save a snapshot of the files you are tracking (this is also called staged changes). with git commit, you can also add a message with -m [commit message].";
const gitCommitCode = ' git commit -m "initial commit" ';

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE

const gitPushDefinition =
  " git push will push a copy of the local branch to the remote repo, so from local git repository to Github account.";
