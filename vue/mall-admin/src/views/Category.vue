<template>
    <el-card class="category-container">
        <template #header>
            <div class="header">
                <el-button type="primary" :icon="Plus" @click="handleAdd">增加</el-button>
                <el-popconfirm
                    confirmButtonText="确定"
                    cancelButtonText="取消"
                    @click="handleDelete"
                    title="确认要删除吗？">
                    <template #reference>
                        <el-button type="danger" :icon="Delete">批量删除</el-button>
                    </template>
                </el-popconfirm>
            </div>
        </template>
        <el-table   
            :data="state.tableData"
            style="width:100%"
            tooltip-effect="dark"
            ref="multipleTable">
            <el-table-column
                width:55
                type="selection">
            </el-table-column>
            <el-table-column
                label="分类名称"
                prop="categoryName">
            </el-table-column>
            <el-table-column
                label="排序值"
                width="120"
                prop="categoryRank">
            </el-table-column>
            <el-table-column
                label="添加时间"
                width="200"
                prop="createTime">
            </el-table-column>
            <el-table-column
                label="操作"
                width="220">
                <template #default="scope">
                    <a @click="handleEdit(scope.row.categoryId)">修改</a>
                    <a @click="handleNext(scope.row)">下级分类</a>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            @current-change="changePage"
            :current-page="state.currentPage"
            :page-size="state.pageSize"
            :total="state.total"
            layout="prev, pager, next"
            background>

        </el-pagination>
    </el-card>
</template>

<script setup>
// npm i @element-plus/icons-vue
import { Plus, Delete } from '@element-plus/icons-vue'
import { ref, reactive, onMounted } from 'vue'
import { getCategoryData } from '@/service/category.js'
import { useRouter, useRoute } from 'vue-router';

const router = useRouter()
const route = useRoute()
const multipleTable = ref(null)
const state = reactive({
    tableData: [],
    currentPage: 1, // 当前页面
    pageSize: 10,
    total: 0, // 总条数
    level: 1,
    parent_id: 0
})
onMounted(() => {
    getCategory()
})
const getCategory = async () => {
    const { level = 1, parent_id = 0 } = route.query
    try {
        const { data } = await getCategoryData({
            params: {
                pageNumber: state.currentPage,
                pageSize: state.pageSize,
                categoryLevel: level,
                parentId: parent_id
            }
        })
        // console.log(data);
        state.tableData = data.list
        state.total = data.totalCount
        state.currentPage = data.currPage
    } catch (err) {
        
    }
}
const handleAdd = () => {
    
}
const handleDelete = () => {
    
}
const handleEdit = (id) => {
    // console.log(id);
}
const handleNext = (item) => {
    const levelNumber = item.categoryLevel + 1
    router.push({
        name: `level${levelNumber}`,
        query: {
            level: levelNumber,
            parent_id: item.categoryId
        }
    })
}
router.afterEach(to => {
    if (['category', 'level2', 'level3'].includes(to.name)) {
        getCategory()
    }
})
const changePage = (val) => {
    state.currentPage = val
    // console.log(val);
    getCategory()
}

</script>

<style lang="stylus" scoped>

</style>