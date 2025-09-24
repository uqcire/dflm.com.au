/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue}",
    ],
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        extend: {
            // 确保网格列类被包含
            gridTemplateColumns: {
                '1': 'repeat(1, minmax(0, 1fr))',
                '2': 'repeat(2, minmax(0, 1fr))',
                '3': 'repeat(3, minmax(0, 1fr))',
                '4': 'repeat(4, minmax(0, 1fr))',
                '5': 'repeat(5, minmax(0, 1fr))',
                '6': 'repeat(6, minmax(0, 1fr))',
                '7': 'repeat(7, minmax(0, 1fr))',
                '8': 'repeat(8, minmax(0, 1fr))',
                '9': 'repeat(9, minmax(0, 1fr))',
                '10': 'repeat(10, minmax(0, 1fr))',
                '11': 'repeat(11, minmax(0, 1fr))',
                '12': 'repeat(12, minmax(0, 1fr))',
            },
        },
    },
    // 确保所有使用的类被包含
    safelist: [
        // 基础网格列类
        'grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-5', 'grid-cols-6',
        'grid-cols-7', 'grid-cols-8', 'grid-cols-9', 'grid-cols-10', 'grid-cols-11', 'grid-cols-12',

        // 响应式网格列类
        'sm:grid-cols-1', 'sm:grid-cols-2', 'sm:grid-cols-3', 'sm:grid-cols-4', 'sm:grid-cols-5', 'sm:grid-cols-6',
        'md:grid-cols-1', 'md:grid-cols-2', 'md:grid-cols-3', 'md:grid-cols-4', 'md:grid-cols-5', 'md:grid-cols-6',
        'lg:grid-cols-1', 'lg:grid-cols-2', 'lg:grid-cols-3', 'lg:grid-cols-4', 'lg:grid-cols-5', 'lg:grid-cols-6',
        'xl:grid-cols-1', 'xl:grid-cols-2', 'xl:grid-cols-3', 'xl:grid-cols-4', 'xl:grid-cols-5', 'xl:grid-cols-6',
        '2xl:grid-cols-1', '2xl:grid-cols-2', '2xl:grid-cols-3', '2xl:grid-cols-4', '2xl:grid-cols-5', '2xl:grid-cols-6',

        // 间距类
        'gap-2', 'gap-4', 'gap-6', 'gap-8', 'gap-12',

        // 对齐类
        'items-start', 'items-center', 'items-end', 'items-stretch',
        'justify-start', 'justify-center', 'justify-end', 'justify-between', 'justify-around', 'justify-evenly',
    ],
    plugins: [],
}
