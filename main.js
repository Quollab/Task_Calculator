col1=document.getElementById("col1");
opr=document.getElementById("operation");
col2=document.getElementById("col2");
historyele=document.getElementById("lastval");
let a=0,b=0,ans=0,deci=0,check="",cnt=0;
function clearnow(){
    col1.innerHTML="";
    col2.innerHTML="";
    opr.innerHTML="";
    a=0;b=0;ans=0;deci=0;
}
function update(str){
    if(document.getElementById("firstdis")) clearnow();
    if(str=='.'){
        if(deci!=1) col2.innerHTML=col2.innerHTML+str;
        deci=1;return;
    }
    if(deci==1 && str[0]=='0'){
        col2.innerHTML=col2.innerHTML+str;
        return;
    }
    let prev=b;
    b=parseFloat(col2.innerHTML+str)
    if(b.toString()!=col2.innerHTML+str){
        alert("Maximum Limit Attained!");
        b=prev;
        return;
    }
    col2.innerHTML=col2.innerHTML+str;
}
function backspace(){
    if(document.getElementById("firstdis")) clearnow();
    if(col2.innerHTML=="") return;
    col2.innerHTML=col2.innerHTML.slice(0, -1);
    b=parseFloat(col2.innerHTML);
}

function updatehistory(k){
    var arr=(JSON.parse(localStorage.getItem("History"))||[]);
    // if(arr==null) arr=[];
    
    // console.log(typeof(arr))
    if(k==1){
        var value=a.toString()+check+b.toString()+"="+ans.toString();
        arr.push(value);
    }
    if(arr.length==0) return;
    if(arr.length>10) arr.shift();
    historyele.innerHTML="<div>";
    var i=arr.length-1;
    for(let j=0;j<arr[i].length;j++){
        if(arr[i][j]=='=')
            historyele.innerHTML+="<br>";
        historyele.innerHTML+=arr[i][j];
    }
    historyele.innerHTML+="</div>";
    localStorage.setItem("History",JSON.stringify(arr));
}
function operate(str){
    if(document.getElementById("firstdis")) clearnow();
    if(b!=0) a=b;b=0;
    deci=0;cnt=0;
    col1.innerHTML=a.toString();
    col2.innerHTML="";
    opr.innerHTML=str;check=str;
    if(str=='*') opr.innerHTML="X";
    if(str=='/') opr.innerHTML="&#247;";
}
function solve(){
    if(document.getElementById("firstdis")) clearnow();
    if(check==""){
        alert("Incomplete Operation");
        return;
    }
    if(check=='+'){
        ans=a+b;
        col1.innerHTML=ans.toString();
        col2.innerHTML="";
        opr.innerHTML="";
    }
    if(check=='-'){
        ans=a-b;
        col1.innerHTML=ans.toString();
        col2.innerHTML="";
        opr.innerHTML="";
    }
    if(check=='*'){
        ans=a*b;
        col1.innerHTML=ans.toString();
        col2.innerHTML="";
        opr.innerHTML="";
    }
    if(check=='/'){
        ans=a/b;
        col1.innerHTML=ans.toString();
        col2.innerHTML="";
        opr.innerHTML="";
    }
    if(check=='%'){
        ans=a*b/100;
        col1.innerHTML=ans.toString();
        col2.innerHTML="";
        opr.innerHTML="";
    }
    updatehistory(1);
    a=ans;b=0;ans=0;check="";deci=0;cnt=0;
}
updatehistory(0);

function showhis(){
    var arr=(JSON.parse(localStorage.getItem("History"))||[]);
    if(cnt==arr.length){
        return;
    }
    clearnow();
    let i=arr.length-1-cnt;
    let sw=0;
    for(let j=0;j<arr[i].length;j++){
        if(sw==0) col1.innerHTML+=arr[i][j];
        else col2.innerHTML+=arr[i][j];
        if(arr[i][j]=='=') sw=1;
    }
    b=parseFloat(col2.innerHTML);
    cnt=cnt+1;
    if(cnt==arr.length) return;
    historyele.innerHTML="<div>";
    i=arr.length-1-cnt;
    for(let j=0;j<arr[i].length;j++){
        if(arr[i][j]=='=')
            historyele.innerHTML+="<br>";
        historyele.innerHTML+=arr[i][j];
    }
    historyele.innerHTML+="</div>";
}