<template>
  <div class="add-goods">
    <!-- 内容标题区域 -->
    <div class="main-title">
      <div class="greenbar fl"></div>
      <h5 class="fl">添加商品</h5>
      <button class="flush fr">
        <span class="iconfont">&#xe654;</span> 刷新
      </button>
    </div>
    <div class="content">
      <el-steps :active="stepActive" align-center :space="390">
        <el-step title="选择商品分类"></el-step>
        <el-step title="填写商品信息"></el-step>
        <el-step title="填写商品属性"></el-step>
        <el-step title="选择商品关联"></el-step>
      </el-steps>
      <!-- 步骤一 -->
      <div v-if="stepActive == 0">
        <div class="form-label">基本信息</div>
        <div class="select-category-1">
          <!-- 选择菜单 -->
          <div class="select-box">
            <div class="select-box-form">
              <div class="select-title">选择一级分类</div>
              <ul>
                <li :class="ruleForm.typeId == item.id? 'active' : ''" v-for="item in categoryList" :key="item.id" @click="getCategory(item)"><span>{{item.typeName}}</span><span>></span></li>
              </ul>
            </div>
            <div class="select-box-center">
              <img src="@/assets/images/icon-arrow.png" alt="">
            </div>
            <div class="select-box-form">
              <div class="select-title">选择二级分类</div>
              <ul>
                <li :class="ruleForm.childId == item.id? 'active': ''" v-for="item in childCategoryList" :key="item.id" @click="getChildCategory(item)"><span>{{item.typeName}}</span><span>></span></li>
              </ul>
            </div>
          </div>
          <!-- 当前选择 -->
          <div class="now-choose">
            <p>
              您当前选择的商品类别是：
              <span>{{categoryName || '未选择'}}  </span>
              <span v-show="childCategoryName">>  {{childCategoryName || '未选择'}}</span>
            </p>
          </div>
          <el-button type="primary" class="next-step" @click="submitStep1">下一步，填写商品信息</el-button>
        </div>
      </div>
      <!-- 步骤二 -->
      <div v-if="stepActive == 1">
        <div class="form-label">基本信息</div>
        <div class="form-label" id="stock-label">库存规格</div>
        <div class="select-category-2">
          <el-form :model="ruleForm" :rules="rules" label-width="100px" ref="ruleForm">
            <el-form-item label="商品分类">
              <span class="goods-type">{{categoryName}}  </span>
              <span v-show="childCategoryName" class="goods-type">>  {{childCategoryName}}</span>
            </el-form-item>
            <el-form-item label="商品名称:" prop="goodsName">
              <el-input v-model="ruleForm.goodsName"></el-input>
            </el-form-item>
            <el-form-item label="副标题:" prop="goodsSubtitle">
              <el-input v-model="ruleForm.goodsSubtitle"></el-input>
            </el-form-item>
            <el-form-item label="商品品牌:" prop="brandId">
              <el-select v-model="ruleForm.brandId" placeholder="请选择品牌">
                <el-option v-for="item in brandList" :value="item.id" :label="item.name" :key="item.id"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="商品介绍:" prop="goodsDesc">
              <el-input type="textarea" v-model="ruleForm.goodsDesc"></el-input>
            </el-form-item>
            <el-form-item label="商品货号:" prop="goodsNo">
              <el-input v-model="ruleForm.goodsNo"></el-input>
              <p class="step2-tips">如果您不输入商品货号，系统将自动生成一个唯一的货号</p>
            </el-form-item>
            <el-form-item label="商品售价:" prop="goodsPrice">
              <el-input v-model="ruleForm.goodsPrice" type="number"></el-input>
            </el-form-item>
            <el-form-item label="市场价:" prop="marketPrice">
              <el-input v-model="ruleForm.marketPrice" type="number"></el-input>
            </el-form-item>
            <el-form-item label="商品库存:" prop="goodsStock">
              <el-input v-model="ruleForm.goodsStock" type="number"></el-input>
              <p class="step2-tips">该设置只对单品有效，当商品存在多规格货品时为不可编辑状态，库存数量取决于货品数量</p>
            </el-form-item>
            <el-form-item label="库存预警值:" prop="goodsWarning">
              <el-input type="number" v-model="ruleForm.goodsWarning"></el-input>
            </el-form-item>
            <el-form-item label="计量单位:" prop="goodsUnit">
              <el-input v-model="ruleForm.goodsUnit"></el-input>
            </el-form-item>
            <el-form-item label="商品重量:" prop="goodsWeight">
              <el-input v-model="ruleForm.goodsWeight"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="stepActive = 0">上一步，选择商品分类</el-button>
              <el-button type="primary" @click="submitForm('ruleForm')">下一步，填写商品属性</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <!-- 步骤三 -->
      <div v-if="stepActive == 2">
        <div class="product-property">
          <div class="form-label">商品属性</div>
          <div class="property-content">
            <el-form label-width="100px">
              <el-form-item  label="商品类型：" >
                <el-select v-model="ruleForm.styleId" placeholder="请选择商品类型" @change="getProp">
                  <el-option v-for="item in typeList" :key="item.id" :label="item.styleName" :value="item.id" ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="商品规格：" v-if="propList.length > 0">
                <div class="prop-wrap">
                  <el-checkbox-group v-model="checkProp" v-for="(item,index) in propList" :key="index">
                    <div class="font-14">{{ item.name }}</div>
                    <el-checkbox @change="handleCheckProp(prop,item.name,$event)" :label="item.name + prop" v-for="(prop,index) in item.value" :key="index">{{ prop }}</el-checkbox>
                  </el-checkbox-group>
                  <div>
                    <el-button size="small" type="primary" @click="addProps">添加</el-button>
                  </div>
                </div>
              </el-form-item>
            </el-form>
            <table class="property-table" v-show="propSpecList.length > 0">
              <thead>
                <td v-for="(item,index) in propHeader" :key="index">{{item}}</td>
                <td>销售价格</td>
                <td>商品库存</td>
                <td>库存预警值</td>
              </thead>
              <tbody>
                <tr v-for="(item,index) in propSpecList" :key="index">
                  <td v-for="(val,index) in item.nameValue" :key="index">{{val.value}}</td>
                  <td><el-input v-model="item.goodsSalePrice" size="mini" type="number" :max="99999"></el-input></td>
                  <td><el-input v-model="item.goodsStock" size="mini" type="number" :max="99999"></el-input></td>
                  <td><el-input v-model="item.stockWarning" size="mini" type="number" :max="99999"></el-input></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="product-params">
          <div class="form-label">商品参数</div>
          <table class="goods-table">
            <thead>
              <td>参数类型</td>
              <td>录入参数</td>
            </thead>
            <tbody>
              <tr v-for="(item,index) in paramsList" :key="index">
                <td>{{item.name || item.paramDetailName}}</td>
                <td>
                  <el-select v-model="ruleForm.merchantParamDetailIds.merchantParamDetails[index].specificationsValue" placeholder="请选择商品参数值">
                    <el-option :label="val" :value="val" v-for="(val,index) in item.list" :key="index"></el-option>
                  </el-select>
                </td>
              </tr>
              <tr>
                <td>主材含量</td>
                <td><el-input v-model="ruleForm.merchantParamDetailIds.mainMaterial" size="mini"></el-input></td>
              </tr>
              <tr>
                <td>适用对象</td>
                <td><el-input v-model="ruleForm.merchantParamDetailIds.paramObject" size="mini"></el-input></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="product-photos">
          <div class="form-label">商品相册</div>
          <div class="upload-btn-wrap">
            <label for="upload"><el-button type="primary">上传图片</el-button></label>
            <input @change="uploadGoodImg" type="file" id="upload" accept="image/jpeg,image/png" class="upload-input large">
            <p>最多可以上传5张图片，建议尺寸800*800px</p>
          </div>
        </div>
        <div>
          <div class="form-label">商品详情</div>
          <el-button @click="stepActive = 1">上一步，填写商品信息</el-button>
          <el-button type="primary" @click="stepActive = 3">下一步，选择商品类目</el-button>
        </div>
      </div>
      <!-- 步骤4 -->
      <div v-if="stepActive == 3">
        <div class="form-label">关联类目</div>
        <div class="select-category-1">
          <!-- 选择菜单 -->
          <div class="select-box">
            <div class="select-box-form">
              <div class="select-title">选择一级类目</div>
              <ul>
                <li :class="ruleForm.typeId == item.id? 'active' : ''" v-for="item in headerList" :key="item.id" @click="getCategory(item)"><span>{{item.typeName}}</span><span>></span></li>
              </ul>
            </div>
            <div class="select-box-center">
              <img src="@/assets/images/icon-arrow.png" alt="">
            </div>
            <div class="select-box-form">
              <div class="select-title">选择二级类目</div>
              <ul>
                <li :class="ruleForm.childId == item.id? 'active': ''" v-for="item in childCategoryList" :key="item.id" @click="getChildCategory(item)"><span>{{item.typeName}}</span><span>></span></li>
              </ul>
            </div>
          </div>
          <!-- 当前选择 -->
          <div class="now-choose">
            <p>
              您当前选择的商品类别是：
              <span>{{categoryName || '未选择'}}  </span>
              <span v-show="childCategoryName">>  {{childCategoryName || '未选择'}}</span>
            </p>
          </div>
          <el-button type="default" @click="stepActive = 2">上一步，填写商品属性</el-button>
          <el-button type="primary" class="next-step" @click="submitGood">提交商品</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/utils/axios.js';
