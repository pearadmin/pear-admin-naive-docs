# 图标(Icon)

我们没有采用Naive UI 提供的icon。而是使用了[purge-icons](https://github.com/antfu/purge-icons)
所有的图标，你都可在 [这里](https://icones.js.org/collection/all) 找到

### Props

| 属性    | 类型                | 默认值   | 说明   |
|-------|-------------------|-------|------|
| name  | `string`          | -     | 图标名称 |
| size  | `string` `number` | 16    | 图标大小 |
| color | `string`          | -     | 图标颜色 |
| spin  | `boolean`         | false | 是否旋转 |


### Usage

```vue
<script setup lang="ts"></script>

<template>
  <Icon name="ant-design:setting-outlined"></Icon>
</template>
```
