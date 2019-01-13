<template>
  <!-- 商品类型页面 -->
  <div>
    <sub-title subTitle="商品类型"></sub-title>
    <div class="body">
      <!-- 表格标题 -->
      <div class="box-title flex h-center between">
				<span class="font-20">数据列表</span>
				<el-button @click="dialogVisible=true; isAdd=true">添加类型</el-button>
			</div>
      <!-- 表格内容 -->
      <el-table ref="table" :data="tableData" class="mall-table" :header-cell-style="headerStyle" :cell-style="tdStyle">
        <el-table-column label="编号">
					<template slot-scope="scope">{{ scope.row.id }}</template>
				</el-table-column>
        <el-table-column label="类型名称">
					<template slot-scope="scope">{{ scope.row.styleName }}</template>
				</el-table-column>
        <el-table-column label="属性数量">
					<template slot-scope="scope">{{ scope.row.propertyNum }}</template>
				</el-table-column>
        <el-table-column label="参数数量">
					<template slot-scope="scope">{{ scope.row.paramNum }}</template>
				</el-table-column>
        <el-table-column label="设置">
					<template slot-scope="scope">
            <span class="table-btn" >属性列表</span>
						<span class="table-btn">参数列表</span>
          </template>
				</el-table-column>
        <el-table-column label="操作">
					<template slot-scope="scope">
						<span class="table-btn" @click="edit(scope.row)">编辑</span>
						<span class="table-btn" @click="remove(scope.row.id)">删除</span>
					</template>
				</el-table-column>
      </el-table>
      <pagination :showBatch="false" @next="next" :total="total" :pageSize="pageSize"></pagination>
      <el-dialog
      title="添加类型"
      :visible.sync="dialogVisible"
      :append-to-body="true"
      >
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="form">
          <el-form-item label="类型名称" prop="styleName">
            <el-input v-model="ruleForm.styleName"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import subTitle from '@/components/SubTitle'
import pagination from '@/components/Pagination'
import mixin from '@/utils/mixin.js'
import axios from '@/utils/axios.js'
export default {
  name: "Type",
  mixins: [mixin],
  components: {
    subTitle,
    pagination
  },
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      ruleForm: {
        styleName: '',
        id: ''
      },
      rules: {
        styleName: [
          { required: true, message: '请输入类型名称', trigger: 'blur' },
          { max: 20, message: '长度必须小于20个字符', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    this.getList();
  },
  methods: {
    getList () {
      axios.post('/api/merchantGoodsStyle/merchant_goods_style_list_page', {
        currentPage: this.currentPage,
        pageSize: this.pageSize
      }).then((res) => {
        res = res.data.data;
        this.tableData = res.list;
        this.total = res.totalCount;
      })
    },
    edit (data) {
      //这里的data对应表格数据中的scope.row,也就是一个具体商品类型的对象
      this.isAdd = false;
      this.dialogVisible = true;
      this.ruleForm.id = data.id;
      this.ruleForm.styleName = data.styleName;
    },
    //提交表单
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.isAdd) {
            //添加接口
            this.addEdit('/api/merchantGoodsStyle/merchant_goods_type_add')
          } else {
            //编辑接口
            this.addEdit('/api/merchantGoodsStyle/merchant_goods_type_update')
          }
        } else {
          return false;
        }
      })
    },
    addEdit (url) {
      axios.post(url, this.ruleForm).then(() => {
        this.$message.success('操作成功');
        
        this.dialogVisible = false;
        this.getList();
      }, (err) => {
        this.$message.error(err.msg)
      })
    },
    remove (id) {
      console.log(id)
      this.$confirm('确认删除吗').then(() => {
        axios.post('/api/merchantGoodsStyle/merchant_goods_type_delete', {
          id: id
        }).then(() => {
          this.getList();
          this.$message.success('删除成功')  
        }, (err) => {
          this.$message.error(err.msg)
        })
      })
    }
  }
};
</script>

<style lang="scss">
@import '~@/assets/styles/variables.scss'
</style>