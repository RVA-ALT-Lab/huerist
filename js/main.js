//let url = "data.json";



var blogURL = 'data.json'

var blog = new Vue({

  el: '#heurist',
  data () {
    return {
      records: [],
      database: null
    }
  },
  computed: {
    mappedRecords () {
      return this.records.map(record => {
        record.rec_RecType = this.database.rectypes[record.rec_RecTypeID]
        return record
      })
    }
  },
  mounted () {
    this.fetchData()
  },

  methods: {
    fetchData () {
      var xhr = new XMLHttpRequest()
      xhr.open('GET', blogURL)
      xhr.onload = () => {
        const json = JSON.parse(xhr.responseText)
        console.log(json)
        // arrow function this == Vue instance, regular function this == XHR
        console.log(this)
        this.records = json.heurist.records;
        this.database = json.heurist.database
      }
      xhr.send()
    }
  }
})