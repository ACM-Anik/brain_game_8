//--mArtBox--// [it will be the library for art-work..like Game dev]
        let mArtBox = {
          // [it will be the library for art-work..like Game dev]
          //refs..
          //https://vectorjs.org/
          //https://animejs.com/
          //https://animate.style/
          //https://github.com/animate-css/animate.css
          //https://project-awesome.org/sergey-pimenov/awesome-web-animation
          //https://codepen.io/kcjpop/pen/GvdQdX

          "utils": {
            //1px = 100vw / viewport's width (in px)
            "PxToVw": (px) => {
	           return px * (100 / document.documentElement.clientWidth);
            },
            //1px = 100vh / viewport's height (in px)
            "PxToVh": (px) => {
              return px * (100 / document.documentElement.clientHeight);
            },
          },
          "set": (p={"e":document.body}) => {
            let mS = document.createElement("div");
            p['e'].appendChild(mS);
            mS.style.width = `100%`;
            mS.style.height = `100%`;
            mS.style.position = `relative`;
            mS.style.overflow = `hidden`;
            //mS.style.backgroundColor = `red`;

            //listener..
            window.addEventListener("resize", (e) => {
              //console.log(e);
            }); 
            window.addEventListener("mousedown", (e) => {
              //https://programmersportal.com/how-to-get-the-mouse-position-relative-to-an-element-in-javascript/
              //console.log(e);
              /*console.log(`e.clientX: ${e.clientX}`);
              console.log(`e.clientY: ${e.clientY}`);*/
              const target = e.target;
              //const target = mEvents.get_scene();
              // Get X & Y coordinates
              let xPos = e.clientX;
              let yPos = e.clientY;

              //convert..
              xPos = mArtBox.utils.PxToVw(xPos);
              yPos = mArtBox.utils.PxToVh(yPos);

              //log..
              console.log(`xPos: ${xPos}`);
              console.log(`yPos: ${yPos}`);
            });
             

            //set..
            let mEvents = {
              "add_svg": (v={"e":document.body,"src":``, "w":``,"h":``, "x":-1,"y":-1},
              cb={ "onLoad":(v={"e":document.body})=>{}, "onClick":(v={"e":document.body})=>{}   }) => {
                let c = document.createElement("div");
                v["e"].appendChild(c);

                //send cb..
                let mSendCB = (cb_name,p={}) => {
                  if (cb.hasOwnProperty(cb_name)) {
                    cb[cb_name](p);
                  }
                };  
              
                //process..
                let mP0 = (a) => {
                  let d = document.createElement("div");
                  d.innerHTML = a;
                  let svg = d.querySelector("svg");
                  c.appendChild(svg);
                  //set..
                  //https://css-tricks.com/scale-svg/#:~:text=Any%20height%20or%20width%20you,default%20height%20for%20inline%20SVG.
                  //https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio 
                  //console.log(svg);

                  //set vars..
                  let mW = v.hasOwnProperty(`w`)?v["w"]:`100%`;
                  let mH = v.hasOwnProperty(`h`)?v["h"]:`${mArtBox.utils.PxToVh(v["e"].clientHeight)}vh`; 

                  //set..
                  svg.setAttribute("preserveAspectRatio", `none`);
                  /*svg.setAttribute("width", 800);
                  svg.setAttribute("height", 100);*/
                  svg.style.width = mW; //100%
                  svg.style.height = mH;


                  //send cb..
                  mSendCB("onLoad", {"e":c});

                  //events..
                  c.onclick = () => {
                    //send cb..
                    mSendCB(`onClick`, {"e":c});
                  };

                };

                //fetch..
                fetch(v.src).then( async (v) =>  {
                  let r = await v.text();
                  //console.log(r);
                  //set..
                  mP0(r);
                });
                
                //set..
                if (v.hasOwnProperty("x")) {
                  mEvents.set_pos({"e":c,"x":v["x"]});
                }
                if (v.hasOwnProperty("y")) {
                  mEvents.set_pos({"e":c,"y":v["y"]});
                }


                /*
                --USAGE--
                 mArtBox_evnt.add_svg({
                                  //"w": ``,
                                  //"h": ``,
                                  "e": mE,
                                  "src": `${m_asset_path}svg/game0.svg`
                                },
                                {
                                  "onLoad": (v={}) => {},
                                  "onClick": (v={}) => {}
                                }
                                );
                */



              },
              "get_scene": () => {
                return mS;
              },
              "set_pos": (v={"e":document.body, "x":-1, "y":-1}) => {
                //set..
                const target = mEvents.get_scene();
                const rect = target.getBoundingClientRect();
               
                //set..
                if (v.hasOwnProperty("x")) {
                  // Get X coordinates 
                  let xPos = v["x"] - mArtBox.utils.PxToVw(rect.left);

                  v["e"].style.position = `absolute`;
                  //new..
                  v["e"].style.left = `${xPos}vw`; //v["x"];
                  //v["e"].style.left = `${xPos}px`; //v["x"];

                }
                if (v.hasOwnProperty("y")) {
                  // Get Y coordinates 
                  let yPos = v["y"] - mArtBox.utils.PxToVh(rect.top);

                  v["e"].style.position = `absolute`;
                  //new..
                  v["e"].style.top = `${yPos}vh`; //v["y"];
                  //v["e"].style.top = `${yPos}px`; //v["y"];
                }


                /*
                --USAGE--
                mArtBox_evnt.set_pos({
                  "e": mT0_evnt["e"],
                  "x": 30.32739153627312,
                  "y": 25.279017857142858
                });
                */

              }

            };

            return mEvents;

          }

        };
