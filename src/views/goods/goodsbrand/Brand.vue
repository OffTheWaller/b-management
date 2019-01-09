<template>
  <div>
		<sub-title subTitle="商品品牌"></sub-title>
		<div class="body">
			<search-box></search-box>
		</div>
	</div>
</template>

<script>
import subTitle from "@/components/SubTitle";
import SearchBox from "@/components/SearchBox";
export default {
  name: "Brand",
  components: {
		subTitle,
		SearchBox
  }
};
</script>

<style lang="scss" scoped>

</style>