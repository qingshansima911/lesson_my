import { Context } from 'koa';
import User, { IUser } from '../model/user';

export const getUsers = async (ctx: Context) => {
  // console.log(ctx.user, '------')
  try {
    // 从数据库中获取所有用户
    const users: IUser[] = await User.find();
    ctx.body = users; // 返回用户列表
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
};

export const getUser = async (ctx: Context) => {
  try {
    const userId = ctx.params.id; // 获取要查找的用户 ID
    // 查找用户
    const user: IUser | null = await User.findById(userId);
    if (!user) {
      ctx.status = 404;
      ctx.body = { error: 'User not found' };
      return;
    }
    ctx.body = { user }; // 返回查找到的用户数据
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
};

export const createUser = async (ctx: Context) => {
  try {
    const user = new User(ctx.request.body);
    // console.log(ctx.request.body);
    await user.save();
    ctx.status = 201;
    ctx.body = user;
  } catch (error) {
    ctx.status = 400;
    ctx.body = { error: error.message };
  }
};

export const updateUser = async (ctx: Context) => {
  try {
    const userId = ctx.params.id; // 获取要更新的用户 ID
    const updatedUserData = ctx.request.body as IUser; // 获取更新的用户数据
    // 查找用户
    // console.log(updatedUserData);
    const user: IUser | null = await User.findById(userId);
    // console.log(user);
    if (!user) {
      ctx.status = 404;
      ctx.body = { error: 'User not found' };
      return;
    }
    // 更新用户数据
    user.name = updatedUserData.name;
    user.password = updatedUserData.password;
    // console.log(user);
    // 保存修改后的用户数据
    const updatedUser = await user.save();
    ctx.body = { message: 'User updated successfully' };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
};

export const deleteUser = async (ctx: Context) => {
  try {
    const userId = ctx.params.id; // 获取要删除的用户 ID
    // 删除用户
    const deletedUser: IUser | null = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      ctx.status = 404;
      ctx.body = { error: 'User not found' };
      return;
    }
    ctx.body = { message: 'User deleted successfully' }; // 返回删除成功的消息
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
};
