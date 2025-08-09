<script setup>
const title = 'Hello world!'
const message = 'This is a message from the script setup block'
const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
</script>

<template>
  <el-container>
    <el-header>
      <div>
        <h1 class="text-3xl font-bold underline">
          {{ title }}
        </h1>
        <p class="text-lg">
          {{ message }}
        </p>
      </div>
    </el-header>
    <el-main>
      <div class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
      </div>

      <div class="demo-progress">
        <el-progress :percentage="50" />
        <el-progress :percentage="100" :format="format" />
        <el-progress :percentage="100" status="success" />
        <el-progress :percentage="100" status="warning" />
        <el-progress :percentage="50" status="exception" />
      </div>
    </el-main>
  </el-container>



</template>

<style>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
</style>
