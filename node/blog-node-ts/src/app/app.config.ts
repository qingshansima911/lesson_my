import dotenv from 'dotenv' //私密数据保险箱
dotenv.config()// 根目录下执行.env 并且添加到process.env对象中
/**
 * 应用配置
 * process 进程对象 程序分配资源的最小单元
 * thread 程序运行的最小单元
 * GPU 显卡 更适合并行计算 css transform 3D canvas 3D
 * CPU 线性计算
 * process.env 环境变量
 * js 前端静态编译 不支持process 
 * @types/process 
 */
export const { APP_PORT } = process.env
// console.log(process.env);

/**
 * 数据库配置
 */
export const {
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE,
} = process.env

export const { ALLOW_ORIGIN } = process.env