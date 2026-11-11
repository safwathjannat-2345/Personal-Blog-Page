const container=document.getElementById('blog-container');
let currentpage=1;
let perpagelimit=5;
const searching=document.querySelector(".search");

const blogpost=[

    {
        title:"Exploring The mercy of Nature",
        Image:"https://images.trvl-media.com/place/956/6a04204d-7cda-4114-940a-60e1017eac42.jpg",
        Category:"Travel",
        description:"My Recent Trip to Cox's Bazar was really a Refreshing Journey Capturing the Stunning views and sea waves .",
        date:"1 Aug 2025",
        
    },
     
    {
        title: "My favorite Cheese Pasta",
        Image:"https://kitchenmason.com/wp-content/uploads/2022/09/Soured-Cream-Pasta-6-82.jpg",
        Category:"Food",
        description:"Learn How to craft Resturant style creamy and cheesy pasta right at home.A simple yet mouthwatering recipe tailored for quick comfort food cravings.",
        date:"2 Dec 2025",
    },

    {
        title:"Exploring C++",
        Image:"https://miro.medium.com/v2/resize:fit:1400/0*ZpjhBs0gR5oSd3Il",
        Category:"Tech",
        description:"Diving deep into the fundamentals and power of the C++ Standard Template Library.",
        date:"26 Dec 2025",
    },
    {
        title:"Birthday Cake",
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGZZEgbfF4-yp5sEbr4oH_7QqAKmAJZBa7D_0JzxXKaZ07AwVVdAD6y306&s=10",
        Category:"Food",
        description:"Step-by-step guide to baking a rich, moist, and delicious homemade chocolate cake.Perfect sweet treat for celebrating special moments with friends and family",
        date:"1 Feb 2026",
    },
    {
        title :"Sylhet In Winter",
        Image:"https://www.top10bd.com/wp-content/uploads/2019/09/Bisnakandi-1024x683.jpg",
        Category:"Travel",
        description:"Enjoying the cool breeze, misty mornings, and scenic beauty of hills was an unforgettable experience",
        date:"17 Feb 2026",
    },
    {
        title:"Exploring Old Dhaka",
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXUXB6ZCyhqHyoRFbmoYQobpF07V-Vd6NF6pzuqvW_tUtHISPYkN5I7ZWO&s=10",
        Category:"Travel",
        description:"A vibrant day trip immersing in the historical heritage of Lalbagh Fort.Discovering the rich culture, architecture, and timeless charm of Old Dhaka.",
        date:"8 Nov 2026",
    },
    {
        title:"Data Structure and algorithm",
        Image:"https://st4.depositphotos.com/41285240/83849/v/450/depositphotos_838499020-stock-illustration-dsa-low-poly-letter-logo.jpg",
        Category:"Tech",
        description:"A structured personal roadmap to mastering fundamental DSA concepts effectively.",
        date :"21 Nov 2026",
    }

];
let currentdisplay=blogpost;
const displayBlogs=(posts)=>{
    container.innerHTML="";
    currentdisplay=posts;
    const startIndex=(currentpage-1)*perpagelimit;
    const endIndex=currentpage*perpagelimit;
    const limitpost=posts.slice(startIndex,endIndex);

limitpost.forEach(post=>{


    const card=document.createElement("div");
    card.classList.add("blog-card");

    card.addEventListener("click",()=>{
        if(post.link){
            window.open(post.link,"blank");
        }
        else{
            alert("No Video is Added yet !");
        }
    });


    
    const category=document.createElement("span");
    category.classList.add("category");
    category.textContent=post.Category;

    const img=document.createElement("img");
    img.src=post.Image;
    img.classList.add("blog-image");

    const title=document.createElement("h3");
    title.textContent=post.title;

    const description=document.createElement("p");
    description.textContent=post.description;

    const date=document.createElement("small");
    date.textContent=post.date?post.date:"None";




   card.appendChild(category);
   card.appendChild(img);
   card.appendChild(title);
   card.appendChild(description);
   card.appendChild(date);

   container.appendChild(card);
});
};
displayBlogs(blogpost);

const techbutt=document.getElementById("tech");
const travelbutt=document.getElementById("Travel");
const foodbutt=document.getElementById("Food");
const allbutt=document.getElementById("All");

techbutt.addEventListener("click",()=>{
    const techpost=blogpost.filter(post=>post.Category==="Tech");
    currentpage=1;
    displayBlogs(techpost);

});

foodbutt.addEventListener("click",()=>{
    const foodpost=blogpost.filter(post=>post.Category==="Food");
    currentpage=1;
    displayBlogs(foodpost);
});

travelbutt.addEventListener("click",()=>{
   const travelpost=blogpost.filter(post=>post.Category==="Travel");
   currentpage=1;
   displayBlogs(travelpost);
});
allbutt.addEventListener("click",()=>{
    currentpage=1;
    displayBlogs(blogpost);
});

const nextbtn=document.querySelector(".next");
nextbtn.addEventListener("click",()=>{
    const totalPages = Math.ceil(currentdisplay.length / perpagelimit);
    if(currentpage<totalPages){
    currentpage++;
    displayBlogs(currentdisplay);}
});
const prevbtn=document.querySelector(".prev");
prevbtn.addEventListener("click",()=>{
    if(currentpage>1){
    currentpage--;
    displayBlogs(currentdisplay);}
});

searching.addEventListener("input",(e)=>{
const searchtext=e.target.value.toLowerCase();

const filterpost=blogpost.filter(post=>
    post.title.toLowerCase().includes(searchtext)
);
currentpage=1;
displayBlogs(filterpost);





});



