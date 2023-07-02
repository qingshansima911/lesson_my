import { Schema, Document, model } from 'mongoose';

export interface IEmotion extends Document {
  question: string;
  answer: number;
}

// 模式定义了文档中的字段、类型、默认值、验证规则等。
const emotionSchema: Schema<IEmotion> = new Schema({
  question: { type: String, unique: true, required: true, },
  answer: { type: Number, required: true, default: 0 },
});

// 模型是 Mongoose 对数据模型的进一步封装，提供了许多内置方法来进行数据库操作，如查询、插入、更新等。
const Emotion = model<IEmotion>('Emotion', emotionSchema);

export default Emotion;