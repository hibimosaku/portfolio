
var tabSkill={
  data:function(){
    return{
      activeTab:"tabs-1",
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




            
                
            </section>
            <section v-show="activeTab ==='tabs-2'">
                <h3>現状2</h3>
            </section>
            <section v-show="activeTab ==='tabs-3'">
                <h3>現状3</h3>
            </section>
            <section v-show="activeTab ==='tabs-4'">
              <h3>現状4</h3>
            </section>
          </div>
        </section>
    </div>
  `

};
new Vue({
  el:"#tab",
  data:{
    task_progress:['すべて','完成','未完成'],
    activeoption:"0",
    is_finished:{
      true:'完成',
      false:'未完成'
    },
    tasks:
    { 
        coder:[
            {
              number:'1',
              study_item:'scss',
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
        javascript:[
            {
              number:'1',
              study_item:'scss',
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
        php:[
            {
              number:'1',
              study_item:'scss',
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
        その他:[
          {
            number:'1',
            study_item:'scss',
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
    },
  components:{
    "tab-skill":tabSkill,
  },




});