            this._ctx.canvas.onmousemove = (event) => {
                event.preventDefault();

                let posX = 0;
                let posY = 0;
                
                if (!event) var event = window.event;
                // if (event.pageX || event.pageY) {
                //     console.log("1");
                //     console.log(event);
                //     posX = event.pageX - event.clientX;
                //     posY = event.pageY;
                // }
                if (event.clientX || event.clientY) {
                    posX = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                    posY = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
                }
                
                var el = event.target;
                var _x = 0;
                var _y = 0;

                while ( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
                    _x += el.offsetLeft - el.scrollLeft;
                    _y += el.offsetTop - el.scrollTop;
                    el = el.offsetParent;
                }

                points[0] = [posX - _x, posY - _y];
            }