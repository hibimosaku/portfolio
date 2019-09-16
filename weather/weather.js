new Vue({
  el:"#weather",
  data:{
    icon_url:'',
    weather:[],
    today:''
  },
  created:function(){
    var vm=this;
    vm.icon_url = vm.weather_display();
    //今日の日付データを変数hidukeに格納
    var hiduke=new Date(); 

    //年・月・日・曜日を取得する
    var year = hiduke.getFullYear();
    var month = hiduke.getMonth()+1;
    var week = hiduke.getDay();
    var day = hiduke.getDate();

    var yobi= new Array("日","月","火","水","木","金","土");

    vm.today=month+"月"+day+"日 "+'('+yobi[week]+')';



    
  },
  methods:{
    weather_display:function(){
      var vm=this;
      var apiKey="69aad8521ea7e4c3c62252ca45ee5ea6";
      var weather_url="https://api.openweathermap.org/data/2.5/weather?q=Osaka-shi&APPID="+apiKey;
      $.getJSON(weather_url,function(data){ 
        vm.weather=data; 
        vm.icon_url="https://openweathermap.org/img/wn/"+vm.weather['weather'][0]['icon']+"@2x.png";
        //returnはgetjsonではいみがない
        return vm.icon_url;
      });
    },
    alert(){
      alert("firebaseを利用してtodolistを作成")
    }

  },

});
