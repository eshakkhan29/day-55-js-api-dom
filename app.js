// এইবার মাইলস্টোনকে কব্জায় আনার পালা। প্রাকটিস/রিভিশন ডে (মডিউল ৩৬.৫)

// #module_release #intermediate_js_milestone #module_36_5

// আজকে একটু বাড়তি কষ্ট করবে সারা জীবন এইটার সুবিধা পাবে। তাই আজকে ফাটিয়ে দাও। জাভাস্ক্রিপ্ট এর ES6 এর কয়েকটা জিনিস বিশেষ করে let, const তারপর arrow function, এছাড়াও হালকা করে map, forEach একটু দেখে রাখো। এছাড়াও ধীরে ধীরে === এর জগতে প্রবেশ করতে থাকো। খুব বিশেষ দরকার না হলে == ইউজ করবে না। আর API জিনিসটাতো তোমার ফ্রেন্ড হয়েই থাকবে। মোটামুটি লাগবে। তাই সেটাও একটু ভালোমতো প্রাকটিস করো। দরকার হলে মডিউল এর ভিডিওগুলো যেখানে যেখানে ক্লিয়ার মনে হচ্ছে না সেগুলা ফটাফট আরেকবার দেখে ফেলো। এইটাই গুছিয়ে নেয়ার চান্স। কোথাও বুঝতে না পারলে গুগল মামাকে জিজ্ঞেস করো। গুগল মামা ঠিকমতো কিছু না বললে, ইউটিউব আন্টি এর কাছে যাও। সেও কিছু না বললে গুছিয়ে এই গরূপে প্রশ্ন করে ফেলো। সুযোগ থাকলে গুগল মিট এ জয়েন করো।  



// .

// মাইলস্টোন ৬ চেকলিস্ট 

// ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো। 

// const myDitails = {
//     name: 'eshak khan',
//     age: 24,
//     education: {
//         school: 'darunnazar',
//         madrasha: 'darunnazat madrasha',
//         college: 'kabinazrul college',
//         bsc: 'chandpur gov college'
//     },
//     mother:'rabia beguam',
//     father:'Ibrahim khan',
//     hobbis:['football','batbinton','coding'],
//     kikoren: function () {
//          return console.log(this.name);
//     }
// }
// myDitails.kikoren();


// ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো। 

// const myTamplateSting = `
//     <h3>${myDitails.education.madrasha}</h3>
//     <h5>${myDitails.hobbis[1]}</h5>
// `;

// ৩.১. শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে। 

// const man = () => 89;
// console.log(man());

// ৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ৭ দিয়ে ভাগ করে ভাগফল রিটার্ন করবে। 

// const man2 = (man) => man / 7;
// console.log(man2(14));

// ৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও। 

// const man3 = (man1, man2) => (man1 + man2) / 2;
// console.log(man3(2, 4));  

// ৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 

// const man4 = (man1, man2) => {
//     const sum = man1 + 7;
//     const sum2 = man2 + 7;
//     const result = sum + sum2;
//     return result;
// }
// console.log(man4(5, 3));

// ৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 

// const numbers = [14, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// const newNumbers = numbers.map(number => number / 7);
// console.log(newNumbers);

// ৫. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 

        // map = অ্যারে এর উপরে ফর লুপ চালায়।
        // forEach = ekhane o ekoi map er motoi kaj kore . but ekhane sudu ekta ke array hisabe dibe.
        // filter = eta diye array er vitorer ja ache take ekta ekta kore dekhe dekhe ja ja milbe take take output hisabe dibe.
        // find = eta diye sudu matro ektai dibe jar sathe milbe . jodi o mil onek gula pawya jay tar pore o je sobar prothome ache take e output hisabe dibe. 

// ৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।

// const array1 = ['man', 'taka', 'pysa', 'onek kisu'];
// const [sonkha, balance, lol, onek] = array1;
// console.log(balance);

// ৭. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে। 
// ৮. প্রত্যেকটা ফটোতে ক্লিক করলে উপরে আরেকটা div থাকবে। ক্লিক করার পর ডাইনামিকভাবে ওই ফটো এর ডাটা লোড করবে। সেটা করার জন্য আগের ডাটা লোড করার API এর লিংক এর পরে photos এর পরে ডাইনামিকভাবে ${id} বসিয়ে দিবে। এরপর ডিটেইল অংশে photo এর url দিয়ে মেইন ইমেজ এবং thumbnail ইমেজ দুইটাই দেখাবে। সাথে সাথে title প্রপার্টিও দেখাবে। 
// ৯. তুমি যে ডাটা লোড করেছো। বা ডাটা ওয়েবসাইট এ দেখাচ্ছ। সেই কোড এর মধ্যে arrow ফাংশন ইউজ করতে পারতেছো কিনা। যখন লুপ চালাচ্ছ সেখানে forEach ইউজ করতে পারতেছো কিনা। 

const getPhotos = () => {
    document.getElementById('spinner').classList.remove('d-none');
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayPhoto(data))
}

