// import core_1mn from '../1mn/core_1mn.js';
import { art_box } from "../libs/artbox/art_box.js";


const mArtBox = art_box();
const m_asset_path = '../assets';

// Renderer:--
let mGameRenderer = (data = {}, mDOM) => {
    let mDiv = document.createElement("div");
    mDiv.style.position = 'relative';
    mDiv.style.width = '100%';
    mDiv.style.height = '100%';
    mDOM.appendChild(mDiv);
    //your root element end [----mDiv----]


    //--mArtBox--//
    let mArtBox_evnt = mArtBox.set({ "e": mDiv });
    let mScene = mArtBox_evnt.get_scene();


    //-----do your code-----//
    //utils..
    let mUtils = {
        // mArtBox_evnt.add_animation({
        //     "e":mScene,
        //     "type":"animate__bounce"
        // });

    };

    //--my-code--//
    let myCODE = {

    };



    //mDta_main:--
    let mDta_main = {
        "utils": {},
        "gVars": {  //Global-Variables
            "my_var_1": "",
        },
        "screens": {  //screens
            "rndr": { //Renderer..
                "l": [ //list..

                    // Screen-1 -----------------------------
                    {
                        "name": "Screen 1",
                        "key": "scr_1",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            v["e"].innerHTML = ``; //reset the screen


                            // mSendCB..
                            let mSendCB = (cb_name, p = {}) => {
                                if (v["value"].hasOwnProperty("cb")) {
                                    if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                                        v["value"]["cb"][cb_name](p);
                                    }
                                }
                            };

                            //set..
                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            mScr.style.height = `100vh`;
                            mScr.style.width = `100%`;
                            mScr.style.overflow = `hidden`;

                            //set..
                            let mSet = (mE = document.body) => {
                                /* mE.innerHTML = `
                                    <div class="s1">
                                        <div class="s1-frame1"></div>
                                        <div class="s1-frame2"></div>
                                        <div class="s1-data">
                                            <h1 class="s1-heading">Word Velocity</h1>
                                            <button class="s1-btn">New Game</button>

                                            <div class="overlay-Loading">
                                                <div class="loading-spans">
                                                    <span class="loading-ball"></span>
                                                    <span class="loading-text">Loading</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;

                                const screenElement = mE.querySelector('.s1');
                                if (screenElement) {
                                    screenElement.style.opacity = 1;
                                    let s1Btn = screenElement.querySelector(".s1-btn");
                                    s1Btn.addEventListener('click', function () {
                                        s1Btn.style.opacity = 0;

                                        // Overlay Loading:-
                                        const overlayLoading = screenElement.querySelector('.overlay-Loading');
                                        const loadingBall = screenElement.querySelector('.loading-ball');

                                        if (overlayLoading) {

                                            overlayLoading.style.animation = 'zoomInLoading 1s 1s both';

                                            setTimeout(() => {
                                                loadingBall.style.width = '100%';
                                                zoomOutLoading();
                                            }, 1000);

                                            // zoomOutLoading
                                            const zoomOutLoading = () => {
                                                overlayLoading.style.animation = 'zoomOutLoading 1s 3s both';

                                            }
                                            setInterval(() => {
                                                screenElement.style.opacity = 0;

                                                mSendCB("on_new_btn_clc", {});

                                            }, 5000);
                                        }
                                    });

                                } 
                                */


                                // BG:-
                                mArtBox_evnt.add_svg({
                                    "w": `100%`,
                                    "h": `95vh`,
                                    "e": mE,
                                    "src": `${m_asset_path}/bg_images/first_scr_bg.svg`
                                });

                                // text:-
                                mArtBox_evnt.add_svg({
                                    "w": `25vw`,
                                    "h": `8vh`,
                                    "x": 37.5,
                                    "y": 46,
                                    "e": mE,
                                    "src": `${m_asset_path}/word_velocity_text.svg`
                                });

                                // btn:-
                                mArtBox_evnt.add_svg({
                                    "w": `41vw`,
                                    "h": `16vh`,
                                    "x": 30,
                                    "y": 70,
                                    "e": mE,
                                    "src": `${m_asset_path}/btn_starting.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        // console.log(v.e);
                                        v.e.style.opacity = `0`;
                                        v.e.style.cursor = `pointer`;

                                        //animation [Start]
                                        setTimeout(() => {
                                            let timeline = anime.timeline();
                                            timeline.add({
                                                targets: v.e,
                                                opacity: 1,
                                                duration: 1000,
                                                easing: 'easeOutExpo'
                                            }
                                            );
                                        }, 400);
                                    },

                                    "onClick": (v = {}) => {
                                        v.e.style.opacity = "0";

                                        setTimeout(() => {
                                            v.e.remove();
                                        }, 300);
                                        loading();
                                    }

                                });

                                // Loading:-
                                let loading = () => {
                                    mArtBox_evnt.add_svg({
                                        "w": `43vw`,
                                        "h": `16vh`,
                                        "x": 29,
                                        "y": 70,
                                        "e": mE,
                                        "src": `${m_asset_path}/loading_border.svg`
                                    }, {
                                        "onLoad": (v = {}) => {
                                            // console.log(v.e);
                                            v.e.style.opacity = `0`;
                                            v.e.style.cursor = `mouse`;

                                            //animation [Start]
                                            setTimeout(() => {
                                                let timeline = anime.timeline();
                                                timeline.add({
                                                    targets: v.e,
                                                    opacity: 1,
                                                    duration: 100,
                                                    easing: 'easeOutExpo',

                                                    complete: function (anim) {
                                                        let ve = v.e;
                                                        let ball = document.createElement('div');
                                                        ball.classList = "loading_ball";
                                                        ball.style.opacity = "1";
                                                        ball.style.backgroundColor = "#8D8282";
                                                        ball.style.borderRadius = "87px";
                                                        ball.style.width = "10vw";
                                                        ball.style.height = "9vh";
                                                        ball.style.marginInline = "2vw";
                                                        ball.style.marginBottom = "10px";
                                                        ball.style.position = "absolute";
                                                        ball.style.top = "24%";
                                                        ball.style.left = "0%";

                                                        ve.appendChild(ball);

                                                        console.log(v.e);
                                                        let ballClass = ve.querySelector(".loading_ball");

                                                        anime({
                                                            opacity: 1,
                                                            targets: '.loading_ball',
                                                            width: '90%',
                                                            easing: 'easeInOutQuad',
                                                            direction: 'alternate',
                                                            loop: false
                                                        });

                                                        setTimeout(() => {
                                                            on_scr_end();
                                                        }, 1000);
                                                    }

                                                }
                                                );
                                            }, 400);
                                        }
                                    });
                                }

                                // on_scr_end..
                                let on_scr_end = () => {
                                    setTimeout(() => {
                                        // mScr.remove();
                                        //send cb..
                                        mSendCB(`on_scr_end`, {});
                                    }, 500);
                                };
                            };

                            mSet(mScr);
                        }
                    },

                    // Screen-2 -----------------------------
                    {
                        "name": "Screen 2",
                        "key": "scr_2",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            v["e"].innerHTML = ``; //reset the screen
                            console.log(v["e"]);

                            //mSendCB..
                            let mSendCB = (cb_name, p = {}) => {
                                if (v["value"].hasOwnProperty("cb")) {
                                    if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                                        v["value"]["cb"][cb_name](p);
                                    }
                                }
                            };


                            //set..
                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            mScr.style.height = `100vh`;
                            mScr.style.width = `100%`;
                            mScr.style.overflow = `hidden`;


                            //set..
                            let mSet = (mE = document.body) => {

                                /* mE.innerHTML = `
                                 <div class="s2">
                                     <div className="part1">
                                         <img class="s2-img" src="../assets/word_with_leaf.svg" alt="Leaf & Text">
                                     </div>
 
                                     <div class="part2">
                                         <div class="border border1">
                                             <div class="border border2">
                                                 <p class="s2-about-title">About</p>
                                                 <div class="s2-carousel-cont">
                                                     <div class="s2-carousel-slider">
                                                         <div class="s2-carousel-item active-item">
                                                             <p>Choose your speed and difficulty levels.</p>
                                                         </div>
                                                         <div class="s2-carousel-item">
                                                             <p>Focus and track the word.</p>
                                                         </div>
                                                         <div class="s2-carousel-item">
                                                             <p>Answer the questions.</p>
                                                         </div>
                                                     </div>
                                                     <div class="s2-carousel-dots">
                                                         <span class="dot1"></span>
                                                         <span class="dot2"></span>
                                                         <span class="dot3"></span>
                                                     </div>
                                                     <p class="s2-btn">Skip</p>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                 `;
 
                                 const screenElement = mE.querySelector('.s2');
                                 if (screenElement) {
                                     screenElement.style.opacity = 1;
 
                                     const s2Img = screenElement.querySelector(".s2-img");
                                     s2Img.style.animation = "s2-zoomIn 1s 1s both";
 
                                     setTimeout(() => {
                                         s2Img.style.animation = "s2-zoomOut 1s 1s both";
 
                                     }, 2000);
 
 
                                     setTimeout(() => {
                                         const Part2About = screenElement.querySelector(".part2");
                                         Part2About.style.opacity = 1;
 
                                         const dots = screenElement.querySelectorAll(".s2-carousel-dots span");
                                         const itemImg = screenElement.querySelectorAll(".s2-carousel-item");
 
                                         let dotClicked = false;
                                         let currentIndex = 0;
 
                                         dots.forEach((dot, index) => {
                                             dot.addEventListener("click", function () {
                                                 dots.forEach(dot => dot.classList.remove("active-dot"));
                                                 itemImg.forEach(image => image.classList.remove("active-item"));
 
                                                 dot.classList.add("active-dot");
                                                 itemImg[index].classList.add("active-item");
 
                                                 dotClicked = true;
                                                 currentIndex = index;
                                             });
                                         });
 
                                         const skipButton = screenElement.querySelector(".s2-btn");
 
                                         skipButton.addEventListener("click", function () {
                                             itemImg[currentIndex].classList.remove("active-item");
                                             currentIndex = (currentIndex + 1) % itemImg.length;
                                             itemImg[currentIndex].classList.add("active-item");
                                             dots.forEach(dot => dot.classList.remove("active-dot"));
                                             dots[currentIndex].classList.add("active-dot");
 
                                             console.log(currentIndex);
                                             if (currentIndex === 2) {
                                                 currentIndex = 3;
                                             }
 
                                             if (currentIndex === 3) {
                                                 setTimeout(() => {
                                                     screenElement.style.opacity = 0;
                                                     mSendCB("on_new_btn_clc", {});
                                                 }, 1000);
                                             }
                                         });
 
                                     }, 4000);
 
                                 }; 
                             */


                                // Word & Leaf Loading:-
                                mArtBox_evnt.add_svg({
                                    "w": `38vw`,
                                    "h": `40vh`,
                                    // "x": 30,
                                    // "y": 30,  --> position absolute makes error here//
                                    "e": mE,
                                    "src": `${m_asset_path}/word_with_leaf.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        console.log(v.e);
                                        v.e.style.opacity = `0`;
                                        v.e.style.display = `flex`;
                                        v.e.style.justifyContent = `center`;
                                        v.e.style.alignItems = `center`;
                                        v.e.style.marginTop = `30vh`;

                                        setTimeout(() => {
                                            anime({
                                                opacity: 1,
                                                targets: v.e,
                                                scale: [0, 1],
                                                duration: 1500,
                                                direction: 'alternate',
                                                easing: 'easeOutExpo',
                                                loop: false
                                            });
                                        }, 1000);

                                        anime({
                                            targets: v.e,
                                            scale: [1, 0],
                                            duration: 1000,
                                            direction: 'alternate',
                                            easing: 'easeOutQuad',
                                            loop: false
                                        });

                                        setTimeout(() => {
                                            console.log(v.e);
                                            v.e.remove();
                                            about();
                                        }, 3000);
                                    },

                                });


                                // About:-
                                let about = () => {
                                    let value = 1;

                                    setTimeout(() => {
                                        mArtBox_evnt.add_svg({
                                            "w": `100vw`,
                                            "h": `100vh`,
                                            // "x": 10,
                                            // "y": 10,
                                            "e": mE,
                                            "src": `${m_asset_path}/about_1.svg`
                                        }, {
                                            "onLoad": (v = {}) => {
                                                setTimeout(() => {
                                                    v.e.remove();
                                                    s2();
                                                }, 1000);
                                            }
                                        });
                                    }, 300);

                                    let s2 = () => {
                                        mArtBox_evnt.add_svg({
                                            "w": `100vw`,
                                            "h": `100vh`,
                                            // "x": 10,
                                            // "y": 10,
                                            "e": mE,
                                            "src": `${m_asset_path}/about_2.svg`
                                        }, {
                                            "onLoad": (v = {}) => {
                                                setTimeout(() => {
                                                    v.e.remove();
                                                    s3();
                                                }, 2000);
                                            }
                                        });
                                    }

                                    let s3 = () => {
                                        mArtBox_evnt.add_svg({
                                            "w": `100vw`,
                                            "h": `100vh`,
                                            // "x": 10,
                                            // "y": 10,
                                            "e": mE,
                                            "src": `${m_asset_path}/about_3.svg`
                                        }, {
                                            "onLoad": (v = {}) => {

                                                setTimeout(() => {
                                                    v.e.remove();
                                                    mSendCB(`on_scr_end`, {});
                                                }, 4000);
                                            }
                                        });
                                    }


                                    // Btn-skip:--
                                    mArtBox_evnt.add_svg({
                                        "w": `8vw`,
                                        "h": `7vh`,
                                        "x": 80,
                                        "y": 80,
                                        "e": mE,
                                        "src": `${m_asset_path}/skip.svg`
                                    }, {
                                        "onLoad": (v = {}) => {
                                            v.e.style.cursor = "pointer";

                                        },
                                        "onClick": (v = {}) => {
                                            // skip(value + 1);
                                        }
                                    });

                                    let skip = (value) => {
                                        // // console.log(value);
                                        // if (value === 3) {
                                        //     setTimeout(() => {
                                        //         v.e.remove();
                                        //         mSendCB(`on_scr_end`, {});
                                        //     }, 3000);
                                        // }
                                    }

                                }


                            };
                            mSet(mScr);
                        }
                    },

                    // Screen-3 -----------------------------
                    {
                        "name": "Screen 3",
                        "key": "scr_3",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            //--reset--// [START]
                            v["e"].innerHTML = ``; //reset

                            //mSendCB..
                            let mSendCB = (cb_name, p = {}) => {
                                if (v["value"].hasOwnProperty("cb")) {
                                    if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                                        v["value"]["cb"][cb_name](p);
                                    }
                                }
                            };


                            //set..
                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            mScr.style.height = `100vh`;
                            mScr.style.width = `100%`;
                            mScr.style.overflow = `hidden`;

                            //set..
                            let mSet = (mE = document.body) => {

                                /* mE.innerHTML = `
                                    <div class="s3">
                                        <div class="img-container">
                                            <img class="s3-img1" src="../assets/rotate_90.svg" alt="rotate">
                                        </div>
    
                                        <!-- Difficulty Level --!>
                                        <div class="s3-data1">
    
                                            <div class="s3-div">
                                                <h1 class="s3-h1">Difficulty Level</h1>
                                                <div class="s3-image-cont">
                                                    <div class="s3-circle1">5</div>
                                                    <img class="s3-level" src="../assets/line_4.svg" alt="">
                                                </div>
                                            </div>
    
                                            <div class="s3-div">
                                                <h1 class="s3-h1">Speed</h1>
                                                <div class="s3-image-cont">
                                                    <div class="s3-circle2">10</div>
                                                    <img class="circle" src="../assets/line_4.svg" alt="">
                                                </div>
                                            </div>
    
                                            <button class="s3-btn">Let;s play</button>
                                        </div>
                                    </div>
    
                                    `;

                                setTimeout(() => {
                                    const screenElement = mE.querySelector('.scr3');
                                    if (screenElement) {
                                        screenElement.style.opacity = 1;

                                        const scr5Data = screenElement.querySelector('.s3-data');
                                        if (s3Data) {
                                            // s3Data.style.animation = 's3-zoomIn2 2s 2s both';
                                        }


                                        const img2 = screenElement.querySelector('.overlay-data2-img');
                                        if (img2) {
                                            // img2.style.animation = 'zoomIn2 2s 2s both';
                                        }


                                        // Start
                                        setTimeout(() => {
                                            const s3Data1 = mE.querySelector(".s3-data1");

                                            // s3Data1.style.animation = "s3-moveOutData 2s ease-in";

                                            setTimeout(() => {
                                                s3Data1.style.opacity = 0;
                                            }, 2000);
                                        }, 4000);

                                    }
                                }, 0);
                                */


                                // Ball-loading:--
                                //set..[Svg]..  
                                mArtBox_evnt.add_svg({
                                    "w": `100%`,
                                    "h": `95vh`,
                                    "e": mE,
                                    "src": `${m_asset_path}/8.12.svg`
                                },
                                    {
                                        "onLoad": (v = {}) => {
                                            //set..[Svg]..ellipse 2
                                            mArtBox_evnt.add_svg({
                                                "w": `6vw`,
                                                "h": `6vw`,
                                                "x": 10,
                                                "y": 10,
                                                "e": mE,
                                                "src": `${m_asset_path}/Ellipse 2.svg`
                                            }
                                                , {
                                                    "onLoad": (v = {}) => {
                                                        //set..
                                                        // console.log(v.e);


                                                        //left to right animation
                                                        setTimeout(() => {
                                                            // Basic animation using Anime.js
                                                            var tl = anime.timeline({
                                                                easing: 'easeOutExpo',
                                                                duration: 2000
                                                            });

                                                            // Add children
                                                            tl
                                                                .add({
                                                                    targets: v.e,
                                                                    translateX: "75vw"
                                                                })
                                                        }, 1000);

                                                        //right to mid
                                                        setTimeout(() => {
                                                            // Basic animation using Anime.js
                                                            var tl = anime.timeline({
                                                                easing: 'easeOutExpo',
                                                                duration: 2000
                                                            });

                                                            // Add children
                                                            tl
                                                                .add({
                                                                    targets: v.e,
                                                                    translateX: "36vw",
                                                                    translateY: "32vh",
                                                                })
                                                        }, 2000);

                                                        //mid to left bottom
                                                        setTimeout(() => {
                                                            // Basic animation using Anime.js
                                                            var tl = anime.timeline({
                                                                easing: 'easeOutExpo',
                                                                duration: 2000
                                                            });

                                                            // Add children
                                                            tl
                                                                .add({
                                                                    targets: v.e,
                                                                    translateX: "-2vw",
                                                                    translateY: "65vh",
                                                                })
                                                        }, 3000);

                                                        //left bottom to right bottom animation
                                                        setTimeout(() => {
                                                            // Basic animation using Anime.js
                                                            var tl = anime.timeline({
                                                                easing: 'easeOutExpo',
                                                                duration: 2000
                                                            });

                                                            // Add children
                                                            tl
                                                                .add({
                                                                    targets: v.e,
                                                                    translateX: "75vw",
                                                                    translateY: "65vh",

                                                                    complete: function (anim) {
                                                                        anime.remove(v.e);
                                                                    }
                                                                }
                                                                )

                                                        }, 4000);


                                                        setTimeout(() => {
                                                            v.e.remove();
                                                        }, 5000);
                                                    }
                                                }
                                            );

                                            //set..[Svg]..
                                            mArtBox_evnt.add_svg({
                                                "w": `0.7vw`,
                                                "h": `2.5vh`,
                                                "x": 11.5,
                                                "y": 15,
                                                "e": mE,
                                                "src": `${m_asset_path}/Ellipse 3.svg`
                                            }
                                                , {
                                                    "onLoad": (v = {}) => {


                                                        //left to right animation
                                                        setTimeout(() => {
                                                            // Basic animation using Anime.js
                                                            var tl = anime.timeline({
                                                                easing: 'easeOutExpo',
                                                                duration: 2000
                                                            });

                                                            // Add children
                                                            tl
                                                                .add({
                                                                    targets: v.e,
                                                                    translateX: "77.5vw",
                                                                })
                                                        }, 1000);

                                                        //right to mid 
                                                        setTimeout(() => {
                                                            // Basic animation using Anime.js
                                                            var tl = anime.timeline({
                                                                easing: 'easeOutExpo',
                                                                duration: 2000
                                                            });

                                                            // Add children
                                                            tl
                                                                .add({
                                                                    targets: v.e,
                                                                    translateX: "38.5vw",
                                                                    translateY: "32vh",
                                                                })
                                                        }, 2000);

                                                        //mid to left bottom
                                                        setTimeout(() => {
                                                            // Basic animation using Anime.js
                                                            var tl = anime.timeline({
                                                                easing: 'easeOutExpo',
                                                                duration: 2000
                                                            });

                                                            // Add children
                                                            tl
                                                                .add({
                                                                    targets: v.e,
                                                                    translateX: "-2vw",
                                                                    translateY: "65vh",
                                                                })
                                                        }, 3000);

                                                        //left bottom to right bottom animation
                                                        setTimeout(() => {
                                                            // Basic animation using Anime.js
                                                            var tl = anime.timeline({
                                                                easing: 'easeOutExpo',
                                                                duration: 2000
                                                            });

                                                            // Add children
                                                            tl
                                                                .add({
                                                                    targets: v.e,
                                                                    translateX: "77.5vw",
                                                                    translateY: "65vh",
                                                                })

                                                        }, 4000);

                                                    }
                                                }
                                            );

                                            setTimeout(() => {
                                                v.e.remove();

                                                setTimeout(() => {
                                                    diffSpeedLevel();
                                                }, 1000);
                                            }, 5000);

                                        }
                                    });


                                // Difficulty level (screen - 16):--
                                let diffSpeedLevel = () => {
                                    //set..[Svg]..background  
                                    mArtBox_evnt.add_svg({
                                        "w": `100%`,
                                        "h": `95vh`,
                                        "e": mE,
                                        "src": `${m_asset_path}/8.12.svg`
                                    }, {
                                        "onLoad": (v = {}) => {

                                            //set..[Svg].. difficulty level
                                            mArtBox_evnt.add_svg({
                                                "w": `15vw`,
                                                "h": `5vh`,
                                                "x": 40,
                                                "y": 12,
                                                "e": mE,
                                                "src": `${m_asset_path}/screen_16_svg/Difficulty level.svg`
                                            }
                                            );

                                            //set..[Svg].. rectangle
                                            mArtBox_evnt.add_svg({
                                                "w": `75vw`,
                                                "h": `6vh`,
                                                "x": 11.5,
                                                "y": 25,
                                                "e": mE,
                                                "src": `${m_asset_path}/screen_16_svg/Rectangle 3.svg`
                                            }
                                                , {
                                                    "onLoad": (v = {}) => {

                                                        setTimeout(() => {

                                                        }, 1000);
                                                    }
                                                }
                                            );

                                            //set..[Svg].. slider of first rectangle
                                            mArtBox_evnt.add_svg({
                                                "w": `40vw`,
                                                "h": `4vh`,
                                                "x": 12.4,
                                                "y": 26,
                                                "e": mE,
                                                "src": `${m_asset_path}/screen_16_svg/Rectangle 5.svg`
                                            }, {
                                                "onLoad": (v = {}) => {
                                                    mArtBox_evnt.add_svg({
                                                        "w": `11vh`,
                                                        "h": `11vh`,
                                                        "x": 50,
                                                        "y": 22.5,
                                                        "e": mE,
                                                        "src": `${m_asset_path}/screen_16_svg/Ellipse 6.svg`
                                                    }, {
                                                        "onLoad": (v = {}) => {
                                                            mArtBox_evnt.add_svg({

                                                                "w": `4vh`,
                                                                "h": `4vh`,
                                                                "x": 51.5,
                                                                "y": 26,
                                                                "e": mE,
                                                                "src": `${m_asset_path}/screen_16_svg/10.svg`
                                                            }

                                                            );
                                                        }
                                                    }
                                                    );

                                                }
                                            }
                                            );

                                            //set..[Svg].. speed level
                                            mArtBox_evnt.add_svg({
                                                "w": `8vw`,
                                                "h": `5vh`,
                                                "x": 43.5,
                                                "y": 42,
                                                "e": mE,
                                                "src": `${m_asset_path}/screen_16_svg/Speed.svg`
                                            }
                                            );

                                            //set..[Svg].. rectangle
                                            mArtBox_evnt.add_svg({

                                                "w": `75vw`,
                                                "h": `6vh`,
                                                "x": 11.5,
                                                "y": 55,
                                                "e": mE,
                                                "src": `${m_asset_path}/screen_16_svg/Rectangle 3.svg`
                                            }
                                                , {
                                                    "onLoad": (v = {}) => {

                                                        setTimeout(() => {

                                                        }, 1000);
                                                    }
                                                }
                                            );


                                            //set..[Svg].. slider for second rectangle
                                            mArtBox_evnt.add_svg({
                                                "w": `30vw`,
                                                "h": `4vh`,
                                                "x": 12.3,
                                                "y": 56,
                                                "e": mE,
                                                "src": `${m_asset_path}/screen_16_svg/Rectangle 5.svg`
                                            }, {
                                                "onLoad": (v = {}) => {
                                                    mArtBox_evnt.add_svg({
                                                        "w": `11vh`,
                                                        "h": `11vh`,
                                                        "x": 40,
                                                        "y": 52.5,
                                                        "e": mE,
                                                        "src": `${m_asset_path}/screen_16_svg/Ellipse 6.svg`
                                                    }, {
                                                        "onLoad": (v = {}) => {
                                                            mArtBox_evnt.add_svg({

                                                                "w": `4vh`,
                                                                "h": `4vh`,
                                                                "x": 41.5,
                                                                "y": 56,
                                                                "e": mE,
                                                                "src": `${m_asset_path}/screen_16_svg/5.svg`
                                                            }

                                                            );
                                                        }
                                                    }
                                                    );

                                                }
                                            }
                                            );


                                            //set..[Svg].. button
                                            mArtBox_evnt.add_svg({
                                                "w": `20vw`,
                                                "h": `10vh`,
                                                "x": 38,
                                                "y": 75,
                                                "e": mE,
                                                "src": `${m_asset_path}/screen_16_svg/button.svg`
                                            }

                                            );

                                            mArtBox_evnt.add_svg({
                                                "w": `12vw`,
                                                "h": `6vh`,
                                                "x": 42,
                                                "y": 77.5,
                                                "e": mE,
                                                "src": `${m_asset_path}/screen_16_svg/Let's play.svg`
                                            }, {
                                                "onLoad": (v = {}) => {
                                                    //set..
                                                    // console.log(v.e);
                                                    v.e.style.opacity = `0`;
                                                    v.e.style.cursor = `pointer`;


                                                    //animation [Start]
                                                    setTimeout(() => {
                                                        let timeline = anime.timeline();
                                                        timeline.add({
                                                            targets: v.e,
                                                            opacity: 1,
                                                            duration: 1000,
                                                            easing: 'easeOutExpo',

                                                            // complete: function (anim) {
                                                            //     anime.remove(v.e);
                                                            //     //completeLogEl.value = 'completed : ' + anim.completed;
                                                            //     on_scr_end();
                                                            // }
                                                        }
                                                        );
                                                    }, 400);
                                                },

                                                "onClick": (v = {}) => {
                                                    v.e.style.opacity = "0";

                                                    setTimeout(() => {
                                                        v.e.remove();
                                                    }, 300);
                                                    on_scr_end();
                                                }

                                            }
                                            );

                                        }
                                    });

                                    // on_scr_end..
                                    let on_scr_end = () => {
                                        let timeline = anime.timeline();
                                        timeline.add({
                                            targets: mScr,
                                            opacity: 0,
                                            duration: 3000,
                                            easing: 'easeOutExpo',
                                            update: function (anim) {
                                                // mSendCB(`on_scr_end`, {});
                                                console.log(anim.progress);

                                                if (anim.progress > 0) {
                                                    anime.remove(mScr);
                                                    mScr.remove();
                                                    //send cb..
                                                    mSendCB(`on_scr_end`, {});

                                                }
                                            },
                                        });
                                    };

                                }

                            };

                            mSet(mScr);
                        }
                    },

                    // Screen-4 -----------------------------
                    {
                        "name": "Screen 4",
                        "key": "scr_4",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            //--reset--// [START]
                            v["e"].innerHTML = ``; //reset

                            //mSendCB..
                            let mSendCB = (cb_name, p = {}) => {
                                if (v["value"].hasOwnProperty("cb")) {
                                    if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                                        v["value"]["cb"][cb_name](p);
                                    }
                                }
                            };


                            //set..
                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            mScr.style.height = `100%`;
                            mScr.style.width = `100%`;
                            mScr.style.overflow = `hidden`;


                            //set..
                            let mSet = (mE = document.body) => {

                                // Ready-set-go Loading:--
                                //set..[Svg]..  
                                mArtBox_evnt.add_svg({
                                    "w": `100%`,
                                    "h": `95vh`,
                                    "e": mE,
                                    "src": `${m_asset_path}/8.12.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        mArtBox_evnt.add_svg({
                                            "w": `45vh`,
                                            "h": `45vh`,
                                            "x": 39,
                                            "y": 25,
                                            "e": mE,
                                            "src": `${m_asset_path}/circle.svg`
                                        },
                                            {
                                                "onLoad": (v = {}) => {
                                                    let timeline = anime.timeline();
                                                    // timeline.add({
                                                    //     targets: v.e,
                                                    //     opacity: [1, 0],});
                                                    setTimeout(() => {
                                                        mArtBox_evnt.add_animation({
                                                            "e": v.e,
                                                            "type": "animate__zoomOut",

                                                        }),
                                                            timeline.add({
                                                                targets: v.e,
                                                                opacity: [1, 0],
                                                            });
                                                    }, 1000)
                                                }
                                            }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": `15vh`,
                                            "h": `8vh`,
                                            "x": 46.5,
                                            "y": 42.2,
                                            "e": mE,
                                            "src": `${m_asset_path}/GET.svg`
                                        },
                                            {
                                                "onLoad": (v = {}) => {
                                                    let timeline = anime.timeline();
                                                    // timeline.add({
                                                    //     targets: v.e,
                                                    //     opacity: [1, 0],});
                                                    setTimeout(() => {
                                                        mArtBox_evnt.add_animation({
                                                            "e": v.e,
                                                            "type": "animate__zoomOut",

                                                        }),
                                                            timeline.add({
                                                                targets: v.e,
                                                                opacity: [1, 0],
                                                            });
                                                    }, 1000)
                                                }
                                            }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": `20vh`,
                                            "h": `20vh`,
                                            "x": 45.5, //45.5
                                            "y": 37.5, //37.5
                                            "e": mE,
                                            "src": `${m_asset_path}/smallBall.svg`
                                        },
                                            {
                                                "onLoad": (v = {}) => {
                                                    let timeline = anime.timeline();
                                                    timeline.add({
                                                        targets: v.e,
                                                        opacity: [1, 0],
                                                    });
                                                    setTimeout(() => {
                                                        v.e.classList.add("animate__animated", "animate__bounceIn"),
                                                            v.e.style.setProperty('--animate-duration', '2s');
                                                        v.e.addEventListener('animationend', () => {
                                                            v.e.style.visibility = "hidden";
                                                        });
                                                    }, 1000)
                                                }
                                            }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": `2vh`,
                                            "h": `2vh`,
                                            "x": 52.5, //45.5
                                            "y": 40.5, //37.5
                                            "e": mE,
                                            "src": `${m_asset_path}/Ellipse3.svg`
                                        },
                                            {
                                                "onLoad": (v = {}) => {
                                                    let timeline = anime.timeline();
                                                    timeline.add({
                                                        targets: v.e,
                                                        opacity: [1, 0],
                                                    });
                                                    setTimeout(() => {
                                                        v.e.classList.add("animate__animated", "animate__bounceIn"),
                                                            v.e.style.setProperty('--animate-duration', '2s');
                                                        v.e.addEventListener('animationend', () => {
                                                            v.e.style.visibility = "hidden";
                                                        });
                                                    }, 1000)
                                                }
                                            }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": `45vh`,
                                            "h": `45vh`,
                                            "x": 39,
                                            "y": 25,
                                            "e": mE,
                                            "src": `${m_asset_path}/circle.svg`
                                        },
                                            {
                                                "onLoad": (v = {}) => {
                                                    let timeline = anime.timeline();
                                                    timeline.add({
                                                        targets: v.e,
                                                        opacity: [1, 0],
                                                    });
                                                    setTimeout(() => {
                                                        v.e.classList.add("animate__animated", "animate__bounceIn"),
                                                            v.e.style.setProperty('--animate-duration', '2s');
                                                        v.e.addEventListener('animationend', () => {
                                                            v.e.classList.add("animate__animated", "animate__zoomOut")
                                                        });
                                                    }, 2500)
                                                }
                                            }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": `15vh`,
                                            "h": `8vh`,
                                            "x": 46.5,
                                            "y": 42.2,
                                            "e": mE,
                                            "src": `${m_asset_path}/SET.svg`
                                        },
                                            {
                                                "onLoad": (v = {}) => {
                                                    let timeline = anime.timeline();
                                                    timeline.add({
                                                        targets: v.e,
                                                        opacity: [0],
                                                    });
                                                    setTimeout(() => {
                                                        v.e.classList.add("animate__animated", "animate__bounceIn"),
                                                            v.e.style.setProperty('--animate-duration', '2s');
                                                        v.e.addEventListener('animationend', () => {
                                                            v.e.classList.add("animate__animated", "animate__zoomOut")
                                                        });
                                                    }, 2500)
                                                }
                                            }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": `20vh`,
                                            "h": `20vh`,
                                            "x": 45.5, //45.5
                                            "y": 37.5, //37.5
                                            "e": mE,
                                            "src": `${m_asset_path}/smallBall.svg`
                                        },
                                            {
                                                "onLoad": (v = {}) => {
                                                    let timeline = anime.timeline();
                                                    timeline.add({
                                                        targets: v.e,
                                                        opacity: [1, 0],
                                                    });
                                                    setTimeout(() => {
                                                        v.e.classList.add("animate__animated", "animate__bounceIn"),
                                                            v.e.style.setProperty('--animate-duration', '2s');
                                                        v.e.addEventListener('animationend', () => {
                                                            v.e.style.visibility = "hidden";
                                                        });
                                                    }, 4000)
                                                }
                                            }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": `2vh`,
                                            "h": `2vh`,
                                            "x": 52.5, //45.5
                                            "y": 40.5, //37.5
                                            "e": mE,
                                            "src": `${m_asset_path}/Ellipse3.svg`
                                        },
                                            {
                                                "onLoad": (v = {}) => {
                                                    let timeline = anime.timeline();
                                                    timeline.add({
                                                        targets: v.e,
                                                        opacity: [1, 0],
                                                    });
                                                    setTimeout(() => {
                                                        v.e.classList.add("animate__animated", "animate__bounceIn"),
                                                            v.e.style.setProperty('--animate-duration', '2s');
                                                        v.e.addEventListener('animationend', () => {
                                                            v.e.style.visibility = "hidden";
                                                        });
                                                    }, 4000)
                                                }
                                            }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": `45vh`,
                                            "h": `45vh`,
                                            "x": 39,
                                            "y": 25,
                                            "e": mE,
                                            "src": `${m_asset_path}/circle.svg`
                                        },
                                            {
                                                "onLoad": (v = {}) => {
                                                    let timeline = anime.timeline();
                                                    timeline.add({
                                                        targets: v.e,
                                                        opacity: [1, 0],
                                                    });
                                                    setTimeout(() => {
                                                        v.e.classList.add("animate__animated", "animate__bounceIn"),
                                                            v.e.style.setProperty('--animate-duration', '2s');
                                                        v.e.addEventListener('animationend', () => {
                                                            v.e.classList.add("animate__animated", "animate__zoomOut")
                                                        });
                                                    }, 5500)
                                                }
                                            }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": `15vh`,
                                            "h": `8vh`,
                                            "x": 46.5,
                                            "y": 42.2,
                                            "e": mE,
                                            "src": `${m_asset_path}/GO.svg`
                                        },
                                            {
                                                "onLoad": (v = {}) => {
                                                    let timeline = anime.timeline();
                                                    timeline.add({
                                                        targets: v.e,
                                                        opacity: [0],
                                                    });
                                                    setTimeout(() => {
                                                        v.e.classList.add("animate__animated", "animate__bounceIn"),
                                                            v.e.style.setProperty('--animate-duration', '2s');
                                                        v.e.addEventListener('animationend', () => {
                                                            v.e.classList.add("animate__animated", "animate__zoomOut")
                                                        });
                                                    }, 5500)

                                                },

                                            }
                                        );
                                        setTimeout(() => {
                                            v.e.remove();
                                        }, 7500);
                                    }
                                });


                                // Text-Loading:--
                                setTimeout(() => {
                                    //set..[Svg]..  
                                    mArtBox_evnt.add_svg({
                                        "w": `100%`,
                                        "h": `95vh`,
                                        "e": mE,
                                        "src": `${m_asset_path}/8.12.svg`
                                    }, {
                                        "onLoad": (v = {}) => {

                                            //set..[Svg].. recommended
                                            mArtBox_evnt.add_svg({
                                                "w": `18vw`,
                                                "h": `8vh`,
                                                "x": 10,
                                                "y": 10,
                                                "e": mE,
                                                "src": `${m_asset_path}/recommend.svg`
                                            }
                                                , {
                                                    "onLoad": (v = {}) => {

                                                        setTimeout(() => {
                                                            v.e.classList.add('animate__animated', 'animate__zoomOut');
                                                            v.e.style.setProperty('--animate-duration', '2s');
                                                        }, 1000);
                                                    }
                                                }
                                            );

                                            //set..[Svg].. online
                                            mArtBox_evnt.add_svg({
                                                "w": `14vw`,
                                                "h": `8vh`,
                                                "x": 75,
                                                "y": 10,
                                                "e": mE,
                                                "src": `${m_asset_path}/online.svg`
                                            }

                                                , {
                                                    "onLoad": (v = {}) => {

                                                        v.e.style.visibility = "hidden";
                                                        setTimeout(() => {
                                                            v.e.style.visibility = "visible";
                                                            v.e.classList.add('animate__animated', 'animate__zoomIn');
                                                            v.e.style.setProperty('--animate-duration', '2s');
                                                            v.e.addEventListener('animationend', () => {
                                                                v.e.classList.add('animate__animated', 'animate__zoomOut');
                                                            });
                                                        }, 2000);
                                                    }
                                                }
                                            );

                                            //set..[Svg].. grading
                                            mArtBox_evnt.add_svg({
                                                "w": `14vw`,
                                                "h": `8vh`,
                                                "x": 40,
                                                "y": 40,
                                                "e": mE,
                                                "src": `${m_asset_path}/grading.svg`
                                            }

                                                , {
                                                    "onLoad": (v = {}) => {
                                                        v.e.style.visibility = "hidden";
                                                        setTimeout(() => {
                                                            v.e.style.visibility = "visible";
                                                            v.e.classList.add('animate__animated', 'animate__zoomIn');
                                                            v.e.style.setProperty('--animate-duration', '2s');
                                                            v.e.addEventListener('animationend', () => {
                                                                v.e.classList.add('animate__animated', 'animate__zoomOut');
                                                            });
                                                        }, 4000);
                                                    }
                                                }
                                            );

                                            //set..[Svg].. multiple
                                            mArtBox_evnt.add_svg({
                                                "w": `14vw`,
                                                "h": `8vh`,
                                                "x": 10,
                                                "y": 80,
                                                "e": mE,
                                                "src": `${m_asset_path}/multiple.svg`
                                            }

                                                , {
                                                    "onLoad": (v = {}) => {
                                                        v.e.style.visibility = "hidden";
                                                        setTimeout(() => {
                                                            v.e.style.visibility = "visible";
                                                            v.e.classList.add('animate__animated', 'animate__zoomIn');
                                                            v.e.style.setProperty('--animate-duration', '2s');
                                                            v.e.addEventListener('animationend', () => {
                                                                v.e.classList.add('animate__animated', 'animate__zoomOut');
                                                            });
                                                        }, 6000);
                                                    }
                                                }

                                            );


                                            //set..[Svg].. save
                                            mArtBox_evnt.add_svg({
                                                "w": `8vw`,
                                                "h": `4vh`,
                                                "x": 80,
                                                "y": 80,
                                                "e": mE,
                                                "src": `${m_asset_path}/save.svg`
                                            }

                                                , {
                                                    "onLoad": (v = {}) => {
                                                        v.e.style.visibility = "hidden";
                                                        setTimeout(() => {
                                                            v.e.style.visibility = "visible";
                                                            v.e.classList.add('animate__animated', 'animate__zoomIn');
                                                            v.e.style.setProperty('--animate-duration', '2s');
                                                            v.e.addEventListener('animationend', () => {
                                                                v.e.classList.add('animate__animated', 'animate__zoomOut');
                                                            });
                                                        }, 8000);
                                                    }
                                                }

                                            );

                                            setTimeout(() => {
                                                v.e.remove()
                                                on_scr_end();
                                            }, 10000);
                                        }
                                    });

                                }, 8000);
                            };
                            // on_scr_end..
                            let on_scr_end = () => {
                                let timeline = anime.timeline();
                                timeline.add({
                                    targets: mScr,
                                    opacity: 0,
                                    duration: 3000,
                                    easing: 'easeOutExpo',
                                    update: function (anim) {
                                        // mSendCB(`on_scr_end`, {});
                                        console.log(anim.progress);

                                        if (anim.progress > 0) {
                                            anime.remove(mScr);
                                            mScr.remove();
                                            //send cb..
                                            mSendCB(`on_scr_end`, {});
                                        }
                                    },
                                });
                            };

                            mSet(mScr);
                        }
                    },

                    // Screen-5 -----------------------------
                    {
                        "name": "Screen 5",
                        "key": "scr_5",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            //--reset--// [START]
                            v["e"].innerHTML = ``; //reset

                            // mSendCB..
                            let mSendCB = (cb_name, p = {}) => {
                                if (v["value"].hasOwnProperty("cb")) {
                                    if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                                        v["value"]["cb"][cb_name](p);
                                    }
                                }
                            };


                            //set..
                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            mScr.style.height = `100vh`;
                            mScr.style.width = `100%`;
                            mScr.style.overflow = `hidden`;


                            //set..
                            let mSet = (mE = document.body) => {

                                /* mE.innerHTML = `
                                <div class="s5">
                                    <!-- <div>
                                        <div class="text_loading1"></div>
                                        <div class="text_loading2"></div>
                                        <div class="text_loading3"></div>
                                        <div class="text_loading4"></div>
                                    </div> -->

                                    <div class="s5-data">
                                        <div class="s5-ques">
                                            <span class="s5-quesText">Should automatically starts or not?</span>
                                        </div>

                                        <div class="s5-img-cont">
                                            <img class="s5-img" src="../assets/question_mark.svg" alt="question mark">
                                        </div>

                                        <div class="s5-options">
                                            <div class="s5-option1">
                                                <div>
                                                    <img src="../assets/option_bg.svg" alt="" class="option-img" />
                                                    <span>Option 1</span>
                                                </div>
                                            </div>
                                            <div class="s5-option2">
                                                <div>
                                                    <img src="../assets/option_bg.svg" alt="" class="option-img" />
                                                    <span>Option 2</span>
                                                </div>
                                            </div>
                                            <div class="s5-option3">
                                                <div>
                                                    <img src="../assets/option_bg.svg" alt="" class="option-img" />
                                                    <span>Option 3</span>
                                                </div>
                                            </div>
                                            <div class="s5-option4">
                                                <div>
                                                    <img src="../assets/option_bg.svg" alt="" class="option-img" />
                                                    <span>Option 4</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="s5-position">
                                            <span>1</span>
                                            <span>2</span>
                                            <span>3</span>
                                            <span>4</span>
                                        </div> 
                                    </div>
                                </div>

                                `;
                                //<!-- --!>
                                setTimeout(() => {
                                    const screenElement = mE.querySelector('.scr5');
                                    if (screenElement) {
                                        screenElement.style.opacity = 1;

                                    }
                                }, 0);*/

                                // Quiz Tree 1:--
                                // Question div:-
                                mArtBox_evnt.add_svg({
                                    "w": `80vw`,
                                    "h": `18vh`,
                                    // "x": 30,  //-->
                                    // "y": 30,  //--> position absolute makes error here//
                                    "e": mE,
                                    "src": `${m_asset_path}/question_bg.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        v.e.style.opacity = "0";
                                        v.e.style.height = `cal(100vh - 8vh)`;
                                        v.e.style.display = `flex`;
                                        v.e.style.justifyContent = `center`;
                                        v.e.style.marginTop = `8vh`;
                                        v.e.style.overflow = `hidden`;

                                        // Inner text - ques:--
                                        let ve = v.e;
                                        let ques = document.createElement('div');
                                        ques.classList = "question";
                                        ques.innerHTML = ` <h1 class="ques-h1">Should automatically starts or not?</h1> `

                                        ques.style.width = "80vw";
                                        ques.style.height = "15vh";
                                        ques.style.marginInline = "2vw";
                                        ques.style.marginBottom = "10px";
                                        ques.style.position = "absolute";
                                        ques.style.top = "9vh";
                                        ques.style.left = "7%";
                                        ques.style.textAlign = "center";
                                        ve.appendChild(ques);

                                        setTimeout(() => {
                                            ques.style.top = "0%";
                                            anime({
                                                opacity: 1,
                                                targets: v.e,
                                                translateY: [-300, 0],
                                                duration: 1000,
                                                direction: 'alternate',
                                                easing: 'easeInQuad',
                                                loop: false
                                            });
                                        }, 0);


                                        // Number circles -bottom:--
                                        mArtBox_evnt.add_svg({
                                            "w": `20vw`,
                                            "h": `9vh`,
                                            // "x": 40,  //-->
                                            // "y": 60,  //--> position absolute makes error here//
                                            "e": mE,
                                            "src": `${m_asset_path}/number_circles.svg`
                                        }, {
                                            "onLoad": (v = {}) => {
                                                v.e.style.opacity = "0";
                                                v.e.style.display = 'flex';
                                                v.e.style.justifyContent = 'center';
                                                v.e.style.alignItems = 'end';
                                                v.e.style.overflow = 'hidden';
                                                v.e.style.position = 'fixed';
                                                v.e.style.top = '85%';
                                                v.e.style.left = '40%';

                                                anime({
                                                    opacity: 1,
                                                    targets: v.e,
                                                    translateY: [300, 0],
                                                    duration: 1000,
                                                    direction: 'alternate',
                                                    easing: 'easeInQuad',
                                                    loop: false
                                                });
                                            }
                                        });
                                    },

                                });

                                // Question Marks & Options div:-
                                mArtBox_evnt.add_svg({
                                    "w": `12vw`,
                                    "h": `19vh`,
                                    "x": 44,  //-->
                                    "y": 50,  //--> position absolute makes error here//
                                    "e": mE,
                                    "src": `${m_asset_path}/question_mark.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        // console.log(v.e);
                                        v.e.style.height = `100vh`;
                                        v.e.style.opacity = `0`;
                                        setTimeout(() => {
                                            anime({
                                                opacity: 1,
                                                targets: v.e,
                                                scale: [0, 1],
                                                duration: 500,
                                                direction: 'alternate',
                                                easing: 'easeInQuad',
                                                loop: false
                                            });
                                        }, 1000);

                                        let ve = v.e;
                                        let lineCont = document.createElement('div');
                                        lineCont.classList = "line-cont";
                                        lineCont.style.position = "absolute";
                                        lineCont.style.top = "0";
                                        lineCont.style.left = "0";
                                        lineCont.style.zIndex = "100";
                                        ve.appendChild(lineCont);

                                        let innerLineCont = document.createElement('div');
                                        innerLineCont.classList = "inner-line-cont";
                                        // innerLineCont.style.position = "relative";

                                        innerLineCont.style.marginTop = "10vh";
                                        innerLineCont.style.height = "90vh";
                                        innerLineCont.style.width = "100vw";
                                        lineCont.appendChild(innerLineCont);

                                        // Option 1:-
                                        setTimeout(() => {
                                            let line1 = document.createElement('div');
                                            line1.classList = "line1";
                                            line1.style.backgroundColor = "#8D8282";
                                            line1.style.height = "0.5vh";
                                            line1.style.width = "0.5vw";
                                            line1.style.position = "absolute";
                                            line1.style.top = "-5%";
                                            line1.style.left = "10%";
                                            line1.style.zIndex = "-1";
                                            // line1.style.transform = "rotate(-30deg)";
                                            innerLineCont.appendChild(line1);

                                            anime({
                                                targets: line1,
                                                width: '23%',
                                                rotate: -25,
                                                easing: 'easeInOutQuad',
                                                direction: 'alternate',
                                                duration: 500,
                                                loop: false
                                            });

                                            mArtBox_evnt.add_svg({
                                                "w": `14vw`,
                                                "h": `8vh`,
                                                "x": 74,  //-->
                                                "y": 6,  //--> position absolute makes error here//
                                                "e": mE,
                                                "src": `${m_asset_path}/option_bg.svg`
                                            }, {
                                                "onLoad": (v = {}) => {
                                                    v.e.style.cursor = "pointer";
                                                    v.e.style.width = "fit-content"
                                                    v.e.style.position = "relative";
                                                    v.e.style.zIndex = "100";

                                                    // Inner text - option:--
                                                    let ve = v.e;
                                                    let option1 = document.createElement('div');
                                                    option1.classList = "option1";
                                                    option1.innerHTML = ` <h1 class="option1-h1">What</h1> `
                                                    option1.style.position = "absolute";
                                                    option1.style.top = "-14%";
                                                    option1.style.left = "20%";
                                                    option1.style.textAlign = "center";
                                                    ve.appendChild(option1);
                                                },

                                                "onClick": (v = {}) => { alert("Option 1") }
                                            });
                                        }, 3000);

                                        // Option 2:-
                                        setTimeout(() => {
                                            let line2 = document.createElement('div');
                                            line2.classList = "line2";
                                            line2.style.backgroundColor = "#8D8282";
                                            line2.style.height = "0.5vh";
                                            line2.style.width = "0.5vw";
                                            line2.style.position = "absolute";
                                            line2.style.top = "18%";
                                            line2.style.right = "98%";
                                            line2.style.zIndex = "100";
                                            // line2.style.transform = "rotate(-30deg)";
                                            innerLineCont.appendChild(line2);

                                            anime({
                                                targets: line2,
                                                width: '24%',
                                                rotate: -20,
                                                easing: 'easeInOutQuad',
                                                direction: 'alternate',
                                                duration: 500,
                                                loop: false
                                            });

                                            mArtBox_evnt.add_svg({
                                                "w": `14vw`,
                                                "h": `8vh`,
                                                "x": 10,  //-->
                                                "y": 38,  //--> position absolute makes error here//
                                                "e": mE,
                                                "src": `${m_asset_path}/option_bg.svg`
                                            }, {
                                                "onLoad": (v = {}) => {
                                                    v.e.style.position = "relative";
                                                    v.e.style.width = "fit-content"
                                                    v.e.style.cursor = "pointer";
                                                    v.e.style.zIndex = "100";

                                                    // Inner text - option:--
                                                    let ve = v.e;
                                                    let option2 = document.createElement('div');
                                                    option2.classList = "option2";
                                                    option2.innerHTML = ` <h1 class="option2-h1">What</h1> `
                                                    option2.style.position = "absolute";
                                                    option2.style.top = "-14%";
                                                    option2.style.left = "20%";
                                                    option2.style.textAlign = "center";
                                                    ve.appendChild(option2);
                                                },

                                                "onClick": (v = {}) => { alert(" 2") }
                                            });
                                        }, 4000);

                                        // Option 3:-
                                        setTimeout(() => {
                                            let line3 = document.createElement('div');
                                            line3.classList = "line3";
                                            line3.style.backgroundColor = "#8D8282";
                                            line3.style.height = "0.5vh";
                                            line3.style.width = "0.5vw";
                                            line3.style.position = "absolute";
                                            line3.style.top = "18%";
                                            line3.style.left = "10%";
                                            line3.style.zIndex = "-1";
                                            // line3.style.transform = "rotate(-30deg)";
                                            innerLineCont.appendChild(line3);

                                            anime({
                                                targets: line3,
                                                width: '23%',
                                                easing: 'easeInOutQuad',
                                                direction: 'alternate',
                                                rotate: 17,
                                                duration: 500,
                                                loop: false
                                            });
                                            mArtBox_evnt.add_svg({
                                                "w": `14vw`,
                                                "h": `8vh`,
                                                "x": 75,  //-->
                                                "y": 27,  //--> position absolute makes error here//
                                                "e": mE,
                                                "src": `${m_asset_path}/option_bg.svg`
                                            }, {
                                                "onLoad": (v = {}) => {
                                                    v.e.style.cursor = "pointer";
                                                    v.e.style.width = "fit-content"
                                                    v.e.style.position = "relative";
                                                    v.e.style.zIndex = "100";

                                                    // Inner text - option:--
                                                    let ve = v.e;
                                                    let option3 = document.createElement('div');
                                                    option3.classList = "option3";
                                                    option3.innerHTML = ` <h1 class="option3-h1">What</h1> `
                                                    option3.style.position = "absolute";
                                                    option3.style.top = "-14%";
                                                    option3.style.left = "20%";
                                                    option3.style.textAlign = "center";
                                                    ve.appendChild(option3);
                                                },

                                                "onClick": (v = {}) => { alert(" 3") }
                                            });
                                        }, 5000);

                                        // Option 4:-
                                        setTimeout(() => {
                                            let line4 = document.createElement('div');
                                            line4.classList = "line4";
                                            line4.style.backgroundColor = "#8D8282";
                                            line4.style.height = "0.5vh";
                                            line4.style.width = "0.5vw";
                                            line4.style.position = "absolute";
                                            line4.style.top = "-4%";
                                            line4.style.right = "98%";
                                            line4.style.zIndex = "100";
                                            // line4.style.transform = "rotate(-30deg)";
                                            innerLineCont.appendChild(line4);

                                            anime({
                                                targets: line4,
                                                width: '24%',
                                                easing: 'easeInOutQuad',
                                                direction: 'alternate',
                                                rotate: 21,
                                                duration: 500,
                                                loop: false
                                            });

                                            mArtBox_evnt.add_svg({
                                                "w": `14vw`,
                                                "h": `8vh`,
                                                "x": 10,  //-->
                                                "y": -18.5,  //--> position absolute makes error here//
                                                "e": mE,
                                                "src": `${m_asset_path}/option_bg.svg`
                                            }, {
                                                "onLoad": (v = {}) => {
                                                    v.e.style.cursor = "pointer";
                                                    v.e.style.width = "fit-content"
                                                    v.e.style.position = "relative";
                                                    v.e.style.zIndex = "100";

                                                    // Inner text - option:--
                                                    let ve = v.e;
                                                    let option4 = document.createElement('div');
                                                    option4.classList = "option4";
                                                    option4.innerHTML = ` <h1 class="option4-h1">What</h1> `
                                                    option4.style.position = "absolute";
                                                    option4.style.top = "-14%";
                                                    option4.style.left = "20%";
                                                    option4.style.textAlign = "center";
                                                    ve.appendChild(option4);
                                                },

                                                "onClick": (v = {}) => { alert("Option 4") }
                                            });
                                        }, 6000);

                                        setTimeout(() => {
                                            on_scr_end();
                                        }, 10000);
                                    },

                                });

                                // on_scr_end..
                                let on_scr_end = () => {
                                    let timeline = anime.timeline();
                                    timeline.add({
                                        targets: mScr,
                                        opacity: 0,
                                        duration: 3000,
                                        easing: 'easeOutExpo',
                                        update: function (anim) {
                                            // mSendCB(`on_scr_end`, {});
                                            console.log(anim.progress);

                                            if (anim.progress > 0) {
                                                anime.remove(mScr);
                                                mScr.remove();
                                                //send cb..
                                                mSendCB(`on_scr_end`, {});
                                            }
                                        },
                                    });
                                };
                            };

                            mSet(mScr);
                        }
                    },

                    // Screen-6 ------------------------------
                    {
                        "name": "Screen 6",
                        "key": "scr_6",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            //--reset--// [START]
                            v["e"].innerHTML = ``; //reset

                            //mSendCB..
                            let mSendCB = (cb_name, p = {}) => {
                                if (v["value"].hasOwnProperty("cb")) {
                                    if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                                        v["value"]["cb"][cb_name](p);
                                    }
                                }
                            };


                            //set..
                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            mScr.style.height = `100vh`;
                            mScr.style.width = `100%`;
                            mScr.style.overflow = `hidden`;

                            //set..
                            let mSet = (mE = document.body) => {
                                // Score and Round Play:--
                                //set..[Svg].. 
                                mArtBox_evnt.add_svg({
                                    "w": `100%`,
                                    "h": `96vh`,
                                    "e": mE,
                                    "src": `${m_asset_path}/8.12.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        // //set..[Svg].. recommended
                                        mArtBox_evnt.add_svg({
                                            "w": `45vh`,
                                            "h": `50vh`,
                                            "x": 40,
                                            "y": 10,
                                            "e": mE,
                                            "src": `${m_asset_path}/Rectangle9.svg`
                                        }
                                        );

                                        // //set..[Svg].. online
                                        mArtBox_evnt.add_svg({
                                            "w": `30vh`,
                                            "h": `5vh`,
                                            "x": 43.8,
                                            "y": 14,
                                            "e": mE,
                                            "src": `${m_asset_path}/Congratulations!.svg`
                                        }
                                        );

                                        // //set..[Svg].. grading
                                        mArtBox_evnt.add_svg({
                                            "w": `15vh`,
                                            "h": `2vh`,
                                            "x": 47.5,
                                            "y": 20,
                                            "e": mE,
                                            "src": `${m_asset_path}/RoundCleared.svg`
                                        }
                                        );

                                        mArtBox_evnt.add_svg({
                                            "w": `55vh`,
                                            "h": `12vh`,
                                            "x": 37.5,
                                            "y": 26,
                                            "e": mE,
                                            "src": `${m_asset_path}/Vector74.svg`
                                        }
                                        );

                                        mArtBox_evnt.add_svg({
                                            "w": `8vh`,
                                            "h": `8vh`,
                                            "x": 45,
                                            "y": 27.2,
                                            "e": mE,
                                            "src": `${m_asset_path}/Star3.svg`
                                        }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": `8vh`,
                                            "h": `8vh`,
                                            "x": 49.5,
                                            "y": 26.2,
                                            "e": mE,
                                            "src": `${m_asset_path}/Star1.svg`
                                        }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": `8vh`,
                                            "h": `8vh`,
                                            "x": 54,
                                            "y": 27.1,
                                            "e": mE,
                                            "src": `${m_asset_path}/Star2.svg`
                                        }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": `15vh`,
                                            "h": `5vh`,
                                            "x": 47,
                                            "y": 44,
                                            "e": mE,
                                            "src": `${m_asset_path}/Score_ 49.svg`
                                        }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": `15vh`,
                                            "h": `3vh`,
                                            "x": 47,
                                            "y": 53,
                                            "e": mE,
                                            "src": `${m_asset_path}/Time_ 00_30.svg`
                                        }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": ``,
                                            "h": ``,
                                            "x": 25,
                                            "y": 14,
                                            "e": mE,
                                            "src": `${m_asset_path}/bolt.svg`
                                        }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": ``,
                                            "h": ``,
                                            "x": 8,
                                            "y": 37,
                                            "e": mE,
                                            "src": `${m_asset_path}/bolt.svg`
                                        }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": ``,
                                            "h": ``,
                                            "x": 25,
                                            "y": 54,
                                            "e": mE,
                                            "src": `${m_asset_path}/bolt.svg`
                                        }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": ``,
                                            "h": ``,
                                            "x": 8,
                                            "y": 82,
                                            "e": mE,
                                            "src": `${m_asset_path}/bolt.svg`
                                        }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": `45vh`,
                                            "h": `10vh`,
                                            "x": 40,
                                            "y": 72,
                                            "e": mE,
                                            "src": `${m_asset_path}/Rectangle3.svg`
                                        }
                                        );

                                        // btn:-
                                        mArtBox_evnt.add_svg({
                                            "w": `28vh`,
                                            "h": `4vh`,
                                            "x": 44,
                                            "y": 75,
                                            "e": mE,
                                            "src": `${m_asset_path}/NextRound.svg`
                                        }, {
                                            "onClick": (v = {}) => {
                                                nextRoundBtn();
                                            }
                                        }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": ``,
                                            "h": ``,
                                            "x": 87,
                                            "y": 14,
                                            "e": mE,
                                            "src": `${m_asset_path}/bolt.svg`
                                        }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": ``,
                                            "h": ``,
                                            "x": 70,
                                            "y": 37,
                                            "e": mE,
                                            "src": `${m_asset_path}/bolt.svg`
                                        }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": ``,
                                            "h": ``,
                                            "x": 87,
                                            "y": 54,
                                            "e": mE,
                                            "src": `${m_asset_path}/bolt.svg`
                                        }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": ``,
                                            "h": ``,
                                            "x": 70,
                                            "y": 82,
                                            "e": mE,
                                            "src": `${m_asset_path}/bolt.svg`
                                        });

                                        let nextRoundBtn = () => {
                                            v.e.style.opacity = "0";
                                            v.e.remove();
                                            on_scr_end();
                                        }
                                    }
                                });

                                // on_scr_end..
                                let on_scr_end = () => {
                                    let timeline = anime.timeline();
                                    timeline.add({
                                        targets: mScr,
                                        opacity: 0,
                                        duration: 3000,
                                        easing: 'easeOutExpo',
                                        update: function (anim) {
                                            // mSendCB(`on_scr_end`, {});
                                            console.log(anim.progress);

                                            if (anim.progress > 0) {
                                                anime.remove(mScr);
                                                mScr.remove();
                                                //send cb..
                                                mSendCB(`on_scr_end`, {});
                                            }
                                        },
                                    });
                                };

                            };
                            mSet(mScr);
                        }
                    },

                    // Screen-7 ------------------------------
                    {
                        "name": "Screen 7",
                        "key": "scr_7",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            //--reset--// [START]
                            v["e"].innerHTML = ``; //reset

                            //mSendCB..
                            let mSendCB = (cb_name, p = {}) => {
                                if (v["value"].hasOwnProperty("cb")) {
                                    if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                                        v["value"]["cb"][cb_name](p);
                                    }
                                }
                            };


                            //set..
                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            mScr.style.height = `100vh`;
                            mScr.style.width = `100%`;
                            mScr.style.overflow = `hidden`;


                            //set..
                            let mSet = (mE = document.body) => {
                                    // Ready-set-go Loading:--

                                    //set..[Svg]..  
                                    mArtBox_evnt.add_svg({
                                        "w": `100%`,
                                        "h": `95vh`,
                                        "e": mE,
                                        "src": `${m_asset_path}/8.12.svg`
                                    }, {
                                        "onLoad": (v = {}) => {
                                            mArtBox_evnt.add_svg({
                                                "w": `45vh`,
                                                "h": `45vh`,
                                                "x": 39,
                                                "y": 25,
                                                "e": mE,
                                                "src": `${m_asset_path}/circle.svg`
                                            },
                                                {
                                                    "onLoad": (v = {}) => {
                                                        let timeline = anime.timeline();
                                                        // timeline.add({
                                                        //     targets: v.e,
                                                        //     opacity: [1, 0],});
                                                        setTimeout(() => {
                                                            mArtBox_evnt.add_animation({
                                                                "e": v.e,
                                                                "type": "animate__zoomOut",
    
                                                            }),
                                                                timeline.add({
                                                                    targets: v.e,
                                                                    opacity: [1, 0],
                                                                });
                                                        }, 1000)
                                                    }
                                                }
                                            );
                                            mArtBox_evnt.add_svg({
                                                "w": `15vh`,
                                                "h": `8vh`,
                                                "x": 46.5,
                                                "y": 42.2,
                                                "e": mE,
                                                "src": `${m_asset_path}/GET.svg`
                                            },
                                                {
                                                    "onLoad": (v = {}) => {
                                                        let timeline = anime.timeline();
                                                        // timeline.add({
                                                        //     targets: v.e,
                                                        //     opacity: [1, 0],});
                                                        setTimeout(() => {
                                                            mArtBox_evnt.add_animation({
                                                                "e": v.e,
                                                                "type": "animate__zoomOut",
    
                                                            }),
                                                                timeline.add({
                                                                    targets: v.e,
                                                                    opacity: [1, 0],
                                                                });
                                                        }, 1000)
                                                    }
                                                }
                                            );
                                            mArtBox_evnt.add_svg({
                                                "w": `20vh`,
                                                "h": `20vh`,
                                                "x": 45.5, //45.5
                                                "y": 37.5, //37.5
                                                "e": mE,
                                                "src": `${m_asset_path}/smallBall.svg`
                                            },
                                                {
                                                    "onLoad": (v = {}) => {
                                                        let timeline = anime.timeline();
                                                        timeline.add({
                                                            targets: v.e,
                                                            opacity: [1, 0],
                                                        });
                                                        setTimeout(() => {
                                                            v.e.classList.add("animate__animated", "animate__bounceIn"),
                                                                v.e.style.setProperty('--animate-duration', '2s');
                                                            v.e.addEventListener('animationend', () => {
                                                                v.e.style.visibility = "hidden";
                                                            });
                                                        }, 1000)
                                                    }
                                                }
                                            );
                                            mArtBox_evnt.add_svg({
                                                "w": `2vh`,
                                                "h": `2vh`,
                                                "x": 52.5, //45.5
                                                "y": 40.5, //37.5
                                                "e": mE,
                                                "src": `${m_asset_path}/Ellipse3.svg`
                                            },
                                                {
                                                    "onLoad": (v = {}) => {
                                                        let timeline = anime.timeline();
                                                        timeline.add({
                                                            targets: v.e,
                                                            opacity: [1, 0],
                                                        });
                                                        setTimeout(() => {
                                                            v.e.classList.add("animate__animated", "animate__bounceIn"),
                                                                v.e.style.setProperty('--animate-duration', '2s');
                                                            v.e.addEventListener('animationend', () => {
                                                                v.e.style.visibility = "hidden";
                                                            });
                                                        }, 1000)
                                                    }
                                                }
                                            );
                                            mArtBox_evnt.add_svg({
                                                "w": `45vh`,
                                                "h": `45vh`,
                                                "x": 39,
                                                "y": 25,
                                                "e": mE,
                                                "src": `${m_asset_path}/circle.svg`
                                            },
                                                {
                                                    "onLoad": (v = {}) => {
                                                        let timeline = anime.timeline();
                                                        timeline.add({
                                                            targets: v.e,
                                                            opacity: [1, 0],
                                                        });
                                                        setTimeout(() => {
                                                            v.e.classList.add("animate__animated", "animate__bounceIn"),
                                                                v.e.style.setProperty('--animate-duration', '2s');
                                                            v.e.addEventListener('animationend', () => {
                                                                v.e.classList.add("animate__animated", "animate__zoomOut")
                                                            });
                                                        }, 2500)
                                                    }
                                                }
                                            );
                                            mArtBox_evnt.add_svg({
                                                "w": `15vh`,
                                                "h": `8vh`,
                                                "x": 46.5,
                                                "y": 42.2,
                                                "e": mE,
                                                "src": `${m_asset_path}/SET.svg`
                                            },
                                                {
                                                    "onLoad": (v = {}) => {
                                                        let timeline = anime.timeline();
                                                        timeline.add({
                                                            targets: v.e,
                                                            opacity: [0],
                                                        });
                                                        setTimeout(() => {
                                                            v.e.classList.add("animate__animated", "animate__bounceIn"),
                                                                v.e.style.setProperty('--animate-duration', '2s');
                                                            v.e.addEventListener('animationend', () => {
                                                                v.e.classList.add("animate__animated", "animate__zoomOut")
                                                            });
                                                        }, 2500)
                                                    }
                                                }
                                            );
                                            mArtBox_evnt.add_svg({
                                                "w": `20vh`,
                                                "h": `20vh`,
                                                "x": 45.5, //45.5
                                                "y": 37.5, //37.5
                                                "e": mE,
                                                "src": `${m_asset_path}/smallBall.svg`
                                            },
                                                {
                                                    "onLoad": (v = {}) => {
                                                        let timeline = anime.timeline();
                                                        timeline.add({
                                                            targets: v.e,
                                                            opacity: [1, 0],
                                                        });
                                                        setTimeout(() => {
                                                            v.e.classList.add("animate__animated", "animate__bounceIn"),
                                                                v.e.style.setProperty('--animate-duration', '2s');
                                                            v.e.addEventListener('animationend', () => {
                                                                v.e.style.visibility = "hidden";
                                                            });
                                                        }, 4000)
                                                    }
                                                }
                                            );
                                            mArtBox_evnt.add_svg({
                                                "w": `2vh`,
                                                "h": `2vh`,
                                                "x": 52.5, //45.5
                                                "y": 40.5, //37.5
                                                "e": mE,
                                                "src": `${m_asset_path}/Ellipse3.svg`
                                            },
                                                {
                                                    "onLoad": (v = {}) => {
                                                        let timeline = anime.timeline();
                                                        timeline.add({
                                                            targets: v.e,
                                                            opacity: [1, 0],
                                                        });
                                                        setTimeout(() => {
                                                            v.e.classList.add("animate__animated", "animate__bounceIn"),
                                                                v.e.style.setProperty('--animate-duration', '2s');
                                                            v.e.addEventListener('animationend', () => {
                                                                v.e.style.visibility = "hidden";
                                                            });
                                                        }, 4000)
                                                    }
                                                }
                                            );
                                            mArtBox_evnt.add_svg({
                                                "w": `45vh`,
                                                "h": `45vh`,
                                                "x": 39,
                                                "y": 25,
                                                "e": mE,
                                                "src": `${m_asset_path}/circle.svg`
                                            },
                                                {
                                                    "onLoad": (v = {}) => {
                                                        let timeline = anime.timeline();
                                                        timeline.add({
                                                            targets: v.e,
                                                            opacity: [1, 0],
                                                        });
                                                        setTimeout(() => {
                                                            v.e.classList.add("animate__animated", "animate__bounceIn"),
                                                                v.e.style.setProperty('--animate-duration', '2s');
                                                            v.e.addEventListener('animationend', () => {
                                                                v.e.classList.add("animate__animated", "animate__zoomOut")
                                                            });
                                                        }, 5500)
                                                    }
                                                }
                                            );
                                            mArtBox_evnt.add_svg({
                                                "w": `15vh`,
                                                "h": `8vh`,
                                                "x": 46.5,
                                                "y": 42.2,
                                                "e": mE,
                                                "src": `${m_asset_path}/GO.svg`
                                            },
                                                {
                                                    "onLoad": (v = {}) => {
                                                        let timeline = anime.timeline();
                                                        timeline.add({
                                                            targets: v.e,
                                                            opacity: [0],
                                                        });
                                                        setTimeout(() => {
                                                            v.e.classList.add("animate__animated", "animate__bounceIn"),
                                                                v.e.style.setProperty('--animate-duration', '2s');
                                                            v.e.addEventListener('animationend', () => {
                                                                v.e.classList.add("animate__animated", "animate__zoomOut")
                                                            });
                                                        }, 5500)
    
                                                    },
    
                                                }
                                            );
                                            setTimeout(() => {
                                                v.e.remove();
                                            }, 7500);
                                        }
                                    });
    
                                    // Text-Loading:--
                                    setTimeout(() => {
                                        //set..[Svg]..  
                                        mArtBox_evnt.add_svg({
                                            "w": `100%`,
                                            "h": `95vh`,
                                            "e": mE,
                                            "src": `${m_asset_path}/8.12.svg`
                                        }, {
                                            "onLoad": (v = {}) => {
    
                                                //set..[Svg].. recommended
                                                mArtBox_evnt.add_svg({
                                                    "w": `18vw`,
                                                    "h": `8vh`,
                                                    "x": 10,
                                                    "y": 10,
                                                    "e": mE,
                                                    "src": `${m_asset_path}/recommend.svg`
                                                }
                                                    , {
                                                        "onLoad": (v = {}) => {
    
                                                            setTimeout(() => {
                                                                v.e.classList.add('animate__animated', 'animate__zoomOut');
                                                                v.e.style.setProperty('--animate-duration', '2s');
                                                            }, 1000);
                                                        }
                                                    }
                                                );
    
                                                //set..[Svg].. online
                                                mArtBox_evnt.add_svg({
                                                    "w": `14vw`,
                                                    "h": `8vh`,
                                                    "x": 75,
                                                    "y": 10,
                                                    "e": mE,
                                                    "src": `${m_asset_path}/online.svg`
                                                }
    
                                                    , {
                                                        "onLoad": (v = {}) => {
    
                                                            v.e.style.visibility = "hidden";
                                                            setTimeout(() => {
                                                                v.e.style.visibility = "visible";
                                                                v.e.classList.add('animate__animated', 'animate__zoomIn');
                                                                v.e.style.setProperty('--animate-duration', '2s');
                                                                v.e.addEventListener('animationend', () => {
                                                                    v.e.classList.add('animate__animated', 'animate__zoomOut');
                                                                });
                                                            }, 2000);
                                                        }
                                                    }
                                                );
    
                                                //set..[Svg].. grading
                                                mArtBox_evnt.add_svg({
                                                    "w": `14vw`,
                                                    "h": `8vh`,
                                                    "x": 40,
                                                    "y": 40,
                                                    "e": mE,
                                                    "src": `${m_asset_path}/grading.svg`
                                                }
    
                                                    , {
                                                        "onLoad": (v = {}) => {
                                                            v.e.style.visibility = "hidden";
                                                            setTimeout(() => {
                                                                v.e.style.visibility = "visible";
                                                                v.e.classList.add('animate__animated', 'animate__zoomIn');
                                                                v.e.style.setProperty('--animate-duration', '2s');
                                                                v.e.addEventListener('animationend', () => {
                                                                    v.e.classList.add('animate__animated', 'animate__zoomOut');
                                                                });
                                                            }, 4000);
                                                        }
                                                    }
                                                );
    
                                                //set..[Svg].. multiple
                                                mArtBox_evnt.add_svg({
                                                    "w": `14vw`,
                                                    "h": `8vh`,
                                                    "x": 10,
                                                    "y": 80,
                                                    "e": mE,
                                                    "src": `${m_asset_path}/multiple.svg`
                                                }
    
                                                    , {
                                                        "onLoad": (v = {}) => {
                                                            v.e.style.visibility = "hidden";
                                                            setTimeout(() => {
                                                                v.e.style.visibility = "visible";
                                                                v.e.classList.add('animate__animated', 'animate__zoomIn');
                                                                v.e.style.setProperty('--animate-duration', '2s');
                                                                v.e.addEventListener('animationend', () => {
                                                                    v.e.classList.add('animate__animated', 'animate__zoomOut');
                                                                });
                                                            }, 6000);
                                                        }
                                                    }
    
                                                );
    
    
                                                //set..[Svg].. save
                                                mArtBox_evnt.add_svg({
                                                    "w": `8vw`,
                                                    "h": `4vh`,
                                                    "x": 80,
                                                    "y": 80,
                                                    "e": mE,
                                                    "src": `${m_asset_path}/save.svg`
                                                }
    
                                                    , {
                                                        "onLoad": (v = {}) => {
                                                            v.e.style.visibility = "hidden";
                                                            setTimeout(() => {
                                                                v.e.style.visibility = "visible";
                                                                v.e.classList.add('animate__animated', 'animate__zoomIn');
                                                                v.e.style.setProperty('--animate-duration', '2s');
                                                                v.e.addEventListener('animationend', () => {
                                                                    v.e.classList.add('animate__animated', 'animate__zoomOut');
                                                                });
                                                            }, 8000);
                                                        }
                                                    }
    
                                                );
    
                                                setTimeout(() => {
                                                    v.e.remove()
                                                    on_scr_end();
                                                }, 10000);
                                            }
                                        });
    
                                    }, 8000);
    
                                    // on_scr_end..
                                    let on_scr_end = () => {
                                        let timeline = anime.timeline();
                                        timeline.add({
                                            targets: mScr,
                                            opacity: 0,
                                            duration: 3000,
                                            easing: 'easeOutExpo',
                                            update: function (anim) {
                                                // mSendCB(`on_scr_end`, {});
                                                console.log(anim.progress);
    
                                                if (anim.progress > 0) {
                                                    anime.remove(mScr);
                                                    mScr.remove();
                                                    //send cb..
                                                    mSendCB(`on_scr_end`, {});
                                                }
                                            },
                                        });
                                    };

                            };
                            mSet(mScr);
                        }
                    },

                    // Screen-7 ------------------------------
                    {
                        "name": "Screen 8",
                        "key": "scr_8",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            //--reset--// [START]
                            v["e"].innerHTML = ``; //reset

                            //mSendCB..
                            let mSendCB = (cb_name, p = {}) => {
                                if (v["value"].hasOwnProperty("cb")) {
                                    if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                                        v["value"]["cb"][cb_name](p);
                                    }
                                }
                            };


                            //set..
                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            mScr.style.height = `100vh`;
                            mScr.style.width = `100%`;
                            mScr.style.overflow = `hidden`;


                            //set..
                            let mSet = (mE = document.body) => {
                                // Quiz Tree:--
                                // Question div:-
                                mArtBox_evnt.add_svg({
                                    "w": `80vw`,
                                    "h": `18vh`,
                                    // "x": 30,  //-->
                                    // "y": 30,  //--> position absolute makes error here//
                                    "e": mE,
                                    "src": `${m_asset_path}/question_bg.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        v.e.style.opacity = "0";
                                        v.e.style.height = `cal(100vh - 8vh)`;
                                        v.e.style.display = `flex`;
                                        v.e.style.justifyContent = `center`;
                                        v.e.style.marginTop = `8vh`;
                                        v.e.style.overflow = `hidden`;

                                        // Inner text - ques:--
                                        let ve = v.e;
                                        let ques = document.createElement('div');
                                        ques.classList = "question";
                                        ques.innerHTML = ` <h1 class="ques-h1">Should automatically starts or not?</h1> `

                                        ques.style.width = "80vw";
                                        ques.style.height = "15vh";
                                        ques.style.marginInline = "2vw";
                                        ques.style.marginBottom = "10px";
                                        ques.style.position = "absolute";
                                        ques.style.top = "9vh";
                                        ques.style.left = "7%";
                                        ques.style.textAlign = "center";
                                        ve.appendChild(ques);

                                        setTimeout(() => {
                                            ques.style.top = "0%";
                                            anime({
                                                opacity: 1,
                                                targets: v.e,
                                                translateY: [-300, 0],
                                                duration: 1000,
                                                direction: 'alternate',
                                                easing: 'easeInQuad',
                                                loop: false
                                            });
                                        }, 0);


                                        // Number circles -bottom:--
                                        mArtBox_evnt.add_svg({
                                            "w": `20vw`,
                                            "h": `9vh`,
                                            // "x": 40,  //-->
                                            // "y": 60,  //--> position absolute makes error here//
                                            "e": mE,
                                            "src": `${m_asset_path}/number_circles.svg`
                                        }, {
                                            "onLoad": (v = {}) => {
                                                v.e.style.opacity = "0";
                                                v.e.style.display = 'flex';
                                                v.e.style.justifyContent = 'center';
                                                v.e.style.alignItems = 'end';
                                                v.e.style.overflow = 'hidden';
                                                v.e.style.position = 'fixed';
                                                v.e.style.top = '85%';
                                                v.e.style.left = '40%';

                                                anime({
                                                    opacity: 1,
                                                    targets: v.e,
                                                    translateY: [300, 0],
                                                    duration: 1000,
                                                    direction: 'alternate',
                                                    easing: 'easeInQuad',
                                                    loop: false
                                                });
                                            }
                                        });
                                    },

                                });

                                // Question Marks & Options div:-
                                mArtBox_evnt.add_svg({
                                    "w": `12vw`,
                                    "h": `19vh`,
                                    "x": 44,  //-->
                                    "y": 50,  //--> position absolute makes error here//
                                    "e": mE,
                                    "src": `${m_asset_path}/question_mark.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        // console.log(v.e);
                                        v.e.style.height = `100vh`;
                                        v.e.style.opacity = `0`;
                                        setTimeout(() => {
                                            anime({
                                                opacity: 1,
                                                targets: v.e,
                                                scale: [0, 1],
                                                duration: 500,
                                                direction: 'alternate',
                                                easing: 'easeInQuad',
                                                loop: false
                                            });
                                        }, 1000);

                                        let ve = v.e;
                                        let lineCont = document.createElement('div');
                                        lineCont.classList = "line-cont";
                                        lineCont.style.position = "absolute";
                                        lineCont.style.top = "0";
                                        lineCont.style.left = "0";
                                        lineCont.style.zIndex = "100";
                                        ve.appendChild(lineCont);

                                        let innerLineCont = document.createElement('div');
                                        innerLineCont.classList = "inner-line-cont";
                                        // innerLineCont.style.position = "relative";

                                        innerLineCont.style.marginTop = "10vh";
                                        innerLineCont.style.height = "90vh";
                                        innerLineCont.style.width = "100vw";
                                        lineCont.appendChild(innerLineCont);

                                        // Option 1:-
                                        setTimeout(() => {
                                            let line1 = document.createElement('div');
                                            line1.classList = "line1";
                                            line1.style.backgroundColor = "#8D8282";
                                            line1.style.height = "1vh";
                                            line1.style.width = "1vw";
                                            line1.style.position = "absolute";
                                            line1.style.top = "-5%";
                                            line1.style.left = "10%";
                                            line1.style.zIndex = "-1";
                                            // line1.style.transform = "rotate(-30deg)";
                                            innerLineCont.appendChild(line1);

                                            anime({
                                                targets: line1,
                                                width: '23%',
                                                rotate: -25,
                                                easing: 'easeInOutQuad',
                                                direction: 'alternate',
                                                duration: 500,
                                                loop: false
                                            });

                                            mArtBox_evnt.add_svg({
                                                "w": `14vw`,
                                                "h": `8vh`,
                                                "x": 74,  //-->
                                                "y": 6,  //--> position absolute makes error here//
                                                "e": mE,
                                                "src": `${m_asset_path}/option_bg.svg`
                                            }, {
                                                "onLoad": (v = {}) => {
                                                    v.e.style.cursor = "pointer";
                                                    v.e.style.width = "fit-content"
                                                    v.e.style.position = "relative";
                                                    v.e.style.zIndex = "100";

                                                    // Inner text - option:--
                                                    let ve = v.e;
                                                    let option1 = document.createElement('div');
                                                    option1.classList = "option1";
                                                    option1.innerHTML = ` <h1 class="option1-h1">What</h1> `
                                                    option1.style.position = "absolute";
                                                    option1.style.top = "-14%";
                                                    option1.style.left = "20%";
                                                    option1.style.textAlign = "center";
                                                    ve.appendChild(option1);
                                                },

                                                "onClick": (v = {}) => { alert("Option 1") }
                                            });
                                        }, 3000);

                                        // Option 2:-
                                        setTimeout(() => {
                                            let line2 = document.createElement('div');
                                            line2.classList = "line2";
                                            line2.style.backgroundColor = "#8D8282";
                                            line2.style.height = "1vh";
                                            line2.style.width = "1vw";
                                            line2.style.position = "absolute";
                                            line2.style.top = "18%";
                                            line2.style.right = "98%";
                                            line2.style.zIndex = "100";
                                            // line2.style.transform = "rotate(-30deg)";
                                            innerLineCont.appendChild(line2);

                                            anime({
                                                targets: line2,
                                                width: '24%',
                                                rotate: -20,
                                                easing: 'easeInOutQuad',
                                                direction: 'alternate',
                                                duration: 500,
                                                loop: false
                                            });

                                            mArtBox_evnt.add_svg({
                                                "w": `14vw`,
                                                "h": `8vh`,
                                                "x": 10,  //-->
                                                "y": 38,  //--> position absolute makes error here//
                                                "e": mE,
                                                "src": `${m_asset_path}/option_bg.svg`
                                            }, {
                                                "onLoad": (v = {}) => {
                                                    v.e.style.position = "relative";
                                                    v.e.style.width = "fit-content"
                                                    v.e.style.cursor = "pointer";
                                                    v.e.style.zIndex = "100";

                                                    // Inner text - option:--
                                                    let ve = v.e;
                                                    let option2 = document.createElement('div');
                                                    option2.classList = "option2";
                                                    option2.innerHTML = ` <h1 class="option2-h1">What</h1> `
                                                    option2.style.position = "absolute";
                                                    option2.style.top = "-14%";
                                                    option2.style.left = "20%";
                                                    option2.style.textAlign = "center";
                                                    ve.appendChild(option2);
                                                },

                                                "onClick": (v = {}) => { alert(" 2") }
                                            });
                                        }, 4000);

                                        // Option 3:-
                                        setTimeout(() => {
                                            let line3 = document.createElement('div');
                                            line3.classList = "line3";
                                            line3.style.backgroundColor = "#8D8282";
                                            line3.style.height = "1vh";
                                            line3.style.width = "1vw";
                                            line3.style.position = "absolute";
                                            line3.style.top = "18%";
                                            line3.style.left = "10%";
                                            line3.style.zIndex = "-1";
                                            // line3.style.transform = "rotate(-30deg)";
                                            innerLineCont.appendChild(line3);

                                            anime({
                                                targets: line3,
                                                width: '23%',
                                                easing: 'easeInOutQuad',
                                                direction: 'alternate',
                                                rotate: 17,
                                                duration: 500,
                                                loop: false
                                            });
                                            mArtBox_evnt.add_svg({
                                                "w": `14vw`,
                                                "h": `8vh`,
                                                "x": 75,  //-->
                                                "y": 27,  //--> position absolute makes error here//
                                                "e": mE,
                                                "src": `${m_asset_path}/option_bg.svg`
                                            }, {
                                                "onLoad": (v = {}) => {
                                                    v.e.style.cursor = "pointer";
                                                    v.e.style.width = "fit-content"
                                                    v.e.style.position = "relative";
                                                    v.e.style.zIndex = "100";

                                                    // Inner text - option:--
                                                    let ve = v.e;
                                                    let option3 = document.createElement('div');
                                                    option3.classList = "option3";
                                                    option3.innerHTML = ` <h1 class="option3-h1">What</h1> `
                                                    option3.style.position = "absolute";
                                                    option3.style.top = "-14%";
                                                    option3.style.left = "20%";
                                                    option3.style.textAlign = "center";
                                                    ve.appendChild(option3);
                                                },

                                                "onClick": (v = {}) => { alert(" 3") }
                                            });
                                        }, 5000);

                                        // Option 4:-
                                        setTimeout(() => {
                                            let line4 = document.createElement('div');
                                            line4.classList = "line4";
                                            line4.style.backgroundColor = "#8D8282";
                                            line4.style.height = "1vh";
                                            line4.style.width = "1vw";
                                            line4.style.position = "absolute";
                                            line4.style.top = "-4%";
                                            line4.style.right = "98%";
                                            line4.style.zIndex = "100";
                                            // line4.style.transform = "rotate(-30deg)";
                                            innerLineCont.appendChild(line4);

                                            anime({
                                                targets: line4,
                                                width: '24%',
                                                easing: 'easeInOutQuad',
                                                direction: 'alternate',
                                                rotate: 21,
                                                duration: 500,
                                                loop: false
                                            });

                                            mArtBox_evnt.add_svg({
                                                "w": `14vw`,
                                                "h": `8vh`,
                                                "x": 10,  //-->
                                                "y": -18.5,  //--> position absolute makes error here//
                                                "e": mE,
                                                "src": `${m_asset_path}/option_bg.svg`
                                            }, {
                                                "onLoad": (v = {}) => {
                                                    v.e.style.cursor = "pointer";
                                                    v.e.style.width = "fit-content"
                                                    v.e.style.position = "relative";
                                                    v.e.style.zIndex = "100";

                                                    // Inner text - option:--
                                                    let ve = v.e;
                                                    let option4 = document.createElement('div');
                                                    option4.classList = "option4";
                                                    option4.innerHTML = ` <h1 class="option4-h1">What</h1> `
                                                    option4.style.position = "absolute";
                                                    option4.style.top = "-14%";
                                                    option4.style.left = "20%";
                                                    option4.style.textAlign = "center";
                                                    ve.appendChild(option4);
                                                },

                                                "onClick": (v = {}) => { alert("Option 4") }
                                            });
                                        }, 6000);

                                        setTimeout(() => {
                                            on_scr_end();
                                        }, 7000);
                                    },

                                });

                                // on_scr_end..
                                let on_scr_end = () => {
                                    let timeline = anime.timeline();
                                    timeline.add({
                                        targets: mScr,
                                        opacity: 0,
                                        duration: 3000,
                                        easing: 'easeOutExpo',
                                        update: function (anim) {
                                            // mSendCB(`on_scr_end`, {});
                                            console.log(anim.progress);

                                            if (anim.progress > 0) {
                                                anime.remove(mScr);
                                                mScr.remove();
                                                //send cb..
                                                mSendCB(`on_scr_end`, {});
                                            }
                                        },
                                    });
                                };
                            };
                            mSet(mScr);
                        }
                    },

                    // Screen-9 ------------------------------
                    {
                        "name": "Screen 9",
                        "key": "scr_9",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            //--reset--// [START]
                            v["e"].innerHTML = ``; //reset

                            //mSendCB..
                            let mSendCB = (cb_name, p = {}) => {
                                if (v["value"].hasOwnProperty("cb")) {
                                    if (v["value"]["cb"].hasOwnProperty(cb_name)) {
                                        v["value"]["cb"][cb_name](p);
                                    }
                                }
                            };


                            //set..
                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            mScr.style.height = `100%`;
                            mScr.style.width = `100%`;
                            mScr.style.overflow = `hidden`;


                            //set..
                            let mSet = (mE = document.body) => {
                                // Score and Round Play:--
                                //set..[Svg]..  
                                mArtBox_evnt.add_svg({
                                    "w": `100%`,
                                    "h": `95vh`,
                                    "e": mE,
                                    "src": `${m_asset_path}/8.12.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        // //set..[Svg].. recommended
                                        mArtBox_evnt.add_svg({
                                            "w": `45vh`,
                                            "h": `50vh`,
                                            "x": 40,
                                            "y": 10,
                                            "e": mE,
                                            "src": `${m_asset_path}/Rectangle9.svg`
                                        }
                                            , {
                                                "onLoad": (v = {}) => {
                                                    //left to right animation
                                                    //anim

                                                    // setTimeout(() => {


                                                    //     let timeline = anime.timeline();
                                                    //     timeline.add({
                                                    //         targets: v.e,
                                                    //         opacity: [1, 0],

                                                    //         duration: 500,
                                                    //         easing: 'easeOutCirc',

                                                    //         // update: function(anim) { 
                                                    //         //   //console.log(anim.progress); 
                                                    //         // },
                                                    //         // complete: function(anim) {
                                                    //         //   anime.remove(v.e);
                                                    //         // }
                                                    //     }
                                                    //     );
                                                    // }, 1000);

                                                }
                                            }
                                        );

                                        // //set..[Svg].. online
                                        mArtBox_evnt.add_svg({
                                            "w": `30vh`,
                                            "h": `5vh`,
                                            "x": 43.8,
                                            "y": 14,
                                            "e": mE,
                                            "src": `${m_asset_path}/Congratulations!.svg`
                                        }

                                            , {
                                                //     "onLoad": (v = {}) => {

                                                //         let timeline = anime.timeline();
                                                //         timeline.add({
                                                //             targets: v.e,
                                                //             opacity: [1, 0],});

                                                //         setTimeout(() => {

                                                //             timeline.add({
                                                //               targets: v.e,
                                                //               opacity: [1, 0],

                                                //               duration: 500,
                                                //               easing: 'easeOutCirc',

                                                //               // update: function(anim) { 
                                                //               //   //console.log(anim.progress); 
                                                //               // },
                                                //               // complete: function(anim) {
                                                //               //   anime.remove(v.e);
                                                //               // }
                                                //             }
                                                //           );
                                                //       }, 1000);

                                                //               }
                                            }
                                        );


                                        // //set..[Svg].. grading
                                        mArtBox_evnt.add_svg({
                                            "w": `15vh`,
                                            "h": `2vh`,
                                            "x": 47.5,
                                            "y": 20,
                                            "e": mE,
                                            "src": `${m_asset_path}/RoundCleared.svg`
                                        }

                                            , {
                                                // "onLoad": (v = {}) => {
                                                //     //left to right animation

                                                //     let timeline = anime.timeline();
                                                //     timeline.add({
                                                //         target:v.e,
                                                //         opacity:[0]
                                                //     })
                                                //     setTimeout(() => {

                                                //         timeline.add({
                                                //             targets: v.e,
                                                //             opacity: [1, 0],

                                                //             duration: 500,
                                                //             easing: 'easeOutCirc',

                                                //             // update: function(anim) { 
                                                //             //   //console.log(anim.progress); 
                                                //             // },
                                                //             // complete: function(anim) {
                                                //             //   anime.remove(v.e);
                                                //             // }
                                                //         }
                                                //         );
                                                //     }, 1000);

                                                // }
                                            }
                                        );

                                        mArtBox_evnt.add_svg({
                                            "w": `55vh`,
                                            "h": `12vh`,
                                            "x": 37.5,
                                            "y": 26,
                                            "e": mE,
                                            "src": `${m_asset_path}/Vector74.svg`
                                        }

                                            , {
                                                // "onLoad": (v = {}) => {
                                                //     //left to right animation

                                                //     let timeline = anime.timeline();
                                                //     timeline.add({
                                                //         target:v.e,
                                                //         opacity:[0]
                                                //     })
                                                //     setTimeout(() => {

                                                //         timeline.add({
                                                //             targets: v.e,
                                                //             opacity: [1, 0],

                                                //             duration: 500,
                                                //             easing: 'easeOutCirc',

                                                //             // update: function(anim) { 
                                                //             //   //console.log(anim.progress); 
                                                //             // },
                                                //             // complete: function(anim) {
                                                //             //   anime.remove(v.e);
                                                //             // }
                                                //         }
                                                //         );
                                                //     }, 1000);

                                                // }
                                            }
                                        );

                                        mArtBox_evnt.add_svg({
                                            "w": `8vh`,
                                            "h": `8vh`,
                                            "x": 45,
                                            "y": 27.2,
                                            "e": mE,
                                            "src": `${m_asset_path}/Star3.svg`
                                        }

                                            , {
                                                // "onLoad": (v = {}) => {
                                                //     //left to right animation

                                                //     let timeline = anime.timeline();
                                                //     timeline.add({
                                                //         target:v.e,
                                                //         opacity:[0]
                                                //     })
                                                //     setTimeout(() => {

                                                //         timeline.add({
                                                //             targets: v.e,
                                                //             opacity: [1, 0],

                                                //             duration: 500,
                                                //             easing: 'easeOutCirc',

                                                //             // update: function(anim) { 
                                                //             //   //console.log(anim.progress); 
                                                //             // },
                                                //             // complete: function(anim) {
                                                //             //   anime.remove(v.e);
                                                //             // }
                                                //         }
                                                //         );
                                                //     }, 1000);

                                                // }
                                            }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": `8vh`,
                                            "h": `8vh`,
                                            "x": 49.5,
                                            "y": 26.2,
                                            "e": mE,
                                            "src": `${m_asset_path}/Star1.svg`
                                        }

                                            , {
                                                // "onLoad": (v = {}) => {
                                                //     //left to right animation

                                                //     let timeline = anime.timeline();
                                                //     timeline.add({
                                                //         target:v.e,
                                                //         opacity:[0]
                                                //     })
                                                //     setTimeout(() => {

                                                //         timeline.add({
                                                //             targets: v.e,
                                                //             opacity: [1, 0],

                                                //             duration: 500,
                                                //             easing: 'easeOutCirc',

                                                //             // update: function(anim) { 
                                                //             //   //console.log(anim.progress); 
                                                //             // },
                                                //             // complete: function(anim) {
                                                //             //   anime.remove(v.e);
                                                //             // }
                                                //         }
                                                //         );
                                                //     }, 1000);

                                                // }
                                            }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": `8vh`,
                                            "h": `8vh`,
                                            "x": 54,
                                            "y": 27.1,
                                            "e": mE,
                                            "src": `${m_asset_path}/Star2.svg`
                                        }

                                            , {
                                                // "onLoad": (v = {}) => {
                                                //     //left to right animation

                                                //     let timeline = anime.timeline();
                                                //     timeline.add({
                                                //         target:v.e,
                                                //         opacity:[0]
                                                //     })
                                                //     setTimeout(() => {

                                                //         timeline.add({
                                                //             targets: v.e,
                                                //             opacity: [1, 0],

                                                //             duration: 500,
                                                //             easing: 'easeOutCirc',

                                                //             // update: function(anim) { 
                                                //             //   //console.log(anim.progress); 
                                                //             // },
                                                //             // complete: function(anim) {
                                                //             //   anime.remove(v.e);
                                                //             // }
                                                //         }
                                                //         );
                                                //     }, 1000);

                                                // }
                                            }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": `15vh`,
                                            "h": `5vh`,
                                            "x": 47,
                                            "y": 44,
                                            "e": mE,
                                            "src": `${m_asset_path}/Score_ 49.svg`
                                        }

                                            , {
                                                // "onLoad": (v = {}) => {
                                                //     //left to right animation

                                                //     let timeline = anime.timeline();
                                                //     timeline.add({
                                                //         target:v.e,
                                                //         opacity:[0]
                                                //     })
                                                //     setTimeout(() => {

                                                //         timeline.add({
                                                //             targets: v.e,
                                                //             opacity: [1, 0],

                                                //             duration: 500,
                                                //             easing: 'easeOutCirc',

                                                //             // update: function(anim) { 
                                                //             //   //console.log(anim.progress); 
                                                //             // },
                                                //             // complete: function(anim) {
                                                //             //   anime.remove(v.e);
                                                //             // }
                                                //         }
                                                //         );
                                                //     }, 1000);

                                                // }
                                            }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": `15vh`,
                                            "h": `3vh`,
                                            "x": 47,
                                            "y": 53,
                                            "e": mE,
                                            "src": `${m_asset_path}/Time_ 00_30.svg`
                                        }

                                            , {
                                                // "onLoad": (v = {}) => {
                                                //     //left to right animation

                                                //     let timeline = anime.timeline();
                                                //     timeline.add({
                                                //         target:v.e,
                                                //         opacity:[0]
                                                //     })
                                                //     setTimeout(() => {

                                                //         timeline.add({
                                                //             targets: v.e,
                                                //             opacity: [1, 0],

                                                //             duration: 500,
                                                //             easing: 'easeOutCirc',

                                                //             // update: function(anim) { 
                                                //             //   //console.log(anim.progress); 
                                                //             // },
                                                //             // complete: function(anim) {
                                                //             //   anime.remove(v.e);
                                                //             // }
                                                //         }
                                                //         );
                                                //     }, 1000);

                                                // }
                                            }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": ``,
                                            "h": ``,
                                            "x": 25,
                                            "y": 10,
                                            "e": mE,
                                            "src": `${m_asset_path}/celebration.svg`
                                        }

                                            , {
                                                // "onLoad": (v = {}) => {
                                                //     //left to right animation

                                                //     let timeline = anime.timeline();
                                                //     timeline.add({
                                                //         target:v.e,
                                                //         opacity:[0]
                                                //     })
                                                //     setTimeout(() => {

                                                //         timeline.add({
                                                //             targets: v.e,
                                                //             opacity: [1, 0],

                                                //             duration: 500,
                                                //             easing: 'easeOutCirc',

                                                //             // update: function(anim) { 
                                                //             //   //console.log(anim.progress); 
                                                //             // },
                                                //             // complete: function(anim) {
                                                //             //   anime.remove(v.e);
                                                //             // }
                                                //         }
                                                //         );
                                                //     }, 1000);

                                                // }
                                            }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": ``,
                                            "h": ``,
                                            "x": 8,
                                            "y": 25,
                                            "e": mE,
                                            "src": `${m_asset_path}/celebration.svg`
                                        }

                                            , {
                                                // "onLoad": (v = {}) => {
                                                //     //left to right animation

                                                //     let timeline = anime.timeline();
                                                //     timeline.add({
                                                //         target:v.e,
                                                //         opacity:[0]
                                                //     })
                                                //     setTimeout(() => {

                                                //         timeline.add({
                                                //             targets: v.e,
                                                //             opacity: [1, 0],

                                                //             duration: 500,
                                                //             easing: 'easeOutCirc',

                                                //             // update: function(anim) { 
                                                //             //   //console.log(anim.progress); 
                                                //             // },
                                                //             // complete: function(anim) {
                                                //             //   anime.remove(v.e);
                                                //             // }
                                                //         }
                                                //         );
                                                //     }, 1000);

                                                // }
                                            }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": ``,
                                            "h": ``,
                                            "x": 25,
                                            "y": 40,
                                            "e": mE,
                                            "src": `${m_asset_path}/celebration.svg`
                                        }

                                            , {
                                                // "onLoad": (v = {}) => {
                                                //     //left to right animation

                                                //     let timeline = anime.timeline();
                                                //     timeline.add({
                                                //         target:v.e,
                                                //         opacity:[0]
                                                //     })
                                                //     setTimeout(() => {

                                                //         timeline.add({
                                                //             targets: v.e,
                                                //             opacity: [1, 0],

                                                //             duration: 500,
                                                //             easing: 'easeOutCirc',

                                                //             // update: function(anim) { 
                                                //             //   //console.log(anim.progress); 
                                                //             // },
                                                //             // complete: function(anim) {
                                                //             //   anime.remove(v.e);
                                                //             // }
                                                //         }
                                                //         );
                                                //     }, 1000);

                                                // }
                                            }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": ``,
                                            "h": ``,
                                            "x": 8,
                                            "y": 55,
                                            "e": mE,
                                            "src": `${m_asset_path}/celebration.svg`
                                        }

                                            , {
                                                // "onLoad": (v = {}) => {
                                                //     //left to right animation

                                                //     let timeline = anime.timeline();
                                                //     timeline.add({
                                                //         target:v.e,
                                                //         opacity:[0]
                                                //     })
                                                //     setTimeout(() => {

                                                //         timeline.add({
                                                //             targets: v.e,
                                                //             opacity: [1, 0],

                                                //             duration: 500,
                                                //             easing: 'easeOutCirc',

                                                //             // update: function(anim) { 
                                                //             //   //console.log(anim.progress); 
                                                //             // },
                                                //             // complete: function(anim) {
                                                //             //   anime.remove(v.e);
                                                //             // }
                                                //         }
                                                //         );
                                                //     }, 1000);

                                                // }
                                            }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": `45vh`,
                                            "h": `10vh`,
                                            "x": 52,
                                            "y": 72,
                                            "e": mE,
                                            "src": `${m_asset_path}/Rectangle3.svg`
                                        }

                                            , {
                                                // "onLoad": (v = {}) => {
                                                //     //left to right animation

                                                //     let timeline = anime.timeline();
                                                //     timeline.add({
                                                //         target:v.e,
                                                //         opacity:[0]
                                                //     })
                                                //     setTimeout(() => {

                                                //         timeline.add({
                                                //             targets: v.e,
                                                //             opacity: [1, 0],

                                                //             duration: 500,
                                                //             easing: 'easeOutCirc',

                                                //             // update: function(anim) { 
                                                //             //   //console.log(anim.progress); 
                                                //             // },
                                                //             // complete: function(anim) {
                                                //             //   anime.remove(v.e);
                                                //             // }
                                                //         }
                                                //         );
                                                //     }, 1000);

                                                // }
                                            }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": `45vh`,
                                            "h": `10vh`,
                                            "x": 27,
                                            "y": 72,
                                            "e": mE,
                                            "src": `${m_asset_path}/Rectangle2.svg`
                                        }

                                            , {
                                                // "onLoad": (v = {}) => {
                                                //     //left to right animation

                                                //     let timeline = anime.timeline();
                                                //     timeline.add({
                                                //         target:v.e,
                                                //         opacity:[0]
                                                //     })
                                                //     setTimeout(() => {

                                                //         timeline.add({
                                                //             targets: v.e,
                                                //             opacity: [1, 0],

                                                //             duration: 500,
                                                //             easing: 'easeOutCirc',

                                                //             // update: function(anim) { 
                                                //             //   //console.log(anim.progress); 
                                                //             // },
                                                //             // complete: function(anim) {
                                                //             //   anime.remove(v.e);
                                                //             // }
                                                //         }
                                                //         );
                                                //     }, 1000);

                                                // }
                                            }
                                        );

                                        // Btn:--
                                        mArtBox_evnt.add_svg({
                                            "w": `28vh`,
                                            "h": `4vh`,
                                            "x": 56,
                                            "y": 75,
                                            "e": mE,
                                            "src": `${m_asset_path}/NextLevel.svg`
                                        }, {
                                            "onClick": (v = {}) => {
                                                nextLevelBtn();
                                            }
                                        });

                                        mArtBox_evnt.add_svg({
                                            "w": `28vh`,
                                            "h": `4vh`,
                                            "x": 31,
                                            "y": 75,
                                            "e": mE,
                                            "src": `${m_asset_path}/Previouslevel.svg`
                                        }

                                            , {
                                                // "onLoad": (v = {}) => {
                                                //     //left to right animation

                                                //     let timeline = anime.timeline();
                                                //     timeline.add({
                                                //         target:v.e,
                                                //         opacity:[0]
                                                //     })
                                                //     setTimeout(() => {

                                                //         timeline.add({
                                                //             targets: v.e,
                                                //             opacity: [1, 0],

                                                //             duration: 500,
                                                //             easing: 'easeOutCirc',

                                                //             // update: function(anim) { 
                                                //             //   //console.log(anim.progress); 
                                                //             // },
                                                //             // complete: function(anim) {
                                                //             //   anime.remove(v.e);
                                                //             // }
                                                //         }
                                                //         );
                                                //     }, 1000);

                                                // }
                                            }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": ``,
                                            "h": ``,
                                            "x": 87,
                                            "y": 10,
                                            "e": mE,
                                            "src": `${m_asset_path}/celebration.svg`
                                        }

                                            , {
                                                // "onLoad": (v = {}) => {
                                                //     //left to right animation

                                                //     let timeline = anime.timeline();
                                                //     timeline.add({
                                                //         target:v.e,
                                                //         opacity:[0]
                                                //     })
                                                //     setTimeout(() => {

                                                //         timeline.add({
                                                //             targets: v.e,
                                                //             opacity: [1, 0],

                                                //             duration: 500,
                                                //             easing: 'easeOutCirc',

                                                //             // update: function(anim) { 
                                                //             //   //console.log(anim.progress); 
                                                //             // },
                                                //             // complete: function(anim) {
                                                //             //   anime.remove(v.e);
                                                //             // }
                                                //         }
                                                //         );
                                                //     }, 1000);

                                                // }
                                            }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": ``,
                                            "h": ``,
                                            "x": 70,
                                            "y": 25,
                                            "e": mE,
                                            "src": `${m_asset_path}/celebration.svg`
                                        }

                                            , {
                                                // "onLoad": (v = {}) => {
                                                //     //left to right animation

                                                //     let timeline = anime.timeline();
                                                //     timeline.add({
                                                //         target:v.e,
                                                //         opacity:[0]
                                                //     })
                                                //     setTimeout(() => {

                                                //         timeline.add({
                                                //             targets: v.e,
                                                //             opacity: [1, 0],

                                                //             duration: 500,
                                                //             easing: 'easeOutCirc',

                                                //             // update: function(anim) { 
                                                //             //   //console.log(anim.progress); 
                                                //             // },
                                                //             // complete: function(anim) {
                                                //             //   anime.remove(v.e);
                                                //             // }
                                                //         }
                                                //         );
                                                //     }, 1000);

                                                // }
                                            }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": ``,
                                            "h": ``,
                                            "x": 87,
                                            "y": 40,
                                            "e": mE,
                                            "src": `${m_asset_path}/celebration.svg`
                                        }

                                            , {
                                                // "onLoad": (v = {}) => {
                                                //     //left to right animation

                                                //     let timeline = anime.timeline();
                                                //     timeline.add({
                                                //         target:v.e,
                                                //         opacity:[0]
                                                //     })
                                                //     setTimeout(() => {

                                                //         timeline.add({
                                                //             targets: v.e,
                                                //             opacity: [1, 0],

                                                //             duration: 500,
                                                //             easing: 'easeOutCirc',

                                                //             // update: function(anim) { 
                                                //             //   //console.log(anim.progress); 
                                                //             // },
                                                //             // complete: function(anim) {
                                                //             //   anime.remove(v.e);
                                                //             // }
                                                //         }
                                                //         );
                                                //     }, 1000);

                                                // }
                                            }
                                        );
                                        mArtBox_evnt.add_svg({
                                            "w": ``,
                                            "h": ``,
                                            "x": 70,
                                            "y": 55,
                                            "e": mE,
                                            "src": `${m_asset_path}/celebration.svg`
                                        }

                                            , {
                                                // "onLoad": (v = {}) => {
                                                //     //left to right animation

                                                //     let timeline = anime.timeline();
                                                //     timeline.add({
                                                //         target:v.e,
                                                //         opacity:[0]
                                                //     })
                                                //     setTimeout(() => {

                                                //         timeline.add({
                                                //             targets: v.e,
                                                //             opacity: [1, 0],

                                                //             duration: 500,
                                                //             easing: 'easeOutCirc',

                                                //             // update: function(anim) { 
                                                //             //   //console.log(anim.progress); 
                                                //             // },
                                                //             // complete: function(anim) {
                                                //             //   anime.remove(v.e);
                                                //             // }
                                                //         }
                                                //         );
                                                //     }, 1000);

                                                // }

                                            }
                                        );

                                        let nextLevelBtn = () => {
                                            v.e.remove();
                                        }
                                    }
                                });
                            };
                            mSet(mScr);
                        }
                    },
                ]
            },

            //set..
            "set": (k, v) => {
                let mList = mDta_main["screens"]["rndr"]["l"];
                let mIdx = mList.findIndex(eF => eF["key"] === k); // Index number of the screen list
                if (mIdx == -1) {
                    throw `err: [k = ${k}] is not available..`;
                    return; //Stop
                }
                //all ok..
                mList[mIdx].set(k, v, mList[mIdx]);
            }

        }

    };

    //set..
    // mDiv.innerHTML = "Content";



    // //mStart..
    let mStart = (mE) => {
        // set..
        let scr_9 = () => {
            mDta_main.screens.set(`scr_9`, {
                "e": mE,
                "value": {
                    //here you can assign your variable based on your requirements..
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {
                        },
                    }
                }
            });
        };

        let scr_8 = () => {
            mDta_main.screens.set(`scr_8`, {
                "e": mE,
                "value": {
                    //here you can assign your variable based on your requirements..
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {
                            scr_9();
                        },
                    }
                }
            });
        };

        let scr_7 = () => {
            mDta_main.screens.set(`scr_7`, {
                "e": mE,
                "value": {
                    //here you can assign your variable based on your requirements..
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {
                            scr_8();
                        },
                    }
                }
            });
        };
      
        let scr_6 = () => {
            mDta_main.screens.set(`scr_6`, {
                "e": mE,
                "value": {
                    //here you can assign your variable based on your requirements..
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {
                            scr_7();
                        },
                    }
                }
            });
        };
       
        let scr_5 = () => {
            mDta_main.screens.set(`scr_5`, {
                "e": mE,
                "value": {
                    //here you can assign your variable based on your requirements..
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {
                            scr_6();
                        },
                    }
                }
            });
        };

        let scr_4 = () => {
            mDta_main.screens.set(`scr_4`, {
                "e": mE,
                "value": {
                    //here you can assign your variable based on your requirements..
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {
                            scr_5();
                        },
                    }
                }
            });
        };

        let scr_3 = () => {
            mDta_main.screens.set(`scr_3`, {
                "e": mE,
                "value": {
                    //here you can assign your variable based on your requirements..
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {
                            scr_4();
                        },
                    }
                }
            });
        };

        let scr_2 = () => {
            mDta_main.screens.set(`scr_2`, {
                "e": mE,
                "value": {
                    //here you can assign your variable based on your requirements..
                    //callback..
                    "cb": {
                        "on_scr_end": (p = {}) => {
                            scr_3();
                        },
                    }
                }
            });
        };

        mDta_main.screens.set(`scr_1`, {
            "e": mE, //Html-Element
            "value": {
                //here you can assign your variable based on your requirements..

                //callback..
                "cb": {
                    "on_scr_end": (p = {}) => {
                        scr_2();
                    },
                }

            }
        });

    };

    /*
    let mStart = (mE) => {
        let screens = mDta_main.screens.rndr.l; // Get the list of screens

        // Function to render a screen
        let renderScreen = (index) => {
            return new Promise((resolve) => {
                if (index < screens.length) {
                    const screen = screens[index];
                    mDta_main.screens.set(screen.key, {
                        "el": mE,
                        "value": {
                            "cb": {
                                "on_new_btn_clc": (p = {}) => {
                                    resolve();
                                },
                            }
                        }
                    });
                } else {
                    resolve();
                }
            });
        };

        // Function to render screens sequentially
        let renderScreensSequentially = (index) => {
            renderScreen(index).then(() => {
                renderScreensSequentially(index + 1);
            });
        };

        renderScreensSequentially(0);
    };
    */


    mStart(mScene);


};

mGameRenderer({
    "meta": {},
    "data": {
        //add params based on content requirement
        "my_param_1": "",
        "my_param_2": "",

    }
}, document.body);


