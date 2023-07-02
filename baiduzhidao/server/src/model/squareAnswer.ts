import mongoose, { Schema, Document, model } from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

export interface ISquareAnswer extends Document {
  user: string;
  question: string;
  comments: string;
}

// 模式定义了文档中的字段、类型、默认值、验证规则等。
const squareAnswerSchema: Schema<ISquareAnswer> = new Schema({
  user: { type: ObjectId, ref: 'User' },
  question: { type: ObjectId, ref: 'Square' },
  comments: { type: ObjectId, ref: 'SquareComment' },
});

// 模型是 Mongoose 对数据模型的进一步封装，提供了许多内置方法来进行数据库操作，如查询、插入、更新等。
const SquareAnswer = model<ISquareAnswer>('SquareAnswer', squareAnswerSchema);

export default SquareAnswer;