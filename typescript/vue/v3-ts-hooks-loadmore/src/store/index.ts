import { createStore, Commit } from 'vuex'
import { GlobalDataProps } from '../types'
import { AxiosRequestConfig, axios } from '../api/config'
import { arrToObj, objToArr } from '../utils'
import { StorageHandler, storageType } from '../utils'
const storageHandler = new StorageHandler()

// 通用封装函数
const asyncAndCommit = async (url: string, mutationName: string, commit: Commit,
    config: AxiosRequestConfig = { method: 'get' }, extraData?: any) => {
    const data = await axios(url, config)
    if (extraData) {
        commit(mutationName, { data, extraData })
    } else {
        commit(mutationName, { data })
    }
    return data
}

const store = createStore<GlobalDataProps>({
    state: {
        columns: {
            data: {},
            currentPage: 0,
            total: 0
        },
        token: storageHandler.getItem(storageType, 'token') || '',
        user: {
            isLogin: false
        },
        posts: {
            data: {},
            loadedColumns: {}
        }
    },
    getters: {
        getColumns: (state) => {
            return objToArr(state.columns.data)
        },
        getColumnById: (state) => (id: string) => {
            return state.columns.data[id]
        },
        getPostsByCid: (state) => (cid: string) => {
            return objToArr(state.posts.data).filter(post => post.column === cid)
        },
        getLoadedPost: (state) => (id: string) => {
            return state.posts.loadedColumns[id]
        }
    },
    mutations: {
        fetchColumns(state, rawData) {
            // state.columns = {}
            // console.log(rawData, 'mutations');
            const { data } = state.columns
            const { list, count, currentPage } = rawData.data.data.data
            // console.log(list, count,currentPage);
            state.columns = {
                total: count,
                currentPage: currentPage,
                data: {
                    ...data,
                    ...arrToObj(list)
                }
            }
        },
        fetchColumn(state, rawData) {
            state.columns.data[rawData.data.data.data._id] = rawData.data.data.data
            // console.log(rawData);
        },
        fetchPosts(state, { data: rawData, extraData: columnId }) {
            const { data } = state.posts
            const { list, count, currentPage } = rawData.data.data
            // console.log(list, count, currentPage);
            state.posts.data = { ...data, ...arrToObj(list) }
            state.posts.loadedColumns[columnId] = {
                columnId: columnId,
                total: count,
                currentPage: currentPage * 1
            }
        }
    },
    actions: {
        // 翻页查询
        fetchColumns({ state, commit }, params = {}) {
            const { currentPage = 1, pageSize = 6 } = params
            if (state.columns.currentPage < currentPage) { // 新的数据
                return asyncAndCommit(  // async 请求接口 axios + url , commit mutations
                    `/api/columns?currentPage=${currentPage}&pageSize=${pageSize}`,
                    'fetchColumns', commit)
            }
        },
        fetchColumn({ state, commit }, cid) {
            if (!state.columns.data[cid]) {
                return asyncAndCommit(
                    `/api/columns/${cid}`, 'fetchColumn', commit)
            }
        },
        fetchPosts({ state, commit }, params = {}) {
            const { columnId, currentPage = 1, pageSize = 3 } = params
            const loadedPost = state.posts.loadedColumns[columnId]
            if (!loadedPost) {
                return asyncAndCommit(
                    `/api/columns/${columnId}/posts?currentPage=${currentPage}
                    &pageSize=${pageSize}`, 'fetchPosts', commit, { method: 'get' }, columnId)
            } else {
                const loadedPostCurrentPage = loadedPost.currentPage || 0
                if (loadedPostCurrentPage < currentPage) {
                    return asyncAndCommit(
                    `/api/columns/${columnId}/posts?currentPage=${currentPage}
                    &pageSize=${pageSize}`, 'fetchPosts', commit, { method: 'get' }, columnId)
                }
            }
        }
    }
})

export default store