export default {
  name: "Add",
  data() {
    //自定义商品库存校验
    let validGoodsStock = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入商品库存'));
      } else if (value > 99999) {
        callback(new Error('商品库存最大值为99999'));
      } else if (value < 0) {
        callback(new Error('商品库存不能小于0'));
      } else {
        callback();
      }
    }
    return {
      stepActive: 0,
      categoryName: '', //一级分类名
      childCategoryName: '',  //二级分类名
      categoryList: [], //一级分类列表
      childCategoryList: [],//二级分类列表
      brandList: [],//品牌列表
      typeList: [],//商品类型列表
      propList: [],//属性列表
      ruleForm: {
        typeId: '',  //一级分类Id
        childId: '',  //二级分类Id
        goodsName: '', //商品名称
        goodsSubtitle: '', //商品副标题
        brandId: '', //商品品牌id
        goodsDesc: '',//商品介绍
        goodsNo: '',//商品货号
        goodsPrice: '',//商品售价
        marketPrice: '',//市场价
        goodsStock: '',//商品库存
        goodsWarning: '',//商品预警值
        goodsUnit: '',//计量单位
        goodsWeight: '',//商品重量
        styleId: '',//商品类型
        merchantSpecifications: [],
        merchantGoodsTypePropertyList: [],
        merchantParamDetailIds: {
          merchantParamDetails: [],
          mainMaterial: '',
          paramObject: ''
        },
        goodsImg: ''//商品图片 
      },
      rules: {
        goodsName: [
          {required: true, message: '请输入商品名称', trigger: 'blur'},
          {max: 20, message: '必须小于20个字符', trigger: 'blur'}
        ],
        goodsSubtitle: [
          {required: true, message: '请输入副标题', trigger: 'blur'},
          {max: 20, message: '必须小于20个字符', trigger: 'blur'}
        ],
        brandId: [
          {required: true, message: '请选择商品品牌', trigger: 'blur'}
        ],
        goodsDesc: [
          {required: true, message: '请输入商品介绍', trigger: 'blur'}
        ],
        goodsPrice: [
          {required: true, message: '请输入商品售价', trigger: 'blur'}
        ],
        goodsStock: [
          {required: true, validator: validGoodsStock, trigger: 'blur'}
        ],
        goodsWarning: [
          {required: true, message: '请输入库存预警值', trigger: 'blur'}
        ]
      },
      checkProp: [],//组件选中属性
      checkPropList: [],//选中属性列表
      propSpecList: [],//商品规格列表
      propHeader: [],//商品表格头
      paramsList: [], //参数列表
      imgList: [],//图片列表
      headerList: [], //一级类目
      childHeaderList: [], //二级类目
      newFormData: {}

    };
  },
  methods: {
    // 提交商品
    submitGood () {
      let formData = JSON.parse(JSON.stringify(this.ruleForm));
      formData.goodsImg = this.imgList.join(',');
      formData.merchantSpecifications = this.checkPropList;
      formData.merchantGoodsTypePropertyList = this.propSpecList;
      console.log(formData)
      axios.post('/api/merchantGoods/merchant_goods_add',formData).then(() => {
        this.$message({
          message: '添加商品成功',
          type: 'success'
        })
        setTimeout(() => {
          this.$router.push('/goods/list');

        },500)
      },(err) => {
        console.log('添加商品失败')
        this.$message(err.msg)
      })


    },
    //上传图片
    uploadGoodImg (file) {
      let files = file.target.files;
      // console.log(files)
      let imgUrl = this.imgList;
      let promiseList = [];
      for (let i=0; i<files.length;i++) {
        if (files[i] == []) {
          continue;
        }
        promiseList.push(this.uploadFiles(files[i]))
      }
      Promise.all(promiseList).then((res) => {
        
        res.map((item) => {
          imgUrl.push(item.imgUrl)
        })
        
        
      },() => {
        this.$message({
          message: '上传失败',
          type: 'error'
        })
      })
    },
    uploadFiles (file) {
      return new Promise((resolve, reject) => {
        let formData = new FormData();
        formData.append('file',file);
        // console.log(formData)
        axios.post('/api/merchant/upload_file',formData,{
          type: 'form',
          file: 'image'
        }).then((res) => {
          // console.log(res)
          resolve({
            imgUrl: res.imgUrl + res.image
          },(error) => {
            this.$message(error);
            reject(error);
          })
        })
      })
    },
    //选取属性
    handleCheckProp (prop, name, $event) {
      // prop--属性值，name--属性名，$event--选中状态(true,false)
      if ($event) {
        if (this.checkPropList.length == 0) {
          this.checkPropList.push({
            name: name,
            value: [prop]
          })
        } else {
          let isExist = false;
          for (let i = 0; i< this.checkPropList.length; i++) {
            if (this.checkPropList[i].name == name) {
              this.checkPropList[i].value.push(prop);
              isExist = true;
              break;
            }
          }
          if (!isExist) {
            this.checkPropList.push({
              name: name,
              value: [prop]
            })
          }
        }
      } else {
        for (let i = 0; i<this.checkPropList.length; i++) {
          if (this.checkPropList[i].name == name) {
            for (let j = 0; j<this.checkPropList[i].value.length; j++) {
              if (this.checkPropList[i].value[j] == prop) {
                this.checkPropList[i].value.splice(j,1);
                if (this.checkPropList[i].value.length == 0) {
                  this.checkPropList.splice(i,1)
                }
                return
              }
            }
          }
        }
      }
      
    },
    //第一步提交
    submitStep1 () {
      if (!this.ruleForm.typeId) {
        this.$message({
          message: '请先选择商品分类',
          type: 'error'
        })
        return;
      }
      this.stepActive = 1;
    },
    //获取分类
    getCategory (data) {

      if (this.ruleForm.typeId != data.id) {
        this.ruleForm.typeId = data.id;
        this.ruleForm.childId = '';
        this.childCategoryList = data.list;
        this.categoryName = data.typeName;
        this.childCategoryName = '';
      }
    },
    //获取二级分类
    getChildCategory (data) {
      if (this.ruleForm.childId != data.id) {
        this.ruleForm.childId = data.id;
        this.childCategoryName = data.typeName;
      }
    },
    //第二步提交
    submitForm (formName) {
      //表单具有validate方法，用于验证是否通过校验
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.stepActive = 2;
        } else {
          return false;
        }
      })
    },
    //选择商品类型后获取属性值
    getProp (val) {
      this.checkProp = [];
      this.checkPropList = [];
      this.propHeader = [];
      this.propSpecList = [];
      axios.post('/api/merchantGoodsProperty/merchant_goods_property_list_page', {
        styleId: val,
        currentPage: 1,
        pageSize: 100
      }).then((res) => {
        res = res.data.data;
        let list = [];
        res.list.map((item) => {
          list.push({
            name: item.propertyName,
            value: item.propertyList.split(',')
          })
        })
        this.propList = list;
        axios.post('/api/merchantGoodsParam/merchant_goods_property_list_page',{
          styleId: val,
          currentPage: 1,
          pageSize: 100
        }).then((res) => {
          let list = [];
          let formList = [];
          res = res.data.data;
          res.list.map((item) => {
            list.push({
              name: item.paramName,
              list: item.paramList.split(',')
            });
            formList.push({
             paramDetailName: item.paramName,
             specificationValue: ''
            })
          })
          this.paramsList = list;
          this.$set(this.ruleForm, 'merchantParamDetailIds', {
            'merchantParamDetails': formList,
            'mainMaterial': '',
            'paramObject': ''
          })
          
        })
        

      })
    },
    //添加属性
    addProps () {
      if (!this.ruleForm.styleId) {
        this.$message({
          message: '请选择商品类型',
          type: 'error'
        })
        return
      }
      if (this.checkPropList.length == 0) {
        this.$message({
          message: '请选择商品属性',
          type: 'error'
        })
        return
      }
      let propHeader = [];
      let propArr = [];
      this.checkPropList.map((item,index) => {
        propHeader.push(item.name);
        propArr[index] = [];
        this.checkPropList[index].value.map((val) => {
          propArr[index].push({
            name: this.checkPropList[index].name,
            value: val
          })
        })
      })
      this.propHeader = propHeader;
      let propItem = sortAll(propArr);
      this.propSpecList = [];
      propItem.map((item) => {
        this.propSpecList.push({
          nameValue: item instanceof Array ? item : [item],
          goodsSalePrice: '',
          goodsStock: '',
          stockWarning: '',
          skuCode: ''
        })
      })
      function sortAll(arr){
          var len = arr.length;
          if(len >= 2){
            var len1 = arr[0].length;
            var len2 = arr[1].length;
            var lenBoth = len1 * len2;
            var items = new Array(lenBoth);
            var index = 0;
            for(var i = 0; i<len1; i++){
              for(var j = 0; j < len2; j++){
                if (arr[0][i] instanceof Array){
                  items[index] = [...arr[0][i],arr[1][j]];
                }else {
                  items[index] = [arr[0][i],arr[1][j]];
                }
                index++;
              }
            }
            var newArr = new Array(len - 1);
            for(let i = 2; i < arr.length; i++){
              newArr[i-1] = arr[i];
            }
            newArr[0] = items;
            return sortAll(newArr);
          }else{
            return arr[0]
          }
        }
    }
  },
  mounted () {
    axios.post('/api/merchantGoodsType/query_goods_type_tree').then((res) => { //获取分类
      res = res.data.data;
      this.categoryList = res;
      axios.post('/api/merchant_goods_brand/query_list').then((res) => {//获取品牌
        res = res.data.data;
        this.brandList = res;
        axios.post('/api/merchantGoodsStyle/merchant_goods_style_list_page', {//获取商品类型
          currentPage: 1,
          pageSize: 100
        }).then((res) => {
          res = res.data.data;
          this.typeList = res.list;
          axios.post('/api/merchantNavigation/query_navigation_type_tree').then((res) => {
            res = res.data.data;
            this.headerList = res;
          })
        })
      })
    })
  }
};
</script>

