
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
                <h3>現状1</h3>
                <h3>現状1</h3>
                <h3>現状1</h3>
                <h3>現状1</h3>
                
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
    tasks:[
      {No:"1",
      list:'scss',
      url:'aaa@bbb',
      progress:'未完成',
      progress_key:'2'
      },
      {
        No:"2",
        list:'scああああああss',
        url:'aaccca@bbb',
        progress:'未完成',
        progress_key:'2'
      },
      {
        No:"3",
        list:'scいいいいああss',
        url:'aaccdddca@bbb',
        progress:'完成',
        progress_key:'1'
      },
    ],
  },

  components:{
    "tab-skill":tabSkill,
  },




});