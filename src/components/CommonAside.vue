<template>
    <div class="aside-wrapper" >
        <div v-for="(item,index) in subMenu" :key="index">
            <h5 class="sub-title">{{item.sub}}</h5>
            <el-menu @select="handleSelect" :router="isRouter">
                <el-menu-item v-for="(subItem,index) in item.menu" 
                :index="subItem.path" 
                :key="index"
                >{{subItem.name}}</el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonAside',
    props: {
        subMenu: Array
    },
    data () {
        return {
            isRouter: true
        }
    },
    methods: {
        handleSelect (index) {
            // console.log(index)
        }
    }
}   
</script>

<style lang="scss">
    
</style>