# Table表格

### Props

| 属性    | 类型                       | 默认值    | 说明         |
|-------|--------------------------|--------|------------|
| columns  | `Array<DataTableColumn>`    | -      | 表格的列设置     |
| size  | `small, medium, large`   | medium | 表格大小       |
| virtualScroll | `boolean`                | true   | 是否启用虚拟滚动   |
| fetch | `TableFetch`             | -      | 表格接口请求相关配置 |
| openSearch | `boolean`                | false  | 是否开启表查询表   |
| searchFormProps | `Partial<PearFormProps>` | -      | 表单props    |


### TableFetch

| 属性    | 类型                       | 默认值   | 说明                         |
|-------|--------------------------|-------|----------------------------|
| fetchUrl  | `string`                 | -     | 表格请求url路径                  |
| immediate  | `boolean`                | true  | 表格初次加载完成后是否立即请求            |
| redo | `boolean`                | false | 启用查询表头后，是否在查询表头值变化时自动请求    |
| debounce | `number`                 | 0     | 开启redo后， 可用该字段设置防抖时间(单位ms) |
| beforeFetch | `(payload: Ref<Recordable>) => Ref<Recordable>`                | -     | 请求前修改参数钩子                  |
| afterFetch | `(payload: Recordable) => Recordable` | -     | 请求后修改参数钩子                  |


### Type
```ts
  export interface TableFetch {
    fetchUrl?: string
    immediate?: boolean
    redo?: boolean
    debounce?: number
    beforeFetch?: (payload: Ref<Recordable>) => Ref<Recordable>
    afterFetch?: (payload: Recordable) => Recordable
  }
  export interface PearTableProps {
    columns?: Array<DataTableColumn>
    size?: 'small' | 'medium' | 'large'
    virtualScroll?: boolean
    // other todo:
    // 自定义
    fetch?: TableFetch
    openSearch?: boolean
    searchFormProps?: PearFormProps
  }

  export interface PearTableExpose {
    searchFormValue: Ref<Recordable>
    handleReset: () => void
    formMethods: UseFormMethods
    updTableProps: (updProps: PearTableProps) => void
  }

  export interface PearTableEmits {
    (e: 'register-table', PearTableExpose): void
  }

```

### Usage

```vue
<script setup lang="ts">
  import { TableDemoEnum } from './service'
  import { DataTableColumn } from 'naive-ui'

  const columns: DataTableColumn[] = [
    {
      type: 'selection',
      fixed: 'left'
    },
    {
      title: 'Id',
      fixed: 'left',
      key: 'id'
    },
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Age',
      key: 'age'
    },
    {
      title: 'Birthday',
      key: 'birthday'
    },
    {
      title: 'Email',
      key: 'email'
    },
    {
      title: 'Address',
      key: 'city'
    },
    {
      title: 'ZIP',
      key: 'zip'
    },
    {
      title: 'CreateTime',
      key: 'createTime',
      fixed: 'right'
    }
  ]

  const fetch = {
    fetchUrl: TableDemoEnum.getTableRecords,
    beforeFetch(params) {
      console.log('before fetch', params)
      return {
        ...params.value,
        a: 1
      }
    },
    afterFetch(data) {
      return data
    }
  }
</script>

<template>
  <PageWrapper>
    <PearTable :columns="columns" virtual-scroll :fetch="fetch" open-search>
      <template #header> 表头区域 slot </template>
      <template #search> 查询区域（设置openSearch=true后才显示哈）slot </template>
      <template #tableTitle> 标准表格 </template>
      <template #tools>
        <NButton text>工具扩展区域 slot</NButton>
      </template>
    </PearTable>
  </PageWrapper>
</template>

<style scoped lang="less"></style>

```

### hooks