<style lang="scss">
@import "~@/assets/styles/variables.scss";

.main-title {
  height: 60px;
  background: $side-bar;
  .greenbar {
    width: 14px;
    background: $theme-color;
    height: 28px;
    margin-top: 16px;
  }
  h5 {
    line-height: 60px;
    padding-left: 30px;
    font-size: 22px;
    color: #595757;
  }
  .flush {
    width: 90px;
    height: 42px;
    margin-top: 8px;
    margin-right: 42px;
    font-size: 16px;
    color: #898989;
    background: #f4f5f5;
    border: 1px solid #cbcbcb;
    border-radius: 10px;
    cursor: pointer;
    outline: none;
  }
}
.content {
  width: 90%;
  padding: 20px;
  // 表单标题
  .form-label {
    width: 175px;
    height: 50px;
    line-height: 50px;
    color: #fff;
    background-color: $theme-color;
    position: relative;
    margin-top: 10px;
    margin-right: 100px;
    padding-left: 15px;
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: -50px;
      border: 25px solid transparent;
      border-left-color: $theme-color;
    }
  }
  #stock-label {
    top: 265px;
  }
  // 步骤一盒子
  .select-category-1 {
    width: 880px;
    // background: pink;
    margin-left: 250px;
    margin-top: -25px;
    // 选择盒子
    .select-box {
      display: flex;
      justify-content: space-between;
      .select-box-form {
        width: 380px;
        border: 1px solid #b4b4b4;
        li {
          font-size: 16px;
          display: flex;
          justify-content: space-between;
          padding-right: 20px;
          padding-left: 10px;
          line-height: 50px;
          border-bottom: 1px solid #b4b4b4;
          &:hover {
            cursor: pointer;
          }
        }
        .active {
          color: #fff;
          background: $theme-color;
        }
      }
      .select-box-center {
        padding-top: 210px;
      }
      .select-title {
        padding-left: 10px;
        font-size: 18px;
        color: #5a5a5a;
        font-weight: 700;
        border-bottom: 1px solid #b4b4b4;
        line-height: 50px;
      }
    }
    .now-choose {
      margin-top: 10px;
      span {
        color: $theme-color;
      }
    }
    .next-step {
      margin-top: 10px;
    }
  }
  //步骤二盒子
  .select-category-2 {
    width: 570px;
    min-height: 500px;
    margin-left: 204px;
    margin-top: -100px;
    padding-left: 90px;
    .goods-type {
      font-size: 14px;
      color: $theme-color;
    }
    .step2-tips {
      font-size: 14px;
      line-height: 20px;
    }
  }
  // 步骤三商品属性
  .product-property {
    display: flex;
    .property-content {
      margin-left: 100px;
      margin-top: 20px;
      .property-table {
        td {
          border: 1px solid #ccc;
          padding: 5px;
        }
      }
      
    }
  }
  .product-params {
    margin-top: 10px;
    display: flex;
    .goods-table {
        td {
          border: 1px solid #ccc;
          padding: 10px;
        }
      }
  }
  .product-photos {
    margin-top: 10px;
    display: flex;
    .upload-btn-wrap {
      margin-top: 20px;
      position: relative;
      .upload-input {
        width: 98px;
        height: 40px;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        cursor: pointer;
      }
    }
  }
}
</style>