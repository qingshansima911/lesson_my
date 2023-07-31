import { Schema, Document, model } from 'mongoose';

export interface IUser extends Document {
  userName: string;
  password: string;
}

// 模式定义了文档中的字段、类型、默认值、验证规则等。
const userSchema: Schema<IUser> = new Schema({
  userName: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

// 模型是 Mongoose 对数据模型的进一步封装，提供了许多内置方法来进行数据库操作，如查询、插入、更新等。
const User = model<IUser>('User', userSchema);

export default User;