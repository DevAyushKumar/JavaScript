//indexOf and lastIndexOf
const index = ['js', 'css', 'html', 'js'];
console.log(index.indexOf('js'));
console.log(index.lastIndexOf('js'));

//includes
console.log(index.includes('css'));

//find and findindex
const score = [29, 35, 68, 89, 90, 100];
const targetScore = score.find(score => score > 80);
console.log(targetScore);

//Some and every
console.log(score.some(score => score > 80));
console.log(score.every(score => score > 0));