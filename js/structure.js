//--Game Rendrer--
let mGameRendrer = (data = {}, mDOM) => {
    //create element..    
    let mDiv = document.createElement("div");
    mDOM.appendChild(mDiv);
    mDiv.style.position = 'relative';
    mDiv.style.width = '100%';
    mDiv.style.height = '100%';
    //your root element [----mDiv----]

    //-----do your code-----//
    //utils..
    let mUtils = {
        "my_elem_1": (mE) => {
            let mCard = document.createElement("div");
            if (typeof mE !== undefined) {
                mE.appendChild(mCard);
            }
            //set..
            mCard.style.width = '10vh';
            mCard.style.height = ' 20vh';
            mCard.style.backgroundColor = 'green';
            return mCard;
        },

        //svg_loader..
        "svg_loader": (p = {}) => {
            core_1mn['mSvg'].set(p);
        },

        //txt_loader..
        "txt_loader": (p = {}, cb = {}) => {
            let mEvents =
                core_1mn.mTxt.set(p,
                    cb,
                );
            return mEvents;
        },

        //btn_loader..
        "btn_loader": (p = {}) => {
            let mBtn = core_1mn['btn']['1'].set(p);
            //mBtn['btn']['hide'] ();
            //mBtn['btn']['show'] ();
            //mBtn['btn']['disable'] ();
            //mBtn['btn']['enable'] ();
            //mBtn['btn']['pbShow'] ("red");
            //mBtn['btn']['pbHide'] (); 
            return mBtn;
        }


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
                        "name": 'Screen 1',
                        "key": scr_1,
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
                            //set..
                            //mScr.innerHTML = thisItem["name"];

                            //set..
                            let mSet = (mE = document.body) => {
                                //do your code..
                                /*mE.innerHTML = thisItem["name"];
                                //set..
                                mE.style.width = "100%";
                                mE.style.height = "100%";
                                mE.style.backgroundColor = "green";*/


                                //set..[Svg]..
                                mUtils.svg_loader({
                                    "0": "assets/svgTest/game/game 8.1.svg",  //svg file name --OR-- <svg></svg>   --OR-- "my_folder/my_file.svg"
                                    //"1": "YOUR_UNIQUE_ID",
                                    "2": "100%", //2vh
                                    "3": "100%", //2vh
                                    "4": "", //"" => no-color --OR-- undefined => "auto-color-applied" --OR-- "rgba(my color)"
                                    "5": mE,  //HTML-ELEMENT
                                    //you can set and (reload) FIELD by (assigning) this func..
                                    //"reload": () => {},
                                    "cb": {
                                        "onLoad": (mCurrItem) => {
                                            //use (svg)
                                            //alert("onLoad");
                                        },
                                        "onInit": (mCurrItem) => {
                                            //This will trigger immediately..
                                        },
                                        "onError": () => {
                                            //alert("onError");
                                        },
                                        "onClick": (mCurrItem) => {
                                            //alert("onClick");
                                        }
                                    }
                                });


                                //set..[Text]..
                                let mT0_evnt = mUtils.txt_loader({
                                    "0": mE,  //HTMLElement
                                    "1": 'Word Velocity',  //txt
                                    "2": "2.9vh",  //fontSize
                                    "3": "#000",  //color
                                    "4": 0,  //pos hori [left, center, right]
                                    "5": 0,   //[".innerHTML", ".innerText"]
                                    //"6": grey, //onHoverColor
                                    "7": ``, //padding
                                },
                                    {
                                        "onClc": () => { },
                                        "onmouseover": () => { },
                                        "onmouseout": () => { },
                                    });
                                //set-position [Temporary-Solution]  [-Start-]
                                mT0_evnt["e"].style.position = absolute;
                                mT0_evnt["e"].style.top = '35vh';
                                mT0_evnt["e"].style.left = ' 43%';
                                //set-position [Temporary-Solution]  [-End-]




                                //set..[Btn]..
                                let mBtn_hldr0 = document.createElement("div");
                                mE.appendChild(mBtn_hldr0);
                                let mBtn0_evnt = mUtils.btn_loader({
                                    "e1": mBtn_hldr0,  //HTMLElement
                                    "w": "8vw",
                                    "posH": 1,
                                    "h": "4.2vh",
                                    "txt": {
                                        "0": "New Game",
                                        "1": "1.3vh"
                                    },
                                    //"ico": {"0": "sample.svg", "1": "1.3vh", "2": "1.3vh", "3": "rgba(255,255,255, 1.0)" },
                                    "cb": {
                                        "onLoad": function (data) {
                                            //let mBtn = data['btn'];
                                            //console.log(mBtn);
                                        },
                                        "onClick": function (data) {
                                            //alert(JSON.stringify(data));
                                            //console.log(data);
                                            //set..
                                            mSendCB(on_new_btn_clc, {});
                                        },
                                        "onClickD": function (data) {
                                            //alert(JSON.stringify(data));
                                            //console.log(data);

                                        }
                                    },
                                    //typ..
                                    "typ": 0,
                                    //variant..
                                    "vari": 0
                                });
                                //set-position [Temporary-Solution]  [-Start-]
                                mBtn_hldr0.style.position = 'absolute';
                                mBtn_hldr0.style.top = '45vh';
                                mBtn_hldr0.style.left = '45%';
                                //set-position [Temporary-Solution]  [-End-]







                            };
                            mSet(mScr);


                            /*--USAGE--*/


                        }
                    },

                    {
                        "name": 'Screen 2',
                        "key": scr_2,
                        "set": (k, v, thisItem) => {
                            console.log(thisItem);
                            console.log(v["value"]);
                            //--reset--// [START]
                            v["e"].innerHTML = ``; //reset
                            //--reset--// [END]


                            //set..
                            let mScr = document.createElement("div");
                            v["e"].appendChild(mScr);
                            //set..
                            //mScr.innerHTML = thisItem["name"];

                            //set..
                            let mSet = (mE = document.body) => {
                                //do your code..
                                /*mE.innerHTML = thisItem["name"];
                                //set..
                                mE.style.width = "100%";
                                mE.style.height = "100%";
                                mE.style.backgroundColor = "green";*/


                                //set..[Svg]..
                                mUtils.svg_loader({
                                    "0": "assets/svgTest/game/game 8.1.svg",  //svg file name --OR-- <svg></svg>   --OR-- "my_folder/my_file.svg"
                                    //"1": "YOUR_UNIQUE_ID",
                                    "2": "100%", //2vh
                                    "3": "100%", //2vh
                                    "4": "", //"" => no-color --OR-- undefined => "auto-color-applied" --OR-- "rgba(my color)"
                                    "5": mE,  //HTML-ELEMENT
                                    //you can set and (reload) FIELD by (assigning) this func..
                                    //"reload": () => {},
                                    "cb": {
                                        "onLoad": (mCurrItem) => {
                                            //use (svg)
                                            //alert("onLoad");
                                        },
                                        "onInit": (mCurrItem) => {
                                            //This will trigger immediately..
                                        },
                                        "onError": () => {
                                            //alert("onError");
                                        },
                                        "onClick": (mCurrItem) => {
                                            //alert("onClick");
                                        }
                                    }
                                });


                                //set..[Text]..
                                let mT0_evnt = mUtils.txt_loader({
                                    "0": mE,  //HTMLElement
                                    "1": 'Word Velocity',  //txt
                                    "2": "2.9vh",  //fontSize
                                    "3": "#000",  //color
                                    "4": 0,  //pos hori [left, center, right]
                                    "5": 0,   //[".innerHTML", ".innerText"]
                                    //"6": grey, //onHoverColor
                                    "7": ``, //padding
                                },
                                    {
                                        "onClc": () => { },
                                        "onmouseover": () => { },
                                        "onmouseout": () => { },
                                    });
                                //set-position [Temporary-Solution]  [-Start-]
                                mT0_evnt["e"].style.position = 'absolute';
                                mT0_evnt["e"].style.top = '35vh';
                                mT0_evnt["e"].style.left = '43%';
                                //set-position [Temporary-Solution]  [-End-]




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
    mDiv.innerHTML = Content;
    //let my_elem_1 = mUtils.my_elem_1(mDiv);


    //mStart..
    let mStart = (mE) => {

        //scr_2..
        let scr_2 = () => {
            mDta_main.screens.set(scr_2, {
                "e": mE, //Html-Element
                "value": {
                    //here you can assign your variable based on your requirements..

                }
            });
        };


        //set..
        mDta_main.screens.set('scr_1', {
            "e": mE,  //Html-Element
            "value": {
                //here you can assign your variable based on your requirements..

                //callback..
                "cb": {
                    "on_new_btn_clc": (p = {}) => {
                        scr_2();
                    },


                }

            }
        });



    };
    mStart(mDiv);



};
mGameRendrer({
    "meta": {},
    "data": {
        //add params based on content requirement
        "my_param_1": "",
        "my_param_2": "",

    }
}, mItem); //document.body [YOUR ELEMENT] 
return;