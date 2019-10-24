function printFibonaci(){
    let num = [];
    let input = document.getElementById('input').value;
    let cont = [];
    num[0] = 1;
    num[1] = 1;
    for (let i = 2; i < input; i++) {
        num[i] = num[i - 2] + num[i - 1];
    }
    for(let j =0; j < num.length; j++){
        if(num[j] < input){
            cont.push(num[j])
        }
    }document.write(cont+'<br>');
}