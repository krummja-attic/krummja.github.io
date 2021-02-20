from __future__ import annotations

import os
from git import Repo
from getpass import getpass


def main():
    project_dir = os.path.dirname(os.path.abspath(__file__))
    os.environ['GIT_ASKPASS'] = os.path.join(project_dir, 'pass.py')
    os.environ['GIT_USERNAME'] = 'krummja'
    os.environ['GIT_PASSWORD'] = getpass()

    repo_path = os.path.join('/home/krummja/krummja.github.io')
    root = Repo(repo_path)

    current = root.active_branch
    master = root.heads.master
    build = root.heads.build
    develop = root.heads.develop

    if current != develop:
        print(f"Not on Develop! Current branch is {current}. Aborting.")

    root.git.add('.')
    root.git.commit('-m "autocommit :: $(date)"')
    root.git.push()


if __name__ == '__main__':
    main()
