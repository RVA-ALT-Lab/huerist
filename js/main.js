//let url = "data.json";



var blogURL = 'data.json'

var blog = new Vue({

  el: '#heurist',
  data: {  
    posts: null
  },

  created: function () {
    this.fetchData()
  },

  methods: {
    fetchData: function () {
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', blogURL)
      xhr.onload = function () {
        self.posts = JSON.parse(xhr.responseText)
        self.posts = self.posts.heurist.records; 
      }
      xhr.send()
    }
  }
})

//   function writeData(data){
//   data.forEach(function(item){
//     console.log(item.rec_Title)
//     let holder = document.getElementById('heurist');
//     let title = '<h3>'+item.rec_Title+'</h3>';
//     holder.innerHTML = holder.innerHTML + title;
//   })
// }

// var app = new Vue({
//     el: '#heurist',
//     data: {
//         json: null
//     }
// });
// fetch(url)
//   .then(function(response) {
//     var contentType = response.headers.get("content-type");
//     if (contentType && contentType.includes("application/json")) {
//       return response.json();
//     }
//     throw new TypeError("Oops, we haven't got JSON!");
//   })
//   .then(function(json) {
//     /* process your JSON further */
//     //json.heurist.records;
//     //writeData(json);
//     var posts = json.heurist.records;
//   })
//   .catch(function(error) {
//     console.log(error);
//   });