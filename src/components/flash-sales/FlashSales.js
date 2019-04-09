/* eslint-disable */
import { bus } from '../../main'
import util from '../../util.js'
import data from '../database/data'
export default {
  data() {
    return {
      skus: data.fsSkus,
      tabs: []
    };
  },
  created () {
    bus.$emit('path', util.trimPath(window.location.href));
  },
  methods: {
    removeTab: function (index) {
      this.tabs.splice(index, 1)
    },
    selectedWidget: function () {
      var widget = {
        fields: [
          { name: 'month', field: 'input', type: 'text' },
          { name: 'day', field: 'input', type: 'number', },
          { name: 'date', field: 'input', type: 'number' }
        ]
      }
    },
    newTab: function () {
      this.tabs.push({ month: 'jan', day: 'mon', date: 1 })
    },
    image: function (src) {
      return require('../../assets/' + src);
    },
    time: function (time) {
      return util.get12HrsForm(new Date(time).getHours())
    }
  }
};