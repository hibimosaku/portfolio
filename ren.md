/*********************************
【Object操作の練習】
**********************************/
const data = {
  '01DKJMYGSTPPKQ3J5FYVVC9PCK': {
      description: '<DUMMY>',
      stydyitem: '<DUMMY>',
      title: '<DUMMY>',
      url: 'https://google.com/ja'
  },
  '01DKJMYWZ58QPC4675ACZNWK55': {
      description: '<DUMMY>',
      stydyitem: '<DUMMY>',
      title: '<DUMMY>',
      url: 'https://yahoo.com'
  },
  '01DKJMZ6HY7VQ0BN59S3J6TMYB': {
      description: '<DUMMY>',
      stydyitem: '<DUMMY>',
      title: '<DUMMY>',
      url: 'http://portfolio.jp/ja'
  },
  '01DKJMZEDJ4XN3T38BNCHPN9PE': {
      description: '<DUMMY>',
      stydyitem: '<DUMMY>',
      title: '<DUMMY>',
      url: 'http://techacademy.jp'
  }
};
console.log(data);

//問題①
var tasks1=Object.values(data);
console.log(tasks1);
answer1=tasks1.filter((value1)=>{
  return value1.url.match(/^https/)!=null;
});
console.log(answer1);

//問題②
var tasks2=Object.entries(data);
var answer2=tasks2.filter((value2)=>{
  return value2[1].url.match(/jp$/)!=null;
});
console.log(answer2);

//問題③
var tasks3=Object.entries(data);
var tasks3_1=tasks3.filter((value3)=>{
  return value3[1].url.match(/ja$/)!=null;
});
var answer3=tasks3_1.map((value3)=>{
  return value3[0];
});
console.log(answer3);

//先生の模範解答
// Answer 1 ===================================================================
const a1 = Object.values(data)
    .filter(x => x.url.match(/^https/))

console.log(a1)

// Answer 2 ===================================================================
const a2 = Object.entries(data)
    .filter(x => x[1].url.match(/jp$/))

console.log(a2)

// Answer 3 ===================================================================
const a3 = Object.entries(data)
    .filter(x => x[1].url.match(/ja$/))
    .map(x => x[0])

console.log(a3)


//正規表現で変数を使う場合
var aaa='com';
reg=new RegExp(aaa);
var tasks4_1=tasks3.filter((value4)=>{
  return value4[1].url.match(reg)!=null;
});
console.log(tasks4_1);

/*********************************
【正規表現の練習】
**********************************/

//例
var str = "https:ABCDEFG";
str +='http:abcdefg';
// str +='AaAbcc';
var result = str.match(/http/gi);
console.log(result);

result.forEach(value => {
  console.log(value);
});
for(var i=0,len=result.length; i<len; i++){
  console.log(result[i]);
}

data={
  url1:'https:',
  url2:'httpppp',
  url3:'aifdsioau'
};
var task=Object.values(data);
console.log(task);

var result=task.filter(function(value){
  return value.match(/a+/);
});
console.log(result);

// var result111=task.match(/a/);
// console.log(result111[3]);

// var result = data[1].match(/[a-c]/);
// console.log(result);



// var answer=data.match(/[h]/);

// console.log(answer);

//正規表現で変数を使う場合
var aaa='com';
reg=new RegExp(aaa);
var tasks4_1=task.filter((value4)=>{
  return value4.url.match(reg)!=null;
});
console.log(tasks4_1);