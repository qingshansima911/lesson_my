# 了解chatgpt openai sdk, 正在学习使用chatgpt协同开发   

- prompt 工程师  
    角色 任务  
    - 编程token
      - 写一个xx 程序  
      - title 的属性值后面加上字符串'-->'
      - 替换成
      - 生成一个名为xx 的文件
      - 写入data 目录
      - script setup composition api
- 跨技能点 成长 后端 运维  
- 高效面试  

- git协作
    1. 看代码规范 eslint
    2. git clone项目代码
    3. 配环境 node mysql ...
        docker   
        本地开发环境  远程上线环境  
        git diff 本地代码和master的区别  
        不能再master上写代码  
    4. git checkout -b qingshansima911 
        在自己的分支上写代码  
    5. git checkout master  git merge qingshansima911    
    6. git pull orgin master
        本地master和新的master有冲突  
        git diff   
        解决冲突  
    7. git push origin master 

- chatGPT generative pre-trained transformer 
  prompt 提示  
  token   
  model 人工智能模型  
  completion 完成  
  POST https://api.openai.com/v1/completions  
  API Key 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    
  {  
    "model":"text-davinci-003",  
    "prompt":"写一首描述春天的诗歌",  
    "temperature":0.7,  
    "max_tokens":256  
  }  
  
  {
    "warning": "This model version is deprecated. Migrate before January 4, 2024 to avoid disruption of service. Learn more https://platform.openai.com/docs/deprecations",
    "id": "cmpl-7iatizTDCoVTt2LKeVCnkEYKnuAIy",
    "object": "text_completion",
    "created": 1690862622,
    "model": "text-davinci-003",
    "choices": [
      {
        "text": "\n\n春回大地，\n百花烂漫，\n春风拂柳，\n绿叶绽放。\n\n山峰碧绿，\n春雨淅沥，\n桃花红粉，\n柳絮细密。\n\n太阳照耀，\n春意满溢，\n百草生长，\n枝叶葱郁。\n\n游子归来，\n欢歌心情，\n春天春气，\n天地欢喜。",
        "index": 0,
        "logprobs": null,
        "finish_reason": "stop"
      }
    ],
    "usage": {
        "prompt_tokens": 19,
        "completion_tokens": 216,
        "total_tokens": 235
    }
  }