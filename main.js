let a =document.querySelector('body');
        let boutton =document.getElementById('no');
        a.addEventListener("mousemove",function(souris){
            const rect= boutton.getBoundingClientRect();
            let X= souris.clientX;
            let Y= souris.clientY;
            console.log(X,Y);
    
            const distanceX = (rect.x + rect.width / 2) - X;
            const distanceY = (rect.y + rect.height / 2) - Y;
            const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
            if(distance<100){
                const newTop = Math.random() * (window.innerHeight - rect.height);
                const newLeft = Math.random() * (window.innerWidth - rect.width);
                boutton.style.position = 'absolute';
                boutton.style.top = `${newTop}px`;
                boutton.style.left = `${newLeft}px`;
            }

            }
        )    