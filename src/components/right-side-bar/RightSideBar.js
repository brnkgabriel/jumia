/* eslint-disable */
import { bus } from '../../main'
import data from '../database/data'

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
  methods: {
    isInput: function (field) { return field === 'input' },
    isSelect: function (field) { return field === 'select' },
    isNotEmpty: function (fields) { return fields.length > 0 },
    isFile: function(type) { return type === 'file' },
    update: function () {
      bus.$emit('updated');
    }
  }
}