const displayPhoto = (photos) => {
    const colCard = document.getElementById('row');
    photos.forEach(photo => {
        const div = document.createElement('div');
        div.innerHTML = `
            <img onclick ="getDitails('${photo.id}')" src="${photo.thumbnailUrl}" class="card-img-top">
            <div class="card-body bg-secondary rounded-bottom text-white">
            <h5 class="card-title">${photo.title}</h5>
        `;
        div.classList.add('card', 'col', 'border-0', 'rounded-3');
        colCard.appendChild(div);
        });
    document.getElementById('spinner').classList.add('d-none');
}

const getDitails = (id) => {
    document.getElementById('spinner').classList.remove('d-none');
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    .then(res => res.json())
    .then(data => showDitails(data))
}

const showDitails = (photo) => {
    document.getElementById('detail-photo').innerHTML = `
            <img src="${photo.thumbnailUrl}">
            <img src="${photo.url}" class="mt-2">
            <div class="card-body rounded-bottom">
                <h5 class="card-title">${photo.title}</h5>
            </div>
    `;
    document.getElementById('spinner').classList.add('d-none');
}


// ১০. সিরিয়াস প্রাকটিস 

// হয় মডিউল ৩৩ ভালো করে দেখে ফেলো। বিশেষ করে the meal db রিলেটেড ৩৩-৫ থেকে ৩৩-৮ পর্যন্ত। তারপরে আরো সময় থাকলে এর আরেকটা খালতো ভাই the coktaildb থেকে কিছু জিনিস এনে দেখাবে। একজাক্টলি কি দেখাতে হবে। সেটা আমি বলে দিবো না। তুমি ওদের ওয়েবসাইট এ যাও। সেখানে কি কি লেখা আছে সেগুলা পড়ো। api গুলা এর ছোট করে কি কি করে বলা আছে। সেগুলা দেখো। তারপর কিছু ডাটা লোড করো। সেই ডাটাগুলো দেখাও। এইখানে সার্চ ফাংশনালিটি ইমপ্লিমেন্ট করো। অনেকটা mealdb এর মতো। আবার কোন একটাতে ক্লিক করলে সেটার ডিটেল দেখাবে। 

const getDrenk = () => {
    const inputValue = document.getElementById('input-drinks').value;
    document.getElementById('spinner').classList.remove('d-none');
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${inputValue}`)
    .then(res => res.json())
    .then(data => loadDitails(data.drinks))
}

const loadDitails = (drinks) => {
    const drinkShow = document.getElementById('drinks-show');
    drinkShow.innerHTML = "";
    drinks.forEach(drink => {
        const div = document.createElement('div');
        div.innerHTML = `
            <img onclick ="showDrinksDitails('${drink.idDrink}')" class="card-img-top" src="${drink.strDrinkThumb}" alt="">
            <h1>${drink.strDrink}</h1>
            <h3>${drink.strGlass}</h3>
            <p>${drink.strInstructions.slice(0, 150)}</p>
        `;
        document.getElementById('spinner').classList.add('d-none');
        div.classList.add('col');
        drinkShow.appendChild(div);
    });
}

const showDrinksDitails = (id) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(data => setDitailsDrinks(data.drinks[0]))
}

const setDitailsDrinks = (drink) => {
    document.getElementById('detail-photo').innerHTML = document.createElement('div').innerHTML = `
        <img src="${drink.strDrinkThumb}">
        <h1>${drink.strDrink}</h1>
        <h3>${drink.strGlass}</h3>
        <h5>${drink.strCategory}</h5>
        <p>${drink.strInstructions}</p>
        <span>Ingredient : ${drink.strIngredient1}, ${drink.strIngredient2}, ${drink.strIngredient3}, ${drink.strIngredient4}</span>
    `;
}


// এসাইনমেন্ট ৬ প্রিপারেশন: 

// ২৮ ফেব্রুয়ারি এসাইনমেন্ট ৬ আসবে। এ এসাইনমেন্ট এ ভালো করার জন্য API রিলেটেড জিনিসগুলো একটু বুঝে বুঝে করলেই বাকি কাজ হয়ে যাবে। অর্থাৎ কিভাবে API থেকে ডাটা নিবে। কিভাবে সেই ডাটা ওয়েবসাইট এ দেখাবে। কিভাবে একের বেশি API কল করবে। এমন জিনিসপাতি। 



// .

// পই পই করে হিসাব রাখতে হবে কোন কোন API তোমাকে error দিছে। 

// দরকার হলে ডায়রীতে নোটস এ লিখে রাখবে। 

// যারা এরর দেয়নি তাদের মাথায় তুলে রাখবে। 

// যারা এরর দিয়েছে তাদেরকেও খেয়াল রাখবে।

// এরর দেয়া API গুলো ধরে বেঁধে গরূপে নিয়ে আসবে। সাপোর্ট সেশনে নিয়ে আসবে। 