<template>
    <div class="panel">
        <div class="panel-title">
            <span>{{title}}</span>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Panel',
        props: ['title']
    }
</script>

<style lang="scss">
@import '~@/assets/styles/variables.scss';
    .panel {
        width: 100%;
        margin-top: 28px;
        background: $side-bar;
        
        box-sizing: border-box;
        .panel-title {
            width: 100%;
            height: 60px;
            padding: 18px 0 0 22px;
            box-sizing: border-box;
            border: 1px solid #b5b5b5;
            border-bottom: 1px solid #b5b5b5;
            span {
                font-size: 24px;
                font-weight: 700;
            }
        }
    }
</style>