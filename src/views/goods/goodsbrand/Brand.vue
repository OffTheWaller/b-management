<template>
  <div>
		<sub-title subTitle="商品品牌"></sub-title>
		<div class="body">
			<!-- 搜索框 -->
			<search-box class="margin-b"></search-box>
			<!-- 表格标题 -->
			<div class="box-title flex h-center between">
				<span class="font-20">数据列表</span>
				<el-button @click="$router.push('/goods/addBrand')">添加品牌</el-button>
			</div>
			<!-- 表格 -->
			<el-table ref="table" class="mall-table" v-loading="loading" :data="tableData" :header-cell-style="headerStyle" :cell-style="tdStyle">
				<el-table-column type="selection" width="55"></el-table-column>
				<el-table-column label="编号">
					<template slot-scope="scope">{{ scope.row.id }}</template>
				</el-table-column>
				<el-table-column label="品牌名称">
					<template slot-scope="scope">{{ scope.row.name }}</template>
				</el-table-column>
				<el-table-column label="品牌首字母">
					<template slot-scope="scope">{{ scope.row.firstChar }}</template>
				</el-table-column>
				<el-table-column label="排序">
					<template slot-scope="scope">{{ scope.row.sorting }}</template>
				</el-table-column>
				<el-table-column label="是否显示">
					<template slot-scope="scope">
						<el-switch v-model="scope.row.isShow" :active-value="1" :inactive-value="0" active-color="#5BC0BF" inactive-color="#ff4949" @change="handleShow($event, scope.row)"></el-switch>
					</template>
				</el-table-column>
				<el-table-column label="相关">
					<template slot-scope="scope">
						<span>商品：{{ scope.row.goodsTotal }}</span>
					</template>
				</el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<span class="table-btn" @click="$router.push('/goods/addBrand?id=' + scope.row.id)">编辑</span>
						<span class="table-btn" @click="remove([scope.row.id])">删除</span>
					</template>
				</el-table-column>
			</el-table>
			<pagination :total="total" :pageSize="pageSize" @next="next"></pagination>
		</div>
	</div>
</template>

<script>
import subTitle from "@/components/SubTitle";
import SearchBox from "@/components/SearchBox";
import Pagination from "@/components/Pagination";
import mixin from '@/utils/mixin';
import axios from '@/utils/axios'
export default {
	name: "Brand",
	mixins: [mixin],
  components: {
		subTitle,
		SearchBox,
		Pagination
	},
	data () {
		return {
			tableData: [],
			name: ''
		}
	},
	mounted () {
		this.getList();
	},
	methods: {
		//是否显示品牌
		handleShow ($event, data) {

		},
		getList () {
			axios.post('/api/merchant_goods_brand/query_for_page', {
				currentPage: this.currentPage,
        pageSize: this.pageSize,
        name: this.name,
			}).then((res) => {
				res = res.data.data;
				this.tableData = res.list;
				this.total = res.totalCount;
			}).finally(() => {
				this.loading = false;
			})
		}
	}
};
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/variables.scss'
</style>
