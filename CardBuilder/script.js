function viewsCount(view){
    if(view<1000)return view.toString();
    else if(view>=1000  && view<=1000000)return ((Math.floor(view/1000)).toString()+"K");
    else return ((Math.floor(view/1000000)).toString()+"M");
}






function createCard(title, cname,views, monthsOld,duration,thumbnail){
    let t = document.createElement("div");
    t.className = "Title";
    t.innerHTML = title;
    document.querySelector(".Title").replaceWith(t);


    let c = document.createElement("div");
    c.className = "lside";
    c.innerHTML = cname;
    document.querySelector(".lside").replaceWith(c);

    let v = document.createElement("div");
    v.className = "mid";
    v.innerHTML = viewsCount(views);
    document.querySelector(".mid").replaceWith(v);

    let m = document.createElement("div");
    m.className = "rside";
    m.innerHTML = monthsOld.toString() + " months";
    document.querySelector(".rside").replaceWith(m);

    let tm = document.createElement("div");
    tm.className = "time";
    tm.innerHTML = duration;
    document.querySelector(".time").replaceWith(tm);


    let im =  document.createElement("img");
    im.id="rex";
    im.src=thumbnail;
    document.querySelector("#rex").replaceWith(im);

}


alert("thumbnail changing")

createCard("The default interactive shell is now zsh.", "Creative Teacher",78097, 5,"23:45","https://vnit.ac.in/wp-content/uploads/2024/05/Director-Dr.-Premlal-Patel-Sir-1-1536x1240.jpg");