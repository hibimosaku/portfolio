var app =new Vue({
  el:"#app",
  data:{
    greeting:"こんにちは",
  },
  created:function(){
    console.log('aaaaa');

    this.createPromise1()
      .then(()=>console.log("1つ目"))
      .catch(()=>console.log('失敗'))

    this.createPromise2()
      .then(()=>console.log("2つ目"))
      .catch(()=>console.log('失敗'))
    this.createPromise3()
      .then(()=>console.log("3つ目"))
      .then(()=>console.log('全て終了'))
      .catch(()=>console.log('失敗'))
  },
  methods:{
    createPromise1:function(){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve('1つ目');
          reject();
        },1000);
      })
    },
    createPromise2:function(){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve('2つ目');
          reject();
        },2000);
      })
    },
    createPromise3:function(){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve('3つ目');
          reject();
        },5000);
      })
    },
  },
});