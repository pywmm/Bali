# Vue 代码规范

## 约定

- 如无特殊情况，禁用 v-bind 、v-on、v-text 这些有缩写的指令
- 组件属性之间必须有空行
- 事件绑定方法为: `handle[description]`，比如：handleSubmit、handleButtonClick
- v-text 格式为 `{{someVar}}`
- 必须使用绝对路径引用，以`@`开头，css 文件除外

## template 格式

### 属性个数大于等于 3 时，换行

```html
<el-button
  size="small"
  icon="plus"
  class="ACompnent-button"
>
  编辑
<el-button>
```

### 属性顺序

> 建议每种属性，都按照 a-z 进行排列，不强制

- 指令属性，比如 `v-if` `v-for` `v-model`
- 绑定属性，比如 `:label="labelWidth"`
- 事件属性，比如 `@click="handleButtonClick"`
- 普通属性，比如 `size="small"`

### 自闭合组件

```html
<el-button
  size="small"
  icon="plus"
  class="ACompnent-button"
/>
```

### 正常组件

```html
<el-button
  size="small"
  icon="plus"
  class="ACompnent-button"
>
  删除
</el-button>

<el-button size="small" icon="plus">
  删除
</el-button>

<el-button size="small" icon="plus">删除</el-button>
```

## component 属性顺序

### 组件外部声明

- components
- props
- exports

### 组件内部数据相关

- data
- computed
  - mapState
  - other

### 组件内部生命周期

- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- activated
- deactivated
- beforeDestroy
- destroyed

### 组件内部监听声明

- watch

### 组件内部自定义方法

- methods
  - mapActions
  - mapGetters
  - mapMutations
  - handleAClick
  - handleBClick
  - handleBKeyup
  - customMethod
