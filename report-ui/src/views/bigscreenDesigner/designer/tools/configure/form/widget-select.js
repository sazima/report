/*
 * @Descripttion: 下拉框
 * @Author: qianlishi qianlishi@anji-plus.com
 * @Date: 2023-01-09 13:02:59
 * @LastEditors: qianlishi qianlishi@anji-plus.com
 * @LastEditTime: 2023-01-12 16:44:50
 */

export const widgetSelect = {
  code: 'widget-select',
  type: 'form',
  tabName: '表单',
  label: '下拉框',
  icon: 'iconchaolianjie',
  options: {
    setup: [
      {
        type: 'el-input-text',
        label: '图层名称',
        name: 'layerName',
        required: false,
        placeholder: '',
        value: '下拉框',
      },
      {
        type: 'el-input-text',
        label: '字段属性值',
        name: 'field',
        required: false,
        placeholder: '请输入',
        value: '',
      },
      {
        type: 'vue-color',
        label: '字体颜色',
        name: 'color',
        required: false,
        placeholder: '',
        value: '#FAD400',
      },
      {
        type: 'vue-color',
        label: '字体背景',
        name: 'background',
        required: false,
        placeholder: '',
        value: 'rgba(115,170,229,.5)',
      },
      {
        type: 'el-select',
        label: '关联图表',
        name: 'assChart',
        required: false,
        placeholder: '',
        multiple: true,
        selectOptions: [],
        value: '',
      },
      {
        type: 'el-select',
        label: '触发事件',
        name: 'event',
        required: false,
        placeholder: '',
        selectOptions: [
          { code: 'change', name: 'change' },
          { code: 'blur', name: 'blur' },
          { code: 'focus', name: 'focus' },
        ],
        value: 'change',
      }
    ],
    data: [
      {
        type: 'el-radio-group',
        label: '数据类型',
        name: 'dataType',
        require: false,
        placeholder: '',
        selectValue: true,
        selectOptions: [
          {
            code: 'staticData',
            name: '静态数据',
          },
          {
            code: 'dynamicData',
            name: '动态数据',
          },
        ],
        value: 'staticData',
      },
      {
        type: 'el-button',
        label: '静态数据',
        name: 'staticData',
        required: false,
        placeholder: '',
        relactiveDom: 'dataType',
        relactiveDomValue: 'staticData',
        value: [
          { "name": "苹果", "code": 1000 },
          { "name": "三星", "code": 2229 },
          { "name": "小米", "code": 3879 },
          { "name": "oppo", "code": 2379 },
          { "name": "vivo", "code": 4079 },
        ],
      },
      {
        type: 'dycustComponents',
        label: '',
        name: 'dynamicData',
        required: false,
        placeholder: '',
        relactiveDom: 'dataType',
        relactiveDomValue: 'dynamicData',
        chartType: 'widget-select',
        dictKey: 'SELECT_PROPERTIES',
        value: '',
      },
    ],
    position: [
      {
        type: 'el-input-number',
        label: '左边距',
        name: 'left',
        required: false,
        placeholder: '',
        value: 0,
      },
      {
        type: 'el-input-number',
        label: '上边距',
        name: 'top',
        required: false,
        placeholder: '',
        value: 0,
      },
      {
        type: 'el-input-number',
        label: '宽度',
        name: 'width',
        required: false,
        placeholder: '该容器在1920px大屏中的宽度',
        value: 100,
      },
      {
        type: 'el-input-number',
        label: '高度',
        name: 'height',
        required: false,
        placeholder: '该容器在1080px大屏中的高度',
        value: 40,
      },
    ],
  }
}