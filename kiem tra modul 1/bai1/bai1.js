let a = [10,5,2,8,-1,6,8];
let max = a[0];
function findMaxScore(n) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];
        }
    }
    alert("so lon nhat la:" +max);
};