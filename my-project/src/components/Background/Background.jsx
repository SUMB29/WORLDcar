
import video from '../../assets/video.mp4'
import image6 from '../../assets/image6.png'
import image7 from '../../assets/image7.png'
import image8 from '../../assets/image8.png'
import image2 from '../../assets/image2.png'
import image1 from '../../assets/image1.png'
import image3 from '../../assets/image3.png'
import image10 from '../../assets/image10.png'
import image9 from '../../assets/image9.png'


const images = [image6, image7, image8, image1, image2, image3, image10, image9];

const Background = (props) => {
    if (props.playStatus === true) {
        return (<video class='fixed inset-0 object-cover w-full h-full -z-10 animate-fade-in sm:w-full sm:h-full 
             md:w-full md:h-full
             lg:w-full lg:h-full' autoPlay loop muted>
            <source src={video} type='video/mp4' />
        </video>);
    }
    else if (props.heroCount < images.length) {
        return <img src={images[props.heroCount]} class="fixed inset-0 object-cover w-full h-full -z-10 animate-fade-in sm:w-full sm:h-full 
             md:w-full md:h-full
             lg:w-full lg:h-full" alt="background" />;
    }

}

export default Background
