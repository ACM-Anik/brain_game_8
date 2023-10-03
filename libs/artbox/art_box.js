// import { anime } from "../../third-party/anime-js/anime.js";
//import sheet from "../../third-party/animate/animate.min.css" assert { type: 'css' };
//document.adoptedStyleSheets = [sheet];
//shadowRoot.adoptedStyleSheets = [sheet];
/*console.log(animate);*/
//console.log(sheet);
import { animate } from "../animate-css/animate.min.js";
const style_animate = document.createElement("style");
style_animate.innerHTML = animate;
document.head.appendChild(style_animate);


//art_box..
let art_box = () => {
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
    //https://excaliburjs.com/docs/ui/
    //https://riot.js.org/
    //https://pixijs.io/ui/FancyButton.html
    //https://blade-ui-kit.com/blade-icons
    //https://svgartista.net/
    //http://maxwellito.github.io/vivus/
    //https://codepen.io/collection/nRJxyn
    //https://svgwg.org/specs/animations/
    //https://svgcircus.com/
    //https://svgjs.dev/docs/3.0/animating/
    //https://animejs.com/documentation/#svgAttr
    //https://www.w3schools.com/howto/howto_css_animate_buttons.asp
    //https://web.dev/building-a-3d-game-menu-component/
    //https://www.w3schools.com/graphics/game_intro.asp
    //https://pixijs.io/ui/ProgressBar.html
    //https://pixijs.com/examples
    //https://jsfiddle.net/kimmobrunfeldt/rfny4ftb/
    //https://kimmobrunfeldt.github.io/progressbar.js/
    //https://svgjs.dev/docs/3.0/
    //https://pixijs.com/examples/events/slider
    //https://codepen.io/tdesero/pen/bGdOGbL
    //https://codepen.io/tutsplus/pen/MWGRjWY
    //https://boxy-svg.com/app
    //https://www.w3schools.com/howto/howto_css_shapes.asp

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
    "set": (p = { "e": document.body }) => {
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
        //Add SVG
        "add_svg": (v = { "e": document.body, "src": ``, "w": ``, "h": ``, "x": -1, "y": -1 },
          cb = { "onLoad": (v = { "e": document.body }) => { }, "onClick": (v = { "e": document.body }) => { } }) => {
          let c = document.createElement("div");
          v["e"].appendChild(c);

          //send cb..
          let mSendCB = (cb_name, p = {}) => {
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
            let mW = v.hasOwnProperty(`w`) ? v["w"] : `100%`;
            let mH = v.hasOwnProperty(`h`) ? v["h"] : `${mArtBox.utils.PxToVh(v["e"].clientHeight)}vh`;

            //set..
            svg.setAttribute("preserveAspectRatio", `none`);
            /*svg.setAttribute("width", 800);
            svg.setAttribute("height", 100);*/
            svg.style.width = mW; //100%
            svg.style.height = mH;


            //send cb..
            mSendCB("onLoad", { "e": c });

            //events..
            c.onclick = () => {
              //send cb..
              mSendCB(`onClick`, { "e": c });
            };

          };

          //fetch..
          fetch(v.src).then(async (v) => {
            let r = await v.text();
            //console.log(r);
            //set..
            mP0(r);
          });

          //set..
          if (v.hasOwnProperty("x")) {
            mEvents.set_pos({ "e": c, "x": v["x"] });
          }
          if (v.hasOwnProperty("y")) {
            mEvents.set_pos({ "e": c, "y": v["y"] });
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
        //Get Scene
        "get_scene": () => {
          return mS;
        },
        //Set Position
        "set_pos": (v = { "e": document.body, "x": -1, "y": -1 }) => {
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

        },

        //Add Animation
        "add_animation": (v = {
          "e": document.body,
          /**
          @type
          //Animation Type
          //https://animate.style/ [you can browse from here]
          */
          "type": ``,
        }) => {
          let anim_typ = `${v.type}`; //animate__
          v.e.classList.add('animate__animated', anim_typ);
          v.e.addEventListener('animationend', () => {
            v.e.classList.remove('animate__animated', anim_typ);
          });
          //or change its duration:
          //element.style.setProperty('--animate-duration', '0.5s');


          /*
          --USAGE--
          mArtBox_evnt.add_animation({
                "e":mScene,
                "type":"animate__bounce"
          });
          */
        }


      };

      return mEvents;

    }

  };
  return mArtBox;
};

export { art_box };