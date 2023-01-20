import { Link } from 'react-router-dom'
import Menu from '../Menu/menu'
import './single.css'
function Single() {
    return(
     <div className='single'> 
        <div className='contents'>
            <img className='contentImg' src='https://w0.peakpx.com/wallpaper/492/530/HD-wallpaper-lemon-on-pink-background-citruses-lemons-pink-background-citrus-background.jpg' alt='image is not uploaded'/>
        <div className='user'>
            <img className='userImg' src='https://c8.alamy.com/comp/2BJP8E7/lemon-watercolor-pattern-background-fruit-wallpaper-painting-drawing-love-peace-2BJP8E7.jpg' alt='img is not uploaded'/>
        <div className='info'>
        <span><b>John</b></span>
        <p>Posted 2 days ago</p>
        </div>
        <div className='edit'>
            <Link to={'/write?edit=2'}>
            <img src='https://e7.pngegg.com/pngimages/461/1024/png-clipart-computer-icons-editing-edit-icon-cdr-angle-thumbnail.png'/>
            </Link>
            <img src='https://cdn-icons-png.flaticon.com/512/1345/1345874.png'/>
        </div>
        </div>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies faucibus purus, et rutrum augue varius vel. Curabitur augue sapien, viverra fermentum facilisis eu, pulvinar quis tellus. Aliquam erat volutpat. Nam ut tristique quam. Sed faucibus ligula quis neque mollis gravida. Ut ac turpis est. Pellentesque in sodales libero, in fermentum.<br/> <br/>Aliquam maximus eget urna eget volutpat. Fusce ultricies ex massa, at ullamcorper nibh suscipit sed. Sed pulvinar eros neque, eget iaculis lacus imperdiet ac. Curabitur scelerisque felis nec nulla pellentesque aliquam. Donec lectus dolor, aliquet id lectus et, dignissim gravida justo. Etiam sit amet semper dui. Class aptent taciti sociosqu ad litora torquent.<br/><br/> Sed id malesuada dui, quis imperdiet tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies faucibus purus, et rutrum augue varius vel. Curabitur augue sapien, viverra fermentum facilisis eu, pulvinar quis tellus. Aliquam erat volutpat. Nam ut tristique quam. Sed faucibus ligula quis neque mollis gravida. Ut ac turpis est. Pellentesque in sodales libero, in fermentum nisl. Aliquam maximus eget urna eget volutpat. Fusce ultricies ex massa, at ullamcorper nibh suscipit sed. Sed pulvinar eros neque, eget iaculis lacus imperdiet ac. Curabitur scelerisque felis nec nulla pellentesque aliquam. Donec lectus dolor, aliquet id lectus et, dignissim gravida justo. Etiam sit amet semper dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed id malesuada dui, quis imperdiet tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.

        </p>
        </div>
        <div className='menu'>
            <Menu/>
        </div>

     </div>
    ) 
 }
 export default Single