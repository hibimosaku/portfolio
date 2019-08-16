
var tabSkill={
  data:function(){
    return{
      move:"none",
      activeTab:"tabs-1",
      task_progress:['すべて','完成','未完成'],
      activeoption:"0",
      tasks:
      { 
          coder:[
            {
              number:'1',
              study_item:'旧ポートフォリオ',
              title:'旧ポートフォリオ',
              url:'http://portfolio.hibimosaku.jp/',
              is_finished:'true',
              description:'レスポンス済み。Bootstrapで作成。',
              date:'2019/03',
            },
            {
                number:'2',
                study_item:'コーディング模写①',
                title:'メルカリ模写',
                url:'./task/task/index.html',
                is_finished:'true',
                description:'レスポンス済み。画像は適当あいうえおかきくあいうえっかｆｋづさふぉえうあｆｄｓかｌｆじゃｆさけこさしすせそたちつでと',
                date:'2019/07/28',
              },
              {
                number:'3',
                study_item:'コーディング模写②',
                title:'アップル模写',
                url:'./task/task2/index.html',
                is_finished:'true',
                description:'レスポンス済み。画像は適当',
                date:'2019/08/06',
              },
              {
                number:'4',
                study_item:'scss',
                title:'-',
                is_finished:'true',
                description:'ネスト・レスポンシブをミックスイン',
                date:'2019/07',
              },
              {
                number:'5',
                study_item:'animate',
                title:'当サイト',
                is_finished:'true',
                description:'タブを押したらテーブルにアニメーション',
                date:'2019/08/12',
              },
              {
                number:'6',
                study_item:'scss',
                title:'-',
                is_finished:'false',
                description:'変数、演数、関数、制御ディレクティブ',
                date:'',
              },
              {
                number:'7',
                study_item:'scss',
                title:'-',
                is_finished:'false',
                description:'変数、演数、関数、制御ディレクティブ',
                date:'',
              },
              

          ],
          javascript:[
              {
                number:'1',
                study_item:'vue',
                title:'当サイト',
                url:'http://task.hibimosaku.jp/',
                is_finished:'false',
                description:'タブ機能、表示の絞り込み',
                date:'作業中',
              },
              {
                number:'2',
                study_item:'promise',
                title:'promise',
                url:'task/promise/promise.html',
                is_finished:'false',
                description:'マークダウン記法で入力。',
                date:'作業中',
              },
              {
                number:'3',
                study_item:'dddd',
                title:'mosaku',
                url:'http://task.hibimosaku.jp/',
                is_finished:'true',
                description:'aaaaaaaaa',
              },
          ],
          php:[
          ],
          other:[
            {
              number:'1',
              study_item:'git',
              title:'gitで管理',
              url:'https://github.com/hibimosaku/portfolio',
              is_finished:'true',
              description:'当サイトのソースコードを保存',
              date:'日々更新',
            },
            {
              number:'2',
              study_item:'npm',
              title:'-',
              url:'-',
              is_finished:'false',
              description:'-',
            },
            {
              number:'3',
              study_item:'scss',
              title:'mosaku',
              url:'http://task.hibimosaku.jp/',
              is_finished:'true',
              description:'aaaaaaaaa',
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
    coder_click(){
      alert("click")
    }
  },
  template:`
  <div>
        <ul class="tabs-menu">
          <li></li>
          <li
            v-bind:class="{active:activeTab==='tabs-1'}"
            v-on:click="activeTab='tabs-1'"
            v-on:click="move='animated slideInLeft slow'"
            v-on:click="coder_click"
            >
            コーダー
          </li>
          <li
            v-bind:class="{active:activeTab==='tabs-2'}"
            v-on:click="activeTab='tabs-2'"
            v-on:click="move='animated slideInLeft fast'"
            >
            Javascript
          </li>
          <li
            v-bind:class="{active:activeTab==='tabs-3'}"
            v-on:click="activeTab='tabs-3'"
            v-on:click="move='animated slideInLeft faster'"
            >
            PHP
          </li>
          <li
            v-bind:class="{active:activeTab==='tabs-4'}"
            v-on:click="activeTab='tabs-4'"
            v-on:click="move='animated slideInRight delay-1s'"
            >
            その他
          </li>
          <li></li>
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