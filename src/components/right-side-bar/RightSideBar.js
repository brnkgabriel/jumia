/* eslint-disable */
import { bus } from '../../main'
import data from '../database/data'

export default {
  data() {
    return {
      fields: []
    }
  },
  created () {
    bus.$on('selected', item => {
      this.fields = data[item['type']]
    })
  }
}