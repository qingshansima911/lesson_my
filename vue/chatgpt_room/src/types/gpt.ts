export interface ChatMessage {
  // openAI 文本AI
  // 三种 角色 system系统 openai assistant助理 
  // ts的联合类型
  role: "user" | "assistant" | "system"
  content: string
}