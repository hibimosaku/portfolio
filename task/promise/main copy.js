new Vue({
el:"#app",
data:{
greeting:'おはよう',
},
created:function(){
  var vm=this;
  vm.createPromise(2000,true)
    .then(()=>alert('1回目成功'))
    .catch(()=>alert('2回目失敗'))

  vm.createPromise(3000,false)
    .then(()=>console.log('2回目成功'))
    .catch(()=>console.log('2回目失敗'))

  vm.createPromise(4000,true)
    .then(()=>console.log('3回目成功'))
    .then(()=>console.log('全て終了'))
    .catch(()=>console.log('3回目失敗'))
},
methods:{
  createPromise:function(time,flag){
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
       if(flag===true){
         resolve();
         }else{
           reject();
         }
     },time)
     })
   },
//「Promise.resolve」を使ったが、失敗
  createPromise111:function(time,flag){
    return setTimeout(()=>{
      if(flag===true){
        Promise.resolve();
      }
      if(flag===false){
        Promise.reject();
      }
    },time)
  },
}
});