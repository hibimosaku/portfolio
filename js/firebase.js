var todolists=new Vue({
  el:"#log",
  data:{
    email:'',
    password:'',
    sign:'',
    sigan:'aaaa',
    title:[],
    stydyitem:[],
    description:[],
    booklistss:[]
    },
  created:function(){
    //ユーザ認証できたら、表示を作りたかったがうまくいかず。
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        //console.log('成功');
        this.sign='login';
      }else{
        console.log('失敗');
      }
    });
    //dataup();
  },

  methods:{
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
    signup:function(){
      firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
        .then(function(user){
          alert('登録しました。');
        })
        .catch(function(error){
          alert('ログインに失敗しました。');
          console.error("ログインエラー",error);
        });
    },
    dataup:function(){
      firebase.database().ref('todolists').push({
        //this.studyitemが取得できない
        studyitem:'this.studyitem',
        title:'this.title',
        description:'this.description'
        
      });
      //↓では登録できる
      // firebase.database().ref('todolists').push(this.stydyitem)
    },
    datadisplay:function(){
      firebase.database().ref("todolists/").on("value", function(snapshot) { 
        // データの取得が完了すると実行される
        if(snapshot.val() != null && !isNaN(snapshot.val())) {  // 取得した値が数値かを判定
          this.booklistss = snapshot.val();
          console.log('成功');
        }else{
          console.log('失敗');
        };
      });



    },  
  }
});
//↓では登録できる
// firebase.database().ref("lists").push({
//         studyitem:'vvgv0',
//         title:'190',
//         description:'10000'
// })
