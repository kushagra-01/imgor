let tags = [
    {
        bg:"https://i.imgur.com/1eQyuB1_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Robot",
        post:"4,900",
        color:"#276860",
    },
    {
        bg:"https://i.imgur.com/9r1qCDq_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Funny",
        post:"2,699,524",
        color:"#ab96b7",
    },
    {
        bg:"https://i.imgur.com/59NSmVP_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Dog",
        post:"211,825",
        color:"#168b72",
    },
    {
        bg:"https://i.imgur.com/avRBRpN_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Aww",
        post:"765,199",
        color:"#60aebb",
    },

    {
        bg:"https://i.imgur.com/4LBx79U_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Oc",
        post:"40,013",
        color:"#ab80b8",
    },
    {
        bg:"https://i.imgur.com/1z4dgZT_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Memes",
        post:"574,272",
        color:"#ba519f",
    },
    {
        bg:"https://i.imgur.com/nrFCOUB_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Gaming",
        post:"298,780",
        color:"#2b1a5a",
    },
    {
        bg:"https://i.imgur.com/DbQMO3A_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Staff Picks",
        post:"6,552",
        color:"#132d31",
    },

    {
        bg:"https://i.imgur.com/4kmYoey_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Awesome",
        post:"753,331",
        color:"#8472bd",
    },
    {
        bg:"https://i.imgur.com/bdRjrrI_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Science And Tech",
        post:"45,102",
        color:"#e47d57",
    },
    {
        bg:"https://i.imgur.com/AqOtMAc_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Otters",
        post:"534",
        color:"#328d67",
    },

    {
        bg:"https://i.imgur.com/tUX1dpv_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Unmuted",
        post:"14,543",
        color:"#263ba7",
    },
    {
        bg:"https://i.imgur.com/TYs43eJ_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Coffee",
        post:"9,231",
        color:"#383c64",
    },

    {
        bg:"https://i.imgur.com/4zY00kM_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Artcrawl",
        post:"7,089",
        color:"#ff51ba",
    },
    {
        bg:"https://i.imgur.com/htHbdhi_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Upliftng",
        post:"15,378",
        color:"#50207b",
    },
    {
        bg:"https://i.imgur.com/yRSxL07_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Dress Up Your Pet",
        post:"1,426",
        color:"#328d67",
    },

    {
        bg:"https://i.imgur.com/JdeWoaA_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Movies And Tv",
        post:"62,867",
        color:"#2084b0",
    },
    {
        bg:"https://i.imgur.com/4bOlFT2_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Crab",
        post:"1,976",
        color:"#4d549a",
    },

    {
        bg:"https://i.imgur.com/W5yeBvr_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Wholesome",
        post:"25,633",
        color:"#5d85c3",
    },
    {
        bg:"https://i.imgur.com/GEpMqov_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Parkour",
        post:"770",
        color:"#1e5f43",
    },
    {
        bg:"https://i.imgur.com/kQFyoG7_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Current Events",
        post:"62,867",
        color:"#699aaf",
    },
    {
        bg:"https://i.imgur.com/oB1KOoT_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Sci Fi",
        post:"62,867",
        color:"#56a2aa",
    },
    {
        bg:"https://i.imgur.com/mx3BWVq_d.jpg?maxwidth=500&shape=thumb&fidelity=high",
        title:"Hippo",
        post:"698",
        color:"#328d67",
    },
]
var page = 1;
var page_loading = false;
window.addEventListener('scroll',()=>{
    console.log("scrolled", window.scrollY) //scrolled from top
    console.log(window.innerHeight) //visible part of screen
    console.log(document.documentElement.scrollHeight)
    if(!page_loading&&(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight)){
        ++page;
        appendFun('hot','-viral','window',page, true, true, true )
    }
})
window.onscroll = function() {myFunction()};
function myFunction() {
  if (document.documentElement.scrollTop > 220) {
    document.getElementById('Navbar').style.position="absolute";
    document.getElementById('after_navbar').style.display='block';
    let nav = document.getElementById('filter');
    nav.style.position='fixed';
    nav.style.top = '10px';
    nav.style.width='85%'
  } else {
    document.getElementById('after_navbar').style.display='none';
    document.getElementById('Navbar').style.position="fixed";
    let nav = document.getElementById('filter');
    nav.style.position='relative';
    nav.style.backgroundImage='transparent';
  }
  
}

