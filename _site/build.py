from __future__ import annotations

import os
from git import Repo

def main():
    print("Building blog...")
    os.system("bundle exec jekyll build")

    repo_path = os.path.join('/home/krummja/krummja.github.io')
    repo = Repo(repo_path)

    current = repo.active_branch
    master = repo.branches['master']
    build = repo.branches['build']
    develop = repo.branches['develop']

    if current != develop:
        print(f"Not on Develop! Current branch is {current}. Aborting.")

    print("Staging branch 'develop' and pushing to remote...")
    repo.git.add('_site')
    repo.git.add('build.py')
    repo.git.commit('-m "autocommit :: $(date)"')

    base = repo.merge_base(develop, build)

    repo.index.merge_tree(build, base=base)
    repo.index.commit("Merging branch 'develop' >> branch 'build'.",
                      parent_commits=(develop.commit, build.commit))

    build.checkout(force=True)

if __name__ == '__main__':
    main()
