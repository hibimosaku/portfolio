new Vue({
  el:"#log",
  data:{
    email:'',
    password:'',
    sign:'',
    title:'',//配列？
    stydyitem:'',//配列？
    description:'',//配列？
    url:'',
    todolist111:{},
    todolist:{},
    keys:{},
    search:'',
    result:[],
    result111:[],
    item:[],
    todolist_search:[],
    changeUpdate:'before',
    changebtn:'before',
    task2:[]
  },
  created:function(){
    var vm = this;
    // ユーザ認証
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        vm.sign='login';
        firebase.database().ref("todolists").on("value", function(snapshot) { 
          if(snapshot.val() != null) {  
            vm.todolist =  snapshot.val(); //      
            console.log('成功');

          }else{
            console.log('失敗');
          };
        });
      }else{
        console.log('失敗');
        console.error("ログインエラー",error);
      }
    });
    
  },
  methods:{
    //ログイン
    signin:function(){
      firebase.auth().signInWithEmailAndPassword(this.email,this.password)
        .then(function(user){
          alert('ログインしました。');
        })
        .catch(function(error){
          alert('ログインに失敗しました。');
          console.error("ログインエラー",error);
        });
    },
    //登録
    signup:function(){
      // var vm=this;
      // if(vm.email==''){
      //   alert('メールが未入力');
      // };
      // if(vm.password==''){
      //   alert('パスワード未入力');
      // };
      // if(vm.email.match(/a/)){
      //   alert('@が入力されていません。');
      // };
      firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
        .then(function(user){
          alert('登録しました。');
        })
        .catch(function(){
          alert('ログインに失敗しました。');
          console.error("ログインエラー");
        });
    },
    //ログアウト
    signout:function(){
      var vm=this;
      firebase.auth().signOut()
        .then(function(){
          alert('ログアウトしました。');
          vm.sign ='';
        })
        .catch(function(error){
          alert('ログインに失敗しました。');
          console.error("ログインエラー",error);
        });
    },
    //firebase新規登録
    dataup:function(){
      var vm=this;
      firebase.database().ref('todolists').push({
        title:vm.title,
        description:vm.description,
        stydyitem:vm.stydyitem,
        url:vm.url,
      });
    },
    //firebase削除
    dataDelete:function(key){
      var confirmation=confirm('本当に削除してもよろしいですか？');
      if(confirmation){
        firebase.database().ref('todolists').child(key).remove();
      }

    },
    //firebase更新
    dataUpdate:function(item,key){
      var vm=this;

      firebase.database().ref('todolists').child(key).set({
        title:item.title,
        description:item.description,
        stydyitem:item.stydyitem,
        url:item.url,
      });
      alert('成功');
      vm.changeUpdate='before';
      
    },
    //firebase検索
    dataSearch:function(search){
      var vm=this;
      reg=new RegExp([search]);
      vm.todolist_search=Object.entries(vm.todolist);//オブジェクトの配列化 
      vm.result=vm.todolist_search.filter((value,index,array)=>{
        return Object.values(value[1]).join("").match(search);
      }).map((x)=>x[1]); 
    },
    //ボタンの切り替え
    change:function(key){
      var vm=this;
      vm.changeUpdate='after'+key;
      vm.changebtn='after';
    },
    changeReturn:function(key){
      var vm=this;
      vm.changeUpdate='before';
    },
}
});