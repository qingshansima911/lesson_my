import { MemberEntity } from '../model/memberEntity';
// import { members } from './member';
// // 函数约定返回值 Promise 泛型约束

const baseURL:string = 'https://api.github.com/orgs/lemoncode'
// const fetchMembers = (): Promise<MemberEntity[]> => {
//     return Promise.resolve(members)
// }
const mapToMember = (githubMember:any): MemberEntity => {
    return {
        id: githubMember.id,
        login: githubMember.login,
        avatar_url: githubMember.avatar_url
    }
}
// // any 不约束
const mapToMembers = (githubMembers: any[]) => { // githubMembers 有很多我们不要的
    // 把后端接口给我们的不合规范的数据，格式化
    return githubMembers.map(mapToMember)
}
// typescript 在架构上为前端项目引入模型层
export const fetchMembersAsync = (): Promise<MemberEntity[]> => {
    const membersURL = `${baseURL}/members`
    return fetch(membersURL) // Promise<Response>
        .then(response => response.json()) // Any[]
        .then(mapToMembers) // 后端的接口数据满足页面model需要
}
