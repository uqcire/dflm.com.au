<script setup>
const brand = 'E-Sunrise Australia'
</script>

<template>
    <section class="UC">
        <el-container class="UC__container min-h-screen flex flex-col">
            <el-main>
                <div class="UC__content flex flex-col items-center justify-center px-6 gap-6">
                    <img class="UC__logo mb-6 opacity-90" src="@/assets/brand__logo--icon.png" alt="Logo" />
                    <h1 class="UC__title text-4xl md:text-6xl font-bold mb-3 text-white text-center">
                        {{ brand }} is under construction
                    </h1>
                    <h2 class="UC__subtitle text-xl md:text-3xl font-semibold text-white mb-6 text-center">
                        Your Strategic Partner for Premium Agricultural Ingredients
                    </h2>
                    <p class="text-sm md:text-lg text-gray-300 mb-6 max-w-xl text-center">
                        We're getting everything ready. Please check back soon.
                    </p>

                    <div class="UC__actions flex items-center gap-3">
                        <el-button
                            class="UC__cta UC__cta--primary shadow-xl h-14 px-6 rounded-lg flex items-center justify-center text-lg font-semibold"
                            tag="a" size="large" href="mailto:hello@dflm.com.au?subject=Website%20Enquiry">
                            <span class="UC__cta--primary__text text-white font-semibold text-lg">Contact us</span>
                        </el-button>
                    </div>
                </div>
            </el-main>
            <el-footer class="UC__footer ">
                <div class="UC__footer__content">
                    © {{ new Date().getFullYear() }} {{ brand }}. All rights reserved.
                </div>
            </el-footer>
        </el-container>
    </section>
</template>

<style scoped>
@reference "tailwindcss";

/* BEM: Block = UC, Elements = __container/__title/__subtitle/__actions/__cta/__footer, Modifiers = --primary/--secondary */
.UC {
    background-color: hsl(var(--monza-600));
}

.el-main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.UC__container {}

.UC__title {}

.UC__subtitle {}

.UC__actions {}

.UC__cta {}

.UC__cta--primary {
    background-color: hsl(var(--tree-poppy-500));
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-decoration: none;
}

.UC__cta--primary__text {}

.UC__footer {
    @apply text-white text-sm font-normal flex items-center justify-center
}
</style>