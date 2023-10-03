// Score and Round Play:--
let scoreRound1 = () => {
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
                v.e.remove();
                nextLevel();
            }
        }
    });


    // on_scr_end();

}

// Score and Round Play:--
let nextLevel = () => {
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
        }
    });

    let nextLevelBtn = () => {
        on_scr_end();
    }

}