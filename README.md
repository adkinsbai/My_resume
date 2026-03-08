# 白光宇 · 个人简历

模拟 IC 设计 / 光电混合芯片设计（硅光方向）

---

## 部署到 GitHub Pages（让别人能打开你的简历）

按下面步骤做一次即可。

### 第一步：安装 Git

1. 打开：https://git-scm.com/download/win  
2. 下载并安装，安装时一路「Next」即可。  
3. 安装完成后**关闭并重新打开** Cursor 或终端，再继续下一步。

---

### 第二步：在本地用 Git 提交代码

在 Cursor 里打开终端（`` Ctrl+` `` 或 菜单「终端 → 新建终端」），在项目目录下依次执行：

```bash
cd C:\Users\25030\my-resume

git init
git add .
git commit -m "个人简历网页"
```

---

### 第三步：在 GitHub 上创建仓库

1. 打开：https://github.com/new  
2. 登录你的 GitHub 账号（没有就先注册：https://github.com/join）。  
3. 填写：
   - **Repository name**：填 `my-resume`（或任意英文名，例如 `resume`）。  
   - **Public** 选上。  
   - **不要**勾选 "Add a README file"。  
4. 点击 **Create repository**。

---

### 第四步：把本地代码推送到 GitHub

创建好仓库后，页面上会有一串命令，你只需要在终端里执行下面三行（把 `你的用户名` 换成你真实的 GitHub 用户名）：

```bash
git remote add origin https://github.com/你的用户名/my-resume.git
git branch -M main
git push -u origin main
```

例如你的 GitHub 用户名是 `baiguangyu`，则第一行是：

```bash
git remote add origin https://github.com/baiguangyu/my-resume.git
```

执行 `git push` 时，会弹出浏览器或窗口让你登录 GitHub，按提示完成即可。

---

### 第五步：开启 GitHub Pages

1. 打开你的仓库页面：`https://github.com/你的用户名/my-resume`  
2. 点击顶部 **Settings**（设置）。  
3. 左侧找到 **Pages**。  
4. 在 **Source** 里选择 **Deploy from a branch**。  
5. **Branch** 选 `main`，文件夹选 `/ (root)`，点 **Save**。  
6. 等 1～2 分钟，刷新 Pages 页面，上面会显示你的访问地址，形如：

   **https://你的用户名.github.io/my-resume/**

把这个链接发给别人，别人就能打开你的简历页面。

---

## 以后修改简历后如何更新网页？

在 `my-resume` 目录下改完代码后，在终端执行：

```bash
cd C:\Users\25030\my-resume
git add .
git commit -m "更新简历"
git push
```

推送后等一两分钟，再打开上面的 Pages 链接，就能看到更新后的内容。
