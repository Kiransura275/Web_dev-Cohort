const title = document.getElementById("name");
const desc = document.getElementById ("description");
const submit = document.getElementById("submit");
const output= document.getElementById("output");
const stars = document.getElementById("stars");
const noItems = document.getElementById("no-items");

const elementCreator = function( tag , data ){
    const ele = document.createElement(tag);
    if (data) ele.textContent = data;
    return ele;

}

const images=["one.svg","two.svg","three.svg","four.svg","five.svg","six.svg"];
let i = 0;





const addElement = function(){
    let user = title.value.toUpperCase();
    let data = desc.value.toLowerCase();
    if(!user.trim() || !data.trim()){
        alert("Fill All Fields");
        console.log("hi");
        return;
    }
    title.value = "";
    desc.value = "";

    const item = elementCreator("li");
    item.classList.add("item");
    const heading = elementCreator("h6");
    const image = elementCreator("img");

    heading.appendChild(image);


    const span = elementCreator("span",user);
    heading.classList.add("name");

    


 
    image.classList.add("img");
    image.src=`./assets/${images[i]}`;
    i= (i+1) % 6;
    heading.appendChild(span);

    const starCont = elementCreator("div");
    starCont.classList.add("input-box", "star");
    for (let i of stars.children){
        const sp =elementCreator("span");
        for (let j of i.classList) 
            sp.classList.add(j);

        starCont.appendChild(sp);
        i.classList.remove("change");
        
    }
    heading.appendChild(starCont);

   



    const move = elementCreator("div");
    const review = elementCreator("p",data);
    const date = elementCreator("p",`${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`);
    date.classList.add("date");
    review.classList.add("review");
    move.classList.add("mover");


    move.appendChild(review);
    move.appendChild(date);


    item.appendChild(heading);
    item.appendChild(move);
    output.appendChild(item);

    checkList();


    
} 



const rateWithStar =(num) => {
    let c =0 ;
    for(let i of stars.children){

    
        // console.log(i);
        if(c < num){
            i.classList.add("change");
            c+=1;
        }
        else
        i.classList.remove("change");
    
    

    }
    

    
}

function checkList(){
    if(output.children.length === 0){
        noItems.style.display="flex";
    }
    else
    {
          noItems.style.display="none";
    }
    

}
checkList();





















submit.addEventListener('click',addElement);

