var tabSkill={
  data:function(){
    return{
      move:"none",
      activeTab:"tabs-1",
      task_progress:['すべて','完成','未完成'],
      activeoption:"0",
      numbers:[1,2,3,4],
      task_name:{
        1:'コーダー',
        2:'Javascript',
        3:'PHP',
        4:'その他'
      },
      tasks:
      { 
          coder:[
            //is_finishedで、"""入れないとoptionがだめ
            {
              number:1,
              study_item:'旧ポートフォリオ',
              title:'旧ポートフォリオ',
              url:'http://portfolio.hibimosaku.jp/',
              is_finished:"true",
              description:'レスポンス済み。Bootstrapで作成。',
              date:'2019/03',
            },
            {
                number:2,
                study_item:'コーディング模写①',
                title:'メルカリ模写',
                url:'./task/task/index.html',
                is_finished:"true",
                description:'レスポンス済み。画像は適当',
                date:'2019/07/28',
              },
              {
                number:3,
                study_item:'コーディング模写②',
                title:'アップル模写',
                url:'./task/task2/index.html',
                is_finished:"true",
                description:'レスポンス済み。画像は適当',
                date:'2019/08/06',
              },
              {
                number:4,
                study_item:'scss',
                title:'-',
                is_finished:"true",
                description:'ネスト・レスポンシブをミックスイン',
                date:'2019/07',
              },
              {
                number:5,
                study_item:'animate',
                title:'当サイト',
                is_finished:"true",
                description:'タブを押したらテーブルにアニメーション',
                date:'2019/08/12',
              },
              {
                number:6,
                study_item:'scss',
                title:'-',
                is_finished:"false",
                description:'変数、演数、関数、制御ディレクティブ',
                date:'',
              },         
          ],
          javascript:[
              {
                number:1,
                study_item:'vue',
                title:'当サイト',
                url:'',
                is_finished:"true",
                description:'タブ機能、表示の絞り込み',
                date:'2019/09/15',
              },
              {
                number:2,
                study_item:'promise',
                title:'promise',
                url:'task/promise/promise.html',
                is_finished:"true",
                description:'マークダウン記法で入力。',
                date:'2019/08/24',
              },
              {
                number:3,
                study_item:'firebase',
                title:'firebase',
                url:'firebase/firebase.html',
                is_finished:"true",
                description:'新規登録、検索、編集、削除を実施',
                date:'2019/09/15',
              },
          ],
          php:[
            {
              number:1,
              study_item:'php',
              title:'当サイト',
              url:'php/join/index.php',
              is_finished:"false",
              description:'form情報の取得・検索、DBでの一覧、詳細、編集、削除',
              date:'作業中',
            },
            {
              number:2,
              study_item:'laravel',
              title:'当サイト',
              url:'http://portfolio-laravel.hibimosaku.jp',
              is_finished:"false",
              description:'form情報の取得・検索、DBでの一覧、詳細、編集、削除',
              date:'作業中',

            },
            

          ],
          other:[
            {
              number:1,
              study_item:'git',
              title:'gitで管理',
              url:'https://github.com/hibimosaku/portfolio',
              is_finished:"true",
              description:'当サイトのソースコードを保存',
              date:'日々更新',
            },
            {
              number:2,
              study_item:'typescript,webpack',
              title:'-',
              url:'-',
              is_finished:"true",
              description:'当環境構築で、アプリを作成する',
            },
            {
              number:3,
              study_item:'SQL',
              title:'',
              url:'',
              is_finished:"false",
              description:'作業中',
            },
        ],
        
      },
    };
  },
  props:{

  },
  created:function(){
  },

  methods:{
    changeTab:function(tab_name){
      this.activeTab=tab_name;
      this.move='animated slideInLeft slow';
    }
  },
  template:`
  <div>
        <ul 
        class="tabs-menu"
        >
          <li></li>
          <li
            v-for="number in numbers"
            v-bind:class="{active:activeTab==='tabs-'+number}"
            v-on:click="changeTab('tabs-'+number)"
            >
            {{task_name[number]}}
          </li>
        </ul>
        <section class="tabs-content">
          <div id="slide">
              <section v-show="activeTab ==='tabs-1'">
                <div class="task_content">
                    <select name="task_progress" size="1"
                      v-model="activeoption"
                      class="task_progress"
                    >
                      <option 
                        value="0">
                        {{task_progress[0]}}</option>
                      <option 
                        value="true">
                        {{task_progress[1]}}</option>
                      <option 
                        value="false">          
                        {{task_progress[2]}}</option>
                  </select>
                </div>

                <br>
                <table
                  v-bind:class="move"
                >
                    <tr>
                      <th>NO</th>
                      <th>学習項目</th>
                      <th>内容</th>
                      <th>作品</th>
                      <th>完了日付</th>

                    </tr>
                    <tr v-for="task in tasks.coder"
                        v-if="task.is_finished===activeoption"
                    >
                      <td>{{task.number}}</td>
                      <td>{{task.study_item}}</td>
                      <td>{{task.description}}</td>
                      <td><a v-bind:href="task.url">{{task.title}}</a></td>
                      <td>{{task.date}}</td>
                    </tr>
                    <tr v-for="task in tasks.coder"
                        v-if="activeoption==='0'"
                    >
                      <td>{{task.number}}</td>
                      <td>{{task.study_item}}</td>
                      <td>{{task.description}}</td>
                      <td><a v-bind:href="task.url" target="_blank">{{task.title}}</a></td>
                      <td>{{task.date}}</td>
                    </tr>
                </table>                      
            </section>
            <section v-show="activeTab ==='tabs-2'">
              <div class="task_content">
                  <select name="task_progress" size="1"
                    v-model="activeoption"
                    class="task_progress"
                  >
                    <option value="0">
                      {{task_progress[0]}}
                    </option>
                    <option v-bind:"value='true'">
                      {{task_progress[1]}}
                    </option>
                    <option v-bind:"value='false'">          
                      {{task_progress[2]}}
                    </option>
                  </select>
              </div>
              <br>
              <table
                v-bind:class="move"
              >
                  <tr>
                    <th>NO</th>
                    <th>学習項目</th>
                    <th>内容</th>
                    <th>作品</th>
                    <th>完了日付</th>
                  </tr>
                  <tr v-for="task in tasks.javascript"
                      v-if="task.is_finished===activeoption"
                  >
                    <td>{{task.number}}</td>
                    <td>{{task.study_item}}</td>
                    <td>{{task.description}}</td>
                    <td><a v-bind:href="task.url">{{task.title}}</a></td>
                    <td>{{task.date}}</td>
                  </tr>
                  <tr v-for="task in tasks.javascript"
                      v-if="activeoption==='0'"
                  >
                    <td>{{task.number}}</td>
                    <td>{{task.study_item}}</td>
                    <td>{{task.description}}</td>
                    <td><a v-bind:href="task.url" target="_blank">{{task.title}}</a></td>
                    <td>{{task.date}}</td>
                  </tr>
              </table>        
            </section>
            <section v-show="activeTab ==='tabs-3'">

            <div class="task_content">
                <select name="task_progress" size="1"
                  v-model="activeoption"
                  class="task_progress"
                >
                  <option 
                    value="0">
                    {{task_progress[0]}}</option>
                  <option 
                    value="true">
                    {{task_progress[1]}}</option>
                  <option 
                    value="false">          
                    {{task_progress[2]}}</option>
                </select>
              </div>

                <br>
              <table
              v-bind:class="move"
              >
                  <tr>
                    <th>NO</th>
                    <th>学習項目</th>
                    <th>内容</th>
                    <th>作品</th>
                    <th>完了日付</th>
                  </tr>
                  <tr v-for="task in tasks.php"
                      v-if="task.is_finished===activeoption"
                  >
                    <td>{{task.number}}</td>
                    <td>{{task.study_item}}</td>
                    <td>{{task.description}}</td>
                    <td><a v-bind:href="task.url" target="_blank">{{task.title}}</a></td>
                    <td>{{task.date}}</td>
                  </tr>
                  <tr v-for="task in tasks.php"
                      v-if="activeoption==='0'"
                  >
                    <td>{{task.number}}</td>
                    <td>{{task.study_item}}</td>
                    <td>{{task.description}}</td>
                    <td><a v-bind:href="task.url">{{task.title}}</a></td>
                    <td>{{task.date}}</td>
                  </tr>
              </table>        
            </section>
            <section v-show="activeTab ==='tabs-4'">

            <div class="task_content">
                <select name="task_progress" size="1"
                  v-model="activeoption"
                  class="task_progress"
                >
                  <option 
                    value="0">
                    {{task_progress[0]}}</option>
                  <option 
                    value="true">
                    {{task_progress[1]}}</option>
                  <option 
                    value="false">          
                    {{task_progress[2]}}</option>
                </select>
              </div>

              <br>
              <table
              v-bind:class="move"
              >
                  <tr>
                    <th>NO</th>
                    <th>学習項目</th>
                    <th>内容</th>
                    <th>作品</th>
                    <th>完了日付</th>
                  </tr>
                  <tr v-for="task in tasks.other"
                      v-if="task.is_finished===activeoption"
                  >
                    <td>{{task.number}}</td>
                    <td>{{task.study_item}}</td>
                    <td>{{task.description}}</td>
                    <td><a v-bind:href="task.url" target="_blank">{{task.title}}</a></td>
                    <td>{{task.date}}</td>
                  </tr>
                  <tr v-for="task in tasks.other"
                      v-if="activeoption==='0'"
                  >
                    <td>{{task.number}}</td>
                    <td>{{task.study_item}}</td>
                    <td>{{task.description}}</td>
                    <td><a v-bind:href="task.url" target="_blank">{{task.title}}</a></td>
                    <td>{{task.date}}</td>
                  </tr>
              </table>        
            </section>
          </div>
        </section>
  </div>
  `

};
new Vue({
  el:"#tab",
  data:{
    },
  components:{
    "tab-skill":tabSkill,
  },




});