tags.forEach((el,i)=>{
    let tag  = document.getElementById('tagsDiv');
    const mainDiv = document.createElement('div');
    mainDiv.style.backgroundImage = `url(${el.bg})`;
    const Div = document.createElement('div');
    Div.style.backgroundColor=el.color;
    const div1 = document.createElement('div');
    div1.innerText=el.title;
    const div2 = document.createElement('div');
    div2.innerText = el.post+' Posts';
    Div.append(div1,div2);
    mainDiv.append(Div);
    tag.append(mainDiv);
});
let [section, sort, Window, showViral,showMature,albumPreviews] = ['hot','-viral','window', true, true, true ]
appendFun(section, sort, Window, page, showViral,showMature,albumPreviews);
async function appendFun(section, sort, Window, page, showViral,showMature,albumPreviews){
    try {
        page_loading=true;
       let url = `https://api.imgur.com/3/gallery/${section}/${sort}/${Window}/${page}?client_id=546c25a59c58ad7&showViral=${showViral}&mature=${showMature}&album_previews=${albumPreviews}`
        console.log(url);
        const res = await fetch(url);
        let data = await res.json();
        data= data.data;
        displayData(data)
    } catch (error) {
        console.log(error);
    }
}
function displayData(data){
    page_loading=false;
    data.map((ele)=>{
        // console.log(ele)
        let div1= document.createElement("div");
        div1.setAttribute("class","child");
        // let imgDiv=document.createElement('div');
        // imgDiv.setAttribute("class","imgdiv");
        let textDiv=document.createElement('div');
        textDiv.setAttribute("class","textdiv");
        var vid;
        if(ele.images&&ele.images[0]&&(ele.images[0].type=="image/jpeg"||ele.images[0].type=="image/png")){
            vid=document.createElement('img');
            vid.style.width='100%';
            vid.setAttribute("src",ele.images[0].link)
        }
        if(ele.images&&ele.images[0]&&ele.images[0].type=="video/mp4"){
            // imgDiv.style.height=(19/(ele.image[0].width)*100)/ele.image[0].height;
            vid=document.createElement('VIDEO');
            vid.style.width='100%';
            let source = document.createElement('source');
            source.setAttribute("src",ele.images[0].link);
            vid.append(source);
            vid.autoplay=true;
            vid.controls=false;
            vid.muted = true;
            vid.loop=true;
        }
        var name;
        if(ele.images){
            var name_div = document.createElement('div');
            name_div.setAttribute('class',"name_d");
            name=document.createElement("div");
            name.textContent=ele.title;
            name.setAttribute('class',"title")
            let count = document.createElement('div');
            count.setAttribute('class',"counts")
            let up_div = document.createElement('div')
            let up = document.createElement('div');
            up.innerHTML="<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><title>Upvote</title><path fill='currentColor' stroke='#ffffff' stroke-width='0' fill-rule='evenodd' clip-rule='evenodd' d='M7.197 2.524a1.2 1.2 0 011.606 0c.521.46 1.302 1.182 2.363 2.243a29.617 29.617 0 012.423 2.722c.339.435.025 1.028-.526 1.028h-2.397v4.147c0 .524-.306.982-.823 1.064-.417.066-1.014.122-1.843.122s-1.427-.056-1.843-.122c-.517-.082-.824-.54-.824-1.064V8.517H2.937c-.552 0-.865-.593-.527-1.028.52-.669 1.32-1.62 2.423-2.722a52.996 52.996 0 012.364-2.243z'></path></svg>"
            let up_count = document.createElement('div');
            up_count.innerText=ele.ups;
            up_div.append(up,up_count)

            let comments_div = document.createElement('div');
            let comments = document.createElement('div')
            comments.innerHTML="<svg width='16' height='16' viewBox='0 0 16 16' class='PostCommentsIcon' fill='none' xmlns='http://www.w3.org/2000/svg'><title>Comments</title><path fill='currentColor' stroke='#ffffff' stroke-width='0' d='M4.455 12.195l.367 1.105 1.037-.53c.266-.135.637-.412 1.039-.74.39-.319.872-.737 1.422-1.245h2.291a3.306 3.306 0 003.306-3.306V5.306A3.306 3.306 0 0010.611 2H5.306A3.306 3.306 0 002 5.306v2.656c0 1.34.933 2.461 2.185 2.75.008.172.025.335.046.479a6.622 6.622 0 00.168.803c.016.07.035.137.056.2z'></path></svg>"
            let comment_count = document.createElement('div');
            comment_count.innerText=ele.comment_count;
            comments_div.append(comments, comment_count)

            let views_div = document.createElement('div');
            let view = document.createElement('div')
            view.innerHTML="<svg width='16' height='16' viewBox='0 0 16 16' class='PostViewsIcon' fill='none' xmlns='http://www.w3.org/2000/svg'><title>Post views</title><path d='M8 2.5C4.74998 2.5 2.30142 5.50267 1.27514 6.77517C0.925337 7.20917 0.908553 7.76483 1.2278 8.16583C2.22527 9.41833 4.6991 12.5 8 12.5C11.3686 12.5 13.8396 9.31133 14.796 8.0905C15.0769 7.732 15.0674 7.2535 14.7692 6.8755C13.7938 5.6395 11.3376 2.5 8 2.5ZM7.98224 9.33333C6.90897 9.33333 6.03887 8.51233 6.03887 7.5C6.03887 6.4875 6.90897 5.66667 7.98224 5.66667C9.05551 5.66667 9.92561 6.4875 9.92561 7.5C9.92561 8.51233 9.05551 9.33333 7.98224 9.33333Z' fill='currentColor'></path></svg>"
            let views_count = document.createElement('div');
            views_count.innerText=ele.views;
            views_div.append(view, views_count)

            count.append(up_div, comments_div, views_div)
            name_div.append(name, count)
        }

     div1.append(vid,name_div);
    document.getElementById('image_card').append(div1);
});
}
