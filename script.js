const main = document.getElementById('main');
const adduserbtn = document.getElementById('add-user');
const doublebtn = document.getElementById('double');
const showmillinoarebtn = document.getElementById('show-millionaires');
const sortBtn =  document.getElementById('sort');
const calculateWealthBtn =document.getElementById('calculate-wealth');

let data =[];
getRandomUser();
getRandomUser();
getRandomUser();


async function getRandomUser()
{
const res= await fetch('https://randomuser.me/api');
const data =await res.json();
const user  =data.results[0];
const newUser={
   name:`${user.name.first} ${user.name.last}`,
   money:Math.floor(Math.random()* 100000),
};
addData(newUser);
console.log(data);
}

function addData(obj)
{
    data.push(obj);
    updateDom();
}
//map functioin
function doublemoney()
{
    data= data.map((user)=>{
        return {...user, money:user.money*2}
    })
    updateDom();
}
//filter only millionares 
function showMillionares(){
    data =data.filter((user)=>user.money >100000);
    updateDom();
}

///sorting method 
function sortbyRichest()
{
    data.sort((a,b)=> b.money-a.money);
    updateDom();
}
function updateDom(providedData= data)
{
    main.innerHTML= '<h2><strong>Person</strong> Wealth</h2>'
    providedData.forEach((item) => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML =`<strong>${item.name}</strong> ${item.money}`
        main.appendChild(element);
    })
}

 
adduserbtn.addEventListener('click', getRandomUser);
doublebtn.addEventListener('click', doublemoney);
showmillinoarebtn.addEventListener('click',showMillionares);
sortBtn.addEventListener('click',sortbyRichest); 