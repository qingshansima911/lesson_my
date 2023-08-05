- npm i openai
- mjs 后缀的js 文件，在新版本node 中原生支持esm  
- apiKey 不能上传到github 采用env  
- openai completion 生成评论的分类，判断评论内容的情绪为正面、中立或者负面，node 工程师就用了机器学习的能力
  AI 标注  
  crud -> AI 分类
  - 推荐

- 多模型时代 可拔插
  - text-davince-003
  - text-davince-edit-001
  - gpt-3.5-turbo  
- 文本补全 text-davince-003
  emoji转移中文 上下文 
- 文本插入 text-davince-003
  前后缀,中间自动补全 
- 文本编辑 text-davince-edit-001
  编辑转换大小写, 专有名词大写 
- 聊天补全 gpt-3.5-turbo  
  - system 角色
  - user 
  - assistant 
  - 上下文语境
    最近的聊天都发送过去  
    token 花销怎么办？ 动态调整的messageList数组 放最近的两三个问题和回复
  
- 微调模型 fine-tuning
  - few-shot-learning 小样本学习
    - prompt 给示例
  - 调参 == 炼丹 Stop sequences