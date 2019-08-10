
var tabSkill={
  data:function(){
    return{
      activeTab:"tabs-1",
      task_progress:['すべて','完成','未完成'],
      activeoption:"0",
      tasks:
      { 
          coder:[
              {
                number:'1',
                study_item:'コーディング模写①',
                title:'メルカリ模写',
                url:'http://task.hibimosaku.jp/',
                is_finished:'true',
                description:'レスポンス済み。画像は適当',
                date:'2019/07/28',
              },
              {
                number:'2',
                study_item:'コーディング模写②',
                title:'アップル模写',
                url:'http://task2.hibimosaku.jp/',
                is_finished:'true',
                description:'レスポンス済み。画像は適当',
                date:'2019/08/06',
              },
              {
                number:'3',
                study_item:'scss',
                title:'-',
                is_finished:'true',
                description:'主に、ネスト・レスポンシブの@mixin',
                date:'2019/07',
              },
          ],
          javascript:[
              {
                number:'1',
                study_item:'bbbb',
                title:'mosaku',
                url:'http://task.hibimosaku.jp/',
                is_finished:'true',
                description:'aaaaaaaaa',
              },
              {
                number:'2',
                study_item:'cccc',
                title:'mosaku',
                url:'http://task.hibimosaku.jp/',
                is_finished:'false',
                description:'aaaaaaaaa',
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
              {
                number:'1',
                study_item:'eeee',
                title:'mosaku',
                url:'http://task.hibimosaku.jp/',
                is_finished:'true',
                description:'aaaaaaaaa',
              },
              {
                number:'2',
                study_item:'scss',
                title:'mosaku',
                url:'http://task.hibimosaku.jp/',
                is_finished:'false',
                description:'aaaaaaaaa',
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
          other:[
            {
              number:'1',
              study_item:'jjjj',
              title:'mosaku',
              url:'http://task.hibimosaku.jp/',
              is_finished:'true',
              description:'aaaaaaaaa',
            },
            {
              number:'2',
              study_item:'scss',
              title:'mosaku',
              url:'http://task.hibimosaku.jp/',
              is_finished:'false',
              description:'aaaaaaaaa',
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
  },
  template:`
  <div>
        <h2>スキル</h2>
        <ul class="tabs-menu">
          <li
            v-bind:class="{active:activeTab==='tabs-1'}"
            v-on:click="activeTab='tabs-1'">
            コーダー
          </li>
          <li
            v-bind:class="{active:activeTab==='tabs-2'}"
            v-on:click="activeTab='tabs-2'">
            Javascript
          </li>
          <li
            v-bind:class="{active:activeTab==='tabs-3'}"
            v-on:click="activeTab='tabs-3'">
            PHP
          </li>
          <li
            v-bind:class="{active:activeTab==='tabs-4'}"
            v-on:click="activeTab='tabs-4'">
            その他
          </li>
        </ul>
        <hr>
        <section class="tabs-content">
          <div id="slide">
            <section v-show="activeTab ==='tabs-1'">



              <select name="task_progress" size="1"
                v-model="activeoption"
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
                <br>
              <table>
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
                    <td><a v-bind:href="task.url">{{task.title}}</a></td>
                    <td>{{task.date}}</td>
                  </tr>
              </table>        
                
            </section>
            <section v-show="activeTab ==='tabs-2'">

              <select name="task_progress" size="1"
                v-model="activeoption"
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
                <br>
              <table>
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
                    <td><a v-bind:href="task.url">{{task.title}}</a></td>
                    <td>{{task.date}}</td>
                  </tr>
              </table>        

            </section>
            <section v-show="activeTab ==='tabs-3'">

                <select name="task_progress" size="1"
                v-model="activeoption"
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
                <br>
              <table>
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
                    <td><a v-bind:href="task.url">{{task.title}}</a></td>
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

                <select name="task_progress" size="1"
                v-model="activeoption"
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
                <br>
              <table>
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
                    <td><a v-bind:href="task.url">{{task.title}}</a></td>
                    <td>{{task.date}}</td>
                  </tr>
                  <tr v-for="task in tasks.other"
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