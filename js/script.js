// import core_1mn from '../1mn/core_1mn.js';






let mGameRenderer = (data = {}, mDOM) => {
    //create element..    
    let mDiv = document.createElement("div");
    mDiv.style.position = 'relative';
    mDiv.style.width = '100%';
    mDiv.style.height = '100%';
    mDOM.appendChild(mDiv);
    //your root element [----mDiv----]


    //-----do your code-----//
    //utils..
    let mUtils = {
        "my_elem_1": (mE) => {
            let mCard = document.createElement("div");
            mE.appendChild(mCard);
            //set..
            mCard.style.width = "10vh";
            mCard.style.height = "20vh";
            mCard.style.backgroundColor = "green";
            return mCard;
        },



    };

    //mDta_main
    let mDta_main = {
        "gVars": {  //Global-Variables
            "my_var_1": "",
        },
        "screens": {  //screens
            "rndr": { //Renderer..
                "l": [ //list..

                    {
                        "name": "Screen 1",
                        "key": "scr_1",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            v["el"].innerHTML = ``; //reset the screen


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
                            v["el"].appendChild(mScr);

                            //set..
                            let mSet = (mE = document.body) => {
                                mE.innerHTML = `
                                    <div class="s1">
                                        <div class="s1-frame1"></div>
                                        <div class="s1-frame2"></div>
                                        <div class="s1-data">
                                            <!-- <div class="s1-img-con">
                                                <img class="s1-img-leaf" src="../assets/leaf_ellipse.svg" alt="leaf" /> 
                                                <div class="dark-circle"></div>
                                                <div class="white-circle"></div>
                                            </div> -->
                                            <h1 class="s1-heading">Word Velocity</h1>

                                            <!-- <button onclick="console.log('Btn Clicked')" class="s1-btn">New Game</button> -->

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





                                // //set..[Svg]..
                                // mUtils.svg_loader({
                                //     "0": "../assets/bg_images/first_scr_bg.svg",  //svg file name --OR-- <svg></svg>   --OR-- "my_folder/my_file.svg"
                                //     //"1": "YOUR_UNIQUE_ID",
                                //     "2": "100%", //2vh
                                //     "3": "100%", //2vh
                                //     "4": "", //"" => no-color --OR-- undefined => "auto-color-applied" --OR-- "rgba(my color)"
                                //     "5": mE,  //HTML-ELEMENT
                                //     //you can set and (reload) FIELD by (assigning) this func..
                                //     //"reload": () => {},
                                //     "cb": {
                                //         "onLoad": (mCurrItem) => {
                                //             //use (svg)
                                //             //alert("onLoad");
                                //         },
                                //         "onInit": (mCurrItem) => {
                                //             //This will trigger immediately..
                                //         },
                                //         "onError": () => {
                                //             //alert("onError");
                                //         },
                                //         "onClick": (mCurrItem) => {
                                //             //alert("onClick");
                                //         }
                                //     }
                                // });


                                // //set..[Text]..
                                // let mT0_evnt = mUtils.txt_loader({
                                //     "0": mE,  //HTMLElement
                                //     "1": 'Word Velocity',  //txt
                                //     "2": "2.9vh",  //fontSize
                                //     "3": "#000",  //color
                                //     "4": 0,  //pos hori [left, center, right]
                                //     "5": 0,   //[".innerHTML", ".innerText"]
                                //     //"6": grey, //onHoverColor
                                //     "7": ``, //padding
                                // },
                                //     {
                                //         "onClc": () => { },
                                //         "onmouseover": () => { },
                                //         "onmouseout": () => { },
                                //     });
                                // //set-position [Temporary-Solution]  [-Start-]
                                // mT0_evnt["e"].style.position = 'absolute';
                                // mT0_evnt["e"].style.top = '35vh';
                                // mT0_evnt["e"].style.left = ' 43%';
                                // //set-position [Temporary-Solution]  [-End-]



                                // //set..[Btn]..
                                // let mBtn_hldr0 = document.createElement("div");
                                // mE.appendChild(mBtn_hldr0);

                                // let mBtn0_evnt = mUtils.btn_loader({
                                //     "e1": mBtn_hldr0,  //HTMLElement
                                //     "w": "8vw",
                                //     "posH": 1,
                                //     "h": "4.2vh",
                                //     "txt": {
                                //         "0": "New Game",
                                //         "1": "1.3vh"
                                //     },
                                //     //"ico": {"0": "sample.svg", "1": "1.3vh", "2": "1.3vh", "3": "rgba(255,255,255, 1.0)" },
                                //     "cb": {
                                //         "onLoad": function (data) {
                                //             //let mBtn = data['btn'];
                                //             //console.log(mBtn);
                                //         },
                                //         "onClick": function (data) {
                                //             //alert(JSON.stringify(data));
                                //             //console.log(data);
                                //             //set..
                                //             mSendCB(on_new_btn_clc, {});
                                //         },
                                //         "onClickD": function (data) {
                                //             //alert(JSON.stringify(data));
                                //             //console.log(data);

                                //         }
                                //     },
                                //     //typ..
                                //     "typ": 0,
                                //     //variant..
                                //     "vari": 0
                                // });
                                // //set-position [Temporary-Solution] [-Start-]
                                // mBtn_hldr0.style.position = 'absolute';
                                // mBtn_hldr0.style.top = '45vh';
                                // mBtn_hldr0.style.left = '45%';

                            };

                            mSet(mScr);
                        }
                    },

                    {
                        "name": "Screen 2",
                        "key": "scr_2",
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            v["el"].innerHTML = ``; //reset the screen


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
                            mScr.classList.add('mScr');
                            v["el"].appendChild(mScr);


                            //set..
                            let mSet = (mE = document.body) => {
                                mE.innerHTML = `
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
                                            // if (dotClicked) {
                                            itemImg[currentIndex].classList.remove("active-item");
                                            currentIndex = (currentIndex + 1) % itemImg.length;
                                            itemImg[currentIndex].classList.add("active-item");
                                            dots.forEach(dot => dot.classList.remove("active-dot"));
                                            dots[currentIndex].classList.add("active-dot");
                                            // }

                                            console.log(currentIndex);
                                            if(currentIndex === 2){
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


                                }


                                
                                // //set..[Svg]..
                                // mUtils.svg_loader({
                                //     "0": "assets/svgTest/game/game 8.1.svg",  //svg file name --OR-- <svg></svg>   --OR-- "my_folder/my_file.svg"
                                //     //"1": "YOUR_UNIQUE_ID",
                                //     "2": "100%", //2vh
                                //     "3": "100%", //2vh
                                //     "4": "", //"" => no-color --OR-- undefined => "auto-color-applied" --OR-- "rgba(my color)"
                                //     "5": mE,  //HTML-ELEMENT
                                //     //you can set and (reload) FIELD by (assigning) this func..
                                //     //"reload": () => {},
                                //     "cb": {
                                //         "onLoad": (mCurrItem) => {
                                //             //use (svg)
                                //             //alert("onLoad");
                                //         },
                                //         "onInit": (mCurrItem) => {
                                //             //This will trigger immediately..
                                //         },
                                //         "onError": () => {
                                //             //alert("onError");
                                //         },
                                //         "onClick": (mCurrItem) => {
                                //             //alert("onClick");
                                //         }
                                //     }
                                // });


                                // //set..[Text]..
                                // let mT0_evnt = mUtils.txt_loader({
                                //     "0": mE,  //HTMLElement
                                //     "1": 'Word Velocity',  //txt
                                //     "2": "2.9vh",  //fontSize
                                //     "3": "#000",  //color
                                //     "4": 0,  //pos hori [left, center, right]
                                //     "5": 0,   //[".innerHTML", ".innerText"]
                                //     //"6": grey, //onHoverColor
                                //     "7": ``, //padding
                                // },
                                //     {
                                //         "onClc": () => { },
                                //         "onmouseover": () => { },
                                //         "onmouseout": () => { },
                                //     });
                                // //set-position [Temporary-Solution]  [-Start-]
                                // mT0_evnt["e"].style.position = 'absolute';
                                // mT0_evnt["e"].style.top = '35vh';
                                // mT0_evnt["e"].style.left = '43%';
                                // //set-position [Temporary-Solution]  [-End-]

                            };
                            mSet(mScr);
                        }
                    },

                    // Screen-3
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
                    // // Screen-4
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
                    // Screen-5 
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
                    // // Screen-6
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
                    // // Screen-7
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
    mDiv.innerHTML = "Content";
    // let my_elem_1 = mUtils.my_elem_1(mDiv);



    // //mStart..
    // let mStart = (mE) => {
    //     // set..

    //     // let scr_5 = () => {
    //         // mDta_main.screens.set("scr_5", {
    //         //     "el": mE,
    //         //     "value": {
    //         //         //here you can assign your variable based on your requirements..

    //         //     }
    //         // });
    //     // };

    //     let scr_2 = (num) => {
    //         if(num === 2){
    //             mDta_main.screens.set("scr_2", {
    //                 "el": mE,
    //                 "value": {
    //                     //here you can assign your variable based on your requirements..
    //                     //callback..
    //                     "cb": {
    //                         "on_new_btn_clc": (p = {}) => {
    //                             // scr_5();
    //                         },

    //                     }
    //                 }
    //             });
    //         }


    //     }

    //     mDta_main.screens.set("scr_1", {
    //         "el": mE,
    //         "value": {
    //             //here you can assign your variable based on your requirements..
    //             "cb": {
    //                 "on_new_btn_clc": (p = {}) => {
    //                     scr_2(2);
    //                 },

    //             }
    //         }
    //     });


    //     // setTimeout(() => {
    //     //     mDta_main.screens.set("scr_4", {
    //     //         "el": mE,
    //     //         "value": {
    //     //             //here you can assign your variable based on your requirements..

    //     //         }
    //     //     });
    //     // }, 14000);

    //     // setTimeout(() => {
    //     //     mDta_main.screens.set("scr_5", {
    //     //         "el": mE,
    //     //         "value": {
    //     //             //here you can assign your variable based on your requirements..

    //     //         }
    //     //     });
    //     // }, 24000);

    //     // setTimeout(() => {
    //     //     mDta_main.screens.set("scr_6", {
    //     //         "el": mE,
    //     //         "value": {
    //     //             //here you can assign your variable based on your requirements..

    //     //         }
    //     //     });
    //     // }, 30000);



    // };

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
        
        let renderScreensSequentially = (index) => {
            renderScreen(index).then(() => {
                renderScreensSequentially(index + 1); 
            });
        };
        renderScreensSequentially(0);
    };



    mStart(mDiv);


};

mGameRenderer({
    "meta": {},
    "data": {
        //add params based on content requirement
        "my_param_1": "",
        "my_param_2": "",


    }
}, document.body);