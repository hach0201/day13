// exercice de Selection Sort

const tableau = [22, 100, 50, 73, 4, 18, 20, 6];
const n = tableau.length;

for (let j = 0; j < n - 1; j++) {
  let min = j;

  for (let i = j + 1; i < n; i++) {
    if (tableau[i] < tableau[min]) {
      min = i;
    }
  }

  if (min !== j) {
    const temp = tableau[j];
    tableau[j] = tableau[min];
    tableau[min] = temp;
  }
}

console.log("nouveau tableau : ", tableau);

//exercice de Bubble Sort

const bubble = [9, 5, 2, 1, 4, 0, 8];
const m = bubble.length;

for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < m - 1; j++) {
        if (bubble[j] > bubble[j + 1]) {
            const temp = bubble[j];
            bubble[j] = bubble[j + 1];
            bubble[j + 1] = temp;
        }
    }
}

console.log("nouveau tableau :", bubble);

//exercice de insertion sort

const insert = [8, 4, 16, 1, 7, 3, 2];
const o = insert.length;

for (let i = 1; i < o; i++) {
    let j = i;
    
    while (j > 0 && insert[j - 1] > insert[j]) {
        const temp = insert[j];
        insert[j] = insert[j - 1];
        insert[j - 1] = temp;
        
        j = j - 1;
    }
}

console.log("nouveau tableau :", insert);

//exercice de linear search

const linear = [11, 8, 9, 7, 19, 2];
const target = 2;
const p = linear.length;
let trouve=false;

for (let i=0; i<p; i++){
    if (linear[i]===target){
        trouve=true;
        break;
}
}
console.log(`le target est ${target}`);



//exercice du matrice

const matrice = [
    [0, 5, 8, 19],
    [2, 0, 74, 0],
    [0, 6, 0, 89]
];
console.log(matrice);
typeof(matrice);

const a=matrice.length;
let compter=0;  //un compteur

for(let i=0; i<a; i++){
    for (let j=0; j<matrice[i].length; j++){    //deux dimensions i et j 
        if (matrice[i][j]===0){
        compter++;
        }
    }
}
console.log('le 0 se trouve '+compter+' fois');