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
      console.log('removed tab is at index', index)
      bus.$emit('selected', {type: 'empty'});
      this.tabs.splice(index, 1)
    },
    selected: function (item) {
      bus.$emit('selected', item);
      console.log('selected item is', item['type'])
    },
    newTab: function () {
      this.tabs.push({ month: 'jan', day: 'mon', date: 1, type: 'tab' })
    },
    image: function (src) {
      return require('../../assets/' + src);
    },
    time: function (time) {
      return util.get12HrsForm(new Date(time).getHours())
    }
  }
};