<script setup>
</script>

<template>
    <header class="navigation navigation--primary sticky top-0 z-[100] backdrop-blur">
        <el-menu class="navigation__menu px-4 font-bold" mode="horizontal" :default-active="$route.path" router
            background-color="hsl(var(--monza-600))" text-color="#ffffff" active-text-color="hsl(var(--tree-poppy-50))"
            active-color="hsl(var(--tree-poppy-50))">
            <el-menu-item index="/">Home</el-menu-item>
            <el-menu-item index="/about">About</el-menu-item>
            <el-sub-menu index="/services">
                <template #title>Services</template>
                <el-menu-item index="/services/import-distribution">Import & Distribution</el-menu-item>
                <el-menu-item index="/services/oem">OEM / Private Label</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="/products">Products</el-menu-item>
            <el-menu-item index="/industries">Industries</el-menu-item>
            <el-menu-item index="/certifications">Certifications</el-menu-item>
            <el-menu-item index="/blog">Blog</el-menu-item>
            <el-menu-item index="/contact">Contact</el-menu-item>
        </el-menu>
    </header>
</template>

<style scoped>
.el-menu-item:hover {
    background-color: hsl(var(--monza-600)) !important;
    color: #fff;
}

.el-menu-item:focus {
    background-color: hsl(var(--monza-600)) !important;
    color: #fff;
}
</style>