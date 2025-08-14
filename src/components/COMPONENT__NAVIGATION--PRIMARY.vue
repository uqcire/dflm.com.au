<script setup>
const props = defineProps({
    mode: { type: String, default: 'horizontal' },
    backgroundColor: { type: String, default: '' },
    textColor: { type: String, default: '' },
    activeTextColor: { type: String, default: '' }
})
</script>

<template>
    <nav class="navigation navigation--primary px-4" role="navigation" aria-label="Primary">
        <el-menu class="navigation__menu" :mode="mode" :default-active="$route.path" router
            :background-color="backgroundColor || 'hsl(var(--monza-600))'" :text-color="textColor || '#ffffff'"
            :active-text-color="activeTextColor || 'hsl(var(--tree-poppy-50))'">
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
    </nav>
</template>

<style scoped>
.el-menu--horizontal.el-menu {
    border-bottom: none;
}

.el-menu--vertical {
    border-right: none !important;

}

.el-menu-item:hover,
.el-menu-item:focus {
    background-color: hsl(var(--monza-600)) !important;
    color: #fff;
}
</style>