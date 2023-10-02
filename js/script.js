// import core_1mn from '../1mn/core_1mn.js';
import { art_box } from "../libs/artbox/art_box.js";


const mArtBox = art_box();
const m_asset_path = '../assets/';

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

                    // Screen-1 -----------
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
                            mScr.style.height = `100%`;
                            mScr.style.width = `100%`;
                            mScr.style.overflow = `hidden`;

                            //set..
                            let mSet = (mE = document.body) => {
                                // mE.innerHTML = `
                                //     <div class="s1">
                                //         <div class="s1-frame1"></div>
                                //         <div class="s1-frame2"></div>
                                //         <div class="s1-data">
                                //             <h1 class="s1-heading">Word Velocity</h1>
                                //             <button class="s1-btn">New Game</button>

                                //             <div class="overlay-Loading">
                                //                 <div class="loading-spans">
                                //                     <span class="loading-ball"></span>
                                //                     <span class="loading-text">Loading</span>
                                //                 </div>
                                //             </div>
                                //         </div>
                                //     </div>
                                // `;

                                // const screenElement = mE.querySelector('.s1');
                                // if (screenElement) {
                                //     screenElement.style.opacity = 1;
                                //     let s1Btn = screenElement.querySelector(".s1-btn");
                                //     s1Btn.addEventListener('click', function () {
                                //         s1Btn.style.opacity = 0;

                                //         // Overlay Loading:-
                                //         const overlayLoading = screenElement.querySelector('.overlay-Loading');
                                //         const loadingBall = screenElement.querySelector('.loading-ball');

                                //         if (overlayLoading) {

                                //             overlayLoading.style.animation = 'zoomInLoading 1s 1s both';

                                //             setTimeout(() => {
                                //                 loadingBall.style.width = '100%';
                                //                 zoomOutLoading();
                                //             }, 1000);

                                //             // zoomOutLoading
                                //             const zoomOutLoading = () => {
                                //                 overlayLoading.style.animation = 'zoomOutLoading 1s 3s both';

                                //             }
                                //             setInterval(() => {
                                //                 screenElement.style.opacity = 0;

                                //                 mSendCB("on_new_btn_clc", {});

                                //             }, 5000);
                                //         }
                                //     });

                                // }

                                //set..[Svg]..  


                                //set..[Svg]..


                                mArtBox_evnt.add_svg({
                                    "w": `100%`,
                                    "h": `95vh`,
                                    "e": mE,
                                    "src": `../assets/bg_images/first_scr_bg.svg`
                                });

                                // text 
                                mArtBox_evnt.add_svg({
                                    "w": `25vw`,
                                    "h": `8vh`,
                                    "x": 37.5,
                                    "y": 46,
                                    "e": mE,
                                    "src": `../assets/word_velocity_text.svg`
                                });

                                // btn:-
                                mArtBox_evnt.add_svg({
                                    "w": `41vw`,
                                    "h": `16vh`,
                                    "x": 30,
                                    "y": 70,
                                    "e": mE,
                                    "src": `../assets/btn_starting.svg`
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
                                        "src": `../assets/loading_border.svg`
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
                                                        }, 3000);
                                                    }

                                                }
                                                );
                                            }, 400);
                                        }
                                    });
                                }

                                // on_scr_end..
                                let on_scr_end = () => {
                                    let timeline = anime.timeline();
                                    timeline.add({
                                        targets: mScr,
                                        opacity: 0,
                                        duration: 2000,
                                        easing: 'easeOutExpo',
                                        update: function (anim) {
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

                    // Screen-2 ----------
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
                            mScr.style.height = `100%`;
                            mScr.style.width = `100%`;
                            mScr.style.overflow = `hidden`;


                            //set..
                            let mSet = (mE = document.body) => {

                                // mE.innerHTML = `
                                // <div class="s2">
                                //     <div className="part1">
                                //         <img class="s2-img" src="../assets/word_with_leaf.svg" alt="Leaf & Text">
                                //     </div>

                                //     <div class="part2">
                                //         <div class="border border1">
                                //             <div class="border border2">
                                //                 <p class="s2-about-title">About</p>
                                //                 <div class="s2-carousel-cont">
                                //                     <div class="s2-carousel-slider">
                                //                         <div class="s2-carousel-item active-item">
                                //                             <p>Choose your speed and difficulty levels.</p>
                                //                         </div>
                                //                         <div class="s2-carousel-item">
                                //                             <p>Focus and track the word.</p>
                                //                         </div>
                                //                         <div class="s2-carousel-item">
                                //                             <p>Answer the questions.</p>
                                //                         </div>
                                //                     </div>
                                //                     <div class="s2-carousel-dots">
                                //                         <span class="dot1"></span>
                                //                         <span class="dot2"></span>
                                //                         <span class="dot3"></span>
                                //                     </div>
                                //                     <p class="s2-btn">Skip</p>
                                //                 </div>
                                //             </div>
                                //         </div>
                                //     </div>
                                // </div>
                                // `;

                                // const screenElement = mE.querySelector('.s2');
                                // if (screenElement) {
                                //     screenElement.style.opacity = 1;

                                //     const s2Img = screenElement.querySelector(".s2-img");
                                //     s2Img.style.animation = "s2-zoomIn 1s 1s both";

                                //     setTimeout(() => {
                                //         s2Img.style.animation = "s2-zoomOut 1s 1s both";

                                //     }, 2000);


                                //     setTimeout(() => {
                                //         const Part2About = screenElement.querySelector(".part2");
                                //         Part2About.style.opacity = 1;

                                //         const dots = screenElement.querySelectorAll(".s2-carousel-dots span");
                                //         const itemImg = screenElement.querySelectorAll(".s2-carousel-item");

                                //         let dotClicked = false;
                                //         let currentIndex = 0;

                                //         dots.forEach((dot, index) => {
                                //             dot.addEventListener("click", function () {
                                //                 dots.forEach(dot => dot.classList.remove("active-dot"));
                                //                 itemImg.forEach(image => image.classList.remove("active-item"));

                                //                 dot.classList.add("active-dot");
                                //                 itemImg[index].classList.add("active-item");

                                //                 dotClicked = true;
                                //                 currentIndex = index;
                                //             });
                                //         });

                                //         const skipButton = screenElement.querySelector(".s2-btn");

                                //         skipButton.addEventListener("click", function () {
                                //             itemImg[currentIndex].classList.remove("active-item");
                                //             currentIndex = (currentIndex + 1) % itemImg.length;
                                //             itemImg[currentIndex].classList.add("active-item");
                                //             dots.forEach(dot => dot.classList.remove("active-dot"));
                                //             dots[currentIndex].classList.add("active-dot");

                                //             console.log(currentIndex);
                                //             if (currentIndex === 2) {
                                //                 currentIndex = 3;
                                //             }

                                //             if (currentIndex === 3) {
                                //                 setTimeout(() => {
                                //                     screenElement.style.opacity = 0;
                                //                     mSendCB("on_new_btn_clc", {});
                                //                 }, 1000);
                                //             }
                                //         });

                                //     }, 4000);

                                // };






                                // // Word & Leaf Loading:-
                                
                                mArtBox_evnt.add_svg({ //Word & Leaf Loading
                                    "w": `40vw`,
                                    "h": `40vh`,
                                    "x": 30,
                                    "y": 30,
                                    "e": mE,
                                    "src": `../assets/btn_starting.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        console.log(v.e);
                                        v.e.style.opacity = `1`;

                                        // anime({
                                        //     targets: v.e,
                                        //     scale: 20,
                                        //   });
                                    },

                                });

                                // //set..[Svg]..
                                // mArtBox_evnt.add_svg({
                                //     "w": `5vw`,
                                //     "h": `5vw`,
                                //     "x": 10,
                                //     "y": 10,
                                //     "e": mE,
                                //     "src": `../assets/word_with_leaf.svg`
                                // },
                                //     {
                                //         "onLoad": (v = {}) => {
                                //             console.log(v.e);



                                //         }
                                //     }
                                // );


                            };
                            mSet(mScr);
                        }
                    },

                    // Screen-3 ----------
                    // {
                    //     "name": "Screen 3",
                    //     "key": "scr_3",
                    //     "set": (k, v, thisItem) => {
                    //         console.log(thisItem);
                    //         //--reset--// [START]
                    //         v["el"].innerHTML = ``; //reset

                    //         //set..
                    //         let mScr = document.createElement("div");
                    //         mScr.classList.add('mScr');
                    //         v["el"].appendChild(mScr);

                    //         //set..
                    //         let mSet = (mE = document.body) => {
                    //             mE.innerHTML = `
                    //             <div class="s3">
                    //                 <div class="img-container">
                    //                     <img class="s3-img1" src="../assets/rotate_90.svg" alt="rotate">
                    //                 </div>

                    //                 <!-- Difficulty Level --!>
                    //                 <div class="s3-data1">

                    //                     <div class="s3-div">
                    //                         <h1 class="s3-h1">Difficulty Level</h1>
                    //                         <div class="s3-image-cont">
                    //                             <div class="s3-circle1">5</div>
                    //                             <img class="s3-level" src="../assets/line_4.svg" alt="">
                    //                         </div>
                    //                     </div>

                    //                     <div class="s3-div">
                    //                         <h1 class="s3-h1">Speed</h1>
                    //                         <div class="s3-image-cont">
                    //                             <div class="s3-circle2">10</div>
                    //                             <img class="circle" src="../assets/line_4.svg" alt="">
                    //                         </div>
                    //                     </div>

                    //                     <button class="s3-btn">Let;s play</button>
                    //                 </div>
                    //             </div>

                    //             `;

                    //             setTimeout(() => {
                    //                 const screenElement = mE.querySelector('.scr3');
                    //                 if (screenElement) {
                    //                     screenElement.style.opacity = 1;

                    //                     const scr5Data = screenElement.querySelector('.s3-data');
                    //                     if (s3Data) {
                    //                         // s3Data.style.animation = 's3-zoomIn2 2s 2s both';
                    //                     }


                    //                     const img2 = screenElement.querySelector('.overlay-data2-img');
                    //                     if (img2) {
                    //                         // img2.style.animation = 'zoomIn2 2s 2s both';
                    //                     }


                    //                     // Start
                    //                     setTimeout(() => {
                    //                         const s3Data1 = mE.querySelector(".s3-data1");

                    //                         // s3Data1.style.animation = "s3-moveOutData 2s ease-in";

                    //                         setTimeout(() => {
                    //                             s3Data1.style.opacity = 0;
                    //                         }, 2000);
                    //                     }, 4000);

                    //                 }
                    //             }, 0);


                    //         };
                    //         mSet(mScr);
                    //     }
                    // },
                    // Screen-4 -----------
                    // {
                    //     "name": "Screen 4",
                    //     "key": "scr_4",
                    //     "set": (k, v, thisItem) => {
                    //         console.log(thisItem);
                    //         //--reset--// [START]
                    //         v["el"].innerHTML = ``; //reset

                    //         //set..
                    //         let mScr = document.createElement("div");
                    //         mScr.classList.add('mScr');
                    //         v["el"].appendChild(mScr);


                    //         //set..
                    //         let mSet = (mE = document.body) => {
                    //             mE.innerHTML = `
                    //             <div class="scr4 scr-transition scr4-bg-img">
                    //                 <div class="img-container">
                    //                     <img class="scr4-img1" src="../assets/rotate_90.svg" alt="img">
                    //                 </div>

                    //                 <div class="scr4-data scr4-data2-dis">
                    //                     <h1 class="scr4-h1">Game Explanation</h1>
                    //                     <div>
                    //                         <h2 class="scr4-h2">Answer The MCQ</h2>
                    //                         <img class="scr4-img2" src="../assets/answer_list.svg" alt="list">
                    //                     </div>
                    //                     <button onclick="next" class="scr4-skip-btn">Skip</button>

                    //                 </div>
                    //             </div>

                    //             `;

                    //             setTimeout(() => {
                    //                 const screenElement = mE.querySelector('.scr4');
                    //                 if (screenElement) {
                    //                     screenElement.style.opacity = 1;

                    //                     // const scr4Data = screenElement.querySelector('.scr4-data');
                    //                     // if (scr4Data) {
                    //                     //     scr4Data.style.animation = 'scr4-zoomIn2 2s 2s both';
                    //                     // }


                    //                     // Skip 
                    //                     setTimeout(() => {
                    //                         const scr4Data1 = mE.querySelector(".scr4-data1-dis");
                    //                         const scr4Data2 = mE.querySelector(".scr4-data2-dis");

                    //                         // let scr4Data2Dis = () => {
                    //                         scr4Data1.style.opacity = 0;
                    //                         scr4Data2.style.opacity = 1;

                    //                         setTimeout(() => {
                    //                             scr4Data2.style.opacity = 0;
                    //                             rotateTheImg1();
                    //                         }, 2000);
                    //                         // }
                    //                         const scr4Img1 = mE.querySelector(".scr4-img1");
                    //                         let rotateTheImg1 = () => {
                    //                             if (scr4Img1) {
                    //                                 scr4Img1.style.animation = 'scr4-rotate1 2s 1s both';
                    //                             }
                    //                         }

                    //                     }, 4000);


                    //                 }
                    //             }, 0);

                    //         };
                    //         mSet(mScr);
                    //     }
                    // },
                    // Screen-5 -----------
                    {
                        "name": "Screen 5",
                        "key": "scr_5",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            //--reset--// [START]
                            v["el"].innerHTML = ``; //reset

                            //set..
                            let mScr = document.createElement("div");
                            mScr.classList.add('mScr');
                            mScr.style.height = `100%`;
                            mScr.style.width = `100%`;
                            v["el"].appendChild(mScr);


                            //set..
                            let mSet = (mE = document.body) => {
                                mE.innerHTML = `
                                <div class="s5">
                                    <!-- <div>
                                        <div class=""></div>
                                        <div class=""></div>
                                        <div class=""></div>
                                        <div class=""></div>
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
                                }, 0);

                            };
                            mSet(mScr);
                        }
                    },
                    // // Screen-6 ----------
                    // {
                    //     "name": "Screen 6",
                    //     "key": "scr_6",
                    //     "set": (k, v, thisItem) => {
                    //         console.log(thisItem);
                    //         //--reset--// [START]
                    //         v["el"].innerHTML = ``; //reset

                    //         //set..
                    //         let mScr = document.createElement("div");
                    //         mScr.classList.add('mScr');
                    //         v["el"].appendChild(mScr);


                    //         //set..
                    //         let mSet = (mE = document.body) => {
                    //             mE.innerHTML = `
                    //             <div class="scr6 scr-transition scr6-bg-img">

                    //                 <img class="scr6-img1" src="../assets/rotate_90.svg" alt="rotational">




                    //                 <!-- Countdown --!>
                    //                     <div class="scr6-count scr6-count-ready">
                    //                         <img class="scr6-data-imgs" src="../assets/count/ready.svg" alt="ready">                 
                    //                     </div>
                    //                     <div class="scr6-count scr6-count-1">
                    //                         <img class="scr6-data-imgs" src="../assets/count/count_1.svg" alt="1">
                    //                     </div>
                    //                     <div class="scr6-count scr6-count-2">
                    //                         <img class="scr6-data-imgs" src="../assets/count/count_2.svg" alt="2"> 
                    //                     </div>
                    //                     <div class="scr6-count scr6-count-3">
                    //                         <img class="scr6-data-imgs" src="../assets/count/count_3.svg" alt="3">
                    //                     </div>


                    //                     <!-- Question--!>

                    //                     <div class="stats">
                    //                         <p>Level: 5</p>
                    //                         <p>Round: 1</p>
                    //                     </div>   

                    //             </div>

                    //             `;

                    //             setTimeout(() => {
                    //                 const screenElement = mE.querySelector('.scr6');
                    //                 if (screenElement) {
                    //                     screenElement.style.opacity = 1;



                    //                 }
                    //             }, 0);

                    //         };
                    //         mSet(mScr);
                    //     }
                    // },
                    // // Screen-7 ----------
                    // {
                    //     "name": "Screen 7",
                    //     "key": "scr_7",
                    //     "set": (k, v, thisItem) => {
                    //         console.log(thisItem);
                    //         //--reset--// [START]
                    //         v["el"].innerHTML = ``; //reset

                    //         //set..
                    //         let mScr = document.createElement("div");
                    //         mScr.classList.add('mScr');
                    //         v["el"].appendChild(mScr);


                    //         //mset..
                    //         let mSet = (mE = document.body) => {
                    //             mE.innerHTML = `
                    //             <div class="s7 scr-transition s7-bg-img">
                    //                 <div class="img-container">
                    //                     <img class="s7-img1" src="../assets/rotate_90.svg" alt="rotate">
                    //                 </div>

                    //                 <div class="s7-data">
                    //                     <div>
                    //                         <div class="s7-ques">
                    //                             <span class="s7-quesText">Defines if the animation should automatically starts or not.</span>

                    //                             <div class="s7-con-div"></div>

                    //                             <div class="s7-child-line-cont"></div>
                    //                         </div>

                    //                         <div class="s7-options">
                    //                             <div class="s7-option1">Option 1</div>
                    //                             <div class="s7-option2">Option 2</div>
                    //                         </div>
                    //                         <div class="stats">
                    //                             <p>Level: 5</p>
                    //                             <p>Round: 1</p>
                    //                         </div> 
                    //                     </div>
                    //                 </div>
                    //             </div>

                    //             `;

                    //             setTimeout(() => {
                    //                 const screenElement = mE.querySelector('.s7');
                    //                 if (screenElement) {
                    //                     screenElement.style.opacity = 1;



                    //                 }
                    //             }, 0);

                    //         };
                    //         mSet(mScr);
                    //     }
                    // },

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

        // let scr_5 = () => {
        //     mDta_main.screens.set("scr_5", {
        //         "el": mE,
        //         "value": {
        //             //here you can assign your variable based on your requirements..

        //         }
        //     });
        // };

        let scr_2 = () => {
            mDta_main.screens.set(`scr_2`, {
                "e": mE,
                "value": {
                    //here you can assign your variable based on your requirements..

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


        // setTimeout(() => {
        //     mDta_main.screens.set("scr_4", {
        //         "el": mE,
        //         "value": {
        //             //here you can assign your variable based on your requirements..

        //         }
        //     });
        // }, 14000);

        // setTimeout(() => {
        //     mDta_main.screens.set("scr_5", {
        //         "el": mE,
        //         "value": {
        //             //here you can assign your variable based on your requirements..

        //         }
        //     });
        // }, 24000);

        // setTimeout(() => {
        //     mDta_main.screens.set("scr_6", {
        //         "el": mE,
        //         "value": {
        //             //here you can assign your variable based on your requirements..

        //         }
        //     });
        // }, 30000);

    };

    // let mStart = (mE) => {
    //     let screens = mDta_main.screens.rndr.l; // Get the list of screens

    //     // Function to render a screen
    //     let renderScreen = (index) => {
    //         return new Promise((resolve) => {
    //             if (index < screens.length) {
    //                 const screen = screens[index];
    //                 mDta_main.screens.set(screen.key, {
    //                     "el": mE,
    //                     "value": {
    //                         "cb": {
    //                             "on_new_btn_clc": (p = {}) => {
    //                                 resolve();
    //                             },
    //                         }
    //                     }
    //                 });
    //             } else {
    //                 resolve();
    //             }
    //         });
    //     };

    //     // Function to render screens sequentially
    //     let renderScreensSequentially = (index) => {
    //         renderScreen(index).then(() => {
    //             renderScreensSequentially(index + 1);
    //         });
    //     };

    //     renderScreensSequentially(0);
    // };


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


