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
    bus.$on('updated', () => {
      console.log('skus', this.skus)
    })
  },
  methods: {
    removeTab: function (index, tab) {
      bus.$emit('remove', tab)
      this.tabs.splice(index, 1)
    },
    selected: function (item) {
      bus.$emit('selected', item)
    },
    joinProperties: function (obj) { 
      return Object.keys(obj).map(key => obj[key]).join('-')
    },
    newTab: function () {
      this.tabs.push({ month: 'jan', day: 'mon', date: 1, type: 'tab' })
    },
    image: function (src) {
      return require('../../assets/' + src);
    },
    time: function (date, time) {
      return util.get12HrsForm(
        new Date(util.formatTime(date, time))
        .getHours()
      )
    },
  }
};