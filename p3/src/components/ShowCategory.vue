<template>
    <div>
        <router-link :to='{ name: "category", params: {"category" : category }}'>
            <div>{{ category }}</div>
        </router-link> 
    </div>
</template>

<script>
export default {
    name: 'ShowCategory',
    props: ['category']
};
</script>