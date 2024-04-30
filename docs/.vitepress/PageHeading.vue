<template>
    <div class="page-header">
        <div class="tags">
            <span v-for="(tag, index) in tags" :key="index">
                <Badge type="tip" :text="tag" />
            </span>
        </div>
        <div class="create-time">
            <span>创建时间：</span>
            <Badge type="tip" :text="createTime" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tags: Array,
        createTime: String,
    },
};
</script>

<style>
/* Add your styles here */
</style>
