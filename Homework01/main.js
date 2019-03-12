

var item = [];
var allarray = [];
var counter=0;
var t = 0;
var flag=0;
//製造物件
function someCodeToCreateNewItem(todo) {
    //放入矩陣
    item.push({ value:todo, complete:false, num:counter});

    const show = document.getElementById("todo-list")
    //製造元素
    const itemNode = document.createElement("li");
    const wrapper = document.createElement("div");
    const list = document.createElement("h1");
    const cross = document.createElement("img");
    const checkbox = document.createElement("input");
    const lab = document.createElement("label");
    //設定屬性
    itemNode.setAttribute("class","todo-app__item");
    wrapper.setAttribute("class","todo-app__checkbox");
    wrapper.setAttribute("id","wrap"+counter);
    list.setAttribute("class","todo-app__item-detail");
    list.setAttribute("id","list"+counter);
    cross.setAttribute("src","x.png");
    cross.setAttribute("class","todo-app__item-x");
    checkbox.setAttribute("id",counter);
    checkbox.setAttribute("type","checkbox");
    lab.setAttribute("for",counter);
    
    list.innerHTML=todo;//放入文字
    //設total
    if(flag==0){
        t++;
        var total = document.getElementById("total");
        total.innerHTML=t+"left";
    }
    //連結元素
    wrapper.appendChild(checkbox);
    wrapper.appendChild(lab);
    itemNode.appendChild(wrapper);
    itemNode.appendChild(list);
    itemNode.appendChild(cross);
    show.appendChild(itemNode);
    //設定取消
    cross.addEventListener("click", function(){
        show.removeChild(itemNode);
    },false)
    //設定按鈕
    var checknum = 0;
    var checkabs = document.getElementById(counter)
    checkabs.addEventListener("click", function(){
        var n = checkabs.getAttribute("id")
        console.log(n);
        item[n].complete=checkbox.checked;
        console.log(item[n].value);
        console.log(item[n].complete);

        checknum++;
        const node = document.getElementById("list"+n);
        if(checknum%2==1){
            node.style["textDecoration"]="line-through";
            node.style["opacity"]=0.5;
            t--;
            total.innerHTML=t+"left";
        }
        else{
            node.style["textDecoration"]="none";
            node.style["opacity"]=1;
            t++;
            total.innerHTML=t+"left";
        }
    },false)
    
    counter++;

}
//載入頁面
document.addEventListener('DOMContentLoaded',function(){
    const input = document.getElementById('todo-input');
    //按enter
    input.addEventListener('keyup', event => {
        if(event.keyCode == '13' && event.target.value !== '')
        {
            var todo = document.getElementById("todo-input").value;
            const newItem = someCodeToCreateNewItem(todo);
            event.target.value = '';
        }
    },false)
    //清除
    function elemdelete(){
        var elem = document.getElementById("todo-list");
        var child = elem.childNodes;
        for(var j = child.length-1; j>=0; j--)
            elem.removeChild(child.item(j));
        for(var r=0; r<=item.length-1; r++)
        {
            allarray[r]=item[r];
        }
        for(var e=0; e<=item.length-1; e++)
        {
            item.pop();
        }
    }
    //clear
    const clear = document.getElementById("clear")
    clear.addEventListener("click",function(){
        elemdelete();
        t=0;
        var total2 = document.getElementById("total");
        total2.innerHTML=t+"left";
    })
    //按all
    const all = document.getElementById("all")
    all.addEventListener("click",function(){
        elemdelete();
        var arraynum = allarray.length-1;
        for(var i=0; i<=arraynum; i++)
        {
            someCodeToCreateNewItem(allarray[i].value);
        }
    })
    //按complete
    const complete = document.getElementById("complete")
    complete.addEventListener("click",function(){
        var completearray=[];
        for(var w=0; w<=item.length-1; w++)
        {
            if(item[w].complete==true)
            {
                completearray.push(item[w]);
            }
        }
        elemdelete();
        var completenum = completearray.length-1;
        flag=1;
        for(var k=0; k<=completenum; k++)
        {    
            someCodeToCreateNewItem(completearray[k].value);
        }
        flag=0;
    })
    //按active
    const active = document.getElementById("active")
    active.addEventListener("click",function(){
        var activearray=[];
        for(var y=0; y<=item.length-1; y++)
        {
            if(item[y].complete==false)
            {
                activearray.push(item[y]);
            }
        }
        elemdelete();
        var activenum = activearray.length-1;
        flag=1;
        for(var u=0; u<=activenum; u++)
        {
            someCodeToCreateNewItem(activearray[u].value);
        }
        flag=0;
    })
},false)
