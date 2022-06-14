import "./singleProductDisplay.css"
import { useState } from "react"

export default function MiddleDisplay() {
    const [btn1, setBtn1] = useState(true)
    const [btn2, setBtn2] = useState(false)
    const [btn3, setBtn3] = useState(false)
    const clickBtn1 = () =>{
        setBtn1(true)
        setBtn2(false)
        setBtn3(false)
    }
    const clickBtn2 = () =>{
        setBtn1(false)
        setBtn2(true)
        setBtn3(false)
    }
    const clickBtn3 = () =>{
        setBtn1(false)
        setBtn2(false)
        setBtn3(true)
    }
  return (
    <div className="middleDisplay">
        <div className="middleDisplayWrapper">
            <button onClick={()=>clickBtn1()} className={btn1 && "btnactive"}>Product Details</button>
            <button onClick={()=>clickBtn2()} className={btn2 && "btnactive"}>Information</button>
            <button onClick={()=>clickBtn3()} className={btn3 && "btnactive"}>Reviews</button>  
            {  btn1 &&
                
                <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from divs 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in div 1.10.32.
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. divs 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
            
        }
        {  btn2 &&
            
                <p> Vestibulum eu odio. Suspendisse potenti. Morbi mollis tellus ac sapien. Praesent egestas tristique nibh. Nullam dictum felis eu pede mollis pretium. Fusce egestas elit eget lorem. In auctor lobortis lacus.

                Morbi mollis tellus ac sapien. Nunc nec neque. Praesent nec nisl a purus blandit viverra. Nunc nec neque. Pellentesque auctor neque nec urna. Curabitur suscipit suscipit tellus. Cras id dui. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Maecenas vestibulum mollis diam.
                
                Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Sed lectus. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Nam at tortor in tellus interdum sagittis. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est.
                </p>
            
            }
        {  btn3 &&
            
            <p> Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Vestibulum id eros in nulla dapibus tempor. Quisque tincidunt, turpis ut ornare placerat, diam quam faucibus turpis, nec gravida turpis neque eu augue. Integer et accumsan leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas tincidunt condimentum tincidunt. Maecenas facilisis nibh eget neque ultrices, eu fringilla ipsum aliquam. Aenean auctor consequat ornare. Aliquam et magna vitae est tempus posuere. Etiam vel ex metus. Aliquam ut rhoncus nisi, lacinia rhoncus sem. Nam non felis turpis. Proin viverra turpis a odio interdum scelerisque.

            Nunc tincidunt magna ut orci vestibulum condimentum. Vivamus sagittis eros tellus, nec volutpat augue pretium ut. Donec commodo ante sit amet cursus ultricies. Donec mollis ligula ac augue ullamcorper malesuada. Integer eros enim, placerat ac erat eget, gravida commodo ligula. Nunc at sem in erat commodo interdum. Mauris vulputate est id mi rhoncus, id ultricies lectus posuere. Mauris aliquet, orci ac laoreet iaculis, velit ligula ultrices mauris, ac volutpat odio ante id erat. Sed sagittis tellus nunc, vitae semper magna euismod vel. Cras pretium feugiat augue, quis gravida neque scelerisque at. Mauris mauris nulla, faucibus ac viverra eu, pretium eget tortor. Nam vel lacus a tortor luctus auctor. Donec eu eleifend justo. In ut lobortis odio. Duis euismod dui enim, a faucibus massa fringilla sed.
            
            Vestibulum posuere et odio at tempor. Vestibulum eu sodales dolor. Etiam venenatis velit ac sodales vestibulum. Pellentesque tincidunt auctor tellus vitae blandit. Aenean vestibulum ut nisl at aliquet. Nullam viverra ultrices tellus ut molestie. Quisque tristique lobortis elit, eget blandit justo vestibulum vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed accumsan vel magna in egestas. Integer ultrices arcu tellus, nec ullamcorper libero commodo in.
            
            Morbi tristique sapien eu arcu rutrum, ac suscipit lacus ultricies. Etiam non arcu eros. Vestibulum orci ante, tincidunt id velit tristique, tristique rutrum purus. Ut odio sem, ornare id auctor ut, gravida a nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras odio est, vulputate ac imperdiet eu, sollicitudin vel sem. Integer mollis, tellus tincidunt ultricies pharetra, dolor eros mollis sapien, tristique posuere lacus erat eget dolor. Vivamus id vestibulum erat, nec aliquam sapien. Nunc gravida lacinia sagittis. Suspendisse facilisis metus nec sem sagittis, at rutrum nunc sagittis. In vestibulum sem augue, sed convallis eros vestibulum nec. Aenean eget quam ut eros suscipit ornare eget non diam.
            
            Phasellus sed accumsan dui. Pellentesque aliquam pharetra mattis. Duis feugiat auctor lorem. Aenean dapibus maximus justo vitae feugiat. Praesent dictum faucibus velit, sit amet feugiat justo luctus eget. Duis ac semper lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mi lacus, elementum a pellentesque et, posuere non felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc placerat purus velit, quis sollicitudin ex dictum vitae. Maecenas efficitur erat vitae diam elementum semper eget non diam. Integer porta orci sit amet hendrerit efficitur.</p>
        
        }
        </div>
        

    </div>
  )
}
