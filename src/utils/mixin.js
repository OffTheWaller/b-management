export default {
  data () {
    return {
      loading: true,//表格读取
      currentPage: 1,
      pageSize: 10,
      pageCount: 0,
      total: 0,
      isAdd: true //s
    }
  },
  methods: {
    //分页下一页
    next ($event) {
      this.currentPage = $event;
      this.getList();
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