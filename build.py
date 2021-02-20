from __future__ import annotations

import os
from git import Repo


def main():
    repo_path = os.path.join('/home/krummja/krummja.github.io')
    root = Repo(repo_path)

    current = root.active_branch
    master = root.heads.master
    build = root.heads.build
    develop = root.heads.develop

    if current != develop:
        print(f"Not on Develop! Current branch is {current}. Aborting.")



if __name__ == '__main__':
    main()
