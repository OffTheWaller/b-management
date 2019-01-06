export default {
  data () {
    return {
      //表格读取
      loading: true,
      currentPage: 1,
      pageSize: 10,
      pageCount: 0,
      total: 0

    }
  },
  methods: {
    //上传图片
    uploadFile (file) {
      return new Promise((resolve,reject) => {
        if (file.target.files.length > 0) {
          let formData = new FormData();
          formData.append('file', file.target.files[0]);
          axios.post('/api/merchant/upload_file', formData, {
            type: 'form',
            file: 'image'
          }).then((res) => {
            res = res.data.data;
            resolve({
              imgUrl: res.imgUrl +res.image
            });
          }, (err) => {
            this.$message({
              message: err.msg,
              type: 'error'
            });
            reject(err);
          })
        }
      })
    },
    //表头样式
    headerStyle() {
      return {
        color: '#595757',
        background: '#F6F6F6',
        fontSize: '15px',
        borderLeft: '1px solid #b4b4b4',
        borderTop: '1px solid #b4b4b4',
        textAlign: 'center'
      }
    },
    //表格样式
    tdStyle() {
      return {
        color: '#595757',
        fontSize: '15px',
        borderLeft: '1px solid #b4b4b4',
        borderTop: '1px solid #b4b4b4',
        textAlign: 'center'
      }
    },
  }
}