- git init
- git add readme.md 多次添加暂存区
- git add git/ 添加文件夹
- git commit -m 'reason' 一次性提交
- git log --oneline 提交记录
- git reset --hard head^ 月光宝盒
- git status 当前仓库状态
- git pull origin master 拉下来
- git push origin master 提交到远程仓库
- git diff 有什么不一样的地方

- Git 是什么呢？
    代码的管理软件，版本控制能力
    1. 提交到github，电脑坏了
        多个地方存 本地仓库 .git
        远程仓库 github/gitee 代码安全 还有多人协作
    2. 一个文件，反复修改，文件的版本
        精细化到你这一次改了哪一行

    将项目变成支持版本控制项目
        git init
        - .git 隐藏目录
            文件的每一次修改 ， 都像跑照片一样放到 .git 目录下
            专业的 不要乱动
        - 默认仓库 master
        - 支持随时查看一个文件的任何版本 很重要
        - .git 本地仓库     2步骤 慎重
            超市 把东西放到购物车 在提交付费
            git add readme.md   暂存区
            git commit -m 'add readme.md'   仓库
        - git log 提交的版本 
            git log --oneline 
            hashID 唯一值 git config --global user.name "qingshansima911"
            master 默认仓库
            head 指针指向最后一次提交
            git reset --hard HEAD^ 返回上一次版本
            git reset --hard hashID前4个值 回到任意版本
        - git status 当前仓库的状态
        - git reflog 所有的版本
        - git diff 写入缓存与已修改但尚未写入缓存的不同

    git remote add origin https://github.com/qingshansima911/learn_git.git
    git push origin master 
    将github里面的保存,origin是远程仓库的地址
