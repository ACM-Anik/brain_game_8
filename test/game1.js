let mGameRendrer = (data = {}, mDOM) => {
    //create element..    
    let mDiv = document.createElement("div");
    mDOM.appendChild(mDiv);
    mDiv.style.position = `relative`;
    mDiv.style.width = `100%`;
    mDiv.style.height = `100%`;
    //mDiv.style.backgroundColor = `blue`;
    //your root element [----mDiv----]


    //--mArtBox--//
    let mArtBox_evnt = mArtBox.set({ "e": mDiv });
    let mScene = mArtBox_evnt.get_scene();


    //-----do your code-----//
    //utils..
    let mUtils = {
    };


    //--my-code--//
    let myCODE = {

    };



    //mDta_main
    let mDta_main = {
        "utils": {},
        "gVars": {  //Global-Variables
            "my_var_1": ""
        },
        "screens": {  //screens
            "rndr": { //Rendrer..

                "l": [ //list..

                    {
                        "name": `Screen 1`,
                        "key": `scr_1`,
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            console.log(v["value"]);
                            //--reset--// [START]
                            v["e"].innerHTML = ``; //reset
                            //--reset--// [END]

                            //set vars..
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
                            //set..
                            //mScr.innerHTML = thisItem["name"];

                            //set..
                            let mSet = (mE = document.body) => {
                                //do your code..

                                //on_scr_end..
                                let on_scr_end = () => {
                                    //set..
                                    let timeline = anime.timeline();
                                    timeline.add({
                                        targets: mScr,
                                        opacity: 0,
                                        duration: 2000,
                                        easing: 'easeOutExpo',
                                        update: function (anim) {
                                            //console.log(anim.progress); 
                                            if (anim.progress > 0) {
                                                anime.remove(mScr)
                                                mScr.remove();
                                                //send cb..
                                                mSendCB(`on_scr_end`, {});
                                            }
                                        },
                                        complete: function (anim) {

                                        }

                                    }
                                    );

                                };


                                //set..[Svg]..  
                                mArtBox_evnt.add_svg({
                                    //"w": ``,
                                    //"h": ``,
                                    "e": mE,
                                    "src": `${m_asset_path}svg/_0.svg`
                                });


                                //set..[Svg]..
                                mArtBox_evnt.add_svg({
                                    "w": `20vw`,
                                    "h": `10vh`,
                                    "x": 40,
                                    "y": 75,
                                    "e": mE,
                                    "src": `${m_asset_path}svg/_1.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        //set..
                                        //console.log(v.e);
                                        v.e.style.opacity = `0`;

                                        //animation [Start]
                                        setTimeout(() => {
                                            let timeline = anime.timeline();
                                            timeline.add({
                                                targets: v.e,
                                                opacity: 1,
                                                duration: 2000,
                                                easing: 'easeOutExpo',

                                                complete: function (anim) {
                                                    anime.remove(v.e);
                                                    //completeLogEl.value = 'completed : ' + anim.completed;
                                                    on_scr_end();
                                                }

                                            }
                                            );
                                        }, 400);
                                        //animation [End]
                                    }
                                });


                                //set..
                                /*mArtBox_evnt.set_pos({
                                  "e": mT0_evnt["e"],
                                  "x": 30.32739153627312,
                                  "y": 25.279017857142858
                                });*/





                            };
                            mSet(mScr);


                            /*--USAGE--*/


                        }
                    },

                    {
                        "name": `Screen 2`,
                        "key": `scr_2`,
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            console.log(v["value"]);
                            //--reset--// [START]
                            v["e"].innerHTML = ``; //reset
                            //--reset--// [END]

                            //set..
                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            mScr.style.height = `100%`;
                            mScr.style.width = `100%`;
                            //set..
                            //mScr.innerHTML = thisItem["name"];

                            //set..
                            let mSet = (mE = document.body) => {
                                //do your code..


                                //effects..
                                let mEff_1 = () => {
                                    //set..[Svg]..    
                                    mArtBox_evnt.add_svg({
                                        "w": `55vw`,
                                        "h": `90vh`,
                                        "e": mE,
                                        "x": 23,
                                        "y": 4,
                                        "src": `${m_asset_path}svg/_4.svg`
                                    }, {
                                        "onLoad": (v = {}) => {
                                            //v.e.style.transform = `rotate(7deg)`;

                                            //anim
                                            let timeline = anime.timeline();
                                            timeline.add({
                                                targets: v.e,
                                                //opacity: [0.1, 1],
                                                scale: [0.0, 1],
                                                duration: 660,
                                                //easing: 'easeOutCirc',

                                                update: function (anim) {
                                                    //console.log(anim.progress); 
                                                },
                                                complete: function (anim) {
                                                    anime.remove(v.e);
                                                }

                                            }
                                            );


                                        },

                                        /*"onClick": (v={}) => {
                                           alert();
                                        }*/

                                    });

                                };
                                let mEff_0 = () => {
                                    //set..[Svg]..    
                                    mArtBox_evnt.add_svg({
                                        "w": `78vw`,
                                        "h": `130vh`,
                                        "e": mE,
                                        "x": 12,
                                        "y": -16,
                                        "src": `${m_asset_path}svg/_3.svg`
                                    }, {
                                        "onLoad": (v = {}) => {
                                            //anim
                                            let timeline = anime.timeline();
                                            timeline.add({
                                                targets: v.e,
                                                //opacity: [0.1, 1],
                                                scale: [0.0, 1],
                                                duration: 660,
                                                //easing: 'easeOutCirc',

                                                update: function (anim) {
                                                    //console.log(anim.progress); 
                                                },
                                                complete: function (anim) {
                                                    anime.remove(v.e);

                                                    //mEff_1..
                                                    mEff_1();

                                                }

                                            }
                                            );


                                        },

                                        /*"onClick": (v={}) => {
                                           alert();
                                        }*/

                                    });

                                };





                                //on_scr_start..
                                let on_scr_start = (mE) => {
                                    mE.style.opacity = `0`;
                                    //set..
                                    let timeline = anime.timeline();
                                    timeline.add({
                                        targets: mE,
                                        opacity: 1,
                                        //opacity: [0.1, 1],
                                        duration: 660,
                                        easing: 'easeOutCirc',
                                        update: function (anim) {
                                            //console.log(anim.progress); 
                                        },
                                        complete: function (anim) {
                                            anime.remove(mE);
                                            mEff_0();
                                        }

                                    }
                                    );

                                };


                                //set..[Svg]..  
                                mArtBox_evnt.add_svg({
                                    //"w": ``,
                                    //"h": ``,
                                    "e": mE,
                                    "src": `${m_asset_path}svg/_2.svg`
                                }, {
                                    "onLoad": (v = {}) => {
                                        on_scr_start(v.e);
                                    }
                                });






                            };
                            mSet(mScr);



                            /*--USAGE--*/


                        }
                    },

                ]
            },

            //set..
            "set": (k, v) => {
                let mList = mDta_main["screens"]["rndr"]["l"];
                let mIdx = mList.findIndex(eF => eF["key"] === k);
                if (mIdx == -1) {
                    throw `err: [k=${k}] is not avail..`;
                    return; //Stop
                }
                //all ok..
                mList[mIdx].set(k, v, mList[mIdx]);

            }

        }

    };

    //set..
    //mDiv.innerHTML = `Content`;
    //let my_elem_1 = mUtils.my_elem_1(mDiv); 


    //mStart..
    let mStart = (mE) => {

        //scr_2..
        let scr_2 = () => {
            mDta_main.screens.set(`scr_2`, {
                "e": mE, //Html-Element
                "value": {
                    //here you can assign your variable based on your requirements..

                }
            });
        };
        //scr_2();

        //set..
        mDta_main.screens.set(`scr_1`, {
            "e": mE,  //Html-Element
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
    mStart(mScene);





};




//mGameRendrer..
let mStart = () => {
    mGameRendrer({
        "meta": {},
        "data": {
            //add params based on content requirement
            "my_param_1": "",
            "my_param_2": "",

        }
    }, mE); //document.body [YOUR ELEMENT]

};


//load required libs..
let mLoadReqLibs = (cb = { "onLoad": () => { } }) => {
    import("../../third-party/anime-js/anime.js").then(v => {
        //anime
        window.anime = v.anime;
        cb.onLoad();
    }).catch(e => {
        console.log(e);
    });
};
mLoadReqLibs({
    "onLoad": () => {
        mStart();
    }
});
