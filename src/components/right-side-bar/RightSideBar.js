/* eslint-disable */
import { bus } from '../../main'
import data from '../database/data'
import util from '../../util'

export default {
  data() {
    return {
      fields: [],
      selected: {},
      displayWidget: true
    }
  },
  created () {
    bus.$on('selected', item => { 
      this.fields = data[item['type']]
      this.selected = item;
      this.displayWidget = true;
    })
    bus.$on('remove', item => {
      this.displayWidget = !(JSON.stringify(this.selected) === JSON.stringify(item))
    })
  },
  computed: {
    itemName: function () {
      return this.selected.skuName ||
      this.selected.name ||
      util.joinProperties(this.selected)
    }
  },
  methods: {
    isInput: function (field) { return field === 'input' },
    isSelect: function (field) { return field === 'select' },
    isTextArea: function (field) { return field === 'textarea' },
    isList: function (field) { return field === 'list' },
    isNotEmpty: function (fields) { return fields.length > 0 },
    update: function () {
      bus.$emit('updated');
    }
  }
}