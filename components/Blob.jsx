import React, {useState,useEffect} from 'react';


const Blob = () => {
    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
          setVisible(true)
        } 
        else if (scrolled <= 300){
          setVisible(false)
        }
      };
    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };
      useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
      }, [])
      

    return (
        <div className="fixed flex w-full justify-end z-10 top-[85vh] " style={{display: visible ? 'flex' : 'none'}}><a onClick={scrollToTop}>
            <style jsx>{`
       .blob {
	 max-height: 5rem;
	 width: 5rem;
}
 .blob path {
	 animation: blob 7s linear infinite;
}
 @keyframes blob {
	 0% {
		 d: path("M120,-157.6C152.7,-141.5,174.3,-102.6,194.8,-58.8C215.3,-14.9,234.6,33.8,228.4,80.8C222.2,127.8,190.4,173.1,148.1,184C105.8,195,52.9,171.5,-2.4,174.8C-57.8,178.2,-115.6,208.4,-137.5,190.9C-159.3,173.3,-145.3,108,-153,56.3C-160.7,4.6,-190.2,-33.4,-178.3,-54.2C-166.4,-75.1,-113.2,-78.8,-76.6,-93.6C-40,-108.3,-20,-134.2,11.9,-150.5C43.7,-166.8,87.4,-173.6,120,-157.6Z");
	}
	 25% {
		 d: path("M67.8,-97.1C87.8,-78.8,103.8,-58.9,117.4,-34.1C130.9,-9.4,142,20.2,139.5,50.7C137,81.2,120.8,112.6,95.3,150.1C69.8,187.7,34.9,231.3,3.3,226.8C-28.2,222.2,-56.4,169.3,-91.6,134.9C-126.8,100.5,-169,84.6,-179.6,57.1C-190.2,29.7,-169.3,-9.3,-155.2,-49.7C-141,-90.1,-133.7,-132,-109,-148.8C-84.2,-165.6,-42.1,-157.3,-9.1,-144.8C23.9,-132.2,47.8,-115.5,67.8,-97.1Z");
	}
	 50% {
		 d: path("M137.1,-191.3C172,-163.4,190.6,-115.7,197.2,-70.1C203.8,-24.4,198.5,19.2,178.9,51.5C159.3,83.9,125.5,105,93.3,129.6C61.1,154.1,30.6,182.1,1.1,180.6C-28.4,179.1,-56.8,148.2,-81.2,121.1C-105.6,94.1,-126.1,70.8,-141.6,41.6C-157.2,12.4,-168,-22.9,-153.9,-45C-139.8,-67,-100.7,-76,-70.9,-105.5C-41.1,-135,-20.6,-185,15.3,-206C51.1,-227.1,102.3,-219.1,137.1,-191.3Z");
	}
	 75% {
		 d: path("M123.7,-157.1C162.4,-142.2,197.2,-108.8,202.8,-70.8C208.3,-32.9,184.5,9.7,169,54.2C153.6,98.7,146.4,145.2,119.7,162.7C92.9,180.2,46.4,168.6,-1.9,171.1C-50.2,173.7,-100.3,190.4,-122.2,171.3C-144.1,152.3,-137.7,97.5,-144.1,52.7C-150.6,7.9,-169.9,-26.8,-170.5,-64.8C-171,-102.8,-152.8,-144,-121.3,-161.3C-89.7,-178.5,-44.9,-171.8,-1.2,-170.1C42.5,-168.5,85,-172,123.7,-157.1Z");
	}
	 100% {
		 d: path("M120,-157.6C152.7,-141.5,174.3,-102.6,194.8,-58.8C215.3,-14.9,234.6,33.8,228.4,80.8C222.2,127.8,190.4,173.1,148.1,184C105.8,195,52.9,171.5,-2.4,174.8C-57.8,178.2,-115.6,208.4,-137.5,190.9C-159.3,173.3,-145.3,108,-153,56.3C-160.7,4.6,-190.2,-33.4,-178.3,-54.2C-166.4,-75.1,-113.2,-78.8,-76.6,-93.6C-40,-108.3,-20,-134.2,11.9,-150.5C43.7,-166.8,87.4,-173.6,120,-157.6Z");
	}
}
 .dwf, .share {
	 position: fixed;
	 bottom: 4px;
	 right: 10px;
	 background-color: #000 3;
	 padding: 3px;
	 border-radius: 3px;
}
 .dwf .btn, .share .btn {
	 color: #fff;
	 text-decoration: none;
}
 .share {
	 right: auto;
	 left: 10px;
	 border-radius: 50%;
	 padding: 5px;
}
 .share .twitter {
	 width: 20px;
	 fill: #fff;
	 stroke: none;
	 overflow: visible;
}
       `}</style>
       <i className="fa-solid fa-arrow-up absolute top-[8vh] right-[1.8rem] text-black fa-xl"></i>
            <svg className="blob" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(300,300)">
                    <path d="M120,-157.6C152.7,-141.5,174.3,-102.6,194.8,-58.8C215.3,-14.9,234.6,33.8,228.4,80.8C222.2,127.8,190.4,173.1,148.1,184C105.8,195,52.9,171.5,-2.4,174.8C-57.8,178.2,-115.6,208.4,-137.5,190.9C-159.3,173.3,-145.3,108,-153,56.3C-160.7,4.6,-190.2,-33.4,-178.3,-54.2C-166.4,-75.1,-113.2,-78.8,-76.6,-93.6C-40,-108.3,-20,-134.2,11.9,-150.5C43.7,-166.8,87.4,-173.6,120,-157.6Z" fill="#FE840E" />
                </g>
            </svg>
        </a>
        </div>

    )
}

export default Blob