// $(document).ready(function() {
//   // animatedクラスの付いた要素にwaypointを登録
//   $(".animated").waypoint({
//     handler: function(direction) {
//       // 要素が画面中央に来るとここが実行される
//       if (direction === "down") { // 下方向のスクロール
//         // イベント発生元の要素にfadeInUpクラスを付けることで
//         // アニメーションを開始
//         $(this.element).addClass("fadeInUp");

//         // waypointを削除することで、この要素に対しては
//         // これ以降handlerが呼ばれなくなる
//         this.destroy();
//       }
//     },

//     // 要素が画面中央に来たらhandlerを実行
//     offset: "50%"
//   });
// });
new Vue({
  el:"#app",
  data:{
    hello:'おはよう',
  },
  created:function(){
    $(".box").waypoint({
      handler: function(direction) {
        // .boxが画面内に入ったときに実行される処理をここに書く。
        // direction引数には、下方向のスクロールのときは"down"、
        // 上方向のスクロールのときは"up"が入る。 
        if (direction === "down") { // 下方向のスクロール
          // イベント発生元の要素にfadeInUpクラスを付けることで
          // アニメーションを開始
          $(this.element).addClass("fadeInUp");

          // waypointを削除することで、この要素に対しては
          // これ以降handlerが呼ばれなくなる
          this.destroy();

        }

      },
  
      // 要素の上端が画面のどの位置に来たときにhandlerを実行するかを指定。
      // 0%なら画面の一番上、100%なら画面の一番下に来たときに実行される。
      offset: "50%"
    });
  },
  
  methods:{

  },
  }),
  new Vue({
  el:"#app",
  data:{
    hello:'おはよう',
  },
  created:function(){
    $(".box").waypoint({
      handler: function(direction) {
        // .boxが画面内に入ったときに実行される処理をここに書く。
        // direction引数には、下方向のスクロールのときは"down"、
        // 上方向のスクロールのときは"up"が入る。 
        if (direction === "down") { // 下方向のスクロール
          // イベント発生元の要素にfadeInUpクラスを付けることで
          // アニメーションを開始
          $(this.element).addClass("fadeInUp");

          // waypointを削除することで、この要素に対しては
          // これ以降handlerが呼ばれなくなる
          this.destroy();

        }

      },
  
      // 要素の上端が画面のどの位置に来たときにhandlerを実行するかを指定。
      // 0%なら画面の一番上、100%なら画面の一番下に来たときに実行される。
      offset: "50%"
    });
  },
  
  methods:{

  },
  })

  new Vue({
    el:"#app",
    data:{
      hello:'おはよう',
    },
    created:function(){
      $(".box").waypoint({
        handler: function(direction) {
          // .boxが画面内に入ったときに実行される処理をここに書く。
          // direction引数には、下方向のスクロールのときは"down"、
          // 上方向のスクロールのときは"up"が入る。 
          if (direction === "down") { // 下方向のスクロール
            // イベント発生元の要素にfadeInUpクラスを付けることで
            // アニメーションを開始
            $(this.element).addClass("fadeInUp");
  
            // waypointを削除することで、この要素に対しては
            // これ以降handlerが呼ばれなくなる
            this.destroy();
  
          }
  
        },
    
        // 要素の上端が画面のどの位置に来たときにhandlerを実行するかを指定。
        // 0%なら画面の一番上、100%なら画面の一番下に来たときに実行される。
        offset: "50%"
      });
    },
    
    methods:{
  
    },
    })
  
