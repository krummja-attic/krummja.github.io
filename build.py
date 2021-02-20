from __future__ import annotations

import os
from git import Repo

def main():
    print("Building blog...")
    os.system("bundle exec jekyll build")

    repo_path = os.path.join('/home/krummja/krummja.github.io')
    root = Repo(repo_path)

    current = root.active_branch
    master = root.heads.master
    build = root.heads.build
    develop = root.heads.develop

    if current != develop:
        print(f"Not on Develop! Current branch is {current}. Aborting.")

    print("Staging branch 'develop' and pushing to remote...")
    root.git.add('_site')
    root.git.add('build.py')
    root.git.commit('-m "autocommit :: $(date)"')

    print("Switching to branch 'build'...")
    root.git.checkout('build')

    print("Merging branch 'develop' >> branch 'build'...")
    root.git.merge('develop -m "automerge :: $(date)""')

if __name__ == '__main__':
    main()
