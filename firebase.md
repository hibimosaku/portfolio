##エラー1
<input 　v-model="stydyitem"　type="text" placeholder="study_item" />
##正解1
v-modelの場所を変えたらいけた
<input type="text" placeholder="study_item"　v-model="stydyitem" />
##エラー2
    dataup:function(){
      firebase.database().ref('todolists').push({
        studyitem:this.studyitem,
        title:this.title,
        description:this.description
        
      });
##正解2
    dataup:function(){
      firebase.database().ref('todolists').push({
        studyitem:'this.studyitem',
        title:'this.title',
        description:'this.description'
        
      });
