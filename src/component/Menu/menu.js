import './menu.css'
function Menu() {
    const post=[{
        id:1,
        title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie ut ante nec vehicula. In tempor, turpis non gravida dictum, magna quam ullamcorper leo, ac egestas ante lectus id velit. Aenean porta placerat lorem ut ultrices. Nam vel neque non ex dapibus pretium. Proin sed nulla et neque aliquet sodales. Mauris non facilisis neque, a sagittis arcu. Nullam auctor maximus libero sit amet malesuada. Maecenas convallis id odio vitae blandit. Curabitur tristique vel quam in iaculis. Donec ut posuere mauris, vel scelerisque nisl. Phasellus tempor id velit sed euismod",
        img:"https://t4.ftcdn.net/jpg/03/20/98/69/360_F_320986926_wbqHWpHd9sclh7R4lnj5rn0dy5AK6Uas.jpg"
    },
    {
        id:2,
        title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie ut ante nec vehicula. In tempor, turpis non gravida dictum, magna quam ullamcorper leo, ac egestas ante lectus id velit. Aenean porta placerat lorem ut ultrices. Nam vel neque non ex dapibus pretium. Proin sed nulla et neque aliquet sodales. Mauris non facilisis neque, a sagittis arcu. Nullam auctor maximus libero sit amet malesuada. Maecenas convallis id odio vitae blandit. Curabitur tristique vel quam in iaculis. Donec ut posuere mauris, vel scelerisque nisl. Phasellus tempor id velit sed euismod",
        img:"https://img.lovepik.com/photo/40032/2487.jpg_wh300.jpg"
    },
    {
        id:3,
        title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie ut ante nec vehicula. In tempor, turpis non gravida dictum, magna quam ullamcorper leo, ac egestas ante lectus id velit. Aenean porta placerat lorem ut ultrices. Nam vel neque non ex dapibus pretium. Proin sed nulla et neque aliquet sodales. Mauris non facilisis neque, a sagittis arcu. Nullam auctor maximus libero sit amet malesuada. Maecenas convallis id odio vitae blandit. Curabitur tristique vel quam in iaculis. Donec ut posuere mauris, vel scelerisque nisl. Phasellus tempor id velit sed euismod",
        img:"https://img.lovepik.com/photo/50121/1399.jpg_wh300.jpg"
    },
    {
        id:4,
        title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie ut ante nec vehicula. In tempor, turpis non gravida dictum, magna quam ullamcorper leo, ac egestas ante lectus id velit. Aenean porta placerat lorem ut ultrices. Nam vel neque non ex dapibus pretium. Proin sed nulla et neque aliquet sodales. Mauris non facilisis neque, a sagittis arcu. Nullam auctor maximus libero sit amet malesuada. Maecenas convallis id odio vitae blandit. Curabitur tristique vel quam in iaculis. Donec ut posuere mauris, vel scelerisque nisl. Phasellus tempor id velit sed euismod",
        img:"https://png.pngtree.com/thumb_back/fw800/background/20220312/pngtree-creative-fruit-doll-image_1061648.jpg"
    }]
    return(
        <div className="menu">
            <h1>Other posts you may like</h1>
            {
                post.map((post,i)=>{
                    return <div className="postMenu" key={post.id}>
                        <img src={post.img} alt='img is not uploaded'/>
                        <h2>{post.title}</h2>
                        <button>Read More</button>
                    </div>

                })
            }
        </div>
    )
}
export default Menu