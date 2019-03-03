var count=2;

function backclick(){
    count=count-1;
    var img=window.document.getElementById("image");

    if(img.src!=count+".jpg")
    {
        img.src="loading.gif";
    }
    img.src=count+".jpg";

    if(count==1)
    {
        var backbtn=document.getElementById("backbtn");
        backbtn.disabled=true; 
    }
    var nextbtn=document.getElementById("nextbtn");
    nextbtn.disabled=false;
}

function nextclick(){
    count=count+1;
    var img=window.document.getElementById("image");
    if(img.src!=count+".jpg")
    {
        img.src="loading.gif"
    }
    img.src=count+".jpg";
    console.log(img.src);
    if(count==3)
    {
        var nextbtn=document.getElementById("nextbtn");
        nextbtn.disabled=true;
    }
    var backbtn=document.getElementById("backbtn");
    backbtn.disabled=false;
}
