new Vue({
  el:"#weather",
  data:{
    aaaa:"hello",
    icon_url:'',
    weather:[]
  },
  created:function(){
    console.log(this.weather_display());
    this.weather_display();
    console.log(this.icon);
    console.log(this.icon_url);
    console.log(this.weather);
  },
  methods:{
    weather_display:function(){
      var apiKey="69aad8521ea7e4c3c62252ca45ee5ea6";
      var weather_url="http://api.openweathermap.org/data/2.5/weather?q=Osaka-shi&APPID="+apiKey;
     // var icon_url="http://openweathermap.org/img/wn/";
      $.getJSON(weather_url,function(data){ 
        this.weather=data; 
        console.log(this.weather);  
        this.icon_url="http://openweathermap.org/img/wn/"+data['weather'][0]['icon']+"@2x.png";
        return this.icon_url;
      });
    },
    alert(){
      alert("firebaseを利用してtodolistを作成")
    }

  },

});