```vue
<script setup lang="ts">
  import { TableDemoEnum } from './service'
  import { usePearTable } from '@/components/Table/composables/usePearTable'
  import { FormSchema, PearFormProps } from '@/components/Form/components/PearForm.vue'
  import { GridProps, useMessage } from 'naive-ui'
  import { ref } from 'vue'

  const columns = [
    {
      title: 'Id',
      key: 'id'
    },
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Age',
      key: 'age'
    },
    {
      title: 'Birthday',
      key: 'birthday'
    },
    {
      title: 'Email',
      key: 'email'
    },
    {
      title: 'Address',
      key: 'city'
    },
    {
      title: 'ZIP',
      key: 'zip'
    },
    {
      title: 'CreateTime',
      key: 'createTime'
    }
  ]

  // search
  const schemas: FormSchema[] = [
    {
      model: 'input',
      component: 'NInput',
      formItemProps: {
        label: 'Input'
      }
    },
    {
      model: 'input1',
      component: 'NInput',
      formItemProps: {
        label: 'Input'
      }
    },
    {
      model: 'input2',
      component: 'NInput',
      formItemProps: {
        label: 'Input'
      }
    },
    {
      model: 'input3',
      component: 'NInput',
      formItemProps: {
        label: 'Input'
      }
    },
    {
      model: 'select',
      component: 'NSelect',
      formItemProps: {
        label: 'Select'
      },
      componentProps: {
        options: [
          {
            label: 'Drive My Car',
            value: 'song1'
          },
          {
            label: 'Norwegian Wood',
            value: 'song2'
          },
          {
            label: "You Won't See",
            value: 'song3'
          },
          {
            label: 'Nowhere Man',
            value: 'song4'
          },
          {
            label: 'Think For Yourself',
            value: 'song5'
          },
          {
            label: 'The Word',
            value: 'song6'
          },
          {
            label: 'Michelle',
            value: 'song7'
          },
          {
            label: 'What goes on',
            value: 'song8'
          },
          {
            label: 'Girl',
            value: 'song9'
          },
          {
            label: "I'm looking through you",
            value: 'song10'
          },
          {
            label: 'In My Life',
            value: 'song11'
          },
          {
            label: 'Wait',
            value: 'song12'
          }
        ]
      }
    },
    {
      model: 'dateTime',
      component: 'NDatePicker',
      formItemProps: {
        label: 'DateTime'
      },
      componentProps: {
        type: 'datetime',
        style: {
          width: '100%'
        }
      }
    },
    {
      model: 'dateTimeRange',
      component: 'NDatePicker',
      formItemProps: {
        label: 'DTRange'
      },
      componentProps: {
        type: 'datetimerange',
        style: {
          width: '100%'
        }
      }
    }
  ]

  const gridProps: GridProps = {
    responsive: 'screen',
    collapsed: true,
    collapsedRows: 1,
    cols: '1 s:2 m:3 l:3 xl:3 xxl:3',
    xGap: 24
  }

  const searchFormProps: PearFormProps = {
    schemas,
    gridProps,
    labelWidth: 80,
    labelPlacement: 'left',
    model: {
      select: 'song1',
      input: '默认值'
    }
  }

  const fetch = ref({
    fetchUrl: TableDemoEnum.getTableRecords,
    immediate: true,
    redo: false,
    debounce: 2000,
    beforeFetch(params) {
      return params
    },
    afterFetch(data) {
      console.log('after fetch => ', data)
      return data
    }
  })

  const {
    registerTable,
    methods: { getFormValue }
  } = usePearTable({
    columns,
    searchFormProps,
    fetch,
    openSearch: true,
    virtualScroll: true
  })

  const message = useMessage()
</script>

<template>
  <PageWrapper>
    <PearTable @register-table="registerTable">
      <template #tableTitle> 标准表格 </template>
      <template #tools>
        <NButton type="warning" @click="fetch.redo = !fetch.redo">
          {{ fetch.redo ? '禁用redo' : '启用redo' }}
          {{ fetch.redo ? '' : '(参数改变时会自动触发请求，慎用！)' }}
        </NButton>
        <NButton type="primary" @click="message.info(JSON.stringify(getFormValue()))">
          获取参数
        </NButton>
      </template>
    </PearTable>
  </PageWrapper>
</template>

<style scoped lang="less"></style>
```