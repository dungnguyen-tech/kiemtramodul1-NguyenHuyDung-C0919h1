let a = [22,8,4,7,21,5,7];
document.getElementById("a").innerHTML = "Các phần tử của mảng "+a;
function tryRemoveFromArray() {
    let element = Number(document.getElementById("inElement").value);
    let index ;
    for(let i=0 ; i<a.length; i++){
        if(element == a[i]){
            a.splice(i,1);
        }
    }
    document.getElementById("result").innerHTML = "Các phần tử của mảng mới là  "+a;
};
