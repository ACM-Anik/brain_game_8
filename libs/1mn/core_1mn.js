console.log("core_1mn.js [LOADED]");

if(location.hostname == "localhost"){
//url....(Local)
/*var url1_GVars = "http://localhost:82/"; //192.168.1.13
var url2_GVars = "http://localhost:2020/";
var url3_GVars = "http://localhost:82/";
var url4_GVars = "http://localhost:7070/api-php-src2/SKILLEE_ENGLISH/app.php/";
var url5_GVars = "http://localhost:2020/SKILLEE_ENGLISH/app?my=fddf";
*/
/*OLD
var url1_GVars = "http://localhost:7070/websites/mn_english/"; //192.168.1.13
var url2_GVars = "http://localhost:2020/";
var url3_GVars = "http://localhost/";
var url4_GVars = "http://localhost:7070/api-php-src2/SKILLEE_ENGLISH/app.php/";
*/

}else{
  
//url....(Prod)
//https://2b5d73d87da548.lhr.life/ (http://localhost/)
/*var tunnelUrl_GVars = "https://2b5d73d87da548.lhr.life"+"/"; 
var url1_GVars = tunnelUrl_GVars+""; 
var url2_GVars = tunnelUrl_GVars+"nodejs/";
var url3_GVars = tunnelUrl_GVars+"";
var url4_GVars = tunnelUrl_GVars+"api-php-src2/SKILLEE_ENGLISH/app.php/";
var url5_GVars = tunnelUrl_GVars+"nodejs/SKILLEE_ENGLISH/app?my=fddf";
*/

/*OLD
//https://682534557d5e78.lhrtunnel.link (http://localhost/)
var url1_GVars = "https://682534557d5e78.lhrtunnel.link/websites/mn_english/"; 
var url2_GVars = "https://682534557d5e78.lhrtunnel.link/nodejs/";
var url3_GVars = "https://682534557d5e78.lhrtunnel.link/";
var url4_GVars = "https://682534557d5e78.lhrtunnel.link/api-php-src2/SKILLEE_ENGLISH/app.php/";
*/
}

//path....
/*var assets_GVars = url1_GVars+"assets/";
var assets_bg_GVars = url1_GVars+"assets/bg/";
var assets_icons_GVars = url1_GVars+"assets/icons/";
var assets_sounds_GVars = url1_GVars+"assets/sounds/";*/



//****add files..
//config..
/*
METHOD-1
//--For Direct Use Only--[Only work with Single Project]//
//import { config_mn } from "../../mn/site8/mn_account/config_mn/index.js";
//nginx (conf).. also (required)..
location /sites/mn/site8/mn_account {
  #autoindex on;
  alias sites/mn/site8/mn_account;
}
*/
//METHOD-2
//--Already Loaded by [Project (init file)]--//
//console.log(config_mn);



//----------------------------Params Info-------------------//
/**
 * @xcode = [reserved keyword]  //It will allow developer to intergrate his code in our systems
  --USAGE-- {
               "html": `<div> </div>`,
               "css":  `<style> </style>`,
               "js":  `<script> </script>`,
               "dom": () => {return DOM;} || DOM, //Your DOM eg => document.createElement("div")
            }
*/

//------------------------Notes (Avoid doing these things)----------------------//
/**
 * https://stackoverflow.com/questions/59637239/uncaught-domexception-failed-to-execute-queryselector-on-document-is-no
 * @DO_NOT_SELECT_ID_WITH = ["#","1"..] because some charaters is not Supported  instead use "document.querySelector('[id="foo$bar"] .item')"
 * eg => Uncaught (in promise) DOMException: Failed to execute 'querySelector' on 'Document': '#3Tmy8Ai8A5Z_456 .luckysheet-wa-editor' is not a valid selector.
*/
//--------------------------Javascript (DataType Info)---------------------------//
/**
 * @MUST_READ
 * https://www.w3schools.com/js/js_typeof.asp
 */
 

 

//CSS..
let core_1mn_CSS = {
  "set": function(){
     var css = `
     /*Global CSS (-Gss)*/ 
     :root {
      --box: #1e90ff;
    }
    .scrollBar-Gss { 
    
        text-align: center;
    
    }
    
    
    /*********Scroll Bar********(Start)/
    /* width */
    ::-webkit-scrollbar {
        width: 0.3vw;
      }
      
      /* Track */
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 0.5vh grey; 
        border-radius: 1vh;
      }
       
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #9b9a9a; 
        border-radius: 1vh;
      }
      
      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #555555; 
      }
    
    /*********Scroll Bar********(End)*/
    
    
    
    /****anim******(Start)*/
    @keyframes wave-hori {
      0% {
          background-position: -468px 0;
      }
       100% {
          background-position: 468px 0;
      }
    }
    
    /*https://developer.mozilla.org/en-US/docs/Web/CSS/animation*/
    @keyframes box-left-to-right {
      0%   {background: var(--box); left: 0%; top: 0px;}
      /*25%  {background: yellow; left: 200px; top: 0px;}
      50%  {background: blue; left: 300px; top: 0px;}
      75%  {background: green; left: 400px; top: 0px;}*/
      100% {background: var(--box); left: 60%; top: 0px;}
    }
    /****anim******(End)*/
     
     `;
     var mID = "global-css"; 
     if (document.getElementById(mID)==null) {
      var mE_css = document.createElement("style");
      mE_css.id = "global-css";
      mE_css.innerHTML = css;
      document.head.appendChild(mE_css);
     }
  }
};
core_1mn_CSS.set();



//set.......
let core_1mn_LIB = () => {
//mLIB..
let mLIB = {
  "mUtils": {

    //openssl..
    "openssl": {
      //Asymmetric Encryption
      "asym_encrypt": {
          //https://www.npmjs.com/package/jsencrypt (Client-Side)
          //add credentials info here..
          "credInfo": {
              "PRIVATE_KEY": null, //add your private key here..
              "PUBLIC_KEY": null, ////add your public key here..
          },

          //encrypt data..
          "encrypt": {
              "set": function(mTxt){
                  //Encrypt Data..
                  //set vars..
                  var credInfo = core_1mn['mUtils']['openssl']['asym_encrypt']['credInfo'];
                  //var mInputDta = "my name is 1mn.io";
                  var mInputDta = mTxt;
                  // Encrypt with the public key... 
                  var encrypt = new JSEncrypt();
                  encrypt.setPublicKey(credInfo['PUBLIC_KEY']);
                  var encrypted = encrypt.encrypt(mInputDta);
                  console.log('encrypted: ', encrypted);
                  return encrypted;

                  /*USAGE
                  core_1mn['mUtils']['openssl']['asym_encrypt']['encrypt']['set']();
                  */
              }
          },

          //decrypt data..
          "decrypt": {
              "set": function(mTxt){
                  //Decrypt Data..
                  //set vars..
                  var mRes = {
                      "isErr": false,
                      "msg": "",
                      "data": null
                  };
                  var credInfo = core_1mn['mUtils']['openssl']['asym_encrypt']['credInfo'];
                  //var mInputDta = "QKHQM7sRbByjFgXqq5CRXCe1cO0lmTvyFrFHZO1nZj6Q/GvU56XivREEOPruF+9c7j6Qu5rlJ8uelanNh1ElWf7fgSmwDskLecwkIaNr4V/bhfDiKN5cwg7807YwCBkZ6R4Q95jLeV0LBknthMD9HzdyR0LeinKTgYTnIPXA4XU=";
                  var mInputDta = mTxt; 
                  try {
                      // Decrypt with the public key...
                      var decrypt = new JSEncrypt();
                      decrypt.setPrivateKey(credInfo['PRIVATE_KEY']);
                      var decrypted = decrypt.decrypt(mInputDta);
                      console.log('decrypted: ', decrypted);
                      mRes['data'] = decrypted;
                  } catch (error) {
                      //error..
                      //console.log(error);
                      mRes['isErr']=true;
                      mRes['msg']="error: unable to decrypt";
                  }
                  return mRes;

                  /*USAGE
                  core_1mn['mUtils']['openssl']['asym_encrypt']['decrypt']['set']();
                  */

              }
          },

      }
    },

    //base64..
    "base64": {
      //https://www.digitalocean.com/community/tutorials/how-to-encode-and-decode-strings-with-base64-in-javascript
      "encode": {
          "set": function(mGetParams){
              var mParams = mGetParams;
              var mTxt = mParams['txt']; //add normal TEXT
              //set....
              // The original string
              let originalString = mTxt; //"1MN.IO";
              // Encode the String
              let base64String = btoa(originalString);
              //console.log("The encoded base64 string is:", base64String);
              return base64String;
          }
      },
      "decode": {
          "set": function(mGetParams={"txt":""}){
              var mParams = mGetParams;
              var mTxt = mParams['txt']; //add encoded TEXT
              //set....
              // The base64 encoded input string
              let base64string = mTxt;//"R2Vla3Nmb3JHZWVrcw==";
              // Decode the Buffer as string
              let decodedString = atob(base64string);
              //console.log("The decoded string:", decodedString);
              return decodedString;
          }
      },
    },

    //timer..
    "timer": {
      "up": {
        "set": (mP={
          "fmt": 0,   //["hh:mm:ss"]
        }, mCb={
          "onDur": (mP={
            "0": `` 
          }) => {}
        }) => {
          //set vars..
          let mRes = { 
            "evnt": {
              "pause": () => {
                clearInterval(mDta["gVars"]["inval"]);
              },
              "reset": () => { 
                clearInterval(mDta["gVars"]["inval"]);
                mDta["gVars"]["sec"]=-1;
                //send cb..
                mCb.onDur({
                  "0": `00:00:00`
                });
              },
              "resume": () => {
                mRes["evnt"].start();
              },
              "start": () => {
                mDta["rndr"].set();
              },
            }
          };  
          let mDta = {
            "gVars": {
              "inval": null,
              "sec": -1
            },
            "rndr": {
              "set": () => {
                let pad = (val) => { 
                  return val > 9 ? val : "0" + val;
                }
                mDta["gVars"]["inval"] = setInterval(function () {
                  let h = pad(parseInt(mDta["gVars"]["sec"] / 3600, 10));
                  let m = pad(parseInt(mDta["gVars"]["sec"] / 60, 10) % 60);
                  let s = pad(++mDta["gVars"]["sec"] % 60);
                  //send cb..
                  mCb.onDur({
                    "0": `${h}:${m}:${s}`
                  });
                }, 1000);

              }
            }
          };


          //events..
          let mEvents = mRes["evnt"];
          return mEvents;

          /*--Usage--
           let mTimer_RES = core_1mn["mUtils"].timer.up.set({
              "fmt": 0,  //[0=>"00:00:00", ]
            },
            {
              "onDur": (mP={}) => {
                let mTime = mP["0"];
                console.log(mTime);
              }
            });
            mTimer_RES.start();
            mTimer_RES.reset();
            setTimeout(() => {
              mTimer_RES.pause();
            }, 2000);
            setTimeout(() => {
              mTimer_RES.resume();
            }, 3000);
            setTimeout(() => {
              mTimer_RES.pause();
            }, 10000);
          
          */

        }
      },
      "down": {
        "set": (mP={
          "fmt": 0,   //["hh:mm:ss", "ss"]
          "sec": 15,  //seconds..
        }, mCb={
          "onDur": (mP={
            "0": `` 
          }) => {}
        }) => {
          //set vars..
          let mRes = { 
            "evnt": {
              "pause": () => {
                clearInterval(mDta["gVars"]["inval"]);
              },
              "reset": () => { 
                clearInterval(mDta["gVars"]["inval"]);
                //mDta["gVars"]["sec"]=-1;
                /*//send cb..
                mCb.onDur({
                  "0": `00:00:00`
                });*/
                mDta["gVars"]["sec"]=mP["sec"];
                if (mP["fmt"]==1) {
                  //send cb..
                  mCb.onDur({
                    "0": `${mDta["gVars"]["sec"]}`
                  }); 
                }
                
              },
              "resume": () => {
                mRes["evnt"].start();
              },
              "start": () => {
                mDta["rndr"].set();
              },
            }
          };  
          let mDta = {
            "gVars": {
              "inval": null,
              "sec": mP["sec"],//-1
            },
            "rndr": {
              "set": () => {
                let pad = (val) => { 
                  return val > 9 ? val : "0" + val;
                }
                mDta["gVars"]["inval"] = setInterval(function () {
                  let h = pad(parseInt(mDta["gVars"]["sec"] / 3600, 10));
                  let m = pad(parseInt(mDta["gVars"]["sec"] / 60, 10) % 60);
                  let s = pad(--mDta["gVars"]["sec"] % 60);
                  //send cb..
                  /*if (mP["fmt"]==0) {
                    mCb.onDur({
                      "0": `${h}:${m}:${s}`
                    });
                  }*/
                  if (mP["fmt"]==1) {
                    mCb.onDur({
                      "0": `${s}`
                    });
                  }

                  //check..
                  if (mDta["gVars"]["sec"]>0) {
                  }else {
                    //stop..
                    mRes.evnt.pause();
                  }

                }, 1000);

              }
            }
          };


          //events..
          let mEvents = mRes["evnt"];
          return mEvents;

          /*--Usage--
           let mTimer_RES = core_1mn["mUtils"].timer.down.set({
              "fmt": 1,  //["hh:mm:ss", "ss"]
              "sec": 15,  //seconds..
            },
            {
              "onDur": (mP={}) => {
                let mTime = mP["0"];
                console.log(mTime);
              }
            });
            mTimer_RES.start();
            mTimer_RES.reset();
            setTimeout(() => {
              mTimer_RES.pause();
            }, 2000);
            setTimeout(() => {
              mTimer_RES.resume();
            }, 3000);
            setTimeout(() => {
              mTimer_RES.pause();
            }, 10000);
          
          */

        }
      }
    },

    //media..
    "media": { 
      "stream": {
        "set": (
          mP={
            "conf": {  //getUserMedia (constraints)
              //audio: true,
              //video: true,
            },
            "rec": {
              "out": {
                "typ": `` //audio/ogg; codecs=opus
              }
            }
          },
          mCb={
          "onLoad": (mP={}, 
          mCb={}, 
          mEvnt={}) => {},
          
        }) => {
          //https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API
          //set vars..
          let mTimer_RES = core_1mn["mUtils"].timer.up.set({
            "fmt": 0,
          },
          {
            "onDur": (mP={}) => {
              let mTime = mP["0"];
              //console.log(mTime);
              mRes["cb"].onRecDur(mP);
            }
          });

          //set vars..
          let mRes = {
            "p": {
              "stream": null
            },
            "cb": {
              "onRecStop": (mP={},) => {},
              "onRecDur": (mP={}) => {},
              "onRecStart": (mP={}) => {},
              "onRecPause": (mP={}) => {},
              "onRecResume": (mP={}) => {},

              "onRecOut": (mP={
                "url": ``,
                "blob": null
              }) => {},

            },
            "evnt": {
              "start_record": () => {
                if (mIsReady==false) {
                   return; //stop..
                }
                //all ok..
                const mediaRecorder = mVar["mediaRecorder"];
                mediaRecorder.start();
                console.log(mediaRecorder.state);
                mediaRecorder.ondataavailable = (e) => {
                  mVar["chunks"].push(e.data);
                };
                mediaRecorder.onstart = () => {
                  console.log("recorder started..");
                  mTimer_RES.start();
                  mRes["cb"].onRecStart();
                };
                mediaRecorder.onpause = () => {
                  console.log("recorder paused..");
                  mTimer_RES.pause();
                  mRes["cb"].onRecPause();
                };
                mediaRecorder.onresume = () => {
                  console.log("recorder resumed..");
                  mTimer_RES.resume();
                  mRes["cb"].onRecResume();
                };
                mediaRecorder.onstop = (e) => {
                  console.log("recorder stopped");
                  mTimer_RES.pause();
                  //set..
                  //send cb..
                  mRes["cb"].onRecStop({});
                };
              },
              "stop_record": () => {
                if (mIsReady==false) {
                   return; //stop..
                }
                //all ok..
                const mediaRecorder = mVar["mediaRecorder"];
                mediaRecorder.stop();
                console.log(mediaRecorder.state);
              },
              "pause_record": () => {
                if (mIsReady==false) {
                   return; //stop..
                }
                //all ok..
                const mediaRecorder = mVar["mediaRecorder"];
                mediaRecorder.pause();
                console.log(mediaRecorder.state);
              }, 
              "resume_record": () => {
                if (mIsReady==false) {
                   return; //stop..
                }
                //all ok..
                const mediaRecorder = mVar["mediaRecorder"];
                mediaRecorder.resume();
                console.log(mediaRecorder.state);
              },
              "reset_record": () => {
                if (mIsReady==false) {
                   return; //stop..
                }
                //all ok..
                const mediaRecorder = mVar["mediaRecorder"];
                mediaRecorder.pause();
                mVar["chunks"] = []; //reset
                mTimer_RES.reset();
                console.log(mediaRecorder.state);
              },
              "out_record": () => {
                if (mIsReady==false) {
                   return; //stop..
                }
                //all ok..
                const mediaRecorder = mVar["mediaRecorder"];
                mediaRecorder.pause();
                console.log(mediaRecorder.state);
                //set..
                mVar.getRecOut();
              },


            }
          };

          //data..
          let mVar = {
            "mediaRecorder": null,
            "chunks": [],
            "getRecOut": () => {
              const mBlob = new Blob(mVar["chunks"],
              { 
                type: mP["rec"]["out"]["typ"] //`audio/ogg; codecs=opus` 
              }
              );

              mVar["chunks"] = []; //reset
              const mURL = window.URL.createObjectURL(mBlob);
              //audio.src = mURL;
              //send cb..
              mRes["cb"].onRecOut({
                "url": mURL,
                "blob": mBlob
              });
            }
          };
          
          //set vars..
          let mIsReady = false;
          //set..
          if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            console.log("getUserMedia supported.");
            navigator.mediaDevices
              .getUserMedia(
                // constraints - only audio needed for this app
                mP["conf"]
              )
          
              // Success callback
              .then((stream) => {
                mIsReady=true;
                mVar["mediaRecorder"] = new MediaRecorder(stream);
                mRes["p"]["stream"] = stream;

                //send cb..
                mCb.onLoad(mRes["p"], mRes["cb"], mRes["evnt"]);
              })
          
              // Error callback
              .catch((err) => {
                console.error(`The following getUserMedia error occurred: ${err}`);
              });
          } else {
            console.log("getUserMedia not supported on your browser!");
          }

          /*
          --USAGE--
          //stream..
                    core_1mn["mUtils"]["media"]["stream"].set({
                      "conf": {
                        "audio": true
                      },
                      "rec": {
                        "out": {
                          "typ": `` //audio/ogg; codecs=opus
                        }
                      }
                    },
                    {
                      "onLoad": (mP={}, mCb={}, mEvnt={}) => {
                         console.log(mP);
                         console.log(`stream is ready!`);
                         //cb..
                         mCb["onRecStop"] = (mP={}) => {
                           console.log(mP);
                         };
                         mCb["onRecOut"] = (mP={}) => {
                           console.log(mP);
                         };
                         mCb["onRecStart"] = (mP={}) => {
                           console.log(mP);
                         };
                         mCb["onRecPause"] = (mP={}) => {
                           console.log(mP);
                         };  
                         mCb["onRecResume"] = (mP={}) => {
                           console.log(mP);
                         }; 

                         mCb["onRecDur"] = (mP={}) => {
                          let mTime = mP["0"];
                          console.log(mTime);
                         };

                         //events..
                         mEvnt.start_record();
                         //mEvnt.pause_record();
                         //mEvnt.reset_record();
                         //mEvnt.out_record();
                         setTimeout(() => {
                         mEvnt.stop_record();
                         }, 5000);

                      }
                    });

          */


        },

      }
    },

    //audio..
    "aud": {
      "set": (mE, 
        mP={
          "media": {
            "val": null,
            "typ": 0,   //[src, srcObject]
          }
        },
        mCb={
        "onLoad": (mP={}, 
        mCb={"onPlay": () => {}}, 
        mEvnt={"play": () => {}}) => {},
        
      }) => {
        let mAud = document.createElement("audio");
        mE.appendChild(mAud);

        if (mP.hasOwnProperty("media")) {
            let mVal = mP["media"]["val"];
            if (mP["media"]["typ"]==0) {
              mAud.src = mVal;  //https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/src
            }
            if (mP["media"]["typ"]==1) {
              mAud.srcObject = mVal;  //https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject
            }
        } 

        //set vars..
        let mRes = {
          "p": {},
          "cb": {
            "onPlay": () => {},
            "onEnd": () => {},
          },
          "evnt": {
            "play": () => {
              if (mIsReady==false) {
                 return; //stop..
              }
              //all ok..
              mAud.play();
            }
          }
        };
        
        //set vars..
        let mIsReady = false;
        //events..
        mAud.onloadeddata = () => {
          mIsReady=true;
          //send cb..
          mCb.onLoad(mRes["p"], mRes["cb"], mRes["evnt"]);
        };
        mAud.onplay = () => {
          //send cb..
          mRes["cb"].onPlay();
        };
        mAud.onended = () => {
          //send cb..
          mRes["cb"].onEnd();
        };



        /*
        --Usage--
         core_1mn["mUtils"]["aud"].set(mC,
                    {
                      "media": {
                        "val": null,
                        "typ": 0,   //[src, srcObject]
                      }
                    },
                     { 
                      "onLoad": (mP={}, mCb={}, mEnvt={}) => {
                        //cb..
                        mCb.onPlay = () => {
                          mIco1.style.display = `none`;
                          mIco2.style.display = `block`;
                        };
                        mCb.onEnd = () => {
                          mIco2.style.display = `none`;
                          mIco1.style.display = `block`;
                        };
                        
                        //mC..
                        mC.onclick = () => {
                        mEnvt.play();
                        };

                      }

                  });
        */



      },
    },


    //draggable..
    "draggable": {
      //https://stackoverflow.com/questions/24050738/javascript-how-to-dynamically-move-div-by-clicking-and-dragging
      "set": (mP={
        "e": HTMLElement
      }, 
      cb={
        "onMove": (mP={
          "x": 0,
          "y": 0,
          "e": HTMLElement
        },
        ) => {},
        "onUp": (mP={ "e": HTMLElement}) => {}

      },
      mEnvt={
        "resetPos": () => {}
      }
      ) => {
        //set vars..
        let mE = mP["e"];
        //set..
        let mSet = (mE,cb,mEnvt) => {
          /*const d = document.getElementsByClassName("draggable");
          for (let i = 0; i < d.length; i++) {
            d[i].style.position = "relative";
          }*/
          mE.setAttribute("draggy", "true");
          //mE.style.position = "relative"; 

          function filter(e) {
            let target = e.target;
            /*if (!target.classList.contains("draggable")) {
              return;
            }*/ 

            if (e.target.hasAttribute("draggy")) {
              target.style.position = "absolute";
            }


            //set..
            target.moving = true;
            //NOTICE THIS 👇 Check if Mouse events exist on users' device
            if (e.clientX) {
              target.oldX = e.clientX; // If they exist then use Mouse input
              target.oldY = e.clientY;
            } else {
              target.oldX = e.touches[0].clientX; // Otherwise use touch input
              target.oldY = e.touches[0].clientY;
            }
            //NOTICE THIS 👆 Since there can be multiple touches, you need to mention which touch to look for, we are using the first touch only in this case
            target.oldLeft = window.getComputedStyle(target).getPropertyValue('left').split('px')[0] * 1;
            target.oldTop = window.getComputedStyle(target).getPropertyValue('top').split('px')[0] * 1;
            document.onmousemove = dr;
            //NOTICE THIS 👇
            document.ontouchmove = dr;
            //NOTICE THIS 👆
            function dr(event) {
              //check..
              if (e.target.hasAttribute("draggy")==false) {
                 return; //STOP
              }
              //set..
              event.preventDefault();
              if (!target.moving) {
                return;
              }

              //set..
              e.target.style.position = "absolute";
              console.log(`dr`);


              //NOTICE THIS 👇
              if (event.clientX) {
                target.distX = event.clientX - target.oldX;
                target.distY = event.clientY - target.oldY;
              } else {
                target.distX = event.touches[0].clientX - target.oldX;
                target.distY = event.touches[0].clientY - target.oldY;
              }

              //set..
              let mX = target.oldLeft + target.distX;
              let mY = target.oldTop + target.distY;

              //NOTICE THIS 👆
              target.style.left = mX + "px";
              target.style.top = mY + "px";


              //send cb..
              if (cb.hasOwnProperty("onMove")) {
                if (isNaN(mX)||isNaN(mY)) {
                  return;
                }
                //all ok..
                cb.onMove({
                  "x": mX,
                  "y": mY,
                  "e": e.target
                });
              }

            }
            function endDrag() {
              //check..
              if (e.target.hasAttribute("draggy")==false) {
                return; //STOP
              }
              console.log(`endDrag`);
              //check & set..
              e.target.style.position = "";

              //set..
              target.moving = false;
              //send cb..
              if (cb.hasOwnProperty("onUp")) {
                cb.onUp({
                  "e": e.target
                });
              }

            }
            target.onmouseup = endDrag;
            //NOTICE THIS 👇
            target.ontouchend = endDrag;
            //NOTICE THIS 👆


            //--events--//
            if (mEnvt.hasOwnProperty("resetPos")) {
              mEnvt["resetPos"] = () => {
                target.style.left = "";
                target.style.top = "";
                target.style.position = "";

              }
            } 


          }
          document.onmousedown = filter;
          //NOTICE THIS 👇
          document.ontouchstart = filter;
          //NOTICE THIS 👆

          

        };
        mSet(mE,cb,mEnvt);
        /*
        --USAGE--
       //draggable..
       let mEvnt = {
        "resetPos": () => {}
      };
      core_1mn["mUtils"].draggable.set({
        "e": mE,
      },
      {
        "onMove": (mP={}) => {
          console.log(mP);
          //set..
          //move..
          mUtils.move(mP["e"],`onMove`);
        },
        "onUp": (mP={}) => {
          console.log(`onUp`);
          mUtils.reset(mP["e"]);
          mEvnt.resetPos();
          //move..
          mUtils.move(mP["e"],`onUp`);
        }
      },
      mEvnt);
      */

      }
    },


    //eventListener..
    "eventListener": {
      "set": () => { 
       //mEvents..
       let mEvents = {
        "l": [],
        "add": (mP={"name":``}, cb=()=>{}) => {
            //store..
            mEvents["l"].push({
                "name": mP["name"],
                "cb": cb
            });
        },
        "exec": (mP={"name":``}, data={}) => {
            let mV = mEvents;
            let mLoop = (a, data) => {
                //gen..
                for (let i = 0; i < a.length; i++) {
                    const e = a[i];
                    //set..
                    e.cb(data);
                }  
            };
            mLoop(mV["l"].filter(eF => eF["name"]==mP["name"]), data);
        }
       };
       return mEvents;

       /*
       --USAGE--
        //send listner..
        let eventListener = core_1mn.mUtils.eventListener.set();
        eventListener.exec({"name":`oninput`}, {});

        //listen..
        eventListener.add({"name":`oninput`}, (data) => {
        console.warn(`--1`);
        });
        eventListener.add({"name":`oninput`}, (data) => {
        console.warn(`--2`);
        });

       */

      }
    },


    //json..
    "json": {
      //https://extendsclass.com/json-schema-validator.html
      "set": () => {
        let myCodeMirrorSCHEMA = null;
        let myCodeMirrorJSON = null;
        // schemas = null;
        // ajvs = null;
        //
        // randexp v0.4.6
        // Create random strings that match a given regular expression.
        //
        // Copyright (C) 2017 by fent (https://github.com/fent)
        // MIT License
        //
        !function () { var e = function () { return function e(t, n, r) { function o(s, i) { if (!n[s]) { if (!t[s]) { var u = "function" == typeof require && require; if (!i && u) return u(s, !0); if (a) return a(s, !0); var p = new Error("Cannot find module '" + s + "'"); throw p.code = "MODULE_NOT_FOUND", p } var h = n[s] = { exports: {} }; t[s][0].call(h.exports, function (e) { var n = t[s][1][e]; return o(n || e) }, h, h.exports, e, t, n, r) } return n[s].exports } for (var a = "function" == typeof require && require, s = 0; s < r.length; s++)o(r[s]); return o }({ 1: [function (e, t, n) { function r(e) { return e + (97 <= e && e <= 122 ? -32 : 65 <= e && e <= 90 ? 32 : 0) } function o() { return !this.randInt(0, 1) } function a(e) { return e instanceof h ? e.index(this.randInt(0, e.length - 1)) : e[this.randInt(0, e.length - 1)] } function s(e) { if (e.type === p.types.CHAR) return new h(e.value); if (e.type === p.types.RANGE) return new h(e.from, e.to); for (var t = new h, n = 0; n < e.set.length; n++) { var o = s.call(this, e.set[n]); if (t.add(o), this.ignoreCase) for (var a = 0; a < o.length; a++) { var i = o.index(a), u = r(i); i !== u && t.add(u) } } return e.not ? this.defaultRange.clone().subtract(t) : t } function i(e, t) { "number" == typeof t.max && (e.max = t.max), t.defaultRange instanceof h && (e.defaultRange = t.defaultRange), "function" == typeof t.randInt && (e.randInt = t.randInt) } function u(e, t) { var n, i, p, h, c; switch (e.type) { case l.ROOT: case l.GROUP: if (e.followedBy || e.notFollowedBy) return ""; for (e.remember && void 0 === e.groupNumber && (e.groupNumber = t.push(null) - 1), i = "", h = 0, c = (n = e.options ? a.call(this, e.options) : e.stack).length; h < c; h++)i += u.call(this, n[h], t); return e.remember && (t[e.groupNumber] = i), i; case l.POSITION: return ""; case l.SET: var f = s.call(this, e); return f.length ? String.fromCharCode(a.call(this, f)) : ""; case l.REPETITION: for (p = this.randInt(e.min, e.max === 1 / 0 ? e.min + this.max : e.max), i = "", h = 0; h < p; h++)i += u.call(this, e.value, t); return i; case l.REFERENCE: return t[e.value - 1] || ""; case l.CHAR: var g = this.ignoreCase && o.call(this) ? r(e.value) : e.value; return String.fromCharCode(g) } } var p = e("ret"), h = e("discontinuous-range"), l = p.types, c = t.exports = function (e, t) { if (this.defaultRange = this.defaultRange.clone(), e instanceof RegExp) this.ignoreCase = e.ignoreCase, this.multiline = e.multiline, i(this, e), e = e.source; else { if ("string" != typeof e) throw new Error("Expected a regexp or string"); this.ignoreCase = t && -1 !== t.indexOf("i"), this.multiline = t && -1 !== t.indexOf("m") } this.tokens = p(e) }; c.prototype.max = 100, c.prototype.gen = function () { return u.call(this, this.tokens, []) }, c.randexp = function (e, t) { var n; return void 0 === e._randexp ? (n = new c(e, t), e._randexp = n) : n = e._randexp, i(n, e), n.gen() }, c.sugar = function () { RegExp.prototype.gen = function () { return c.randexp(this) } }, c.prototype.defaultRange = new h(32, 126), c.prototype.randInt = function (e, t) { return e + Math.floor(Math.random() * (1 + t - e)) } }, { "discontinuous-range": 2, ret: 3 }], 2: [function (e, t, n) { function r(e, t) { this.low = e, this.high = t, this.length = 1 + t - e } function o(e, t) { if (!(this instanceof o)) return new o(e, t); this.ranges = [], this.length = 0, void 0 !== e && this.add(e, t) } function a(e) { e.length = e.ranges.reduce(function (e, t) { return e + t.length }, 0) } r.prototype.overlaps = function (e) { return !(this.high < e.low || this.low > e.high) }, r.prototype.touches = function (e) { return !(this.high + 1 < e.low || this.low - 1 > e.high) }, r.prototype.add = function (e) { return this.touches(e) && new r(Math.min(this.low, e.low), Math.max(this.high, e.high)) }, r.prototype.subtract = function (e) { return !!this.overlaps(e) && (e.low <= this.low && e.high >= this.high ? [] : e.low > this.low && e.high < this.high ? [new r(this.low, e.low - 1), new r(e.high + 1, this.high)] : e.low <= this.low ? [new r(e.high + 1, this.high)] : [new r(this.low, e.low - 1)]) }, r.prototype.toString = function () { return this.low == this.high ? this.low.toString() : this.low + "-" + this.high }, r.prototype.clone = function () { return new r(this.low, this.high) }, o.prototype.add = function (e, t) { function n(e) { for (var t = [], n = 0; n < s.ranges.length && !e.touches(s.ranges[n]);)t.push(s.ranges[n].clone()), n++; for (; n < s.ranges.length && e.touches(s.ranges[n]);)e = e.add(s.ranges[n]), n++; for (t.push(e); n < s.ranges.length;)t.push(s.ranges[n].clone()), n++; s.ranges = t, a(s) } var s = this; return e instanceof o ? e.ranges.forEach(n) : e instanceof r ? n(e) : (void 0 === t && (t = e), n(new r(e, t))), this }, o.prototype.subtract = function (e, t) { function n(e) { for (var t = [], n = 0; n < s.ranges.length && !e.overlaps(s.ranges[n]);)t.push(s.ranges[n].clone()), n++; for (; n < s.ranges.length && e.overlaps(s.ranges[n]);)t = t.concat(s.ranges[n].subtract(e)), n++; for (; n < s.ranges.length;)t.push(s.ranges[n].clone()), n++; s.ranges = t, a(s) } var s = this; return e instanceof o ? e.ranges.forEach(n) : e instanceof r ? n(e) : (void 0 === t && (t = e), n(new r(e, t))), this }, o.prototype.index = function (e) { for (var t = 0; t < this.ranges.length && this.ranges[t].length <= e;)e -= this.ranges[t].length, t++; return t >= this.ranges.length ? null : this.ranges[t].low + e }, o.prototype.toString = function () { return "[ " + this.ranges.join(", ") + " ]" }, o.prototype.clone = function () { return new o(this) }, t.exports = o }, {}], 3: [function (e, t, n) { var r = e("./util"), o = e("./types"), a = e("./sets"), s = e("./positions"); t.exports = function (e) { var t, n, i = 0, u = { type: o.ROOT, stack: [] }, p = u, h = u.stack, l = [], c = function (t) { r.error(e, "Nothing to repeat at column " + (t - 1)) }, f = r.strToChars(e); for (t = f.length; i < t;)switch (n = f[i++]) { case "\\": switch (n = f[i++]) { case "b": h.push(s.wordBoundary()); break; case "B": h.push(s.nonWordBoundary()); break; case "w": h.push(a.words()); break; case "W": h.push(a.notWords()); break; case "d": h.push(a.ints()); break; case "D": h.push(a.notInts()); break; case "s": h.push(a.whitespace()); break; case "S": h.push(a.notWhitespace()); break; default: /\d/.test(n) ? h.push({ type: o.REFERENCE, value: parseInt(n, 10) }) : h.push({ type: o.CHAR, value: n.charCodeAt(0) }) }break; case "^": h.push(s.begin()); break; case "$": h.push(s.end()); break; case "[": var g; "^" === f[i] ? (g = !0, i++) : g = !1; var y = r.tokenizeClass(f.slice(i), e); i += y[1], h.push({ type: o.SET, set: y[0], not: g }); break; case ".": h.push(a.anyChar()); break; case "(": var d = { type: o.GROUP, stack: [], remember: !0 }; "?" === (n = f[i]) && (n = f[i + 1], i += 2, "=" === n ? d.followedBy = !0 : "!" === n ? d.notFollowedBy = !0 : ":" !== n && r.error(e, "Invalid group, character '" + n + "' after '?' at column " + (i - 1)), d.remember = !1), h.push(d), l.push(p), p = d, h = d.stack; break; case ")": 0 === l.length && r.error(e, "Unmatched ) at column " + (i - 1)), h = (p = l.pop()).options ? p.options[p.options.length - 1] : p.stack; break; case "|": p.options || (p.options = [p.stack], delete p.stack); var v = []; p.options.push(v), h = v; break; case "{": var R, C, w = /^(\d+)(,(\d+)?)?\}/.exec(f.slice(i)); null !== w ? (0 === h.length && c(i), R = parseInt(w[1], 10), C = w[2] ? w[3] ? parseInt(w[3], 10) : 1 / 0 : R, i += w[0].length, h.push({ type: o.REPETITION, min: R, max: C, value: h.pop() })) : h.push({ type: o.CHAR, value: 123 }); break; case "?": 0 === h.length && c(i), h.push({ type: o.REPETITION, min: 0, max: 1, value: h.pop() }); break; case "+": 0 === h.length && c(i), h.push({ type: o.REPETITION, min: 1, max: 1 / 0, value: h.pop() }); break; case "*": 0 === h.length && c(i), h.push({ type: o.REPETITION, min: 0, max: 1 / 0, value: h.pop() }); break; default: h.push({ type: o.CHAR, value: n.charCodeAt(0) }) }return 0 !== l.length && r.error(e, "Unterminated group"), u }, t.exports.types = o }, { "./positions": 4, "./sets": 5, "./types": 6, "./util": 7 }], 4: [function (e, t, n) { var r = e("./types"); n.wordBoundary = function () { return { type: r.POSITION, value: "b" } }, n.nonWordBoundary = function () { return { type: r.POSITION, value: "B" } }, n.begin = function () { return { type: r.POSITION, value: "^" } }, n.end = function () { return { type: r.POSITION, value: "$" } } }, { "./types": 6 }], 5: [function (e, t, n) { var r = e("./types"), o = function () { return [{ type: r.RANGE, from: 48, to: 57 }] }, a = function () { return [{ type: r.CHAR, value: 95 }, { type: r.RANGE, from: 97, to: 122 }, { type: r.RANGE, from: 65, to: 90 }].concat(o()) }, s = function () { return [{ type: r.CHAR, value: 9 }, { type: r.CHAR, value: 10 }, { type: r.CHAR, value: 11 }, { type: r.CHAR, value: 12 }, { type: r.CHAR, value: 13 }, { type: r.CHAR, value: 32 }, { type: r.CHAR, value: 160 }, { type: r.CHAR, value: 5760 }, { type: r.CHAR, value: 6158 }, { type: r.CHAR, value: 8192 }, { type: r.CHAR, value: 8193 }, { type: r.CHAR, value: 8194 }, { type: r.CHAR, value: 8195 }, { type: r.CHAR, value: 8196 }, { type: r.CHAR, value: 8197 }, { type: r.CHAR, value: 8198 }, { type: r.CHAR, value: 8199 }, { type: r.CHAR, value: 8200 }, { type: r.CHAR, value: 8201 }, { type: r.CHAR, value: 8202 }, { type: r.CHAR, value: 8232 }, { type: r.CHAR, value: 8233 }, { type: r.CHAR, value: 8239 }, { type: r.CHAR, value: 8287 }, { type: r.CHAR, value: 12288 }, { type: r.CHAR, value: 65279 }] }, i = function () { return [{ type: r.CHAR, value: 10 }, { type: r.CHAR, value: 13 }, { type: r.CHAR, value: 8232 }, { type: r.CHAR, value: 8233 }] }; n.words = function () { return { type: r.SET, set: a(), not: !1 } }, n.notWords = function () { return { type: r.SET, set: a(), not: !0 } }, n.ints = function () { return { type: r.SET, set: o(), not: !1 } }, n.notInts = function () { return { type: r.SET, set: o(), not: !0 } }, n.whitespace = function () { return { type: r.SET, set: s(), not: !1 } }, n.notWhitespace = function () { return { type: r.SET, set: s(), not: !0 } }, n.anyChar = function () { return { type: r.SET, set: i(), not: !0 } } }, { "./types": 6 }], 6: [function (e, t, n) { t.exports = { ROOT: 0, GROUP: 1, POSITION: 2, SET: 3, RANGE: 4, REPETITION: 5, REFERENCE: 6, CHAR: 7 } }, {}], 7: [function (e, t, n) { var r = e("./types"), o = e("./sets"), a = { 0: 0, t: 9, n: 10, v: 11, f: 12, r: 13 }; n.strToChars = function (e) { var t = /(\[\\b\])|(\\)?\\(?:u([A-F0-9]{4})|x([A-F0-9]{2})|(0?[0-7]{2})|c([@A-Z\[\\\]\^?])|([0tnvfr]))/g; return e = e.replace(t, function (e, t, n, r, o, s, i, u) { if (n) return e; var p = t ? 8 : r ? parseInt(r, 16) : o ? parseInt(o, 16) : s ? parseInt(s, 8) : i ? "@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^ ?".indexOf(i) : a[u], h = String.fromCharCode(p); return /[\[\]{}\^$.|?*+()]/.test(h) && (h = "\\" + h), h }) }, n.tokenizeClass = function (e, t) { for (var a, s, i = [], u = /\\(?:(w)|(d)|(s)|(W)|(D)|(S))|((?:(?:\\)(.)|([^\]\\]))-(?:\\)?([^\]]))|(\])|(?:\\)?(.)/g; null != (a = u.exec(e));)if (a[1]) i.push(o.words()); else if (a[2]) i.push(o.ints()); else if (a[3]) i.push(o.whitespace()); else if (a[4]) i.push(o.notWords()); else if (a[5]) i.push(o.notInts()); else if (a[6]) i.push(o.notWhitespace()); else if (a[7]) i.push({ type: r.RANGE, from: (a[8] || a[9]).charCodeAt(0), to: a[10].charCodeAt(0) }); else { if (!(s = a[12])) return [i, u.lastIndex]; i.push({ type: r.CHAR, value: s.charCodeAt(0) }) } n.error(t, "Unterminated character class") }, n.error = function (e, t) { throw new SyntaxError("Invalid regular expression: /" + e + "/: " + t) } }, { "./sets": 5, "./types": 6 }] }, {}, [1]) }()(1); "function" == typeof define && "object" == typeof define.amd ? define("RandExp", function () { return e }) : "undefined" != typeof window && (window.RandExp = e) }();
       
        function getType(jsonObject) {
          switch (typeof jsonObject) {
            case 'boolean':
              return 'boolean';
              break;
            case 'string':
              return 'string';
              break;
            case 'bigint':
              return 'integer';
              break;
            case 'number':
              if (JSON.stringify(jsonObject).indexOf('.') !== -1 || JSON.stringify(jsonObject).indexOf('e') !== -1)
                return 'number';
              else {
                return 'integer';
              }
              break;
            default:
              if (jsonObject === null) {
                return 'null';
              } else if (Array.isArray(jsonObject)) {
                return 'array';
              }
          }
          return 'object';
        }

        //it will not generating [Exact Json]..it has some bug.
        function generateJson(mV=JSON, cb={}) {
          try {
            const schema = JSON.stringify(mV); //myCodeMirrorSCHEMA.getValue();
            const options = { required: true
              //document.getElementById("json-required").checked
           };
            const json = generateJSONFromObject(1, JSON.parse(schema), options);
            //myCodeMirrorJSON.setValue(json);
            //console.log(json);
            cb.onLoad(json);
            return json;
          } catch (e) {
            //console.log(e);
            return;
          }
        }

        function generateJSONFromObject(level, jsonObject, options) {
          let json = null;
          const tab = "	".repeat(level);
          const tabClose = "	".repeat(level - 1);
          if (!jsonObject) {
            return '';
          }
          if (jsonObject.enum && Array.isArray(jsonObject.enum) && jsonObject.enum.length) {
            return tab + jsonObject.enum.pop();
          }
          if (jsonObject.const) {
            return tab + jsonObject.const;
          }
          switch (jsonObject.type) {
            case 'boolean':
              if (jsonObject.examples && Array.isArray(jsonObject.examples) && jsonObject.examples.length) {
                return jsonObject.examples.pop();
              }
              return 'true';
              break;
            case 'string':
              if (jsonObject.examples && Array.isArray(jsonObject.examples) && jsonObject.examples.length) {
                return "\"" + jsonObject.examples.pop().replace(/\\/g, "\\\\").replace(/"/g, "\\\"") + "\"";
              }
              if (jsonObject.pattern) {
                try {
                  return "\"" + (new RandExp(new RegExp(jsonObject.pattern)).gen()).replace(/\\/g, "\\\\").replace(/"/g, "\\\"") + "\"";
                } catch (e) {

                }
              }
              return '""';
              break;
            case 'integer':
              if (jsonObject.examples && Array.isArray(jsonObject.examples) && jsonObject.examples.length) {
                return jsonObject.examples.pop();
              }
              return '0';
              break;
            case 'number':
              if (jsonObject.examples && Array.isArray(jsonObject.examples) && jsonObject.examples.length) {
                return jsonObject.examples.pop();
              }
              return '0.0';
              break;
            case 'null':
              return 'null';
              break;
            case 'array':
              json = "[\n";
              if (jsonObject.items) {
                if (Array.isArray(jsonObject.items)) {
                  jsonObject.items.forEach(function (item, index) {
                    json += tab + generateJSONFromObject(level + 1, item, options) + (index != jsonObject.items.length - 1 ? ',' : '') + "\n";
                  });
                } else if (jsonObject.items.type) {
                  const iter = (jsonObject.minItems && jsonObject.minItems > 0 ? jsonObject.minItems : 1);
                  for (let it = 1; it <= iter; it++) {
                    json += tab + generateJSONFromObject(level + 1, jsonObject.items, options) + (it < iter ? ",\n" : "\n");
                  }
                }
              } else if (jsonObject.contains) {
                json += tab + generateJSONFromObject(level + 1, jsonObject.contains, options) + "\n";
              }
              json += tabClose + "]";
              return json;
            case 'object':
              json = "{\n";
              if (jsonObject.properties) {
                let properties = [];
                if (options.required) {
                  if (jsonObject.required) {
                    properties = jsonObject.required;
                  }
                } else {
                  properties = Object.keys(jsonObject.properties);
                }
                properties.forEach(function (property, index) {
                  json += tab + "\"" + property + "\":" + generateJSONFromObject(level + 1, jsonObject.properties[property], options) + (index != properties.length - 1 ? ",\n" : "\n");
                });
              }
              json += tabClose + "}";
              return json;
              break;
          }
          return '';
        }

        function generateJsonSchema(mV=JSON, cb={}) {
          try {
            const json = JSON.stringify(mV); //myCodeMirrorJSON.getValue();
            const options = { 
              required: true,
              //document.getElementById("schema-required").checked, 
            exemple: true
            //document.getElementById("schema-exemple").checked 
            };
            //const schema = generateJSONSchemaFromObject(0, 'root', JSON.parse(json), '', options);
            //custom by (mn)..
            const schema = generateJSONSchemaFromObject(0, '', JSON.parse(json), '', options);

            //console.log(schema);
            cb.onLoad(schema);
            return schema;
          } catch (e) {
            console.log(e);
            return;
          }
        }

        function generateJSONSchemaFromObject(level, name, jsonObject, consolidateName, options) {
          const jsonString = JSON.stringify(jsonObject);
          const tab = "	".repeat(level + 1);
          const tabClose = "	".repeat(level);

          let jsonSchema = "{\n";
          if (level == 0) {
            jsonSchema += tab + "\"definitions\": {},\n";
            jsonSchema += tab + "\"$schema\": \"http://json-schema.org/draft-07/schema#\", \n";
            jsonSchema += tab + "\"$id\": \"https://example.com/object" + Math.floor(Date.now() / 1000) + ".json\", \n";
          } else {
            //jsonSchema += tab + "\"$id\": \"#" + consolidateName + name + "\", \n";
            jsonSchema += tab + "\"$id\": \"" + consolidateName + name + "\", \n";

            //custom by (mn)..
            jsonSchema += tab + "\"$path\": \"" + consolidateName + name + "\", \n";


          }
          jsonSchema += tab + "\"title\": \"" + (name.length ? name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase() : '') + "\", \n";
          const type = getType(jsonObject);
          switch (type) {
            case 'boolean':
              jsonSchema += tab + "\"type\": \"boolean\",\n";
              if (options.exemple) jsonSchema += tab + "\"examples\": [\n" + tab + "	" + jsonString + "\n" + tab + "],\n";
              jsonSchema += tab + "\"default\": true\n" + tabClose + "}";
              break;
            case 'string':
              jsonSchema += tab + "\"type\": \"string\",\n";
              jsonSchema += tab + "\"default\": \"\",\n";
              if (options.exemple) jsonSchema += tab + "\"examples\": [\n" + tab + "	" + jsonString + "\n" + tab + "],\n";
              jsonSchema += tab + "\"pattern\": \"^.*$\"\n" + tabClose + "}";
              break;
            case 'integer':
              jsonSchema += tab + "\"type\": \"integer\",\n";
              if (options.exemple) jsonSchema += tab + "\"examples\": [\n" + tab + "	" + jsonString + "\n" + tab + "],\n";
              jsonSchema += tab + "\"default\": 0\n" + tabClose + "}";
              break;
            case 'number':
              jsonSchema += tab + "\"type\": \"number\",\n";
              if (options.exemple) jsonSchema += tab + "\"examples\": [\n" + tab + "	" + jsonString + "\n" + tab + "],\n";
              jsonSchema += tab + "\"default\": 0.0\n" + tabClose + "}";
              break;
            case 'null':
              jsonSchema += tab + "\"type\": \"null\",\n";
              jsonSchema += tab + "\"default\": null\n" + tabClose + "}";
              break;
            case 'array':
              jsonSchema += tab + "\"type\": \"array\",\n";
              jsonSchema += tab + "\"default\": []";

              const typeArray = [];
              jsonObject.forEach(function (key) {
                if (typeArray.indexOf(getType(key)) === -1) {
                  typeArray.push(getType(key));
                }
              });
              if (typeArray.length == 0) {
                jsonSchema += "\n";
              } else if (typeArray.length == 1) {
                jsonSchema += ",\n";
                /*jsonSchema += tab + "\"items\":";
                jsonSchema += generateJSONSchemaFromObject(level + 1, "items", jsonObject.shift(), consolidateName + name + "/", options) + "\n";*/
             
                //custom by (mn)..
                jsonSchema += tab + "\"0\":";
                jsonSchema += generateJSONSchemaFromObject(level + 1, "0", jsonObject.shift(), consolidateName + name + "/", options) + "\n";

             
              } else if (typeArray.length == 2 && typeArray.indexOf('number') !== -1 && typeArray.indexOf('integer') !== -1) {
                jsonSchema += ",\n";
                //jsonSchema += tab + "\"items\":";

                //custom by (mn)..
                jsonSchema += tab + "\"0\":";

                let nbFirst = null;
                jsonObject.forEach(function (nb) {
                  if (getType(nb) == 'number' && nbFirst === null) {
                    nbFirst = nb;
                  }
                });
                //jsonSchema += generateJSONSchemaFromObject(level + 1, "items", nbFirst, consolidateName + name + "/", options) + "\n";

                //custom by (mn)..
                jsonSchema += generateJSONSchemaFromObject(level + 1, "0", nbFirst, consolidateName + name + "/", options) + "\n";


              } else {
                jsonSchema += "\n";
              }
              jsonSchema += "" + tabClose + "}";
              break;
            case 'object':
            default:
              jsonSchema += tab + "\"type\": \"object\",\n";
              let required = '';
              let properties = '';
              for (var key in jsonObject) {
                if (jsonObject.hasOwnProperty(key)) {
                  required += (required != '' ? ",\n" : "") + tab + "	\"" + key + "\"";
                  properties += (properties != '' ? ",\n" : "") + tab + "	\"" + key + "\": " + generateJSONSchemaFromObject(level + 2, key, jsonObject[key], consolidateName + name + "/", options);
                }
              }
              if (properties != '') {
                properties += "\n";
              }

              if (options.required) {
                jsonSchema += tab + "\"required\": [\n";
                jsonSchema += required + (required != '' ? "\n" : "");
                jsonSchema += tab + "],\n";
              }

              jsonSchema += tab + "\"properties\": {\n";
              jsonSchema += properties;
              jsonSchema += tab + "}\n";

              jsonSchema += "" + tabClose + "}\n";
              break;
          }
          return jsonSchema;
        }


        //mDta_main..
        let mDta_main = {
          "utils": {
            "mPrep": (mV,
              a, cb={
              "onEach": (mV) => {},
              "onLoad": (mV) => {},
            }) => {
              //set vars..
              mV = JSON.stringify(mV);  //Because this may-be mutable..
              mV = JSON.parse(mV);

              //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
              const numbers = a; //[3, 1, 4, 1, 5];
              const sorted = numbers.sort((a, b) => {
                return a["size"] - b["size"];
              });
              // numbers and sorted are both [1, 1, 3, 4, 5]
              //console.log(sorted);
              //mLoop..
              let mLoop = (a) => {
                let mC0 = (e) => {
                  //https://json-schema.org/understanding-json-schema/reference/type.html
                  //set..
                  let mVal = -1;
                  if (e["v"]["type"]=="string") {
                    mVal = "";
                  }
                  if (e["v"]["type"]=="array") {
                    mVal = [];
                  }
                  if (e["v"]["type"]=="object") {
                    mVal = {};
                  }
                  if (e["v"]["type"]=="number") {
                    mVal = 0;
                  }
                  if (e["v"]["type"]=="integer") {
                    mVal = 0;
                  }
                  if (e["v"]["type"]=="boolean") {
                    mVal = false;
                  }
                  if (e["v"]["type"]=="null") {
                    mVal = null;
                  }

                  //check..
                  if (mVal==-1) {
                    throw `err: not found [type=${e["v"]["type"]}]`;
                    return; //Stop
                  }
                  //all ok..
                  eval(` ${e["path"]} = mVal; `);

                  //log..
                  //console.log(eval(` ${e["path"]}; `));


                  //send cb..
                  cb.onEach({
                    "e": e,
                  });


                  //log..
                  //console.log(mV);


                };
                
                //gen..
                for (let i = 0; i < a.length; i++) {
                  const e = a[i];
                  //set..
                  //console.log(e);

                  //check if (already-exists)..
                  try {
                    let mRES = eval( ` ${e["path"]} ` );
                    if (typeof mRES === "undefined") {
                      //not-exists.. need to create..
                      mC0(e);
                    }
                  } catch (e) {
                  }


                }

              };
              mLoop(sorted);

              //all ok..
              /*console.warn(`Json-Payload`);
              console.log(mV);*/
              //send cb..
              cb.onLoad(mV);

              
              /*--USAGE--
              mDta_main.utils.mPrep(
                mV, //Json-Payload
                [
                  {
                      "path": "mV[\"ns0\"]",
                      "size": 1,
                      "v": {
                          "0": {
                              "$id": "/ns0/0",
                              "$path": "/ns0/0",
                              "title": "0",
                              "type": "object",
                              "required": [
                                  "m",
                                  "ns1"
                              ],
                              "properties": {
                                  "m": {
                                      "$id": "/ns0/0/m",
                                      "$path": "/ns0/0/m",
                                      "title": "M",
                                      "type": "string",
                                      "default": "",
                                      "examples": [
                                          ""
                                      ],
                                      "pattern": "^.*$"
                                  },
                                  "ns1": {
                                      "0": {
                                          "$id": "/ns0/0/ns1/0",
                                          "$path": "/ns0/0/ns1/0",
                                          "title": "0",
                                          "type": "string",
                                          "default": "",
                                          "examples": [
                                              ""
                                          ],
                                          "pattern": "^.*$"
                                      },
                                      "$id": "/ns0/0/ns1",
                                      "$path": "/ns0/0/ns1",
                                      "title": "Ns1",
                                      "type": "array",
                                      "default": []
                                  }
                              }
                          },
                          "$id": "/ns0",
                          "$path": "/ns0",
                          "title": "Ns0",
                          "type": "array",
                          "default": []
                      }
                  },
                ]//mPathArr, 
                {
                "onEach": (v) => {
                  cb.onEach(v);
                },
                "onLoad": (v) => {
                  cb.onLoad(v);
                }
              });*/
              

            }
          }
        };


        //mGenJson..
        let mGenJson = (mV=JSON, cb={
          "onLoad": (mP={}) => {},
          "onEach": (mP={}) => {},
        }) => {
          let mOut = {};
          let mUtils = {
            //get Var From Path in [JSON]
            "var0": (e = ``) => {   //eg => "/key1/key2"
              let mStr0 = `/`;
              if (e.startsWith(mStr0)) {
                e = e.substring(mStr0.length);
              }
              let mSize = 0;
              let mDyn = (a) => {
                let mK = `mV`; //mV
                for (let i = 0; i < a.length; i++) {
                  const e = a[i];
                  mK += `["${e}"]`;
                  mSize+=1;
                }
                return mK;
              };
              let mDynK = mDyn(e.trim().split("/"));
              return {
                "path": mDynK,
                "size": mSize
              };
            },

            //build..
            "build": (a, b, cb={
              "onLoad": (mV) => {},
              "onEach": (mV) => {}
            }) => {
              //set..
              let mV = b; //this is eval (Var)..
              let mPathArr = [];
              let mSet0 = (k,v) => { 
                if (v.hasOwnProperty("$path")) {
                    //console.log(v);
                    //set..
                    let var0_RES = mUtils.var0(v["$path"]);
                    let mR = var0_RES["path"];
                    //console.log(mR);
                    //check if (exists in Json-Payload)
                    /*try {
                      let mVar = eval(eval(`mR`));
                      //console.log(mVar);
                    } catch (e) {
                      //console.log(e);
                      //need to create.. 
                    }*/
                    //store..
                    mPathArr.push({
                      "path": var0_RES["path"],
                      "size": var0_RES["size"],
                      "v": v
                    });


                }
              };
              //sch..
              JSON.parse(JSON.stringify(a), (k, v) => {
                if (typeof v === "object" && Array.isArray(v)===false) {
                  mSet0(k,v);
                }
                return v;
              });

              //prep..
              //console.log(mPathArr);
              mDta_main.utils.mPrep(mV,mPathArr, {
                "onEach": (v) => {
                  cb.onEach(v);
                },
                "onLoad": (v) => {
                  cb.onLoad(v);
                }
              });

            }
          };

          //set..
          mUtils.build(mV, mOut, {
            "onLoad": (v) => {
              //console.log(JSON.stringify(v,null,2));
              cb.onLoad({ 
                "payload": v
              });
            },
            "onEach": (v) => {
              cb.onEach(v);
            },
          });


        };


        //mEvents..
        let mEvents = {
           "generateJsonSchemaFromJSON": (mV=JSON, cb={"onLoad":(mP={"schema":`{}`})=>{}}) => {
             generateJsonSchema(mV, {
              "onLoad": (mV) => {
                //console.log(mV);
                cb.onLoad({
                  "schema": mV
                });
              }
            });
           },
           "generateJsonFromJsonSchema": (mV=JSON, cb={"onLoad":(mP={"payload":{},})=>{}, "onEach": (mP={})=>{} }) => {
            /*generateJson(mV, {
              "onLoad": (mR) => {
                cb.onLoad(mR);
              }
            });*/
            mGenJson(mV, {
              "onLoad": (mV) => {
                cb.onLoad(mV);
              },
              "onEach": (mV) => {
                if (cb.hasOwnProperty("onEach")) {
                  cb.onEach(mV);
                }
              }
            });
           },
           "buildJsonBySchemaPathArray": (mP={
            "json": {},
            "pathArr": []
           }, cb={
            "onEach": (v) => {},
            "onLoad": (v) => {},
           }) => {
            mDta_main.utils.mPrep(mP["json"],mP["pathArr"], {
              "onEach": (v) => {
                if (cb.hasOwnProperty(`onEach`)) {
                cb.onEach(v);
                }
              },
              "onLoad": (v) => {
                if (cb.hasOwnProperty(`onLoad`)) {
                cb.onLoad(v);
                }
              }
            });
           }
        };
        return mEvents;


        /*
        --USAGE-- 
        let mJson_EVNT = core_1mn.mUtils.json.set();
        mJson_EVNT.generateJsonSchemaFromJSON(
          mDta_main.payload.get(), {
          "onLoad": (mP={}) => {
            //console.log(mP);
          }
        });
        mJson_EVNT.generateJsonFromJsonSchema(
          mDta_main.schema.get(),
        {
          "onLoad": (mP={}) => {
            //console.log(mP);  
          },
          "onEach": (mP={}) => {
            //console.log(mP);  
          },
        }
        );
        */





      }

    },




  }
};


//payload.......
let core_1mn = {

  //here we add version info
  "mLibInfo": {
    "version": "1.0",
    "code": "1",
    "createdBy": "1MN.IO"
  },


  //here add all global variables..
  "gVars": {
    "tpLibs": { //add all third party libraries
    },

    //core_1mn path..
    "asset_path": `sites/libs/core_1mn/assets/`,
    "core_1mn_path": `sites/libs/core_1mn/`,

    //add all urls here.....
    "mUrls": {
      "set": function(mGetUrlName){
          var url_name = mGetUrlName;
          //set vars....
          var mEnv = core_1mn['conf']['mEnv'];
          //console.log(url_name);
          //set data....
          var mUrlDta = config_mn.core_1mn.config.gVars.mUrls.set.mUrlDta;
          //start..
          return mUrlDta[mEnv][url_name];

          /*
          USAGE
          var url1 = core_1mn['gVars']['mUrls']['set']("url1");
          console.log(url1);
          */

      }
    }, 

    "Products": { //add (Products) specific data..
      "1MN" : {},
      "Skillee-English": {
        "Users": {
            "skle_en_tchr": {
                "type": "skle_en_tchr",
                "name": "Teacher",
            },
            "skle_en_stud" : {
                "type": "skle_en_stud",
                "name": "Student",
            },
          },
        },
    }, 

  },

  //add all colors here..
  "clr": config_mn.core_1mn.config.clr,
  /*
  --USAGE--
  core_1mn["clr"][YOUR_COLOR_NAME]
  */


    //"email": "aditya@skilleeteacher.com",
    //"paswoord": "12345678"

    //configuration settings....
    "conf": {
      "mEnv": window.location.hostname.includes("localhost") || window.location.hostname.includes("127.0.0.1")
       ? 0 : 1, //0=>Development, //1=>Production
    },


    //language codes..
    "mLangCodes": {
      "data": null,
      "set": function(mGetParams){
        //here we can retreive a language code....
        var mParams = mGetParams;
        //set vars....
        var mCb = mParams['cb'];   
        var mQuery = mParams['query']; /*
        {
          "lang_code": "hi",
          ------OR-------
          "lang_name": "hi",
        }
        */  
        
        //set vars.....
        var item_name = "lang_codes";  
        var url1_GVars = core_1mn['gVars']['mUrls']['set']("url1");
        var mFile = url1_GVars + "assets/json/mLangCodes/" + item_name + ".json";

        /*
        Sample Data
        [
          {
         "ISO_language_name": "Abkhazian",
         "ISO_639_1": "ab",
         "ISO_639_2_T": "abk",
         "ISO_639_2_B": "abk",
         "ISO_639_3": "abk",
         "Notes": "also known as Abkhaz"
         },
        ]
        */

        //send callback..
        var mSendCB = function(mCb_name, data){
          if(mCb!=undefined){
            if(mCb[mCb_name]!=undefined){
              mCb[mCb_name] (data);
            }
          }
        };
        if(core_1mn['mLangCodes']['data']!=null){
          //send already (Stored) data..
          mQuery_langCode(core_1mn['mLangCodes']['data']);
          return;
        }else{
         //need to retrive from server..
         mLoad();
        }

         //load from (server)
         function mLoad() {
         /* Make an HTTP request*/
          xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {
             //loaded success......
             //console.log('loaded success: '+this.responseText);
              mOn_success(this.responseText);
           } 
           if (this.status == 404) {
            //console.log("Not found.");
            mOn_failed();
            } 
         }
       }
      xhttp.open("GET", mFile, true);
      xhttp.send();


      //events.....
      function mOn_success(mRes1) {
        //set..
        try {
          mRes1 = JSON.parse(mRes1);
          //store..
          core_1mn['mLangCodes']['data'] = mRes1;
          mQuery_langCode(mRes1);
        } catch (error) {
         console.log(`Error: unable to parse [mLangCodes] JSON`);
        }
      }
      function mOn_failed() {
         console.log(`Error: [mLangCodes] (Data not load)`);
      }

         }


         //query a language code..
         function mQuery_langCode(mGetArr1) {
          var mArr1 = mGetArr1;
          //check if (query) is undefined..
          if(mQuery==undefined){
            //no need to find item....Send Array..
            mSendCB("onLoad", {"0": core_1mn['mLangCodes']['data']});
            return;
          }
          //console.log(mArr1); 
          var mSearchKey = Object.values(mQuery)[0];
          const array1 = mArr1;
          const found = array1.find(element => element[mSearchKey] == array1[mSearchKey]);
          //console.log(found); 
          //send callback..
          mSendCB("onLoad", {"0": found}); 
         }

         /*
         USAGE
         //(mLangCode)....set
      core_1mn['mLangCodes']['set']({
        "query": {
          "lang_code": "hi"
        },
        "cb": {
          "onLoad": function(data){
            var mLangItem = data['0'];
            console.log(mLangItem);
          },
          "onErr": function(data){
            //error..
            console.log(data);
          },
        }
      });

      -----------OR----------

       //(mLangCode)....set
      core_1mn['mLangCodes']['set']({
        "cb": {
          "onLoad": function(data){
            var mLangArr = data['0'];
            console.log(mLangArr);
          },
          "onErr": function(data){
            //error..
            console.log(data);
          },
        }
      });

         */


      }
    },

    //add utilities here..
    "mUtils": mLIB["mUtils"],


    //init..
    "init": {

      "set": () => {

        //mJS..
        mJS();
        function mJS() {
          //-->mLoadReqJS/mJsArr
          var url1_GVars = core_1mn['gVars']['mUrls']['set']("url1");
          core_1mn['mLoadReqJS']['mJsArr'][`${url1_GVars}js/core_1mn.js`] = {
            "status": 1, //0=>loading, 1=>onload
          };
          
          
        };


        //----set config----// 
        let mSet_conf = () => {
          let mSet_btn = () => {
            let mArr = config_mn["core_1mn"]["config"]
            ["btn"]["1"]["conf"];
            //vali..
            if (mArr.filter(eF => eF["typ"].startsWith("x")==false).length>0) {
              let msg = `err: must add prefix {x} in [typ]`;
              console.error(msg);
              return; //err
            }
            //all ok..
            //set..
            core_1mn["btn"]["1"]["conf"].push(
              ...mArr
            );

          };
          try {
            mSet_btn();
          } catch (e) {
            //ignore..
            console.log(`ignore: [mSet_btn()]`);
          }

        };
        mSet_conf();


      }

    },


    "svgIcons": {

      "close_0": {
          "svg": () => {

              var mSvg = ` 
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
              `;

              return mSvg;

          }
      },

    },

    //svg (lib)
    "mSvg": {

      "ico": {
        //svg icons will be add here.....
        //(DYNAMIC)
      },

      "set": (mGetParams) => {
        var mParams = mGetParams;
        //reload..
        if (mParams["reload"]!=undefined) {
             mParams["reload"] = () => {
                mStart();
            }
        }

        /*
        Need to implement..
         Convert unresponsive (SVG) responsive by using => [width=W; height=H; (--TO--) viewBox="0 0 W H"]
        */

        //set..
        var mE = mParams['5']!=undefined ? mParams['5'] : null;
        let mDivRoot = document.createElement("div");
        mE.appendChild(mDivRoot);
        let mStart = () => {
        mDivRoot.innerHTML = ""; //reset..  
        //set vars..
        var mCb = mParams['cb'];
        var mSvgName = mParams['0'].trim(); //(svg name) --OR-- (<svg></svg>)
        var mSvgId = mParams['1']!=undefined ? mParams['1'] : core_1mn['mUniqueId'].mGenerate(30); //(svg id)
        var mSvgW = mParams['2']!=undefined ? mParams['2'] : "2vh"; //(svg width)
        var mSvgH = mParams['3']!=undefined ? mParams['3'] : "2vh"; //(svg height)
        var mSvgFill = mParams['4']!=undefined ? mParams['4'] : "rgba(34,34,34, 1.0)"; //(svg fill)
        var mSvgHolder = mDivRoot; //(svg holder)
        let m_evnt = mParams.hasOwnProperty(`evnt`) ? mParams["evnt"] : {}; //events..


        //set vars.....
        var item_name = mSvgName; //"alphabet-1.svg"; || "my_folder/my_file.svg"
        var url1_GVars = core_1mn['gVars']['mUrls']['set']("url1");
        var mFile = ``;//url1_GVars + "assets/svgTest/" + item_name + "";
        //console.log(mFile);

        //check
        if (item_name.indexOf(`/`)!==-1) {
          //file path found..  `my_folder/my_file.svg`
          mFile = url1_GVars + item_name;
        }else {
          //single filename..  `my_file.svg`
          mFile = url1_GVars + "assets/svgTest/" + item_name + "";
        }


         //layout....(SVG)
         var mSvgDiv1 = document.createElement("span");
         mSvgDiv1.id = mSvgId;
         mSvgDiv1.innerHTML = `<div></div>`; //(init)
         mSvgDiv1.setAttribute("tag_n", "svg_cover");  //(svg_cover)
         mSvgHolder.appendChild(mSvgDiv1);

         //events.....
         mSvgDiv1.onclick = function(){
          var mCurrItemId = this.id;
          var mCurrItem = document.getElementById(mCurrItemId);
          //send callback....
          if(mCb!=undefined && mCb['onClick']!=undefined){
            mCb.onClick(mCurrItem);
          }
         };

         //mSvg1_E.....
         var mSvg1_E = mSvgDiv1.querySelectorAll("div")[0];
         mSvg1_E.style = `background-color:#e6e6e6; width:${mSvgW}; height:${mSvgH}; border-radius: 0.5vh; `; //default


        //check (ico)....
        if(core_1mn['mSvg']['ico'].hasOwnProperty(item_name)==true || 
        item_name.indexOf("<svg")!==-1){
          //avail....
          mSend_cb("onLoad");
        }else{
          //not avail.... (need to load)
          mLoad();
        }

        //load from (server)
        var xhttp = undefined;
        function mLoad() {
           /* Make an HTTP request*/
          xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {
              //loaded success......
              //console.log('loaded success: '+this.responseText);
              mOn_success(this.responseText);
            }
            if (this.status == 404) {
              //console.log("Not found.");
              mOn_failed();
            }
            /* Remove the attribute, and call this function once more: */
           // mElmnt.removeAttribute(mHtmlSrcTag);
            //includeHTML();
          }
        }
        xhttp.open("GET", mFile, true);
        xhttp.send();


        //events.....
        function mOn_success(mRes1) {
          //store....
          if(core_1mn['mSvg']['ico'].hasOwnProperty(item_name)==false){
            core_1mn['mSvg']['ico'][item_name] = {
              "svg": () => {
                var mSvg = ` 
                 ${mRes1}
                `;
              return mSvg; 
              }
            };
          }

          //(cb)
          mSend_cb("onLoad");
        }
        function mOn_failed() {
           //(cb)
             mSend_cb("onError");
        }

        }

        //send callback......
        function mSend_cb(mCb_name) {
          var mIco = core_1mn['mSvg']['ico'];
          if(mIco.hasOwnProperty(item_name)==true ||
          item_name.indexOf("<svg")!==-1 ){
            if (mIco.hasOwnProperty(item_name)==true) {
              mSvgDiv1.innerHTML = mIco[item_name].svg();              
            }else {
              //svg file..
              mSvgDiv1.innerHTML = item_name;              
            }

            //set.....
            let mSvg1_E = mSvgDiv1.querySelectorAll("svg")[0];
            if (mSvgFill!="") {
              mSvg1_E.style.fill = mSvgFill;              
            }
            mSvg1_E.style.width = mSvgW;
            mSvg1_E.style.height = mSvgH;
            //console.log(mSvg1_E);

            //events..
            //mSvg1_E
            if (m_evnt.hasOwnProperty(`set4`)) {
              m_evnt["set4"] = (v) => {
              mSvg1_E.style.fill = v;             
              };
            }


          }
          //set....
          if(mCb!=undefined){
            if(mCb[mCb_name]!=undefined){
              mCb[mCb_name] (mSvgDiv1);
            }
          }

        }

        //send (init) callback....
        if(mCb!=undefined){
          if(mCb['onInit']!=undefined){
            mCb.onInit(mSvgDiv1);
          }
        }

        //(mSvgDiv1)....
        return mSvgDiv1;

        };
        return mStart();


        /*USAGE
          core_1mn['mSvg'].set({
        "0": "alphabet-1.svg",  //svg file name --OR-- <svg></svg>   --OR-- "my_folder/my_file.svg"
        //"1": "YOUR_UNIQUE_ID",
        "2": "2vh",
        "3": "2vh",
        "4": "rgba(34,34,34, 1.0)", //"" => no-color --OR-- undefined => "auto-color-applied" --OR-- "rgba(my color)"
        "5": mItemDiv,
        //you can set and (reload) FIELD by (assigning) this func..
        //"reload": () => {},
        
        "cb": {
            "onLoad": (mCurrItem) => {
                //use (svg)
                alert("onLoad");
            },
            "onInit": (mCurrItem) => {
               //This will trigger immediately..
            },
            "onError": () => {
                alert("onError");
            },
            "onClick": (mCurrItem) => {
                alert("onClick");
            }
        },

        //events..
        "evnt": {
          "set4": (v) => {}
        }

       });
        */ 
       

      }

    },

    //img (lib)
    "mImg": {

      "set": (mGetParams) => {
        var mParams = mGetParams;
        var mCb = mParams['cb'];
        var mImgName = mParams['0']; //(svg name)
        var mImgId = mParams['1']!=undefined ? mParams['1'] : core_1mn['mUniqueId'].mGenerate(30); //(svg id)
        var mImgW = mParams['2']!=undefined ? mParams['2'] : "2vh"; //(img width)
        var mImgH = mParams['3']!=undefined ? mParams['3'] : "2vh"; //(img height)
        var mImgHolder = mParams['4']!=undefined ? mParams['4'] : null; //(img holder)
        var mImgBr = mParams['5']!=undefined ? mParams['5'] : "0%"; //(img border-radius)
  
        //set vars.....
        var item_name = mImgName; //"LLE.png";
        var url1_GVars = core_1mn['gVars']['mUrls']['set']("url1");
        var mFile = url1_GVars + "assets/" + item_name + ""; //iconsTest
        if (item_name.indexOf("http://")!==-1 || item_name.indexOf("https://")!==-1) {
            //url found
            mFile = item_name;
        }
        if (item_name.indexOf(`data:`)==0) {
            //base64 found
            mFile = item_name;
        }
        //console.log(mFile);
  
         //layout....(SVG)
         var mImgDiv1 = document.createElement("span");
         mImgDiv1.id = mImgId;
         mImgDiv1.innerHTML = `<div></div>`; //(init)
         mImgDiv1.setAttribute("tag_n", "img_cover");  //(img_cover) 
         mImgHolder.appendChild(mImgDiv1);
  
         //mImg1_E.....
         var mImg1_E = mImgDiv1.querySelectorAll("div")[0];
         mImg1_E.style = `background-color:#e6e6e6; width:${mImgW}; height:${mImgH}; border-radius: 0.5vh; `; //default
  

         //log..
         //console.log(mFile);
      
        //load from (server)
        mLoad();
        function mLoad() {
          var mImg1_E = document.createElement("img");
          mImg1_E.src = mFile;
  
          mImg1_E.onload = function(){
            //alert("onload");
            mImgDiv1.innerHTML = ``; //reset.....
            //set....
            mImg1_E.style.width = mImgW;
            mImg1_E.style.height = mImgH;
            mImg1_E.style.borderRadius = mImgBr;
            mImgDiv1.appendChild(mImg1_E);
  
            //events..
            mImgDiv1.onclick = function(){
              mSend_cb("onClick", mImg1_E);
            };
  
  
            //(cb)
            mSend_cb("onLoad", mImg1_E);
  
          };
          mImg1_E.onerror = function(){
            //alert("onerror");
            //(cb)
            mSend_cb("onError", null);
  
          };
          
        }
  
         //send callback......
         function mSend_cb(mCb_name, mE1) { 
          //set....
          if(mCb!=undefined){
            if(mCb[mCb_name]!=undefined){
              mCb[mCb_name] (mE1);
            }
          }
  
        }
  
  
        /*USAGE
          core_1mn['mImg'].set({
                    "0": "LLE.png",  //"filename.png" ||  "http://your_img_url" || "base64"
                    "2": "12.0vh",
                    "3": "3.2vh",
                    "4": mItemDiv,
                    "5": "50%"

          });
        */
  
  
      }
  
    },

    //bg img (lib)
    "mBgImg": {

    "set": (mGetParams) => {
      var mParams = mGetParams;
      var mCb = mParams['cb'];
      var mImgName = mParams['0']; //(svg name)
      var mImgId = mParams['1']!=undefined ? mParams['1'] : core_1mn['mUniqueId'].mGenerate(30); //(svg id)
      var mImgW = mParams['2']!=undefined ? mParams['2'] : "2vh"; //(img width)
      var mImgH = mParams['3']!=undefined ? mParams['3'] : "2vh"; //(img height)
      var mImgHolder = mParams['4']!=undefined ? mParams['4'] : null; //(img holder)

      //set vars.....
      var item_name = mImgName; //"LLE.png";
      var url1_GVars = core_1mn['gVars']['mUrls']['set']("url1");
      var mFile = url1_GVars + "assets/bg/" + item_name + "";
      //console.log(mFile);

       //layout....(IMG)
       var mImgDiv1 = document.createElement("span");
       mImgDiv1.id = mImgId;
       mImgDiv1.innerHTML = `<div></div>`; //(init)
       mImgDiv1.setAttribute("tag_n", "bg_img_cover");  //(bg_img_cover)
       mImgHolder.appendChild(mImgDiv1);

       //mImg1_E.....
       var mImg1_E = mImgDiv1.querySelectorAll("div")[0];
       mImg1_E.style = `background-color:#e6e6e6; width:${mImgW}; height:${mImgH}; border-radius: 0.5vh; `; //default


      //load from (server)
      function mLoad1() {
        /* Make an HTTP request*/
       xhttp = new XMLHttpRequest();
       xhttp.onreadystatechange = function() {
       if (this.readyState == 4) {
         if (this.status == 200) {
           //loaded success......
           //console.log('loaded success: '+this.responseText);
           mOn_success(this.responseText);
         }
         if (this.status == 404) {
           //console.log("Not found.");
           mOn_failed();
         }
         /* Remove the attribute, and call this function once more: */
        // mElmnt.removeAttribute(mHtmlSrcTag);
         //includeHTML();
       }
     }
     xhttp.open("GET", mFile, true);
     xhttp.send();


     //events.....
     function mOn_success(mRes1) {
       //set..
       console.log(mRes1);
       return;
       //(cb)
       mSend_cb("onLoad");
     }
     function mOn_failed() {
        //(cb)
          mSend_cb("onError");
     }

      }
     // mLoad1();


    
      //load from (server)
      mLoad();
      function mLoad() {
        var mImg1_E = document.createElement("div");
        //mImg1_E.src = mFile;
        mImg1_E.style.backgroundImage = `url('${mFile}')`;
        mImg1_E.style.backgroundRepeat = "repeat";

        /*mImg1_E.onload = function(){
          mImgDiv1.innerHTML = ``; //reset.....
          //set....
          mImg1_E.style.width = mImgW;
          mImg1_E.style.height = mImgH;
          mImgDiv1.appendChild(mImg1_E);

          //(cb)
          mSend_cb("onLoad", mImg1_E);

        };
        mImg1_E.onerror = function(){
          //alert("onerror");
          //(cb)
          mSend_cb("onError", null); 
        };*/
        //direct..
        mOnLoad();
        function mOnLoad() {
          mImgDiv1.innerHTML = ``; //reset.....
          //set....
          mImg1_E.style.width = mImgW;
          mImg1_E.style.height = mImgH;
          mImgDiv1.appendChild(mImg1_E);

          //(cb)
          mSend_cb("onLoad", mImg1_E);
        }
        
      }

       //send callback......
       function mSend_cb(mCb_name, mE1) { 
        //set....
        if(mCb!=undefined){
          if(mCb[mCb_name]!=undefined){
            mCb[mCb_name] (mE1);
          }
        }

      }


      /*USAGE
        core_1mn['mBgImg'].set({
                  "0": "LLE.png",
                  "2": "12.0vw",
                  "3": "3.2vw",
                  "4": mItemDiv,
        });
      */


    }

    },


    //txt (lib)
    "mTxt": {
      "set": (mP={
        "0": null, //HTMLElement
        "1": ``, //txt
        "2": "", //fontSize
        "3": "", //color
        "4": 0, //position horizontal
        "5": 0, //[".innerHTML", ".innerText"]
        "6": ``, //onHoverColor
        "7": ``, //padding
        }, mCb={
          "onClc": () => {},
          "onmouseover": () => {},
          "onmouseout": () => {},
        }) => {
        //set vars.
        if (mP.hasOwnProperty("2") == false) {
          mP["2"] = `1.5vh`;
        }
        if (mP.hasOwnProperty("3") == false) {
          mP["3"] = `rgba(0,0,0, 0.8)`;
        }
        if (mP.hasOwnProperty("5") == false) {
          mP["5"] = 0;
        }
        

        //set..
        let mT = document.createElement("div");
        mT.style.fontSize = `${mP["2"]}`;
        mT.style.color = `${mP["3"]}`;
        //mT.innerHTML = `${i1+1}- ${txt}`;
        if (mP["5"]==0) {
        mT.innerHTML = `${mP["1"]}`;
        }
        if (mP["5"]==1) {
        mT.innerText = `${mP["1"]}`;
        }

        if (mP.hasOwnProperty("0") == true) {
          mP["0"].appendChild(mT);
        }
        if (mP.hasOwnProperty("4") == true) {
           if (mP["4"]==1) {
              //center..
              mT.style.display = `flex`;
              mT.style.justifyContent = `center`;
           }
           if (mP["4"]==2) {
            //end..
            mT.style.display = `flex`;
            mT.style.justifyContent = `end`;
           }
        }

        //padding
        if (mP.hasOwnProperty("7")) {
          mT.style.padding = mP["7"];
        }

        //set vars..
        const def_BG = mT.style.backgroundColor;

        //onHoverColor
        if (mP.hasOwnProperty("6")) { 
          mT.onmouseover = () => {
            mT.style.backgroundColor = mP["6"];
          };
          mT.onmouseout = () => {
            mT.style.backgroundColor = def_BG;
          };
        }

        //cb..
        if (mCb.hasOwnProperty("onClc")) {
          mT.onclick = () => { mCb.onClc(); };
        }


        //return..
        let mEvents = {
          "e": mT
        };
        return mEvents; 

        /*
        --USAGE--
        let mEvents = 
        core_1mn.mTxt.set({
          "0": mL1,  //HTMLElement
          "1": `${e["1"]}`,  //txt
          "2": "1vh",  //fontSize
          "3": "blue",  //color
          "4": 0,  //pos hori [left, center, right]
          "5": 0,   //[".innerHTML", ".innerText"]
          "6": `grey`, //onHoverColor
          "7": ``, //padding
        },
         {
           "onClc": () => {},
           "onmouseover": () => {},
           "onmouseout": () => {},
         },
         
         );
        */

      }
    },


    //input (lib)
    "mInp": {
      "set": (mP={
        "0": null, //HTMLElement
        "1": ``, //txt
        "2": "", //fontSize
        "3": "", //color
        "4": 0, //position horizontal
        "5": ``, //bg color
        "6": 0, //cb:oninput [Latency(inMillis) for Callback]
        "7": ``, //border
        "8": ``, //textAlign
        "9": ``, //datatype
        "w": ``, //width 
        "h": ``, //height 
        "e_tag": ``, //input || textarea

        }, mCb={
          "oninput": (mP={
            "0":`` //trim-value
          }) => {}, 
        }) => {
        //set vars.
        if (mP.hasOwnProperty("2") == false) {
          mP["2"] = `1.5vh`;
        }
        if (mP.hasOwnProperty("3") == false) {
          mP["3"] = `rgba(0,0,0, 0.8)`;
        } 
        //set..
        let e_tag = `input`;
        if (mP.hasOwnProperty(`e_tag`)) {
          e_tag = mP["e_tag"];
        }
        let mT = document.createElement(e_tag);
        mT.style.fontSize = `${mP["2"]}`;
        mT.style.color = `${mP["3"]}`;
        mT.value = mP["1"];

        if (mP.hasOwnProperty("0") == true) {
          mP["0"].appendChild(mT);
        }
        if (mP.hasOwnProperty("4") == true) {
           if (mP["4"]==1) {
              //center..
              mT.style.display = `flex`;
              mT.style.justifyContent = `center`;
           }
        }
        if (mP.hasOwnProperty("5") == true) {
          mT.style.backgroundColor =  mP["5"];
        } 

        if (mP.hasOwnProperty("7")) {
          mT.style.border =  mP["7"];
        } 
        if (mP.hasOwnProperty("8")) {
          mT.style.textAlign =  mP["8"];
        }
        if (mP.hasOwnProperty("9") && e_tag==`input`) {
          mT.type =  mP["9"];
        } 
        if (mP.hasOwnProperty("w")) {
          mT.style.width =  mP["w"];
        } 
        if (mP.hasOwnProperty("h")) {
          mT.style.height =  mP["h"];
        }   

        //mSet0..
        let mSet0 = (mE) => {
          let mWait_tout = null;
          let mWait_DUR = mP.hasOwnProperty(`6`)?mP["6"]:0; //millis..
          //events..
          mE.oninput = () => { 
              let mVal = mE.value.trim();
              //auto-clear..
              if (mWait_tout != null) {
                  clearTimeout(mWait_tout); //reset..
              }
              mWait_tout = setTimeout(() => {
                  clearTimeout(mWait_tout); //reset..
                  //send cb..
                  mCb.oninput({
                    "0": mVal
                  }); 
              }, mWait_DUR);
          };
       };
      //cb..
      if (mCb.hasOwnProperty("oninput")) {
        mSet0(mT);
      }



        //return..
        let mEvents = {
          "e": mT
        };
        return mEvents; 

        /*
        --USAGE--
        let mEvents = 
        core_1mn.mInp.set({
          "0": null, //HTMLElement
          "1": ``, //txt
          "2": "", //fontSize
          "3": "", //color
          "4": 0, //position horizontal
          "5": ``, //bg color 
          "6": 0, //cb:oninput [Latency(inMillis) for Callback]
          "7": ``, //border
          "8": ``, //textAlign
          "9": ``, //datatype
          "w": `100%`, //width 
          "h": `100%`, //height 
          "e_tag": `textarea`,   //input || textarea
        },
         {
           "oninput": (mP={}) => {},
         },
         
         );
        */

      }
    },


    //translation (lib)
    "trans": {
      
      //we can translate items with provided ARRAY..
      "1": {
        "set": function(mGetParams){
          //@requirements => (Add tag_n="trans_1" in (html) )
          var mParams = mGetParams;
          //set vars....
          var mLangCode = mParams['lc']; //hi=>Hindi
          var mTransArr = {} /*{
            "Phrase of the Day": "दिन का मुहावरा",
            "Word of the Day": "आज का शब्द",
          };*/

          //set vars.....
          var item_name = mLangCode; //"hi=>Hindi";
          var url1_GVars = core_1mn['gVars']['mUrls']['set']("url1");
          var mFile = url1_GVars + "assets/json/trans_1/" + item_name + ".json";

          //load from (server)
          function mLoad() {
          /* Make an HTTP request*/
           xhttp = new XMLHttpRequest();
           xhttp.onreadystatechange = function() {
           if (this.readyState == 4) {
             if (this.status == 200) {
              //loaded success......
              //console.log('loaded success: '+this.responseText);
               mOn_success(this.responseText);
            } 
            if (this.status == 404) {
             //console.log("Not found.");
             mOn_failed();
             } 
          }
        }
       xhttp.open("GET", mFile, true);
       xhttp.send();


       //events.....
       function mOn_success(mRes1) {
         //set..
         try {
           mTransArr = JSON.parse(mRes1);
           mSet_trans();
         } catch (error) {
          console.log(`Error: unable to parse [trans_1] JSON`);
         }
       }
       function mOn_failed() {
          console.log(`Error: [trans_1] (Data not load)`);
       }

          }
          mLoad();

          //here we set....
          function mSet_trans() {
            var mArr1 = mTransArr;
            var mTagN = document.querySelectorAll("[tag_n=trans_1]");
            for (let i1 = 0; i1 < mTagN.length; i1++) {
              const mCurr_I1 = mTagN[i1];
              //console.log(mCurr_I1);
              var mCurrTxt = mCurr_I1.textContent; 
              //set....
              var myObject = mArr1; //{ "mIxeDCaSEKeY": "value" };
              var searchKey = mCurrTxt; //'mixedCaseKey';
              var asLowercase = searchKey.toLowerCase();
              var mResult = myObject[Object.keys(myObject).find(key => key.toLowerCase() === asLowercase)];
              //console.log(mResult);
              mCurr_I1.textContent = mResult;
            }
          }

          /*
          USAGE
          core_1mn['trans']['1']['set']({"lc": "hi"});
          */

        }


      },

    },


    //ip info (lib)
    "ip_info": {
      "data": null, //add data here
      "set": function(mGetParams){ 
        //here we set ip information..
        //set vars..
        var mParams = mGetParams;
        var mCb = mParams['cb'];

        //send callback..
        var mSendCB = function(mCb_name, data){
          if(mCb!=undefined){
            if(mCb[mCb_name]!=undefined){
              mCb[mCb_name] (data);
            }
          }
        };
        if(core_1mn['ip_info']['data']!=null){
          //send already (Stored) data..
          mSendCB("onLoad", core_1mn['ip_info']['data']);
          return;
        }else{
         //need to retrive from server..
         mLoad();
        }

        //need to retrive from server..
        function mLoad() {
          var mFormData = new FormData();
          mFormData.append("epName_mn", "14");
          mFormData.append("epType_mn", "skle_en_stud");
          mFormData.append("payloadJSON_mn", JSON.stringify({
            "ip_add": null //"1.1.1.1" or null
          }));
           core_1mn['mApiReq']['HTTP'].set(
               {
                "data": mFormData,
                "url": config_mn.core_1mn.config.ip_info.set.url,
                "method": "post", 
                "cb": {
                    "onLoad": (mGetParams) => {
                        var mParams = mGetParams;
                        var mDta = mParams['dta'];
                        //console.log(mDta);
                        //store..
                        core_1mn['ip_info']['data'] = mDta['dta_mn']['dta']['ipinfo'];
                        //send cb..
                        mSendCB("onLoad", core_1mn['ip_info']['data']);
                    },
                    "onErr": (mGetParams) => {
                        var mParams = mGetParams;
                        var mDta = mParams['dta'];
                        //console.log(mDta);
                        mSendCB("onErr", {"msg": `Error: unable to get ipinfo`});
                    }
                }
               }
          ); 
         
        }

        /*
        USAGE
        core_1mn['ip_info']['set']({
  "cb": {
    "onLoad": function(data){

    },
    "onErr": function(data){

    },
  }
});
        */


        /*Sample Response
         "ipinfo": {
                "status": "success",
                "continent": "Oceania",
                "continentCode": "OC",
                "country": "Australia",
                "countryCode": "AU",
                "region": "QLD",
                "regionName": "Queensland",
                "city": "South Brisbane",
                "district": "",
                "zip": "4101",
                "lat": -27.4766,
                "lon": 153.0166,
                "timezone": "Australia/Brisbane",
                "offset": 36000,
                "currency": "AUD",
                "isp": "Cloudflare, Inc",
                "org": "APNIC and Cloudflare DNS Resolver project",
                "as": "AS13335 Cloudflare, Inc.",
                "asname": "CLOUDFLARENET",
                "reverse": "one.one.one.one",
                "mobile": false,
                "proxy": false,
                "hosting": true,
                "query": "1.1.1.1"
            }
        */

      }
 
    },


    //local storage..
    "mLocalStorage": {

      //store data in local storage..
      "store": {
        "set": (mGetParams) => {
          //set data..
          //check if storage available..
          if (typeof(Storage) == "undefined") {
            // Sorry! No Web Storage support..
            //alert('Sorry! No Web Storage support..');
            return;
          } 
           //send callback..
           const mSend_cb = function(mCb_name){
            if(mCb!=undefined){
              if(mCb[mCb_name]!=undefined){
                mCb[mCb_name]();
              }
            }
          };

          //continue..
          var mParams = mGetParams;
          var mKey = mParams['key'];
          var mVal = mParams['val'];
          var mCb = mParams['cb']; 
          try {
            localStorage.setItem(mKey, mVal);
            mSend_cb("onLoad");
            //set successfully..
          } catch (error) {
            console.log(`Error: ${error}`);
            mSend_cb("onErr");
          }


          /*
          USAGE
          core_1mn['mLocalStorage']['store']['set'](
            {
                "key": "loginInfo",
                "val": "my login data",
                "cb": {
                    "onLoad": function(){
                        alert("Stored success!");
                    }
                }
            }
          );
          */

        }

      },

       //retrieve data in local storage..
      "retrieve": {
        "set": (mGetParams) => {
          //set data..
          //check if storage available..
          if (typeof(Storage) == "undefined") {
            // Sorry! No Web Storage support..
            //alert('Sorry! No Web Storage support..');
            return;
          } 
           //send callback..
           const mSend_cb = function(mCb_name, data){
            if(mCb!=undefined){
              if(mCb[mCb_name]!=undefined){
                mCb[mCb_name](data);
              }
            }
          };

          //continue..
          var mParams = mGetParams;
          var mKey = mParams['key'];
          var mVal = mParams['val'];
          var mCb = mParams['cb'];
          var mVal = localStorage.getItem(mKey);
          mSend_cb("onLoad", mVal);

          /*
          USAGE
          core_1mn['mLocalStorage']['retrieve']['set'](
         {
           "key": "loginInfo",
           "cb": {
              "onLoad": function(data){
                 alert(data);
             }
            }
          }
         );
          */

        }

      },

      //remove all data in local storage..
      "removeAll": {
        "set": function(mGetParams){
          //set data..
          //check if storage available..
          if (typeof(Storage) == "undefined") {
            // Sorry! No Web Storage support..
            //alert('Sorry! No Web Storage support..');
            return;
          } 
           //send callback..
           const mSend_cb = function(mCb_name, data){
            if(mCb!=undefined){
              if(mCb[mCb_name]!=undefined){
                mCb[mCb_name](data);
              }
            }
          };

          //continue..
          var mParams = mGetParams;
          var mCb = mParams['cb'];
          localStorage.clear();
          mSend_cb("onLoad");

          /*
          USAGE
          core_1mn['mLocalStorage']['removeAll']['set'](
         {
            "cb": {
            "onLoad": function(){
               alert("All data clear");
              }
            }
            }
          );
          */

        }
      },

      //remove data in local storage..
      "remove": {
        "set": (mGetParams) => {
          //set data..
          //check if storage available..
          if (typeof(Storage) == "undefined") {
            // Sorry! No Web Storage support..
            //alert('Sorry! No Web Storage support..');
            return;
          } 
           //send callback..
           const mSend_cb = function(mCb_name, data){
            if(mCb!=undefined){
              if(mCb[mCb_name]!=undefined){
                mCb[mCb_name](data);
              }
            }
          };

          //continue..
          var mParams = mGetParams;
          var mKey = mParams['key'];
          var mCb = mParams['cb'];
          localStorage.removeItem(mKey);
          mSend_cb("onLoad");

          /*
          USAGE
           core_1mn['mLocalStorage']['remove']['set'](
         {
           "key": "loginInfo",
           "cb": {
              "onLoad": function(){
                 alert("data removed");
             }
            }
          }
          );
          */

        }

      },

     
    },


    //add fronend functional code generate by (bknd) 
    "add_bknd_InClient": {
     "set": function(mGetParams){
      //set vars..
      var mParams = mGetParams;
      var mE1 = mParams['e1'];
      //cb
      var mCb_dta_bknd = mParams['dta_bknd'];

      /*
      USAGE

       var msg = `
      Success: Register successfully 
      <a href="#" is_bknd="true" dta_bknd='
      {
        "type": "login_link", 
        "events": {
            "onClick": {
                "func": [
                    "mLoginMode()"
                ]
            }
        }
      }
      ' >
      Click to login
      <a>

      Success1: Register successfully 1
      <a href="#" is_bknd="true" dta_bknd='
      {
        "type": "login_link", 
        "events": {
            "onClick": {
                "func": [
                    "mLoginMode1()"
                ]
            }
        }
      }
      ' >
      Click to login
      <a>

      `;

      core_1mn['add_bknd_InClient']['set'](
                        {
                            "e1": mNoteHolder,
                            //Receive actions and data for Client..via (bknd)
                            "dta_bknd": {
                                "events": {
                                    "onClick": function(mGetParams){
                                        var mParams = mGetParams;
                                        //console.log(mParams);
                                        var mType = mParams['type'];
                                        var mFunc = mParams['func'];
                                        //exec functions..
                                        function mExec_func() {
                                            for (let i1 = 0; i1 < mFunc.length; i1++) {
                                                const mCurr_I1 = i1;
                                                //set..
                                                eval(mFunc[mCurr_I1]);
                                            }
                                        }
                                        if(mFunc!=undefined){
                                            mExec_func();
                                        } 

                                    }
                                }
                            }
                        },
                     );

      */

     
      /*
      //dta_bknd
      //tag_bknd
      //is_bknd
      */

      //data (bknd)..
      var mData_bknd = {
      }; 

      //here we set.....
      function mSet_bknd(mElem) {
        for (let i1 = 0; i1 < mElem.querySelectorAll("[is_bknd=true]").length; i1++) {
          const mCurr_I1 = mElem.querySelectorAll("[is_bknd=true]")[i1];
          //console.log(mCurr_I1);
          //set..
          mCurr_I1.id = core_1mn['mUniqueId'].mGenerate(21);
          var dta_bknd = mCurr_I1.getAttribute("dta_bknd");
            try {
              dta_bknd = JSON.parse(dta_bknd);
              //store..
              mData_bknd[mCurr_I1.id] = dta_bknd;
              //console.log(dta_bknd);
              
            } catch (error) {
              //error..
              console.log(`Error: unable to parse (JSON) [dta_bknd]`);
              return;
            }

          //events..
          mCurr_I1.onclick = function(){
            var mCurrItemId = this.id;
            //var mCurrItem = document.getElementById(mCurrItemId);
            //set..
            var mCurr_dta_bknd = mData_bknd[mCurrItemId];
            //data..
            var mType = mCurr_dta_bknd['type'];
            var mEvents = mCurr_dta_bknd['events'];
            var mOnClick = mEvents['onClick'];
            //mOnClick-->
            var mFunc = mOnClick['func'];

            //send callback (onClick)..
            mCb_dta_bknd['events']['onClick'](
              {
                "type": mType,
                "func": mFunc,
              }
            );


          };

        }

      }
      mSet_bknd(mE1);
      

     } 
    },


    "mUserInfo": {

      "get": () => {
        //set vars....
        var mRes = {
          "mnLoginInfo": null,
          "onBoardInfo": null,

        }; 
        //set....
        core_1mn['mLocalStorage']['retrieve']['set'](
          {
            "key": "loginInfo.1mn",
            "cb": {
              "onLoad": function(data){
                mRes['mnLoginInfo']=data;
              }
            }
          }
        );
        core_1mn['mLocalStorage']['retrieve']['set'](
          {
            "key": "products.onboardInfo.1mn",
            "cb": {
              "onLoad": function(data){
                mRes['onBoardInfo']=data;
              }
            }
          }
        );
        //set
        if(mRes['mnLoginInfo']!=null){
          mRes['mnLoginInfo'] = JSON.parse(mRes['mnLoginInfo']);
        }
        if(mRes['onBoardInfo']!=null){
          mRes['onBoardInfo'] = JSON.parse(mRes['onBoardInfo']);
        }

        //set res.....
        return mRes;

      },

      "set": (mGetParams) => {
        var mParams = mGetParams;
        var mData = mParams['dta'];
        var mCb = mParams['cb'];

        /*
        @expected (dta)
        {
    "dta_mn": {
        "dta": {
            "accessToken": "your_access_token",
            "refreshToken": "your_refresh_token",
            "onBoardDetails": [
                {
                    "is_onBoarded": true,
                    "name": "Student",
                    "type": "skle_en_stud",
                    "profileInfo": {
                        "name": "Your Name",
                        "username": "yourname"
                    }
                }
            ]
        },
        "res_mn": {
            "type": "ok",
            "latency": "1ms",
            "msg": "Login Success!",
            "details": ""
        }
    }
}
        */

         //send callback..
         const mSend_cb = function(mCb_name){
          if(mCb!=undefined){
            if(mCb[mCb_name]!=undefined){
              mCb[mCb_name]();
            }
          }
        };

        //set..
        var onBoardDetails = mData['dta_mn']['dta']['onBoardDetails'];
        var dta = mData['dta_mn']['dta'];
        //modify.. (dta)..
        delete dta['onBoardDetails'];
        var mnLoginInfo = dta;
        //stringify..
        mnLoginInfo = JSON.stringify( mnLoginInfo );
        onBoardDetails = JSON.stringify( onBoardDetails );
        //console.log(mnLoginInfo);
        //console.log(onBoardDetails);

        //set....
        core_1mn['mLocalStorage']['store']['set'](
          {
            "key": "loginInfo.1mn",
            "val": mnLoginInfo
          }
        );
        core_1mn['mLocalStorage']['store']['set'](
          {
            "key": "products.onboardInfo.1mn",
            "val": onBoardDetails
          }
        );
        //send cb..
        mSend_cb("onLoad");

        
        /*
        USAGE
        core_1mn['mUserInfo']['set'](
        {
          "dta": { },

           "cb": {
             "onLoad": function(){
                alert("Stored");
              } 
           }

           }
        );*/

        

      },

    },

    "mUniqueId": {

    "mIndex": 0,
    "mGenerate": (getDigit) => {

      //generate unique id......
      //mGenerateUniqueId(11);
      var mId = "";
      //var characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'; //(63)  --OLD--
      var characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; //(63) --NEW-- [Note: We removed Special Characters..because of (id selection with#)].
      //console.log(characters.length);
      var mIdLength = getDigit;
      for (let i1 = 0; i1 < mIdLength; i1++) {
        const mRandInt = getRndInteger(0, 63);
        mId=mId+=characters.charAt(mRandInt);
      }
      //generate random integer....
      function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }
      

      //id generated success....
      core_1mn['mUniqueId']['mIndex']=core_1mn['mUniqueId']['mIndex']+=1;
      //var mUniqueId = mId +"_"+ core_1mn['mUniqueId']['mIndex']; --OLD--
      var mUniqueId = "a" + mId +""+ core_1mn['mUniqueId']['mIndex']; //--NEW-- [Note: We removed Special Characters..because of (id selection with#)].
      //console.log(mUniqueId);

      return mUniqueId;



      /*
      ----USAGE----
      core_1mn.mUniqueId.mGenerate(10);
      
      */


     },

        
    },

    "mLoadReqJS": {

      "noOfTryagain": 2, //Maximum no of Script Reload.....
      "currTryagain": 0,

      "mJsArr": {},

      "include": (file, gObj1) => {
        /*console.log({
          "file": file,
          "gObj1": gObj1,
        });*/
        
         
        
        //check if already added in JS.....
        var mJsArr = core_1mn['mLoadReqJS']['mJsArr'];

        if(mJsArr.hasOwnProperty(file) == false){ //indexOf(file) == -1
            //****not added....(Continue to add)
             //Function to be executed
             var script  = document.createElement('script');
             script.src  = file;
             script.type = 'text/javascript';
             script.defer = true;
             document.getElementsByTagName('head').item(0).appendChild(script);
             /* Include Many js files */
             //include(url1_GVars+'js/api/MN/login.js');
             //return script; //(use this script to get Callback....)

             //add item to arr.....
             var mItem = {
                "status": 0, //0=>loading, 1=>onload
                "setCallback": () => {
                    var mMyKey = file;
                    var mNoOfTryagain = core_1mn['mLoadReqJS']['noOfTryagain'];
                    var mCurrTryagain = core_1mn['mLoadReqJS']['currTryagain'];


                     //onerror.....
                     script.onerror = function() {
                      //alert("Script onabort");
                      //set tryagain.....
                      if(mCurrTryagain < mNoOfTryagain){
                          //increase....
                          var mCountTryAgain = core_1mn['mLoadReqJS']['currTryagain']+=1;
                          //reload....(Script).....
                          var mUrl = mMyKey.split('?')[0];
                          core_1mn['mLoadReqJS'].include(mUrl+"?noOfTryagain="+mCountTryAgain);
                          
                      }else{
                        //max reload limit (reached)......
                         //refresh.....(Failed)
                         core_1mn['mIsAllLibsLoad'].set();
                      }

                    };

                    //onload.....
                    script.onload = function() {
                        //alert("Script onload");
                        //update status.....
                        var mUrl = mMyKey.split('?')[0];
                        core_1mn['mLoadReqJS']['mJsArr'][mUrl]['status'] = 1;
 
                        //console.log("Script onload: "+mUrl);

                        //store.....(loaded Success)
                        core_1mn['mIsAllLibsLoad']['mJS']['mNoOfSuccess']+=1;
                        core_1mn['mIsAllLibsLoad'].set();

                        mConf_gObj1(mUrl);

                    };

                    //here we config global(Object) of current script..
                    function mConf_gObj1(mUrl) {
                      if(gObj1==undefined){
                        return;
                      }
                      //add data..
                       eval(`
                       ${gObj1}["mScriptInfo"] = {
                        "path": "${mUrl}"
                       }
                       `);


                    }


                    //check JSON.....
                    //console.log(JSON.stringify(mJsArr));

                } 
             };
             //execute.....
             mItem['setCallback'] ();
             mJsArr[file] = mItem;

        }else{
            //already added.....
            //return 0;
            
            //check.....(status)
            if(mJsArr[file]['status']==1){
              //console.log("already added");
              //onload
              //store.....(loaded Success)
               core_1mn['mIsAllLibsLoad']['mJS']['mNoOfSuccess']+=1;
               core_1mn['mIsAllLibsLoad'].set();
            }


        }


      },
      

      "checkOrLoad": (mFile_Arr, mScriptInfo) => {
        //here we check a list of files are loaded or not.....
         //set vars....
         var mLoadSuccess = 0;
         //file array......
         /*var mFile_Arr = [
          url1_GVars+'js/api/MN/login.js',
          url1_GVars+'js/api/MN/login.js',
         ];*/ 

         for (let i1 = 0; i1 < mFile_Arr.length; i1++) {
           include(mFile_Arr[i1]);
         }

         //add data.....
         mScriptInfo['noOfReqFiles'] = mFile_Arr.length;
         mScriptInfo['mLoadSuccess'] = mLoadSuccess;
         //check.....
         if(mFile_Arr.length==mLoadSuccess){
           mScriptInfo['isAllFileLoaded'] = true;
          //ready.....
          console.log("mScriptInfo: "+JSON.stringify(mScriptInfo));
          return true;
         }else{
          mScriptInfo['isAllFileLoaded'] = false;
          //not ready....
          console.log("mScriptInfo: "+JSON.stringify(mScriptInfo));
          return false;
         }

         function include(file){
         if(core_1mn['mLoadReqJS']['mJsArr'].hasOwnProperty(file)==false){
          //file no added.....(need to add)....
          core_1mn['mLoadReqJS'].include(file);
         }else{
          //file already added.....(Check status)
          if(core_1mn['mLoadReqJS']['mJsArr'][file]['status']==1){
              //loaded success......
              mLoadSuccess+=1;
           }else{
              //loading in Progress....
              //console.log("loading in Progress....");
          }
          }
         }

      }

    },

    "mLoadReqHTML": {

      "noOfTryagain": 2, //Maximum no of Script Reload.....
      "currTryagain": 0,

      "mHTMLArr": {},

      "include": (mE1) => {

        //set vars....
        var mHtmlSrcTag = "mn1-html-src";
        var file = mE1.getAttribute(mHtmlSrcTag);
        var elmnt = mE1;
        
        //validate......
        if(file==null){
          //error....
          return;
        }

        //all ok....

        //check if already added in HTML.....
        var mHTMLArr = core_1mn['mLoadReqHTML']['mHTMLArr'];
        if(mHTMLArr.hasOwnProperty(file) == false){ //indexOf(file) == -1
            //****not added....(Continue to add)
             //Function to be executed
             /* Include Many HTML files */
             //include(url1_GVars+'css/api/MN/login.html');
             //return script; //(use this script to get Callback....)

             //add item to arr.....
             var mItem = {
                "status": 0, //0=>loading, 1=>onload
                "setCallback": () => {
                    var mMyKey = file;
                    var mNoOfTryagain = core_1mn['mLoadReqHTML']['noOfTryagain'];
                    var mCurrTryagain = core_1mn['mLoadReqHTML']['currTryagain'];


                    includeHTML();
                    function includeHTML() {
                     var mElmnt = elmnt;
                     var mFile = file;
                     var xhttp;
              

                      //set.....
                     if (mFile) {
                       /* Make an HTTP request using the attribute value as the mFile name: */
                       xhttp = new XMLHttpRequest();
                       xhttp.onreadystatechange = function() {
                         if (this.readyState == 4) {
                           if (this.status == 200) {
                             mElmnt.innerHTML = this.responseText;
                             //html loaded success......
                             //console.log('html loaded success');
                             mScript_onload(mElmnt);
                           }
                           if (this.status == 404) {
                             mElmnt.innerHTML = "Page not found.";
                             mScript_onerror(mElmnt);
                           }
                           /* Remove the attribute, and call this function once more: */
                          // mElmnt.removeAttribute(mHtmlSrcTag);
                           //includeHTML();
                         }
                       }
                       xhttp.open("GET", mFile, true);
                       xhttp.send();
                       /* Exit the function: */
                       return;
        
                     }
              

                   }


                    //onload.....
                    function mScript_onload(mElmnt) {
                      //alert("Script onload");
                        //update status.....
                        var mUrl = mMyKey.split('?')[0];
                        core_1mn['mLoadReqHTML']['mHTMLArr'][mUrl]['status'] = 1;

                        //store.....(loaded Success)
                        core_1mn['mIsAllLibsLoad']['mHTML']['mNoOfSuccess']+=1;
                        core_1mn['mIsAllLibsLoad'].set();

                         /* Remove the attribute, and call this function once more: */
                         mElmnt.removeAttribute(mHtmlSrcTag);
                      
                    }

                    //onerror.....
                    function mScript_onerror(mElmnt) {
                        //alert("Script onabort");
                        //set tryagain.....
                        if(mCurrTryagain < mNoOfTryagain){
                          //increase....
                          var mCountTryAgain = core_1mn['mLoadReqHTML']['currTryagain']+=1;
                          //reload....(Script).....
                          var mUrl = mMyKey.split('?')[0];

                          //update (attr).....
                          mElmnt.setAttribute(mHtmlSrcTag, mUrl+"&noOfTryagain="+mCountTryAgain );
                          core_1mn['mLoadReqHTML'].include(
                             //mUrl+"?noOfTryagain="+mCountTryAgain
                             mElmnt
                             ); 

                        }else{
                          //max reload limit (reached)......
                           //refresh.....(Failed)
                           core_1mn['mIsAllLibsLoad'].set();
                        }
                      
                    }




                    //check JSON.....
                    //console.log(JSON.stringify(mHTMLArr));

                } 
             };
             //execute.....
             mItem['setCallback'] ();
             mHTMLArr[file] = mItem;

        }else{
            //already added.....
            //return 0;

            //check.....(status)
            if(mHTMLArr[file]['status']==1){
              //console.log("already added");
              //onload
              //store.....(loaded Success)
               core_1mn['mIsAllLibsLoad']['mHTML']['mNoOfSuccess']+=1;
               core_1mn['mIsAllLibsLoad'].set();
            }
            
        }


      },

      "checkOrLoad": (mFile_Arr, mScriptInfo) => {
        //here we check a list of files are loaded or not.....
         //set vars....
         var mLoadSuccess = 0;
         //file array......
         /*var mFile_Arr = [
          url1_GVars+'css/api/MN/login.css',
          url1_GVars+'css/api/MN/login.css',
         ];*/ 

         for (let i1 = 0; i1 < mFile_Arr.length; i1++) {
           include(mFile_Arr[i1]);
         }

         //add data.....
         mScriptInfo['noOfReqFiles'] = mFile_Arr.length;
         mScriptInfo['mLoadSuccess'] = mLoadSuccess;
         //check.....
         if(mFile_Arr.length==mLoadSuccess){
           mScriptInfo['isAllFileLoaded'] = true;
          //ready.....
          console.log("mScriptInfo: "+JSON.stringify(mScriptInfo));
          return true;
         }else{
          mScriptInfo['isAllFileLoaded'] = false;
          //not ready....
          console.log("mScriptInfo: "+JSON.stringify(mScriptInfo));
          return false;
         }

         function include(file){
         if(core_1mn['mLoadReqHTML']['mHTMLArr'].hasOwnProperty(file)==false){
          //file no added.....(need to add)....
          core_1mn['mLoadReqHTML'].include(file);
         }else{
          //file already added.....(Check status)
          if(core_1mn['mLoadReqHTML']['mHTMLArr'][file]['status']==1){
              //loaded success......
              mLoadSuccess+=1;
           }else{
              //loading in Progress....
              //console.log("loading in Progress....");
          }
          }
         }

      }

    },

    "mLoadReqCSS": {

      "noOfTryagain": 2, //Maximum no of Script Reload.....
      "currTryagain": 0,

      "mCssArr": {},

      "include": (file) => {

        //check if already added in CSS.....
        var mCssArr = core_1mn['mLoadReqCSS']['mCssArr'];
        if(mCssArr.hasOwnProperty(file) == false){ //indexOf(file) == -1
            //****not added....(Continue to add)
             //Function to be executed
             var script  = document.createElement('link');
             script.href  = file;
             script.type = 'text/css';
             script.rel = "stylesheet";
             document.getElementsByTagName('head').item(0).appendChild(script);
             /* Include Many css files */
             //include(url1_GVars+'css/api/MN/login.css');
             //return script; //(use this script to get Callback....)

             //add item to arr.....
             var mItem = {
                "status": 0, //0=>loading, 1=>onload
                "setCallback": () => {
                    var mMyKey = file;
                    var mNoOfTryagain = core_1mn['mLoadReqCSS']['noOfTryagain'];
                    var mCurrTryagain = core_1mn['mLoadReqCSS']['currTryagain'];

                    //onload.....
                    script.onload = function() {
                        //alert("Script onload");
                        //update status.....
                        var mUrl = mMyKey.split('?')[0];
                        core_1mn['mLoadReqCSS']['mCssArr'][mUrl]['status'] = 1;

                        //store.....(loaded Success)
                        core_1mn['mIsAllLibsLoad']['mCss']['mNoOfSuccess']+=1;
                        core_1mn['mIsAllLibsLoad'].set();

                    };

                    //onerror.....
                    script.onerror = function() {
                        //alert("Script onabort");
                        //set tryagain.....
                        if(mCurrTryagain < mNoOfTryagain){
                            //increase....
                            var mCountTryAgain = core_1mn['mLoadReqCSS']['currTryagain']+=1;
                            //reload....(Script).....
                            var mUrl = mMyKey.split('?')[0];
                            core_1mn['mLoadReqCSS'].include(mUrl+"?noOfTryagain="+mCountTryAgain);
                        }else{
                          //max reload limit (reached)......
                           //refresh.....(Failed)
                           core_1mn['mIsAllLibsLoad'].set();
                        }
                    };

                    //check JSON.....
                    //console.log(JSON.stringify(mCssArr));

                } 
             };
             //execute.....
             mItem['setCallback'] ();
             mCssArr[file] = mItem;

        }else{
            //already added.....
            //return 0;

            //check.....(status)
            if(mCssArr[file]['status']==1){
              //console.log("already added");
              //onload
              //store.....(loaded Success)
               core_1mn['mIsAllLibsLoad']['mCss']['mNoOfSuccess']+=1;
               core_1mn['mIsAllLibsLoad'].set();
            }
            
        }


      },

      "checkOrLoad": (mFile_Arr, mScriptInfo) => {
        //here we check a list of files are loaded or not.....
         //set vars....
         var mLoadSuccess = 0;
         //file array......
         /*var mFile_Arr = [
          url1_GVars+'css/api/MN/login.css',
          url1_GVars+'css/api/MN/login.css',
         ];*/ 

         for (let i1 = 0; i1 < mFile_Arr.length; i1++) {
           include(mFile_Arr[i1]);
         }

         //add data.....
         mScriptInfo['noOfReqFiles'] = mFile_Arr.length;
         mScriptInfo['mLoadSuccess'] = mLoadSuccess;
         //check.....
         if(mFile_Arr.length==mLoadSuccess){
           mScriptInfo['isAllFileLoaded'] = true;
          //ready.....
          console.log("mScriptInfo: "+JSON.stringify(mScriptInfo));
          return true;
         }else{
          mScriptInfo['isAllFileLoaded'] = false;
          //not ready....
          console.log("mScriptInfo: "+JSON.stringify(mScriptInfo));
          return false;
         }

         function include(file){
         if(core_1mn['mLoadReqCSS']['mCssArr'].hasOwnProperty(file)==false){
          //file no added.....(need to add)....
          core_1mn['mLoadReqCSS'].include(file);
         }else{
          //file already added.....(Check status)
          if(core_1mn['mLoadReqCSS']['mCssArr'][file]['status']==1){
              //loaded success......
              mLoadSuccess+=1;
           }else{
              //loading in Progress....
              //console.log("loading in Progress....");
          }
          }
         }

      }

       

    }, 

    "mIsAllLibsLoad": {

      "mAllLibsCallback": null,

      "mJS": {
        "mNoOfSuccess": 0,
        "mNoOfTotal": 0, //-1
      },

      "mCss": {
        "mNoOfSuccess": 0,
        "mNoOfTotal": 0,
      },

      "mHTML": {
        "mNoOfSuccess": 0,
        "mNoOfTotal": 0,
      },


      "set": () => {

        //check if callback not null.....
        if(core_1mn['mIsAllLibsLoad']['mAllLibsCallback']==null){
          //error (no callback registered)......
          console.log("error (no callback registered)......");
          return;
        }

        //set vars....
        var mJS = core_1mn['mIsAllLibsLoad']['mJS'];
        var mCss = core_1mn['mIsAllLibsLoad']['mCss'];
        var mHTML = core_1mn['mIsAllLibsLoad']['mHTML'];

        //console.log( "mJS: " + core_1mn['mIsAllLibsLoad']['mJS']['mNoOfTotal']);
        //console.log( "mJS: " + core_1mn['mIsAllLibsLoad']['mJS']['mNoOfSuccess']);
        //console.log("mCss: "+ core_1mn['mIsAllLibsLoad']['mCss']['mNoOfTotal']);

        if( mJS['mNoOfSuccess']==mJS['mNoOfTotal']
         && mCss['mNoOfSuccess']==mCss['mNoOfTotal'] //(Ignore (uses Cache))
         && mHTML['mNoOfSuccess']==mHTML['mNoOfTotal']  //(Ignore (uses Cache))
         ){  

          //set callback..... 
          //console.log('onLoad');
          core_1mn['mIsAllLibsLoad']['mAllLibsCallback'].onLoad();

          //reset....
          mReset(); 


        }else{
          //check error......
          mCheck_Error();
          function mCheck_Error() {
            //set vars....
            var mJS = core_1mn['mLoadReqJS'];
            var mCss = core_1mn['mLoadReqCSS'];
            var mHTML = core_1mn['mLoadReqHTML'];

            if(mJS['currTryagain']==mJS['noOfTryagain'] ||
            mCss['currTryagain']==mCss['noOfTryagain'] || 
            mHTML['currTryagain']==mHTML['noOfTryagain']){
              //error......
              //set callback..... 
              //console.log('onError');
              core_1mn['mIsAllLibsLoad']['mAllLibsCallback'].onError();
              
              //reset....
              mReset(); 

            }
          }


        }


        //reset.....
        function mReset() {

          console.log({

            "JS": {
              "mNoOfSuccess": mJS['mNoOfSuccess'],
              "mNoOfTotal": mJS['mNoOfTotal'], 
             },

             "CSS": {
              "mNoOfSuccess": mCss['mNoOfSuccess'],
              "mNoOfTotal": mCss['mNoOfTotal'], 
             },

             "HTML": {
              "mNoOfSuccess": mHTML['mNoOfSuccess'],
              "mNoOfTotal": mHTML['mNoOfTotal'], 
             },

          });

          //reset....
          core_1mn['mIsAllLibsLoad']['mAllLibsCallback'] = null;
          //(JS)
          core_1mn['mIsAllLibsLoad']['mJS']['mNoOfSuccess'] = 0;
          core_1mn['mIsAllLibsLoad']['mJS']['mNoOfTotal'] = 0; //-1

          //(CSS)
          core_1mn['mIsAllLibsLoad']['mCss']['mNoOfSuccess'] = 0;
          core_1mn['mIsAllLibsLoad']['mCss']['mNoOfTotal'] = 0; //-1
          //(HTML)
          core_1mn['mIsAllLibsLoad']['mHTML']['mNoOfSuccess'] = 0;
          core_1mn['mIsAllLibsLoad']['mHTML']['mNoOfTotal'] = 0; //-1      


        }


      }



    },

    "mRand": {
      //random

      "1": {
        //random data from (array)
        "set": (mGetParams) => {
          var mParams = mGetParams;
          var mArr1 = mParams['arr1'];

          // Returns a random integer from 0 to ((mArr1.length-1) (eg. 2)):
          var mRandInt = Math.floor(Math.random() * mArr1.length);  //((mArr1.length) (eg. 3))
          var mRandDta = mArr1[mRandInt];
          //console.log("mRandDta: "+mRandDta);
          return mRandDta;
        }

      }

    },

    //typo....
    "mTypo": {

      "auto": (mGetParams) => {
        var mParams = mGetParams;
        var mStr1 = mParams['str1'];
        var mMatch = mParams['match'];
        var mEnv = core_1mn['conf']['mEnv'];

        //data.....
        var mAuto = {
          "0": {
            "set": () => {
              if(mStr1==mMatch){
                return mStr1=mStr1+=core_1mn['mRand']['1'].set({"arr1": ["","typo1","typo2"]});
              }else{
                return mStr1;
              }
             }
          },
          "1": {
            "set": () => {
              //direct
              return mStr1;
            }
          },
        };
        return mAuto[mEnv].set();
        
      }

    },


    //We can load HTML, CSS, JAVASCRIPT with this (lib)..
    "mLoadReqLibs": {

      "set": (mGetParams) => {
       
        //set vars.....
        var mParams = mGetParams;
        var mCss = mParams['mCss']!=undefined ? mParams['mCss'] : []; //(array)
        var mJS = mParams['mJS']!=undefined ? mParams['mJS'] : []; //(array) 
        var mHTML = mParams['mHTML']!=undefined ? mParams['mHTML'] : {}; //(object) @req {"mE1": "element", "mAttr1": "mn1-html-src"}
        var mAllLibsCallback = mParams['mAllLibsCallback']!=undefined ? mParams['mAllLibsCallback'] : null;


        //reset.....(currTryagain)
        core_1mn['mLoadReqJS']['currTryagain'] = 0;
        core_1mn['mLoadReqCSS']['currTryagain'] = 0;
        core_1mn['mLoadReqHTML']['currTryagain'] = 0;

       
        //filter.....(libs (ARRAY)) 
        mfilter_JS_ARR();
        function mfilter_JS_ARR() {
          var nNew_ARR = {};
          for (let i1 = 0; i1 < Object.keys(core_1mn['mLoadReqJS']['mJsArr']).length; i1++) {
            const mCurrI_key = Object.keys(core_1mn['mLoadReqJS']['mJsArr'])[i1];
            var mStatus = core_1mn['mLoadReqJS']['mJsArr'][mCurrI_key]['status'];
            
            if(mStatus==1){
              //onload
              nNew_ARR[mCurrI_key] = core_1mn['mLoadReqJS']['mJsArr'][mCurrI_key]; //(add)
            }

          }
          //update.....
          core_1mn['mLoadReqJS']['mJsArr'] = nNew_ARR;
        }
        mfilter_CSS_ARR();
        function mfilter_CSS_ARR() {
          var nNew_ARR = {};
          for (let i1 = 0; i1 < Object.keys(core_1mn['mLoadReqCSS']['mCssArr']).length; i1++) {
            const mCurrI_key = Object.keys(core_1mn['mLoadReqCSS']['mCssArr'])[i1];
            var mStatus = core_1mn['mLoadReqCSS']['mCssArr'][mCurrI_key]['status'];
            
            if(mStatus==1){
              //onload
              nNew_ARR[mCurrI_key] = core_1mn['mLoadReqCSS']['mCssArr'][mCurrI_key]; //(add)
            }

          }
          //update.....
          core_1mn['mLoadReqCSS']['mCssArr'] = nNew_ARR;
        }
        mfilter_HTML_ARR();
        function mfilter_HTML_ARR() {
          var nNew_ARR = {};
          for (let i1 = 0; i1 < Object.keys(core_1mn['mLoadReqHTML']['mHTMLArr']).length; i1++) {
            const mCurrI_key = Object.keys(core_1mn['mLoadReqHTML']['mHTMLArr'])[i1];
            var mStatus = core_1mn['mLoadReqHTML']['mHTMLArr'][mCurrI_key]['status'];
            
            if(mStatus==1){
              //onload
              nNew_ARR[mCurrI_key] = core_1mn['mLoadReqHTML']['mHTMLArr'][mCurrI_key]; //(add)
            }

          }
          //update.....
          core_1mn['mLoadReqHTML']['mHTMLArr'] = nNew_ARR;
        }


        //set vars.....
        var mReq_Libs = {
          "mCss": [
              /*"css/core_1mn.css",*/
          ],
          "mJS": [
              /*"js/mLocalStorage.js",*/
          ],

          "mHTML": [
             /* Add Elements
             <div mn1-html-src="http://www.localhost.com/html/dialogs/dialog_english_tool_1.html"></div>
             */
          ]          
        };

        //set vars....
        //js.....
        mReq_Libs['mJS'] = mJS;
        //css....
        mReq_Libs['mCss'] = mCss;
        //html....
        var mHtmlSrcTag = mHTML['mAttr1']!=undefined ? mHTML['mAttr1'] : null;
        var mBody_HTML = mHTML['mE1']!=undefined ? mHTML['mE1'] : [];
        //"mE1": document.querySelectorAll(`[mn1-html-src]`), "mAttr1": "mn1-html-src"
       

         
         //set (All Libs) Callback......
         //(mJS)
         core_1mn['mIsAllLibsLoad']['mJS']['mNoOfTotal'] = mReq_Libs['mJS'].length;
         core_1mn['mIsAllLibsLoad']['mCss']['mNoOfTotal'] = mReq_Libs['mCss'].length;
         core_1mn['mIsAllLibsLoad']['mHTML']['mNoOfTotal'] = mBody_HTML.length;


         //set callback
         var mCallback = {
             "onLoad": () => {
                console.log("onLoad");

                //onload.......
                /*window.onload = function() {
                  mStart();
                };*/
                //direct.....
                mStart();

                //start....
                function mStart() {
                   //alert("All libs loaded....");
                   console.log("All Required libs loaded....");
                   //************start......
                   //send (callback)
                   if(mAllLibsCallback!=null){
                      setTimeout(() => {
                        mAllLibsCallback.onLoad();
                      }, 200);
                   }

                }

                //reload libs..
                function mReloadLibs() {
                  core_skle_en['reload']['set']();
                }
                //mReloadLibs(); //--------TEMPORARY DISABLE-------//

                 
             },
             "onError": () => {
               console.log("onError");
               console.log("Some Required libs are not loaded....");
               //send (callback)
               if(mAllLibsCallback!=null){
                 mAllLibsCallback.onError();
               }

             }
         };
         core_1mn['mIsAllLibsLoad']['mAllLibsCallback'] = mCallback;




            //load Css....
            mLoadCss();
            function mLoadCss() {
                var mCss = mReq_Libs['mCss'];
                for (let i1 = 0; i1 < mCss.length; i1++) {
                    const mCurrFilePath = mCss[i1];
                    //console.log(mCurrItem);
                    //css......
                    var url1_GVars = core_1mn['gVars']['mUrls']['set']("url1");
                    var mFile = url1_GVars + mCurrFilePath;
                    core_1mn.mLoadReqCSS.include(mFile);

                }

            }

            //load HTML....
            mLoadHTML();
            function mLoadHTML() {
                 for (let i1 = 0; i1 < mBody_HTML.length; i1++) {
                   var mCurrE = mBody_HTML[i1];
                   //console.log(mCurrE);
                   //re-write attr.....
                   var url1_GVars = core_1mn['gVars']['mUrls']['set']("url1");
                   mCurrE.setAttribute(mHtmlSrcTag, 
                   url1_GVars + mCurrE.getAttribute(mHtmlSrcTag));

                   //add in curr HTML (Arr).....
                   mReq_Libs['mHTML'].push(mCurrE);

                   //html......
                   var mE1 = mCurrE;
                   core_1mn.mLoadReqHTML.include(mE1);

                }
                //console.log(mReq_Libs['mHTML']);
 
            } 

            //load JS..... 
            if(mReq_Libs['mHTML'].length>0 && mReq_Libs['mCss'].length>0 && mReq_Libs['mJS'].length>0){
              document.addEventListener("DOMContentLoaded", function(){
                console.log("DOMContentLoaded");
                mLoadJS();
              });
            }else{
              //direct.....
              mLoadJS();
            }
            function mLoadJS() {
              var mJS = mReq_Libs['mJS'];
              for (let i1 = 0; i1 < mJS.length; i1++) {
                  const mFileObj = mJS[i1];

                  //js......
                  //var mFile = url1_GVars + mFile;
                  var url1_GVars = core_1mn['gVars']['mUrls']['set']("url1");
                  var mFile = mFileObj['src']!=undefined ? mFileObj['src'] : mFileObj; //(string)
                  mFile = url1_GVars + mFile;
                  var gObj1 = mFileObj['gObj1']; //(string)
                  //console.log(mFile);


                  //****case (Typo)            [Manuall Scenario]
                  /*mFile = url1_GVars + core_1mn['mTypo']
                  .auto({"str1": mFile, "match": "js/api/MN/login.js"});*/

                  core_1mn.mLoadReqJS.include(mFile, gObj1);
              }

               

            }



            /*
            USAGE
          
              //set vars.....
        var mReq_Libs = {
          "mCss": [
              "css/core_1mn.css", 
              "css/main/dashboard-web/view.css",
          ],
          "mJS": [
              "js/mLocalStorage.js",  
              //core libs.....
              "libs/axios-v3/axios.min.js",
              "libs/ajv/8.11.0/ajv7.min.js",   
          ],
          "mHTML": {
            "mE1": document.querySelectorAll(`[mn1-html-src]`), 
            "mAttr1": "mn1-html-src"
          }    
        };

 

         //set callback
         var mAllLibsCallback = {
             "onLoad": () => {
                 var mDta = {
                    "mStartFunc": mStart_dashboard,
                 };

                 dta_dashboard_ViewJS.set(mDta); 
             },
             "onError": () => {
                
             }
         };

         //set......
         core_1mn['mLoadReqLibs'].set(
            {
                "mCss": mReq_Libs['mCss'],
                "mJS": mReq_Libs['mJS'],
                "mHTML": mReq_Libs['mHTML'],
                "mAllLibsCallback": mAllLibsCallback
            }
         );


            */


      }

    },


    "mDateTime": { //--Need to (--DEPRICATE--)//
      //https://medium.com/easyread/understanding-about-rfc-3339-for-datetime-formatting-in-software-engineering-940aa5d5f68a
      //2019-10-12T07:20:50.52

      "mDT": {

          "set": () => {
              //datetime......
              var mDateTime = new Date();
              return mDateTime;
          },

      },

      "mStrTo_DT": {

        "set": (mGetParams) => {
            //set vars.....
            var mParams = mGetParams;
            var mStrDate = mParams['date'];
            //cb..
            var mCb = mParams['cb'];

            //send callback..
            var mSend_cb = function(mCb_name, data){
              if(mCb!=undefined){
                if(mCb[mCb_name]!=undefined){
                  mCb[mCb_name](data);
                }
              }
            };

            //datetime......
            var mDateTime = null;
            //check error..
            try {
              mDateTime = new Date(mStrDate);
              mSend_cb("onLoad", {
                "0": mDateTime
              });
            } catch (error) {
              mSend_cb("onErr", `Error: in (mStrTo_DT)`);
            }

            //DEPRECATED (Start)
            if(mDateTime=="Invalid Date"){
              //error.....
              if(mParams.hasOwnProperty("mErrArr")){
                  //need to store....
                  mParams['mErrArr'].push(
                      {
                          "name": "mStrTo_DT",
                          "err": "Invalid Date"
                      }
                  );
              }
            }//DEPRECATED (End)

            return mDateTime;

            /*USAGE
            core_1mn['mDateTime']['mStrTo_DT']['set'](
                                                     { 
                                                      "date": "Thu Jan 26 2023 22:23:04 GMT+0530 (India Standard Time)",
                                                      "cb": {
                                                          "onLoad": function(data){
                                                              var m0 = data['0']; //date(OBJ)
                                                              console.log(m0);
                                                          },
                                                          "onErr": function(){

                                                          },
                                                      }
                                                     },
                                                  );
            
            */

        },

     },

    },
    "mYear": {   //--Need to (--DEPRICATE--)//

      "mCurrYear": {

          "set": () => {
              // Get current Year
              const mCurrentYear = new Date().getFullYear();
              //console.log(currentYear);
              return mCurrentYear;
          }

      },

      "mIncreaseYear": {

          "set": (mGetParams) => {
              var mParams = mGetParams;
              var mIncVal = mParams['mIncVal'];
              // Get increase Year
              const mYear = new Date().getFullYear() + mIncVal;
              //console.log(mYear);
              return mYear;
          }

      },

      "mDecreaseYear": {

          "set": (mGetParams) => {
              var mParams = mGetParams;
              var mDecreVal = mParams['mDecreVal'];
              // Get increase Year
              const mYear = new Date().getFullYear() - mDecreVal;
              //console.log(mYear);
              return mYear;
          }

      },

    },
    "mDay": {    //--Need to (--DEPRICATE--)//

      "mCurrDay": {

          "set": () => {
              // Get current mDay
              const mDay = new Date().getDate();
              //console.log(mDay);
              return mDay;
          }

      },

      "mIncreaseDay": {

          "set": (mGetParams) => {
              var mParams = mGetParams;
              var mIncVal = mParams['mIncVal'];
              // Get increase mDay
              const mDay = new Date().getDate() + mIncVal;
              //console.log(mDay);
              return mDay;
          }

      },

      "mDecreaseDay": {

          "set": (mGetParams) => {
              var mParams = mGetParams;
              var mDecreVal = mParams['mDecreVal'];
              // Get increase mDay
              const mDay = new Date().getDate() - mDecreVal;
              //console.log(mDay);
              return mDay;
          }

      },

    },
    "mMonth": {    //--Need to (--DEPRICATE--)//

      "mCurrMonth": {

          "set": () => {
              // Get current mMonth
              const mMonth = new Date().getMonth();
              //console.log(mMonth);
              return mMonth;
          }

      },

      "mIncreaseMonth": {

          "set": (mGetParams) => {
              var mParams = mGetParams;
              var mIncVal = mParams['mIncVal'];
              // Get increase mMonth
              const mMonth = new Date().getMonth()+ mIncVal;
              //console.log(mMonth);
              return mMonth;
          }

      },

      "mDecreaseMonth": {

          "set": (mGetParams) => {
              var mParams = mGetParams;
              var mDecreVal = mParams['mDecreVal'];
              // Get increase mMonth
              const mMonth = new Date().getMonth() - mDecreVal;
              //console.log(mMonth);
              return mMonth;
          }

      },

    },

    "test": () => {

      function mInclude(file) {
        var script  = document.createElement('script');
        script.src  = file;
        script.type = 'text/javascript';
        script.defer = true;
        document.getElementsByTagName('head').item(0).appendChild(script);
        return script;
    }
    
    
    
    var mLib1 = "js/core_1mn.js";
    //need to load....
    var mHostName = window.location.hostname; //www.xyz.com
    var mProtocol= window.location.protocol;  // Returns:'https:'
    var mPort = window.location.port; // Returns:'443'
    if(parseInt(mPort)){
        mPort = ":"+mPort;
    }else{
        mPort = ""; //wmpty
    }
    var mPath = mProtocol+"//"+mHostName+mPort+"/" + mLib1;
    console.log(mPath);

    mInclude( mPath ).onload = function(){
        alert("loaded")
        //mLoadNow();
    };
    
    
    
    

    },

    "mClearLayout": (getLayout) => {
      if(getLayout!=null){
           //console.log("Clear");
           //remove old content
           var rOld_CORRECT = getLayout;
           var rOld_child = rOld_CORRECT.lastElementChild;
           while (rOld_child) {
            rOld_CORRECT.removeChild(rOld_child);
            rOld_child = rOld_CORRECT.lastElementChild;
           }
      }
    },


    "tooltip": {

      "1": {

        "set": (mE1, mGetParams) => {
          //@requirements(mE1)
          /*
          1 - mE1.style.position = "relative"
          */
         //@additional....
         var mParams = mGetParams!=undefined ? mGetParams : {};
         var mCallback = mParams['mCallback']!=undefined ? mParams['mCallback'] : null;

           //mDiv....(mTooltip)
           var mDiv = document.createElement("mTooltip");

           mDiv.style.display = "none";
           mDiv.style.position = "absolute";
           mDiv.style.bottom = "0";
           mDiv.style.left = "0";
           mDiv.style.backgroundColor = "rgba(0,0,0,0.7)";
           mDiv.style.minWidth = "5vw";
           mDiv.style.height = "4vh";
           mDiv.style.borderRadius = "0.5vh";
           //mDiv.style.marginBottom = "1.5vh";
           //mDiv.style.marginLeft = "1.5vw";

           mE1.appendChild(mDiv);


           //content....
           var mTtContent = document.createElement("div");
           mTtContent.setAttribute("tag_n", "item");
           mTtContent.style.width = "100%";
           mTtContent.style.height = "100%";
           mTtContent.style.display = "flex";
           mTtContent.style.justifyContent = "center";
           mTtContent.style.alignItems = "center";
           mDiv.appendChild(mTtContent);


           mE1.onmouseover = function() {
            mDiv.style.display = "block";
            mSend_callback("onmouseover");
           };
           mE1.onmouseout = function() {
            mDiv.style.display = "none";
            mSend_callback("onmouseout");
           };


           //send callback.....
           function mSend_callback(cb_name) {
             if(mCallback!=null){
              mCallback.set({
                "cb_name": cb_name,
                "mE1": mE1
              });
             }
           }


           return mDiv;

        }

      },


      "2": {

        "set": (mGetParams) => {
          //@requirements(mE1)
          /*
          1 - mE1.style.position = "relative"
          */
         //@additional....
         var mParams = mGetParams!=undefined ? mGetParams : {};
         var mE1 = mParams['mE1']!=undefined ? mParams['mE1'] : null;
         var mCb = mParams['cb']!=undefined ? mParams['cb'] : null;
         var mCaret = mParams['0']!=undefined ? mParams['0'] : null; //(caret info)
         var mTt_content = mParams['1']!=undefined ? mParams['1'] : {}; //(tooltip content info)
         var mTt = mParams['2']!=undefined ? mParams['2'] : {}; //(tooltip info)

          

           var mVertiDiv = null;
           mSet_tt();
           function mSet_tt() {
           var m0 = mTt['0']!=undefined ? mTt['0'] : "0 0 0 0"; //margin
           var m1 = mTt['1']!=undefined ? mTt['1'] : "4vh"; //height
           var m2 = mTt['2']!=undefined ? mTt['2'] : "10vw"; //minWidth

            //mVertiDiv....(mTooltip)
           mVertiDiv = document.createElement("mTooltip");

           mVertiDiv.style.display = "none";
           //set....
           mVertiDiv.setAttribute("tt_orien", "0"); 

           mVertiDiv.style.position = "absolute";
           mVertiDiv.style.bottom = "0";
           mVertiDiv.style.left = "0";
           mVertiDiv.style.zIndex = "1";
           mVertiDiv.style.minWidth = m2;
           mVertiDiv.style.height = m1;
           mVertiDiv.style.margin = m0; //0 0 -2.5vh 0vw
           mE1.appendChild(mVertiDiv); 
            
           } 

         
           var mTtContent = null;
           mSet_tt_content();
           function mSet_tt_content() {
           var m0 = mTt_content['0']!=undefined ? mTt_content['0'] : "rgba(0,0,0,0.7)"; //background color
           var m1 = mTt_content['1']!=undefined ? mTt_content['1'] : "0.3vh solid rgba(34,34,34,0.3)"; //border


           //content....
           mTtContent = document.createElement("div");
           mTtContent.setAttribute("tag_n", "tt_content");
           mTtContent.style.minWidth = "100%";
           mTtContent.style.height = "100%";
           mTtContent.style.display = "flex";
           //mTtContent.style.justifyContent = "center";
           mTtContent.style.alignItems = "center";
           mTtContent.style.backgroundColor = m0;  //rgba(0,0,0,0.7)
           mTtContent.style.borderRadius = "0.5vh";
           mTtContent.style.boxShadow = "0 0.3vh 0.4vh 0 rgba(0,0,0,0.2)";
           mTtContent.style.border = m1;

           mVertiDiv.appendChild(mTtContent);
            
           }



           if(mCaret!=null){
            mSet_caret();
          }
         function mSet_caret() {
          var m0 = mCaret['0']!=undefined ? mCaret['0'] : 0; //caret (pos) [B, T, L, R]
          var m1 = mCaret['1']!=undefined ? mCaret['1'] : "0 0 0 0"; //caret (margin) [T, R, B, L]
          var m2 = mCaret['2']!=undefined ? mCaret['2'] : mTtContent.style.backgroundColor; //caret (background-color) 
          var m3 = mCaret['3']!=undefined ? mCaret['3'] : "0.4vw"; //caret (size) 

          //update....
          mVertiDiv.setAttribute("tt_orien", m0); 


           //mCaretDiv....
         var mCaretDiv = document.createElement("div");
         mCaretDiv.setAttribute("tag_n", "caretdiv");
         mCaretDiv.style = `
         width: ${m3};
         border-width: ${m3};
         border-style: solid;
         `; //rgba(255,255,255,1.0)
         mCaretDiv.style.margin = m1;
         

         if(m0==0){
           mVertiDiv.appendChild(mCaretDiv);
           mCaretDiv.style.borderColor = `${m2} transparent  transparent transparent`; 

         }
         if(m0==1){
          mVertiDiv.insertBefore(mCaretDiv, mTtContent);
          mCaretDiv.style.borderColor = `transparent  transparent ${m2} transparent`;
          
         }
         if(m0==2){
          mVertiDiv.insertBefore(mCaretDiv, mTtContent);
          mCaretDiv.style.borderColor = `transparent ${m2} transparent transparent`;
          mVertiDiv.style.display = "flex";
          mCaretDiv.style.height = "0.5vw";
         }
         if(m0==3){
          mVertiDiv.appendChild(mCaretDiv);
          mCaretDiv.style.borderColor = `transparent transparent transparent ${m2}`;
          mVertiDiv.style.display = "flex";
          mCaretDiv.style.height = "0.5vw";
         }
          
         }


           if(mCb!=null){
             //send callback.....
             mSend_cb();
           }
           function mSend_cb() {
            mE1.onmouseover = function() {
              if(mCb['onmouseover']!=undefined){
                mCb.onmouseover();
              }
             };
             mE1.onmouseout = function() {
              if(mCb['onmouseout']!=undefined){
                mCb.onmouseout();
              }
             };
           }

           //events.....
           var mEvents = { 
            "tt": {
              "e": mVertiDiv, //element
              "show": (mGetE1, mMsgDiv) => {
                mGetE1 = mEvents.tt.e; //Note: We are overriding..//You can pass any [VALUE]
                //alert("show");
                var tt_orien = mGetE1.getAttribute("tt_orien");
                if(tt_orien==0 || tt_orien==1){
                  //use (block)
                  mSet_item("block");
                }else{
                  //use (flex)
                  mSet_item("flex");
                }
                function mSet_item(mDta1) {
                  var tt_content = mGetE1.querySelectorAll("[tag_n=tt_content]")[0];
                  tt_content.innerHTML = ""; //reset..
                  //set content....
                  tt_content.appendChild(mMsgDiv['note']['e']);
                  mMsgDiv['note'].show();
                  //show....
                  mGetE1.style.display = mDta1;
                }
              },
              "hide": (mGetE1) => {
                mGetE1 = mEvents.tt.e; //Note: We are overriding..//You can pass any [VALUE]
                //alert("hide");
                mGetE1.style.display = "none";
              },
            }

           };

           return mEvents;

           /*
           USAGE
           //Tooltip....
                var mTooltip = core_1mn['tooltip']['2'].set(
                {
                  "mE1": mDivRoot,
                  //"mCallback": mCallback
                  "0": {
                    "0": 1,
                    "1": "0 0 0 15%",
                    "2": "#fc8691",
                    "3": "0.3vw"
                  },
                  "1": {
                    "0": "#fafafa",
                    "1": "0.21vh solid #fc8691",
                  },
                  "2": {
                    "0": "0 0 -3.8vh -1.5vw",
                    "1": "4.4vh",
                    "2": "15vw",
                  },

               });

               mTooltip['tt'].show(mTooltip['tt']['e']);

               ----------OR-----------
                 let mNote = document.createElement("div");
                                            mNote.innerHTML = "mMsgDiv";
                                            let mMsgDiv = {
                                                "note": {
                                                    "e": mNote,
                                                    "show": () => {
                                                        console.log(`mNote cb`);
                                                    }
                                                }
                                            };
                                            var mTooltip = core_1mn['tooltip']['2'].set(
                                                {
                                                  "mE1": mE, //mDivRoot,
                                                  //"mCallback": mCallback
                                                  "0": {
                                                    "0": 1,
                                                    "1": "0 0 0 15%",
                                                    "2": "#fc8691",
                                                    "3": "0.3vw"
                                                  },
                                                  "1": {
                                                    "0": "#fafafa",
                                                    "1": "0.21vh solid #fc8691",
                                                  },
                                                  "2": {
                                                    "0": "0 0 -3.8vh -1.5vw",
                                                    "1": "4.4vh",
                                                    "2": "15vw",
                                                  },
                                
                                               });
                                
                                               mTooltip['tt'].show(mTooltip['tt']['e'],
                                               mMsgDiv);



           */


        }

      },



    },



    //btn..
    "btn": {
      //https://uxdesign.cc/button-design-user-interface-components-series-85243b6736c7
      //https://uxdesign.cc/ui-cheat-sheets-buttons-7329ed9d6112

      "mUtils": {
      },

      //-----Will be REMOVE soon----// (Start)
      "disable": {

        "set": (mBtn) => {
          mBtn.disabled = true;
          mBtn.style.position = "relative";


          //mDiv....(Disable Layer)
          var mDiv = document.createElement("mDisableLayer");

          mDiv.style.position = "absolute";
          mDiv.style.top = "0";
          mDiv.style.left = "0";
          mDiv.style.backgroundColor = "rgba(255,255,255,0.5)";
          mDiv.style.width = "100%";
          mDiv.style.height = "100%";
          mDiv.style.borderRadius = "0.5vh";

          mDiv.setAttribute("mElemName", "mDisableLayer");

          mBtn.appendChild(mDiv);

          return mBtn;

        }

      },
      "enable": {

        "set": (mBtn) => {
          mBtn.disabled = false;
          mBtn.style.position = "relative";

          //mDiv....(Disable Layer)
          var mDiv = mBtn.querySelectorAll("mDisableLayer")[0];
          if(mDiv!=null){
            //remove layer.....
            mDiv.remove();  
          }

          return mBtn;

        }

      },
      //-----Will be REMOVE soon----// (end)


      //-----New-----//
      "1": {
        "conf": [ //configuration..  

          /*{ //struct..
            "name": "YOUR_NAME",
            "typ": 0              //int || string     eg=> [add prefix `x_{YOUR_PARAM_NAME}`]
            "vari": //variant,
            [
              {
                "typ": 0, //(0)contained
                "t": { //text
                  "clr": `rgba(255,255,255, 1.0)` //color
                },
                "bg": { //background
                  "clr": `rgba(14,112,205, 1.0)` //color
                }
              },
              {
                "typ": 1,  //(1)outlined
                "t": { //text
                  "clr": `rgba(14,112,205, 1.0)` //color
                },
                "ol": { //outline
                  "clr": `rgba(14,112,205, 1.0)` //color
                }
              },
              {
                "typ": 2,  //(2)text
                "t": { //text
                  "clr": `rgba(14,112,205, 1.0)` //color
                }
              },
            ]

          },*/


          {  
            "name": "DEFAULT",
            "typ": 0,
            "vari": //variant
            [
              {
                "typ": 0, //(0)contained
                "t": { //text
                  "clr": `rgba(255,255,255, 1.0)` //color
                },
                "bg": { //background
                  "clr": `rgba(34,34,34, 1.0)` //color
                }
              },
              {
                "typ": 1,  //(1)outlined
                "t": { //text
                  "clr": `rgba(34,34,34, 1.0)` //color
                },
                "ol": { //outline
                  "clr": `rgba(34,34,34, 1.0)` //color
                }
              },
              {
                "typ": 2,  //(2)text
                "t": { //text
                  "clr": `rgba(34,34,34, 1.0)` //color
                }
              },
            ]

          },


          {  
            "name": "INFO",
            "typ": 1,
            "vari": //variant
            [
              {
                "typ": 0, //(0)contained
                "t": { //text
                  "clr": `rgba(255,255,255, 1.0)` //color
                },
                "bg": { //background
                  "clr": `rgba(14,112,205, 1.0)` //color
                }
              },
              {
                "typ": 1,  //(1)outlined
                "t": { //text
                  "clr": `rgba(14,112,205, 1.0)` //color
                },
                "ol": { //outline
                  "clr": `rgba(14,112,205, 1.0)` //color
                }
              },
              {
                "typ": 2,  //(2)text
                "t": { //text
                  "clr": `rgba(14,112,205, 1.0)` //color
                }
              },
            ]

          },


          {  
            "name": "WARN",
            "typ": 2,
            "vari": //variant
            [
              {
                "typ": 0, //(0)contained
                "t": { //text
                  "clr": `rgba(34,34,34, 1.0)` //color
                },
                "bg": { //background
                  "clr": `rgba(255,208,112, 1.0)` //color
                }
              }, 
            ]

          },
 

          {
            "name": "SUCCESS",
            "typ": 3,
            "vari": //variant
            [
              {
                "typ": 0, //(0)contained
                "t": { //text
                  "clr": `rgba(255,255,255, 1.0)` //color
                },
                "bg": { //background
                  "clr": `rgba(0,152,88, 1.0)` //color
                }
              },
              {
                "typ": 1,  //(1)outlined
                "t": { //text
                  "clr": `rgba(0,152,88, 1.0)` //color
                },
                "ol": { //outline
                  "clr": `rgba(0,152,88, 1.0)` //color
                }
              },
              {
                "typ": 2,  //(2)text
                "t": { //text
                  "clr": `rgba(0,152,88, 1.0)` //color
                }
              },
            ]

          },


          {
            "name": "DANGER",
            "typ": 4,
            "vari": //variant
            [
              {
                "typ": 0, //(0)contained
                "t": { //text
                  "clr": `rgba(255,255,255, 1.0)` //color
                },
                "bg": { //background
                  "clr": `rgba(226,51,55, 1.0)` //color
                }
              },
              {
                "typ": 1,  //(1)outlined
                "t": { //text
                  "clr": `rgba(226,51,55, 1.0)` //color
                },
                "ol": { //outline
                  "clr": `rgba(226,51,55, 1.0)` //color
                }
              },
              {
                "typ": 2,  //(2)text
                "t": { //text
                  "clr": `rgba(226,51,55, 1.0)` //color
                }
              },
            ]

          },


        ],
        "set_OLD": function(mGetParams){
          var mParams = mGetParams;
          var mW = mParams['w']!=undefined ? mParams['w'] : "7vw";
          var mH = mParams['h']!=undefined ? mParams['h'] : "4vh";
          var mTxt = mParams['txt']!=undefined ? mParams['txt'] : {"0": "Button", "1": "1.3vh" };
          var mIco = mParams['ico']!=undefined ? mParams['ico'] : {"0": "sample.svg", "1": "1.3vh", "2": "1.3vh", //"3": "rgba(255,255,255, 1.0)" 
          };
          var mE1 = mParams['e1']; //@req
          var mCb = mParams['cb']; //@req
          var mPosH = mParams['posH']!=undefined ? mParams['posH'] : 0;
          var mTyp = mParams['typ']!=undefined ? mParams['typ'] : 0; //type ["DEFAULT", "INFO", "WARN", "SUCCESS", "DANGER"]
          var mVari = mParams['vari']!=undefined ? mParams['vari'] : 0; //variant ["contained", "outlined", "text"]

          //set..
          var mConf = core_1mn["btn"]["1"]["conf"]; //Set button Conf..
          if (mConf[mTyp]==undefined) {
            //invalid (typ)..
            alert(`invalid (typ) found..Available (typ):  ${Object.keys(mConf)}`)
          }else {
            //set.. 
            mConf = mConf[mTyp];
          }


          //send callback..
          function mSend_cb(mCb_name, data) {
            if(mCb!=undefined){
              if(mCb[mCb_name]!=undefined){
                mCb[mCb_name] (data);
              }
            }
          };



          var mJustifyContent = ["start", "center", "end"];
          //set....
          var mBtnViewer = document.createElement("btn_viewer_1mn");
          mBtnViewer.style.display = "flex";
          mBtnViewer.style.justifyContent = mJustifyContent[mPosH]; //0=>left, 1=>center, 2=>right
          mE1.appendChild(mBtnViewer);  

          //set.....
          var mBtnHolder = document.createElement("btn_holder_1mn");
          mBtnHolder.style.width = mW;
          mBtnHolder.style.height = mH;
          mBtnHolder.style.position = "relative";
          mBtnHolder.style.display = "flex";
          mBtnHolder.style.justifyContent = "center";
          mBtnHolder.style.alignItems = "center";
          mBtnViewer.appendChild(mBtnHolder);  

           //mBtn......
           var mBtn = document.createElement("btn_1mn");
           mBtn.id = core_1mn['mUniqueId'].mGenerate(16);
           mBtn.style.position = "absolute";

           mBtn.style.display = "flex";
           mBtn.style.justifyContent = "center";
           mBtn.style.alignItems = "center";
           

           mBtn.style.width = mBtnHolder.style.width;
           mBtn.style.height = mBtnHolder.style.height;
           if (mVari==0) {
              mBtn.style.boxShadow = "0vh 0.08vh 0vh 0vh #fff6af"; //0px 1px 0px 0px #fff6af
              mBtn.style.background = `linear-gradient(to bottom, ${mConf['0']} 5%, rgba(255,255,255,0.3) 100%)`;
              mBtn.style.backgroundColor = mConf['0'];
              mBtn.style.outline = `0.09vh solid ${mConf['0']}`; //1px solid #1760a3
           }
           mBtn.style.borderRadius = "0.7vh"; //6px
           if (mVari==1) {
             mBtn.style.outline = `0.09vh solid ${mConf['2']}`; //1px solid #1760a3
           }

           mBtn.style.cursor = "pointer"; 
           //mBtn.style.fontWeight = "bold";
           //mBtn.style.padding = "0.7vh 1.7vw";

           //events.....
          mBtn.onmouseover = function(){
            var mCurrItemId = this.id;
            var mCurrItem = document.getElementById(mCurrItemId);
            if (mVari==0) {
              mCurrItem.style.background = `linear-gradient(to bottom, rgba(255,255,255,0.3) 5%, ${mConf['0']} 100%)`;
              mCurrItem.style.backgroundColor = mConf['0'];
            }else {
              mCurrItem.style.backgroundColor = mConf['1'];
            }
            if (mVari==1) {
               mBtn.style.outline = `0.09vh solid ${mConf['0']}`; //1px solid #1760a3
            }
            
          };

          mBtn.onmouseout = function(){
            var mCurrItemId = this.id;
            var mCurrItem = document.getElementById(mCurrItemId);
            if (mVari==0) {
             mCurrItem.style.background = `linear-gradient(to bottom, ${mConf['0']} 5%, rgba(255,255,255,0.3) 100%)`;
             mCurrItem.style.backgroundColor = mConf['0'];
            }else {
              mCurrItem.style.backgroundColor = "transparent";
            }
            if (mVari==1) {
              mBtn.style.outline = `0.09vh solid ${mConf['2']}`; //1px solid #1760a3
            }
          };
 

          mBtn.onclick = function(){
            var mCurrItemId = this.id;
            //alert("btn click: "+mCurrItemId);
            //onClick....
            mSend_cb("onClick", {"e": document.getElementById(mCurrItemId)});
          };

          mBtnHolder.appendChild(mBtn);


          //ico..
          if(mParams['ico']!=undefined){
            mSet_IcoE();
          }
          function mSet_IcoE() { 
            var mIcoE = document.createElement("ico_e_1mn");
            mIcoE.style.paddingRight = "0.3vw"; 
            mIcoE.style.height = mTxt['1'];
            //mIcoE.style.backgroundColor = "red";
            mIcoE.style.display = "flex";
            mIcoE.style.justifyContent = "center";
            mIcoE.style.alignItems = "center";
            mBtn.appendChild(mIcoE);
 
             //set svg1..
             function mSet_Svg1() { 
              if (mIco["3"]==undefined) {
                //--set ico color--//
                if (mVari==0) {
                  mIco["3"] = "#ffffff";
                }else {
                  mIco["3"] = mConf["0"];
                }
              }

              core_1mn['mSvg'].set({
                "0": mIco['0'],
                //"1": ,
                "2": mIco['1'],
                "3": mIco['2'],
                "4": mIco['3'],
                "5": mIcoE,
                "cb": {
                    /*"onClick": (mCurrItem) => {
                        //alert("onClick");
                        //close..
                    }*/
                }
              }); 

             }
             mSet_Svg1();  

          }

          //text..
          mSet_TxtE();
          function mSet_TxtE() {
            var mTxtE = document.createElement("txt_e_1mn");
            mTxtE.innerHTML = mTxt['0'];
            mTxtE.style.textDecoration = "none";
            mTxtE.style.userSelect = "none";
            mTxtE.style.textShadow = "0vh 0.08vh 0vh rgba(255,255,255,0.4)"; //0px 1px 0px rgba(255,255,255,0.4)
            if (mVari==0) {
              mTxtE.style.color = "#ffffff";
            }else {
              mTxtE.style.color = mConf["0"];
            }
            mTxtE.style.fontFamily = "Arial";
            mTxtE.style.fontSize = mTxt['1']; //"1.6vh";
            mBtn.appendChild(mTxtE);
          }
          
           

          //disable (layer)..
          var mDisableLayer = document.createElement("dis_layer_btn_1mn");
          mDisableLayer.id = core_1mn['mUniqueId'].mGenerate(15);
          //hide..
          mDisableLayer.style.visibility = "hidden";
          mDisableLayer.style.width = (parseFloat(mBtnHolder.style.width) + 0.2) + "vw";
          mDisableLayer.style.height = (parseFloat(mBtnHolder.style.height) + 0.2) + "vh";
          mDisableLayer.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
          mDisableLayer.style.position = "absolute";
          mDisableLayer.style.borderRadius = "0.7vh";  
          mBtnHolder.appendChild(mDisableLayer);


          //events..
          mDisableLayer.onclick = function(){
            var mCurrItemId = this.id;
            //alert("btn disabled layer click: "+mCurrItemId);
            //onClick....
            mSend_cb("onClickD", {"e": document.getElementById(mCurrItemId)});
          };

          //onLoad....
          mSend_cb("onLoad", {"e": mBtn});


          //events.....
          var mEvents = { 
            "btn": {
              "eBtn": mBtn, //element
              "e1": mBtnHolder, //element
              "e2": mDisableLayer,
              "show": () => {
                var mBtn = mEvents['btn']['eBtn'];
                mBtn.style.display = "flex";  //block
                mBtnHolder.style.display = "flex"; //block
              },
              "hide": () => {
                var mBtn = mEvents['btn']['eBtn'];
                mBtn.style.display = "none";
                mBtnHolder.style.display = "none";
              },
              "disable": () => {
                var mBtn = mEvents['btn']['eBtn'];
                mBtn.disabled = true;
                //set disable layer..
                var mDisableLayer = mEvents['btn']['e2'];
                mDisableLayer.style.visibility = "visible";
              },
              "enable": () => {
                var mBtn = mEvents['btn']['eBtn'];
                mBtn.disabled = false;
                //set disable layer..
                var mDisableLayer = mEvents['btn']['e2'];
                mDisableLayer.style.visibility = "hidden";
              },
              "pbShow": (mColor) => {
                mEvents['btn'].disable();
                //set..
                var mDisableLayer = mEvents['btn']['e2'];
                function mSetPb() {
                  core_1mn['mAnim']['loader']['0']['set']({
                    "e1": mDisableLayer,
                    "1": mColor!=undefined ? mColor : mConf['0']
                  });
                }
                mSetPb();
              },
              "pbHide": () => {
                mEvents['btn'].enable();
                //set..
                var mDisableLayer = mEvents['btn']['e2'];
                function mRemovePb() {
                  mDisableLayer.querySelectorAll("anim_loader_1mn")[0].remove();
                }
                mRemovePb();
              },
            }

          };

          return mEvents;

          

          /*USAGE
          
          //Btn.....  
          var mBtnHolder = document.createElement("div");
          document.body.appendChild(mBtnHolder);
          var mBtn = core_1mn['btn']['1'].set({ 
              "e1": mBtnHolder,
              "w": "5vw",
              "posH": 1,
              "h": "3.2vh",
              "txt": {
                "0": "Login",
                "1": "1.3vh"
              },
              "ico": {"0": "sample.svg", "1": "1.3vh", "2": "1.3vh", "3": "rgba(255,255,255, 1.0)" },
              "cb": {
                  "onLoad": function(data){
                      //var mBtn = data['btn'];
                      //console.log(mBtn);
                  },
                  "onClick": function(data){
                      //alert(JSON.stringify(data));
                      //console.log(data);
                  },
                  "onClickD": function(data){
                      //alert(JSON.stringify(data));
                      //console.log(data);
                  }
              },
              //typ..
              "typ": 2,
              //variant..
               "vari": 2
          });
         //mBtn['btn']['hide'] ();
         //mBtn['btn']['show'] ();
         //mBtn['btn']['disable'] ();
         //mBtn['btn']['enable'] ();
         //mBtn['btn']['pbShow'] ("red");
         //mBtn['btn']['pbHide'] ();

          */

        },
        "set": (mGetParams) => {
          let mParams = mGetParams;
          let mW = mParams['w']!=undefined ? mParams['w'] : "7vw";
          let mH = mParams['h']!=undefined ? mParams['h'] : "4vh";
          let mTxt = mParams['txt']!=undefined ? mParams['txt'] : {"0": "Button", "1": "1.3vh" };
          let mIco = mParams['ico']!=undefined ? mParams['ico'] : {"0": "sample.svg", "1": "1.3vh", "2": "1.3vh", //"3": "rgba(255,255,255, 1.0)" 
          };
          let mE1 = mParams['e1']; //@req
          let mCb = mParams['cb']; //@req
          let mPosH = mParams['posH']!=undefined ? mParams['posH'] : 0;
          let mTyp = mParams['typ']!=undefined ? mParams['typ'] : 0; //type ["DEFAULT", "INFO", "WARN", "SUCCESS", "DANGER"]
          let mVari = mParams['vari']!=undefined ? mParams['vari'] : 0; //variant ["contained", "outlined", "text"]

          //--utils--//
          let mAvail_typ = (a) => {
            let mNew = [];
            //gen..
            for (let i = 0; i < a.length; i++) {
              const e = a[i];
              //set..
              mNew.push(e["typ"]);
            }
            return mNew;
          };
 

          //set..
          let mConf = core_1mn["btn"]["1"]["conf"]; //Set button Conf..
          mConf = mConf.filter(eF => eF["typ"]==mTyp);
          //check..
          if (mConf.length==0) {
            let msg = `err: [typ=${mTyp}] is invalid.
            \n\nAvailable [typ] => ${mAvail_typ(core_1mn["btn"]["1"]["conf"])}`;
            console.error(msg);
            return;
          }
          if (mConf.length>1) {
            let msg = `err: duplicate..[typ=${mTyp}] found in [mConf]`;
            console.error(msg);
            return;
          }
          //all ok..
          mConf = mConf[0];
          


          //send callback..
          function mSend_cb(mCb_name, data) {
            if(mCb!=undefined){
              if(mCb[mCb_name]!=undefined){
                mCb[mCb_name] (data);
              }
            }
          };

          //mRndr..
          let mRndr = {
            "utils": {
              "txt1": (mE, mV) => {
                //text..
                mSet_TxtE(mE);
                function mSet_TxtE(mBtn) {
                  let mTxtE = document.createElement("txt_e_1mn");
                  mTxtE.innerHTML = mTxt['0'];
                  mTxtE.style.textDecoration = "none";
                  mTxtE.style.userSelect = "none";
                  mTxtE.style.textShadow = "0vh 0.08vh 0vh rgba(255,255,255,0.4)"; //0px 1px 0px rgba(255,255,255,0.4)
                  mTxtE.style.fontFamily = "Arial";
                  mTxtE.style.fontSize = mTxt['1']; //"1.6vh";
                  mBtn.appendChild(mTxtE);

                  //style..
                  mTxtE.style.color = `${mV["t"]["clr"]}`;


                };
              },
              "ico1": (mE, mV) => {
                //ico..
                if (mParams['ico'] != undefined) {
                  mSet_IcoE(mE);
                }
                function mSet_IcoE(mBtn) {
                  let mIcoE = document.createElement("ico_e_1mn");
                  mIcoE.style.paddingRight = "0.3vw";
                  mIcoE.style.height = mTxt['1'];
                  //mIcoE.style.backgroundColor = "red";
                  mIcoE.style.display = "flex";
                  mIcoE.style.justifyContent = "center";
                  mIcoE.style.alignItems = "center";
                  mBtn.appendChild(mIcoE);

                  //set svg1..
                  function mSet_Svg1() {
                    if (mIco["3"] == undefined) {
                      //--set ico color--//
                      mIco["3"] = mV["t"]["clr"];
                    }

                    core_1mn['mSvg'].set({
                      "0": mIco['0'],
                      //"1": ,
                      "2": mIco['1'],
                      "3": mIco['2'],
                      "4": mIco['3'],
                      "5": mIcoE,
                      "cb": {
                        /*"onClick": (mCurrItem) => {
                            //alert("onClick");
                            //close..
                        }*/
                      }
                    });

                  }
                  mSet_Svg1();

                }
              }
            },
            "l": [
              {
                "name": `contained`,
                "key": 0,
                "set": (k, v, i) => {
                  //set vars..
                  let mP = v["p"];
                  //set..
                  let mBtn = mP["btn"];
                  let mConf = mP["mConf"];
                  //vali..
                  let mSel_vari = mConf["vari"].find(eF => eF["typ"]==k);
                  if (mSel_vari==undefined) {
                    let msg = `err: mConf.vari [vari=${k}] is not avail..`;
                    console.error(msg);
                    return;
                  }
                  //all ok..

                  //set..
                  let mSet = (mE, mV) => {
                    //ico..
                    mRndr.utils.ico1(mE, mV);


                    //text..
                    mRndr.utils.txt1(mE, mV);
                    //btn..
                    mBtn.style.boxShadow = "0vh 0.08vh 0vh 0vh #fff6af"; //0px 1px 0px 0px #fff6af
                    mBtn.style.background = `linear-gradient(to bottom, ${mV['bg']["clr"]} 5%, rgba(255,255,255,0.3) 100%)`;
                    mBtn.style.backgroundColor = mV['bg']["clr"];
                    mBtn.style.outline = `0.09vh solid ${mV['bg']["clr"]}`; //1px solid #1760a3
                    mBtn.style.borderRadius = "0.7vh"; //6px

                    //events.....
                    mBtn.onmouseover = function () {
                      let mCId = this.id;
                      let mCI = document.getElementById(mCId);
                      mCI.style.background = `linear-gradient(to bottom, rgba(255,255,255,0.3) 5%, ${mV['bg']["clr"]} 100%)`;
                      mCI.style.backgroundColor = mV['bg']["clr"];
                    };
                    mBtn.onmouseout = function () {
                      let mCId = this.id;
                      let mCI = document.getElementById(mCId);
                      mCI.style.background = `linear-gradient(to bottom, ${mV['bg']["clr"]} 5%, rgba(255,255,255,0.3) 100%)`;
                      mCI.style.backgroundColor = mV['bg']["clr"];
                    };



                  };
                  mSet(mBtn, mSel_vari);



                }
              },

              {
                "name": `outlined`,
                "key": 1,
                "set": (k, v, i) => {
                  //set vars..
                  let mP = v["p"];
                  //set..
                  let mBtn = mP["btn"];
                  let mConf = mP["mConf"];
                  //vali..
                  let mSel_vari = mConf["vari"].find(eF => eF["typ"]==k);
                  if (mSel_vari==undefined) {
                    let msg = `err: mConf.vari [vari=${k}] is not avail..`;
                    console.error(msg);
                    return;
                  }
                  //all ok..

                  //set..
                  let mSet = (mE, mV) => {
                     //ico..
                     mRndr.utils.ico1(mE, mV);
                    //text..
                    mRndr.utils.txt1(mE, mV);
                    //btn..
                    //mBtn.style.boxShadow = "0vh 0.08vh 0vh 0vh #fff6af"; //0px 1px 0px 0px #fff6af
                    mBtn.style.outline = `0.09vh solid ${mV['ol']["clr"]}`; //1px solid #1760a3
                    mBtn.style.borderRadius = "0.7vh"; //6px

                    //events.....
                    mBtn.onmouseover = function () {
                      let mCId = this.id;
                      let mCI = document.getElementById(mCId);
                      //mCI.style.outline = `0.3vh solid ${mV['ol']["clr"]}`;
                      mCI.style.backgroundColor = `rgba(34,34,34, 0.03)`;
                    };
                    mBtn.onmouseout = function () {
                      let mCId = this.id;
                      let mCI = document.getElementById(mCId);
                      //mCI.style.outline = `0.09vh solid ${mV['ol']["clr"]}`;
                      mCI.style.backgroundColor = `transparent`;
                    };  

                  };
                  mSet(mBtn, mSel_vari);



                }
              },

              {
                "name": `text`,
                "key": 2,
                "set": (k, v, i) => {
                  //set vars..
                  let mP = v["p"];
                  //set..
                  let mBtn = mP["btn"];
                  let mConf = mP["mConf"];
                  //vali..
                  let mSel_vari = mConf["vari"].find(eF => eF["typ"]==k);
                  if (mSel_vari==undefined) {
                    let msg = `err: mConf.vari [vari=${k}] is not avail..`;
                    console.error(msg);
                    return;
                  }
                  //all ok..

                  //set..
                  let mSet = (mE, mV) => {
                     //ico..
                     mRndr.utils.ico1(mE, mV);
                    //text..
                    mRndr.utils.txt1(mE, mV);
                    //btn..
                    //mBtn.style.boxShadow = "0vh 0.08vh 0vh 0vh #fff6af"; //0px 1px 0px 0px #fff6af
                    mBtn.style.borderRadius = "0.7vh"; //6px

                    //events.....
                    mBtn.onmouseover = function () {
                      let mCId = this.id;
                      let mCI = document.getElementById(mCId);
                      mCI.style.backgroundColor = `rgba(34,34,34, 0.03)`;
                    };
                    mBtn.onmouseout = function () {
                      let mCId = this.id;
                      let mCI = document.getElementById(mCId);
                      mCI.style.backgroundColor = `transparent`;
                    };  

                  };
                  mSet(mBtn, mSel_vari);



                }
              },

            ],
            "set": (k, v) => {
              let mIdx = mRndr["l"].findIndex(eF => eF["key"]==k);
              if (mIdx==-1) {
                let msg = `err: mRndr.l [vari=${k}] is not avail..`;
                console.error(msg);
                return;
              }
              mRndr["l"][mIdx].set(k, v, mIdx);
            }
          };


          //set..
          let mJustifyContent = ["start", "center", "end"];
          //set....
          let mBtnViewer = document.createElement("btn_viewer_1mn");
          mBtnViewer.style.display = "flex";
          mBtnViewer.style.justifyContent = mJustifyContent[mPosH]; //0=>left, 1=>center, 2=>right
          mE1.appendChild(mBtnViewer);  

          //set.....
          let mBtnHolder = document.createElement("btn_holder_1mn");
          mBtnHolder.style.width = mW;
          mBtnHolder.style.height = mH;
          mBtnHolder.style.position = "relative";
          mBtnHolder.style.display = "flex";
          mBtnHolder.style.justifyContent = "center";
          mBtnHolder.style.alignItems = "center";
          mBtnViewer.appendChild(mBtnHolder);  


           //mBtn......
           let mBtn = document.createElement("btn_1mn");
           mBtn.id = core_1mn['mUniqueId'].mGenerate(16);
           mBtn.style.position = "absolute";

           mBtn.style.display = "flex";
           mBtn.style.justifyContent = "center";
           mBtn.style.alignItems = "center";
           
           mBtn.style.width = mBtnHolder.style.width;
           mBtn.style.height = mBtnHolder.style.height;

           mBtn.style.cursor = "pointer"; 

          //events..... 
          mBtn.onclick = function(){
            let mCurrItemId = this.id;
            //alert("btn click: "+mCurrItemId);
            //onClick....
            mSend_cb("onClick", {"e": document.getElementById(mCurrItemId)});
          };
          mBtnHolder.appendChild(mBtn);  

           

          //disable (layer)..
          let mDisableLayer = document.createElement("dis_layer_btn_1mn");
          mDisableLayer.id = core_1mn['mUniqueId'].mGenerate(15);
          //hide..
          mDisableLayer.style.visibility = "hidden";
          mDisableLayer.style.width = (parseFloat(mBtnHolder.style.width) + 0.2) + "vw";
          mDisableLayer.style.height = (parseFloat(mBtnHolder.style.height) + 0.2) + "vh";
          mDisableLayer.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
          mDisableLayer.style.position = "absolute";
          mDisableLayer.style.borderRadius = "0.7vh";  
          mBtnHolder.appendChild(mDisableLayer);


          //events..
          mDisableLayer.onclick = function(){
            let mCurrItemId = this.id;
            //alert("btn disabled layer click: "+mCurrItemId);
            //onClick....
            mSend_cb("onClickD", {"e": document.getElementById(mCurrItemId)});
          };



          //----set----//
          mRndr.set(mVari, {
            "p": {
              "btn": mBtn,
              "mConf": mConf
            }
          });


          //onLoad....
          mSend_cb("onLoad", {"e": mBtn});

          


          //events.....
          let mEvents = { 
            "btn": {
              "eBtn": mBtn, //element
              "e1": mBtnHolder, //element
              "e2": mDisableLayer,
              "show": () => {
                var mBtn = mEvents['btn']['eBtn'];
                mBtn.style.display = "flex";  //block
                mBtnHolder.style.display = "flex"; //block
              },
              "hide": () => {
                var mBtn = mEvents['btn']['eBtn'];
                mBtn.style.display = "none";
                mBtnHolder.style.display = "none";
              },
              "disable": () => {
                var mBtn = mEvents['btn']['eBtn'];
                mBtn.disabled = true;
                //set disable layer..
                var mDisableLayer = mEvents['btn']['e2'];
                mDisableLayer.style.visibility = "visible";
              },
              "enable": () => {
                var mBtn = mEvents['btn']['eBtn'];
                mBtn.disabled = false;
                //set disable layer..
                var mDisableLayer = mEvents['btn']['e2'];
                mDisableLayer.style.visibility = "hidden";
              },
              "pbShow": (mColor) => {
                mEvents['btn'].disable();
                //set..
                var mDisableLayer = mEvents['btn']['e2'];
                function mSetPb() {
                  core_1mn['mAnim']['loader']['0']['set']({
                    "e1": mDisableLayer,
                    "1": mColor!=undefined ? mColor : mConf['0']
                  });
                }
                mSetPb();
              },
              "pbHide": () => {
                mEvents['btn'].enable();
                //set..
                var mDisableLayer = mEvents['btn']['e2'];
                function mRemovePb() {
                  mDisableLayer.querySelectorAll("anim_loader_1mn")[0].remove();
                }
                mRemovePb();
              },
            }

          };

          return mEvents;

          

          /*USAGE
          
          //Btn.....  
          let mBtnHolder = document.createElement("div");
          document.body.appendChild(mBtnHolder);
          let mBtn = core_1mn['btn']['1'].set({ 
              "e1": mBtnHolder,
              "w": "5vw",
              "posH": 1,
              "h": "3.2vh",
              "txt": {
                "0": "Login",
                "1": "1.3vh"
              },
              "ico": {"0": "sample.svg", "1": "1.3vh", "2": "1.3vh", "3": "rgba(255,255,255, 1.0)" },
              "cb": {
                  "onLoad": function(data){
                      //let mBtn = data['btn'];
                      //console.log(mBtn);
                  },
                  "onClick": function(data){
                      //alert(JSON.stringify(data));
                      //console.log(data);
                  },
                  "onClickD": function(data){
                      //alert(JSON.stringify(data));
                      //console.log(data);
                  }
              },
              //typ..
              "typ": 2,
              //variant..
               "vari": 2
          });
         //mBtn['btn']['hide'] ();
         //mBtn['btn']['show'] ();
         //mBtn['btn']['disable'] ();
         //mBtn['btn']['enable'] ();
         //mBtn['btn']['pbShow'] ("red");
         //mBtn['btn']['pbHide'] ();

          */

        },

      },




      //-----Will be upgrade soon----//
      "2": {

        "set": (mMain) => {
           //clear.....
           core_1mn.mClearLayout(mMain);


           //mBtnDiv....
           var mBtnDiv = document.createElement("div");
           mBtnDiv.style.margin = "0 auto";
           mMain.appendChild(mBtnDiv);
 
 
           //mBtn......
           var mBtn = document.createElement("button");
           mBtn.id = core_1mn['mUniqueId'].mGenerate(16);

          //mBtn.innerHTML = "Ready";
          mBtn.style.boxShadow = "0vh 0.1vh 0vh 0vh #fff6af";
          mBtn.style.background = "linear-gradient(to bottom, #ffec64 5%, #ffab23 100%)";
          mBtn.style.backgroundColor = "#ffec64";
          mBtn.style.borderRadius = "0.6vh";
          mBtn.style.border = "0.1vh solid #ffaa22";
          mBtn.style.cursor = "pointer";
          mBtn.style.color = "#333333";
          mBtn.style.fontFamily = "Arial";
          mBtn.style.fontSize = "1.6vh";
          mBtn.style.fontWeight = "bold";
          mBtn.style.padding = "0.7vh 1.7vw";
          mBtn.style.textDecoration = "none";
          mBtn.style.textShadow = "0vh 0.1vh 0vh #ffee66";

          //events.....
          mBtn.onmouseover = function(){
            mBtn.style.background = "linear-gradient(to bottom, #ffab23 5%, #ffec64 100%)";
            mBtn.style.backgroundColor = "#ffab23";
          };

          mBtn.onmouseout = function(){
            mBtn.style.background = "linear-gradient(to bottom, #ffec64 5%, #ffab23 100%)";
            mBtn.style.backgroundColor = "#ffec64";
          };

          mBtnDiv.appendChild(mBtn);



          return mBtnDiv;

        }


      },
      "3": {

        "set": (mMain) => {
          //clear.....
          core_1mn.mClearLayout(mMain);

          //mBtnDiv....
          var mBtnDiv = document.createElement("div");
          mBtnDiv.style.margin = "0 auto";
          mMain.appendChild(mBtnDiv);


          //mBtn......
          var mBtn = document.createElement("button");
          mBtn.id = core_1mn['mUniqueId'].mGenerate(16);

          //mBtn.innerHTML = "Ready";
          mBtn.style.boxShadow = "0px 1px 0px 0px #fff6af";
          mBtn.style.background = "linear-gradient(to bottom, #1760a3 5%, rgba(255,255,255,0.3) 100%)";
          mBtn.style.backgroundColor = "#1760a3";
          mBtn.style.borderRadius = "6px";
          mBtn.style.border = "1px solid #1760a3";
          mBtn.style.cursor = "pointer";
          mBtn.style.color = "#fff";
          mBtn.style.fontFamily = "Arial";
          mBtn.style.fontSize = "1.6vh";
         // mBtn.style.fontWeight = "bold";
          mBtn.style.padding = "0.7vh 1.7vw";
          mBtn.style.textDecoration = "none";
          mBtn.style.textShadow = "0px 1px 0px rgba(255,255,255,0.4)";

          //events.....
          mBtn.onmouseover = function(){
            mBtn.style.background = "linear-gradient(to bottom, rgba(255,255,255,0.3) 5%, #1760a3 100%)";
            mBtn.style.backgroundColor = "#1760a3";
          };

          mBtn.onmouseout = function(){
            mBtn.style.background = "linear-gradient(to bottom, #1760a3 5%, rgba(255,255,255,0.3) 100%)";
            mBtn.style.backgroundColor = "#1760a3";
          };
      

          mBtnDiv.appendChild(mBtn);

          return mBtnDiv;

        }


      },
      "4": {
        "set": (mGetParams) => {
          var mParams = mGetParams;
          var mW = mParams['w']!=undefined ? mParams['w'] : "7vw";
          var mH = mParams['h']!=undefined ? mParams['h'] : "4vh";
          var mTxt = mParams['txt']!=undefined ? mParams['txt'] : {"0": "Button", "1": "1.3vh" };
          var mE1 = mParams['e1']; //@req
          var mCb = mParams['cb']; //@req

          //send callback..
          function mSend_cb(mCb_name, data) {
            if(mCb!=undefined){
              if(mCb[mCb_name]!=undefined){
                mCb[mCb_name] (data);
              }
            }
          }

          //set.....
          var mBtnHolder = document.createElement("btn_holder_1mn");
          mBtnHolder.style.width = mW;
          mBtnHolder.style.height = mH;
          mBtnHolder.style.position = "relative";
          mBtnHolder.style.display = "flex";
          mBtnHolder.style.justifyContent = "center";
          mBtnHolder.style.alignItems = "center";
          mE1.appendChild(mBtnHolder);  

           //mBtn......
           var mBtn = document.createElement("btn_1mn");
           mBtn.id = core_1mn['mUniqueId'].mGenerate(16);
           mBtn.style.position = "absolute";

           mBtn.style.display = "flex";
           mBtn.style.justifyContent = "center";
           mBtn.style.alignItems = "center";

           mBtn.style.width = mBtnHolder.style.width;
           mBtn.style.height = mBtnHolder.style.height;
           mBtn.style.boxShadow = "0vh 0.08vh 0vh 0vh #fff6af"; //0px 1px 0px 0px #fff6af
           mBtn.style.background = "linear-gradient(to bottom, #1760a3 5%, rgba(255,255,255,0.3) 100%)";
           mBtn.style.backgroundColor = "#1760a3";
           mBtn.style.borderRadius = "0.7vh"; //6px
           mBtn.style.border = "0.09vh solid #1760a3"; //1px solid #1760a3
           mBtn.style.cursor = "pointer"; 
           //mBtn.style.fontWeight = "bold";
           //mBtn.style.padding = "0.7vh 1.7vw";

           //events.....
          mBtn.onmouseover = function(){
            var mCurrItemId = this.id;
            var mCurrItem = document.getElementById(mCurrItemId);
            mCurrItem.style.background = "linear-gradient(to bottom, rgba(255,255,255,0.3) 5%, #1760a3 100%)";
            mCurrItem.style.backgroundColor = "#1760a3";
          };

          mBtn.onmouseout = function(){
            var mCurrItemId = this.id;
            var mCurrItem = document.getElementById(mCurrItemId);
            mCurrItem.style.background = "linear-gradient(to bottom, #1760a3 5%, rgba(255,255,255,0.3) 100%)";
            mCurrItem.style.backgroundColor = "#1760a3";
          };

          mBtn.onclick = function(){
            var mCurrItemId = this.id;
            //alert("btn click: "+mCurrItemId);
            //onClick....
            mSend_cb("onClick", {"e": document.getElementById(mCurrItemId)});
          };

          mBtnHolder.appendChild(mBtn);

          //text..
          mSet_TxtE();
          function mSet_TxtE() {
            var mTxtE = document.createElement("txt_e_1mn");
            mTxtE.innerHTML = mTxt['0'];
            mTxtE.style.textDecoration = "none";
            mTxtE.style.textShadow = "0vh 0.08vh 0vh rgba(255,255,255,0.4)"; //0px 1px 0px rgba(255,255,255,0.4)
            mTxtE.style.color = "#fff";
            mTxtE.style.fontFamily = "Arial";
            mTxtE.style.fontSize = mTxt['1']; //"1.6vh";
            mBtn.appendChild(mTxtE);
          }

          //ico..
          //mSet_IcoE();
          function mSet_IcoE() { 
          }

          //disable (layer)..
          var mDisableLayer = document.createElement("dis_layer_btn_1mn");
          mDisableLayer.id = core_1mn['mUniqueId'].mGenerate(15);
          //hide..
          mDisableLayer.style.visibility = "hidden";
          mDisableLayer.style.width = core_1mn['mExtract']['mInt']['get'](mBtnHolder.style.width) + 0.7 + "vw";
          mDisableLayer.style.height = core_1mn['mExtract']['mInt']['get'](mBtnHolder.style.height) + 0.7 + "vh";
          mDisableLayer.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
          mDisableLayer.style.position = "absolute";
          mDisableLayer.style.borderRadius = "0.7vh"; 
          mBtnHolder.appendChild(mDisableLayer);

          //events..
          mDisableLayer.onclick = function(){
            var mCurrItemId = this.id;
            //alert("btn disabled layer click: "+mCurrItemId);
            //onClick....
            mSend_cb("onClickD", {"e": document.getElementById(mCurrItemId)});
          };

          //onLoad....
          mSend_cb("onLoad", {"btn": mBtn});

          //events.....
          var mEvents = { 
            "btn": {
              "eBtn": mBtn, //element
              "e1": mBtnHolder, //element
              "e2": mDisableLayer,
              "show": () => {
                var mBtn = mEvents['btn']['eBtn'];
                mBtn.style.display = "block";
              },
              "hide": () => {
                var mBtn = mEvents['btn']['eBtn'];
                mBtn.style.display = "none";
              },
              "disable": () => {
                var mBtn = mEvents['btn']['eBtn'];
                mBtn.disabled = true;
                //set disable layer..
                var mDisableLayer = mEvents['btn']['e2'];
                mDisableLayer.style.visibility = "visible";
              },
              "enable": () => {
                var mBtn = mEvents['btn']['eBtn'];
                mBtn.disabled = false;
                //set disable layer..
                var mDisableLayer = mEvents['btn']['e2'];
                mDisableLayer.style.visibility = "hidden";
              },
            }

           };

           return mEvents;

          

          /*USAGE
          
           //Btn..... 

var mBtnHolder = document.createElement("div");
document.body.appendChild(mBtnHolder);
var mBtn = core_1mn['btn']['4'].set({ 
           "e1": mBtnHolder,
           "w": "5vw",
             "h": "3.2vh",
             "txt": {
             "0": "Login",
             "1": "1.3vh"
            },
           "cb": {
               "onLoad": function(data){
                   //var mBtn = data['btn'];
                   //console.log(mBtn);
               },
               "onClick": function(data){
                   //alert(JSON.stringify(data));
                   //console.log(data);
               },
               "onClickD": function(data){
                   //alert(JSON.stringify(data));
                   //console.log(data);
               }
           }
       });
//mBtn['btn']['hide'] ();
//mBtn['btn']['show'] ();
//mBtn['btn']['disable'] ();
//mBtn['btn']['enable'] ();

          */

        }
      },   
      
      



    },


    "dialog": {

      "1": {
  
        "set": (mGetParams) => {
          var mParams = mGetParams!=undefined ? mGetParams : {};
          //set vars......
          var mSvgIcons = core_1mn['svgIcons'];

          //FUNC..
          //send callback..
          var mSend_cb = function(mCb_name, data){
            if(mParams['mCb']!=undefined){
              if(mParams['mCb'][mCb_name]!=undefined){
                mParams['mCb'][mCb_name](data);
              }
            }
          }; 
  
          function mSet_item() {
  
            //*************clear by (id) if given........
            if(mC1 = mParams['c1']!=undefined){
              if(document.getElementById(mC1 = mParams['c1'])){
                document.getElementById(mC1 = mParams['c1']).remove();
              }
            }
  
  
            //set props....
            const mE = mParams['mE']!=undefined ? mParams['mE'] : document.body;
            //header....
            var mH0 = mParams['h0']!=undefined ? mParams['h0'] : ""; //title
            var mH1 = mParams['h1']!=undefined ? mParams['h1'] : 
            { //icon
              "0": undefined, //path Or data
              "1": "3vh", //w
              "2": "3vh" //h
            }; 
            var mH2 = mParams['h2']!=undefined ? mParams['h2'] : true; //close btn (isShow)
            //config....
            var mC0 = mParams['c0']!=undefined ? mParams['c0'] : true; //is dialog cancellable (outside)
            var mC1 = mParams['c1']!=undefined ? mParams['c1'] : core_1mn['mUniqueId'].mGenerate(); //dialog root id
            var mC2 = mParams['c2']!=undefined ? mParams['c2'] : "50%"; //dialog (width)
            var mC3 = mParams['c3']!=undefined ? mParams['c3'] : "70vh"; //dialog (height)
            var mC4 = mParams['c4']!=undefined ? mParams['c4'] : "5vh"; //dialog (paddingTop)
            var mC5 = mParams['c5']!=undefined ? mParams['c5'] : "1vh"; //dialog (borderRadius)
            var mC6 = mParams['c6']!=undefined ? mParams['c6'] : "rgba(34,34,34, 1)"; //dialog (header-color)
            var mC7 = mParams['c7']!=undefined ? mParams['c7'] : "linear-gradient(to bottom right,    rgb(224, 224, 216), rgb(247, 242, 242) )"; //dialog (body-color)
            var mC8 = mParams['c8']!=undefined ? mParams['c8'] : 0; //dialog (position) [center, top , bottom]
  
  
            //dialog.................
            //mDiv1...........
            var mDiv1 = null;
            if (mE==document.body) {
            mDiv1 = document.createElement("div");
            mDiv1.id = mC1; //"para_phraser_DIALOG";
            mDiv1.style.display = "none"; /*By default hidden*/
            mDiv1.style.position = "fixed";
            mDiv1.style.zIndex = 1;
            mDiv1.style.left = 0;
            mDiv1.style.top = 0;
            mDiv1.style.width = "100%";
            mDiv1.style.height = "100%";
            //mDiv1.style.overflow = "auto";
            mDiv1.style.backgroundColor = "rgba(80, 80, 80, 0.5)"; //rgba(80, 80, 80, 0.5) || rgba(255, 255, 255, 0.9) //dialog (outer-bg-color)
            mDiv1.style.paddingTop = mC4;
            mE.appendChild(mDiv1);
            }
  
  
            //mDiv2.........
            var mDiv2 = document.createElement("div");
            mDiv2.style.width = mC2;
            mDiv2.style.height = mC3;
            if (mC7.includes("gradient")) {
              mDiv2.style.backgroundImage = mC7;
            }else {
              mDiv2.style.backgroundColor = mC7; 
            }
            mDiv2.style.outline = "0.2vh solid #888";
            mDiv2.style.borderRadius = mC5;
            if (mDiv1!=null) {
              mDiv2.style.margin = mParams['c4']==undefined ? "5% auto 15% auto" : "0% auto"; //5% auto 15% auto
              mDiv1.appendChild(mDiv2);              
            }else {
              mE.style.position = "relative";
              mDiv2.style.position = "absolute";
              if (mC8==2) {
                mDiv2.style.bottom = "0";
              }
              mE.appendChild(mDiv2);
              //convert (mDiv1 => mDiv2)
              mDiv1 = mDiv2;
            }
  
            //mDiv3.........
            var mDiv3 = document.createElement("div");
            mDiv3.setAttribute("tag_n", "content_holder");
            mDiv3.style.height = `100%`; //--NEW--//
            mDiv3.style.width = `100%`; //--NEW--//
  
            //mDiv3.style.textAlign = "center";
            mDiv2.appendChild(mDiv3); 
  
            //content......
            mCreateLayout();
            function mCreateLayout() { 
                //mTop1....
                var mTop1 = document.createElement("div");
                mTop1.style.width = "100%";
                mTop1.style.height = "5vh"; //7vh
                mTop1.style.backgroundColor = mC6;
                mTop1.style.borderRadius = `${mC5} ${mC5} 0 0`;
                mTop1.style.display = "flex";
                mTop1.style.alignItems = "center";
                mTop1.style.justifyContent = "space-between";
                mDiv3.appendChild(mTop1);
  
                //items....
                 //1
                 mLeftItem();
                 function mLeftItem() {
  
                 var mCover1 = document.createElement("div");
                 mCover1.style.paddingLeft = "1.5vw";
                 mCover1.style.display = "flex";
                 mCover1.style.alignItems = "center";
                 mTop1.appendChild(mCover1);
  
                 //check (icon).....
                 //mH1......
                 if(mH1["0"]!=undefined){
                   //Icon.......
                   //svg.....
                   core_1mn['mSvg'].set({
                   "0": mH1["0"],
                   "2": mH1["1"],
                   "3": mH1["2"],
                   "4": "rgba(255,255,255, 1.0)",
                   "5": mCover1
                   });
                 }
  
  
                 //space.....
                 var mSpace = document.createElement("div");
                 mSpace.style.width = "0.3vw";
                 mCover1.appendChild(mSpace);
  
  
                 //mP1.........
                 var mP1 = document.createElement("p");
                 mP1.innerHTML = mH0;
                 mP1.style.color = "#ffffff";
                 mP1.style.fontSize = "1.8vh";
                 mP1.style.margin = "0";
                 mCover1.appendChild(mP1); 
  
                   
                 }
  
                 //2
                 var mItem2 = document.createElement("p");
                 mItem2.innerHTML = "";
                 mItem2.style.color = "#ffffff";
                 mItem2.style.fontSize = "1.4vh";
                 mItem2.style.margin = "0";
                 mTop1.appendChild(mItem2);
  
  
                //3
                mRightItem();
                function mRightItem() {
                 var mCover1 = document.createElement("div");
                 mCover1.style.paddingRight = "1.5vw";
                 mCover1.style.display = "flex";
                 mCover1.style.alignItems = "center";
                 mTop1.appendChild(mCover1); 
  
                 //check....close btn
                 //mH2.....
                 if(mH2==true){
                  //Icon.......
                 var mSvgDiv1 = document.createElement("span");
                 mSvgDiv1.innerHTML = mSvgIcons['close_0'].svg();
                 mCover1.appendChild(mSvgDiv1);
  
                 var mSvg1 = mSvgDiv1.querySelectorAll("svg")[0];
                 mSvg1.style.fill = "white";
                 mSvg1.style.width = "3vh";
                 mSvg1.style.height = "3vh";
  
                 //events.......
                 mSvgDiv1.onclick = function(){
                   //close....
                   mEvents['dialog'].close();
                 };
  
                 }
  
  
                }
  
            } 
            //is dialog cancellable (outside) 
            mSet_isDialogCancellable();
            function mSet_isDialogCancellable() {
              if(mC0==true){
                var modal = mDiv1;
                //console.log(modal);
                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function(event) {
                 if (event.target == modal) {
                  //close....
                  mEvents['dialog'].close();
                 }
               };
             }
            }
  
  
             //show.....
            /*var modal = document.getElementById(mC1);
            modal.style.display = 'block';*/

            //send callback..
            mSend_cb("onLoad" ,{
            "0": mDiv3, //(content holder)
            });
  
  
             //(mDiv1)......total dialog......
             return mDiv1;
  
          }
  
          //events.....
          var mDialogE = mSet_item();
          var mEvents = { 
            "dialog": {
              "e": mDialogE, //element
              "show": () => {
                var mE1 = mEvents['dialog']['e'];
                mE1.style.display = "block";
              },
              "close": () => {
                var mE1 = mEvents['dialog']['e'];
                 mE1.style.display = "none";
                 //now....we remove..
                 mE1.remove();
              },
            }
  
          };  

          return mEvents;

 
          
          /*
          USAGE
           //start.....
  
            var mConfDialog = {
            "c1": "login_register_DIALOG",
            "c2": "50%",
            "c3": "70vh", 
  
            "mCb": {
                "onClose": () => {
                    //onClose.....
                    //alert("onClose");
                },
                "onLoad": (data) => {
                  var m0 = data['0']; //content holder.....
                  //mContent.....
                  var mContent = document.createElement("div");
                  mContent.style = `width: 100%; height: 100%; `;
                  m0.appendChild(mContent);
                }
            }
            
          };

          ----------OR----------------

           var mConfDialog = {
            "c1": "login_register_DIALOG",
             "c2": "100%",
             "c3": "100%",
              "c4": "0vh",
              "c5": "0vh",
             "c6": "rgba(0,32,96, 1)",
             "c7": "rgba(255,255,255, 1)", 
  
            "mCb": {
                "onClose": () => {
                    //onClose.....
                    //alert("onClose");
                },
                "onLoad": (data) => {
                  var m0 = data['0']; //content holder.....
                  //mContent.....
                  var mContent = document.createElement("div");
                  mContent.style = `width: 100%; height: 100%; `;
                  m0.appendChild(mContent);
                }
            }
            
          };

          ---------OR--------
          var mConfDialog = {
               "mE": mE,
               "c8": 2,
          }
           


          var mEvents = core_1mn['dialog']['1'].set(
            mConfDialog
          );
          //store..
          //mLAZY['mAnim']['dialog']['eventsDialog'] = mEvents; 
          //show..
          mEvents['dialog'].show();
          //close..
          //mEvents['dialog'].close();
         */
          
  
        },
  
      }
  
    },

    "space": {
        "set": (mGetParams) => {
          //add vertical & horizontal space.....
          var mParams = mGetParams;
          var mW = mParams['w']!=undefined ? mParams['w'] : "0";
          var mH = mParams['h']!=undefined ? mParams['h'] : "0";
          var mE1 = mParams['e1']; //@req
          //set.....
          var mSpace = document.createElement("div");
          mSpace.style.width = mW;
          mSpace.style.minWidth = mW;
          mSpace.style.height = mH;
          mE1.appendChild(mSpace);

          /*USAGE
          
           //Space.....
           core_1mn['space'].set({
                "w": "2vw",
                "e1": mItemDiv,
           });

          */

        }

    },

    "notes": {
      //Notes can be used to notify the user about (something special)

      "1": {

        "set": (mGetParams) => {
              var mParams = mGetParams;
              var d_ico1 = mParams['ico1']!=undefined ? mParams['ico1'] : {}; //@req (svg(obj))
              var d_txt1 = mParams['txt1']!=undefined ? mParams['txt1'] : null; //@req
              var d_txt2 = mParams['txt2']!=undefined ? mParams['txt2'] : null; //@req
              var d_btn1 = mParams['btn1']!=undefined ? mParams['btn1'] : null; //@req

              //set vars.....
              var mSvgIcons = core_1mn['svgIcons'];
              var mBtnsG = core_1mn['btn'];
 
              //mNoteDiv....
              var mNoteDiv = document.createElement("div");
              mNoteDiv.style.textAlign = "center";
              mNoteDiv.style.margin = "8vh 0";

              //mNoteDiv.style.margin = "0 auto";
              //mMain.appendChild(mNoteDiv);


              //set item.....
              mSet_item();
              function mSet_item() {
                //mNote......
                var mNote = document.createElement("div");
                mNote.id = core_1mn['mUniqueId'].mGenerate(18);
                //set
                mNote.setAttribute("tag_n", "note");
                mNoteDiv.appendChild(mNote);

                  if(d_ico1!={}){
                    mSet_svg1();
                  }
                  function mSet_svg1() { 
                    //Icon....... 
                    //svg.....
                    core_1mn['mSvg'].set({
                      "0": d_ico1['0']!=undefined ? d_ico1['0'] : null, //"box_arrow_0.svg"
                      "2": d_ico1['1']!=undefined ? d_ico1['1'] : "20vh",
                      "3": d_ico1['2']!=undefined ? d_ico1['2'] : "20vh",
                      "4": d_ico1['3']!=undefined ? d_ico1['3'] : "rgba(34,34,34, 1.0)",
                      "5": mNote,
  
                     });

                  }

                  //Space.....
                  core_1mn['space'].set({
                    "h": "1vh",
                    "e1": mNote,
                  });


                  if(d_txt1!=null){
                    mSet_txt1();
                  }
                  function mSet_txt1() {
                    var m_txt = document.createElement("div");
                    m_txt.style.fontSize = "1.7vh";
                    m_txt.style.color = "#343434";
                    m_txt.style.fontWeight = "450";
                    m_txt.innerHTML = d_txt1;
                    mNote.appendChild(m_txt);
                  }


                  //Space.....
                  core_1mn['space'].set({
                    "h": "0.5vh",
                    "e1": mNote,
                  });



                  if(d_txt2!=null){
                    mSet_txt2();
                  }
                  function mSet_txt2() {
                    var m_txt = document.createElement("div");
                    m_txt.style.fontSize = "1.2vh";
                    m_txt.style.color = "#343434";
                    m_txt.innerHTML = d_txt2;
                    mNote.appendChild(m_txt);
                  }


                   //Space.....
                   core_1mn['space'].set({
                    "h": "4.5vh",
                    "e1": mNote,
                  });


                  if(d_btn1!=null){
                    mSet_btn1();
                  }
                  function mSet_btn1() {
                       var mMainDiv = document.createElement("div");
                       mNote.appendChild(mMainDiv);  

                       //mBtnDiv..... 
                        var mBtnHolder = mMainDiv;
                        mBtnsG['1'].set({ 
                                   "e1": mBtnHolder,
                                   "w": "6.7vw",
                                   "h": "3.1vh",
                                   "posH": 1,
                                   "txt": {
                                     "0": d_btn1['0'],
                                     "1": "1.3vh"
                                   },
                                   "cb": {
                                       "onClick": function(data){
                                          //send callback..
                                          if(d_btn1['cb']['onClick']!=undefined){
                                            d_btn1['cb']['onClick'](data);
                                          }
                                       }
                                   }
                               });
                        

                  }


                
              }

 

    
              return mNoteDiv; //(mNoteDiv)


              
             /* //USAGE
               var mMsgDiv = core_1mn['notes']['1'].set({
                            "ico1": {
                                "0": mSvgIcons['car_damage_1'],
                            },
                            "txt1": "Something went wrong!",
                            "txt2": "An error occurred while loading this page.",
                            "btn1": {
                              "0": "Try Again",
                              "cb": {
                                "onClick": function(){

                                }
                              }
                            },
                        });
                        mItem.appendChild(mMsgDiv);

                         */         
              


        }

      },

      "2": {

        "set": (mGetParams) => {
              var mParams = mGetParams;
              var mE1 = mParams['mE1']!=undefined ? mParams['mE1'] : null; //@req
              var d_ico1 = mParams['ico1']!=undefined ? mParams['ico1'] : {}; //@req (svg(obj))
              var d_ico2 = mParams['ico2']!=undefined ? mParams['ico2'] : null;  
              var d_txt1 = mParams['txt1']!=undefined ? mParams['txt1'] : {}; //@req
              var d_txt2 = mParams['txt2']!=undefined ? mParams['txt2'] : null;
              //bg....
              var d_bg = mParams['bg']!=undefined ? mParams['bg'] : null;
              

              //set vars.....
              var mSvgIcons = core_1mn['svgIcons'];
 
              //mNoteDiv....
              var mNoteDiv = document.createElement("div");
              mNoteDiv.style.display = "none";
              mNoteDiv.style.padding = "0 0.5vw"; //8vh 0
              //style.....
              if(d_bg!=null){
                mSet_bg();
              }
              function mSet_bg() {
              mNoteDiv.style.backgroundColor = d_bg['0']!=undefined ? d_bg['0'] : "rgba(204, 231, 244, 1.0)";
              mNoteDiv.style.outline = d_bg['1']!=undefined ? d_bg['1'] : "0.1vh solid rgba(167, 196, 244, 1.0)";
              mNoteDiv.style.borderRadius = d_bg['2']!=undefined ? d_bg['2'] : "0.5vh";
              mNoteDiv.style.padding = d_bg['3']!=undefined ? d_bg['3'] : "0.5vh"; 
              }
              //mMain.appendChild(mNoteDiv);

              //set item.....
              mSet_item();
              function mSet_item() {
                //mNote......
                var mNote = document.createElement("div");
                mNote.id = core_1mn['mUniqueId'].mGenerate(18);
                mNote.style.display = "flex";
                mNote.style.alignItems = "center";
                mNote.style.justifyContent = "space-between";
                //set
                mNote.setAttribute("tag_n", "note");
                mNoteDiv.appendChild(mNote);

                  //horizontal cover..
                  var mHoriDiv_1 = document.createElement("div");
                  mHoriDiv_1.style.display = "flex";
                  mHoriDiv_1.style.alignItems = "center";
                  mNote.appendChild(mHoriDiv_1);

                  if(d_ico1!={}){
                    mSet_svg1();
                  }
                  function mSet_svg1() {
                    //Icon....... 
                    //svg.....
                    core_1mn['mSvg'].set({
                    "0": d_ico1['0']!=undefined ? d_ico1['0'] : null, //"box_arrow_0.svg"
                    "2": d_ico1['1']!=undefined ? d_ico1['1'] : "5vh",
                    "3": d_ico1['2']!=undefined ? d_ico1['2'] : "5vh",
                    "4": d_ico1['3']!=undefined ? d_ico1['3'] : "rgba(34,34,34, 1.0)",
                    "5": mHoriDiv_1,

                   });

  
                  } 

                  //Space.....
                  core_1mn['space'].set({
                    "w": "0.3vw",
                    "e1": mHoriDiv_1,
                  });


                  //vertical cover..
                  var mVertiDiv_1 = document.createElement("div");
                  mHoriDiv_1.appendChild(mVertiDiv_1);

                  if(d_txt1!={}){
                    mSet_txt1();
                  }
                  function mSet_txt1() {
                    var m_txt = document.createElement("div");
                    m_txt.innerHTML = d_txt1['0']!=undefined ? d_txt1['0'] : null;
                    m_txt.style.fontSize = d_txt1['1']!=undefined ? d_txt1['1'] : "1.7vh";
                    m_txt.style.color = d_txt1['2']!=undefined ? d_txt1['2'] : "#343434";
                    m_txt.style.margin = d_txt1['3']!=undefined ? d_txt1['3'] : "0 0 0 0.6vw"; //T R B L
                    //m_txt.style.fontWeight = "450";
                    mVertiDiv_1.appendChild(m_txt);

                  }


                  if(d_txt2!=null){
                    mSet_txt2();
                  }
                  function mSet_txt2() {
                    var m_txt = document.createElement("div");
                    m_txt.innerHTML = d_txt2['0']!=undefined ? d_txt2['0'] : null;
                    m_txt.style.fontSize = d_txt2['1']!=undefined ? d_txt2['1'] : "1.7vh";
                    m_txt.style.color = d_txt2['2']!=undefined ? d_txt2['2'] : "#343434";
                    m_txt.style.margin = d_txt2['3']!=undefined ? d_txt2['3'] : "0 0 0 0.6vw"; //T R B L
                    //m_txt.style.fontWeight = "450";
                    mVertiDiv_1.appendChild(m_txt);

                  }


                  if(d_ico2!=null){
                    mSet_svg2();
                  }
                  function mSet_svg2() {
                    //Icon....... 
                    //svg.....
                    core_1mn['mSvg'].set({
                    "0": d_ico2['0']!=undefined ? d_ico2['0'] : null, //"box_arrow_0.svg"
                    "2": d_ico2['1']!=undefined ? d_ico2['1'] : "2vh",
                    "3": d_ico2['2']!=undefined ? d_ico2['2'] : "2vh",
                    "4": d_ico2['3']!=undefined ? d_ico2['3'] : "rgba(34,34,34, 1.0)",
                    "5": mNote,
                    "cb": {
                      "onClick": function(){
                        //send callback..
                        if(d_ico2['cb']['onClick']!=undefined){
                          d_ico2['cb']['onClick']();
                        }
                      }
                    }
                   });

  
                  }

                
              }

              if(mE1!=null){
                //add..
                mE1.appendChild(mNoteDiv);
              }

              //events.....
              var mEvents = { 
                "note": {
                  "e": mNoteDiv, //element
                  "show": () => {
                    var mE1 = mEvents['note']['e'];
                    mE1.style.display = "block";
                  },
                  "close": () => {
                    var mE1 = mEvents['note']['e'];
                     mE1.style.display = "none";
                     //now....we remove..
                     mE1.remove();
                  },
                }

               };

              return mEvents;


              /*
              USAGE
              var mMsgDiv = core_1mn['notes']['2'].set({

                        "mE1": mNoteHolder,
                        "bg": {
                            "0": "rgba(245, 213, 214, 1.0)", //background color
                            "1": "0.1vh solid rgba(235, 157, 159, 1.0)",
                            "2": "0.5vh",
                            "3": "0.7vh 0.7vh 0.7vh 0.9vw",
                        },
                        "ico1": {
                            "0": "exclamation_0.svg",
                            "1": "1.8vh",
                            "2": "1.8vh",
                            "3": "rgba(184, 79, 81, 1.0)",
                        },
                        "ico2": {
                            "0": "close_0.svg",
                            "1": "2.2vh",
                            "2": "2.2vh",
                            "3": "rgba(34, 34, 34, 0.5)",
                            "cb": {
                                "onClick": function(){
                                   mMsgDiv['note'].close();
                                }
                            }
                        },
                        "txt1": {
                            "0": "Something went wrong!",
                            "1": "1.4vh",
                            "2": "rgba(34, 34, 34, 0.8)",
                            "3": "0 0 0 0.2vw"
                        }, 
                     });
                     mMsgDiv['note'].show();
              */


        }

      },

    },

  
    //validator
    "mVali": {
      //validation library for (1MN)

      "mUtil": {
        //usefull functions.....place here

        "mJSONtoJSONSchema": {
          "set": () => {
            //covert JSON to JSON Schema


          }
        }

      },

      "mRegex": {
        "patterns": {
          "name": {
            "desc": "eg - name",
            "p": /ab+c/,
          }
        }
      },

      "mDataType": {
        //Ref---->
        //https://www.w3schools.com/js/js_json_datatypes.asp

        "string": {
          //a string
          "set": () => { 
          }
        },
        "number": {
          //a number

        },
        "object": {
          //an object (JSON object)

        },
        "array": {
          //an array

        },
        "boolean": {
          //a boolean

        },
        "null": {
          //null

        },


      },

      
      "mSchemaJSON": {
        //validate (JSON) Schema.....
        "set": (mGetParams, cb={
          "onLoad": () => {},
          "onErr": () => {},
        }) => {
          //mRun..
          let mRun = () => {
          //http://json-schema.org/draft-07/schema# @required
          var mParams = mGetParams;
          var mSchema = mParams['schema'];
          var mUsrPayload = mParams['usr_payload'];

          var mErrInfo = {
            "isErr": true,
            "msg": null,
            "mErrObj": null
          };

          //set vars.....
           const Ajv = window.ajv7
           //const ajv = new Ajv();
           //https://ajv.js.org/packages/ajv-formats.html#formats
           let mOpt = {formats: {date: true, time: true,
             "date-time": true, "uuid": true },
            }; //options
            //check..
            if (mParams.hasOwnProperty(`strict`)) {
              mOpt["strict"]=mParams["strict"];
            }

           const ajv = new Ajv(mOpt);
           //console.log(ajv);
           


           const schema = mSchema;
           const data = mUsrPayload;
           const validate = ajv.compile(schema);
           
           const valid = validate(data)
           if (!valid) {
             //console.log(validate.errors);
             var mErr = validate.errors[0];
             mErrInfo['mErrObj'] = mErr;
             mErrInfo['msg'] = `error: errors found in validation.`;
           }else{
             //console.log("VALID DATA");
           }

           //all ok....
           //return;
           //return mErrInfo['msg']==null ? true : mErrInfo; //true || mErrInfo
           if (mErrInfo['msg']==null) {
               //ok..
               //send cb..
               cb.onLoad(true);
           }else {
               //err..
               //send cb..
               cb.onErr(mErrInfo);
           }



          };
          //mRun();

          //load [req]..libs
         let mLoadReqLibs = () => {
          import("./third-party/ajv/ajv7.min.js").then( () => {
            //set..
            //alert("ajv")
            console.log("-----ajv[(add) by core_1mn]----");
            mRun();
           }).catch((e) => {
             console.log(e);
           }); 
         };
         mLoadReqLibs();
         



           /*
           USAGE   [Updated at Jul-24-2023]
           //JSON Schema (validation)

           core_1mn['mVali']['mSchemaJSON'].set({
          //"strict": true
          "schema": schema_test,
          "usr_payload": {
             "mProfilePic": { 
                 "links_mn": [
                      
                     {
                       "absUrl_mn": "FHWBFCUBUB7825BS7SJK",
                       "temps_mn": {
                         "mMaxFileSize": 5000,
                         "mFileType": "image/webp"
                       }
                     },

                   ]
             }
         },
        }, {
          "onLoad": (mValiRes) => {},
          "onErr": (mValiRes) => {},
        });
                         
           */
          

        }

      },


      "mFile": {
        //validate (File)
        "set": () => {

        }
      }



    },


    //form....
    "mForm": {

    "mDta": { //data....

      "f": //form code (sample)
       [

       /* {
          "elementID": core_1mn['mUniqueId'].mGenerate(11),
          "type": "input",
          "dataType": "text",
          "placeholder": "Please type your name",
          "maxLength": 50,
          //"endIco": "", 
          "autocomplete": false,
        },*/

       ]

    },

    "mUtil": {
      //create reusable utils......
      "checkbox": {
        "get": function(m0="rgba(14,112,205, 1.0)",w="1.7vh", h="1.7vh") {
          //mParams..
            //data..
            var mDta_svg = {
              "0": `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
              fill="rgba(34,34,34,0.4)" 
              class="bi bi-square" viewBox="0 0 16 16"
              style="width:${w}; height:${h}; " >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
              </svg>`,
  
              "1": `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="${m0}"
              class="bi bi-check-square-fill" viewBox="0 0 16 16"
              style="width:${w}; height:${h}; " >
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
            </svg>`
            };
          //layout..
          var mDiv = document.createElement("div");
          mDiv.innerHTML = mDta_svg["0"]; 
          let mIsTick = false;
          mDiv.setAttribute("m_tick", mIsTick);
          
          //events..
          var mEvents = {
            "e": mDiv,
            "isTick": mIsTick,
            "tick": () => {
              mEvents.isTick = true;
              mDiv.setAttribute("m_tick", mEvents.isTick);
              mDiv.innerHTML = mDta_svg["1"]; 
            },
            "untick": () => {
              mEvents.isTick = false;
              mDiv.setAttribute("m_tick", mEvents.isTick);
              mDiv.innerHTML = mDta_svg["0"];
            },
          };

          return mEvents;

        }
      },
      //Auto set (datatype) of [elem] data
      "mAutoSetDataType": {
        "set": (e, mDefVal) => {
          console.log(`mDefVal: ${mDefVal}`);

          //auto set [dataType] of any [element(eg. INPUT)]..Note: In case if [element] not (provided) then [it will return exact provided value [WITHOUT Modification]]
          //--Auto set (datatype) of [elem] value--//
           let mRndr = {
              "number": (getV) => {
                let mVal = getV;
                //check & set (Decimal)
                core_1mn["mCnv"].strToDecimal(getV, {
                  "onLoad": (v) => {
                     //store..
                     mVal=v;
                  },
                });
                //check & set (Integer)
                core_1mn["mCnv"].strToInteger(getV, {
                  "onLoad": (v) => {
                     //store..
                     mVal=v;
                  },
                });
                return mVal;
              },
              "text": (getV) => {
                let mVal = getV;
                return mVal;
              },
              "password": (getV) => {
                let mVal = getV;
                return mVal;
              },
           };
            
            if (e.tagName === 'INPUT') {
               if (mRndr[e.type]==undefined) {
                 //err.. [Stop]
                 throw `[Error]: mRndr[e.type=${e.type}] (not-available)`;
               }
               //all ok..
               let eVal = e.value;
               if (eVal=="") {
                 if (mDefVal!==undefined) {
                    eVal = mDefVal; //set (default) value (Schema Payload)
                 }
               }

               return mRndr[e.type](eVal); //e.value
            }
            return e;
        }
      },
      //Search [End to End search engine..]
      "search": {
        "set": (mE/*Is should be Search fld*/, mParams={}) => {
          let mFld = mE;
          mE = mFld.parentElement;

          /*
          Related =>
          https://fusejs.io/examples.html#search-string-array
          https://www.w3schools.com/howto/howto_js_filter_dropdown.asp
          */

          //console.log(mE);
          //mParams..
          let m0 = mParams["0"] != undefined?mParams["0"] : []; //Specify (itemArr) keys for [better-search] indexing..
          let m1 = mParams["1"] != undefined?mParams["1"] : []; //Specify Ignorable (itemArr) keys for [mUpdateItemArr]..
          let mCb = mParams["cb"];
          let mSend_cb = (cb_name, data) => {
           if (cb_name=="onLoad") {
                //store..
                dta_Search.s1 = data.search_txt;
                dta_Search.filter_item_idxs = data.filter_item_idxs;
            }
            if (mCb!=undefined) {
               if (mCb[cb_name]!=undefined) {
                  mCb[cb_name](data);
               }
            }
          };
          //Update [itemArr].. [it will merge new items in (arr)]
          let mUpdateItemArr = (arr, newArr, ignore_keys) => {
            let mExistCount = (arr, item) => {
              let mIgnoreKeys = ignore_keys;
              //build condition..
              let mBuildCond = (item={}, ignore_keys=[]) => {
                let c = "";  
                let item_keys = Object.keys(item);
                for (let i = 0; i < item_keys.length; i++) {
                  const mK = item_keys[i];
                  const mV = item[mK];

                  //NOTE: existance is based on (string, number, boolean).
                  //set..
                  if (ignore_keys.indexOf(mK)===-1) {
                    if (typeof mV === "string") {
                      if (i!=0) {
                        c+=`&& `;
                      }
                      c+=`e["${mK}"]==="${mV}" `;
                    }
                    if (typeof mV === "number") {
                      if (i!=0) {
                        c+=`&& `;
                      }
                      c+=`e["${mK}"]===${mV} `;
                    }
                    if (typeof mV === "boolean") {
                      if (i!=0) {
                        c+=`&& `;
                      }
                      c+=`e["${mK}"]===${mV} `;
                    }
                  }

                }
                //all ok..
                //console.log(c);
                //Sample (output) ==> e["1"]===1 && e["2"]===2 && e["4"]===4 && e["5"]===5
                return c;
                /*--USAGE--
                mBuildCond({
                2: '2',
                1: "1",
                3: "3",
              }, ["3"]);
                */
              };
              
              //check..
              const resArr = arr.filter(e => eval(mBuildCond(item, mIgnoreKeys)));
              //console.log(`mExistCount: ${JSON.stringify(resArr)}`);
              return resArr.length;

            };
            for (let i1 = 0; i1 < newArr.length; i1++) {
              const mCurr_i1 = newArr[i1];
              if (mExistCount(arr, mCurr_i1)==0) {
                 //store..
                 arr.push(mCurr_i1);
              }
            }
            return arr;
          };
          //set vars..
          let dta_Search = {
             "s1": "", //search text..
             "filter_item_idxs": [],
             "itemArr": [], //store total [Items-Array]
             "init": (itemArr=[]/*User provided itemArr*/) => {
               //store.. [curr array]..
               dta_Search["itemArr"] = itemArr;


               //log..
               /*console.log(`==================itemArr=================`);
               console.log(itemArr);*/


             },
             "err": {
              "e": document.createElement("div"),
              "init": (mE) => {
                 mE.appendChild(dta_Search.err.e);
              },
              "show": (err={"err_mn": {
                "err": {  }, 
                "res_mn": { "msg": "Not Found!" }, 
               }}) => {
                //set vars..
                let res_mn = err["err_mn"]["res_mn"];
                //let err = err["err_mn"]["err"];
                //set..
                dta_Search.err.e.innerHTML = ""; //reset..
                dta_Search.err.e.style.display = "flex";
                //set..
                dta_Search.err.e.style.justifyContent = "center";
                dta_Search.err.e.style.alignItems = "center";
                dta_Search.err.e.style.height = "3vh";
                function mSet_txt1(mE) {
                  let mTxt = document.createElement("div");
                  mTxt.innerHTML = res_mn.msg;
                  mTxt.style.fontSize = "1.4vh";
                  mE.appendChild(mTxt);
                }
                mSet_txt1(dta_Search.err.e);
              },
              "hide": () => {
                dta_Search.err.e.style.display = "none";
              }
             },
             "filter": (s1="") => {
               const mItem_Arr = dta_Search["itemArr"];
               //hide (err)..
               dta_Search.err.hide(); 
               //console.log(mItem_Arr);
               //set..[filter logic]
               let mFilterItemsIdxs = () => {
                 //https://javascript.info/regexp-anchors
                 //set vars..
                 let uCase = s1.toUpperCase();
                 let lCase = s1.toLowerCase();
                 let sCase = s1; //start (CHAR) in [upper-case]..
                 if (s1.length>1) {
                    sCase=s1[0].toUpperCase()+s1.substring(1); //eg.. "hello world!" => "Hello world!"
                 }

                 //check..
                 if (mItem_Arr.length==0) {
                    mSend_cb("onLoad", {
                    "filter_item_idxs":  [],
                    "search_txt": s1,
                    "itemArr": dta_Search.itemArr
                    });
                    return;
                 }
                 

                 //set vars.. 
                 let mItemKeys = (arr) => {
                  if (arr.length>0) {
                    return arr;
                  } 
                  arr = Object.keys(mItem_Arr[0]);
                  return arr;
                 };

                  //set..
                  const result = (arr, iKeys) => {
                   let mNewArr = []; 
                   for (let i1 = 0; i1 < arr.length; i1++) {
                    const e = arr[i1];
                    for (let i2 = 0; i2 < iKeys.length; i2++) {
                      const mKey = iKeys[i2];
                      if (typeof e[mKey] === "string") { //Only (String) is indexable..
                      if (
                      //--start-at--//
                      RegExp(`^${s1}`).test(e[mKey])==true || 
                      RegExp(`^${uCase}`).test(e[mKey])==true ||
                      RegExp(`^${lCase}`).test(e[mKey])==true ||
                      RegExp(`^${sCase}`).test(e[mKey])==true ||
                       //--any--//
                       e[mKey].indexOf(s1)!==-1 ||
                       e[mKey].indexOf(uCase)!==-1 ||
                       e[mKey].indexOf(lCase)!==-1 ||
                       e[mKey].includes(s1)) {
                        //found..
                        mNewArr.push(i1);
                      }
                      }
                      
                    }

                   }
                   //console.log(mNewArr);
                   return mNewArr;
                 };
                 //onLoad..
                 mSend_cb("onLoad", {
                  "filter_item_idxs":  result(mItem_Arr, mItemKeys(m0)),
                  "search_txt": s1,
                  "itemArr": dta_Search.itemArr
                 });

               };
               mFilterItemsIdxs();
             }
          };
          //events..
          if (mParams["init"]!=undefined) {
              mParams["init"] = (itemArr, mP={"filter":true, }) => {
              let mUpdateArr = mUpdateItemArr(dta_Search.itemArr, itemArr, m1); //update (itemArr)
              dta_Search.init(mUpdateArr); //init (Search Data [itemArr])..
              if (mP.filter==true) {
                 //reload..(filter)
                 dta_Search.filter(dta_Search.s1);
              } 
            }
          }
          if (mParams["err"]!=undefined) {
              mParams["err"] = (err={/*refer-to-1mnErrFormat*/}) => {
              if (dta_Search.filter_item_idxs.length==0) {
                  dta_Search.err.show(err);
              }
           }
          }


          //set..(Search fld)
          //events..
          mFld.onclick = (e) => {
            e.stopPropagation();
          }; 
          mFld.oninput = () => {
           //console.log(mFld.value);
           dta_Search.filter(mFld.value.trim());
         };

         //init..[err layout]
         dta_Search.err.init(mE);


         /*
          --USAGE--
           //search-UI-//
           let mFld = document.createElement("input");
           mFld.style.width = "95%";
           mFld.style.height = "5vh";
           mFld.style.border = "none";
           mFld.style.outline = "none";
           mFld.style.fontSize = "1.5vh";
           mFld.style.padding = "0 0 0 0.9vw";
           //mFld.style.backgroundColor = "rgba(34,34,34,0.05)";
           mFld.placeholder = "Search..";
           mSearch_cov.appendChild(mFld);
  
           //--Search--//
           let mSet_search = core_1mn["mForm"]["mUtil"].search.set;
           
              //set..
              let search_Params = {
                "0": [mCurrDta1['dropdown']["key"]["txt1"]],
                "1": ["mArr_cbox1", mCurrDta1['dropdown']["key"]["cbox1"], mCurrDta1['dropdown']["key"]["etxt1"]],
                "cb": {
                  "onLoad": (data={"filter_item_idxs":[], "itemArr":[]}) => {
                    console.log("=======onLoad============");
                     //--reload..(list)--//
                     mSet_ddownI(data.itemArr, false, data.filter_item_idxs);
                     //send callback.. 
                     try {
                      mCurrDta1["search"]["cb"]["onLoad"](data);
                     } catch (e) {} //Ignore
                  },
                },
                "init": (itemArr, {}) => {},
                "err": (err) => {},
                
              };
              mSet_search(mFld, search_Params);        
              //events..
              try {
                //init..(default)
                search_Params.init(mCurrDta1['dropdown']["itemArr"], {"filter":false});
                mCurrDta1["search"]["init"] = (itemArr) => {
                  console.log("===============INIT===================="); 
                  //init..
                  search_Params.init(itemArr);
                };
                mCurrDta1["search"]["err"] = (err) => {
                  console.log("===============ERR====================");
                  search_Params.err(err);
                };
              } catch (e) {} //Ignore
            */
            


         }
      },
      //mWares
      "mWares": {
        //We will check if value is (required by) Schema or not..
        "isRequired": (mSchema, key) => {
          //check..
          if (Object.keys(mSchema).length==0) {
            console.warn(`Note: [core_1mn.mForm.mUtil.mWares] is returning (TRUE)..because no schema JSON found.`);
            return true;
          }


          /**
           * @mSchema => your schema
           * @key => your same payload and schema key
           * @val => your payload val
          */
          //alert(mVal)
          //alert(mKey)
          try {
            //vali..
            if (mSchema.hasOwnProperty("properties")==false ||
            mSchema.hasOwnProperty("required")==false) {
              //err..
              throw `Error: [mWares.isRequired] (mSchema)`;
            }
            //all ok..
            if (mSchema["required"].indexOf(key)!==-1) {
               //required
               return true;
            }else {
              //not required
              return false;
            }
          } catch (e) {
            throw `Error: [mWares.isRequired] ${e}`;
          }
        }
      },

      //Set (JSON) Schema vali..Rules on UI
      "mSchValiRulesOnUI": {
        "set": (mCurrDta1={}, //curr [fld] payload
          mSchemaJSON={}) => { 
            /*console.log(`======mSchValiRulesOnUI======`);
            console.log(mCurrDta1);
            console.log(mSchemaJSON);*/

            //set..
            let mKey1 = Object.keys(mCurrDta1["$mUsrData"])[0];
            if (mSchemaJSON.hasOwnProperty("properties")==false) {
              return; //Stop
            }
            //all ok..
            let mSchProp = mSchemaJSON["properties"];
            if (mSchProp.hasOwnProperty(mKey1)==false) {
               return; //Stop
            }
            //all ok..
            mSchProp = mSchProp[mKey1];


            //rndr..
            let mRndr = {
              "utils": {
                "dataType": {
                  "number": {
                    "set": (mE, mProp) => {
                      let mK1 = "maximum";
                      let mK2 = "minimum";
                      //set.....
                      if (mProp.hasOwnProperty(mK1)==true) {
                        if (mProp[mK1]<parseFloat(mE.value)) {
                           //reset..
                           mE.value = mProp[mK1];
                           return;
                        }
                      }
                      if (mProp.hasOwnProperty(mK2)==true) {
                        if (mProp[mK2]>parseFloat(mE.value)) {
                           //reset..
                           mE.value = mProp[mK2]; //mProp[mK2]; || "";
                           return;
                        }
                      }
                    }
                  },
                  "string": {
                    "set": (mE, mProp) => {
                      let mK1 = "maxLength";
                      let mK2 = "minLength"; 
                      //set.....
                      if (mProp.hasOwnProperty(mK1)==true) {
                        //overwrite..
                        mE[mK1] = mProp[mK1];  //ELEM.maxLength
                        //set..
                        if (mProp[mK1]<mE.value.length) {
                           //reset..
                           mE.value = mE.value.slice(0, -1); //eg=> Helloo => Hello
                           return;
                        }
                      }
                      /*if (mProp.hasOwnProperty(mK2)==true) {
                        if (mProp[mK2]>mE.value.length) {
                           //reset..
                           mE.value = "";
                           return;
                        }
                      }*/

                    }
                  },
                  "integer": {
                    "set": (mE, mProp) => {
                      let mK1 = "maximum";
                      let mK2 = "minimum";
                      //set.....
                      if (mProp.hasOwnProperty(mK1)==true) {
                        if (mProp[mK1]<parseInt(mE.value)) {
                           //reset..
                           mE.value = mProp[mK1];
                           return;
                        }
                      }
                      if (mProp.hasOwnProperty(mK2)==true) {
                        if (mProp[mK2]>parseInt(mE.value)) {
                           //reset..
                           mE.value = mProp[mK2]; //mProp[mK2]; || "";
                           return;
                        }
                      }
                    }
                  },
                }
              },
               "l": {
                  "input": {
                    "set": (mElemDta={}) => {
                      let mInputE = mElemDta["mInputE"]; 
                      //events..
                      mInputE.addEventListener("input", () => {
                        /*console.log(`====oninput====`);
                        console.log(mSchProp);*/
                        //set..
                        if (mSchProp.hasOwnProperty("type")) {
                            if (mRndr["utils"]["dataType"].hasOwnProperty(mSchProp["type"])) {
                              mRndr["utils"]["dataType"][mSchProp["type"]]
                              .set(mInputE, mSchProp);
                            }
                        }

                      }, true); 

                    }
                  }
               }
            };

            //set (fld)..
            if (mRndr["l"].hasOwnProperty(mCurrDta1["type"])==true) {
              mRndr["l"][mCurrDta1["type"]]
              .set(mCurrDta1["mElemDta"]);
            }


          /*
          --USAGE--
          //------mSchValiRulesOnUI-----//
          core_1mn["mForm"]["mUtil"].mSchValiRulesOnUI
          .set(mCurrDta1, mSchemaJSON);

          */
        }
      },


      //ui_dta_mn //(Use Case => if we [$mUsrDta.returnHTML=true] then we parse that attr..and we are able use that data )
      "ui_dta_mn": {
        //init with empty string..Later we will evaluate
         "init": (mE) => {
          /**
           * @mE => DOM_ELEM
          */ 
          mE.setAttribute("ui_dta_mn", ""); //init with empty string..Later we will evaluate
         },
         "evaluate": (mHTML) => {
          /**
           * @mHTML => DOM_ELEM
          */
          let mKey = "ui_dta_mn";
          let ui_dta_mn_ARR = mHTML.querySelectorAll(`[${mKey}=""]`);
          let mBuild = (a) => {
            for (let i = 0; i < a.length; i++) {
              const e = a[i];
              //set..
              if (e.tagName == "INPUT") {
                e.setAttribute(mKey, e.value);
              }
              if (e.tagName == "DIV") {
                e.setAttribute(mKey, e.innerHTML);
              }
              /*console.log(`=====${mKey}=====`);
              console.log(e);
              console.log(e.tagName);*/
            }
          };
          mBuild(ui_dta_mn_ARR);

         }
      }



    },

    "mR": { //rendrer.....

      /**
       * @NOTE These components canbe use directly..outside form-builder.
       *  --USAGE--
          core_1mn["mForm"]["mR"]["input"].set({
              "e": mElemHolder,
              "data": mCurrI,
              "cover": mCover,  //#[not tested yet for direct usage]
              "sch_json": mSchemaJSON //#[not tested yet for direct usage]
          });
      */
      

      /**
         --Global USAGE params (of all type)--
      * @$mUsrDataCONF
       "$mUsrDataCONF": {
        "returnDta": false, //default (true) [if=>true then ($mUsrData) will return data] [if=>false ($mUsrData) will not return data]
        "returnHTML": false, 
                    //default (false) [if=>true then ($mUsrData) will return Complete Field HTML ]
                    //1- Field (--UI Data--) can be retrive by using [attr="ui_dta_mn"] eg=> (ui_dta_mn="John Doe")


      }
      //https://www.w3schools.com/tags/att_input_readonly.asp
      * @readonly
      "readonly": true, //(default (false)) [if=>true then (not editable)] [if=>false then (editable)]

      //--Events--//
      //you can set and (reload) FIELD by (assigning) this func..
      * @reload
      "reload": () => {},

      * @hide
      "hide": true, //(default (false)) [if=>true then (not viewable)] [if=>false then (viewable)]

      //pass flags (supported by fields) inside array //refer to field for flags value
      * @flags
      "flags": [] //eg => User will not be able to do these actions
                               

       //-----events-------//
      * @events
      "events": {
          "hide": () => {},
          "show": () => {},
          "click": () => {}
      },

      //-----(IMPORTANT)Note----//
      * @input
      [input] => [$YOUR_SCHEMA.PROP.default] (value) will be set.. if data is (EMPTY||Not Provided by User)


      //Html element tag name  [Optional]
      * @e_tag
      "e_tag": ``   {eg => "input" || "textarea"}


      //Middleware //USE_CASE: This can be used eg => "checkbox click control", "input editing control"
      * @m_ware
      "m_ware": {
        "sample_clc_1": () => {return false;||return true;}
        "sample_clc_2": () => {return false;||return true;}
      }



      */

      //Normal Text Entry (Field)
      "input": {

      "set": (mP={
        "e": HTMLElement,
        "data": {},
        "cover": null,  //#[not tested yet for direct usage]
        "sch_json": {} //#[not tested yet for direct usage]
      }) => {
        //set vars..
        let mFormDiv = mP["e"];
        let mCurrDta1 = mP["data"];
        let mG_cover = mP.hasOwnProperty("cover")?mP["cover"]:null;
        let mSchemaJSON = mP.hasOwnProperty("sch_json")?mP["sch_json"]:{};

          /*
          USAGE
                         {
                            "elementID": core_1mn['mUniqueId'].mGenerate(11),
                            "type": "input",
                            "dataType": "password",
                            "placeholder": "Password",
                            "maxLength": schema_test['properties']['mPassword']['maxLength'],
                            "endIco": "eye_0.svg", //"info_0.svg",
                            "autocomplete": false,
                            "label": "Password",
                            "s_label": "Rs:",
                            "e_label": "Rs:",

                            //cb..
                            "cb": {
                              "onInput": function(data){
                                var m0 = data['0']; //value
                                console.log(m0);
                              },
                              "onClick": () => {

                              }
                            },


                            "$mUsrData": {
                                "mPassword": "",
                            },


                            "$mLogic": {
                                "mMatchWith": [
                                    "mName",
                                ]
                            },


                            "e_tag": "input",  //{"input" || "textarea"}

                             
                        }, 
          */

                        



          //reload..
          if (mCurrDta1["reload"]!=undefined) {
            mCurrDta1["reload"] = () => {
               mStartE();
            }
          }      
          //start elem..        
          var mDivRoot = document.createElement("div");
          //mDivRoot.style.width = "100%"; //--NEW--//
          //mDivRoot.style.margin = "1vh 0";
          mDivRoot.style.position = "relative";
          mFormDiv.appendChild(mDivRoot);

          //check (hide)..
          if (mCurrDta1.hasOwnProperty("hide")==true) {
            if (mCurrDta1["hide"]==true) {
                mDivRoot.style.display = "none";
            }
          }


           //-------events------//
           if (mCurrDta1["events"]!=undefined) {
            if (mCurrDta1["events"].hasOwnProperty("hide")==true) {
               //hide..
               mCurrDta1["events"]["hide"] = () => {
                mDivRoot.style.display = "none";
              } 
            } 
            if (mCurrDta1["events"].hasOwnProperty("show")==true) {
              //show..
              mCurrDta1["events"]["show"] = () => {
               mDivRoot.style.display = "block";
             } 
           } 
           }


          const mStartE = () => {
            mDivRoot.innerHTML = ""; //reset..

          //Tooltip....
          var mTooltip = core_1mn['tooltip']['2'].set(
            {
              "mE1": mDivRoot,
              //"mCallback": mCallback
              "0": {
                "0": 1,
                "1": "0 0 0 15%",
                "2": "rgba(252, 58, 58, 1.0)",
                "3": "0.3vw"
              },
              "1": {
                "0": "#fafafa",
                "1": "0.2vh solid rgba(252, 58, 58, 1.0)",
              },
              "2": {
                "0": "0 0 -3.8vh -1.5vw",
                "1": "4.4vh",
                "2": "15vw",
              },
          });
          //mTooltip['tt'].show(mTooltip['tt']['e'], YOUR_MSG_DIV);
          // mTooltip['tt'].hide(mTooltip['tt']['e']);

          //send cb..
          let mSend_cb = (cb_name, data) => {
             if (mCurrDta1["cb"]!=undefined) {
              if (mCurrDta1["cb"][cb_name]!=undefined) {
                  mCurrDta1["cb"][cb_name](data);
              }
             }
          };
        
          //label..
          if(mCurrDta1.hasOwnProperty("label")==true){
            //mTopLabelDiv......
            var mTopLabelDiv = document.createElement("div");
            mTopLabelDiv.innerHTML = mCurrDta1['label'];
            mTopLabelDiv.style.textAlign = "start";
            mTopLabelDiv.style.fontSize = "1.2vh";
            mTopLabelDiv.style.color = "rgba(34,34,34, 0.6)";
            mDivRoot.appendChild(mTopLabelDiv);
          }


          //mDiv..
          var mDiv = document.createElement("div");
          mDiv.id = core_1mn.mUniqueId.mGenerate(17);

          mDiv.style.width = mCurrDta1['w']!=undefined ? mCurrDta1['w'] : "100%"; //100%
          mDiv.style.height = mCurrDta1['h']!=undefined ? mCurrDta1['h'] : "4.0vh"; //5vh
          //mDiv.style.margin = "1vh 0";
          mDiv.style.display = "flex";
          mDiv.style.backgroundColor = "#f2f2f2";

          mDiv.style.alignItems = "center";
          //mDiv.style.paddingRight = "0.5vw";
          if (mG_cover==undefined) {
            mDiv.style.border = "0.1vh solid rgba(34,34,34,0.2)"; //.3
            mDiv.style.borderRadius = "0.3vh";
          }
          mDivRoot.appendChild(mDiv);


          //prefix..(label)
          let mPrefix_label = (mE) => {
            //label_s..
            let mK = "s_label";
            if(mCurrDta1.hasOwnProperty(mK)==true){
              var mLabel = document.createElement("div");
              mLabel.innerHTML = mCurrDta1[mK];
              mLabel.style.padding = "0.5vw";
              mLabel.style.textAlign = "start";
              mLabel.style.fontSize = "1.4vh";
              mLabel.style.color = "rgba(34,34,34, 0.6)";
              mE.appendChild(mLabel);

              //init..[------ui_dta_mn-----]
              core_1mn["mForm"]["mUtil"].ui_dta_mn
              .init(mLabel);

            } 
          };
          mPrefix_label(mDiv);


          //e_tag..
          let e_tag = mCurrDta1.hasOwnProperty("e_tag")?mCurrDta1["e_tag"]:`input`;

          //input....
          var mInput = document.createElement(e_tag);  //input
          mInput.id = mCurrDta1['elementID'];

          //set (default) value..
          mInput.value = mCurrDta1['$mUsrData'][Object.keys(mCurrDta1['$mUsrData'])[0]];
          mInput.readOnly = mCurrDta1['readonly']!=undefined?mCurrDta1['readonly']:false;

          mInput.style.width = "100%";
          mInput.style.height = "100%";
          mInput.style.outline = "none";
          mInput.style.border = "none";
          mInput.style.padding = "0 0.5vw";
          mInput.style.fontSize = "1.4vh";
          mInput.style.color = "rgba(34,34,34, 0.9)";
          mInput.style.backgroundColor = "transparent";

          //set....
          mInput.setAttribute("dataType", mCurrDta1['dataType']);

          mInput.placeholder = mCurrDta1['placeholder'];
          if (e_tag==`input`) {
          mInput.type = mCurrDta1['dataType'];
          }
          mInput.maxLength = mCurrDta1['maxLength'];
          mInput.autocomplete = mCurrDta1['autocomplete'];
          mDiv.appendChild(mInput);

          //textarea..
          if (e_tag==`textarea`) {
            mInput.style.resize = `none`;
          }


           //init..[------ui_dta_mn-----]
           core_1mn["mForm"]["mUtil"].ui_dta_mn
           .init(mInput);
          
  

          //events....
          mInput.onfocus = function(){
            var mCurrItemId = this.id;
            var mCurrItem = document.getElementById(mCurrItemId);
            //set
            if (mG_cover==undefined) {
              mCurrItem.parentElement.style.border = "0.1vh solid rgba(34,34,34,0.7)";
            }

            mTooltip['tt'].hide(mTooltip['tt']['e']);
          };
          mInput.onblur = function(){
            var mCurrItemId = this.id;
            var mCurrItem = document.getElementById(mCurrItemId);
            //set
            if (mG_cover==undefined) {
              mCurrItem.parentElement.style.border = "0.1vh solid rgba(34,34,34,0.2)";
            }

          };
          mInput.oninput = () => { 
            mSend_cb("onInput", {
              "0": mInput.value
            });
          };

          mInput.onclick = () => {
            mSend_cb("onClick", {
            });
          }
          



          //suffix..(label)
          let mSuffix_label = (mE) => {
            //label_s..
            let mK = "e_label";
            if(mCurrDta1.hasOwnProperty(mK)==true){
              var mLabel = document.createElement("div");
              mLabel.innerHTML = mCurrDta1[mK];
              mLabel.style.padding = "0.5vw";
              mLabel.style.textAlign = "start";
              mLabel.style.fontSize = "1.4vh";
              mLabel.style.color = "rgba(34,34,34, 0.6)";
              mE.appendChild(mLabel);

              //init..[------ui_dta_mn-----]
              core_1mn["mForm"]["mUtil"].ui_dta_mn
              .init(mLabel);

            } 
          };
          mSuffix_label(mDiv);





             //here we set endIco....
           if(mCurrDta1.hasOwnProperty("endIco")==true){ 
              mSet_endIco();
           }
           function mSet_endIco() { 
            var mSvgDiv = document.createElement("div");
            mSvgDiv.style.paddingRight = "0.5vw";
            mDiv.appendChild(mSvgDiv);

              //svg.....
             var mSvgCover = core_1mn['mSvg'].set({
                 "0": mCurrDta1['endIco'],
                 "1": core_1mn['mUniqueId'].mGenerate(61),
                 "2": "2vh",
                 "3": "2vh",
                 "4": "rgba(34,34,34, 0.4)",
                 "5": mSvgDiv,
                 "cb": {
                  "onClick": (mGetCurrItem) => {
                    //alert("onClick");
                    var mCurrItem = mGetCurrItem;
                    var mInputE = document.getElementById(mCurrItem.getAttribute("e_input_id"));
                    var mSvg = mCurrItem.querySelectorAll("svg")[0];

                    //check IF (password)
                    if(mInputE.getAttribute("dataType")=="password"){
                      //set....
                      if(mInputE.type=="password"){
                        mInputE.type = "text";
                         if(mSvg!=null){
                          mSvg.style.fill = "rgba(34,34,34, 0.8)";
                         }
                      }else{
                        mInputE.type = "password";
                        if(mSvg!=null){
                          mSvg.style.fill = "rgba(34,34,34, 0.4)";
                         }
                      }
                    }
                    

                   }
                 }
                 
             });
             mSvgCover.setAttribute("e_input_id", mInput.id);
            
           }

          if(mCurrDta1.hasOwnProperty("bottomRight")==true){
              mBottomRight();
          }
          function mBottomRight() {
              if(mCurrDta1['bottomRight']['type']=="href"){
                  var mDivCover = document.createElement("div");
                  mDivCover.style.display = "flex";
                  mDivCover.style.justifyContent = "end";
                  mDivRoot.appendChild(mDivCover);
                  //set vars..
                  var mCb = mCurrDta1['bottomRight']['cb'];
                  function mSend_cb(mCb_name, data) {
                    if(mCb!=undefined){
                      if(mCb[mCb_name]!=undefined){
                        mCb[mCb_name](data);
                      }
                    }
                  }

                  var mHref = document.createElement("a");
                  mHref.id = core_1mn['mUniqueId'].mGenerate(19);
                  mHref.href = "javascript:void(0)";
                  mHref.style.fontSize = "1.2vh";
                  mHref.style.color = "rgba(34,34,34,0.5)";
                  mHref.style.fontWeight = "400";
                  mHref.innerHTML = mCurrDta1['bottomRight']['txt'];
                  mHref.style.textAlign = "end";
                  mDivCover.appendChild(mHref);
                  //events..
                  mHref.onclick = function(){
                    var mCurrItem = this.id;
                    var mCurrItem = document.getElementById(mCurrItem);
                    //send callback..
                    mSend_cb("onClick", {"e":mCurrItem}); 
                  };
              }
              
          }

           

          //****store (elements)
          mCurrDta1['mElemDta'] = {
            "mTooltip": mTooltip,
            "mInputE": mInput,

            "mDivRoot": mDivRoot, //Complete Field
          };

          //------mSchValiRulesOnUI-----//
          if (Object.keys(mSchemaJSON).length>0) {
          core_1mn["mForm"]["mUtil"].mSchValiRulesOnUI
          .set(mCurrDta1, mSchemaJSON);             
          }
          



          }
          mStartE();

      },

      "setDataJSON": (mGetParams) => {
        var mParams = mGetParams;
        var mFormCurrItem = mParams['mFormCurrItem'];
        var mUsrPayload = mParams['mUsrPayload']; //need to (build)
        var mUsrData = mFormCurrItem['$mUsrData'];
        let mSchema = mParams['mSchema'];
        let mUsrDataCONF = mFormCurrItem['$mUsrDataCONF'];
        let mReturnHTML = mParams["returnHTML"];


        var mErrInfo = {
          "isErr": true,
          "msg": null
        };

        //data....
        var mElemDta = mFormCurrItem['mElemDta'];
        mSet_data();
        function mSet_data() {
          //var mTooltip = mElemDta['mTooltip'];
          let mInputE = mElemDta['mInputE'];
          let mInputVal = mInputE.value; //it may be updated..(below)

          //--mUtil--//
          const mAutoSetDataType = core_1mn["mForm"]["mUtil"].mAutoSetDataType;
          //--Auto set (datatype) of input value--//
          let mKey = Object.keys(mUsrData)[0];
          let mDefVal = undefined;
          if (mSchema.hasOwnProperty("properties")) {
          if (mSchema["properties"].hasOwnProperty(mKey)) {
            if (mSchema["properties"][mKey].hasOwnProperty("default")) {
               mDefVal = mSchema["properties"][mKey]["default"];
            }
          }            
          }
          /*console.log(`==mDefVal==`);
          console.log(mDefVal);*/
          mInputVal = mAutoSetDataType.set(mInputE, mDefVal);
          
          //store (JSON)....
          mAddDtaIn_JSON(0, mInputVal); //mInputE.value
        }

        //($mUsrData).....
        function mAddDtaIn_JSON(mKeyI, mVal) {
          var mKey = Object.keys(mUsrData)[mKeyI];
          if(mKey==undefined){
             //error....(undefined key)
             mErrInfo['msg']=`error: (undefined key => ${mKey}) found.`;
             return;
          }
          if(mUsrPayload.hasOwnProperty(mKey)==true){
            //error....(duplicate key)
            mErrInfo['msg']=`error: (duplicate key => ${mKey}) found.`;
            return;
          }

           //all ok.....
           //mWares..
           let mWares = core_1mn["mForm"]["mUtil"]["mWares"];
           if (mWares.isRequired(mSchema, mKey)==false &&
           mVal=="") {
             //value is not ("")..
             //no need to add..
           }else {
              //console.log(mVal);
              //store....
              mUsrData[mKey] = mVal;
              //add....
              mUsrPayload[mKey] = mUsrData[mKey];



              //----HTML----//
              let mSet_HTML = () => {
                    //"returnHTML": false, //default (false) [if=>true then ($mUsrData) will return Complete Field HTML ]
                    //evaluate..[------ui_dta_mn-----]
                    core_1mn["mForm"]["mUtil"].ui_dta_mn
                    .evaluate(mFormCurrItem['mElemDta']["mDivRoot"]);
                    //add....
                    mUsrPayload[`${mKey}`] = mFormCurrItem['mElemDta']["mDivRoot"];
              };
              if (mUsrDataCONF!=undefined) {
                  if (mUsrDataCONF.hasOwnProperty("returnHTML")) {
                    if (mUsrDataCONF["returnHTML"]==true) {
                       mSet_HTML();
                    }
                  }
              }
              if (mReturnHTML!=undefined) {
                 if (mReturnHTML==true) {
                      mSet_HTML();
                 }
              }


           }



           /*
           USAGE
           mAddDtaIn_JSON(mKeyI, mVal);
           */
        }
        //set vars....
        return mErrInfo['msg']==null ? true : mErrInfo; //true || mErrInfo
      }

      },  

      //Normal File Entry (Field)
      "file": {

        "set": (mP={
          "e": HTMLElement,
          "data": {},
          "cover": null,  //#[not tested yet for direct usage]
          "sch_json": {} //#[not tested yet for direct usage]
        }) => {
          //set vars..
          let mFormDiv = mP["e"];
          let mCurrDta1 = mP["data"];
          let mG_cover = mP.hasOwnProperty("cover")?mP["cover"]:null;
          let mSchemaJSON = mP.hasOwnProperty("sch_json")?mP["sch_json"]:{};

            /*
            USAGE
              {
                                          "elementID": core_1mn['mUniqueId'].mGenerate(11),
                                          "type": "file",
                                          "dataType": "file",
                                          "placeholder": "Profile Pic", 
                                          "label": "Profile Pic (Max: 100kb)",

                                          "maxLength": schema_test['properties']['mProfilePic']['properties']['links_mn']['items']['properties']['absUrl_mn']['maxLength'],
                                          "maxItems": schema_test['properties']['mProfilePic']['properties']['links_mn']['maxItems'],
                                          "mMaxFileSize": schema_test['properties']['mProfilePic']['properties']['links_mn']['items']['properties']['temps_mn']['properties']['mMaxFileSize']['maximum'],
                                          "mFileType": schema_test['properties']['mProfilePic']['properties']['links_mn']['items']['properties']['temps_mn']['properties']['mFileType']['enum'],
          
                                          "$mUsrData": {
                                              "mProfilePic": { 
                                               //"links_mn": [ //(*This will be auto generated..)
                                                      //{
                                                        //"absUrl_mn": "FHWBFCUBUB7825BS7SJK",
                                                        //"temps_mn": {
                                                          //"mMaxFileSize": 500000,
                                                          //"mFileType": "image/webp"
                                                        //}
                                                      //}

                                                  //]
                                                }
                                              },
                                               
                                          },


                                    //cb..
                                    "cb": { 
                                        "onLoadTotalFiles": function(data){    //Note: You need to call (getTotalFiles() to get this cb)
                                          //var files_list = data['files_list']; //files_list
                                          //console.log(files_list);
                                        },

                                        "onPick": (data) => {
                                            let file = data["file"];
                                            console.log(file);
                                        }
                                        

                                    },

                                    //--Events--//
                                    "getTotalFiles": () => {}   



            */

            /*
              const schema_test_v1 = {
                       "definitions": {},
                       "$schema": "http://json-schema.org/draft-07/schema#", 
                       "$id": "https://example.com/object1663873674.json", 
                       "title": "Root", 
                       "type": "object",
                       "required": [
                           "mProfilePic"
                       ],
                       "properties": {
                           "mProfilePic": {
                               "$id": "#root/mProfilePic", 
                               "title": "Mprofilepic", 
                               "type": "object",
                               "required": [
                                   "links_mn"
                               ],
                               "properties": {
                                   "links_mn": {
                                       "$id": "#root/mProfilePic/links_mn", 
                                       "title": "links_mn", 
                                       "type": "array",
                                       "default": [],
                                       "minItems": 1,
                                       "maxItems": 5,
                                       "items":{
                                           "$id": "#root/mProfilePic/links_mn/items", 
                                           "title": "Items", 
                                           "type": "object",
                                           "required": [
                                               "absUrl_mn",
                                               "temps_mn"
                                           ],
                                           "properties": {
                                               "absUrl_mn": {
                                                   "$id": "#root/mProfilePic/links_mn/items/absUrl_mn", 
                                                   "title": "absUrl_mn", 
                                                   "type": "string",
                                                   "default": "",
                                                   "examples": [
                                                       "FHWBFCUBUB7825BS7SJK"
                                                   ],
                                                   "pattern": "^.*$",
                                                   "minLength": 1,
                                                   "maxLength": 200,
                                               },
                                               "temps_mn": {
                                                   "$id": "#root/mProfilePic/links_mn/items/temps_mn", 
                                                   "title": "temps_mn", 
                                                   "type": "object",
                                                   "required": [
                                                       "mMaxFileSize",
                                                       "mFileType"
                                                   ],
                                                   "properties": {
                                                       "mMaxFileSize": {
                                                           "$id": "#root/mProfilePic/links_mn/items/temps_mn/mMaxFileSize", 
                                                           "title": "Mmaxfilesize", 
                                                           "type": "integer",
                                                           "examples": [
                                                               500000
                                                           ],
                                                           "default": 0,
                                                           "minimum": 1,
                                                           "maximum": 500000
                                                       },
                                                       "mFileType": {
                                                           "$id": "#root/mProfilePic/links_mn/items/temps_mn/mFileType", 
                                                           "title": "Mfiletype", 
                                                           "type": "string",
                                                           "default": "",
                                                           "examples": [
                                                               "image/webp"
                                                           ],
                                                           "pattern": "^.*$",
                                                           
                                                           "minLength": 1,
                                                           "maxLength": 30,
                                                           "enum": [
                                                           "image/jpeg",
                                                           "image/png",
                                                           "image/webp",
                                                           ]

                                                       }
                                                   },
                                                  "additionalProperties": false

                                               }
                   
                                           },
                                           "additionalProperties": false

                                       }
                   
                                   }
                               }
                           }
                   
                       }
                   };
            */                              


            var mDivRoot = document.createElement("div");
            //mDivRoot.style.margin = "1vh 0";
            mDivRoot.style.position = "relative";
            mFormDiv.appendChild(mDivRoot);

            //check (hide)..
            if (mCurrDta1.hasOwnProperty("hide")==true) {
              if (mCurrDta1["hide"]==true) {
                  mDivRoot.style.display = "none";
              }
           }


            //events..
            mDivRoot.onclick = function(){
              mTooltip['tt'].hide(mTooltip['tt']['e']);
            };

            //Tooltip....
            var mTooltip = core_1mn['tooltip']['2'].set(
              {
                "mE1": mDivRoot,
                //"mCallback": mCallback
                "0": {
                  "0": 1,
                  "1": "0 0 0 15%",
                  "2": "rgba(252, 58, 58, 1.0)",
                  "3": "0.3vw"
                },
                "1": {
                  "0": "#fafafa",
                  "1": "0.2vh solid rgba(252, 58, 58, 1.0)",
                },
                "2": {
                  "0": "0 0 -3.8vh -1.5vw",
                  "1": "4.4vh",
                  "2": "15vw",
                },
             });
            // mTooltip['tt'].show(mTooltip['tt']['e']);
            // mTooltip['tt'].hide(mTooltip['tt']['e']);
          
            //mTopLabelDiv......
            var mTopLabelDiv = document.createElement("div");
            mTopLabelDiv.innerHTML = mCurrDta1['label'];
            mTopLabelDiv.style.textAlign = "start";
            mTopLabelDiv.style.fontSize = "1.2vh";
            mTopLabelDiv.style.color = "rgba(34,34,34,0.6)";
            mDivRoot.appendChild(mTopLabelDiv);


            var mDiv = document.createElement("div");
            mDiv.style.width = "100%";
            mDiv.style.height = "15.0vh"; //4vh
            //mDiv.style.margin = "1vh 0";
            mDiv.style.display = "flex";
            mDiv.style.backgroundColor = "#f2f2f2";
            mDiv.style.alignItems = "center";
            mDiv.style.padding = "0.7vh 0 0 0";
            
            //mDiv.style.border = "0.3vh solid rgba(34,34,34,0.1)"; //.3
            mDiv.style.border = "0.1vh solid rgba(34,34,34,0.2)"; //.3
            mDiv.style.borderRadius = "0.3vh";  
            mDivRoot.appendChild(mDiv);


            //send cb..
            let mSend_cb = (cb_name, data) => {
              if (mCurrDta1["cb"]!=undefined) {
               if (mCurrDta1["cb"][cb_name]!=undefined) {
                   mCurrDta1["cb"][cb_name](data);
               }
              }
            };

            //--Events--//
            if (mCurrDta1["getTotalFiles"]!=undefined) {
              mCurrDta1["getTotalFiles"] = () => {
                   //mCurrDta1["getTotalFiles"](mCurrDta1['mElemDta']['mFileList']);
                   //send (cb)..
                   mSend_cb("onLoadTotalFiles", {
                    "files_list": mCurrDta1['mElemDta']['mFileList']
                   });
              };
            }
            

            //input....
            var mInput = document.createElement("input");
            mInput.id = mCurrDta1['elementID'];

            mInput.style.display = "none"

            mInput.style.width = "100%";
            mInput.style.height = "100%";
            mInput.style.outline = "none";
            mInput.style.border = "none";
            mInput.style.padding = "0 0.5vw";
            mInput.style.fontSize = "1.4vh";
            mInput.style.color = "rgba(34,34,34, 0.9)";
            mInput.style.backgroundColor = "transparent";

            //set....
            mInput.setAttribute("mMaxItems", mCurrDta1['maxItems']);
            mInput.setAttribute("mMaxFileSize", mCurrDta1['mMaxFileSize']);
            mInput.setAttribute("mFileType", mCurrDta1['mFileType'] );

            mInput.type = mCurrDta1['dataType'];
            mInput.accept = mCurrDta1['mFileType'];
            mInput.multiple = mCurrDta1['maxItems']>1 ? true : false;

            mDiv.appendChild(mInput);


            //events....
            mInput.onfocus = function(){
              var mCurrItemId = this.id;
              var mCurrItem = document.getElementById(mCurrItemId);
              //set
              mCurrItem.parentElement.style.border = "0.1vh solid rgba(34,34,34,0.7)";

              mTooltip['tt'].hide(mTooltip['tt']['e']);
            };
            mInput.onblur = function(){
              var mCurrItemId = this.id;
              var mCurrItem = document.getElementById(mCurrItemId);
              //set
              mCurrItem.parentElement.style.border = "0.1vh solid rgba(34,34,34,0.2)";
            };
            //file....
            mInput.onchange = function(){
              var mCurrItemId = this.id;
              var mCurrItem = document.getElementById(mCurrItemId);
              //file..
              mAdd_file(mCurrItem);

            };


            //****store (elements)
            mCurrDta1['mElemDta'] = {
              "mTooltip": mTooltip,
              "mInputE": mInput,
              "mFileList": []
            };


            function mShowTt(mMsgTxt) {
              var mTooltip = mCurrDta1['mElemDta']['mTooltip'];
              //Init (note)....
              var mMsgDiv = core_1mn['notes']['2'].set({
                "ico1": {
                    "0": "exclamation_0.svg",
                    "1": "1.6vh",
                    "2": "1.6vh",
                    "3": "rgba(252, 58, 58, 1.0)",
                },
                "txt1": {
                  "0": mMsgTxt,
                  "1": "1.2vh",
                },
              });
              //**Show.....
              mTooltip['tt'].show(mTooltip['tt']['e'], mMsgDiv);
              

            }

            

            //mFilesH_Div.....
            var mFilesH_Div = document.createElement("div");
            mFilesH_Div.style.width = "100%";
            mFilesH_Div.style.height = "100%";
            mFilesH_Div.style.display = "flex";
            mFilesH_Div.style.overflowX = "auto";
            mFilesH_Div.style.padding = "0.1vh 3vw 0 0.5vw";

            mDiv.appendChild(mFilesH_Div);
            


            //here we set file(picker).....
            mSet_filepicker();
            function mSet_filepicker() {
              var mFilePickDiv = document.createElement("label");
              mFilePickDiv.id = core_1mn['mUniqueId'].mGenerate(16);

              mFilePickDiv.style.display = "flex";
              mFilePickDiv.style.alignItems = "center";
              mFilePickDiv.style.justifyContent = "center";

              mFilePickDiv.style.margin = "0 0.2vw";
              mFilePickDiv.style.width = "7vw";
              mFilePickDiv.style.minWidth = "7vw";
              mFilePickDiv.style.height = "12vh";
              mFilePickDiv.style.backgroundColor = "rgba(34,34,34, 0.07)";
              mFilePickDiv.style.borderRadius = "0.5vh";
              mFilePickDiv.style.outline = "0.2vh dashed rgba(34,34,34, 0.5)";

              //set....
              mFilePickDiv.setAttribute("for", `${mInput.id}`);
              mFilePickDiv.setAttribute("tag_n", `mFilePicker`);
              mFilesH_Div.appendChild(mFilePickDiv);


              //mSvg..
              core_1mn['mSvg'].set({
                "0": "add_0.svg",
                //"1": "navBarOpenIcon",
                "2": "4vh",
                "3": "4vh",
                "4": "rgba(34, 34, 34, 0.2)",
                "5": mFilePickDiv,
               });


            }


            //here we add file....
            function mAdd_file(mCurrItem) {
              const curFiles = mCurrItem.files;
              var mMaxItems = parseInt(mCurrItem.getAttribute("mMaxItems"));
              var mMaxFileSize = parseInt(mCurrItem.getAttribute("mMaxFileSize"));
              var mFileType = mCurrItem.getAttribute("mFileType").split(",");
              var mFilePickDiv = mCurrItem.parentElement.querySelectorAll("[tag_n=mFilePicker]")[0];
              
              if (curFiles.length === 0) {
                  return;
              }

              //check if max files length
              if((curFiles.length + mCheck_fileListSize()) > mMaxItems){
                mShowTt(`error: max limit of files is ${mMaxItems}`);
                return;
              }

              //check files size..
              if( mNoOfFilesWithInvalid_Size() > 0 ){
                mShowTt( `error: max limit of file(Size) is ${returnFileSize(mMaxFileSize)}`  );
                return;
              }

              //check files type..
              if( mNoOfFilesWithInvalid_Type() > 0 ){
                mShowTt( `error: list of supported file formats: ${mFileType}`  );
                return;
              }

              //check if max files length (reached)....
              if((curFiles.length + mCheck_fileListSize()) == mMaxItems){
                  mFilePickDiv.style.display = "none";
              } 

              //check (Filelist array size) 
              function mCheck_fileListSize() {
                function mFil(fileVal) {
                 return fileVal != null;
                }
                var mArr = mCurrDta1['mElemDta']['mFileList'];
                var mLen = mArr.filter(mFil).length;
                return mLen;
              }

              //check no of files with invalid size..
              function mNoOfFilesWithInvalid_Size() {
                function mFil(fileVal) {
                  return fileVal.size > mMaxFileSize;
                 }
                 var mArr = Array.from(curFiles);
                 var mLen = mArr.filter(mFil).length;
                 return mLen;
              }
              function mNoOfFilesWithInvalid_Type() {
                function mFil(fileVal) {
                  return mFileType.indexOf(fileVal.type) == -1;
                }
                 var mArr = Array.from(curFiles);
                 var mLen = mArr.filter(mFil).length;
                 return mLen;
              }
              function returnFileSize(number) {
                if (number < 1024) {
                  return `${number} bytes`;
                } else if (number >= 1024 && number < 1048576) {
                  return `${(number / 1024).toFixed(1)} KB`;
                } else if (number >= 1048576) {
                  return `${(number / 1048576).toFixed(1)} MB`;
                }
              }
               
              //generate..
              for (let i1 = 0; i1 < curFiles.length; i1++) {
                const mCurrI = curFiles[i1];
                mSet_item(mCurrI, i1);
              }


              function mSet_item(mCurrI, i1) {
                //set vars....
                var file = mCurrI;

                 //add..(Additional)
                 file['m1mnMetadata'] = {
                  "absUrl_mn": core_1mn['mUniqueId'].mGenerate(20) + "_FILE",
                  "mFileType": file.type,
                  "mMaxFileSize": file.size
                };
                //add files to (Array)..
                mCurrDta1['mElemDta']['mFileList'].push(file);


              var mFileDiv = document.createElement("div");
              mFileDiv.id = core_1mn['mUniqueId'].mGenerate(44);
              //set....
              mFileDiv.setAttribute("item_index", mCurrDta1['mElemDta']['mFileList'].length-1);

              mFileDiv.style.margin = "0 0.27vw";
              mFileDiv.style.width = "7vw";
              mFileDiv.style.minWidth = "7vw";
              mFileDiv.style.height = "12vh";
              mFileDiv.style.backgroundColor = "rgba(34,34,34, 0.07)";
              mFileDiv.style.outline = "0.2vh solid rgba(34,34,34, 0.2)";
              mFileDiv.style.borderRadius = "0.5vh";

              //image(setting)
              mFileDiv.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
              mFileDiv.style.backgroundSize = "cover";
              mFileDiv.style.backgroundRepeat = "no-repeat";
              mFileDiv.style.backgroundPosition = "center";
              mFilesH_Div.appendChild(mFileDiv);


              //mActionDiv....
              var mActionDiv = document.createElement("div");
              mActionDiv.style.width = "100%";
              mActionDiv.style.padding = "0.3vh 0.6vw";
              mActionDiv.style.display = "flex";
              mActionDiv.style.alignItems = "center";
              mActionDiv.style.justifyContent = "space-between";
              mActionDiv.style.backgroundColor = "rgba(255,255,255,0.7)";
              mFileDiv.appendChild(mActionDiv);


              //mTxtDiv..
              var mTxtDiv1 = document.createElement("div");
              mTxtDiv1.style.fontSize = "1.2vh";
              mTxtDiv1.innerHTML = file.name.length>9 ? `${file.name.substring(0, 9)}...` : file.name;
              mActionDiv.appendChild(mTxtDiv1);


              //mSvg..
              core_1mn['mSvg'].set({
                "0": "trash_0.svg",
                //"1": "navBarOpenIcon",
                "2": "1.5vh",
                "3": "1.5vh",
                "4": "rgba(122, 0, 2, 1.0)",
                "5": mActionDiv,
                "cb": {
                    "onLoad": (mCurrItem) => { 
                        //console.log("onLoad");
                    },
                    "onInit": (mCurrItem) => {
                      //This will trigger immediately..
                      mCurrItem.setAttribute("item_index", mCurrDta1['mElemDta']['mFileList'].length-1);
                      mCurrItem.setAttribute("mFileDiv_ID", mFileDiv.id);
                      mCurrItem.setAttribute("mFilePickDiv_ID", mFilePickDiv.id);
                      mCurrItem.setAttribute("mInput_ID", mInput.id);
                      //console.log("onInit");
                    },
                    "onError": () => {
                        console.log("onError");
                    },
                    "onClick": (mCurrItem) => {
                      //console.log("onClick");
                      var mItemIndex = mCurrItem.getAttribute("item_index");
                      var mFileDiv_ID = mCurrItem.getAttribute("mFileDiv_ID");
                      var mFilePickDiv_ID = mCurrItem.getAttribute("mFilePickDiv_ID");
                      var mInput_ID = mCurrItem.getAttribute("mInput_ID");
                      
                      if(mItemIndex!=null){
                        mItemIndex = parseInt(mItemIndex);
                        //console.log(mItemIndex);
                        mDelete();
                      }
                      function mDelete() {
                        mCurrDta1['mElemDta']['mFileList'][mItemIndex] = null;
                        //ui..
                        var mFileDiv = document.getElementById(mFileDiv_ID);
                        mFileDiv.remove();

                        //handle(add)..
                        var mInput = document.getElementById(mInput_ID);
                        var mMaxItems = parseInt(mInput.getAttribute("mMaxItems"));
                        if(mCheck_fileListSize() != mMaxItems){
                          var mFilePickDiv = document.getElementById(mFilePickDiv_ID);
                          mFilePickDiv.style.display = "flex";

                        } 
                      }

                    }
                }
              });


               //send (cb)..
               mSend_cb("onPick", {
                "file": file
               });


              }

               
              //test..
              /*var mFileToBlob = URL.createObjectURL(mCurrDta1['mElemDta']['mFileList'][0]);
              console.log(mFileToBlob);
              mCurrDta1['mElemDta']['mFileList'][0]['m1mnMetadata'] = {
                "mUniqueFileKey": core_1mn['mUniqueId'].mGenerate(20)
              }  
              console.log(mCurrDta1['mElemDta']['mFileList'][0]);*/

             
              
            }




            //here we set bottomRight.... 
            if(mCurrDta1.hasOwnProperty("bottomRight")==true){
                mBottomRight();
            }
            function mBottomRight() {
                if(mCurrDta1['bottomRight']['type']=="href"){
                    var mDivCover = document.createElement("div");
                    mDivCover.style.display = "flex";
                    mDivCover.style.justifyContent = "end";
                    mDivRoot.appendChild(mDivCover);

                    var mHref = document.createElement("a");
                    mHref.href = "javascript:void(0)";
                    mHref.style.fontSize = "1.2vh";
                    mHref.style.color = "rgba(34,34,34,0.5)";
                    mHref.style.fontWeight = "400";
                    mHref.innerHTML = mCurrDta1['bottomRight']['txt'];
                    mHref.style.textAlign = "end";
                    mDivCover.appendChild(mHref);
                }
                
            }


            



        },


        "setDataJSON": (mGetParams) => {
          var mParams = mGetParams;
          var mFormCurrItem = mParams['mFormCurrItem'];
          var mUsrPayload = mParams['mUsrPayload']; //need to (build)
          var mUsrData = mFormCurrItem['$mUsrData'];
          var mErrInfo = {
            "isErr": true,
            "msg": null
          };

          //data....
          var mElemDta = mFormCurrItem['mElemDta']; 
          mSet_data();
          function mSet_data() {
            //var mTooltip = mElemDta['mTooltip'];
            var mInputE = mElemDta['mInputE'];
            var mFileList = mElemDta['mFileList'];
            mFileList = Array.from(mFileList); //(convert filelist => array) 

            mGenerate_links_mn();
            function mGenerate_links_mn() {
              var mVal = {
                "links_mn": [
                  /*{
                    "absUrl_mn": "FHWBFCUBUB7825BS7SJK",
                    "temps_mn": {
                      "mMaxFileSize": 500000,
                      "mFileType": "image/webp"
                    }
                  }*/
              ]
              };
              for (let i1 = 0; i1 < mFileList.length; i1++) {
                const mCurr = mFileList[i1];

                if(mCurr!=null){
                  mVal['links_mn'].push(
                    {
                      "absUrl_mn": mCurr['m1mnMetadata']['absUrl_mn'],
                      "temps_mn": {
                        "mMaxFileSize": mCurr['m1mnMetadata']['mMaxFileSize'],
                        "mFileType": mCurr['m1mnMetadata']['mFileType']
                      }
                    }
                  );
                }
               
              }
               //store (JSON)....
               mAddDtaIn_JSON(0, mVal);
            }
            
           
          }

          //($mUsrData).....
          function mAddDtaIn_JSON(mKeyI, mVal) {
            var mKey = Object.keys(mUsrData)[mKeyI];
            if(mKey==undefined){
               //error....(undefined key)
               mErrInfo['msg']=`error: (undefined key => ${mKey}) found.`;
               return;
            }
            if(mUsrPayload.hasOwnProperty(mKey)==true){
              //error....(duplicate key)
              mErrInfo['msg']=`error: (duplicate key => ${mKey}) found.`;
              return;
            }
             //all ok.....
             //store....
             mUsrData[mKey] = mVal;
             //add....
             mUsrPayload[mKey] = mUsrData[mKey];

             /*
             USAGE
             mAddDtaIn_JSON(mKeyI, mVal);
             */
          }
          //set vars....
          return mErrInfo['msg']==null ? true : mErrInfo; //true || mErrInfo
        }
        

      },

      //Dropdown Entry (Field)
      "dropdown": {

       "set": (mP={
        "e": HTMLElement,
        "data": {},
        "cover": null,  //#[not tested yet for direct usage]
        "sch_json": {} //#[not tested yet for direct usage]
      }) => {
        //set vars..
        let mFormDiv = mP["e"];
        let mCurrDta1 = mP["data"];
        let mG_cover = mP.hasOwnProperty("cover")?mP["cover"]:null;
        let mSchemaJSON = mP.hasOwnProperty("sch_json")?mP["sch_json"]:{};

            /*
              --USAGE--
            {
                          "elementID": core_1mn['mUniqueId'].mGenerate(11),
                          "type": "dropdown",
                          "dataType": "text",
                          "placeholder": "Pick",
                          "maxLength": 14,
                          "endIco": {
                              "0": "caret_0.svg", //"info_0.svg",
                              "1": "1.3vh",
                              "2": "1.3vh",
                              "3": "rgba(255,255,255,0.7)"
                          }, 
                          "autocomplete": false,
                          //"label": "Password", 
                          "h": "3.3vh",
                          "w": "10vw",
                          "bg": "transparent", //background-color
                          "b": "0.1vh solid rgba(255,255,255,0.8)", //border..
                          "txt": { //text..
                              "0": "rgba(255,255,255,0.7)", //text-color
                              "1": true, //isHide [default (Show)]
                          },

                          "s_label": ``,

                          "dropdown": {
                            "0": { //config choice [layout]
                                          "0": "0vh", //mChoiceDiv.style.margin
                                          "1": "0vh", //mChoiceDiv.style.top
                                          "2": "0vh", //mChoiceDiv.style.right
                                          "3": "0vh", //mChoiceDiv.style.bottom
                                          "4": "0vh", //mChoiceDiv.style.left
                                          "5": "15vw", //mChoiceDiv.style.width
                                          "6": "15vh", //mChoiceDiv.style.height
                                },
                              "itemArr": [ 
                                  {"name":"Kannada","index":5, "ico":"/flags/new/icons/in.svg"},
                                  {"name":"Gujarati","index":6, "ico":"/flags/new/icons/in.svg"},
                                  {"name":"Malayalam","index":7, "ico":"/flags/new/icons/in.svg"},
                                  {"name":"Punjabi","index":8, "ico":"/flags/new/icons/in.svg"},
                                  {"name":"Tamil","index":9, "ico":"/flags/new/icons/in.svg"},
                                  {"name":"Telugu","index":10, "ico":"/flags/new/icons/in.svg"},
                                 
                                  ----OR----
                                  {"name":"Telugu1","index":1, "ico":"/flags/new/icons/in.svg",
                                  "cbox": true, "etxt": "0" },

                            
                                ],
                                "key": {
                                  "txt1": "name",
                                  "ico1": "ico",
                                  "cbox1": "cbox", //CheckBox
                                  "etxt1": "etxt", //EditText
                                  "etxt2": "etxt", //EditText
                                  "etxt3": "etxt", //EditText
                                },
                                //that key [must] be specify in [--key--(OBJ)]
                                "txt1": {
                                    "onSel": {
                                        "0": 0,
                                        "1": "code"
                                    }
                                },
                                "etxt1": { //set [config] for this (field)
                                  "dataType": "number",
                                  "hide": false
                                }

                          },

                            "$mUsrData": {
                                "mLangPick": -1, //method-1 = (Single-Select => -1) for (Multi-Select => []) 
                                                //method-2 = (Single-Select => {"id1":"6"}) for (Multi-Select => [{"id1":"6"}])
                            },
                            "$mUsrDataCONF": {
                              //if only (1 key specified in (k)ARRAY) this will (set) value in (default) $mUsrData[YOUR_KEY]
                              "presentSingleKey": false, //default is (true) [--Note--: (presentSingleKey=false) only work if (k)ARRAY.length)==1 ]
                              "k": [ 
                                  //Specify [itemArr (keys)] you want to (RETURN) in ($mUsrData[YOUR_KEY])
                                  "index" //"name", "code"
                              ],

                              //(IF) Specify [itemArr (key)] you want to (SELECT item [Index] by that key) in ($mUsrData[YOUR_KEY])
                              "sel_key": "id1",


                            },

                            //cb..
                            "cb": {
                                "onPick": function(data){
                                    var m0 = data['0']; //item index
                                    var m1 = data['1']; //item
                                    console.log(m0);
                                    console.log(m1);
                                },
                                "onClick": () => {
                                    alert();
                                },
                                "onUnPick": function(data){
                                    var m0 = data['0']; //item index
                                    var m1 = data['1']; //item
                                    console.log(m0);
                                    console.log(m1);
                                }
                            },

                            //--(search) can be used for [items]--// //Note: If items more than (4) then [search-will-(AUTO)integrate]
                            "search": {
                              "init": (itemArr) => {},
                              "err": (err) => {},
                              "cb": {
                                  "onLoad": (data) => { //on load..items
                                      console.log(data.filter_item_idxs);
                                      if (data.filter_item_idxs.length==0) {
                                          //we need to search [on server]
                                          console.log("we need to search [on server]");
                                           //call Api..
                                           mHintsFromSrvr({
                                              "filter_by": "latest",
                                              "hintTyp": [5],
                                              "search": data.search_txt
                                            }, {
                                              "onLoad": (dta, res_mn) => {
                                                  //----Success----//
                                                    console.log("====mHintsFromSrvr(onLoad)====");
                                                    console.log(dta['l']["add_ingredients"]);
                                                    //init search.. also [it will (Update => dropdown.itemArr)]
                                                    fld_CSR_Store_id.search.init(dta['l']["add_ingredients"]);
                                              },
                                              "onErr": (err, res_mn) => {
                                                    //----Error----//
                                                    console.log("====mHintsFromSrvr(onErr)====");
                                                    //set err..
                                                    fld_CSR_Store_id.search.err({
                                                      "err_mn": {
                                                          "err": err,
                                                          "res_mn": res_mn,
                                                      }
                                                    });
                                              },
                                            });

                                      }
                                  },
                              }
                          },

                             
                        }*/
        
        
        //reload..
        if (mCurrDta1["reload"]!=undefined) {
          mCurrDta1["reload"] = () => {
             mStartE();
          }
        }      
        //start elem..
         //layout..                
         var mDivRoot = document.createElement("div");
         mDivRoot.style.width = "100%";
         //mDivRoot.style.margin = "1vh 0";
         mDivRoot.style.position = "relative";
         mFormDiv.appendChild(mDivRoot);

         
          //check (hide)..
          if (mCurrDta1.hasOwnProperty("hide")==true) {
            if (mCurrDta1["hide"]==true) {
                mDivRoot.style.display = "none";
            }
         }


           //-------events------//
           if (mCurrDta1["events"]!=undefined) {
            if (mCurrDta1["events"].hasOwnProperty("hide")==true) {
               //hide..
               mCurrDta1["events"]["hide"] = () => {
                mDivRoot.style.display = "none";
              } 
            } 
            if (mCurrDta1["events"].hasOwnProperty("show")==true) {
              //show..
              mCurrDta1["events"]["show"] = () => {
               mDivRoot.style.display = "block";
             } 
           } 
           }


        const mStartE = () => {
          mDivRoot.innerHTML = ""; //reset..       
        //set vars..
        if (mCurrDta1.hasOwnProperty("txt")==false) {
           mCurrDta1["txt"]={};
        }   

        //events..
        mDivRoot.onclick = (e) => {
          mInputClc(e);
        };
        

        //Tooltip....
        var mTooltip = core_1mn['tooltip']['2'].set(
          {
            "mE1": mDivRoot,
            //"mCallback": mCallback
            "0": {
              "0": 1,
              "1": "0 0 0 15%",
              "2": "rgba(252, 58, 58, 1.0)",
              "3": "0.3vw"
            },
            "1": {
              "0": "#fafafa",
              "1": "0.2vh solid rgba(252, 58, 58, 1.0)",
            },
            "2": {
              "0": "0 0 -3.8vh -1.5vw",
              "1": "4.4vh",
              "2": "15vw",
            },
        });
        // mTooltip['tt'].show(mTooltip['tt']['e']);
        // mTooltip['tt'].hide(mTooltip['tt']['e']);
      
        //mTopLabelDiv......
        if(mCurrDta1['label']!=undefined){
        var mTopLabelDiv = document.createElement("div");
        mTopLabelDiv.innerHTML = mCurrDta1['label'];
        mTopLabelDiv.style.textAlign = "start";
        mTopLabelDiv.style.fontSize = "1.2vh";
        mTopLabelDiv.style.color = "rgba(34,34,34,0.6)";
        mDivRoot.appendChild(mTopLabelDiv);                
        }


        var mDiv = document.createElement("div");
        mDiv.style.width = mCurrDta1['w']!=undefined ? mCurrDta1['w'] : "100%"; //100%
        mDiv.style.height = mCurrDta1['h']!=undefined ? mCurrDta1['h'] : "4.0vh"; //5vh
        //mDiv.style.margin = "1vh 0";
        mDiv.style.display = "flex";
        mDiv.style.backgroundColor = mCurrDta1['bg']!=undefined ? mCurrDta1['bg'] : "#f2f2f2"; //#f2f2f2

        mDiv.style.alignItems = "center";
        //mDiv.style.paddingRight = "0.5vw";
    
        if (mG_cover==undefined) {
          mDiv.style.border = mCurrDta1['b']!=undefined ? mCurrDta1['b'] : "0.1vh solid rgba(34,34,34,0.2)"; //.3
          mDiv.style.borderRadius = "0.3vh";
        }
        mDivRoot.appendChild(mDiv);

        //check & set..
        if (mCurrDta1.hasOwnProperty("w")) {
          if (parseInt(mCurrDta1['w'])==0) {
              //need to hide..
              mDiv.style.visibility = "hidden";
          }
        }


        //prefix..(label)
        let mPrefix_label = (mE) => {
          //label_s..
          let mK = "s_label";
          if(mCurrDta1.hasOwnProperty(mK)==true){
            var mLabel = document.createElement("div");
            mLabel.innerHTML = mCurrDta1[mK];
            mLabel.style.padding = "0.5vw";
            mLabel.style.textAlign = "start";
            mLabel.style.fontSize = "1.4vh";
            mLabel.style.color = "rgba(34,34,34, 0.6)";
            mE.appendChild(mLabel);

            //init..[------ui_dta_mn-----]
            core_1mn["mForm"]["mUtil"].ui_dta_mn
            .init(mLabel);

          } 
        };
        mPrefix_label(mDiv);



        //----CHECK and SET (sel_item_idx)----//
       //Specify [itemArr (key)] you want to (SELECT item [Index] by that key) in ($mUsrData[YOUR_KEY])
       let mSet_sel_item_idx = (selItemIdx, itemArr, cb={"onLoad":()=>{}}) => {
           if (mCurrDta1.hasOwnProperty("$mUsrDataCONF")==true) {
            if (mCurrDta1["$mUsrDataCONF"].hasOwnProperty("sel_key")==true) {
                //need to set..
                let m_sel_key = mCurrDta1['$mUsrDataCONF']["sel_key"];
                //console.log(`m_sel_key: ${m_sel_key}`);
                let mSet = (mCurrI, cb={"onLoad":()=>{}}) => {

                  let mGetIdxFrmKey = (k, a, val, cb={"onLoad":()=>{}}) => {
                    let mIdx = a.findIndex(e => e[k]==val);
                    //console.log(k, a, val);
                    if (mIdx===-1) {
                       //err..
                       //throw `Error: (sel_key=${k}) not found in (itemArr)`;
                       console.log(`skipping: \n
                       {throw Error: (sel_key=${k}) not found in (itemArr)}
                       \n
                       `);
                    }else {
                      //all ok..
                      cb.onLoad(mIdx);
                    }
                  };

                  if (typeof mCurrI === "object") {
                    //{}
                    //set..
                     if (mCurrI.hasOwnProperty(m_sel_key)==true) {
                      mGetIdxFrmKey(m_sel_key, itemArr, mCurrI[m_sel_key], {
                        "onLoad": (idx) => { 
                          //console.log(`==mGetIdxFrmKey.idx==: ${idx}`);
                          cb.onLoad(idx);
                         }
                       });
                     }else {
                      console.log(`
                      skipping:  not found ${mCurrI}[${m_sel_key}]
                      `);
                     }
                   }else {
                     //not a object..
                     mGetIdxFrmKey(m_sel_key, itemArr, mCurrI, {
                      "onLoad": (idx) => { 
                        //console.log(`==mGetIdxFrmKey.idx==: ${idx}`);
                        cb.onLoad(idx);
                       }
                     });
                   }

                };
                if (Array.isArray(selItemIdx)==true) {
                   //array..
                   let mNew = [];
                   for (let i0 = 0; i0 < selItemIdx.length; i0++) {
                    const eCurr1 = selItemIdx[i0]; 
                    mSet(eCurr1, {
                      "onLoad": (idx) => { 
                        mNew.push(idx);
                      }
                    });
                   }
                   //all ok.. 
                   cb.onLoad(mNew);
                }else {
                   //not a array..
                   let mNew = -1;
                   mSet(selItemIdx, {
                    "onLoad": (idx) => {
                      //all ok..
                      mNew = idx;
                     }
                   });
                   //all ok..
                   cb.onLoad(mNew);

                }
            }
           } 
       };
       mSet_sel_item_idx(mCurrDta1['$mUsrData'][Object.keys(mCurrDta1['$mUsrData'])[0]],
        mCurrDta1['dropdown']["itemArr"], {
        "onLoad": (mNew) => {
          mCurrDta1['$mUsrData'][Object.keys(mCurrDta1['$mUsrData'])[0]] = mNew;
        }
       });
       /*console.log(`mCurrDta1['$mUsrData'][Object.keys(mCurrDta1['$mUsrData'])[0]]:
       ${mCurrDta1['$mUsrData'][Object.keys(mCurrDta1['$mUsrData'])[0]]}`);*/


       //send callback..
       let mSend_cb = function(mCb_name, data){
        if(mCurrDta1['cb']!=undefined){
         if(mCurrDta1['cb'][mCb_name]!=undefined){
           mCurrDta1['cb'][mCb_name](data);
         }
        }
       };
        



                     //input....
                     var mInput = document.createElement("div");
                      
                     mInput.id = mCurrDta1['elementID'];
                     /*--OLD--*/ //mInput.setAttribute("sel_item_idx", mCurrDta1['$mUsrData'][Object.keys(mCurrDta1['$mUsrData'])[0]]);
                    /*--NEW--*/ if (Array.isArray(mCurrDta1['$mUsrData'][Object.keys(mCurrDta1['$mUsrData'])[0]])==true) {
                     mInput.setAttribute("sel_item_idx", `[${mCurrDta1['$mUsrData'][Object.keys(mCurrDta1['$mUsrData'])[0]]}]` );
                     }else {
                      mInput.setAttribute("sel_item_idx", mCurrDta1['$mUsrData'][Object.keys(mCurrDta1['$mUsrData'])[0]]);
                     }

                     mInput.style.userSelect = "none";
                     mInput.style.display = mCurrDta1['txt']['1']!=undefined ? "none" : "flex";
                     mInput.style.alignItems = "center";
                     mInput.style.width = "100%";
                     mInput.style.height = "100%";
                     mInput.style.outline = "none";
                     mInput.style.border = "none";
                     mInput.style.padding = "0 0.5vw";
                     mInput.style.fontSize = "1.4vh";
                     mInput.style.backgroundColor = "transparent";
                     mInput.innerHTML = mCurrDta1['placeholder'];
                     mInput.style.color = mCurrDta1['txt']['0']!=undefined ? mCurrDta1['txt']['0'] : "rgba(34,34,34,0.6)"; //#343434

                     //events......
                     mInput.onclick = function(e){
                        mInputClc(e);
                     };
                     function mInputClc(e=null) {
                      //send cb..
                      mSend_cb("onClick", {});
                      if (mCurrDta1["readonly"]!=undefined) {
                        if (mCurrDta1["readonly"]==true) {
                            //stop [--Pick--]
                            return;
                        }
                      }

                      //var mCurrItemId = this.id; //OLD
                      var mCurrItemId = mInput.id; //NEW
                      if (e!=null) {
                      e.stopPropagation();                        
                      }
                      var mCurrItem = document.getElementById(mCurrItemId);
                      var mDropdownID = mCurrItem.getAttribute("dropdownID");
                      var mDropdown = document.getElementById(mDropdownID);

                      //alert(mDropdownID)
                      mTooltip['tt'].hide(mTooltip['tt']['e']);


                      //open or close....(Dropdown)
                      if(mDropdown.style.display == "none"){
                        mOpenDropDown();
                        function mOpenDropDown() {
                          //First close all dropdowns.....
                          var mFormArr = mFormDiv.querySelectorAll("div");
                          for (let i1 = 0; i1 < mFormArr.length; i1++) {
                            const mCurrDiv = mFormArr[i1];//dropdownID
                        
                            var mDropdownID = mCurrDiv.getAttribute("dropdownID");
                            if(mDropdownID!=null){
                              //dropdown found......
                              var mSelDropdown = document.getElementById(mDropdownID);
                              mSelDropdown.style.display = "none";
                            }
                          }

                          //show current.....
                         mDropdown.style.display = "block";
                        }
                      }else{
                        mDropdown.style.display = "none";                            
                      }


                       //events.....
                       window.onclick = function() {
                        if(mDropdown.style.display == "block"){
                          //mDropdown.style.display = "none";   //--OLD--                            
                          if (e!=null) { //--NEW--  
                          mDropdown.style.display = "none";                               
                          }                     
                        }
                      }; 
                      
                     }

                     mDiv.appendChild(mInput);


                    //init..[------ui_dta_mn-----]
                    core_1mn["mForm"]["mUtil"].ui_dta_mn
                     .init(mInput);

                     


                     //-------events------//
                     if (mCurrDta1["events"]!=undefined) {
                      if (mCurrDta1["events"].hasOwnProperty("click")==true) {
                         //click..
                         mCurrDta1["events"]["click"] = () => {
                          mInputClc(null);
                        } 
                      } 
                     }  



           //here we set endIco....
         if(mCurrDta1.hasOwnProperty("endIco")==true){ 
            mSet_endIco();
         }
         function mSet_endIco() { 
            var mSvgDiv = document.createElement("div");
            mSvgDiv.style.paddingRight = "0.5vw";
            mDiv.appendChild(mSvgDiv);

            //svg.....
           var mSvgCover = core_1mn['mSvg'].set({
               "0": mCurrDta1['endIco']['0'],
               "1": core_1mn['mUniqueId'].mGenerate(61),
               "2": mCurrDta1['endIco']['1']!=undefined ? mCurrDta1['endIco']['1'] : "2vh",
               "3": mCurrDta1['endIco']['2']!=undefined ? mCurrDta1['endIco']['2'] : "2vh",
               "4": mCurrDta1['endIco']['3']!=undefined ? mCurrDta1['endIco']['3'] : "rgba(34,34,34, 0.4)",
               "5": mSvgDiv,
               "cb": {
                "onClick": (mGetCurrItem) => {
                  //alert("onClick");
                  var mCurrItem = mGetCurrItem;
                  var mInputE = document.getElementById(mCurrItem.getAttribute("e_input_id"));
                  var mSvg = mCurrItem.querySelectorAll("svg")[0];

                  //check IF (password)
                  if(mInputE.getAttribute("dataType")=="password"){
                    //set....
                    if(mInputE.type=="password"){
                      mInputE.type = "text";
                       if(mSvg!=null){
                        mSvg.style.fill = "rgba(34,34,34, 0.8)";
                       }
                    }else{
                      mInputE.type = "password";
                      if(mSvg!=null){
                        mSvg.style.fill = "rgba(34,34,34, 0.4)";
                       }
                    }
                  }
                  

                 }
               }
               
           });
           mSvgCover.setAttribute("e_input_id", mInput.id);
          
         }

        if(mCurrDta1.hasOwnProperty("bottomRight")==true){
            mBottomRight();
        }
        function mBottomRight() {
            if(mCurrDta1['bottomRight']['type']=="href"){
                var mDivCover = document.createElement("div");
                mDivCover.style.display = "flex";
                mDivCover.style.justifyContent = "end";
                mDivRoot.appendChild(mDivCover);
                //set vars..
                var mCb = mCurrDta1['bottomRight']['cb'];
                function mSend_cb(mCb_name, data) {
                  if(mCb!=undefined){
                    if(mCb[mCb_name]!=undefined){
                      mCb[mCb_name](data);
                    }
                  }
                }

                var mHref = document.createElement("a");
                mHref.id = core_1mn['mUniqueId'].mGenerate(19);
                mHref.href = "javascript:void(0)";
                mHref.style.fontSize = "1.2vh";
                mHref.style.color = "rgba(34,34,34,0.5)";
                mHref.style.fontWeight = "400";
                mHref.innerHTML = mCurrDta1['bottomRight']['txt'];
                mHref.style.textAlign = "end";
                mDivCover.appendChild(mHref);
                //events..
                mHref.onclick = function(){
                  var mCurrItem = this.id;
                  var mCurrItem = document.getElementById(mCurrItem);
                  //send callback..
                  mSend_cb("onClick", {"e":mCurrItem}); 
                };
            }
            
        }




        //set vars..
        if (mCurrDta1["dropdown"]['0']==undefined) {
          mCurrDta1["dropdown"]['0']={};
        }
        const mCurrDta1_dd0 = mCurrDta1["dropdown"]['0'];
        

        //set choice list......
        mSet_choiceList();
        function mSet_choiceList() {
         //mChoiceDiv..
         let mChoiceDiv = document.createElement("div");
         mChoiceDiv.style.display = "none";

         mChoiceDiv.id = core_1mn['mUniqueId'].mGenerate(11);
         //add id to input......
         mInput.setAttribute("dropdownID", mChoiceDiv.id);
         //add id to dropdown......
         mChoiceDiv.setAttribute("inputID", mInput.id);

         mChoiceDiv.style.userSelect = "none";
         mChoiceDiv.style.zIndex = "1";

         mChoiceDiv.style.position = "absolute";
         mChoiceDiv.style.margin = mCurrDta1_dd0["0"]!=undefined?mCurrDta1_dd0["0"] : "4.0vh 0 0 0"; //T R B L
         mChoiceDiv.style.top = mCurrDta1_dd0["1"]!=undefined?mCurrDta1_dd0["1"] : "0";
         mChoiceDiv.style.width = mCurrDta1_dd0["5"]!=undefined?mCurrDta1_dd0["5"] : "20vw";
         /*mChoiceDiv.style.height = mCurrDta1_dd0["6"]!=undefined?mCurrDta1_dd0["6"] : "20vh";*/
         if (mCurrDta1_dd0["2"]!=undefined) {
           mChoiceDiv.style.right = mCurrDta1_dd0["2"];
         }
         if (mCurrDta1_dd0["3"]!=undefined) {
          mChoiceDiv.style.bottom = mCurrDta1_dd0["3"];
         }
         if (mCurrDta1_dd0["4"]!=undefined) {
          mChoiceDiv.style.left = mCurrDta1_dd0["4"];
         }

         mChoiceDiv.style.boxShadow = "0 0.5vh 0.5vh 0 rgba(0,0,0,0.2)";
         mChoiceDiv.style.backgroundColor = "rgba(255,255,255)";
         mDivRoot.appendChild(mChoiceDiv);


         //mSearch cov..
         let mSearch_cov = document.createElement("div");
         mChoiceDiv.appendChild(mSearch_cov);
         

         //mChoiceItems..
         let mChoiceItems = document.createElement("div");
         mChoiceItems.style.overflowY = "auto";
         mChoiceItems.style.minHeight = "0";
         mChoiceItems.style.maxHeight = mCurrDta1_dd0["6"]!=undefined?mCurrDta1_dd0["6"] : "20vh";
         mChoiceDiv.appendChild(mChoiceItems);



         //mAct cov..
         let mAct_cov = document.createElement("div");
         mChoiceDiv.appendChild(mAct_cov);
         //events..
         mAct_cov.onclick = (e) => {
          e.stopPropagation(); 
         };
         //set..
         let mSet_actCov = (mE) => {
             mE.style.padding = "0.4vh 0.4vw";
             mE.style.display = "flex";
             mE.style.justifyContent = "end";
             //set vars..
             let mSelAll = false;
             //set..
             let mBtn = document.createElement("div");
             mBtn.innerHTML = "Select All";
             mBtn.style.fontSize = "1.3vh";
             mBtn.style.height = "1.2vh";
             mBtn.style.color = "rgba(14,112,205, 1.0)";
             mBtn.style.borderBottom = `0.2vh solid ${mBtn.style.color}`;
             mE.appendChild(mBtn);
             //events..
             mBtn.onclick = () => {
                let a = mCurrDta1["dropdown"]["itemArr"];
                for (let i = 0; i < a.length; i++) {
                  const e = a[i];
                  let mItem = e["mArr_cbox1"]["events"]; 
                  if (mSelAll==true) {
                     //switch to unselect-all..
                     if (mItem["isTick"]==true) {
                         mItem["e"].click(); //un-tick
                     }
                  }else {
                    //switch to select-all..
                    if (mItem["isTick"]==false) {
                      mItem["e"].click(); //tick
                    }
                  }
                }

                //all ok..
                if (mSelAll==true) {
                  mSelAll=false;
                  mBtn.innerHTML = "Select All";
                }else {
                  mSelAll=true;
                  mBtn.innerHTML = "Reset";
                }
             }; 
         };
         if (mInput.getAttribute("sel_item_idx").includes("[")==true) {
          //multi-sel (found)
          mSet_actCov(mAct_cov);
         }


         /*
         {
           "name": "Afghanistan",
           "dial_code": "+93",
           "code": "AF",
           "index": 0,
           "ico": 'sample.svg',
           --OR--
           "cbox": true
           "etxt": "0",
         },
         */

         /*
          "dropdown": {
            "itemArr": mData['countriesArray'],
            "key": {
              "txt1": "name",
              "ico1": "ico",
              "cbox1": "cbox",
              "etxt1": "etxt", 
            }
          }
         */
 

         //set dropdown items..
         //let mArr_cbox1 = []; /*OLD*/
         //--Reserved keys--// ====> [mArr_cbox1] (Note: these key cannot be used or provide by user.)
         let mAddKey1 /*NEW*/ = (mE, arr) => {
            for (let i1 = 0; i1 < arr.length; i1++) {
              const mCurr = arr[i1];
              //vali..
              if (mCurr["mArr_cbox1"]!=undefined) { 
                 try {
                  if (mE.body.contains(mCurr["mArr_cbox1"])==false) {
                    //err..
                    throw "err: [mArr_cbox1] must be a DOM element.";
                  }
                 } catch (e) { } //Ignore..
              }
              if (mCurr["mArr_cbox1"]==undefined) {
                  //all ok..
                  //update..
                  mCurrDta1['dropdown']["itemArr"][i1]["mArr_cbox1"] = null; //later we will add (data).
              } 
            }
         };
         let mSet_ddownI = (itemArr, isAutoPick=false, showByFilter=false||[/*filtered item indexes*/]) => {
          mChoiceItems.innerHTML = ""; //reset..
          //Update => dropdown.itemArr
          mCurrDta1['dropdown']["itemArr"] = itemArr; 
          mAddKey1(mChoiceItems, mCurrDta1['dropdown']["itemArr"]);

         //set vars.....
         let mDropdownDta = mCurrDta1['dropdown'];
         let mItem_Arr = mDropdownDta['itemArr'];
         let mKey = mDropdownDta['key'];
         let mKey_txt1 = mDropdownDta['txt1'];
         //console.log(mCurrDta1);
         //console.log(mCurrDta1['dropdown']["itemArr"]); 

         //func..
         function mSet_pick(mItemIndex, mInput) { 

          //input..(sel)..
          var mSel_fld = {

            "mUtils": {
              "chip": (idx) => {
                //set..
                var mDiv = document.createElement("div");
                mDiv.setAttribute("dd_item_idx", idx);
                mDiv.setAttribute("cover_type", "chip");
                mDiv.style.backgroundColor = "rgba(34,34,34, 0.2)";
                mDiv.style.borderRadius = "2vh";
                mDiv.style.padding = "0.5vh 0.5vw";
                mDiv.style.margin = "0.3vh 0.2vw";
                mDiv.style.color = mCurrDta1['txt']['0']!=undefined ? mCurrDta1['txt']['0'] : "#343434";

                return mDiv;
              }
            },

            "txt1": (mItemIndex, isRemove=false) => {
              if(mKey.hasOwnProperty("txt1")==true){
                //check if key available if array.....
                if(mItem_Arr[mItemIndex].hasOwnProperty(mKey['txt1'])==true){
                    //set vars..
                    let mChipKey = `[cover_type="chip"]`;
                    //set..
                    var mChip_ARR = mInput.querySelectorAll(`${mChipKey}`);           
                    if (mChip_ARR.length==0 && mInput.getAttribute("sel_item_idx").includes("[")==false) {
                        mInput.innerHTML = mItem_Arr[mItemIndex][mKey['txt1']];
                        mInput.style.color = mCurrDta1['txt']['0']!=undefined ? mCurrDta1['txt']['0'] : "#343434";
                    }else {
                      //multi-select..
                      if (mChip_ARR.length==0){
                        mInput.innerHTML = "";
                        mInput.style.display = "flex";
                      }
                      if (isRemove==false) {
                         //add..
                         var mChip = mSel_fld["mUtils"].chip(mItemIndex);
                         mChip.innerHTML = mItem_Arr[mItemIndex][mKey['txt1']];
                         mInput.appendChild(mChip);
                         //tick..
                         mCurrDta1['dropdown']["itemArr"][mItemIndex]["mArr_cbox1"]["events"].tick(); //--OLD-- mArr_cbox1[mItemIndex]["events"].tick();
                      }else {
                        //remove..
                        mInput.querySelector(`[dd_item_idx="${mItemIndex}"]`)
                        .remove();
                         //un-tick..
                         mCurrDta1['dropdown']["itemArr"][mItemIndex]["mArr_cbox1"]["events"].untick(); //--OLD-- mArr_cbox1[mItemIndex]["events"].untick();
                         
                         //set (Placeholder).. if 0 multiselection
                         if (mInput.querySelectorAll(`[dd_item_idx]`).length==0) {
                             mInput.innerText = mCurrDta1['placeholder'];
                         } 

                      }
 

                      //handle multi-chip..
                      let mHndl_multiChip = (k, mE) => {
                        let m0 = 2; //max no. of chips viewable..
                        let mChipArr = mE.querySelectorAll(`${k}`);
                        let mNoOfChipHide = 0;
                        //set..
                        let a = mChipArr;
                        for (let i = 0; i < a.length; i++) {
                          const e = a[i];

                          //first-visible..
                          e.style.display = "block";

                          //set..
                          if (i >= m0) {
                            e.style.display = "none";
                            mNoOfChipHide+=1;
                          }
                          //console.log(e);
                        }
                        //all ok..
                        let mLabel = (mE) => {
                          let mK = `[lbl_cover_chip_count="true"]`;
                          //remove if already exists..
                          if (mE.querySelector(`${mK}`)!=null) {
                            mE.querySelector(`${mK}`).remove();
                          }

                          //check..
                          if (mNoOfChipHide==0) {
                            return; //stop..
                          }
                          //all ok..

                          //set..
                          let mLbl = document.createElement("div");
                          mLbl.setAttribute("lbl_cover_chip_count", "true");
                          mLbl.innerHTML = `+${mNoOfChipHide} more`;
                          //style..
                          mLbl.style.padding = "0 0.3vw";
                          mE.appendChild(mLbl);

                        };
                        mLabel(mE);


                      };
                      mHndl_multiChip(mChipKey, mInput);



                      
                    }
                }
              }
            },
            "ico1": (mItemIndex, isRemove=false) => {
              if(mKey.hasOwnProperty("ico1")==true){
                //check if key available if array.....
                if(mItem_Arr[mItemIndex].hasOwnProperty(mKey['ico1'])==true){
                 mInput.innerHTML = 
                  //"<div style='width:2.5vh; height:2.5vh;'>"+ mItem_Arr[mItemIndex][mKey['ico1']].svg() + "</div>" +
                  `<div> ${mItem_Arr[mItemIndex][mKey['ico1']].innerHTML} </div>
                  
                  <!--txt1-->
                  ${
                   //check [hide=>0, show=>1]
                   mKey_txt1['onSel']['0']!=0 ? 
                   "<!--Space--> <div style='width:0.7vw'> </div>" +
                   mKey_txt1['onSel']['1']!=undefined?
  
                   "<!--Space--> <div style='width:0.7vw'> </div>" +
                   mItem_Arr[mItemIndex][mKey_txt1['onSel']['1']] :
  
                   "<!--Space--> <div style='width:0.7vw'> </div>" +
                   mItem_Arr[mItemIndex][mKey['txt1' ]] 
                   
                   :
                   ""
                  }
  
                  `;   
  
                } 
              }
            }

          };
           
          
          //set selected item to Input.....
          if ( typeof mItemIndex == "number" && mInput.getAttribute("sel_item_idx").includes("[")==false ) {
             mInput.setAttribute("sel_item_idx", mItemIndex);
             //send callback..
             mSend_cb("onPick", {"0":mItemIndex, "1": mItem_Arr[mItemIndex]});
             //pick..
             mSel_fld["txt1"](mItemIndex);
             mSel_fld["ico1"](mItemIndex);
          }else {
            //multi-selection (array)..
            var mSel_arr = mInput.getAttribute("sel_item_idx").split(" "); 
            var mSelNew_arr = [];
            var isAlreadyExists = false;
            //filter (data)..
            for (let i1 = 0; i1 < mSel_arr.length; i1++) {
              const mCurr_I1 = mSel_arr[i1];
              try {
                var mInt = parseInt(mCurr_I1);
                if (mInt >= 0) {
                  if (mInt==mItemIndex) {
                    isAlreadyExists=true;
                  }
                  mSelNew_arr.push(` ${mInt} `);
                }
              } catch (error) { //ignore..
              }
            }


            //check if already not exists..
            if (isAlreadyExists==false) {
              mSelNew_arr.push(` ${mItemIndex} `);
              mInput.setAttribute("sel_item_idx", `[${mSelNew_arr.toString()}]` );
              //send callback..
              mSend_cb("onPick", {"0":mItemIndex, "1": mItem_Arr[mItemIndex]});

              if (typeof mItemIndex == "number") {
                //pick..
                mSel_fld["txt1"](mItemIndex);
                mSel_fld["ico1"](mItemIndex); 

              }

            }else {
              //already exists..
              //remove..
              mSelNew_arr.splice(mSelNew_arr.indexOf(` ${mItemIndex} `), 1);
              //set..
              mInput.setAttribute("sel_item_idx", `[${mSelNew_arr.toString()}]` );
              //send callback..
              mSend_cb("onUnPick", {"0":mItemIndex, "1": mItem_Arr[mItemIndex]});

              if (typeof mItemIndex == "number") {
                //pick..
                mSel_fld["txt1"](mItemIndex, true);
                mSel_fld["ico1"](mItemIndex, true);
              }
            }
          }


         
         }

         function mSet_Items(mCurrDta, i1) {
           var mItem = document.createElement("div");
           mItem.id = core_1mn['mUniqueId'].mGenerate(11);
           mItem.setAttribute("item_index", i1);

           mItem.style.width = "100%";
           mItem.style.height = "5vh";
           mItem.style.backgroundColor = "rgba(255,255,255,0.8)";
           mItem.style.borderBottom = "0.1vh solid rgba(34,34,34,0.1)";

           //events......
           mItem.onmouseover = function(){
             mItem.style.backgroundColor = "rgba(34,34,34,0.06)";
           };
           mItem.onmouseout = function(){
             mItem.style.backgroundColor = "rgba(255,255,255,0.8)";
           };

           mItem.onclick = function(e){ 
             var mCurrItemId = this.id;
             var mCurrItem = document.getElementById(mCurrItemId);
             var mItemIndex = parseInt(mCurrItem.getAttribute("item_index"));
             var mChoiceDivId = mCurrItem.parentElement.parentElement;
             var mInputId = mChoiceDivId.getAttribute("inputID");
             var mInput = document.getElementById(mInputId);
             //pick item..
             mSet_pick(mItemIndex, mInput);
             if (mInput.getAttribute("sel_item_idx").includes("[")==true) {
              //mult-selection is on..
              e.stopPropagation();
             }
           }; 
           mChoiceItems.appendChild(mItem);
           
           function mSet_content(i1) {
              var mDixHori = document.createElement("div");
              mDixHori.style.height = "100%";
              mDixHori.style.display = "flex";
              mDixHori.style.alignItems = "center";
              mDixHori.style.justifyContent = "space-between";
              mDixHori.style.padding = "0 1vw";
              mItem.appendChild(mDixHori);

              //Left-Item..
              let mLftI = document.createElement("div");
              mLftI.style.display = "flex";
              mLftI.style.alignItems = "center";
              mDixHori.appendChild(mLftI);
              

              if(mKey.hasOwnProperty("ico1")==true){
               //check if key available if array.....
               if(mCurrDta.hasOwnProperty(mKey['ico1'])==true){
                 mSet_ico1(mLftI);
               }
              }
              function mSet_ico1(mDixHori) {  
                //set svg....
                core_1mn['mSvg'].set({
                  "0":  mCurrDta[mKey['ico1']], //"list_0.svg",
                  "2": "2vh",
                  "3": "2vh",
                  "4": "rgba(34,34,34, 0.4)",
                  "5": mDixHori,
                  "cb": {
                      "onLoad": (mCurrItem) => {
                          //use (svg)
                      },
                      "onInit": (mCurrItem) => {
                         //This will trigger immediately..
                         //store (ico)..
                         mCurrDta[mKey['ico1']] = mCurrItem;
                      },
                      "onError": () => {
                      },
                      "onClick": (mCurrItem) => {
                          //alert("onClick");
                      }
                  }
                 });

               
              }

              //cbox1
              if(mKey.hasOwnProperty("cbox1")==true){
                //check if key available if array.....
                if(mCurrDta.hasOwnProperty(mKey['cbox1'])==true){
                  mSet_cbox1(mLftI);
                }
               }
               function mSet_cbox1(mDixHori) {  
                 //set checkbox....
                 //mCurrDta[mKey['cbox1']]
                 /*
                 --OLD--
                 //mDixHori
                 var mEvents = core_1mn["mForm"]["mUtil"]["checkbox"].get();
                 mDixHori.appendChild(mEvents["e"]);
                 //if (mCurrDta[mKey['cbox1']]==true) {
                    //mEvents.tick();
                 //} 
                 //store.....
                 --OLD-- mArr_cbox1.push({
                  "events": mEvents
                 });*/

                 //--NEW--//
                 let mEvents = null;
                 if (mCurrDta1['dropdown']["itemArr"][i1]["mArr_cbox1"]==null) {
                  //mDixHori
                  mEvents = core_1mn["mForm"]["mUtil"]["checkbox"].get();
                  mDixHori.appendChild(mEvents["e"]);
                  //store..
                  mCurrDta1['dropdown']["itemArr"][i1]["mArr_cbox1"] = {
                   "events": mEvents
                  };
                 }else {
                  mEvents = mCurrDta1['dropdown']["itemArr"][i1]["mArr_cbox1"]["events"];
                  mDixHori.appendChild(mEvents["e"]); 
                 }
                 if (mEvents.isTick==true) {
                  mEvents.tick();
                 }else {
                  mEvents.untick();
                 }

               }


               //txt1
              if(mKey.hasOwnProperty("txt1")==true){
                //check if key available if array.....
                if(mCurrDta.hasOwnProperty(mKey['txt1'])==true){
                 mSet_txt1(mLftI);
               }
              }
              function mSet_txt1(mDixHori) {
                  var mDiv = document.createElement("div");
                  mDixHori.appendChild(mDiv);

                  //mTxt.........
                  var mTxt = document.createElement("p");
                  mTxt.style.fontSize = "1.45vh";
                  mTxt.style.margin = "0 0.6vw";
                  mTxt.style.padding = "0";
                  mTxt.style.color = "rgba(34,34,34,0.6)";
                  mTxt.innerHTML = mCurrDta[mKey['txt1']];
                  mDiv.appendChild(mTxt);

              }


              //Right-Item..
              let mRhtI = document.createElement("div");
              mRhtI.style.display = "flex";
              mRhtI.style.alignItems = "center";
              mDixHori.appendChild(mRhtI);
              
              //etxt..
              let mSet_etxt = (mDixHori, k) => {
                  var mDiv = document.createElement("div");
                  mDixHori.appendChild(mDiv);

                  //mETxt.........
                  var mETxt = document.createElement("input");
                  mETxt.style.width = "3vw";
                  mETxt.style.height = "1.8vh";
                  mETxt.style.borderRadius = "1vh";
                  mETxt.style.border = "none";
                  mETxt.style.outline = "none";
                  mETxt.style.fontSize = "1.45vh";
                  mETxt.style.margin = "0 0.6vw";
                  mETxt.style.padding = "0.2vh 0.5vw";
                  mETxt.style.color = "rgba(34,34,34,0.6)";
                  mETxt.style.backgroundColor = "rgba(34,34,34, 0.1)";
                  mETxt.value = mCurrDta[mKey[k]]; //'etxt1'

                  //dataType..
                  try {
                    let dTyp = mCurrDta1['dropdown'][k]["dataType"];
                    mETxt.type = dTyp;
                  } catch (e) {/*Ignore*/}
                  //hide..
                  try {
                    let mHide = mCurrDta1['dropdown'][k]["hide"];
                    if (mHide==true) {
                      mETxt.style.display = "none";
                    }
                  } catch (e) {/*Ignore*/}


                  mDiv.appendChild(mETxt);
                  //events..
                  mETxt.onclick = function(e) {
                    e.stopPropagation();
                  };
                  //store..
                  mCurrDta1['dropdown']['itemArr'][i1][mKey[k]] = mETxt;

              }

              //etxt1..
              if(mKey.hasOwnProperty("etxt1")==true){
                //check if key available if array.....
                if(mCurrDta.hasOwnProperty(mKey['etxt1'])==true){
                  mSet_etxt(mRhtI, "etxt1");
               }
              }
              //etxt2..
              if(mKey.hasOwnProperty("etxt2")==true){
                //check if key available if array.....
                if(mCurrDta.hasOwnProperty(mKey['etxt2'])==true){
                  mSet_etxt(mRhtI, "etxt2");
               }
              }
              //etxt3..
              if(mKey.hasOwnProperty("etxt3")==true){
                //check if key available if array.....
                if(mCurrDta.hasOwnProperty(mKey['etxt3'])==true){
                  mSet_etxt(mRhtI, "etxt3");
               }
              }







               






           }
           mSet_content(i1);

         }

         //gen..
         const mGenI = () => {  
           if (showByFilter==false && typeof showByFilter === "boolean") {
            //items.....
            for (let i1 = 0; i1 < mItem_Arr.length; i1++) {
              const mCurrDta = mItem_Arr[i1];
              mSet_Items(mCurrDta, i1);
             }
           }else {
            //items..... //[/*filtered item indexes*/]
            for (let i1 = 0; i1 < mItem_Arr.length; i1++) {
              const mCurrDta = mItem_Arr[i1];
              const foundIdx = showByFilter.indexOf(i1);
              if (foundIdx!==-1) {
                  //found (idx)..
                  mSet_Items(mCurrDta, i1);
              }
             }
             
           }
         }
         mGenI();
        
         //auto pick..[If data provided]
         function mAuto_pick() { 
          //check if index (provided)..
          var item_index = mCurrDta1['$mUsrData'][Object.keys(mCurrDta1['$mUsrData'])[0]];
          if(item_index>=0 && typeof item_index == "number"){ //single sel..
              //pick item..
              //set vars..
              mSet_pick(item_index, mInput);
              return;
          }
          if (typeof item_index === "object" && Array.isArray(item_index)==true) {
            if (item_index.length>0) {
              //console.log(`==Multi sel=`);
              //pick item..
              //set vars..
              let mApplyAllSel = (a) => {
                for (let i = 0; i < a.length; i++) {
                  const e = a[i]; //sel one by one..
                  mSet_pick(e, mInput);
                }
              };
              mApplyAllSel(item_index);
              return;              
             }
          }

         }
         if (isAutoPick==true) {
             mAuto_pick();          
         }

         };
         mSet_ddownI(mCurrDta1['dropdown']["itemArr"], true, false); //default..
         /*console.log("=======mAddKey1 (Modification)========");
         console.log(mCurrDta1['dropdown']["itemArr"]);*/


          //search....
          if (mCurrDta1.hasOwnProperty("search")==true
          || mCurrDta1['dropdown']["itemArr"].length>4
          ) {

          //set style..(mSearch)
          mSearch_cov.style.borderBottom = `1px solid ${core_1mn["sep"].set({})["bg"]}`;

          //search-UI-//
          let mFld = document.createElement("input");
          mFld.style.width = "95%";
          mFld.style.height = "5vh";
          mFld.style.border = "none";
          mFld.style.outline = "none";
          mFld.style.fontSize = "1.5vh";
          mFld.style.padding = "0 0 0 0.9vw";
          //mFld.style.backgroundColor = "rgba(34,34,34,0.05)";
          mFld.placeholder = "Search..";
          mSearch_cov.appendChild(mFld);
 
          //--Search--//
          let mSet_search = core_1mn["mForm"]["mUtil"].search.set;
          
             //set..
             let search_Params = {
               "0": [mCurrDta1['dropdown']["key"]["txt1"]],
               "1": ["mArr_cbox1", mCurrDta1['dropdown']["key"]["cbox1"], mCurrDta1['dropdown']["key"]["etxt1"]],
               "cb": {
                 "onLoad": (data={"filter_item_idxs":[], "itemArr":[]}) => {
                   //console.log("=======onLoad============");
                    //--reload..(list)--//
                    mSet_ddownI(data.itemArr, false, data.filter_item_idxs);
                    //send callback.. 
                    try {
                     mCurrDta1["search"]["cb"]["onLoad"](data);
                    } catch (e) {/*ignore*/}
                 },
               },
               "init": (itemArr, {}) => {},
               "err": (err) => {},
               
             };
             mSet_search(mFld, search_Params);        
             //events..
             try {
               //init..(default)
               search_Params.init(mCurrDta1['dropdown']["itemArr"], {"filter":false});
               mCurrDta1["search"]["init"] = (itemArr) => {
                 //console.log("===============INIT===================="); 
                 //init..
                 search_Params.init(itemArr);
               };
               mCurrDta1["search"]["err"] = (err) => {
                 //console.log("===============ERR====================");
                 search_Params.err(err);
               };
             } catch (e) {/*Ignore*/}
 
          }


          




         
        }

        
        //****store (elements)
        mCurrDta1['mElemDta'] = {
          "mTooltip": mTooltip,
          "mInputE": mInput,

          "mDivRoot": mDivRoot, //Complete Field

        }; 
        

        };
        mStartE();


       },

       "setDataJSON": (mGetParams) => {
        var mParams = mGetParams;
        var mFormCurrItem = mParams['mFormCurrItem'];
        var mUsrPayload = mParams['mUsrPayload']; //need to (build)
        var mUsrData = mFormCurrItem['$mUsrData'];
        let mUsrDataCONF = mFormCurrItem['$mUsrDataCONF'];
        let mSchema = mParams["mSchema"];
        let mReturnHTML = mParams["returnHTML"];
                                                      
        

        var mErrInfo = {
          "isErr": true,
          "msg": null
        };
         

        //data....
        var mElemDta = mFormCurrItem['mElemDta']; 
        mSet_data();
        function mSet_data() {
          //var mTooltip = mElemDta['mTooltip'];
          var mInputE = mElemDta['mInputE'];

          //here we check selection type & return selection value..
          const mCheckSelTyp = (sel_item_idx) => {
             if (Number.isInteger(parseInt(sel_item_idx))) {
                //found (Single Selection).. eg => -1, 0, 1, 2 etc.
                return parseInt(sel_item_idx);
             }
             if (Array.isArray(eval(sel_item_idx))) {
                //found (Multi Selection).. eg => [0, 1]
                return eval(sel_item_idx);
             }
             //error....(undefined selection type)
             mErrInfo['msg']=`error: (undefined selection type found.`;
             return -1;
          };
          
          //store (JSON)....
          //mAddDtaIn_JSON(0, mInputE.value);
          //test
          var mSelItemIdx = -1;
          try {
            mSelItemIdx = mCheckSelTyp(mInputE.getAttribute("sel_item_idx")); //parseInt(mInputE.getAttribute("sel_item_idx"))
            mAddDtaIn_JSON(0, mSelItemIdx);
          } catch (error) {
            mAddDtaIn_JSON(0, mSelItemIdx);
          }
        }

        //($mUsrData).....
        function mAddDtaIn_JSON(mKeyI, mVal) {
          var mKey = Object.keys(mUsrData)[mKeyI];
          if(mKey==undefined){
             //error....(undefined key)
             mErrInfo['msg']=`error: (undefined key => ${mKey}) found.`;
             return;
          }
          if(mUsrPayload.hasOwnProperty(mKey)==true){
            //error....(duplicate key)
            mErrInfo['msg']=`error: (duplicate key => ${mKey}) found.`;
            return;
          }
           //all ok.....
           //--mUtil--//
           const mAutoSetDataType = core_1mn["mForm"]["mUtil"].mAutoSetDataType;

            //--experimental (Start)--//
           let mTest = () => {
            //--dta_UsrSel--//
           let dta_UsrSel = { //--Not full Implemented--//
            "mIsUserSel": false, //is some data selected by "USER"
            "mSingleSel": {
              "expectedVal": -1,
              "set": (v) => {
                if (typeof v === "number") {
                   return -1;
                }
                if (typeof v === "string") {
                   return "";
                }
                if (typeof v === "object" && Array.isArray(v)==false) {
                   return {};
                }
                if (typeof v === "object" && Array.isArray(v)==true) {
                   return [];
                }
              }
            },
            "init": () => { 
               let mSelItem = mFormCurrItem["dropdown"]["itemArr"][0];
               let mValItem = {};
               for (let i1 = 0; i1 < mUsrDataCONF["k"].length; i1++) {
                 const mCurr_I1 = mUsrDataCONF["k"][i1];
                 try {
                 //vali..
                 if (mSelItem[mCurr_I1]==undefined) {
                     //error..
                     mErrInfo['msg']=`error: mUsrDataCONF['k'][${mCurr_I1}] not found in (itemArr)`;
                     return;
                 }
                 //all ok..
                 if (mUsrDataCONF["presentSingleKey"]==undefined || mUsrDataCONF["presentSingleKey"]==true) {
                     //store..
                     dta_UsrSel.mSingleSel.expectedVal = mAutoSetDataType.set(mSelItem[mCurr_I1]);
                 }else {
                  /* //false..
                   if (mUsrDataCONF["k"].length==1 && mUsrDataCONF["presentSingleKey"]==false) {
                      //store in $mUsrData[YOUR_KEY]
                      mValItem = mAutoSetDataType.set(mSelItem[mCurr_I1]);
                   }else {
                     //error..
                     mErrInfo['msg']=`error: (presentSingleKey=false) only work if (k)ARRAY.length)==1`;
                     return;
                   }*/
                 }
                 } catch (e) {
                    //console.log(`Error: ${e}`);
                    console.log(`Error: may be (itemArr) is empty!`);
                    //store..
                    dta_UsrSel.mSingleSel.expectedVal = "";
                 }

               } 


            }
         };
         //init..
         dta_UsrSel.init();
           }
            //--experimental (End)--//


           //single (sel)..
           const mSingleSel = (mVal) => {
            let mSelItem = mFormCurrItem["dropdown"]["itemArr"][mVal];
              let mValItem = {};
              for (let i1 = 0; i1 < mUsrDataCONF["k"].length; i1++) {
                const mCurr_I1 = mUsrDataCONF["k"][i1];
                //vali..
                if (mSelItem[mCurr_I1]==undefined) {
                    //error..
                    mErrInfo['msg']=`error: mUsrDataCONF['k'][${mCurr_I1}] not found in (itemArr)`;
                    return;
                }
                //all ok..
                if (mUsrDataCONF["presentSingleKey"]==undefined || mUsrDataCONF["presentSingleKey"]==true) {
                    //store in $mUsrData[YOUR_KEY][itemArr_KEY]
                    mValItem[mCurr_I1] = mAutoSetDataType.set(mSelItem[mCurr_I1]);
                }else {
                  //false..
                  if (mUsrDataCONF["k"].length==1 && mUsrDataCONF["presentSingleKey"]==false) {
                     //store in $mUsrData[YOUR_KEY]
                     mValItem = mAutoSetDataType.set(mSelItem[mCurr_I1]);
                  }else {
                    //error..
                    mErrInfo['msg']=`error: (presentSingleKey=false) only work if (k)ARRAY.length)==1`;
                    return;
                  }
                }
              } 
              if (mErrInfo['msg']===null) {
                //all ok..
                mSetVal(mValItem);
                return mValItem;
              }else{
                //error..
                mSetVal(-1);
              }

           };
           //multi (sel)..
           const mMultiSel = (mVal) => {
              let mValItem_ARR = [];
              for (let i1 = 0; i1 < mVal.length; i1++) {
                const mCurr_I1 = mVal[i1];
                console.log(mCurr_I1);
                //set..
                let mValItem = mSingleSel(mCurr_I1);
                mValItem_ARR.push(mValItem);
              }
              if (mErrInfo['msg']===null) {
                 //all ok..
                 mSetVal(mValItem_ARR);
              }else{
                //error..
                mSetVal([]);
              }
           };
           //set default..
           mSetVal(mVal);
           //if ($mUsrDataCONF) available.. (overwrite [default])
           if (mUsrDataCONF!=undefined) {
            if (Number.isInteger(mVal) && mVal >= 0) {
               //set..(single selection)
               mSingleSel(mVal);
               return;
            }
            if (Array.isArray(mVal) && mVal.length >= 1) {
              //set..(multi selection)
              mMultiSel(mVal);
              return;
            }
           }
           //store..
           function mSetVal(mVal) {
            //--experimental (Start)--//
            let mTest = () => {
              if (dta_UsrSel.mIsUserSel==false &&
                dta_UsrSel.mSingleSel.expectedVal!=-1 &&
                Array.isArray(mUsrPayload[mKey])==false  //cannot be multi-selection (type)
                ) {
                //we auto set (un-selected) data with (user expected datatype)//
                if (mVal==-1) {
                    //alert(dta_UsrSel.mSingleSel.expectedVal);
                    mVal = dta_UsrSel.mSingleSel.set(dta_UsrSel.mSingleSel.expectedVal);
                }
              }
            }
            //--experimental (End)--// 

            //mWares..
            let mWares = core_1mn["mForm"]["mUtil"]["mWares"];


            if (mWares.isRequired(mSchema, mKey)==false &&
            mVal=="" || 
            mWares.isRequired(mSchema, mKey)==false &&
            mVal==-1) {
              //value is not ("" || -1)..
              //no need to add..
            }else {
               //console.log(mVal);
              //store....
              mUsrData[mKey] = mVal;
              //add....
              mUsrPayload[mKey] = mUsrData[mKey];


              
              //----HTML----//
              let mSet_HTML = () => {
                //"returnHTML": false, //default (false) [if=>true then ($mUsrData) will return Complete Field HTML ]
                //evaluate..[------ui_dta_mn-----]
                core_1mn["mForm"]["mUtil"].ui_dta_mn
                .evaluate(mFormCurrItem['mElemDta']["mDivRoot"]);
                //add....
                mUsrPayload[`${mKey}`] = mFormCurrItem['mElemDta']["mDivRoot"];
              };
              if (mUsrDataCONF != undefined) {
                if (mUsrDataCONF.hasOwnProperty("returnHTML")) {
                  if (mUsrDataCONF["returnHTML"] == true) {
                    mSet_HTML();
                  }
                }
              }
              if (mReturnHTML != undefined) {
                if (mReturnHTML == true) {
                  mSet_HTML();
                }
              }



            }

            //log..
            //console.log(mUsrPayload);


           }


           /*
           USAGE
           mAddDtaIn_JSON(mKeyI, mVal);
           */
        }
        //set vars....
        return mErrInfo['msg']==null ? true : mErrInfo; //true || mErrInfo
       }

      },

      //Date Picker (Field)
      "datepckr": {

        "set": (mP={
          "e": HTMLElement,
          "data": {},
          "cover": null,  //#[not tested yet for direct usage]
          "sch_json": {} //#[not tested yet for direct usage]
        }) => {
          //set vars..
          let mFormDiv = mP["e"];
          let mCurrDta1 = mP["data"];
          let mG_cover = mP.hasOwnProperty("cover")?mP["cover"]:null;
          let mSchemaJSON = mP.hasOwnProperty("sch_json")?mP["sch_json"]:{};

          /*
          USAGE
              {
                            "elementID": core_1mn['mUniqueId'].mGenerate(11),
                            "type": "datepckr",
                            "dataType": "text",
                            "placeholder": "dd/mm/yyyy",
                            "maxLength": 10, //schema_test['properties']['DOB']['maxLength']
                            "endIco": {
                                "0": "calendar_1.svg", //"info_0.svg",
                                "1": "1.3vh",
                                "2": "1.3vh",
                                //"3": "rgba(255,255,255,0.7)"
                            },
                            "autocomplete": false,
                            "label": "DOB",

                            "$mUsrData": {
                                "DOB": "",
                            },

                            "picker": {
                              "zIndex": 2
                            },
                            "maxYear": 2050,   //Integer || () => {let today = new Date(); return parseInt(today.getFullYear()+5); }
                            "minYear": 2000,   //Integer || () => {return Integer;}
 
                             //--cb--//
                            "cb": {
                                    "onPick": (mV) => {
                                      let m0 = mV["0"]; //mFinalDT
                                      let m1 = mV["1"]; //mHumanReadableDT
                                      let m2 = mV["2"]; // { "y": mYear, "m": mMonth, "d": mDay, }
                                                                      
                                    }
                                },


                            //"$mLogic": {
                               // "mMatchWith": [
                                    //"mName",
                                //]
                            //}
                             
                            },
          */



          //reload..
          if (mCurrDta1["reload"] != undefined) {
            mCurrDta1["reload"] = () => {
              mStartE();
            }
          }
          //start elem..
          var mDivRoot = document.createElement("div");
          mDivRoot.style.width = "100%";  //100%
          //mDivRoot.style.margin = "1vh 0";
          mDivRoot.style.position = "relative";
          mFormDiv.appendChild(mDivRoot);




          const mStartE = () => {
            mDivRoot.innerHTML = ""; //reset..
            //check (hide)..
            if (mCurrDta1.hasOwnProperty("hide") == true) {
              if (mCurrDta1["hide"] == true) {
                mDivRoot.style.display = "none";
              }
            }

            //-------events------//
            if (mCurrDta1["events"] != undefined) {
              if (mCurrDta1["events"].hasOwnProperty("hide") == true) {
                //hide..
                mCurrDta1["events"]["hide"] = () => {
                  mDivRoot.style.display = "none";
                }
              }
              if (mCurrDta1["events"].hasOwnProperty("show") == true) {
                //show..
                mCurrDta1["events"]["show"] = () => {
                  mDivRoot.style.display = "block";
                }
              }
            }


            //Tooltip....
            var mTooltip = core_1mn['tooltip']['2'].set(
              {
                "mE1": mDivRoot,
                //"mCallback": mCallback
                "0": {
                  "0": 1,
                  "1": "0 0 0 15%",
                  "2": "rgba(252, 58, 58, 1.0)",
                  "3": "0.3vw"
                },
                "1": {
                  "0": "#fafafa",
                  "1": "0.2vh solid rgba(252, 58, 58, 1.0)",
                },
                "2": {
                  "0": "0 0 -3.8vh -1.5vw",
                  "1": "4.4vh",
                  "2": "15vw",
                },
              });
            // mTooltip['tt'].show(mTooltip['tt']['e']);
            // mTooltip['tt'].hide(mTooltip['tt']['e']);

            //label..
            if (mCurrDta1.hasOwnProperty("label") == true) {
              //mTopLabelDiv......
              var mTopLabelDiv = document.createElement("div");
              mTopLabelDiv.innerHTML = mCurrDta1['label'];
              mTopLabelDiv.style.textAlign = "start";
              mTopLabelDiv.style.fontSize = "1.2vh";
              mTopLabelDiv.style.color = "rgba(34,34,34,0.6)";
              mDivRoot.appendChild(mTopLabelDiv);
            }

            //send cb..
            let mSend_cb = (cb_name, data) => {
              if (mCurrDta1["cb"] != undefined) {
                if (mCurrDta1["cb"][cb_name] != undefined) {
                  mCurrDta1["cb"][cb_name](data);
                }
              }
            };



            var mDiv = document.createElement("div");
            mDiv.style.width = mCurrDta1['w'] != undefined ? mCurrDta1['w'] : "100%"; //100%
            mDiv.style.height = mCurrDta1['h'] != undefined ? mCurrDta1['h'] : "4.0vh"; //5vh

            //mDiv.style.margin = "1vh 0";
            mDiv.style.display = "flex";
            mDiv.style.backgroundColor = "#f2f2f2";

            mDiv.style.alignItems = "center";
            //mDiv.style.paddingRight = "0.5vw";
            //mDiv.style.paddingTop = "10vh";

            //mDiv.style.border = "0.3vh solid rgba(34,34,34,0.1)"; //.3
            mDiv.style.border = "0.1vh solid rgba(34,34,34,0.2)"; //.3
            mDiv.style.borderRadius = "0.3vh";
            mDivRoot.appendChild(mDiv);

            //input....
            var mInput = document.createElement("div");
            mInput.id = mCurrDta1['elementID'];
            mInput.setAttribute("value", mCurrDta1['$mUsrData'][Object.keys(mCurrDta1['$mUsrData'])[0]]);


            mInput.style.width = "100%";
            mInput.style.height = "100%";
            mInput.style.outline = "none";
            mInput.style.border = "none";
            mInput.style.padding = "0 0.5vw";
            mInput.style.fontSize = "1.4vh";
            mInput.style.color = "rgba(34,34,34, 0.9)";
            mInput.style.backgroundColor = "transparent";

            //set....
            mInput.setAttribute("dataType", mCurrDta1['dataType']);

            mInput.innerText = mCurrDta1['placeholder'];

            mInput.type = mCurrDta1['dataType'];
            mInput.style.display = "flex";
            mInput.style.alignItems = "center";

            mDiv.appendChild(mInput);



            //init..[------ui_dta_mn-----]
            core_1mn["mForm"]["mUtil"].ui_dta_mn
              .init(mInput);




            function mCloseAllDropDown() {
              //First close all dropdowns.....
              var mFormArr = mFormDiv.querySelectorAll("div");
              for (let i1 = 0; i1 < mFormArr.length; i1++) {
                const mCurrDiv = mFormArr[i1];//dropdownID

                var mDropdownID = mCurrDiv.getAttribute("dropdownID");
                if (mDropdownID != null) {
                  //dropdown found......
                  var mSelDropdown = document.getElementById(mDropdownID);
                  mSelDropdown.style.display = "none";
                }
              }


            }

            //events......
            mInput.onclick = function (e) {
              var mCurrItemId = this.id;
              e.stopPropagation();
              var mCurrItem = document.getElementById(mCurrItemId);
              var mDropdownID = mCurrItem.getAttribute("dropdownID");
              var mDropdown = document.getElementById(mDropdownID);

              //alert(mDropdownID)
              mTooltip['tt'].hide(mTooltip['tt']['e']);

              //open or close....(Dropdown)
              if (mDropdown.style.display == "none") {
                mCloseAllDropDown();

                //show current.....
                mDropdown.style.display = "block";
              } else {
                mDropdown.style.display = "none";
              }

              //events.....
              window.onclick = function () {
                if (mDropdown.style.display == "block") {
                  mDropdown.style.display = "none";
                }
              };


            };



            //here we set endIco....
            if (mCurrDta1.hasOwnProperty("endIco") == true) {
              mSet_endIco();
            }
            function mSet_endIco() {
              var mSvgDiv = document.createElement("div");
              mSvgDiv.style.paddingRight = "0.5vw";
              mDiv.appendChild(mSvgDiv);

              //svg.....
              var mSvgCover = core_1mn['mSvg'].set({
                "0": mCurrDta1['endIco']['0'],
                "1": core_1mn['mUniqueId'].mGenerate(61),
                "2": mCurrDta1['endIco']['1'] != undefined ? mCurrDta1['endIco']['1'] : "2vh",
                "3": mCurrDta1['endIco']['2'] != undefined ? mCurrDta1['endIco']['2'] : "2vh",
                "4": mCurrDta1['endIco']['3'] != undefined ? mCurrDta1['endIco']['3'] : "rgba(34,34,34, 0.4)",
                "5": mSvgDiv,
                "cb": {
                  "onClick": (mGetCurrItem) => {
                    //alert("onClick");
                    var mCurrItem = mGetCurrItem;
                    var mInputE = document.getElementById(mCurrItem.getAttribute("e_input_id"));
                    var mSvg = mCurrItem.querySelectorAll("svg")[0];

                    //check IF (password)
                    if (mInputE.getAttribute("dataType") == "password") {
                      //set....
                      if (mInputE.type == "password") {
                        mInputE.type = "text";
                        if (mSvg != null) {
                          mSvg.style.fill = "rgba(34,34,34, 0.8)";
                        }
                      } else {
                        mInputE.type = "password";
                        if (mSvg != null) {
                          mSvg.style.fill = "rgba(34,34,34, 0.4)";
                        }
                      }
                    }


                  }
                }

              });
              mSvgCover.setAttribute("e_input_id", mInput.id);

            }




            if (mCurrDta1.hasOwnProperty("bottomRight") == true) {
              mBottomRight();
            }
            function mBottomRight() {
              if (mCurrDta1['bottomRight']['type'] == "href") {
                var mDivCover = document.createElement("div");
                mDivCover.style.display = "flex";
                mDivCover.style.justifyContent = "end";
                mDivRoot.appendChild(mDivCover);
                //set vars..
                var mCb = mCurrDta1['bottomRight']['cb'];
                function mSend_cb(mCb_name, data) {
                  if (mCb != undefined) {
                    if (mCb[mCb_name] != undefined) {
                      mCb[mCb_name](data);
                    }
                  }
                }

                var mHref = document.createElement("a");
                mHref.id = core_1mn['mUniqueId'].mGenerate(19);
                mHref.href = "javascript:void(0)";
                mHref.style.fontSize = "1.2vh";
                mHref.style.color = "rgba(34,34,34,0.5)";
                mHref.style.fontWeight = "400";
                mHref.innerHTML = mCurrDta1['bottomRight']['txt'];
                mHref.style.textAlign = "end";
                mDivCover.appendChild(mHref);
                //events..
                mHref.onclick = function () {
                  var mCurrItem = this.id;
                  var mCurrItem = document.getElementById(mCurrItem);
                  //send callback..
                  mSend_cb("onClick", { "e": mCurrItem });
                };
              }

            }




            //set date picker......
            mSet_datePicker();
            function mSet_datePicker() {
              var mDatePickDiv = document.createElement("div");
              mDatePickDiv.style.display = "none";
              mDatePickDiv.style.position = "relative";

              mDatePickDiv.id = core_1mn['mUniqueId'].mGenerate(11);
              //add id to input......
              mInput.setAttribute("dropdownID", mDatePickDiv.id);
              //add id to dropdown......
              mDatePickDiv.setAttribute("inputID", mInput.id);

              mDatePickDiv.style.userSelect = "none";
              mDatePickDiv.style.zIndex = "1";

              mDatePickDiv.style.position = "absolute";
              mDatePickDiv.style.top = "0";
              mDatePickDiv.style.marginTop = "4.0vh";

              mDatePickDiv.style.boxShadow = "0 0.5vh 0.5vh 0 rgba(0,0,0,0.2)";
              mDatePickDiv.style.width = "20vw";
              mDatePickDiv.style.height = "35vh";
              mDatePickDiv.style.backgroundColor = "rgba(255,255,255)";
              mDatePickDiv.style.overflowY = "auto";


              //events....
              mDatePickDiv.onclick = function (e) {
                e.stopPropagation();
              };

               
              //--picker--//
              if (mCurrDta1.hasOwnProperty("picker")) {
                if (mCurrDta1["picker"].hasOwnProperty("zIndex")) {
                mDatePickDiv.style.zIndex = mCurrDta1["picker"]["zIndex"];
                }
              }

              mDivRoot.appendChild(mDatePickDiv);



              //--auto sel--//  (--Currently this (Func) just a TEMPORARY Solution--)
              let mAutoSel = (mInput) => {
                if (mInput.getAttribute("value").trim() != "") {
                  let mInputVal = mInput.getAttribute("value").trim();
                  const d = new Date(mInputVal); //"2021-03-25"
                  try {
                    if (typeof d.getDate() !== "number") {
                      //err..
                      return;
                    }
                    //all ok..
                    //show in [Input Field]..
                    mInput.innerHTML = d.toDateString();
                    /*console.log(d.getDate(), date );
                    console.log(d.getFullYear(), year );
                    console.log(d.getMonth(), month );*/
                    //alert(d.toDateString())
                    //check..
                    /*if (d.getDate() === date
                    && d.getFullYear() === year && d.getMonth() === month ) {
                      console.log(`==mAutoSel==`);
                      mSel(cell);
                    }*/
                  } catch (e) { } //Ignore..
                  //console.log(mInputVal);

                }
              };
              //auto sel..
              mAutoSel(mInput);





              //set vars.....
              let today = new Date();
              let currentMonth = today.getMonth(); //return(int) 2
              let currentYear = today.getFullYear(); //return(int) 2022
              var mCalenPayload = {

                "mSelDate": {
                  "month": currentMonth,
                  "year": currentYear,
                  "day": null
                },

                "weeks": [
                  "S",
                  "M",
                  "T",
                  "W",
                  "T",
                  "F",
                  "S",
                ],

                "months": [
                  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                ],

                "years": []

              };



              mGenerateYears();
              function mGenerateYears() {
                let currentYear = parseInt(today.getFullYear());
                let mGet0 = (v,k) => {
                  let mN;
                  if (typeof v[k] == "function") {
                    mN = v[k]();
                    }else {
                    mN = v[k];
                  }
                  return mN;
                };
                if (mCurrDta1.hasOwnProperty("maxYear")) {
                  //overwrite..
                  currentYear = mGet0(mCurrDta1, `maxYear`);
                }
                //set..
                let mMinYear = 1980;
                if (mCurrDta1.hasOwnProperty("minYear")) {
                  //overwrite..
                  mMinYear = mGet0(mCurrDta1, `minYear`);
                }
                for (let i1 = mMinYear; i1 < currentYear + 1; i1++) {
                  mCalenPayload['years'].push(i1);
                }
              }



              //mCoverCalen2.....
              var mCoverCalen2 = document.createElement("div");
              mCoverCalen2.style.display = "flex";
              mCoverCalen2.style.justifyContent = "center";
              mCoverCalen2.style.paddingTop = "1.5vh";
              mDatePickDiv.appendChild(mCoverCalen2);


              var mMonthDiv = null;
              var mMonthPckr_open = false;
              mSet_month();
              function mSet_month() {
                mMonthDiv = document.createElement("div");
                mMonthDiv.style.backgroundColor = "rgba(34,34,34,0.05)";
                mMonthDiv.style.borderRadius = "0.2vh";
                mMonthDiv.style.height = "3vh";
                mMonthDiv.style.width = "6vw";
                mMonthDiv.style.display = "flex";
                mMonthDiv.style.alignItems = "center";
                mMonthDiv.style.justifyContent = "center";

                //events....
                mMonthDiv.onclick = function () {
                  if (mMonthPckr_open == false) {
                    //need to open..
                    mMonthPckr_open = true;
                    mYearPckr_open = false;
                    mCreateBottomPopup(mCalenPayload['months'], "months");
                  } else {
                    //need to close..
                    mMonthPckr_open = false;
                    mClose_BottomPopup();
                  }
                };

                mCoverCalen2.appendChild(mMonthDiv);

                //mP1.....
                var mP1 = document.createElement("span");
                mP1.style.fontSize = "1.5vh";
                mP1.style.fontWeight = "450";

                mP1.style.color = "rgba(34,34,34,0.7)";
                mP1.innerHTML = mCalenPayload['months'][currentMonth];
                mMonthDiv.appendChild(mP1);

                //mSpace....
                var mSpace = document.createElement("div");
                mSpace.style.width = "0.7vw";
                mMonthDiv.appendChild(mSpace);

                mSet_ico();
                function mSet_ico() {
                  //set svg1..
                  function mSet_Svg1() {
                    core_1mn['mSvg'].set({
                      "0": "caret_0.svg",
                      //"1": ,
                      "2": "1.3vh",
                      "3": "1.3vh",
                      "4": "rgba(34,34,34, 0.6)",
                      "5": mMonthDiv,
                      "cb": {
                        /*"onClick": (mCurrItem) => {
                            //alert("onClick");
                            //close..
                        }*/
                      }
                    });
                  }
                  mSet_Svg1();

                }


              }

              //mSpace....
              var mSpace = document.createElement("div");
              mSpace.style.width = "2vw";
              mCoverCalen2.appendChild(mSpace);


              var mYearDiv = null;
              var mYearPckr_open = false;
              mSet_year();
              function mSet_year() {
                mYearDiv = document.createElement("div");
                mYearDiv.style.backgroundColor = "rgba(34,34,34,0.05)";
                mYearDiv.style.borderRadius = "0.2vh";
                mYearDiv.style.height = "3vh";
                mYearDiv.style.width = "6vw";
                mYearDiv.style.display = "flex";
                mYearDiv.style.alignItems = "center";
                mYearDiv.style.justifyContent = "center";

                //events....
                mYearDiv.onclick = function () {
                  if (mYearPckr_open == false) {
                    //need to open..
                    mYearPckr_open = true;
                    mMonthPckr_open = false;
                    mCreateBottomPopup(mCalenPayload['years'], "years");
                  } else {
                    //need to close..
                    mYearPckr_open = false;
                    mClose_BottomPopup();
                  }
                };

                mCoverCalen2.appendChild(mYearDiv);

                //mP1.....
                var mP1 = document.createElement("span");
                mP1.style.fontSize = "1.5vh";
                mP1.style.fontWeight = "450";

                mP1.style.color = "rgba(34,34,34,0.7)";
                mP1.innerHTML = currentYear;
                mYearDiv.appendChild(mP1);

                //mSpace....
                var mSpace = document.createElement("div");
                mSpace.style.width = "0.7vw";
                mYearDiv.appendChild(mSpace);

                mSet_ico();
                function mSet_ico() {

                  //set svg1..
                  function mSet_Svg1() {
                    core_1mn['mSvg'].set({
                      "0": "caret_0.svg",
                      //"1": ,
                      "2": "1.3vh",
                      "3": "1.3vh",
                      "4": "rgba(34,34,34, 0.6)",
                      "5": mYearDiv,
                      "cb": {
                        /*"onClick": (mCurrItem) => {
                            //alert("onClick");
                            //close..
                        }*/
                      }
                    });
                  }
                  mSet_Svg1();


                }


              }





              //mCoverCalen1.....
              var mCoverCalen1 = document.createElement("div");
              mCoverCalen1.style.display = "flex";
              mCoverCalen1.style.justifyContent = "center";
              mCoverCalen1.style.paddingTop = "2vh";
              mDatePickDiv.appendChild(mCoverCalen1);


              //create elements....
              var mTableE = document.createElement("table");
              mTableE.style.fontSize = "1.5vh";
              mCoverCalen1.appendChild(mTableE);

              //mTHeadE.....
              var mTHeadE = document.createElement("thead");
              mTableE.appendChild(mTHeadE);

              //mTrE....
              var mTrE = document.createElement("tr");
              mTrE.style.color = "rgba(34,34,34,0.5)";
              mTHeadE.appendChild(mTrE);

              //space..
              core_1mn['space']['set']({
                "h": "0.8vh",
                "e1": mTableE
              });

              //mTBody....
              var mTBody = document.createElement("tbody");
              //add Input ID to tbody......
              mTBody.setAttribute("inputID", mInput.id);
              mTBody.style.fontSize = "1.5vh";
              mTableE.appendChild(mTBody);

              mCreateWeek();
              function mCreateWeek() {
                for (let i1 = 0; i1 < mCalenPayload['weeks'].length; i1++) {
                  const mCurrE = mCalenPayload['weeks'][i1];
                  //mThE.....
                  var mThE = document.createElement("th");
                  mThE.innerHTML = mCurrE;
                  mTrE.appendChild(mThE);

                }
              }





              //create bottom popup....
              var mBottomPopup_Div = document.createElement("div");
              mDatePickDiv.appendChild(mBottomPopup_Div);
              var mBottomPopUp = null;
              //create bottom popup....
              //mCreateBottomPopup(mCalenPayload['years']);
              function mCreateBottomPopup(mGetItemArr, mKey1) {
                //clear
                core_1mn.mClearLayout(mBottomPopup_Div);

                //mDiv1...........
                var mDiv1 = document.createElement("div");
                mDiv1.style.width = "100%";
                mDiv1.style.height = "28vh"; //25vh
                mDiv1.style.position = "absolute";
                mDiv1.style.bottom = "0";
                //mDiv1.style.backgroundColor = "red";
                mBottomPopup_Div.appendChild(mDiv1);
                //store.....
                mBottomPopUp = mDiv1;


                //mCoverDiv1......
                var mCoverDiv1 = document.createElement("div");
                mCoverDiv1.style.width = "100%";
                mCoverDiv1.style.height = "100%";
                mCoverDiv1.style.position = "absolute";
                mDiv1.appendChild(mCoverDiv1);


                //mSection1.......
                //mSet_section1();
                function mSet_section1() {
                  var mSection = document.createElement("div");
                  mSection.style.width = "100%";
                  mSection.style.display = "flex";
                  mSection.style.justifyContent = "center";
                  mCoverDiv1.appendChild(mSection);


                }


                //mSection2.......
                mSection2();
                function mSection2() {
                  var mDiv = document.createElement('div');
                  mDiv.style.width = "100%";
                  mDiv.style.height = "100%"; //98%
                  //mDiv.style.overflowY = "auto";
                  mDiv.style.boxShadow = "0.3vh 0 0.5vh -2px rgba(0,0,0,0.2); transition: 0.9s";
                  mDiv.style.backgroundColor = "rgba(255,255,255, 1.0)";
                  mDiv.style.overflowY = "hidden";
                  mCoverDiv1.appendChild(mDiv);


                  //mItemCover.....
                  var mItemCover = document.createElement("div");
                  mItemCover.style.overflowY = "auto";
                  mItemCover.style.height = "100%";
                  //mItemCover.style.paddingTop = "1vh";
                  mItemCover.style.display = "flex";
                  mItemCover.style.justifyContent = "center";
                  mItemCover.style.flexWrap = "wrap";

                  mDiv.appendChild(mItemCover);

                  //set vars....
                  var mItem_Arr = mGetItemArr;

                  //set items.....
                  mSet_items();
                  function mSet_items() {
                    for (let i1 = 0; i1 < mItem_Arr.length; i1++) {
                      const mCurrDta = mItem_Arr[i1];

                      var mItem = document.createElement("div");

                      mItem.id = core_1mn['mUniqueId'].mGenerate(11);
                      mItem.setAttribute("item_index", i1);

                      mItem.innerHTML = mCurrDta;

                      mItem.style.display = "flex";
                      mItem.style.justifyContent = "center";
                      mItem.style.alignItems = "center";

                      mItem.style.fontSize = "1.5vh";
                      mItem.style.color = "rgba(34,34,34,0.8)";
                      mItem.style.fontWeight = "450";

                      mItem.style.width = "5vw";
                      mItem.style.height = "3.5vh";
                      mItem.style.backgroundColor = "rgba(34,34,34,0.01)"; //rgba(255,255,255,0.8)

                      mItem.style.border = "0.1vh solid rgba(34,34,34,0.1)";
                      mItem.style.borderRadius = "1vh";

                      mItem.style.marginBottom = "0.7vh";
                      mItem.style.marginRight = "0.7vh";

                      //check (if last)..
                      if (i1 == (mItem_Arr.length - 1)) {
                        mItem.style.marginBottom = "6.5vh";
                      }

                      //events......
                      mItem.onmouseover = function () {
                        var mCurrItemId = this.id;
                        var mCurrItem = document.getElementById(mCurrItemId);
                        mCurrItem.style.backgroundColor = "rgba(34,34,34,0.06)";
                      };
                      mItem.onmouseout = function () {
                        var mCurrItemId = this.id;
                        var mCurrItem = document.getElementById(mCurrItemId);
                        mCurrItem.style.backgroundColor = "rgba(34,34,34,0.01)"; //rgba(255,255,255,0.8)
                      };

                      mItem.onclick = function () {
                        var mCurrItemId = this.id;
                        var mCurrItem = document.getElementById(mCurrItemId);
                        var mItemIndex = parseInt(mCurrItem.getAttribute("item_index"));
                        /*var mChoiceDivId = mCurrItem.parentElement;
                        var mInputId = mChoiceDivId.getAttribute("inputID");
                        var mInput = document.getElementById(mInputId);
                      
                        //set selected item to Input.....
                        mInput.setAttribute("selItemIndex", mItemIndex);
                        mInput.style.color = "#343434";
                      
                        if(mKey.hasOwnProperty("txt1")==true){
                          //check if key available if array.....
                          if(mItem_Arr[mItemIndex].hasOwnProperty(mKey['txt1'])==true){
                           mInput.innerHTML = mItem_Arr[mItemIndex][mKey['txt1']];                        
                         }
                        }*/

                        //set selected to to Input......
                        if (mKey1 == "years") {
                          mYearDiv.querySelectorAll("span")[0].innerText = mCurrItem.innerText;
                          mCalenPayload['mSelDate']['year'] = parseInt(mCurrItem.innerText);
                        }
                        if (mKey1 == "months") {
                          mMonthDiv.querySelectorAll("span")[0].innerText = mCurrItem.innerText;
                          mCalenPayload['mSelDate']['month'] = mItemIndex;
                        }

                        //close.....popup.....
                        mClose_BottomPopup();

                        //****Set calender......
                        //console.log(JSON.stringify(mCalenPayload['mSelDate']));
                        showCalendar(mCalenPayload['mSelDate']['month'],
                          mCalenPayload['mSelDate']['year']);


                      };

                      mItemCover.appendChild(mItem);

                    }


                  }


                }

                //here we layout......
                return mDiv1;

              }
              //close.....
              function mClose_BottomPopup() {
                var mH = 25;
                var mAnim1 = setInterval(() => {

                  if (mH <= 0) {
                    clearInterval(mAnim1);
                    //set.....
                    mBottomPopUp.style.display = "none";

                    return;
                  }

                  mBottomPopUp.style.height = mH + "vh";
                  mH -= 5;

                }, 20);
              }





              //generate......
              //let selectYear = {"value": mYearDiv.querySelectorAll("span")[0] }; //document.getElementById("year");
              //let selectMonth = {"value": mMonthDiv.querySelectorAll("span")[0] }; //document.getElementById("month");


              //let monthAndYear = document.getElementById("monthAndYear");
              showCalendar(mCalenPayload['mSelDate']['month'],
                mCalenPayload['mSelDate']['year']); //default....


              //target year....
              const dTargetYear = new Date();
              var targetYearCurr = dTargetYear.getFullYear();
              targetYearCurr = targetYearCurr += 1;
              //alert(targetYearCurr)

              //old year....
              const dOldYear = new Date();
              var oldYearCurr = dOldYear.getFullYear();
              oldYearCurr = oldYearCurr -= 100;


              function next() {
                if (parseInt(targetYearCurr) > parseInt(currentYear)) {
                  currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
                  currentMonth = (currentMonth + 1) % 12;
                  showCalendar(currentMonth, currentYear);
                }
              }

              function previous() {
                if (parseInt(oldYearCurr) < parseInt(currentYear)) {
                  currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
                  currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
                  showCalendar(currentMonth, currentYear);
                }
              }

              function jump() {
                currentYear = parseInt(selectYear.value);
                currentMonth = parseInt(selectMonth.value);
                showCalendar(currentMonth, currentYear);
              }




              function showCalendar(month, year) {

                let firstDay = (new Date(year, month)).getDay();
                let daysInMonth = 32 - new Date(year, month, 32).getDate();

                let tbl = mTBody; //document.getElementById("calendar-body"); // body of the calendar

                // clearing all previous cells
                tbl.innerHTML = "";

                // filing data about month and in the page via DOM.
                /*monthAndYear.innerHTML = months[month] + " " + year;
                selectYear.value = year;
                selectMonth.value = month;*/

                // creating all cells
                let date = 1;
                for (let i = 0; i < 6; i++) {


                  // creates a table row
                  let row = document.createElement("tr");

                  //creating individual cells, filing them up with data.
                  for (let j = 0; j < 7; j++) {

                    if (i === 0 && j < firstDay) {
                      let cell = document.createElement("td");
                      let cellText = document.createTextNode("");

                      //cell.style.border ="0.1vh solid rgba(34,34,34,0.5)";
                      cell.style.fontSize = "1.4vh";
                      cell.style.padding = "0.8vh";

                      cell.appendChild(cellText);
                      row.appendChild(cell);
                    }
                    else if (date > daysInMonth) {
                      //console.log(daysInMonth)
                      break;
                    }

                    else {
                      let cell = document.createElement("td");
                      let cellText = document.createTextNode(date);
                      if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                        //cell.classList.add("bg-info");
                        cell.style.border = "0.1vh solid rgba(34,34,34,0.3)";

                      } // color today's date

                      cell.style.fontSize = "1.4vh";
                      //cell.style.border ="0.1vh solid rgba(34,34,34,0.1)";
                      //cell.style.padding = "0.8vh";
                      cell.style.width = "3vh";
                      cell.style.height = "3vh";
                      cell.style.textAlign = "center";
                      cell.style.borderRadius = "50%";

                      //set data....
                      cell.id = core_1mn['mUniqueId'].mGenerate(15);
                      cell.setAttribute("m_date", date);
                      /*cell.setAttribute("m_month", month+1);
                      cell.setAttribute("m_year", year);*/

                      //sel..
                      let mSel = (mE) => {
                        var mCurrItemId = mE.id; //this.id
                        var mCurrItem = document.getElementById(mCurrItemId);
                        var mCurrSelDay = parseInt(mCurrItem.getAttribute("m_date"));
                        var mTBody = mCurrItem.parentElement.parentElement;

                        var mInputId = mTBody.getAttribute("inputID");
                        var mInputItem = document.getElementById(mInputId);
                        //console.log(mInputId);


                        //set date......
                        mSet_date();
                        function mSet_date() {
                          mCalenPayload['mSelDate']['day'] = mCurrSelDay; //set
                          var mSelDate = mCalenPayload['mSelDate'];
                          var mDay = (mSelDate['day'] + "").length == 1 ? "0" + mSelDate['day'] : mSelDate['day'];
                          var mMonth_txt = mCalenPayload['months'][mSelDate['month']];
                          var mMonth = (mSelDate['month'] + "").length == 1 ? "0" + (mSelDate['month'] + 1) : (mSelDate['month'] + 1);
                          var mYear = mSelDate['year'];

                          //set....
                          var mFinalDT = `${mYear}-${mMonth}-${mDay}`;  //`${mDay}/${mMonth}/${mYear}`
                          var mHumanReadableDT = new Date(`${mYear}-${mMonth}-${mDay}`).toDateString();
                          mInputItem.style.color = "#343434";
                          mInputItem.innerHTML = mHumanReadableDT;
                          mInputItem.setAttribute("value", mFinalDT); //mDay+", "+ mMonth + ", " + mYear; //"DD/MM/YYYY";

                          //set attr.....
                          mInputItem.setAttribute("day", mSelDate['day']); //(Int)
                          mInputItem.setAttribute("month", mSelDate['month']); //(Int)
                          mInputItem.setAttribute("year", mSelDate['year']); //(Int)


                          //send (cb)..
                          mSend_cb("onPick", {
                            "0": mFinalDT,
                            "1": mHumanReadableDT,
                            "2": {
                              "y": mYear,  //year
                              "m": mMonth, //month
                              "d": mDay,  //day
                            }
                          });

                        }

                        //close.....
                        mCloseAllDropDown();

                      };

                      //**events....
                      cell.onclick = function (e) {
                        //sel..
                        mSel(this);
                      };


                      cell.onmouseover = function () {
                        var mCurrItemId = this.id;
                        var mCurrItem = document.getElementById(mCurrItemId);
                        mCurrItem.style.backgroundColor = "rgba(34,34,34,0.08)";
                      };
                      cell.onmouseout = function () {
                        var mCurrItemId = this.id;
                        var mCurrItem = document.getElementById(mCurrItemId);
                        mCurrItem.style.backgroundColor = "rgba(34,34,34,0.01)"; //rgba(255,255,255,0.8)
                      };


                      cell.appendChild(cellText);
                      row.appendChild(cell);



                      date++;
                    }






                  }

                  tbl.appendChild(row); // appending each row into calendar body.
                }

              }







            }



            //****store (elements)
            mCurrDta1['mElemDta'] = {
              "mTooltip": mTooltip,
              "mInputE": mInput,

              "mDivRoot": mDivRoot, //Complete Field

            };


          };
          mStartE(); //default..



        },

        "setDataJSON": (mGetParams) => {
          var mParams = mGetParams;
          var mFormCurrItem = mParams['mFormCurrItem'];
          var mUsrPayload = mParams['mUsrPayload']; //need to (build)
          var mUsrData = mFormCurrItem['$mUsrData'];
          let mSchema = mParams["mSchema"];
          let mUsrDataCONF = mFormCurrItem['$mUsrDataCONF'];
          let mReturnHTML = mParams["returnHTML"];


          var mErrInfo = {
            "isErr": true,
            "msg": null
          };

          //data....
          var mElemDta = mFormCurrItem['mElemDta'];
          mSet_data();
          function mSet_data() {
            //var mTooltip = mElemDta['mTooltip'];
            var mInputE = mElemDta['mInputE'];
            let mInputVal = mInputE.getAttribute("value");

            //log..
            //alert(mInputVal);
            //console.log(mInputE);
            //----custom validation----//
            if (mInputVal.trim() == "") {
              mInputVal = ""; //it will indicates [json-schema-validator]
            }


            //store (JSON)....
            mAddDtaIn_JSON(0, mInputVal);
          }

          //($mUsrData).....
          function mAddDtaIn_JSON(mKeyI, mVal) {
            var mKey = Object.keys(mUsrData)[mKeyI];
            if (mKey == undefined) {
              //error....(undefined key)
              mErrInfo['msg'] = `error: (undefined key => ${mKey}) found.`;
              return;
            }
            if (mUsrPayload.hasOwnProperty(mKey) == true) {
              //error....(duplicate key)
              mErrInfo['msg'] = `error: (duplicate key => ${mKey}) found.`;
              return;
            }
            //all ok.....
            //mWares..
            let mWares = core_1mn["mForm"]["mUtil"]["mWares"];
            if (mWares.isRequired(mSchema, mKey) == false &&
              mVal == "") {
              //value is not ("")..
              //no need to add..
            } else {
              //store....
              mUsrData[mKey] = mVal;
              //add....
              mUsrPayload[mKey] = mUsrData[mKey];



              //----HTML----//
              let mSet_HTML = () => {
                //"returnHTML": false, //default (false) [if=>true then ($mUsrData) will return Complete Field HTML ]
                //evaluate..[------ui_dta_mn-----]
                core_1mn["mForm"]["mUtil"].ui_dta_mn
                  .evaluate(mFormCurrItem['mElemDta']["mDivRoot"]);
                //add....
                mUsrPayload[`${mKey}`] = mFormCurrItem['mElemDta']["mDivRoot"];
              };
              if (mUsrDataCONF != undefined) {
                if (mUsrDataCONF.hasOwnProperty("returnHTML")) {
                  if (mUsrDataCONF["returnHTML"] == true) {
                    mSet_HTML();
                  }
                }
              }
              if (mReturnHTML != undefined) {
                if (mReturnHTML == true) {
                  mSet_HTML();
                }
              }





            }



            /*
            USAGE
            mAddDtaIn_JSON(mKeyI, mVal);
            */
          }
          //set vars....
          return mErrInfo['msg'] == null ? true : mErrInfo; //true || mErrInfo
        }

      },

      //Time Picker (Field)
      "timepckr": {

        "set": (mP={
          "e": HTMLElement,
          "data": {},
          "cover": null,  //#[not tested yet for direct usage]
          "sch_json": {} //#[not tested yet for direct usage]
        }) => {
          //set vars..
          let mFormDiv = mP["e"];
          let mCurrDta1 = mP["data"];
          let mG_cover = mP.hasOwnProperty("cover")?mP["cover"]:null;
          let mSchemaJSON = mP.hasOwnProperty("sch_json")?mP["sch_json"]:{};

          //ref..
          //https://docs.oracle.com/cd/E41183_01/DR/Time_Formats.html
          //https://m3.material.io/components/time-pickers/overview
          //https://mui.com/x/react-date-pickers/time-picker/
          /*
          USAGE
             {
                            "elementID": core_1mn['mUniqueId'].mGenerate(11),
                            "type": "timepckr",
                            "dataType": "text",
                            "placeholder": "HH:MM XM",
                            "maxLength": 8, //schema_test['properties']['Time']['maxLength']
                            "endIco": {
                                "0": "calendar_1.svg", //"info_0.svg",
                                "1": "1.3vh",
                                "2": "1.3vh",
                                //"3": "rgba(255,255,255,0.7)"
                            },
                            "autocomplete": false,
                            "label": "Time",

                            "$mUsrData": {
                                "Time": "",
                            },

                            //"$mLogic": {
                               // "mMatchWith": [
                                    //"mName",
                                //]
                            //}
                             
                            },
          */


          //reload..
          if (mCurrDta1["reload"] != undefined) {
            mCurrDta1["reload"] = () => {
              mStartE();
            }
          }


          //start elem..                  
          var mDivRoot = document.createElement("div");
          mDivRoot.style.width = "100%";
          //mDivRoot.style.margin = "1vh 0";
          mDivRoot.style.position = "relative";
          mFormDiv.appendChild(mDivRoot);

          //check (hide)..
          if (mCurrDta1.hasOwnProperty("hide") == true) {
            if (mCurrDta1["hide"] == true) {
              mDivRoot.style.display = "none";
            }
          }

          const mStartE = () => {
            mDivRoot.innerHTML = ""; //reset.. 

            //Tooltip....
            var mTooltip = core_1mn['tooltip']['2'].set(
              {
                "mE1": mDivRoot,
                //"mCallback": mCallback
                "0": {
                  "0": 1,
                  "1": "0 0 0 15%",
                  "2": "rgba(252, 58, 58, 1.0)",
                  "3": "0.3vw"
                },
                "1": {
                  "0": "#fafafa",
                  "1": "0.2vh solid rgba(252, 58, 58, 1.0)",
                },
                "2": {
                  "0": "0 0 -3.8vh -1.5vw",
                  "1": "4.4vh",
                  "2": "15vw",
                },
              });
            // mTooltip['tt'].show(mTooltip['tt']['e']);
            // mTooltip['tt'].hide(mTooltip['tt']['e']);

            //mTopLabelDiv......
            if (mCurrDta1.hasOwnProperty("label") == true) {
              var mTopLabelDiv = document.createElement("div");
              mTopLabelDiv.innerHTML = mCurrDta1['label'];
              mTopLabelDiv.style.textAlign = "start";
              mTopLabelDiv.style.fontSize = "1.2vh";
              mTopLabelDiv.style.color = "rgba(34,34,34,0.6)";
              mDivRoot.appendChild(mTopLabelDiv);
            }


            var mDiv = document.createElement("div");
            mDiv.style.width = mCurrDta1['w'] != undefined ? mCurrDta1['w'] : "100%"; //100%
            mDiv.style.height = mCurrDta1['h'] != undefined ? mCurrDta1['h'] : "4.0vh"; //5vh

            //mDiv.style.margin = "1vh 0";
            mDiv.style.display = "flex";
            mDiv.style.backgroundColor = "#f2f2f2";

            mDiv.style.alignItems = "center";
            //mDiv.style.paddingRight = "0.5vw";

            //mDiv.style.border = "0.3vh solid rgba(34,34,34,0.1)"; //.3
            mDiv.style.border = "0.1vh solid rgba(34,34,34,0.2)"; //.3
            mDiv.style.borderRadius = "0.3vh";
            mDivRoot.appendChild(mDiv);

            //input....
            var mInput = document.createElement("div");
            mInput.id = mCurrDta1['elementID'];
            mInput.setAttribute("value", mCurrDta1['$mUsrData'][Object.keys(mCurrDta1['$mUsrData'])[0]]);


            mInput.style.width = "100%";
            mInput.style.height = "100%";
            mInput.style.outline = "none";
            mInput.style.border = "none";
            mInput.style.padding = "0 0.5vw";
            mInput.style.fontSize = "1.4vh";
            mInput.style.color = "rgba(34,34,34, 0.9)";
            mInput.style.backgroundColor = "transparent";

            //set....
            mInput.setAttribute("dataType", mCurrDta1['dataType']);

            mInput.innerText = mCurrDta1['placeholder'];

            mInput.type = mCurrDta1['dataType'];
            mInput.style.display = "flex";
            mInput.style.alignItems = "center";

            mDiv.appendChild(mInput);


            function mCloseAllDropDown() {
              //First close all dropdowns.....
              var mFormArr = mFormDiv.querySelectorAll("div");
              for (let i1 = 0; i1 < mFormArr.length; i1++) {
                const mCurrDiv = mFormArr[i1];//dropdownID

                var mDropdownID = mCurrDiv.getAttribute("dropdownID");
                if (mDropdownID != null) {
                  //dropdown found......
                  var mSelDropdown = document.getElementById(mDropdownID);
                  mSelDropdown.style.display = "none";
                }
              }


            }

            //events......
            mInput.onclick = function (e) {
              var mCurrItemId = this.id;
              e.stopPropagation();
              var mCurrItem = document.getElementById(mCurrItemId);
              var mDropdownID = mCurrItem.getAttribute("dropdownID");
              var mDropdown = document.getElementById(mDropdownID);

              //alert(mDropdownID)
              mTooltip['tt'].hide(mTooltip['tt']['e']);

              //open or close....(Dropdown)
              if (mDropdown.style.display == "none") {
                mCloseAllDropDown();

                //show current.....
                mDropdown.style.display = "block";
              } else {
                mDropdown.style.display = "none";
              }

              //events.....
              window.onclick = function () {
                if (mDropdown.style.display == "block") {
                  mDropdown.style.display = "none";
                }
              };


            };



            //here we set endIco....
            if (mCurrDta1.hasOwnProperty("endIco") == true) {
              mSet_endIco();
            }
            function mSet_endIco() {
              var mSvgDiv = document.createElement("div");
              mSvgDiv.style.paddingRight = "0.5vw";
              mDiv.appendChild(mSvgDiv);

              //svg.....
              var mSvgCover = core_1mn['mSvg'].set({
                "0": mCurrDta1['endIco']['0'],
                "1": core_1mn['mUniqueId'].mGenerate(61),
                "2": mCurrDta1['endIco']['1'] != undefined ? mCurrDta1['endIco']['1'] : "2vh",
                "3": mCurrDta1['endIco']['2'] != undefined ? mCurrDta1['endIco']['2'] : "2vh",
                "4": mCurrDta1['endIco']['3'] != undefined ? mCurrDta1['endIco']['3'] : "rgba(34,34,34, 0.4)",
                "5": mSvgDiv,
                "cb": {
                  "onClick": (mGetCurrItem) => {
                    //alert("onClick");
                    var mCurrItem = mGetCurrItem;
                    var mInputE = document.getElementById(mCurrItem.getAttribute("e_input_id"));
                    var mSvg = mCurrItem.querySelectorAll("svg")[0];

                    //check IF (password)
                    if (mInputE.getAttribute("dataType") == "password") {
                      //set....
                      if (mInputE.type == "password") {
                        mInputE.type = "text";
                        if (mSvg != null) {
                          mSvg.style.fill = "rgba(34,34,34, 0.8)";
                        }
                      } else {
                        mInputE.type = "password";
                        if (mSvg != null) {
                          mSvg.style.fill = "rgba(34,34,34, 0.4)";
                        }
                      }
                    }


                  }
                }

              });
              mSvgCover.setAttribute("e_input_id", mInput.id);

            }




            if (mCurrDta1.hasOwnProperty("bottomRight") == true) {
              mBottomRight();
            }
            function mBottomRight() {
              if (mCurrDta1['bottomRight']['type'] == "href") {
                var mDivCover = document.createElement("div");
                mDivCover.style.display = "flex";
                mDivCover.style.justifyContent = "end";
                mDivRoot.appendChild(mDivCover);
                //set vars..
                var mCb = mCurrDta1['bottomRight']['cb'];
                function mSend_cb(mCb_name, data) {
                  if (mCb != undefined) {
                    if (mCb[mCb_name] != undefined) {
                      mCb[mCb_name](data);
                    }
                  }
                }

                var mHref = document.createElement("a");
                mHref.id = core_1mn['mUniqueId'].mGenerate(19);
                mHref.href = "javascript:void(0)";
                mHref.style.fontSize = "1.2vh";
                mHref.style.color = "rgba(34,34,34,0.5)";
                mHref.style.fontWeight = "400";
                mHref.innerHTML = mCurrDta1['bottomRight']['txt'];
                mHref.style.textAlign = "end";
                mDivCover.appendChild(mHref);
                //events..
                mHref.onclick = function () {
                  var mCurrItem = this.id;
                  var mCurrItem = document.getElementById(mCurrItem);
                  //send callback..
                  mSend_cb("onClick", { "e": mCurrItem });
                };
              }

            }



            //set time picker......
            mSet_timePicker();
            function mSet_timePicker() {
              var mPickDiv = document.createElement("div");
              mPickDiv.style.display = "none";
              mPickDiv.style.position = "relative";

              mPickDiv.id = core_1mn['mUniqueId'].mGenerate(11);
              //add id to input......
              mInput.setAttribute("dropdownID", mPickDiv.id);
              //add id to dropdown......
              mPickDiv.setAttribute("inputID", mInput.id);

              mPickDiv.style.userSelect = "none";
              mPickDiv.style.zIndex = "1";

              mPickDiv.style.position = "absolute";
              mPickDiv.style.top = "0";
              mPickDiv.style.marginTop = "4.0vh";

              mPickDiv.style.boxShadow = "0 0.5vh 0.5vh 0 rgba(0,0,0,0.2)";
              mPickDiv.style.width = "25vw";
              mPickDiv.style.height = "25vh";
              mPickDiv.style.backgroundColor = "rgba(255,255,255)";
              mPickDiv.style.overflowY = "auto";

              //events....
              mPickDiv.onclick = function (e) {
                e.stopPropagation();
              }

              mDivRoot.appendChild(mPickDiv);



              //--auto sel--//  (--Currently this (Func) just a TEMPORARY Solution--)
              let mAutoSel = (mInput) => {
                if (mInput.getAttribute("value").trim() != "") {
                  let mInputVal = mInput.getAttribute("value").trim();
                  const d = new Date(mInputVal); //"2021-03-25"
                  try {
                    if (typeof d.getTime() !== "number") {
                      //err..
                      return;
                    }
                    //all ok..
                    //show in [Input Field]..
                    mInput.innerHTML = mInputVal;  //d.getTime()
                    /*console.log(d.getDate(), date );
                    console.log(d.getFullYear(), year );
                    console.log(d.getMonth(), month );*/
                    //alert(d.toDateString())
                    //check..
                    /*if (d.getDate() === date
                    && d.getFullYear() === year && d.getMonth() === month ) {
                      console.log(`==mAutoSel==`);
                      mSel(cell);
                    }*/
                  } catch (e) { } //Ignore..
                  //console.log(mInputVal);

                }
              };
              //auto sel..
              mAutoSel(mInput);




              //set vars.....
              let today = new Date();
              let currentHours = ""; //today.getHours(); //return(int) 2
              let currentMinutes = ""; //today.getMinutes(); //return(int) 2
              let mXM = "AM"; //AM || PM
              var mTimePayload = {

                "mSelTime": {
                  "hrs": currentHours,
                  "minutes": currentMinutes,
                  "xm": mXM
                },

                "hrs": [],
                "minutes": [],

              };

              //mGenerateHrs();
              function mGenerateHrs() {
                /*let mTotalHrs = 24;
                var mMinYear = 1980;
                for (let i1 = mMinYear; i1 < currentYear+1; i1++) {
                  mTimePayload['hrs'].push(i1);
                }*/
              }


              //holder..
              var mI_hldr = document.createElement("div");
              mI_hldr.style.width = "100%";
              mI_hldr.style.height = "100%";
              mPickDiv.appendChild(mI_hldr);


              //set items..
              function mSet_i1() {
                var mI = document.createElement("div");
                mI.style.height = "4vh";
                mI.style.display = "flex";
                mI.style.alignItems = "center";
                mI.style.padding = "0 1vw";
                mI_hldr.appendChild(mI);

                //set txt1..
                function mSet_Txt1() {
                  var mTxt = document.createElement("div");
                  mTxt.innerHTML = "Enter time";
                  mTxt.style.fontSize = "1.4vh";
                  mTxt.style.color = "rgba(34,34,34, 1.0)";
                  mI.appendChild(mTxt);

                }
                mSet_Txt1();

              }
              mSet_i1();


              //set vars..
              function mSet_i2() {
                var mI = document.createElement("div");
                mI.style.display = "flex";
                mI.style.justifyContent = "center";
                //mI.style.padding = "0 1vw";
                mI_hldr.appendChild(mI);

                //*FUNCTIONS*//
                function onlyNumberVal(elem) {
                  //set vars..
                  var mStr = elem.value;
                  //console.log(`mStr: ${mStr}`);
                  //vali.. 
                  var mRegex = {
                    "0": new RegExp("[0-9]"),
                    "1": new RegExp("[0-9][0-9]"),
                  };
                  if (mStr.match(mRegex[mStr.length - 1])) {
                    //all ok.. 
                    //no need to (modify)..
                    return true;
                  } else {
                    //error..
                    //remove last (char)..
                    const editedText = mStr.slice(0, -1) //'abcde' ==> 'abcd'
                    elem.value = editedText;
                    return false;
                  }

                }

                //set input..
                function mSet_Txt1() {
                  var mCover = document.createElement("div");
                  mI.appendChild(mCover);

                  //mInput..
                  var mInput = document.createElement("input");
                  mInput.id = core_1mn['mUniqueId']['mGenerate'](14);

                  mInput.placeholder = "00";
                  mInput.style.fontSize = "4.1vh";
                  mInput.style.width = "7vw";
                  mInput.style.height = "7vh";
                  mInput.style.color = "rgba(34,34,34, 1.0)";
                  mInput.style.border = "0.1vh solid rgba(34,34,34,0.2)"; //.3
                  mInput.style.borderRadius = "0.3vh";
                  mInput.style.outline = "none";
                  mInput.style.textAlign = "center";
                  mInput.maxLength = 2;
                  mCover.appendChild(mInput);

                  //events....
                  mInput.onfocus = function () {
                    var mCurrItemId = this.id;
                    var mCurrItem = document.getElementById(mCurrItemId);
                    //set
                    mCurrItem.style.border = "0.1vh solid rgba(34,34,34,0.7)";
                  };
                  mInput.onblur = function () {
                    var mCurrItemId = this.id;
                    var mCurrItem = document.getElementById(mCurrItemId);
                    //set
                    mCurrItem.style.border = "0.1vh solid rgba(34,34,34,0.2)";
                  };
                  mInput.oninput = function () {
                    var mCurrItem = this;
                    //console.log('oninput');
                    var mIsValid = onlyNumberVal(mCurrItem);
                    if (mIsValid == true) {
                      //store..
                      mTimePayload['mSelTime']['hrs'] = mCurrItem.value;
                    }
                  };

                  //Space..
                  core_1mn['space']['set']({
                    "h": "0.3vh",
                    "e1": mCover,
                  });

                  //set lbl1..
                  function mSet_Lbl1() {
                    var mLbl = document.createElement("div");
                    mLbl.innerHTML = "Hour";
                    mLbl.style.fontSize = "1.3vh";
                    mLbl.style.color = "rgba(34,34,34, 0.7)";
                    mCover.appendChild(mLbl);

                  }
                  mSet_Lbl1();


                }
                mSet_Txt1();

                function mSep() {
                  var mSep = document.createElement("div");
                  mSep.style.width = "2.5vh";
                  mSep.style.display = "flex";
                  mSep.style.justifyContent = "center";
                  mSep.style.alignItems = "center";
                  mI.appendChild(mSep);

                  //cover..
                  var mCover = document.createElement("div");
                  mSep.appendChild(mCover);

                  function mDot() {
                    var mD = document.createElement("div");
                    mD.style.width = "0.5vh";
                    mD.style.height = "0.5vh";
                    mD.style.borderRadius = "50%";
                    mD.style.backgroundColor = "rgba(34,34,34, 1.0)";
                    mCover.appendChild(mD);
                  }
                  mDot();

                  //Space..
                  core_1mn['space']['set']({
                    "h": "0.5vh",
                    "e1": mCover,
                  })

                  mDot();

                }
                mSep();

                function mSet_Txt2() {
                  var mCover = document.createElement("div");
                  mI.appendChild(mCover);

                  //mInput..
                  var mInput = document.createElement("input");
                  mInput.id = core_1mn['mUniqueId']['mGenerate'](14);

                  mInput.placeholder = "00";
                  mInput.style.fontSize = "4.1vh";
                  mInput.style.width = "7vw";
                  mInput.style.height = "7vh";
                  mInput.style.color = "rgba(34,34,34, 1.0)";
                  mInput.style.border = "0.1vh solid rgba(34,34,34,0.2)"; //.3
                  mInput.style.borderRadius = "0.3vh";
                  mInput.style.outline = "none";
                  mInput.style.textAlign = "center";
                  mInput.maxLength = 2;
                  mCover.appendChild(mInput);

                  //events....
                  mInput.onfocus = function () {
                    var mCurrItemId = this.id;
                    var mCurrItem = document.getElementById(mCurrItemId);
                    //set
                    mCurrItem.style.border = "0.1vh solid rgba(34,34,34,0.7)";
                  };
                  mInput.onblur = function () {
                    var mCurrItemId = this.id;
                    var mCurrItem = document.getElementById(mCurrItemId);
                    //set
                    mCurrItem.style.border = "0.1vh solid rgba(34,34,34,0.2)";
                  };
                  mInput.oninput = function () {
                    var mCurrItem = this;
                    //console.log('oninput');
                    var mIsValid = onlyNumberVal(mCurrItem);
                    if (mIsValid == true) {
                      //store..
                      mTimePayload['mSelTime']['minutes'] = mCurrItem.value;
                    }
                  };


                  //Space..
                  core_1mn['space']['set']({
                    "h": "0.3vh",
                    "e1": mCover,
                  });

                  //set lbl1..
                  function mSet_Lbl1() {
                    var mLbl = document.createElement("div");
                    mLbl.innerHTML = "Minute";
                    mLbl.style.fontSize = "1.3vh";
                    mLbl.style.color = "rgba(34,34,34, 0.7)";
                    mCover.appendChild(mLbl);

                  }
                  mSet_Lbl1();


                }
                mSet_Txt2();

                //Space..
                core_1mn['space']['set']({
                  "w": "1vw",
                  "e1": mI,
                });

                function mSet_tabs() {
                  var mTabs = document.createElement("div");
                  mTabs.style.border = "0.1vh solid rgba(34,34,34,0.2)";
                  mTabs.style.borderRadius = "0.3vh";
                  mTabs.style.height = "7.2vh";
                  mI.appendChild(mTabs);
                  //set vars..
                  var mDta_tab = {
                    "mVars": {
                      "selTabIdx": 0
                    },
                    "l": [
                      {
                        "0": "AM",
                      },
                      {
                        "0": "PM",
                      },
                    ],
                    "set": function (mCurrItemIdx) {
                      //get old idx..
                      var mOldIdx = mDta_tab['mVars']['selTabIdx'];
                      var mOld_item = mTabs.querySelectorAll("div")[mOldIdx];
                      //set (old)..
                      mOld_item.style.backgroundColor = "transparent";
                      //set (new)..
                      var mCurrIdx = mCurrItemIdx;
                      var mCurrItem = mTabs.querySelectorAll("div")[mCurrIdx];
                      mCurrItem.style.backgroundColor = "rgba(34,34,34,0.07)";
                      //store..
                      mDta_tab['mVars']['selTabIdx'] = parseInt(mCurrItem.getAttribute("item_idx"));
                      //sel..
                      mTimePayload['mSelTime']['xm'] = mDta_tab['l'][mCurrItemIdx]['0'];

                    }
                  };
                  //tab..
                  function mSet_tab(mCurrDta, i1) {
                    var mTab = document.createElement("div");
                    mTab.innerHTML = mCurrDta['0'];
                    mTab.setAttribute("item_idx", i1);

                    mTab.style.width = "4vw";
                    mTab.style.height = "3.6vh";
                    mTab.style.display = "flex";
                    mTab.style.alignItems = "center";
                    mTab.style.justifyContent = "center";
                    if (i1 == 0) {
                      mTab.style.borderBottom = "0.1vh solid rgba(34,34,34,0.2)";
                    }
                    //events..
                    mTab.onclick = function () {
                      var mCurrItem = this;
                      var mCurrItemIdx = parseInt(mCurrItem.getAttribute("item_idx"));
                      mDta_tab.set(mCurrItemIdx);
                    }
                    mTabs.appendChild(mTab);

                  }
                  //gen..
                  for (let i1 = 0; i1 < mDta_tab['l'].length; i1++) {
                    const mCurrDta = mDta_tab['l'][i1];
                    mSet_tab(mCurrDta, i1);
                  }
                  //auto sel..
                  if (mTimePayload['mSelTime']['xm'] == "AM") {
                    mDta_tab['set'](0);
                  } else {
                    mDta_tab['set'](1);
                  }



                }
                mSet_tabs();


              }
              mSet_i2();


              //Space..
              core_1mn['space']['set']({
                "h": "6vh",
                "e1": mI_hldr,
              });

              function mSet_i3() {
                var mI = document.createElement("div");
                mI.style.height = "4vh";
                mI.style.display = "flex";
                mI.style.alignItems = "center";
                mI.style.justifyContent = "end";
                mI.style.padding = "0 2vw";
                mI_hldr.appendChild(mI);

                //set txt1..
                function mSet_Txt1() {
                  var mTxt = document.createElement("div");
                  mTxt.innerHTML = "Cancel";
                  mTxt.style.fontSize = "1.5vh";
                  mTxt.style.color = "rgba(34,34,34, 1.0)";
                  //events..
                  mTxt.onclick = function () {
                    //close.....
                    mCloseAllDropDown();
                  };
                  mI.appendChild(mTxt);

                }
                mSet_Txt1();

                //Space..
                core_1mn['space']['set']({
                  "w": "2vw",
                  "e1": mI,
                });


                //set txt2..
                function mSet_Txt2() {
                  var mTxt = document.createElement("div");
                  mTxt.innerHTML = "OK";
                  mTxt.style.fontSize = "1.5vh";
                  mTxt.style.color = "rgba(34,34,34, 1.0)";
                  //events..
                  mTxt.onclick = function () {
                    //console.log(mTimePayload);
                    var mSelTime = mTimePayload['mSelTime'];
                    //vali..
                    if (mSelTime['hrs'] == "" || mSelTime['minutes'] == "") {
                      console.log(`Error: [timepckr]`);
                      return;
                    }
                    //all ok....
                    //https://www.tutorialspoint.com/converting-12-hour-format-time-to-24-hour-format-in-javascript
                    const mConvTime = (timeStr) => {
                      const [time, modifier] = timeStr.split(' ');
                      let [hours, minutes] = time.split(':');
                      if (hours === '12') {
                        hours = '00';
                      }
                      if (modifier === 'PM') {
                        hours = parseInt(hours, 10) + 12;
                      }
                      return `${hours}:${minutes}:00`;
                    }; //output => HH:MM:SS
                    var mFinalTime = mConvTime(`${mSelTime['hrs']}:${mSelTime['minutes']} ${mSelTime['xm']}`);
                    let mHumanReadableTIME = `${mSelTime['hrs']}:${mSelTime['minutes']} ${mSelTime['xm']}`;
                    //set..
                    var mInput = document.getElementById(mPickDiv.getAttribute("inputID"));
                    mInput.innerText = mHumanReadableTIME;
                    //console.log(`mFinalTime: ${mFinalTime}`);
                    mInput.setAttribute("value", mFinalTime);
                    //close.....
                    mCloseAllDropDown();
                  };
                  mI.appendChild(mTxt);


                }
                mSet_Txt2();

              }
              mSet_i3();




            }



            //****store (elements)
            mCurrDta1['mElemDta'] = {
              "mTooltip": mTooltip,
              "mInputE": mInput
            };


          };
          mStartE(); //default..


        },

        "setDataJSON": (mGetParams) => {
          var mParams = mGetParams;
          var mFormCurrItem = mParams['mFormCurrItem'];
          var mUsrPayload = mParams['mUsrPayload']; //need to (build)
          var mUsrData = mFormCurrItem['$mUsrData'];
          let mSchema = mParams["mSchema"];

          var mErrInfo = {
            "isErr": true,
            "msg": null
          };

          //data....
          var mElemDta = mFormCurrItem['mElemDta'];
          mSet_data();
          function mSet_data() {
            //var mTooltip = mElemDta['mTooltip'];
            var mInputE = mElemDta['mInputE'];
            let mInputVal = mInputE.getAttribute("value");

            //log..
            //console.log(mInputE);
            //----custom validation----//
            if (mInputVal.trim() == "") {
              mInputVal = -1; //it will indicates [json-schema-validator]
            }

            //store (JSON)....
            mAddDtaIn_JSON(0, mInputVal);
          }

          //($mUsrData).....
          function mAddDtaIn_JSON(mKeyI, mVal) {
            var mKey = Object.keys(mUsrData)[mKeyI];
            if (mKey == undefined) {
              //error....(undefined key)
              mErrInfo['msg'] = `error: (undefined key => ${mKey}) found.`;
              return;
            }
            if (mUsrPayload.hasOwnProperty(mKey) == true) {
              //error....(duplicate key)
              mErrInfo['msg'] = `error: (duplicate key => ${mKey}) found.`;
              return;
            }
            //all ok.....
            //mWares..
            let mWares = core_1mn["mForm"]["mUtil"]["mWares"];
            if (mWares.isRequired(mSchema, mKey) == false &&
              mVal == "") {
              //value is not ("")..
              //no need to add..
            } else {
              //store....
              mUsrData[mKey] = mVal;
              //add....
              mUsrPayload[mKey] = mUsrData[mKey];
            }



            /*
            USAGE
            mAddDtaIn_JSON(mKeyI, mVal);
            */
          }
          //set vars....
          return mErrInfo['msg'] == null ? true : mErrInfo; //true || mErrInfo
        }

      },

      //Checkbox (Field)
      "cbox": {

        "set": (mP={
          "e": HTMLElement,
          "data": {},
          "cover": null,  //#[not tested yet for direct usage]
          "sch_json": {} //#[not tested yet for direct usage]
        }) => {
          //set vars..
          let mFormDiv = mP["e"];
          let mCurrDta1 = mP["data"];
          let mG_cover = mP.hasOwnProperty("cover")?mP["cover"]:null;
          let mSchemaJSON = mP.hasOwnProperty("sch_json")?mP["sch_json"]:{};

          /*
          USAGE
                         {
                            "elementID": core_1mn['mUniqueId'].mGenerate(11),
                            "type": "cbox",
                            "label": "Agree",
                            "$mUsrData": {
                                "mCbox1": false,
                            },
                            "flags":
                             //eg => User will not be able to do these actions
                             [], //Expected values = ["untick::disable", "tick::disable"]
 
                            "$mLogic": {
                                "mMatchWith": [
                                    "mName",
                                ]
                            },

                            "reload": () => {},

                            "m_ware": {
                              "onTick": () => {
                                return true; || return false;
                              }
                            },

                            //cb..
                            "cb": {
                              "onTick": function(){
                              },
                              "onUnTick": function(){
                              }
                            },

                             
                        },
          */


            //reload..
            if (mCurrDta1["reload"] != undefined) {
              mCurrDta1["reload"] = () => {
                mStartE();
              }
            }  
            
            //set..
            var mDivRoot = document.createElement("div");
            //mDivRoot.style.width = "100%";
            mDivRoot.style.position = "relative";
            mFormDiv.appendChild(mDivRoot);


          let mStartE = () => {
            mDivRoot.innerHTML = ""; //reset.. 

          //set vars..
          if (mCurrDta1.hasOwnProperty("flags") == false) {
            mCurrDta1["flags"] = []; //create empty
          }

          //check (hide)..
          if (mCurrDta1.hasOwnProperty("hide") == true) {
            if (mCurrDta1["hide"] == true) {
              mDivRoot.style.display = "none";
            }
          }

          //Tooltip....
          var mTooltip = core_1mn['tooltip']['2'].set(
            {
              "mE1": mDivRoot,
              //"mCallback": mCallback
              "0": {
                "0": 1,
                "1": "0 0 0 15%",
                "2": "rgba(252, 58, 58, 1.0)",
                "3": "0.3vw"
              },
              "1": {
                "0": "#fafafa",
                "1": "0.2vh solid rgba(252, 58, 58, 1.0)",
              },
              "2": {
                "0": "0 0 -3.8vh -1.5vw",
                "1": "4.4vh",
                "2": "15vw",
              },
            });
          // mTooltip['tt'].show(mTooltip['tt']['e']);
          // mTooltip['tt'].hide(mTooltip['tt']['e']);

          //send cb..
          let mSend_cb = (cb_name, data) => {
            if (mCurrDta1["cb"] != undefined) {
              if (mCurrDta1["cb"][cb_name] != undefined) {
                mCurrDta1["cb"][cb_name](data);
              }
            }
          };


          //mDiv..
          var mDiv = document.createElement("div");
          mDiv.style.width = mCurrDta1['w'] != undefined ? mCurrDta1['w'] : "100%"; //100%
          mDiv.style.height = mCurrDta1['h'] != undefined ? mCurrDta1['h'] : "4.0vh"; //5vh
          //mDiv.style.margin = "1vh 0";
          mDiv.style.display = "flex";
          mDiv.style.alignItems = "center";
          //mDiv.style.paddingRight = "0.5vw";
          mDivRoot.appendChild(mDiv);
          //events..
          let mClc_mDiv = () => {
            if (mEvents["e"].getAttribute("m_tick") == "false") {
              //need to tick..
              //check..
              if (mCurrDta1.hasOwnProperty("m_ware")) {
                if (mCurrDta1["m_ware"].hasOwnProperty("onTick")) {
                   if (mCurrDta1["m_ware"]["onTick"]()==false) {
                    let msg = `stopped by [m_ware.onTick]`;
                    console.log(msg);
                    return; //stop
                   }
                }
              }
              //all ok..
              mEvents.tick();
              //send cb..
              mSend_cb("onTick", {});


            } else {
              //check..
              if (mCurrDta1["flags"].indexOf("untick::disable") !== -1) {
                console.log(`via [onClick]..disabled because of [flags=untick::disable]`);
                return; //stop
              }
              //all ok..
              mEvents.untick();
              //send cb..
              mSend_cb("onUnTick", {});

            }
          };
          mDiv.onclick = () => {
            mClc_mDiv();
          };



          //input....
          var mEvents = core_1mn["mForm"]["mUtil"]["checkbox"].get();
          mEvents["e"].id = mCurrDta1['elementID'];
          if (mCurrDta1['$mUsrData'][Object.keys(mCurrDta1['$mUsrData'])[0]] == true) {
            mEvents.tick();
            //send cb..
            mSend_cb("onTick", {});
          }
          if (mCurrDta1['$mUsrData'][Object.keys(mCurrDta1['$mUsrData'])[0]] == false) {
            //send cb..
            mSend_cb("onUnTick", {});
          }


          mDiv.appendChild(mEvents["e"]);

          //Space.....
          core_1mn['space'].set({
            "w": "0.5vw",
            "e1": mDiv,
          });

          //label..
          if (mCurrDta1.hasOwnProperty("label") == true) {
            //mTopLabelDiv......
            var mTopLabelDiv = document.createElement("label");
            mTopLabelDiv.htmlFor = mEvents["e"].id;
            mTopLabelDiv.innerHTML = mCurrDta1['label'];
            mTopLabelDiv.style.textAlign = "start";
            mTopLabelDiv.style.fontSize = "1.6vh";
            mTopLabelDiv.style.color = "rgba(34,34,34, 0.9)";
            mDiv.appendChild(mTopLabelDiv);
          }



          //****store (elements)
          mCurrDta1['mElemDta'] = {
            "mTooltip": mTooltip,
            "mInputE": mEvents //mInput //mEvents["e"]
          };


          };

          mStartE(); //default..



        },

        "setDataJSON": (mGetParams) => {
          var mParams = mGetParams;
          var mFormCurrItem = mParams['mFormCurrItem'];
          var mUsrPayload = mParams['mUsrPayload']; //need to (build)
          var mUsrData = mFormCurrItem['$mUsrData'];
          var mErrInfo = {
            "isErr": true,
            "msg": null
          };

          //data....
          var mElemDta = mFormCurrItem['mElemDta'];
          mSet_data();
          function mSet_data() {
            //var mTooltip = mElemDta['mTooltip'];
            let mInputE = mElemDta['mInputE'];
            let mInputVal = mInputE.isTick; //true || false

            /*console.log(`mInputVal:
            ${mInputVal}`);
            return;*/

            //store (JSON)....
            mAddDtaIn_JSON(0, mInputVal); //mInputE.value
          }

          //($mUsrData).....
          function mAddDtaIn_JSON(mKeyI, mVal) {
            var mKey = Object.keys(mUsrData)[mKeyI];
            if (mKey == undefined) {
              //error....(undefined key)
              mErrInfo['msg'] = `error: (undefined key => ${mKey}) found.`;
              return;
            }
            if (mUsrPayload.hasOwnProperty(mKey) == true) {
              //error....(duplicate key)
              mErrInfo['msg'] = `error: (duplicate key => ${mKey}) found.`;
              return;
            }
            //all ok.....
            //store....
            mUsrData[mKey] = mVal;
            //add....
            mUsrPayload[mKey] = mUsrData[mKey];

            /*
            USAGE
            mAddDtaIn_JSON(mKeyI, mVal);
            */
          }
          //set vars....
          return mErrInfo['msg'] == null ? true : mErrInfo; //true || mErrInfo
        }




      },


      //Any custom code [create fld with your custom code]
      //Note: we will add more features in future..
      "custom": {

        "set": (mP={
          "e": HTMLElement,
          "data": {},
          "cover": null,  //#[not tested yet for direct usage]
          "sch_json": {} //#[not tested yet for direct usage]
        }) => {
          //set vars..
          let mFormDiv = mP["e"];
          let mCurrDta1 = mP["data"];
          let mG_cover = mP.hasOwnProperty("cover")?mP["cover"]:null;
          let mSchemaJSON = mP.hasOwnProperty("sch_json")?mP["sch_json"]:{};

          /*
          USAGE
                         {
                            "elementID": core_1mn['mUniqueId'].mGenerate(11),
                            "type": "custom",
                            "w": "10vh",  //width
                            "h": "5vh",   //height
                            "xcode": {   //xcode..by using it you can pass your existing code (see => @xcode [For more info])
                              "html": ``, //Your html code
                              "css": ``,  //Your css code
                              "js": ``,  //Your js code
                              "dom": () => {return DOM;} || DOM, //Your DOM eg => document.createElement("div")
                            },

                            "$mUsrData": {
                              "YOUR_JSON_KEY": "", //you can return this value..and build a payload (auto) with our [Form System]
                            },

                          },

          */

          //set vars..
          if (mCurrDta1.hasOwnProperty("xcode") == false) {
            throw `err: [xcode] is required`;
          }
          //all ok..        



          //reload..
          if (mCurrDta1["reload"] != undefined) {
            mCurrDta1["reload"] = () => {
              mStartE();
            }
          }
          //start elem..        
          let mDivRoot = document.createElement("div");
          //mDivRoot.style.width = "100%"; //100%  (deprecated)
          //mDivRoot.style.margin = "1vh 0";
          mDivRoot.style.position = "relative";
          mFormDiv.appendChild(mDivRoot);

           


          //check (hide)..
          if (mCurrDta1.hasOwnProperty("hide") == true) {
            if (mCurrDta1["hide"] == true) {
              mDivRoot.style.display = "none";
            }
          }


          //-------events------//
          if (mCurrDta1["events"] != undefined) {
            if (mCurrDta1["events"].hasOwnProperty("hide") == true) {
              //hide..
              mCurrDta1["events"]["hide"] = () => {
                mDivRoot.style.display = "none";
              }
            }
            if (mCurrDta1["events"].hasOwnProperty("show") == true) {
              //show..
              mCurrDta1["events"]["show"] = () => {
                mDivRoot.style.display = "block";
              }
            }
          }


          //mStartE..
          const mStartE = () => {
            mDivRoot.innerHTML = ""; //reset..  


            //mDiv..
            let mDiv = document.createElement("div");
            mDiv.style.width = mCurrDta1['w'] != undefined ? mCurrDta1['w'] : "100%"; //100%
            mDiv.style.height = mCurrDta1['h'] != undefined ? mCurrDta1['h'] : "4.0vh"; //5vh
            //mDiv.style.margin = "1vh 0";
            //mDiv.style.backgroundColor = "#f2f2f2";
            mDiv.style.display = "flex";
            mDiv.style.alignItems = "center";
            mDivRoot.appendChild(mDiv);

            //input....
            let mInput = document.createElement("div");
            mInput.id = mCurrDta1['elementID'];
            mDiv.appendChild(mInput);
            //--New--//
            if (mCurrDta1['w'] != undefined) {
              mInput.style.width = mCurrDta1['w'];
            }
           


            //set..
            let mSet_l = (mE, mXcode) => {
              //set vars..
              let mRndr = {
                "utils": {},
                "l": {
                  "dom": {
                    "set": (mV) => {
                      //set vars..
                      let mDom = mV();
                      //set..
                      mE.appendChild(mDom);
                    }
                  }
                }
              };

              //check and set..
              if (mXcode.hasOwnProperty("dom")) {
                if (typeof mXcode["dom"] === "function") {
                  mRndr.l.dom.set(mXcode["dom"]);
                }
              }

            };
            mSet_l(mInput, mCurrDta1["xcode"]);




            //--Note: Currenty we are not using it..But in future we will apply all Validations rules--//
            //****store (elements)
            mCurrDta1['mElemDta'] = {
              "mTooltip": null, //mTooltip
              "mInputE": mInput
            };



          }
          mStartE();

        },



      },




    },

    "mB": { //builder.....

      "set": (mGetParams) => {
        var mParams = mGetParams;
        var mArr1 = mParams['mArr1']; //core_1mn['mForm']['mDta']['f'] (sample)
        var mArr1_temp = [];
        //mFormSetting....
        var mFromSett = mParams['0'] != undefined ? mParams['0'] : {}; //From Setting
        //cb....
        var mCb = mParams['cb'] != undefined ? mParams['cb'] : null; //callback
        //form
        var mF_orien = mParams['orien'] != undefined ? mParams['orien'] : "v"; //orien..
        var mF_hs = mParams['hs'] != undefined ? mParams['hs'] : "space-between"; //horizontal-space..

        //mReadonly..
        let mReadonly = mParams["readonly"] != undefined ? mParams["readonly"] : false;
        //console.log( mReadonly);


        //mSchema..(JSON-Schema)
        let mSchemaJSON = mParams["schema"] != undefined ? mParams["schema"] : {};
        /*console.log(`=====mForm.mB.schema=====`);
        console.log(mSchemaJSON);*/


        //set vars......
        var mFormHolder = document.createElement("div");
        mFormHolder.setAttribute("tag_n", "form_holder");
        mFormHolder.style.userSelect = 'none';
        //set....
        mFormHolder.style.width = mFromSett['0'] != undefined ? mFromSett['0'] : "100%"; //width
        if (mFromSett['1'] != undefined) {
          mFormHolder.style.height = mFromSett['1']; //height
        }
        mFormHolder.style.padding = mFromSett['2'] != undefined ? mFromSett['2'] : "0"; //padding  (T R B L) //eg. => 3vh 4vw 0 4vw
        if (mF_orien == "h") {
          mFormHolder.style.display = "flex";
          mFormHolder.style.justifyContent = mF_hs;
        }

        //set..
        if (mFromSett.hasOwnProperty("3")) {
        mFormHolder.style.overflowY = `${mFromSett["3"]}`;
        }





        //here we map (vertical & horizontal) LAYOUT
        mSet_h_v();
        function mSet_h_v() {
          for (let i1 = 0; i1 < mArr1.length; i1++) {
            const mCurrI = mArr1[i1];

            //vali....
            var mOrien = mCurrI['orien'];
            var m_hs = mCurrI['hs'];
            var mFieldList = mCurrI['mFieldList'];
            var mCover = mCurrI['cover'];
            let mSpace1 = "1.0vh";
            //set..
            let mW = mCurrI['w']; //width

            //mWrap..
            let mWrap = mCurrI['wrap']; //wrap


            //mHide..
            let mHide = mCurrI["hide"] != undefined ? mCurrI["hide"] : false;
            //console.log(`mHide: ${mHide}`);


            //set..
            if (mOrien != "v" && mOrien != "h") {
              //error....
              mSend_err({ "msg": `error: value of (orien) must be (v || h)` });
              return;
            }
            if (Array.isArray(mFieldList) != true) {
              //error....
              mSend_err({ "msg": `error: key (mFieldList) has invalid value.` });
              return;
            }

            //all ok (continue)..
            var mElemHolder = document.createElement("div");
            mElemHolder.setAttribute("tag_n", "mfield_cover");
            mElemHolder.style.display = mOrien == "v" ? "block" : "flex";
            if (mOrien == "h") {
              mElemHolder.style.justifyContent = m_hs;
              //flex..[--NEW--] 
              if (mWrap == true) {
              mElemHolder.style.flexWrap = `wrap`;
              }

              
            }
            if (mHide == true) {
              //mArr1[YOUR_IDX][mFieldList] (will be hidden)
              mElemHolder.style.display = "none";
            }
            //cover..
            function mSet_cover() {
              mElemHolder.style.backgroundColor = "#f2f2f2";
              mElemHolder.style.border = "0.1vh solid rgba(34,34,34,0.2)";
              mElemHolder.style.borderRadius = "0.3vh";
            }
            if (mCover != undefined) {
              mSet_cover();
            }

            //w..
            if (mW!=undefined) {
              mElemHolder.style.width = `${mW}`;
            }
            


            mFormHolder.appendChild(mElemHolder);



            //generate....
            var mIsGenerate = mGenerate(mFieldList, mElemHolder, mOrien, mCover);
            if (mIsGenerate != true) {
              //error.....
              return;
            } else {
              //generated.. 
              if (mArr1.length > 1) {
                //Add Space..
                core_1mn['space'].set({
                  "h": mSpace1,
                  "e1": mFormHolder,
                });
              }
              //space-right..
              if (mCurrI['sr'] != undefined) {
                core_1mn['space'].set({
                  "w": mCurrI['sr'] != "" ? mCurrI['sr'] : mSpace1,
                  "e1": mFormHolder,
                });
              }
            }

          }


          //****all done.....  
          mParams['mArr1'] = mArr1_temp;
          mArr1_temp = []; //reset....
          mSend_onload({ "mFormHolder": mFormHolder });



        }

        //generate.....
        //mGenerate();
        function mGenerate(mGetArr, mElemHolder, mOrien, mCover) {
          //here we generate form data....
          for (let i1 = 0; i1 < mGetArr.length; i1++) {
            const mCurrI = mGetArr[i1];


            //store....(ARRAY)
            mArr1_temp.push(mCurrI);

            //vali....
            if (mCurrI.hasOwnProperty("type") == false) {
              //error....
              mSend_err({ "msg": `error: key (type) is required param.` });
              return;
            }
            if (mCurrI.hasOwnProperty("mElemDta") == true) {
              //error....
              mSend_err({ "msg": `error: key (mElemDta) is a reserved (key)` });
              return;
            }
            if (mCurrI.hasOwnProperty("$mUsrData") == false) {
              //error....
              mSend_err({ "msg": `error: key ($mUsrData) is required param.` });
              return;
            }


            //set vars....
            var mType = mCurrI['type'];
            //check....
            if (core_1mn['mForm']['mR'].hasOwnProperty(mType) == false) {
              //invalid....
              mSend_err({ "msg": `error: invalid value: [${mType}] of (type)` });
              return;
            }

            //--set (conf).. [Fields]--//
            if (mCurrI.hasOwnProperty("readonly") == false) {
              //(field) has not assigned [readonly]..prop. So we are adding Global (default) [readonly] prop
              mCurrI["readonly"] = mReadonly;
            }
            //console.log( mCurrI["readonly"]);


            //all ok....
            //valid....
            //core_1mn['mForm']['mR'][mType].set(mElemHolder, mCurrI, mCover, mSchemaJSON); //--OLD--//
            core_1mn['mForm']['mR'][mType].set({
              "e": mElemHolder,
              "data": mCurrI,
              "cover": mCover,
              "sch_json": mSchemaJSON
            }); //--NEW--//

            //check.. [if element is hide]
            let mIsElemHide = () => {
              //check (hide)..
              if (mCurrI.hasOwnProperty("hide") == true) {
                if (mCurrI["hide"] == true) {
                  return true;
                }
              }
              return false;
            };

            //check and create (space).....
            //Space..... 
            if (mOrien == "h" && i1 < (mGetArr.length - 1)) {
              if (mIsElemHide() == false) {
                core_1mn['space'].set({
                  "w": "0.6vw",
                  "e1": mElemHolder,
                });
              }
            }



          }


          //all ok....
          //continue.....
          return true;



        }

        //callback....
        //error..
        function mSend_err(mErr) {
          if (mCb != undefined) {
            if (mCb['mOnError'] != undefined) {
              //send....
              mCb.mOnError(mErr);
            }
          }
        };
        //onload..
        function mSend_onload(mRes) {
          if (mCb != undefined) {
            if (mCb['mOnLoad'] != undefined) {
              //send....
              mCb.mOnLoad(mRes);
            }
          }
        };




        //USAGE
        /*            let mFormBuilder = {
                           "mArr1": [

                            {
                                 "orien": "v",
                                 "w": `100%`,    //width
                                 "mFieldList": [

                                 ]
                            },

                            {
                                 "orien": "h",
                                 "mFieldList": [

                                 ]

                                 ------OR------
                                  "hide": true
                                  "orien": "h",

                                  "wrap": true, //flexWrap

                                  "sr": "1vw", //space-right..
                                  "cover": { //it will cover all (mFieldList)..
                                  },
                                 "mFieldList": [

                                 ]
                            }

                           ], //(mArr1) later will be updated (*Do not place variable here instead place direct (ARRAY) )
                           "0": {
                            "0": "100%",           //width
                            "1": "32vh",           //height
                            "2": "3vh 4vw 0 4vw",   //padding
                            "3": "auto"             //overflowY
                          },
                          "orien": "h",
                          "hs": "start",

                          //https://www.w3schools.com/tags/att_input_readonly.asp
                          "readonly": true, //(default (false)) [if=>true then (not editable)] [if=>false then (editable)]


                        "cb": {
                            "mOnLoad": (mGetParams) => {
                                var mParams = mGetParams;
                                var mFormHolder = mParams['mFormHolder'];
                                mHoriDiv1.appendChild(mFormHolder); 
                            },
                            "mOnError": (mGetParams) => {
                                var mParams = mGetParams;
                                console.log(mParams);
                            },
                        },

                        //schema..[JSON-Schema] (Can we used for --Auto Implement validation Rules on UI fields [Real-Time]--)
                        "schema": mSchema

                     };
                     core_1mn['mForm']['mB'].set(mFormBuilder);*/



      },

    },

    "mV": { //validator.....

      "set": (mGetParams) => {
        var mParams = mGetParams;
        var mFormPayload = mParams['form_payload'];
        var mSchema = mParams['schema'];
        var mUsrPayload = {};
        //cb....
        var mCb = mParams['cb'] != undefined ? mParams['cb'] : null; //callback

        //console.log(mFormPayload);

        //filter (mFormPayload)..
        const mFilter_FP = (mArr1) => {
          //--OLD--//   
          /*
          Note: In Old Approach.. "mFormPayload.splice(i1, 1);" that method does not work as expected
          1- That's why we have a bug in ($mUsrDataCONF.returnDta)..
          */
          //gen
          /*for (let i1 = 0; i1 < mArr1.length; i1++) {
            const mCurrDta1 = mArr1[i1];
            //console.log(mCurrDta1);
            //console.log(JSON.stringify(mCurrDta1["$mUsrData"], null, 2));

            //disable..[custom]
            if (mCurrDta1["type"]=="custom") {
               console.warn(`Vali..not implemented for [type=custom], so we are skipping..`);
               mFormPayload.splice(i1, 1);
            }

            //remove (if)..
            if (mCurrDta1["$mUsrDataCONF"]!=undefined) {
              if (mCurrDta1["$mUsrDataCONF"]["returnDta"]!=undefined) {
                if (mCurrDta1["$mUsrDataCONF"]["returnDta"]==false) {
                    //(remove) no need to store.. [if=>false ($mUsrData) will not return data]
                    mFormPayload.splice(i1, 1);
                    //return;  //----Need to test-----//  --OLD-- (return)
                }
              }
            }
          }*/


          //--NEW--//
          //set vars..
          let mNew = [];
          for (let i1 = 0; i1 < mArr1.length; i1++) {
            const mCurrDta1 = mArr1[i1];
            //console.log(mCurrDta1);
            //console.log(JSON.stringify(mCurrDta1["$mUsrData"], null, 2));
            //set vars..
            let mIsNeedToStore = true;

            //disable..[custom]
            if (mCurrDta1["type"] == "custom") {
              console.warn(`Vali..not implemented for [type=custom], so we are skipping..`);
              //mFormPayload.splice(i1, 1);
              mIsNeedToStore = false;
            }

            //remove (if)..
            if (mCurrDta1["$mUsrDataCONF"] != undefined) {
              if (mCurrDta1["$mUsrDataCONF"]["returnDta"] != undefined) {
                if (mCurrDta1["$mUsrDataCONF"]["returnDta"] == false) {
                  //(remove) no need to store.. [if=>false ($mUsrData) will not return data]
                  //mFormPayload.splice(i1, 1);
                  mIsNeedToStore = false;
                  //return;  //----Need to test-----//  --OLD-- (return)
                }
              }
            }


            //check & store..
            if (mIsNeedToStore == true) {
              mNew.push(mCurrDta1);
            }

          }

          //store..
          mFormPayload = mNew;


        };
        mFilter_FP(mFormPayload);

        //--log--//
        //console.log(mFormPayload);

        //here we set usr payload.....
        mSet_usrPayload();
        function mSet_usrPayload() {

          for (let i1 = 0; i1 < mFormPayload.length; i1++) {
            const mCurrI = mFormPayload[i1];
            //set vars....
            if (mCurrI['type'] == undefined) {
              //error....
              mSend_err({ "msg": "error: " + "required @param (type) is missing." });
              return;
            }
            if (core_1mn['mForm']['mR'].hasOwnProperty(mCurrI['type']) == false) {
              //error....
              mSend_err({ "msg": `error: invalid value [type :${mCurrI['type']}]` });
              return;
            }
            //all ok.....
            var setDataJSON = core_1mn['mForm']['mR'][mCurrI['type']]['setDataJSON'];
            if (setDataJSON == undefined) {
              //error....
              mSend_err({ "msg": `error: (setDataJSON) not found for [type :${mCurrI['type']}]` });
              return;
            }
            var mUsrData = setDataJSON({
              "mFormCurrItem": mCurrI,
              "mUsrPayload": mUsrPayload,
              "mSchema": mSchema,
              "returnHTML": mParams["returnHTML"]
            });
            if (mUsrData.hasOwnProperty("isErr") == true) {
              //error....
              mSend_err({ "msg": mUsrData });
              return;
            }
            //console.log(mUsrData);

            //**check custom ($mLogic)
            function mCheck_logic() {
              var mLogic = mCurrI['$mLogic']; //@optional
              if (mLogic == undefined) {
                //ignore....
                return true;
              }
              var mElemDta = mCurrI['mElemDta'];
              var mInputE = mElemDta['mInputE'];
              //set vars....
              var mMatchWith = mLogic['mMatchWith'];
              var mErrInfo = {
                "isErr": true,
                "msg": null
              };

              if (mMatchWith != undefined && Array.isArray(mMatchWith) == true) {
                mSet_matchWith();
              }
              function mSet_matchWith() {
                for (let iC1 = 0; iC1 < mMatchWith.length; iC1++) {
                  const mCurr_iC1 = mMatchWith[iC1];
                  //console.log(mCurr_iC1);

                  var mArr = mFormPayload;
                  var mInstancePath = mCurr_iC1;
                  const found = mArr.find(elem => elem['$mUsrData'].hasOwnProperty(mInstancePath) == true);
                  if (found == undefined) {
                    //error.....
                    mErrInfo['msg'] = `error: ($mLogic) has invalid [value: ${mInstancePath}]`;
                    return;
                  }

                  //**all ok.... 
                  //lets compare....
                  var mCurrInputDta = mInputE.value.trim();
                  var mFoundInputDta = found['mElemDta']['mInputE'].value.trim();
                  if (mCurrInputDta != "" && mFoundInputDta != "") {
                    if (mCurrInputDta === mFoundInputDta) {
                      //success....(continue)
                      //console.log("success: both are same");
                    } else {
                      //failed (not matched)
                      mErrInfo['msg'] = `${mCurrI['label']}: not matched with ${found['label']}`;
                      //now....we display (err)
                      mShowTt(mErrInfo['msg'], mElemDta);
                      return;
                    }
                  } else {
                    //ignored....
                  }

                }
              }

              //check and set....
              return mErrInfo['msg'] == null ? true : mErrInfo;

            }
            var mLogicRes = mCheck_logic();
            if (mLogicRes == true) {
              //continue......
            } else {
              //error....
              mSend_err({ "msg": mLogicRes['msg'] });
              return;
            }




            //all ok..... 
            //continue....
            //console.log(mCurrI);

          }

          //all ok..... 
          //continue....
          mVali();

        }

        //here we validate data....
        function mVali() {
          //console.log(mUsrPayload);
          /*--OLD--
          //JSON Schema (validation)
          var mValiRes = core_1mn['mVali']['mSchemaJSON'].set({
            "schema": mSchema,
            "usr_payload": mUsrPayload,
          });
          */

          let mStart = (mValiRes) => {

          if (mValiRes.hasOwnProperty("isErr") == true) {
            //error.....
            mOn_err();
            return;
          }

          //events.....
          function mOn_err() {
            //set..
            mSend_err({ "msg": `${mValiRes['msg']}` });
            //set vars......
            var mErrObj = mValiRes['mErrObj'];
            //log..
            console.log(mErrObj);
            if (mErrObj == undefined) {
              //error (unexpected)
              mSend_err({ "msg": `error: unexpected` });
              return;
            }

            //all ok.... 
            mSet_errMSG();
            function mSet_errMSG() {
              var mInstancePath = mErrObj['instancePath'];
              if (mInstancePath == undefined || mInstancePath.trim() == "") {
                //error 
                mSend_err({ "msg": `error: (instancePath) is undefined` });
                return;
              }
              if (mInstancePath.charAt(0) == "/") {
                mInstancePath = mInstancePath.substring(1,
                  mInstancePath.length
                ); //(remove /)

                if (mInstancePath.match("/") != null) {
                  if (mInstancePath.match("/").length > 0) {
                    mInstancePath = mInstancePath.substring(0, mInstancePath.indexOf("/")); //(get first word before (/))
                  }
                }

              }
              var mArr = mFormPayload;
              const found = mArr.find(elem => elem['$mUsrData'].hasOwnProperty(mInstancePath) == true);
              if (found == undefined) {
                //error....
                mSend_err({ "msg": `error: (instancePath) is not able to find (field)` });
                return;
              }

              //all ok.....
              //console.log(found);
              //console.log(mErrObj);
              //**set vars.....
              var mFormCurrItem = found;
              var mElemDta = mFormCurrItem['mElemDta'];
              var mMsgTxt = mErrObj['message'] != undefined ? (`${mFormCurrItem['label']}: ${mErrObj['message']}`) : "Something went wrong!";
              mShowTt(mMsgTxt, mElemDta);

            }

          }

          //******all ok....(continue)
          //console.log("VALID DATA");
          mSend_onload({ "usr_payload": mUsrPayload });



          };

          //--NEW--//
          //JSON Schema (validation)
          core_1mn['mVali']['mSchemaJSON'].set({
            "schema": mSchema,
            "usr_payload": mUsrPayload,
          }, {
            "onLoad": (mValiRes) => {
              mStart(mValiRes);
            },
            "onErr": (mValiRes) => {
              mStart(mValiRes);
            }
          });
          


        }

        //events.....
        function mShowTt(mMsgTxt, mElemDta) {
          var mTooltip = mElemDta['mTooltip'];
          //Init (note).... 
          var mMsgDiv = core_1mn['notes']['2'].set({
            "ico1": {
              "0": "exclamation_0.svg",
              "1": "1.6vh",
              "2": "1.6vh",
              "3": "rgba(252, 58, 58, 1.0)",
            },
            "txt1": {
              "0": mMsgTxt,
              "1": "1.2vh",
              "3": "0 0 0 0.2vw"
            },
          });





          //**Show.....
          mTooltip['tt'].show(mTooltip['tt']['e'], mMsgDiv);


        }


        //callback....
        //error..
        function mSend_err(mErr) {
          if (mCb != undefined) {
            if (mCb['mOnError'] != undefined) {
              //send....
              mCb.mOnError(mErr);
            }
          }
        }
        //onload..
        function mSend_onload(mRes) {
          if (mCb != undefined) {
            if (mCb['mOnLoad'] != undefined) {
              //send....
              mCb.mOnLoad(mRes);
            }
          }
        }


        /*
        USAGE
        core_1mn['mForm']['mV'].set({
                                  "form_payload": mFormPayload_Test,  //eg => mFormBuilder["mArr1"]
                                  "schema": schema_test,    //{} || {WITH_SCH_STANDARD_VAL}
                                  //"returnHTML": true         //@See => core_1mn["mForm"]["mR"] {--Global USAGE params (of all type)--} [$mUsrDataCONF["returnHTML"]]
                                  "cb": {
                                      "mOnLoad": (mGetParams) => {
                                          //validation is success....
                                          var mParams = mGetParams;
                                          var mUsrPayload = mParams['usr_payload'];
                                          console.log(mUsrPayload);
                                      },
                                      "mOnError": (mGetParams) => {
                                          var mParams = mGetParams;
                                          console.log(mParams);
                                      },
                                  }
                              });
        */


      }

    },


    //gen.. [We will auto generate from (json-schema)]
    "mGen": { //generate..
      "set": (mP={
        "e": document.body,
        "schema": {},
        //"payload": {}   //it will be generated by [auto]..
      }, mCb={
        "onPayloadUpdate": (mP={"payload":{}}) => {}
      }) => {
        //set vars..
        let mDta_main = {
          "gVars": {
            "payload": {},
            "schema": mP["schema"],
            "key0": `$__mn__$`,  //Custom-Key for [json-schema]
            "cb": {
              "onPayloadUpdate": (mV) => {
                let mSend = () => {
                  if (mCb.hasOwnProperty("onPayloadUpdate")) {
                    mCb.onPayloadUpdate({
                      "payload": mV
                    });
                  }
                }; 
                //JSON Schema (validation)
                core_1mn['mVali']['mSchemaJSON'].set({
                  "strict": false,
                  "schema": mDta_main.schema.get(),
                  "usr_payload": mV,
                }, {
                  "onLoad": (mValiRes) => {
                    mSend();
                  },
                  "onErr": (mValiRes) => {
                     console.error(`err: onPayloadUpdate`);
                  },
                });  
 
              }
            },
            "pathArray": { //PathArray Json-Schema
              "l": [],
              "get": () => {
                return mDta_main.gVars.pathArray.l;
              },
              "set": (mI) => {
                //check if already exists..
                let mF = mDta_main.gVars.pathArray.get().filter(eF => eF["onEach"]["e"]["path"]==mI["onEach"]["e"]["path"]);
                if (mF.length>0) {
                  return;//Stop..
                }
                //all ok..
                mDta_main.gVars.pathArray.l.push(mI);

              },
            },
          },
          "schema": {
            "get": () => {
              return mDta_main["gVars"]["schema"];
              return {
                "definitions": {},
                "$schema": "http://json-schema.org/draft-07/schema#", 
                "$id": "https://example.com/object1695108890.json", 
                "title": "", 
                "type": "object",
                "required": [
                  "name",
                  "age",
                  "address",
                  "fun",
                  "items",
                  "a"
                ],
                "properties": {
                  "name": {
                    "$id": "/name", 
                    "$path": "/name", 
                    "title": "Name", 
                    "type": "string",
                    "default": "",
                    "examples": [
                      ""
                    ],
                    "pattern": "^.*$"
                  },
                  "age": {
                    "$id": "/age", 
                    "$path": "/age", 
                    "title": "Age", 
                    "type": "string",
                    "default": "",
                    "examples": [
                      ""
                    ],
                    "pattern": "^.*$"
                  },
                  "address": {
                    "$id": "/address", 
                    "$path": "/address", 
                    "title": "Address", 
                    "type": "array",
                    "default": [],
                    "0":{
                      "$id": "/address/0", 
                      "$path": "/address/0", 
                      "title": "0", 
                      "type": "object",
                      "required": [
                        "add",
                        "child_add"
                      ],
                      "properties": {
                        "add": {
                          "$id": "/address/0/add", 
                          "$path": "/address/0/add", 
                          "title": "Add", 
                          "type": "string",
                          "default": "",
                          "examples": [
                            ""
                          ],
                          "pattern": "^.*$"
                        },
                        "child_add": {
                          "$id": "/address/0/child_add", 
                          "$path": "/address/0/child_add", 
                          "title": "Child_add", 
                          "type": "array",
                          "default": [],
                          "0":{
                            "$id": "/address/0/child_add/0", 
                            "$path": "/address/0/child_add/0", 
                            "title": "0", 
                            "type": "object",
                            "required": [
                              "add_ns"
                            ],
                            "properties": {
                              "add_ns": {
                                "$id": "/address/0/child_add/0/add_ns", 
                                "$path": "/address/0/child_add/0/add_ns", 
                                "title": "Add_ns", 
                                "type": "string",
                                "default": "",
                                "examples": [
                                  ""
                                ],
                                "pattern": "^.*$"
                              }
                            }
                          }
              
                        }
                      }
                    }
              
                  },
                  "fun": {
                    "$id": "/fun", 
                    "$path": "/fun", 
                    "title": "Fun", 
                    "type": "array",
                    "default": [],
                    "0":{
                      "$id": "/fun/0", 
                      "$path": "/fun/0", 
                      "title": "0", 
                      "type": "string",
                      "default": "",
                      "examples": [
                        ""
                      ],
                      "pattern": "^.*$"
                    }
                  },
                  "items": {
                    "$id": "/items", 
                    "$path": "/items", 
                    "title": "Items", 
                    "type": "array",
                    "default": [],
                    "0":{
                      "$id": "/items/0", 
                      "$path": "/items/0", 
                      "title": "0", 
                      "type": "object",
                      "required": [
                        "sub"
                      ],
                      "properties": {
                        "sub": {
                          "$id": "/items/0/sub", 
                          "$path": "/items/0/sub", 
                          "title": "Sub", 
                          "type": "string",
                          "default": "",
                          "examples": [
                            ""
                          ],
                          "pattern": "^.*$"
                        }
                      }
                    }
              
                  },
                  "a": {
                    "$id": "/a", 
                    "$path": "/a", 
                    "title": "A", 
                    "type": "object",
                    "required": [
                      "b",
                      "c"
                    ],
                    "properties": {
                      "b": {
                        "$id": "/a/b", 
                        "$path": "/a/b", 
                        "title": "B", 
                        "type": "string",
                        "default": "",
                        "examples": [
                          ""
                        ],
                        "pattern": "^.*$"
                      },
                      "c": {
                        "$id": "/a/c", 
                        "$path": "/a/c", 
                        "title": "C", 
                        "type": "object",
                        "required": [
                        ],
                        "properties": {
                        }
                      }
              
                    }
                  }
              
                }
              };

              /** abbv..
               * 
               @$__mn__$ => 'Inside this object you can do all customizations' 
               {
                 @ui_sch => {  'UI schema object'

                 }
               }
              */


            }
          },
          "payload": {
            "get": () => {
              return mDta_main["gVars"]["payload"];
              /*return {
                "name": "",
                "age": "",
                "address": [
                   {
                     "add": "",
                     "child_add": [
                       {
                        "add_ns": ""
                       }
                     ]
                   }
                ],
                "fun": [
                  ""
                ],
                "items": [
                  {
                    "sub": ""
                  }
                ],
                "a": {
                  "b": "",
                  "c": {
                    
                  }
                }
              };*/
            },
            "update": (kPath,mVal) => {
              //let mPayload = mDta_main["gVars"]["payload"]; //mDta_main.payload.get();

              //mConti0..
              let mConti0 = (mNewPayload, mIsEval=true) => {

                //set vars..
                //let mPayload = mDta_main["gVars"]["payload"]; //mDta_main.payload.get();
                //let mPayload = mDta_main.payload.get();
                let mPayload = mNewPayload;
                mPayload = JSON.stringify(mPayload);
                mPayload = JSON.parse(mPayload);
  
                //log..
                console.log(mPayload);
                console.log(mRndr["gVars"]["mItem"]["l"]);
  
                //set..
                let mV = mPayload;
                if (mIsEval==true) {
                eval(`
                 ${kPath} = mVal;
                `);
                }
                /*alert(kPath);
                alert(JSON.stringify(mVal,null,2));*/

  
                //update..
                mDta_main["gVars"]["payload"] = mV;
  
                //log..
                /*console.log(mPayload);
                console.log(kPath);
                console.log(mVal);
                console.log(mV);*/
                //send cb..
                mDta_main.gVars.cb.onPayloadUpdate(mV);

                
              };

              //refresh (ui)..
              let mRefUI = (kPath,mVal, refCB={
                "onLoad": (mV, mIsEval) => {}
              }) => {
                let mItem = mRndr["gVars"]["mItem"]; //mutable
                //mItem["l"] = [];
                console.log(`kPath`);
                console.log(kPath);
                //console.log(mItem['l']);

                //set vars..
                let mNewPayload = {};
                let mIS_mSendCb = false;
                

                //mSendCb..
                let mSendCb = () => {
                  /*//mNewPayload..
                  console.log(`JSON-OUT`);
                  console.log(mNewPayload);
                  //update..
                  mDta_main["gVars"].payload = mNewPayload;
                  console.log(mDta_main["gVars"].payload);*/


                  //send cb..  
                  mDta_main.data.eventListener.exec({"name":`refresh_l`}, {});

                  //send cb..
                  refCB.onLoad(mNewPayload, false);

                  //set..
                  mIS_mSendCb=true;
                 
                };


                //set..
                //generate [Payload] from [Schema]..
                let mGenArr0 = () => {
                let mL = [];

                //set..
                mJson_EVNT.generateJsonFromJsonSchema(
                  mDta_main.schema.get(),
                {
                  "onLoad": (mP={}) => {
                    //console.log(mP);
                    //all done..
                  },
                  "onEach": (mP={}) => {
                    //console.log(mP); 
                    //store..
                    mL.push({
                      "onEach": mP,
                    }); 
                  }
                }
                ); 
                //console.log(mL);

                //mG_path..
                //let mG_path = mDta_main.gVars.pathArray.get();
                //console.log(mG_path);
                //merge..
                //let mM = [...mL,...mG_path];
                //console.log(mM);
                //return mM; //mL
                return mL;

                }; 

                //mRefreshPayload..
                let mRefreshPayload = (a) => {
                  let mFmt0 = (a) => {
                    let mN = [];
                    //set..
                    for (let i = 0; i < a.length; i++) {
                      const e = a[i];
                      //set vars..
                      let mIsExec = false;
                      if (e.hasOwnProperty("flag")) {
                        let mFlag = e["flag"].split(" ");
                        //console.log(mFlag);
                        if (mFlag.indexOf(`executed`)!==-1) {
                          //already..[executed]
                          //console.log(`already..[executed]`);
                          mIsExec=true;
                        }
                      } 

                      //only add non-executed..
                      //if (mIsExec==false) {
                      //console.log(`need to exec..`);
                      //store..
                      mN.push(e["onEach"]["e"]);
                      //}else{
                        //console.log(e);
                      //}

                    }
                    return mN;
                  };
                  a = mFmt0(a);
                  //console.log(`mFmt0`);
                  //console.log(a);
                  //set vars..
                  let mV = mDta_main["gVars"]["payload"];
                  mV = JSON.stringify(mV);
                  mV = JSON.parse(mV);
                  //set..
                  mJson_EVNT.buildJsonBySchemaPathArray({
                    "json": mV,
                    "pathArr": a //[]
                  }, {
                    "onEach": (v) => {
                      /*console.warn(`onEach`);
                      console.log(v);*/
                    },
                    "onLoad": (v) => { 
                      /*console.log(`JSON-OUT`);
                      console.log(v);*/
                      //store..
                      mNewPayload = v;

                      //mNewPayload..
                      console.log(`JSON-OUT`);
                      console.log(mNewPayload);
                      //update..
                      mDta_main["gVars"].payload = mNewPayload;
                      //console.log(mDta_main["gVars"].payload);

                    }
                  });

                };


                //mHandlePayload..
                let mHandlePayload = () => {
                  //re-order..
                  let mReOrder = (a) => {
                    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
                    const numbers = a; //[3, 1, 4, 1, 5];
                    const sorted = numbers.sort((a, b) => {
                      return a["onEach"]["e"]["size"] - b["onEach"]["e"]["size"];
                    });
                    return sorted;
                  };
                  //apply..
                  mItem["l"] = mReOrder(mItem["l"]);
                  //console.log(mItem["l"]);
                  //mRefreshPayload..
                  mRefreshPayload(mItem["l"]);
                };
                

                //mStore0..
                let mStore0 = (mF_curr) => {
                  //set..
                  mItem["l"].push(mF_curr);
                  //mHandlePayload..
                  //mHandlePayload();

                  //store..
                  mDta_main.gVars.pathArray.set({
                    "onEach": mF_curr["onEach"],
                  });

                };
                


                //check (child)..
                let mCheckChild = (mPath, mSize, a, mCurrKey) => {
                  let mF_curr = a.filter(eF => eF["onEach"]["e"]["path"].startsWith(mPath)==true
                  && eF["onEach"]["e"]["size"]==(mSize+1));
                  if (mF_curr.length==0) {
                  //----set payload----//
                  mHandlePayload();
                  //----send cb----//
                  mSendCb();
                  return; //Stop..
                  }
                  console.log(`child found..need to refresh..`);
                  //set..
                  //mF_curr = mF_curr[0];

                  //mSet0..
                  let mSet0 = (mF_curr) => {
                  //set..
                  let mDefPath = mF_curr["onEach"]["e"]["path"];
                  let mDefKey = mDefPath.substring(mDefPath.lastIndexOf("["));

                  //set..
                  let mChildKey = `${mCurrKey}${mDefKey}`;
                  //alert(mChildKey);

                  //refresh..
                  let mParentKey = mPath;
                  //mC0(mParentKey,mGenArr0(),mDefKey);
                  mC0_0(mParentKey,mGenArr0(),mDefKey, mCurrKey);
                  //alert(mParentKey)
                  //alert(mDefKey)
                  //log..
                  //console.log(mItem["l"]);

                  };

                  //mLoop0..
                  let mLoop0 = (a) => {
                    for (let i = 0; i < a.length; i++) {
                      const e = a[i];
                      //set..
                      mSet0(e);
                    }
                  };
                  mLoop0(mF_curr);

                };


                //clone..
                let mClone = (mF_curr, mCurrKey, mPath, a) => {
                mF_curr = JSON.stringify(mF_curr);   //Because Data is (mutable)..
                mF_curr = JSON.parse(mF_curr);


                //set..
                let mProp = mF_curr["onEach"]["e"]["v"];
                //modify..
                mF_curr["onEach"]["e"]["path"]=mCurrKey;
                //alert(mCurrKey);

                //set..
                mStore0(mF_curr);
                //log..
                //console.log(mItem["l"]);

                //mCheckChild..
                mCheckChild(mPath, 
                mF_curr["onEach"]["e"]["size"],
                a,
                mCurrKey);

                };


                //mC1..
                let mC1 = (mPath, a, mCurrKey, mParentKey) => {
                //alert(mPath)
                let mF_curr = a.filter(eF => eF["onEach"]["e"]["path"]==mPath);
                if (mF_curr.length==0) {
                throw `err: mPath`;
                }
                //all ok..
                mF_curr = mF_curr[0];
                //log..
                //console.log(mF_curr);
                //set..
                //let mProp = mF_curr["onEach"]["e"]["v"];

                //mClone..
                mClone(mF_curr, `${mParentKey}${mCurrKey}`, 
                mPath, a);


                };


                //mC0_0..
                let mC0_0 = (mPath, a, mCurrKey, mNewPath) => {
                  let mF_curr = a.filter(eF => eF["onEach"]["e"]["path"]==mPath);
                  if (mF_curr.length==0) {
                  console.log(a);
                  /*console.log(a);  --OLD--
                  console.log(mPath);
                  throw `err: mPath`;*/

                  //retry..  --NEW--
                  a = mDta_main.gVars.pathArray.get();
                  mF_curr = a.filter(eF => eF["onEach"]["e"]["path"]==mPath);
                  if (mF_curr.length==0) {
                    //console.log(a);
                    //console.log(mPath);
                    throw `err: mPath`;

                    /*//retry..  --NEW--
                    a = mItem['l'];
                    mF_curr = a.filter(eF => eF["onEach"]["e"]["path"]==mPath);
                    if (mF_curr.length==0) {
                      console.log(a);
                      console.log(mPath);
                      throw `err: mPath`;
                    }*/

                  } 


                  }
                  //all ok..
                  mF_curr = mF_curr[0];
                  //log..
                  //console.log(mF_curr);
                  //set..
                  let mProp = mF_curr["onEach"]["e"]["v"];
  
                  //check..
                  if (mProp["type"]=="array") {
                  if (mProp.hasOwnProperty("0")) {
                    mC1(`${mPath}["0"]`, a, mCurrKey, mNewPath); //mPath
                  }  
                  }
                  
                  if (mProp["type"]=="object") {
                  //console.log(mProp);
                  if (mProp.hasOwnProperty("properties")) {
                  //mLoop(mProp["properties"]);
                  //alert(mCurrKey)
                  mC1(`${mPath}${mCurrKey}`, a, mCurrKey, mNewPath); //mPath
                  }
                  }
  
                  //alert(mProp["type"]);
  
  
                };


                //mC0..
                let mC0 = (mPath, a, mCurrKey) => {
                let mF_curr = a.filter(eF => eF["onEach"]["e"]["path"]==mPath);
                if (mF_curr.length==0) {
                /*console.log(a);  --OLD--
                console.log(mDta_main.gVars.pathArray.get());  
                console.log(mPath);
                throw `err: mPath`;*/

                //retry..  --NEW--
                a = mDta_main.gVars.pathArray.get();
                mF_curr = a.filter(eF => eF["onEach"]["e"]["path"]==mPath);
                if (mF_curr.length==0) {
                  throw `err: mPath`;
                }

                }



                //all ok..
                mF_curr = mF_curr[0];
                //log..
                //console.log(mF_curr);
                //set..
                let mProp = mF_curr["onEach"]["e"]["v"];

                //check..
                if (mProp["type"]=="array") {
                if (mProp.hasOwnProperty("0")) {
                  mC1(`${mPath}["0"]`, a, mCurrKey, mPath);
                }  
                }
                
                if (mProp["type"]=="object") {
                //console.log(mProp);
                if (mProp.hasOwnProperty("properties")) {
                //mLoop(mProp["properties"]);
                //alert(mCurrKey)
                mC1(`${mPath}${mCurrKey}`, a, mCurrKey, mPath);
                }
                }

                //alert(mProp["type"]);


                };


                //set..
                let mInit0 = (kPath) => {
                let mPath = kPath;
                let mF_curr = mItem["l"].filter(eF => eF["onEach"]["e"]["path"]==mPath);
                if (mF_curr.length==0) {
                  //throw `err: mPath`;
                  let mParentKey = mPath.substring(0,mPath.lastIndexOf("["));
                  let mCurrKey = mPath.substring(mPath.lastIndexOf("["));
                  //alert(mParentKey);
                  //alert(mCurrKey);
                  mC0(mParentKey, mGenArr0(), mCurrKey);
                }else {
                  //exists..
                }
                };
                mInit0(kPath); //default..


                //all done..
                if (mIS_mSendCb==false) {
                  //run-direct..
                  //alert(`run`);
                  //send cb..
                  refCB.onLoad(mDta_main.payload.get(), true);
                }


              };
              mRefUI(kPath,mVal, {
                "onLoad": (mV, mIsEval) => {
                  mConti0(mV, mIsEval);
                }
              });
              


            },
            "deleteKey": (kPath) => {
              let mPayload = mDta_main["gVars"]["payload"]; //mDta_main.payload.get();
              //set..
              let mV = mPayload;
              eval(`
               delete ${kPath};
              `);

              //update..
              mDta_main["gVars"]["payload"] = mV;

              //log..
              /*console.log(mPayload);
              console.log(kPath);
              console.log(mV);*/
              //send cb..
              mDta_main.gVars.cb.onPayloadUpdate(mV);

            },
          },
          "data": {
            "eventListener": core_1mn.mUtils.eventListener.set(),  //"refresh_l"
            "get": () => {
               return {
                 "l": [],
                 "event": {
                    "parent": (getP={}, cb={"onLoad":()=>{}}) => {
                      //set vars..
                      let mP = getP["set_ui"];
                      let mR = getP["mR"];
                      let mOnEach = mP["onEach"];
                      let mProp = mOnEach["e"]["v"];
                      let mPath = mOnEach["e"]["path"];
                      let mSize = mOnEach["e"]["size"];
                      let mItem = mP["mItem"];
                      let mE = mP["e"];
                      let mEventListener = mP["mEventListener"];

                      //mBox..
                      /*let mBox = document.createElement("div");
                      mE.appendChild(mBox);*/


                      //update..
                      let mF_curr = mItem["l"].filter(eF => eF["onEach"]["e"]["path"]==mPath);
                      if (mF_curr.length==0) {
                        throw `err: mPath`;
                      }
                      mF_curr = mF_curr[0];
                      //all ok..
                      //mF_curr["mE"] = mE; //mBox


                      //log..
                      //console.log(mItem["l"]);
                      if (mSize>1) {
                        //has parent
                        console.log(`mPath: ${mPath}`);
                        let mParentPath = mPath.substring(0,mPath.lastIndexOf("["));
                        console.log(`mParentPath: ${mParentPath}`);
                        //mF..
                        let mF = mItem["l"].filter(eF => eF["onEach"]["e"]["path"]==mParentPath);
                        if (mF.length==0) {
                          throw `err: mParentPath`;
                        }
                        //all ok..
                        mF = mF[0];

                        //set..
                        mR["set"]({
                          "mProp": mProp,
                          "path": mPath,
                          "parent": mF,
                          "curr": mF_curr,
                          "mEventListener": mEventListener
                        },); //mBox

                      }else {
                        //no-parent
                        //set..
                        mR["set"]({
                          "mProp": mProp,
                          "path": mPath,
                          "parent": {
                            "mE": mE
                          },
                          "curr": mF_curr,
                          "mEventListener": mEventListener
                        },); //mBox
                      }
                      
                    }
                 }
               };
            }
          }
        };

        //gen..
        let mJson_EVNT = core_1mn.mUtils.json.set();
        /*mJson_EVNT.generateJsonSchemaFromJSON(
          mDta_main.payload.get(), {
          "onLoad": (mP={}) => {
            //console.log(mP);
          }
        });*/
        //generate [Payload] from [Schema]..
        mJson_EVNT.generateJsonFromJsonSchema(
          mDta_main.schema.get(),
        {
          "onLoad": (mP={}) => {
            //console.log(mP);
            //store..
            mDta_main["gVars"]["payload"] = mP["payload"];
          },
          "onEach": (mP={}) => {
            //console.log(mP); 
            //store..
            /*mDta_main.gVars.pathArray.set({
              "onEach": mP,
            });*/
          }
        }
        );

        //mUtils..
        let mUtils = {
          //get Var From Path in [JSON]
          "var0": (e=``) => {   //eg => "/key1/key2"
            let mStr0 = `/`;
            if (e.startsWith(mStr0)) {
              e = e.substring(mStr0.length);
            }
            let mDyn = (a) => {
              let mK = `mV`; //mV
              for (let i = 0; i < a.length; i++) {
                const e = a[i];
                mK += `["${e}"]`;
              }
              return mK;
            };
            let mDynK = mDyn(e.trim().split("/"));
            return mDynK;
          },
          //vali0..[Validate Json Schema Again Json-Payload]
          "vali0": (a,b) => {
              //set..
              let mOk = true;
              let mV = b; //this is eval (Var)..
              //sch..
              JSON.parse(JSON.stringify(a), (k,v)=> {
                if (k===`$path`) {
                  //console.log(v);
                  //set..
                  let mR = mUtils.var0(v);
                  //console.log(mR);
                  //check if (exists in Json-Payload)
                  try {
                    let mVar = eval(eval(`mR`));
                    //console.log(mVar);
                  } catch (e) {
                    mOk=false;
                  }

                }
              });
              return mOk;
          },
          //datatype..
          "dt": (mK=``) => {
            if (mK==="string") {
              return "";
            }
            if (mK==="number") {
              return 0;
            }
            if (mK==="integer") {
              return 0;
            }
            if (mK==="object") {
              return {};
            }
            if (mK==="array") {
              return [];
            }
            if (mK==="boolean") {
              return false;
            }
            if (mK==="null") {
              return null;
            }
          },

          //sch_data_fmt..[Convert data to schema data format..]
          "sch_data_fmt": (mP={"data":null,"sch":{}}, mCb={"onLoad":()=>{}}) => {
            //vali..
            if (mP["sch"].hasOwnProperty("type")==false) {
              return; //Stop..
            }
            //all ok..
            //mT..
            let mT = {
              "l": [
                {
                  "k": `string`,
                  "set": (v) => {
                  v = `${v}`;  
                  mCb.onLoad(v);
                  }
                },
                {
                  "k": `number`,
                  "set": (v) => {
                  if (v==``) {
                    v=0;
                  }else {
                    if (v.indexOf(`.`)!==-1) {
                    v=parseFloat(v);
                    }else{
                    v=parseInt(v);
                    }
                  }
                  mCb.onLoad(v);
                  }
                },
                {
                  "k": `integer`,
                  "set": (v) => {
                  if (v==``) {
                    v=0;
                  }else{
                    v=parseInt(v);
                  }
                  mCb.onLoad(v);
                  }
                },
                {
                  "k": `object`,
                  "set": (v) => {
                  mCb.onLoad(v);
                  }
                },
                {
                  "k": `array`,
                  "set": (v) => {
                  mCb.onLoad(v);
                  }
                },
                {
                  "k": `boolean`,
                  "set": (v) => {
                  if (v==``) {
                    v=false;
                  }
                  mCb.onLoad(v);
                  }
                },
                {
                  "k": `null`,
                  "set": (v) => {
                  mCb.onLoad(v);
                  }
                },
              ]
            };
            //set..
            let mK = mP["sch"]["type"];
            let mRES_0 = mT.l.filter(eF => eF["k"]==mK);

            //vali..
            if (mRES_0.length==0) {
              return; //Stop..
            }
            //all ok
            mRES_0 = mRES_0[0];
            
            //mRES_0..
            mP["data"]=mP["data"].trim();
            mRES_0.set(mP["data"]);


            /*
            --USAGE--
            mUtils.sch_data_fmt({
                      "data": m0,
                      "sch": mProp
                    },{
                      "onLoad": (v) => {
                       //set..
                       mDta_main.payload.update(mPath,v);
                      }
                    });
            */
          }

        };

        //vali..
        if (mUtils.vali0(mDta_main.schema.get(),mDta_main.payload.get())==false) {
          console.error(`Unable to validate JSON-Schema [path] with JSON-Payload..`);
          console.log(`Please generate JSON-Schema with [Below function]..then use
          
          //generate json-schema from json
          let mJson_EVNT = core_1mn.mUtils.json.set();
          mJson_EVNT.generateJsonSchemaFromJSON(
          mDta_main.payload.get(), {
          "onLoad": (mV) => {
            console.log(mV);
          }
          }); 

          `);
          return; //Stop..
        }
        //all ok....
        //alert(`all ok`);
        //log..
        //console.log(mDta_main.payload.get());

        //set vars..
        /*let mSch = mDta_main.schema.get();
        let mPayload = mDta_main.payload.get();*/


        //set..
        let mRndr = {
          "gVars": {
            "mItem": {}
          },
          "utils": {
            "input0": (mP={"mProp":{},"path":``,"parent":{},"curr":{}},mE,) => {
              let mKey0 = mDta_main.gVars.key0;
              let mProp = mP["mProp"];
              let mPath = mP["path"];

              
              //event..
              //mDta_main.payload.update(mPath,``);
              /*mP["mEventListener"].add({"name":"onPayloadDone"}, ()=>{
                //default..(init)
                mDta_main.payload.update(mPath,``);
              });*/


              //set..
              let mD = {
                "elementID": core_1mn['mUniqueId'].mGenerate(11),
                "type": "input",
                "dataType": "", //password
                "placeholder": "",
                "maxLength": 40, //schema_test['properties']['mPassword']['maxLength'],
                //"endIco": "eye_0.svg", //"info_0.svg",
                //"autocomplete": false,
                "label": "", //Password
                //"s_label": "Rs:",
                //"e_label": "Rs:",

                //cb..
                "cb": {
                  "onInput": function(data){
                    var m0 = data['0']; //value
                    //console.log(m0); 
                    mUtils.sch_data_fmt({
                      "data": m0,
                      "sch": mProp
                    },{
                      "onLoad": (v) => {
                       //set..
                       mDta_main.payload.update(mPath,v);
                      }
                    });

                  },
                  "onClick": () => {
                  }
                },
                "$mUsrData": {
                    //"mPassword": "",
                },
                /*"$mLogic": {
                    "mMatchWith": [
                        "mName",
                    ]
                },*/
                "e_tag": "input",  //{"input" || "textarea"}
              };
              
              //default..
              mD["$mUsrData"][core_1mn.mUniqueId.mGenerate(45)] = ``;
              if (mProp["type"]=="string") {
                mD["dataType"]=`text`;
              }
              if (mProp["type"]=="number" || mProp["type"]=="integer") {
                mD["dataType"]=`number`;
              }
              if (mProp.hasOwnProperty("title")) {
                mD["placeholder"]=mProp["title"];
              }
              if (mProp.hasOwnProperty("title")) {
                mD["placeholder"]=mProp["title"];
                mD["label"]=mProp["title"];
              }


              //custom.. by [mKey0]
              //it will [overwrite]..
              if (mProp.hasOwnProperty(mKey0)==false) {
                //custom config..[by-schema]   
              }
              //set..
              let mCnf = {
                "e": mE,
                "data": mD
              };
              core_1mn["mForm"]["mR"]["input"].set(mCnf);
            },
            "cbox0": (mP={"mProp":{},"path":``,"parent":{},"curr":{}},mE) => {
              let mKey0 = mDta_main.gVars.key0;
              let mProp = mP["mProp"];
              let mPath = mP["path"];
              //set..
              let mD =  {
                "elementID": core_1mn['mUniqueId'].mGenerate(11),
                "type": "cbox",
                "label": "", //Agree
                "$mUsrData": {
                    //"mCbox1": false,
                },
                "flags":
                 //eg => User will not be able to do these actions
                 [], //Expected values = ["untick::disable", "tick::disable"]

                /*"$mLogic": {
                    "mMatchWith": [
                        "mName",
                    ]
                },*/

                //"reload": () => {},

                /*"m_ware": {
                  "onTick": () => {
                    return true; || return false;
                  }
                },*/

                //cb..
                "cb": {
                  "onTick": function(){
                    //set..
                    mDta_main.payload.update(mPath,true);
                  },
                  "onUnTick": function(){
                    //set..
                    mDta_main.payload.update(mPath,false);
                  }
                },

                 
              };
              
              //default..
              mD["$mUsrData"][core_1mn.mUniqueId.mGenerate(45)] = ``;
              if (mProp.hasOwnProperty("title")) {
                mD["label"]=mProp["title"];
              }

              //custom.. by [mKey0]
              //it will [overwrite]..
              if (mProp.hasOwnProperty(mKey0)==false) {
                //custom config..[by-schema]   
              }
              //set..
              let mCnf = {
                "e": mE,
                "data": mD
              };
              core_1mn["mForm"]["mR"]["cbox"].set(mCnf);
            },
            "custom0": (mP={"mProp":{},"path":``,"parent":{},"curr":{}},mE,
            mCb={
              "onAdd": () => {},
              "onDel": () => {},
            }) => {
              let mKey0 = mDta_main.gVars.key0;
              let mProp = mP["mProp"];
              let mPath = mP["path"];
              //set..
              let mD = {
                "label": ""
              };
              let mFld =  {
                "elementID": core_1mn['mUniqueId'].mGenerate(11),
                "type": "custom",
                "w": "",  //width
                "h": "",   //height
                "xcode": {   //xcode..by using it you can pass your existing code (see => @xcode [For more info])
                  "html": ``, //Your html code
                  "css": ``,  //Your css code
                  "js": ``,  //Your js code
                  "dom": () => { 
                    let mDOM = document.createElement("div");

                    //mHori0..
                    let mHori0 = document.createElement("div");
                    mHori0.style.display = "flex";
                    mHori0.style.justifyContent = "space-between";
                    mDOM.appendChild(mHori0);

                    //set.. 
                    let mE_RES0 = 
                    core_1mn.mTxt.set({
                      "0": mHori0,  //HTMLElement
                      "1": `${mD["label"]}`,  //txt
                      "2": "1.5vh",  //fontSize
                      "3": "#343434",  //color
                      "4": 0,  //pos hori [left, center, right]
                      "5": 0,   //[".innerHTML", ".innerText"]
                      //"6": ``, //onHoverColor
                      //"7": ``, //padding
                    },
                     {
                       "onClc": () => {},
                       "onmouseover": () => {},
                       "onmouseout": () => {},
                     },
                     
                     );

                     //space..
                     core_1mn["space"].set({
                      "e1": mHori0,
                      "w": "5vw"
                     });


                     //mHori1..
                     let mHori1 = document.createElement("div");
                     mHori1.style.display = "flex";
                     mHori0.appendChild(mHori1);


                     //txt..
                     let mE_RES1 = 
                      core_1mn.mTxt.set({
                      "0": mHori1,  //HTMLElement
                      "1": `Add`,  //txt
                      "2": "1.5vh",  //fontSize
                      "3": "#343434",  //color
                      "4": 1,  //pos hori [left, center, right]
                      "5": 0,   //[".innerHTML", ".innerText"]
                      "6": `rgba(34,34,34,0.1)`, //onHoverColor
                      //"7": ``, //padding
                    },
                     {
                       "onClc": () => {
                         //send cb..
                         if (mCb.hasOwnProperty("onAdd")) {
                         mCb.onAdd();
                         }
                       },
                       "onmouseover": () => {},
                       "onmouseout": () => {},
                     },
                     
                     );
                     mE_RES1["e"].style.userSelect = "none";


                      //space..
                      core_1mn["space"].set({
                        "e1": mHori1,
                        "w": "1vw"
                       });


                     //txt..
                     let mE_RES2 = 
                      core_1mn.mTxt.set({
                      "0": mHori1,  //HTMLElement
                      "1": `Remove`,  //txt
                      "2": "1.5vh",  //fontSize
                      "3": "#343434",  //color
                      "4": 1,  //pos hori [left, center, right]
                      "5": 0,   //[".innerHTML", ".innerText"]
                      "6": `rgba(34,34,34,0.1)`, //onHoverColor
                      //"7": ``, //padding
                    },
                     {
                       "onClc": () => {
                        //send cb..
                        if (mCb.hasOwnProperty("onDel")) {
                          mCb.onDel();
                        }
                       },
                       "onmouseover": () => {},
                       "onmouseout": () => {},
                     },
                     
                     );
                     mE_RES2["e"].style.userSelect = "none";






                    return mDOM;
                  } //|| DOM, //Your DOM eg => document.createElement("div")
                },

                "$mUsrData": {
                  //"YOUR_JSON_KEY": "", //you can return this value..and build a payload (auto) with our [Form System]
                },

              };
              
              //default..
              mFld["$mUsrData"][core_1mn.mUniqueId.mGenerate(45)] = ``;
              if (mProp.hasOwnProperty("title")) {
                mD["label"]=mProp["title"];
              }
              //custom.. by [mKey0]
              //it will [overwrite]..
              if (mProp.hasOwnProperty(mKey0)==false) {
                //custom config..[by-schema]   
              }

              
              //set..
              let mCnf = {
                "e": mE,
                "data": mFld
              };
              core_1mn["mForm"]["mR"]["custom"].set(mCnf);
            },
            "l": [
              {
                "k": `string`,
                "set": (mP={"mProp":{},"path":``,"parent":{},"curr":{}},) => {
                  //check..
                  let mCURR_FLAG = [];
                  if (mP["curr"].hasOwnProperty(`flag`)) {
                  mCURR_FLAG = mP["curr"]["flag"].split(" ");
                  if (mCURR_FLAG.indexOf(`executed`)!==-1) {
                    console.log(`skipped: already [executed]`);
                    return;
                  }                     
                  }
                  //all ok..




                  //set..
                  mP["curr"]["flag"]=`executed`;


                  //set..
                  let mFlag = [];
                  if (mP["parent"].hasOwnProperty("flag")) {
                    mFlag = mP["parent"]["flag"].trim().split(" ");
                  }
                  if (mFlag.indexOf(`disable_child`)!==-1) {
                    console.log(`disable_child`);
                    return; //Stop
                  }


                  //set vars..
                  let mE = mP["parent"]["mE"];

                  //vali..
                  if (typeof mE === "undefined") {
                    return;
                  }
                  //all ok..

 
                  //create..
                  let mCreate = (mP, mCb={
                    "onLoad": () => {}
                  }) => {
                  let mBox = document.createElement("div");
                  mE.appendChild(mBox);
                  //store..
                  mP["curr"]["mE"] = mBox;

                  //set..
                  mRndr.utils.input0(mP,mBox);

                  //send cb..
                  if (mCb.hasOwnProperty("onLoad")) {
                    mCb.onLoad({
                      "e": mBox,
                      "path": mP["path"]
                    });
                  }

                  };

                  //next..
                  mCreate(mP, {});




                }
              },
              {
                "k": `number`,
                "set": (mP={"mProp":{},"path":``,"parent":{},"curr":{}},) => {
                   //check..
                   let mCURR_FLAG = [];
                   if (mP["curr"].hasOwnProperty(`flag`)) {
                   mCURR_FLAG = mP["curr"]["flag"].split(" ");
                   if (mCURR_FLAG.indexOf(`executed`)!==-1) {
                     console.log(`skipped: already [executed]`);
                     return;
                   }                     
                   }
                   //all ok..



                  //set..
                  mP["curr"]["flag"]=`executed`;



                  //set..
                  let mFlag = [];
                  if (mP["parent"].hasOwnProperty("flag")) {
                    mFlag = mP["parent"]["flag"].trim().split(" ");
                  }
                  if (mFlag.indexOf(`disable_child`)!==-1) {
                    console.log(`disable_child`);
                    return; //Stop
                  }

                  

                  //set vars..
                  let mE = mP["parent"]["mE"];

                  //vali..
                  if (typeof mE === "undefined") {
                    return;
                  }
                  //all ok..
                  
                  //create..
                  let mBox = document.createElement("div");
                  mE.appendChild(mBox);
                  //store..
                  mP["curr"]["mE"] = mBox;

                  mRndr.utils.input0(mP,mBox);
                }
              },
              {
                "k": `integer`,
                "set": (mP={"mProp":{},"path":``,"parent":{},"curr":{}},) => {
                   //check..
                   let mCURR_FLAG = [];
                   if (mP["curr"].hasOwnProperty(`flag`)) {
                   mCURR_FLAG = mP["curr"]["flag"].split(" ");
                   if (mCURR_FLAG.indexOf(`executed`)!==-1) {
                     console.log(`skipped: already [executed]`);
                     return;
                   }                     
                   }
                   //all ok..




                  //set..
                  mP["curr"]["flag"]=`executed`;



                  //set..
                  let mFlag = [];
                  if (mP["parent"].hasOwnProperty("flag")) {
                    mFlag = mP["parent"]["flag"].trim().split(" ");
                  }
                  if (mFlag.indexOf(`disable_child`)!==-1) {
                    console.log(`disable_child`);
                    return; //Stop
                  }

                  

                  //set vars..
                  let mE = mP["parent"]["mE"];


                  //vali..
                  if (typeof mE === "undefined") {
                    return;
                  }
                  //all ok..

                  
                  //create..
                  let mBox = document.createElement("div");
                  mE.appendChild(mBox);
                  //store..
                  mP["curr"]["mE"] = mBox;

                  mRndr.utils.input0(mP,mBox);
                }
              },
              {
                "k": `array`,
                "set": (mP={"mProp":{},"path":``,"parent":{},"curr":{}},) => {
                   //check..
                   let mCURR_FLAG = [];
                   if (mP["curr"].hasOwnProperty(`flag`)) {
                   mCURR_FLAG = mP["curr"]["flag"].split(" ");
                   if (mCURR_FLAG.indexOf(`executed`)!==-1) {
                     console.log(`skipped: already [executed]`);
                     return;
                   }                     
                   }
                   //all ok..


                  //set..
                  mP["curr"]["flag"]+=` executed`;


                  //set..
                  let mFlag = [];
                  if (mP["parent"].hasOwnProperty("flag")) {
                    mFlag = mP["parent"]["flag"].trim().split(" ");
                  }
                  if (mFlag.indexOf(`disable_child`)!==-1) {
                    console.log(`disable_child`);
                    return; //Stop
                  }
                  

                  //set vars..
                  let mE = mP["parent"]["mE"];

                  //vali..
                  if (typeof mE === "undefined") {
                    return;
                  }
                  //all ok..

                  //console.log(mP);
                  let mKey0 = mDta_main.gVars.key0;
                  if (mP["mProp"].hasOwnProperty(mKey0)) {
                    //custom..ui
                  }else {
                    //default..
                    mP["curr"]["flag"]+=``; //disable_child
                  }

                  //create..
                  let mCreate = (mCb={
                    "onAdd": () => {},
                    "onDel": () => {},
                  }) => {
                  let mBox = document.createElement("div");
                  mE.appendChild(mBox);
                  //store..
                  mP["curr"]["mE"] = mBox;

                  //set..
                  mRndr.utils.custom0(mP,mBox, {
                    "onAdd": () => {
                      if (mCb.hasOwnProperty("onAdd")) {
                      mCb.onAdd();
                      }
                    },
                    "onDel": () => {
                      if (mCb.hasOwnProperty("onDel")) {
                      mCb.onDel();
                      }
                    }
                  });
                  };
                  //mCreate();


                  //mWithChild..
                  let mWithChild = () => {
                    //mD..
                    let mD = {
                      "gVars": {
                        "idx0": 1,   //using (1) not (0) because (by default array must contains atlest-one prop)
                      }
                    };

                    //mAddChild..
                    let mAddChild = () => {
                      /*let mIdx0 = 0;
                      let mPayload = mDta_main.payload.get();
                      let mV = mPayload;
                      eval(` mV = ${mP["path"]}; `);
                      //check..
                      if (mV.length>0) {
                        mIdx0 = (mV.length-1);
                      }*/

                      //set..
                      let mVal;
                      if (mP["mProp"].hasOwnProperty("0")==false) {
                        console.log(`skipped: [mAddChild] no child [key] specified..`);
                        return; //Stop
                      }
                      //all ok..
                      //console.log(mP["mProp"]);
                      let m0 = mP["mProp"]["0"];

                      //set..
                      if (m0.hasOwnProperty("default")) {
                        mVal = m0["default"];
                      }else {
                        mVal = mUtils.dt(m0["type"]);
                      }

                      //add..
                      let mNewPath = `${mP["path"]}["${mD["gVars"]["idx0"]}"]`;
                      //alert(mNewPath)
                      mDta_main.payload.update(`${mNewPath}`,
                      mVal);

                      //inc..
                      mD["gVars"]["idx0"]+=1;

                    };
                    //mDelChild..
                    let mDelChild = () => {
                      //vali..
                      if (mD["gVars"]["idx0"]==0) {
                        return; //Stop..
                      }
                      //all ok..

                      //decrease..
                      mD["gVars"]["idx0"]-=1;

                      //del..
                      mDta_main.payload.deleteKey(`${mP["path"]}[${mD["gVars"]["idx0"]}]`);

                    };

                    //event..
                    /*mP["mEventListener"].add({"name":"onPayloadDone"}, ()=>{
                      //add..
                      mAddChild();
                    });*/


                    //mCreate..
                    mCreate({
                      "onAdd": () => {
                      mAddChild();
                      },
                      "onDel": () => {
                      mDelChild();
                      }
                    });

                  };
                  mWithChild();


                }
              },
              {
                "k": `object`,
                "set": (mP={"mProp":{},"path":``,"parent":{},"curr":{}},) => {
                   //check..
                   let mCURR_FLAG = [];
                   if (mP["curr"].hasOwnProperty(`flag`)) {
                   mCURR_FLAG = mP["curr"]["flag"].split(" ");
                   if (mCURR_FLAG.indexOf(`executed`)!==-1) {
                     console.log(`skipped: already [executed]`);
                     return;
                   }                     
                   }
                   //all ok..



                  //set..
                  mP["curr"]["flag"]=`executed`;



                  //set..
                  let mFlag = [];
                  if (mP["parent"].hasOwnProperty("flag")) {
                    mFlag = mP["parent"]["flag"].trim().split(" ");
                  }
                  if (mFlag.indexOf(`disable_child`)!==-1) {
                    console.log(`disable_child`);
                    return; //Stop
                  }
                  

                  //set vars..
                  let mE = mP["parent"]["mE"]; 
                  

                  //vali..
                  if (typeof mE === "undefined") {
                    return;
                  }
                  //all ok..


                  //create..
                  let mCreate = (mP, mCb={
                    "onLoad": () => {},
                    "onAdd": () => {},
                    "onDel": () => {},
                  }) => {
                  let mBox = document.createElement("div");
                  mE.appendChild(mBox);
                  //store..
                  mP["curr"]["mE"] = mBox;


                  //create..
                  //mDta_main.payload.update(mP["path"],{});


                  //send cb..
                  if (mCb.hasOwnProperty("onLoad")) {
                    mCb.onLoad({
                      "e": mBox,
                      "path": mP["path"]
                    });
                  }

                  };
                  mCreate(mP, {});




                }
              },
              {
                "k": `boolean`,
                "set": (mP={"mProp":{},"path":``,"parent":{},"curr":{}},) => {
                   //check..
                   let mCURR_FLAG = [];
                   if (mP["curr"].hasOwnProperty(`flag`)) {
                   mCURR_FLAG = mP["curr"]["flag"].split(" ");
                   if (mCURR_FLAG.indexOf(`executed`)!==-1) {
                     console.log(`skipped: already [executed]`);
                     return;
                   }                     
                   }
                   //all ok..





                  //set..
                  mP["curr"]["flag"]=`executed`;


                  //set..
                  let mFlag = [];
                  if (mP["parent"].hasOwnProperty("flag")) {
                    mFlag = mP["parent"]["flag"].trim().split(" ");
                  }
                  if (mFlag.indexOf(`disable_child`)!==-1) {
                    console.log(`disable_child`);
                    return; //Stop
                  }

                  //set vars..
                  let mE = mP["parent"]["mE"];

                  //vali..
                  if (typeof mE === "undefined") {
                    return;
                  }
                  //all ok..
                  
                  //create..
                  let mBox = document.createElement("div");
                  mE.appendChild(mBox);
                  //store..
                  mP["curr"]["mE"] = mBox;

                  //console.log(mP);
                  mRndr.utils.cbox0(mP,mBox);
                }
              },
            ]
            
          },
          "l": {
            //set ui..
            "set_ui": (mP={}) => {
              //set..
              let mE = mP["e"];
              let mOnEach = mP["onEach"];
              let mProp = mOnEach["e"]["v"];
              let mPath = mOnEach["e"]["path"];
              let mItem = mP["mItem"];
              let mEventListener = mP["mEventListener"];

              //set..
              //console.log(mOnEach);
              //console.log(mProp);

              //set..
              let mR = mRndr["utils"]["l"].filter(eF => eF["k"]==mProp["type"]);
              if (mR.length==0) {
                let msg = `[type=${mProp["type"]}] is not available..`; 
                console.warn(msg);
                //throw msg;
                return; //Stop..
              }
              mR = mR[0];

              //set..
              mItem["event"].parent(
                {
                  "set_ui": mP,
                  "mR": mR
                },
                {
                  "onLoad": () => {}
              });

              //all ok..

            }

          },
          "set": (mP={},mE) => {
            //set..
            let mData = mDta_main["data"];
            let mItem = mData.get();
            //store..
            mRndr["gVars"]["mItem"]=mItem;

            //set..
            let mEventListener = core_1mn.mUtils.eventListener.set();


            //set..
            let mSet0 = (mE,mP,mItem,mEventListener) => {
              mRndr.l.set_ui({
                "e": mE,
                "onEach": mP,
                "mItem": mItem,
                "mEventListener": mEventListener
              }); 
            };
            

            //event..
            mDta_main.data.eventListener.add({"name":`refresh_l`}, (data={}) => {
              let mItem = mRndr["gVars"]["mItem"];
              let mLoop = (a) => {
                for (let i = 0; i < a.length; i++) {
                  const e = a[i];
                  //set..
                  mSet0(mE, e["onEach"], mItem, mEventListener);
                }
              };
              mLoop(mItem["l"]);
            });




            //generate [Payload] from [Schema]..
            mJson_EVNT.generateJsonFromJsonSchema(
              mDta_main.schema.get(),
            {
              "onLoad": (mP={}) => {
                //console.log(mP);
                //all done..
                //send cb..
                mEventListener.exec({"name":"onPayloadDone"}, {});
              },
              "onEach": (mP={}) => {
                //console.log(mP); 
                //store..
                mItem.l.push({
                  "onEach": mP,
                });
                //set..
                mSet0(mE,mP,mItem,mEventListener);

              }
            }
            ); 



          }
        };
        let mDiv = document.createElement("div");
        mP["e"].appendChild(mDiv);
        mRndr.set(mDta_main,mDiv);




        //mEvents..
        let mEvents = {

        };
        return mEvents;




        //USAGE..
        let mUSAGE = () => {
          let mFormGen = (mE) => {
            //set..
            let mGen = (schema) => {
            core_1mn.mForm.mGen.set({
              "e": mE,
              "schema": schema,
            }, 
            {
              "onPayloadUpdate": (mP={}) => {
                console.log(mP["payload"]);
              }
            });

            };

            //generate schema from json..
            let mJson_EVNT = core_1mn.mUtils.json.set();
            //sample data..
            let mSampleData = () => {
              return {    //data  (Struct)

                "t": "listeningMultipleChoiceOneAnswer", //Qa type
                "d": {     //Qa data
                  "q": {
                    "n": `Questions 1 – 3
                    <br> Choose the correct answer.`
                  },
                  "x": {
                    "l": [
                      {
                        "n": `Why did Judy choose to study the East End of London?`, 
                        "x": [
                          {
                            "n": `She wanted to understand her own background.`,
                            "a": ``,
                          },
                          {
                            "n": `She was interested in place names.`,
                            "a": ``,
                          },
                          {
                            "n": `She had read several books about it.`,
                            "a": ``,
                          }, 
                          
                        ]
                      },

                      {
                        "n": `What was Judy’s main source of materials?`, 
                        "x": [
                          {
                            "n": `books`,
                            "a": ``,
                          },
                          {
                            "n": `newspapers`,
                            "a": ``,
                          },
                          {
                            "n": `interviews`,
                            "a": ``,
                          }, 
                          
                        ]
                      },

                      {
                        "n": `What difficulty did Judy have with her dissertation?`, 
                        "x": [
                          {
                            "n": `writing the first draft`,
                            "a": ``,
                          },
                          {
                            "n": `organising what she had collected`,
                            "a": ``,
                          },
                          {
                            "n": `finding enough relevant sources`,
                            "a": ``,
                          }, 
                          
                        ]
                      },

              
                    ]
                  },


                },
                "m": { //meta-data
                  "showAt": 2, //seconds
                },
                "l": [ //list

                  {
                    "t": "FILL01UP", //Qa type
                    "d": {     //Qa data

                    },
                  },

                ]
              };
              return {
                /*
                "name": "",
                "age": 10,
                "address": [
                  ""
                ],
                "users": [
                  "",
                ],
                "rows": [
                  {
                    "id": "",
                    "class": "",
                  }
                ],
                "meta": {
                  "desc": ""
                },
                "isPrivate": false,

                "new": {
                  "ns0": "", 
                  "ns": {
                    "ns0": ""
                  }
                },

                "a": {
                  "m": [
                    ""
                  ],
                  "m0": [
                    {
                      "ho": ""
                    }
                  ],
                },*/


                //"name": "",
                //"age": "",
                /*"ns0": [
                  {
                   "m": "",
                   "ns1": [
                     {
                      "vd": "",
                      "ak": ""
                     }
                   ]
                  }
               ],*/



               /*"mo": {
                "sch": "",
                "gh": {
                  "g": "",
                  "fg": {
                    "gt": "",
                    "clas": "",
                    "arr": [
                      ""
                    ]
                  }
                }
               }*/



               "val": "",
               "csdb": "",
               "fggg": [
                  {
                    "name": "",
                    "l": [
                        {
                          "v": "",
                          "f": [
                            ""
                          ]
                        }
                    ]
                  }
               ]

                

              };
            };
            mJson_EVNT.generateJsonSchemaFromJSON(
              mSampleData(),
              {
                "onLoad": (mP={}) => {
                  console.log(mP["schema"]);
                  mGen(JSON.parse(mP["schema"]));
                }
              }
            );
          
           };
           mFormGen(mItem);
        };



      }
    }
     


    },



  "mElemSearch": {
    //const collection = document.getElementsByTagName("*"); /*Get all elements in the document:*/

    "byAttr": {

      "get": (mE1, mAttrName, mAttrVal) => {
        var mE1_Arr = mE1.getElementsByTagName("*");
        for (let i1 = 0; i1 < mE1_Arr.length; i1++) {
          const mCurrE = mE1_Arr[i1];
          if (mCurrE.getAttribute(mAttrName) == mAttrVal) {
            //found....
            return mCurrE;
          }
        }
        //error....(Not found)
        return null;

      }

    }


  },

  //animations......
  "mAnim": {

    //utils..
    "mUtils": {
      "screen": function (mE1) {
        var mScreen = document.createElement("div");
        mScreen.style.position = "absolute";
        mScreen.style.top = "0";
        mScreen.style.left = "0";
        mScreen.style.width = "100%";
        mScreen.style.height = "100vh";
        mScreen.style.backgroundColor = "rgba(255,255,255, 0.7)";
        mE1.appendChild(mScreen);
        return mScreen;
      }
    },


    //mSkel..
    "mSkel": {

      "mDta": { //data....

        "s": //skeleton code
          `

           <v >

           <x d='{ "w": "10vh", "h": "10vh", "bR": "5%"  }' >
           </x>
 
           <x d='{ "w": "10vh", "h": "10vh", "bR": "50%"  }' >
           </x>
 
           </v> 
          
          `

      },

      "mR": { //rendrer....

        "x": { //custom shape.....

          "set": (mGetParams) => {
            var mParams = mGetParams;
            var mE1 = mParams['mE1'];
            var mD = mParams['mD'];

            //layout.....  
            mSet_item();
            function mSet_item() {
              //set props.....
              var mW = mD['w'] != undefined ? mD['w'] : "12vh"; //(width)
              var mH = mD['h'] != undefined ? mD['h'] : "12vh"; //(height)
              var mBR = mD['bR'] != undefined ? mD['bR'] : "5%"; //(border radius)
              var mM = mD['m'] != undefined ? mD['m'] : "0.8vh"; //(margin)
              var mA = mD['a'] != undefined ? mD['a'] : "0"; //(animation (0=>YES, 1=>NO))
              var mR1 = mD['r1'] != undefined ? mD['r1'] : 0; //(no of repeat) (numeric)


              //set elem......
              mE1.style.borderRadius = mBR;
              mE1.style.width = mW;
              mE1.style.height = mH;
              mE1.style.margin = mM;
              mE1.style.background = "rgba(130, 130, 130, 0.2)";

              //var mE1 = document.createElement("div");


              if (mA == "0") {
                //animation....
                mE1.style.background = "linear-gradient(to right, rgba(130, 130, 130, 0.2) 8%, rgba(130, 130, 130, 0.3) 18%, rgba(130, 130, 130, 0.2) 33%)";
                var mGetInt = core_1mn['mExtract']['mInt'];
                mE1.style.backgroundSize = `${mGetInt.get(mW) * 3}vh ${mGetInt.get(mH)}vh`; //800px 100px
                mE1.style.animation = "wave-hori 2s infinite ease-out";
              }


            }

          }

        },

        "v": { //vertical cover.....

          "set": (mGetParams) => {
            var mParams = mGetParams;
            var mE1 = mParams['mE1'];
            var mD = mParams['mD'];

            //layout.....  
            mSet_item();
            function mSet_item() {
              mE1.style.width = "100%";
              mE1.style.height = "100%";
              mE1.style.backgroundColor = "transparent";

            }


          }

        },

        "h": { //horizontal cover.....

          "set": (mGetParams) => {
            var mParams = mGetParams;
            var mE1 = mParams['mE1'];
            var mD = mParams['mD'];

            //layout.....  
            mSet_item();
            function mSet_item() {
              mE1.style.display = "flex";
              mE1.style.width = "100%";
              mE1.style.height = "100%";
              mE1.style.backgroundColor = "transparent";

            }


          }

        },

      },

      "mB": { //builder.....

        "set": (mGetParams) => {
          var mParams = mGetParams;
          var mArr1 = mParams['mArr1']; //core_1mn['mAnim']['mSkel']['mDta']['s'] (sample)

          //set vars......
          var mSkelHolder = document.createElement("div");
          mSkelHolder.setAttribute("tag_n", "skel_holder");

          //generate.....
          function mGenerate() {

            //here we generate skel data....
            //<x>=> custom shape
            //<v>=> vertical (cover)
            //<h>=> horizontal (cover)
            //d=> JSON data tag


            //format..... 
            mFormat_dta();
            function mFormat_dta() {
              var mDoc = mSkelHolder;
              mDoc.innerHTML = mArr1;

              //set......
              mSet_item({
                "t": "x"
              });
              mSet_item({
                "t": "v"
              });
              mSet_item({
                "t": "h"
              });

              function mSet_item(mGetParams) {
                var mParams = mGetParams;
                var mT = mParams['t'];
                //set vars.....
                var mDoc_arr = mDoc.querySelectorAll(mT); //[tag_n]
                for (let i1 = 0; i1 < mDoc_arr.length; i1++) {
                  const mCurrI = mDoc_arr[i1];
                  //const mCurrI = i1;
                  //console.log(mCurrI);  

                  //set vars.....
                  var mD = mCurrI.getAttribute("d"); //json data 
                  var mD_json = {};
                  //parse json....
                  try {
                    mD_json = JSON.parse(mD);
                    mD_json = mD_json != null ? mD_json : {};
                  } catch (error) {
                    mD_json = {};
                  }

                  //replace (tags).....
                  function mReplaceTags() {
                    var mDiv = document.createElement("div");
                    mDiv.innerHTML = mCurrI.innerHTML;
                    //update.....
                    mDiv.setAttribute("tag_n", mT);
                    if (mD != null) {
                      mDiv.setAttribute("d", mD);
                    }
                    mCurrI.replaceWith(mDiv);
                    return mDiv;
                  }

                  //clone (E)
                  function mSet_CloneE() {
                    var mNoOfRpt = mD_json['r1'] != undefined ? mD_json['r1'] : null;
                    if (mNoOfRpt != null) {
                      for (let iC1 = 0; iC1 < mNoOfRpt; iC1++) {
                        //set......
                        var mParentE = mRepTagE.parentElement;
                        var mCloneE = mRepTagE.cloneNode(true);
                        mParentE.insertBefore(mCloneE, mRepTagE.nextSibling);
                        //render (E)
                        mRender_E();
                      }
                    }

                  }

                  //set vars....
                  var mRepTagE = mReplaceTags();
                  var mTagN = mRepTagE.getAttribute("tag_n"); //tag name
                  mRender_E();
                  mSet_CloneE();

                  //render (E)
                  function mRender_E() {
                    //set.....
                    if (core_1mn['mAnim']['mSkel']['mR'].hasOwnProperty(mTagN) == true) {
                      core_1mn['mAnim']['mSkel']['mR'][mTagN].set(
                        {
                          "mD": mD_json,
                          "mTagN": mTagN,
                          "mE1": mRepTagE
                        }
                      );
                    }
                  }


                }

              }


            }


            //all done.....
            //console.log(mSkelHolder);
            return mSkelHolder; //(mSkelHolder)

          }

          return mGenerate();


          /*
          USAGE
          
          var mSkelData = `
      
      <v >

      <x d='{ "w": "15vh", "h": "15vh", "bR": "50%", "m":"4vh auto"  }' >
      </x>

      <x d='{ "w": "20vw", "h": "7vh", "bR": "0.5vh", "a":"1", "m":"2vh auto", "r1":"1"  }' >
      </x> 
      
      <x d='{ "w": "20vw", "h": "2vh", "bR": "0.5vh", "m":"2vh auto", "r1":"1"  }' >
      </x> 

      </v>

      `;
      var mSkelHolder = core_1mn['mAnim']['mSkel']['mB'].set(
          {
              "mArr1": mSkelData,
          }
      ); //skel_holder
      //console.log(mSkelHolder);
      mSkelAnimHolder.appendChild(mSkelHolder);

          */


        }

      }


    },
    //https://uxplanet.org/using-loading-animation-on-websites-and-apps-examples-and-snippets-to-use-cab0097be9f1
    //https://loading.io/css/
    //https://projects.lukehaas.me/css-loaders/
    //https://tobiasahlin.com/spinkit/
    //https://github.com/tobiasahlin/SpinKit
    //loader..
    "loader": {

      "0": {
        "set": function (mGetParams) {
          var mParams = mGetParams;
          var mE1 = mParams['e1'];
          var mW = mParams['w'] != undefined ? mParams['w'] : "4vh";
          var mH = mParams['h'] != undefined ? mParams['h'] : "4vh";
          var mNoOfDots = mParams['0'] != undefined ? mParams['0'] : 3;
          var mColor = mParams['1'] != undefined ? mParams['1'] : "#343434";
          var mPosH = mParams['2'] != undefined ? mParams['2'] : 1;
          var mPosV = mParams['3'] != undefined ? mParams['3'] : 1;

          var mJustifyContent = ["start", "center", "end"];
          //set....
          var mLoaderViewer = document.createElement("anim_loader_1mn");
          mLoaderViewer.style.display = "flex";
          mLoaderViewer.style.justifyContent = mJustifyContent[mPosH]; //0=>left, 1=>center, 2=>right
          mE1.appendChild(mLoaderViewer);

          //set.......
          //@req (libs => spinkit.min.css)
          //(1)..
          var mSk_flow = document.createElement("div");
          mSk_flow.className = "sk-flow";
          mSk_flow.style.width = mW;
          mSk_flow.style.height = mH;
          //flex..
          mSk_flow.style.display = "flex";
          mSk_flow.style.alignItems = mJustifyContent[mPosV];
          mLoaderViewer.appendChild(mSk_flow);

          //set dots here.....
          function mSet_dots() {
            for (let i1 = 0; i1 < mNoOfDots; i1++) {
              var mDot = document.createElement("div");
              mDot.className = "sk-flow-dot";
              mDot.style.backgroundColor = mColor;
              mSk_flow.appendChild(mDot);
            }
          }
          mSet_dots();


          /*
          USAGE
           core_1mn['mAnim']['loader']['0']['set']({
                   "e1": mDisableLayer,
                   "1": "blue"
                 });

          */



        }
      },

      //horizontal loader..
      "1": {
        "set": function (mGetParams) {
          var mParams = mGetParams;
          var mE1 = mParams['e1']; //@req
          var mW = mParams['w'] != undefined ? mParams['w'] : "100%";
          var mH = mParams['h'] != undefined ? mParams['h'] : "0.4vh";
          var mBgColor = mParams['0'] != undefined ? mParams['0'] : "rgba(34,34,34, 0.1)";
          var mColor = mParams['1'] != undefined ? mParams['1'] : "rgba(34,34,34, 0.3)";

          //make (relative)..
          mE1.style.position = "relative";

          //set..
          var mScreen = core_1mn["mAnim"]["mUtils"].screen(mE1);

          //mHoriE..
          var mHoriE = document.createElement("div");
          mHoriE.style.width = mW;
          mHoriE.style.height = mH;
          mHoriE.style.backgroundColor = mBgColor;
          mScreen.appendChild(mHoriE);
          //box..
          function mSet_box() {
            //set vars..
            var mSpeed = 0.8;
            //layout..
            var mBox = document.createElement("div");
            mBox.style.width = "40%";
            mBox.style.height = "100%";
            //anim..
            // Get the root element
            var r = document.querySelector(':root');
            // Set the value of variable --box to another value
            r.style.setProperty('--box', mColor);
            mBox.style.animation = `box-left-to-right ${mSpeed}s infinite`;
            mBox.style.animationDirection = "normal";
            mBox.style.position = "relative";
            mHoriE.appendChild(mBox);
          }
          mSet_box();

          //events..
          var mEvents = {
            "anim": {
              "clear": function () {
                mScreen.remove();
              }
            }
          };
          return mEvents;

          /*
          --USAGE--
          core_1mn["mAnim"]["loader"]["1"].set({
            "e1": document.body,
            "0": "orange", //bg color..
            "1": "red", //color..
          });
          setTimeout(() => {
            mEvents["anim"].clear();
          }, 3000);
          */


        }
      }

    },


    //ripple..
    "ripple": {
       "0": {
          "set": (mP={"e":document.body}) => {
            //set vars..
            let mE = mP["e"];
            //set..
           //https://codepen.io/finnhvman/pen/jLXKJw
           //https://css-tricks.com/how-to-recreate-the-ripple-effect-of-material-design-buttons/  [-Recommended-]
           //set css..
           let mCssID = "mn-ripple-css";
           let mID1 = "ripple";
           let mSet_css = (mID, mID1) => {
             let css = `
               /* Ripple effect */
               .${mID} {
                 background-position: center;
                 transition: background 0.8s;
               }
               .${mID}:hover {
                 background: rgba(255,255,255, 0.5) radial-gradient(circle, transparent 1%, rgba(255,255,255, 0.5) 1%) center/15000%;   /* #47a7f5 */
               }
               .${mID}:active {
                /* background-color: #6eb9f7; */
                 background-size: 100%;
                 transition: background 0s;   
               }
             `;
             //set..
             let mE_css;
             if (document.getElementById(mID) != null) {
               mE_css = document.getElementById(mID);
             }
             if (document.getElementById(mID) == null) {
               mE_css = document.createElement("style");
               mE_css.id = "global-css";
               mE_css.innerHTML = css;
               document.head.appendChild(mE_css);
             }
           };
           mSet_css(mCssID, mID1);

            //set..
            let mSet = (mE) => {
             //let mB = document.createElement("div");
             let mB = mE;
             /*mB.style.backgroundPosition = `center`;
             mB.style.transition = `background 0.8s`;

             //events..
             mB.addEventListener("mouseover", ()=>{
              mB.style.background = `#47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%`;

             });
             //mB.onmouseout = () => {
             //};
             //active..
             mB.addEventListener("click", () => {
              mB.style.backgroundColor = `#6eb9f7`;
              mB.style.backgroundSize = `100%`;
              mB.style.transition = `background 0s`;
            });*/
            mB.className = `${mCssID}`;


            };
            mSet(mE);

            /*
            --USAGE--
            //add ripple..
            core_1mn["mAnim"].ripple["0"].set({
              "e": mB
            });

            */
          }
       },
       
        
    }




  },


  //extractions......
  "mExtract": {

    "mInt": {

      "get": (mStr1) => {
        //get (int) from data....
        const str = mStr1; //hello 123 world
        const replaced = str.replace(/\D/g, ''); // '123'
        //console.log(replaced);

        let num;
        if (replaced !== '') {
          num = Number(replaced); // 123
        }
        //console.log(num);
        return num;


        /*USAGE
        core_1mn['mExtract']['mInt']['get']("hello1234");
        */

      }

    }


  },


  //wait...
  "mWait": {

    "auto": (mGetParams) => {
      var mParams = mGetParams;
      var mEnv = core_1mn['conf']['mEnv'];

      //data.....
      var mAuto = {
        "0": {
          "set": () => {
            var mTimeout = 200; //1000
            var mWait = setTimeout(() => {
              clearTimeout(mWait);
              mParams.mCb();
            }, mTimeout);
          }
        },
        "1": {
          "set": () => {
            //direct
            mParams.mCb();
          }
        },
      };
      mAuto[mEnv].set();

      /*
      USAGE
      core_1mn['mWait']['auto'](
        {
            "mCb": function(){
              //add your code..
            }
        });*/

    }

  },


  //collectors..
  "mCollect": { //Need to [--DEPRECATE-- OR --RE-BUILD--]
    //here we collect info..
    "mUtil": {
      //here we add reusable (functions)..
      "mGetLineNo": () => {
        //here we get code(line no)
        let e = new Error();
        e = e.stack.split("\n")[2].split(":");
        e.pop();
        return e.pop();
      },
      "mDeviceInfo": () => {
        //here we device info..
        var mInfo = {
        };
        if (window.navigator.platform != undefined) {
          mInfo['platform'] = window.navigator.platform;
        }
        if (window.navigator.appVersion != undefined) {
          mInfo['appVersion'] = window.navigator.appVersion;
        }
        if (window.navigator.appCodeName != undefined) {
          mInfo['appCodeName'] = window.navigator.appCodeName;
        }
        if (window.navigator.userAgent != undefined) {
          mInfo['userAgent'] = window.navigator.userAgent;
        }
        if (window.navigator.vendor != undefined) {
          mInfo['vendor'] = window.navigator.vendor;
        }

        return mInfo;

      }
    },

    "log": {
      "set": (mLogData) => {
        //data..
        //https://www.bennadel.com/blog/3941-styling-console-log-output-formatting-with-css.htm
        var mLogList = {
          "err_mn": {
            "set": (mGetParams) => {
              var mParams = mGetParams;
              var err_mn = mGetParams['err_mn'];
              err_mn.cb.onLog(); //Send(log to (function))
              //add (additional..)
              err_mn['err_adv']['deviceInfo'] = core_1mn['mCollect']['mUtil'].mDeviceInfo();

              //show..
              console.group(
                "%cERROR",
                "background-color: #f51d45 ; color: #ffffff ; font-weight: 450 ; padding: 0.4vh ;" +
                "font-size: 1.5vh ; border-radius: 0.5vh;"
              );
              console.log(err_mn);
              console.groupEnd();

            }
          },
          "info_mn": {
            "set": (mGetParams) => {
              var mParams = mGetParams;
              var info_mn = mGetParams['info_mn'];
              //show..
              console.group(
                "%c INFO",
                "background-color: #617ae8 ; color: #ffffff ; font-weight: 450 ; padding: 0.4vh ;" +
                "font-size: 1.5vh ; border-radius: 0.5vh;"
              );
              console.log(info_mn);
              console.groupEnd();

            }
          },
        };
        if (Object.keys(mLogData).length == 1) {
          mLogList[Object.keys(mLogData)[0]].set(mLogData);
        } else {
          console.error(`error: invalid log data [${mLogData}]..`);
        }

      }
    }

  },


  //api requests..
  "mApiReq": {

    "mUtil": {
      //here we add reusable (functions).. 
    },

    "HTTP": {
      "set": (mGetParams) => {
        var mParams = mGetParams;
        var mData = mParams['data'];
        var mUrl = mParams['url'];
        var mMethod = mParams['method'] != undefined ? mParams['method'] : "post"; //[post, get]
        let mHeaders = mParams['headers'] != undefined ? mParams['headers'] : { 'Content-Type': `multipart/form-data; boundary=undefined` }; //${mData._boundary}
        
        let mResTyp = mParams['res_typ'] != undefined ? mParams["res_typ"] : ""; //reponse-type //["", "blob"]

        var mCb = mParams['cb'];


        //**send req...
        //----Method-1-----//
        //axios (api)
        /*axios( 
          {
            method: mMethod,
            headers: mHeaders,
            data: mData,
            url: mUrl
          },
        )
       .then(function (response) {
        //Response.....
        console.log(response);
        //return;
        var dta = response['data'];
        mSendCB("onLoad", {"dta": dta });
      })
      .catch(function (error) {
        //Error.....
        console.log(error);
        //return;
        var response = error['response'];
        var dta = response['data'];
        mSendCB("onErr", {"dta": dta });
      });*/


        //----Method-2-----//
        /* Make an HTTP request*/
        /*var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            //loaded success......
            //console.log('loaded success: '+this.responseText);
             //Response.....
             var response = this.responseText;
             //console.log(response);
             //return;
             var dta = response;
             mSendCB("onLoad", {"dta": JSON.parse(dta) });
          }
          if (this.status != 200 && this.status > 0) {
              //console.log("Error."); 
              //Error.....
              var error = this.responseText;
              //console.log(error);
              //return;
              var dta = error;
              mSendCB("onErr", {"dta": JSON.parse(dta) });
          } 
        }
       }
       xhttp.open(mMethod, mUrl, true);
       function setHeaders(headers){
        for(let key in headers){
          xhttp.setRequestHeader(key, headers[key]) 
        }
       }
       setHeaders(mHeaders);
       //--------x-www-form-urlencoded-----------//
       if (mHeaders["Content-Type"]=="application/x-www-form-urlencoded") {
         //xhttp.send("epType_mn=idp&epName_mn=10");
         //var mData = new FormData();
         //mData.append("key1", "value1");
         //mData.append("key2", "value2");
         //set vars..
         var fb_arr = [...mData.entries()];
         var mNewData = "";
         for (let i1 = 0; i1 < fb_arr.length; i1++) {
          const pair = fb_arr[i1];
          mNewData+=`${pair[0]}=${pair[1]}`; 
          if (i1 < (fb_arr.length-1)) {
            mNewData+="&";
          }
         }
         //console.log(mNewData);
         xhttp.send(mNewData); 
       }else {
         xhttp.send(mData); 
       }
       */


        //----Method-3-----//
        function mFetch() {
          async function sndData(url = "") {
            //get body..
            let mGetBody = (d, h) => {
              //let formBody = Object.keys(mFormDta).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(mFormDta[key])).join('&');
              //console.log(formBody);
              let mGet1 = (mData) => {
                //set vars..
                var fb_arr = [...mData.entries()];
                var mNewData = "";
                for (let i1 = 0; i1 < fb_arr.length; i1++) {
                  const pair = fb_arr[i1];
                  //encode..
                  var encodedKey = encodeURIComponent(pair[0]);
                  var encodedValue = encodeURIComponent(pair[1]);
                  mNewData += `${encodedKey}=${encodedValue}`;
                  if (i1 < (fb_arr.length - 1)) {
                    mNewData += "&";
                  }
                }
                //console.log(mNewData);
                return mNewData;
              };
              if (h["Content-Type"] == "application/x-www-form-urlencoded") {
                d = mGet1(d);
              }
              return d;
            }
            const mBody = mGetBody(mData, mHeaders);
            //console.log(mBody);
            //--request payload--//
            let mReqP = {
              method: mMethod, // *GET, POST, PUT, DELETE, etc.
              mode: "cors", // no-cors, *cors, same-origin
              //cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
              //credentials: "include", // include, *same-origin, omit
              //headers: 
              /*{
                //"Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
                //"Authorization": `Bearer MY_TOKEN`
              }*/
              //mHeaders,
              redirect: "follow", // manual, *follow, error
              referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
              //body: JSON.stringify(data), // body data type must match "Content-Type" header
              body: mBody //mData
            };
            if (mHeaders["Content-Type"] == "application/x-www-form-urlencoded") {
              //set headers..
              mReqP["headers"] = mHeaders;
            }

            // Default options are marked with *
            const response = await fetch(url,
              mReqP
            );
            return response;
          }
          sndData(mUrl).then(async (data) => {
            //console.log(data); // JSON data parsed by `data.json()` call
            const status = data.status;
            let responseText = null;

            if (mResTyp==`blob`) {
              responseText = await data.blob();
            }else {
              responseText = await data.text();
            }

            //test..
            //let mBlob = await data.blob();
            //check (type)
            //console.log(responseText);

            if (status == 200) {
              //loaded success......
 
              //check [Headers]..
              if (data.headers.get(`content-type`)==`application/json`) {
                //Response.....
                var dta = responseText;
                mSendCB("onLoad", { "dta": JSON.parse(dta) });
                return;
              }
              if (mResTyp=="blob") {
                //Response.....
                var dta = responseText;
                mSendCB("onLoad", { "dta": {
                  "blob": dta
                } });
                return;
              }
              //default.. [try with json]
              try {
                //Response.....
                let dta = responseText;
                mSendCB("onLoad", { "dta": JSON.parse(dta) });
              } catch (e) {
                //err..
                console.error(`err: 
                Unable to send callback because =>
                default.. [try with json]`);
              }
 

            }
            if (status != 200 && status > 0) {
              //Error.....
              var dta = responseText;
              mSendCB("onErr", { "dta": JSON.parse(dta) });
            }
          }).catch((e) => {
            console.log(e);
            //Error.....
            mSendCB("onErr", {
              "dta": {
                "err_mn": {
                  "err": {
                    "msg": e,
                  },
                  "res_mn": {
                    "type": "service_unavail_err",
                    "msg": "[Error] An error occurred while connecting to the server.",
                  }
                }
              }
            });
          });
        }
        mFetch();



        //here we send callback..
        function mSendCB(mCb_name, mDta) {
          //wait (auto)..
          core_1mn['mWait']['auto'](
            {
              "mCb": function () {
                if (mCb != undefined) {
                  if (mCb[mCb_name] != undefined) {
                    mCb[mCb_name](mDta);
                  }
                }
              }
            });
        }

        /*
        USAGE
           core_1mn['mApiReq']['HTTP'].set(
                                 {
                                  "data": mFormDataTest,
                                  "url": url4_GVars,
                                  "method": "post",

                                  "res_typ": "", //["", "blob"]

                                  "cb": {
                                      "onLoad": (mRes) => {
                                          console.log(mRes);
                                      },
                                      "onErr": (mRes) => {
                                          console.log(mRes);
                                      }
                                  }
                                 }
                            );
        */


      }
    }



  },

  //here we check device (type)
  "checkDeviceType": {
    "set": function (mGetParams) {
      //set vars..
      var mParams = mGetParams;
      var mCb = mParams['cb'];
      function isMobileTablet() {
        var check = false;
        (function (a) {
          if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
            check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
      }
      //send callback..
      var mSend_cb = function (mCb_name, data) {
        if (mCb != undefined) {
          if (mCb[mCb_name] != undefined) {
            mCb[mCb_name](data);
          }
        }
      };

      if (isMobileTablet() == true) {
        //detected touch-enabled devices(mobile or tablet)
        mSend_cb("onLoad", 0); //Mobile
        return;
      }
      //detected (pc)
      mSend_cb("onLoad", 1);
      return; //Pc

      /*
      USAGE
      core_1mn['checkDeviceType'].set({
  "cb": {
    "onLoad": function(data){
      console.log(data);
    }
  }
});
      */

    }
  },
    

    //Redirect to Another Webpage..
    "rdct": {
      "set": function(url="",typ=0){
       //set..  
       if (typ==0) {
         // Simulate a mouse click:
         window.location.href = url; //http://www.example.com
       }
       if (typ==1) {
         // Simulate an HTTP redirect:
         window.location.replace(url); ////http://www.example.com
       } 
       
       /*
       USAGE
       core_1mn["rdct"].set("http://www.example.com", 1);
       */
      }
    },
 
 
   //Route..
   "route": {
    "path": function(){
      var mRp = window.location.pathname;
      //console.log(mRp); //-> /security/
      return mRp;
      /*
      --USAGE--
      core_1mn["route"].path();
      */
    },
    "set": function(title="",path=""){
      const mConti = () => {
        let mS = window.location.search;
        //modify page (data).. without refresh..
        document.title = title; //My Page
        window.history.pushState('', '', 
        `${path}${mS}` //--> '/my-route'
        );
      };
      
      try {
        //--Check for (mware)--//
        config_mn.core_1mn.config["route"]["mware"]({
          "onLoad": () => {
            mConti();
          }
        });
      } catch (error) {
        //without (mware)
         mConti();
      }

      
      /*
      --USAGE--
      
      */
    }
   },
 
 
   //datatypes (Check DataType of Value)..
   "dTyp": {
     "is_int": function(v){
       if (typeof v === "number" && v.toString().indexOf(".")===-1) {
           return true;
       }else{
           return false;
       }
       /*
       --USAGE--
       core_1mn["dTyp"].is_int(i);
       */
     },
     "is_string": function(v){
       if (typeof v === "string") {
           return true;
       }else{
           return false;
       }
       /*
       --USAGE--
       core_1mn["dTyp"].is_string(i);
       */
     },
     "is_decimal": function(v){
      if (typeof v === "number" && v.toString().indexOf(".")!==-1) {
          return true;
      }else{
          return false;
      }
      /*
      --USAGE--
      core_1mn["dTyp"].is_decimal(i);
      */
     },
   },

   //conversions.. 
   "mCnv": {
     "strToDecimal": (v="", cb={"onLoad":(decimal)=>{}, "onErr":(err)=>{}}) => {
      //func--
      function mSendErr(msg) {
        if (cb["onErr"]!=undefined) {
          cb.onErr(msg);
        }
      }
        //check (str)..
        if (core_1mn["dTyp"].is_string(v)==false) {
           mSendErr("err: [strToDecimal]");
           return;
        }
        try {
          let mEval = eval(v);
          //check (decimal)..
          if (core_1mn["dTyp"].is_decimal(mEval)==false) {
            mSendErr("err: [strToDecimal] incorrect (Decimal)");
            return;
          }
          //all ok..
          cb.onLoad(mEval);
        } catch (e) {
          mSendErr("err: [strToDecimal] incorrect (Decimal)");
          return;
        } 

        /*
        --USAGE--
        core_1mn["mCnv"].strToDecimal("45.577", {
          "onLoad": (v) => {
             console.log(v);
          },
        });
        */

     },
     "strToInteger": (v="", cb={"onLoad":(integer)=>{}, "onErr":(err)=>{}}) => {
      //func--
      function mSendErr(msg) {
        if (cb["onErr"]!=undefined) {
          cb.onErr(msg);
        }
      }
        //check (str)..
        if (core_1mn["dTyp"].is_string(v)==false) {
           mSendErr("err: [strToInteger]");
           return;
        }
        try {
          let mEval = eval(v);
          //check (integer)..
          if (core_1mn["dTyp"].is_int(mEval)==false) {
           mSendErr("err: [strToInteger] incorrect (Integer)");
           return;
          }
          //all ok..
          cb.onLoad(mEval);
        } catch (e) {
          mSendErr("err: [strToInteger] incorrect (Integer)");
          return;
        }

        /*
        --USAGE--
        core_1mn["mCnv"].strToInteger("45", {
          "onLoad": (v) => {
             console.log(v);
          },
        });
        */

     },
     "unit": {
         "set": (v="", cb={"onLoad":(v)=>{}, "onErr":(err)=>{}}, 
          opt={"add":undefined/*addition*/, "sub": undefined/*subtraction*/, "divide": undefined/*divide*/, "multiply": undefined /*multiply*/ }, ) => {
              let mAdd = opt["add"]!=undefined ? opt["add"] : 0;
              let mSub = opt["sub"]!=undefined ? opt["sub"] : 0;
              let mDivide = opt["divide"]!=undefined ? opt["divide"] : 0;
              let mMultiply = opt["multiply"]!=undefined ? opt["multiply"] : 0;
              //vali..
              if (v.trim()=="") {
                 //err..
                 throw "err: mCnv.unit";
              }
              if (v.trim().indexOf(" ")!==-1) {
                //err..
                throw "err: mCnv.unit [Space not supported]";
              }
              //all ok..
              //rndr..
              let mRndr = {
                "l": [
                  {
                    //https://www.w3schools.com/cssref/css_units.php
                    "name": "CSS unit", 
                    "key": ["vh", "vw", 
                    "pr", // %
                    "px"],
                    "set": (v, u) => {
                      v+=mAdd;
                      v-=mSub;

                      //check..
                      if (opt.hasOwnProperty("divide")) {
                        v=(v/mDivide);
                      }

                      //check..
                      if (opt.hasOwnProperty("multiply")) {
                        v=(v*mMultiply);
                      }

                      //check & set..
                      if (u==`pr`) {
                        u=`%`;
                      }

                      return v+u;
                    } 
                  }
                ]
              };
              //Sample Format.. (v => {NUMBER}{UNIT}) eg => "1.0vh"

              //fmt..
              v = v.replace("%",`pr`);

              //set vars..
              let az_Idx = v.indexOf(v.match(RegExp("[a-zA-Z]")));
              let mUnit = v.substring(az_Idx);
              let mVal = v.substring(0, az_Idx);
              /*console.log(`az_Idx: ${az_Idx}`);
              console.log(`mVal: ${mVal}`);*/
              //console.log(mUnit);
              

              //vali..
              try {
                 mVal = eval(mVal);
                 if (typeof mVal !== "number") {
                    throw "err: mCnv.unit [eval]";
                 }
              } catch (e) {
                 throw "err: mCnv.unit [eval]";
              }
              //all ok..

              //set..
              const mF = mRndr["l"].find(e => e["key"].indexOf(mUnit)!==-1);
              if (mF==undefined) {
                  //err..
                  throw `err: [unit=${mUnit}] not supported!`;
              }
              //all ok..
              let mRes = mF.set(mVal, mUnit);
              if (cb["onLoad"]!=undefined) {
                cb.onLoad(mRes);                
              }
              return {
                "v": mRes
              };

              /*
              --USAGE-- 
              let mRes = core_1mn["mCnv"].unit.set("1.5px", {
              "onLoad": (v) => {
                 //console.log(v);
              }, 
             },
             {
              "add": 5,
              "sub": 2,
              "divide": 1,
              "multiply": 2
            });
            --OR--
            console.log(mRes["v"]);*/


         } 
     },
     "color": {
      //https://www.w3docs.com/snippets/javascript/how-to-convert-rgb-to-hex-and-vice-versa.html
        "RGBtoHex": {
          "set": (mP={ rgb:"" }) => { //r:-1, g:-1, b:-1, 
            let r, g, b;
            if (mP.rgb!="") {
              mP.rgb = mP.rgb.replace("rgb", "").replace("(", "").replace(")", "").replaceAll(",", " ").split("  ");
              r = parseInt(mP.rgb[0]);
              g = parseInt(mP.rgb[1]);
              b = parseInt(mP.rgb[2]);
              //console.log(`mP.rgb: ${mP.rgb}`);
            }
            //set..
            return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
            /*
            USAGE
            console.log(core_1mn.mCnv.color.RGBtoHex.set({
              "rgb": `rgb(28, 135, 201)`
            })); // #1c87c9
            */
          }
        },
        "HexToRGB": {
          "set": (hex) => {
            let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            let mR = result ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16)
            } : null;
            return {
              "rgb": `rgb(${mR.r}, ${mR.g}, ${mR.b})`,
              "code": mR
            };

            /*
            USAGE
            console.log(core_1mn.mCnv.color.HexToRGB.set("#1c87c9").b); // 201
            */
          }
        },
     }
   },


   //Memory Database..
   "memDB": {
    //mn based..
    "MN": {
      //databases..
      "db": [
          {
              "name": "Sample_DB",
              //collections..
              "col": [
                  {
                     "name": "Sample",
                     //documents..
                     "doc": [

                     ]
                  }
              ]
          }
      ],

      //query..
      "qry": {
          "db": {
              "create": (db_name="", cb={}) => {
                  //create (DB)..
                  //vali..
                  const found = core_1mn["memDB"]["MN"]["db"]
                  .find(e => e["name"] == db_name);
                  if (found!=undefined) {
                    //already exists..
                    var msg = `Error: [db_name=${db_name}] already exists`;
                    try {
                      cb["onErr"](msg);
                    } catch (error) {}
                    return;
                  }
                  //all ok.. 
                  //cb..
                  if (core_1mn["memDB"]["MN"]["db"].push({
                    "name": db_name,
                    "col": []
                  })) {
                    //ok.. 
                    var msg = `Ok: [db_name=${db_name}] created`;
                    try {
                      cb["onLoad"](msg);
                    } catch (error) {}
                  }
              },
          },
          "col": {
            "create": (db_name="", col_name="", cb={}) => {
                //create (col)..
                //vali..
                const foundDB_idx = core_1mn["memDB"]["MN"]["db"]
                .findIndex(e => e["name"] == db_name);
                if (foundDB_idx==-1) {
                  //not exists.. 
                  var msg = `Error: [db_name=${db_name}] not exists`;
                    try {
                      cb["onErr"](msg);
                  } catch (error) {}
                  return;
                }
                const foundCol = core_1mn["memDB"]["MN"]["db"][foundDB_idx]["col"]
                  .find(e => e["name"] == col_name);
                if (foundCol!=undefined) {
                    //already exists.. 
                    var msg = `Error: [col_name=${col_name}] already exists`;
                    try {
                      cb["onErr"](msg);
                    } catch (error) {}
                    return;
                }
                //all ok.. 
                //cb..
                if (core_1mn["memDB"]["MN"]["db"][foundDB_idx]["col"].push({
                  "name": col_name,
                  "doc": []
                })) {
                  //ok.. 
                  var msg = `Ok: [col_name=${col_name}] created`;
                    try {
                      cb["onLoad"](msg);
                  } catch (error) {}
                }

            },
          },
          "doc": {
            "create": (db_name="", col_name="", doc={}, cb={}) => {
                //create (doc)..
                //vali..
                const foundDB_idx = core_1mn["memDB"]["MN"]["db"]
                .findIndex(e => e["name"] == db_name);
                if (foundDB_idx==-1) {
                  //not exists.. 
                  var msg = `Error: [db_name=${db_name}] not exists`;
                    try {
                      cb["onErr"](msg);
                  } catch (error) {}
                  return;
                }
                const foundCol_idx = core_1mn["memDB"]["MN"]["db"][foundDB_idx]["col"]
                  .findIndex(e => e["name"] == col_name);
                if (foundCol_idx==-1) {
                    //not exists.. 
                    var msg = `Error: [col_name=${col_name}] not exists`;
                    try {
                      cb["onErr"](msg);
                    } catch (error) {}
                    return;
                }
                
                //all ok.. 
                function mAdd(doc) {
                  //modify..
                  doc["_id"] = core_1mn["mUniqueId"].mGenerate(17);
                  //cb..
                  if (core_1mn["memDB"]["MN"]["db"][foundDB_idx]["col"][foundCol_idx]["doc"]
                    .push(doc) ) {
                    //ok.. 
                    var msg = `Ok: [doc_id=${doc["_id"]}] created`;
                      try {
                        cb["onLoad"](msg);
                    } catch (error) {}
                  }
                  
                }
                if (Array.isArray(doc)) {
                  for (let i1 = 0; i1 < doc.length; i1++) {
                    const mCurr_I1 = doc[i1];
                    mAdd(mCurr_I1);
                  }
                }else {
                  mAdd(doc);
                }
               


            },
            "read": (db_name="", col_name="", search={}, cb={}) => {
              //create (doc)..
              //vali..
              const foundDB_idx = core_1mn["memDB"]["MN"]["db"]
              .findIndex(e => e["name"] == db_name);
              if (foundDB_idx==-1) { 
                //not exists.. 
                var msg = `Error: [db_name=${db_name}] not exists`;
                try {
                  cb["onErr"](msg);
                } catch (error) {}
                return;
              }
              const foundCol_idx = core_1mn["memDB"]["MN"]["db"][foundDB_idx]["col"]
                .findIndex(e => e["name"] == col_name);
              if (foundCol_idx==-1) {
                  //not exists.. 
                  var msg = `Error: [col_name=${col_name}] not exists`;
                  try {
                    cb["onErr"](msg);
                  } catch (error) {}
                  return;
              }
              
              //all ok..
              const doc_arr =  core_1mn["memDB"]["MN"]["db"][foundDB_idx]["col"][foundCol_idx]["doc"].filter(
                e => e[Object.keys(search)[0]] == Object.values(search)[0]
              );
              //cb..
              try {
                cb["onLoad"](doc_arr);
              } catch (error) {}

            },
          },
      }

      /*
      --USAGE--
       //create DB..
       core_1mn["memDB"]["MN"]["qry"]["db"].create("recepi", {
        "onLoad": (data) => {
            console.log(data);
        },
        "onErr": (err) => {
            console.log(err);
        }
      });
      //create Col..
      core_1mn["memDB"]["MN"]["qry"]["col"].create("recepi", "col1", {
          "onLoad": (data) => {
              console.log(data);
          },
          "onErr": (err) => {
              console.log(err);
          }
      });
      //create Doc..
      core_1mn["memDB"]["MN"]["qry"]["doc"].create("recepi", "col1", 
      {
          "dta": "Data1",
      }, {
          "onLoad": (data) => {
              console.log(data);
          },
          "onErr": (err) => {
              console.log(err);
          }
      });
      //----Read----//
      core_1mn["memDB"]["MN"]["qry"]["doc"].read("recepi", "col1",
      {
          "dta": "Data1",
      }, {
          "onLoad": (data) => {
              console.log(data);
          },
          "onErr": (err) => {
              console.log(err);
          }
      }); 
     */
    
      

    }
   },


  //Separator
  "sep": {
    "conf": [ //configuration..
    {
      "name": "DEFAULT",
      "0": "rgba(201,192,192, 1)"  //rgba(201,192,192, 1) || transparent
    },
    {
      "name": "LIGHT",
      "0": "rgba(201,192,192, 0.5)"
    }, 

    ],
    "set": (mGetParams) => {
      var mParams = mGetParams;
      var mW = mParams['w']!=undefined ? mParams['w'] : "100%";
      var mH = mParams['h']!=undefined ? mParams['h'] : "1px";
      var mTyp = mParams['typ']!=undefined ? mParams['typ'] : 0; //type ["DEFAULT", "LIGHT"]
      var mE1 = mParams['e1']; //@req
      //set.....
      var mSep = document.createElement("div");
      mSep.style.width = mW;
      mSep.style.height = mH;
      mSep.style.backgroundColor = core_1mn["sep"]["conf"][mTyp]["0"];

      //overwrite if..
      if (mParams.hasOwnProperty("c")) {
      mSep.style.backgroundColor = mParams['c'];
      }

      if (mE1!=undefined) {
         mE1.appendChild(mSep);
      }else{
        return {
          "e1": mSep,
          "bg": mSep.style.backgroundColor,
        };
      }

      /*
      --USAGE--
      
       //Separator.....
       core_1mn['sep'].set({
            "w": "1px",
            "h": "100%",
            "c": `YOUR_CUSTOM_COLOR`,  //Optional
            "e1": mItemDiv,
       });
       --e1-- [Not Found]
       var mParams = core_1mn['sep'].set({
            "w": "1px",
            "h": "100%",
       }); //RETURN (below params)
       mParams["bg"];
       mParams["e1"];

      */

    }

  },



  //Snackbar / Toast
  "toast": {
    "conf": [ //configuration..
    {
      "name": "DEFAULT",
      "0": "#333" //rgba(201,192,192, 1)
    },
    {
      "name": "LIGHT",
      "0": "rgba(201,192,192, 0.5)"
    }, 

    ],
    "1": {
    "set": (mGetParams={
    "e1": document.body,  
    "w":"","h":"","typ":0, 
    "txt1":{
      "v": "", //text
      "c": "", //color
      "fs": "", //font-size
    }, "svg1":{
      "v": "", //svg
      "c": "", //color
      "w": "", //width
      "h": "", //height
    } } ) => {
      var mParams = mGetParams;
      var mW = mParams['w']!=undefined ? mParams['w'] : "20vw"; //100%
      var mH = mParams['h']!=undefined ? mParams['h'] : "4vh"; //100%
      var mTyp = mParams['typ']!=undefined ? mParams['typ'] : 0; //type ["DEFAULT", "LIGHT"]
      var mE1 = mParams['e1']!=undefined ? mParams['e1'] : document.body; //mParams['e1']; //@req  //document.body
      let mTxt1 = mParams['txt1']!=undefined ? mParams['txt1'] : {
        "v": "", //text
        "c": "#fff", //color
        "fs": "1.6vh", //font-size
      }; 
      let mSvg1 = mParams['svg1']!=undefined ? mParams['svg1'] : {
        "v": "", //svg
        "c": "#fff", //color
        "w": "1.5vh", //width
        "h": "1.5vh", //height
      };

      //https://www.w3schools.com/howto/howto_js_snackbar.asp
      //set css..
      let mCssID = "mn-snackbar-css";
      let mID1 = "snackbar";
      let mSet_css = (mID, mID1) => {
        let v_css_1 = "120px";
        let css = `
        /* The snackbar - position it at the bottom and in the middle of the screen */
        #${mID1} {
          visibility: hidden; /* Hidden by default. Visible on click */
          min-width: 250px; /* Set a default minimum width */
          margin-left: -125px; /* Divide value of min-width by 2 */
          background-color: #333;  /* Black background color */
          color: #fff; /* White text color */
          text-align: center; /* Centered text */
          border-radius: 2px; /* Rounded borders */
          padding: 16px; /* Padding */
          position: absolute; /* Sit on top of the screen */  /*fixed*/
          z-index: 1; /* Add a z-index if needed */
          left: 80%; /* Center the snackbar */  /*50%*/
          bottom: ${v_css_1}; /* 30px from the bottom */  /*30px*/
        }
        
        /* Show the snackbar when clicking on a button (class added with JavaScript) */
        #${mID1}.show {
          visibility: visible; /* Show the snackbar */
          /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
          However, delay the fade out process for 2.5 seconds */
          -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
          animation: fadein 0.5s, fadeout 0.5s 2.5s;
        }
        
        /* Animations to fade the snackbar in and out */
        @-webkit-keyframes fadein {
          from {bottom: 0; opacity: 0;}
          to {bottom:  ${v_css_1}; opacity: 1;}
        }
        
        @keyframes fadein {
          from {bottom: 0; opacity: 0;}
          to {bottom:  ${v_css_1}; opacity: 1;}
        }
        
        @-webkit-keyframes fadeout {
          from {bottom:  ${v_css_1}; opacity: 1;}
          to {bottom: 0; opacity: 0;}
        }
        
        @keyframes fadeout {
          from {bottom:  ${v_css_1}; opacity: 1;}
          to {bottom: 0; opacity: 0;}
        }  
        `;

        //set..
        let mE_css;
        if (document.getElementById(mID)!=null) {
          mE_css = document.getElementById(mID);
        }
        if (document.getElementById(mID)==null) {
         mE_css = document.createElement("style");
         mE_css.id = "global-css";
         mE_css.innerHTML = css;
         document.head.appendChild(mE_css);
        }
      };
      mSet_css(mCssID, mID1);


      //cov..
      let mCov = document.createElement("div");
      //mCov.style.backgroundColor = "red";
      mCov.style.position = "relative";
      mE1.appendChild(mCov);


      //set.....
      var mT = document.createElement("div");
      mT.id = mID1;
      mT.style.width = mW;
      mT.style.height = mH;
      //mT.style.backgroundColor = core_1mn["sep"]["conf"][mTyp]["0"];
      mCov.appendChild(mT);

      //set..
      let mSet_c = (mE) => {
        let mC = document.createElement("div");
        mC.style.display = "flex";
        mC.style.justifyContent = "center";
        mC.style.alignItems = "center";
        mC.style.width = "100%";
        mC.style.height = "100%";
        mE.appendChild(mC);

         //svg..
         let mSet_svg1 = (mE, a) => {
          core_1mn['mSvg'].set({
            "0": a["v"],  //svg file name --OR-- <svg></svg>
            "2": a["w"],
            "3": a["h"],
            "4": a["c"], //"rgba(34,34,34, 1.0)",
            "5": mE,
            //you can set and (reload) FIELD by (assigning) this func..
            //"reload": () => {},
            "cb": { 
            }
           });
         };
         mSet_svg1(mC, mSvg1);


         //Space.....
         core_1mn['space'].set({
          "w": "0.3vw",
          "e1": mC,
         });


         //txt
         let mSet_txt1 = (mE, a) => {
           let mTxt = document.createElement("div");
           mTxt.style.color = a["c"];
           mTxt.style.fontSize = a["fs"];
           mTxt.innerHTML = a["v"];
           mE.appendChild(mTxt);
         };
         mSet_txt1(mC, mTxt1);
        

      };
      mSet_c(mT);

      //console.log(mE1);

      //test..
      // Add the "show" class to DIV
      mT.className = "show";
      // After 3 seconds, remove the show class from DIV
       let mTO1 = setTimeout(() => {
        clearInterval(mTO1);
        //set..
        //mT.className = mT.className.replace("show", "");
        //mT.remove();
        mCov.remove();
       }, 2700); //3000

       

      /*
      --USAGE--
      core_1mn["toast"]["1"].set({
        "e1": YOUR_DOM_ELEM
        "svg1": {
            "v": "search_0.svg",
            "c": "orange",
        },
        "txt1": {
            "v": res_mn["msg"],
            "c": "#fff",
        }
    });
    */

    }
    }

  },


  //Color..(Color Processing)
  "color": {
    //https://www.spycolor.com/w3c-colors
    //https://www.spycolor.com/0288d1

      //it will generate Array of Colors from Single Color.. LENGTH(8)
      "generatePalette": {
         "set": (mP={"color":""}, cb={
          "onLoad": (data={"0":[]}) => {}
         }) => {
          /**
           * @color => will be your color
          */
           //set vars..
           let mRes = {
            "0": [] //array of colors..
           };

           //--Method-1--//
           let mMethod1 = () => {
            //https://leonardocolor.io/#
            //----leonardocolor-----//
           /*import("./third-party/leonardocolor/@adobe/leonardo-contrast-colors/index.mjs").then( (v) => {
              //alert("Init success..");
              //use window.chroma [GlobalVariable]
              console.log(v);
    
            }).catch((e) => {
              console.log(e);
            });*/               
            }

            //--Method-2--//
            let mMethod2 = () => {
              //----chroma-----//
             import("./third-party/chrome/chroma.min.js").then( () => {
               //https://github.com/gka/chroma.js/
               //https://gka.github.io/palettes/#/10|s|ffa500|ffffe0,ff005e,93003a|1|1
               //use window.chroma [GlobalVariable]
               //set..
               let scale = chroma.scale(['white', `${mP['color']}`]);
               let mScaleArr = [
                //0.0,
                0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 
                //1.0
              ];
               let mArr = (a) => {
                let mNew = [];
                for (let i = 0; i < a.length; i++) {
                  let e = a[i];
                  let mOut = scale(e).hex(); // #FF7F7F  //0.5
                  mNew.push(mOut);
                }
                return mNew;
               };
               let mOutArr = mArr(mScaleArr);

               //console.log(`=======chroma=======`);
               //console.log(mOutArr);
      
               //send cb..
               mRes["0"] = mOutArr;
               cb.onLoad(mRes);

              }).catch((e) => {
                console.log(e);
              });             
            }
            mMethod2();

            /*
            --USAGE--
            core_1mn.color.generatePalette.set({
                    "color": `#2c59d4`
                }, {
                    "onLoad": (data) => {
                        let m0 = data["0"]; //array of colors.. LENGTH(8)
                        console.log(m0);
                    }
                });
            */


         }
      },

      "test": () => { //-----It is for testing & Development------//
        //https://gka.github.io/palettes/#/9|s|00429d,96ffea,ffffe0|ffffe0,ff005e,93003a|1|1
        //https://gka.github.io/chroma.js/
        //https://github.com/gka/chroma.js
        //set..
        //import..
        import("./third-party/chrome/chroma.min.js").then( () => {
          //alert("Init success..");
          //use window.chroma [GlobalVariable]
          let mRes = chroma('#D4F880').darken().hex();  // #a1c550
          console.log(`=======chroma=======`);
          console.log(mRes);

        }).catch((e) => {
          console.log(e);
        });

      }
  },



  //log..[logging]  [We can log anything here]
  "log": {
    //Error..
    "err": (data) => {
        console.log(data);
    },
    //Warning..
    "warn": (data) => {
        console.log(data);
    },
    //Ok..
    "ok": (data) => {
        console.log(data);
    },
    /*
    --USAGE--
        core_1mn.log.err(YOUR_DATA);
        core_1mn.log.warn(YOUR_DATA);
        core_1mn.log.ok(YOUR_DATA);
    */

  },




  //code runner..
  "codeRun": {
    "set": (mP={"e":null,
     "html": "", "css": "", "js": ""}) => {
      //set vars..
      let mE = mP["e"];
      let mHTML = mP["html"]; //`<div id="myDiv" > My Value 1 <div>`;
      let mCSS = mP["css"]; /*`#myDiv {
        color: red
      }`;*/
      let mJS = mP["js"]; /*`
      document.getElementById("myDiv").innerHTML = "My Value (Modified by JS)";
      `;*/

      //mStart..
      //set..
      let mBox = document.createElement("div");
      mBox.style.width = "60vw";
      mBox.style.height = "50vh";
      mBox.style.backgroundColor = "lightgrey";
      mE.appendChild(mBox);
      let mStart = () => {
      mBox.innerHTML = ""; //reset..
      //set..
      //mBox.innerHTML = `Code Runner`;
      //mHori1..
      let mHori1 = document.createElement("div");
      mHori1.style.display = "flex";
      mHori1.style.height = "100%";
      mBox.appendChild(mHori1);
      
      //mL1..
      //rndr..
      let mRndr = {
        "utils": {
          "tarea1": () => {
            let mT = document.createElement("textarea");
            mT.style.width = "95%";
            mT.style.height = "92%";
            mT.style.resize = "none";
            return mT;
          },
          "rndr_txt1": (k, i, v={"e":null}) => {
            //set vars..
            let mE = v["e"];
            mE.innerHTML = ""; //reset..
            //set..
            let mT = mRndr["utils"].tarea1();
            mE.appendChild(mT);
            //init..
            mT.value = mRndr["l"][i]["val"];
            //events..
            mT.oninput = () => {
            //store..
            mRndr["l"][i]["val"] = mT.value;
            //send cb..
            //setTimeout(() => {
            mSet_L2();
            //}, 1000);
            };
          }
        },
        "l": [
          {
            "name": "Html",
            "key": "html",
            "gVars": {
            },
            "val": `${mHTML}`,
            "set": (k, i, v={"e":null}) => {
                mRndr["utils"].rndr_txt1(k, i, v);
            },
          },
          {
            "name": "Css",
            "key": "css",
            "gVars": {
            },
            "val": `${mCSS}`,
            "set": (k, i, v) => {
              mRndr["utils"].rndr_txt1(k, i, v);
            },
          },
          {
            "name": "Js",
            "key": "js",
            "gVars": {
            },
            "val": `${mJS}`,
            "set": (k, i, v) => {
              mRndr["utils"].rndr_txt1(k, i, v);
            },
          },
        ],
        "set": (k, v) => {
          let idx = mRndr["l"].findIndex(e => e["key"]==k);
          mRndr["l"][idx].set(k, idx, v);
        }
      };
      let mL1 = (mE) => {
        let mL = document.createElement("div");
        mL.style.width = "60%";
        mE.appendChild(mL);

        //set btns..
        let mBtns2 = (mE) => {
          let mHldr = document.createElement("div");
          mHldr.style.display = "flex";
          mHldr.style.paddingLeft = "20%";
          mE.appendChild(mHldr);
          //set..
          let mBtn = document.createElement("button");
          mBtn.innerHTML = `Reset`;
          mHldr.appendChild(mBtn);
          //events..
          mBtn.onclick = () => {
            mStart();
          };
        };
        let mBtns1 = (mE) => {
          let mHldr = document.createElement("div");
          mHldr.style.display = "flex";
          mE.appendChild(mHldr);
          //gen..
          let a = mRndr["l"];
          for (let i = 0; i < a.length; i++) {
            const e = a[i];
            //set..
            let mBtn = document.createElement("button");
            mBtn.innerHTML = e["name"];
            mHldr.appendChild(mBtn);
            //events..
            mBtn.onclick = () => {
              mRndr.set(`${e["key"]}`, {
                "e": mUi
              });
            };
          }
          //all ok..
          mBtns2(mHldr);
          //set..
          let mUi = document.createElement("div");
          mUi.style.width = "100%";
          mUi.style.height = "100%";
          mE.appendChild(mUi);
          //default..
          setTimeout(() => {
            mRndr.set("html", {
              "e": mUi
            });
            mSet_L2();
          }, 200);


        };
        mBtns1(mL);
        



      };
      mL1(mHori1);


      //mL2..
      let mL2 = document.createElement("div");
      mL2.style.width = "40%";
      mL2.style.border = "1px solid blue";
      mL2.style.backgroundColor = "white";
      mHori1.appendChild(mL2);
      let mSet_L2 = () => {
        mL2.innerHTML = ""; //reset..
        //set..
        let mHtml = mRndr["l"].find(e => e["key"]=="html")["val"];
        let mCss = mRndr["l"].find(e => e["key"]=="css")["val"];
        let mJs = mRndr["l"].find(e => e["key"]=="js")["val"];
        //mC
        let mC = document.createElement("div");
        mL2.appendChild(mC);
        //html..
        let mSet_html = (mV) => {
          mC.innerHTML = mV;
       };
       mSet_html(mHtml);
        //css..
        let mSet_css = (mE, mV) => {
          setTimeout(() => {
           let mSty = document.createElement("style");
           mE.appendChild(mSty);
           mSty.innerHTML = mV;
           }, 200);
        };
        mSet_css(mC, mCss);
        //js..
        let mSet_js = (mV) => {
          setTimeout(() => {
          //console.log(mV);
          eval(mV);
          }, 300);
       };
       mSet_js(mJs);


      }
      //mSet_L2();
      
      };
      mStart(); //default..


      /*
      --USAGE--
      core_1mn["codeRun"].set({
            "e": mDiv,
            "html": `<div id="myDiv" > My Value 1 <div>`,
            "css": `#myDiv {
                color: red
            }`,
            "js": `document.getElementById("myDiv").innerHTML = "My Value (Modified by JS)";`,
      });
      */
      


    }
  },



  //A.I (lib)..
  "ai": {
    //https://github.com/ml5js/ml5-library
    //https://learn.ml5js.org/#/reference/object-detector
    //https://learn.ml5js.org/#/tutorials/promises-and-callbacks
    //https://github.com/naptha/tesseract.js#tesseractjs

    "set": (mP={}, mCb={
      "od": (mP={}, mCb={}, mEvnt={}) => {}  //Object-Detection
    }) => {
      //set vars..
      //https://github.com/ml5js/ml5-library/blob/main/examples/javascript/ObjectDetector/COCOSSD_webcam/sketch.js
      let mDta = {
        "l": { //list..
          "od": (k) => {
            //set..
            let mUtils = {
                "gVars": {
                   "mDomE": null,  //Video || Image
                   "canvas": null,
                },
               //https://stackoverflow.com/questions/6877403/how-to-tell-if-a-video-element-is-currently-playing
               "isVideoPlaying": (video) => !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2),
               "canvas": (mE) => {
                const canvas = document.createElement("canvas"); 
                mE.appendChild(canvas);
                canvas.style.position = "absolute";
                //store..
                mUtils["gVars"]["canvas"] = canvas;
               },
               "draw": {
                 "1": (mV) => {
                  //set vars..
                  let mDomE = mUtils["gVars"]["mDomE"];
                  let mCanvas = mUtils["gVars"]["canvas"];
                  let mCtx = mCanvas.getContext('2d');

                  //hide..
                  mDomE.style.visibility = `hidden`;

                  //set..
                  //https://www.w3schools.com/jsref/prop_element_offsetwidth.asp
                  let mOW = mDomE.offsetWidth;
                  let mOH = mDomE.offsetHeight;

                  //log..
                  //console.log(mOW);
                  //console.log(mOH);
                  mCanvas.width = `${mOW}`;
                  mCanvas.height = `${mOH}`;

                  //utils..
                  /// expand with color, background etc.
                  let drawTextBG = (ctx, txt, font, x, y, padding) => {
                     ctx.font = font;
                     ctx.textBaseline = "top";
                     ctx.fillStyle = "#fff";

                     var width = ctx.measureText(txt).width;
                     ctx.fillRect(x, y, width + padding, parseInt(font, 10) + padding);

                     ctx.lineWidth = 2;
                     ctx.strokeStyle = "#009ddf";
                     ctx.strokeRect(x, y, width + padding, parseInt(font, 10) + padding);

                     ctx.fillStyle = "#009ddf";
                     ctx.fillText(txt, x + padding / 2, y + padding / 2);
                  };



                  /*
                  Sample
                  [
    {
        "label": "person",
        "confidence": 0.6042690277099609,
        "x": 213.99463653564453,
        "y": 10.099503993988037,
        "width": 215.99082946777344,
        "height": 346.17409229278564,
        "normalized": {
            "x": null,
            "y": null,
            "width": null,
            "height": null
        }
    },
    {
        "label": "person",
        "confidence": 0.5154551863670349,
        "x": 170.92092514038086,
        "y": 195.47151803970337,
        "width": 27.983436584472656,
        "height": 69.9872875213623,
        "normalized": {
            "x": null,
            "y": null,
            "width": null,
            "height": null
        }
    }
]
                  */


                  //set..
                  let mRndr = (c, w, h, o, mE) => {
                     // Clear part of the canvas
                     c.fillStyle = "#000000";
                     c.fillRect(0, 0, w, h);

                     c.drawImage(mE, 0, 0, w, h); //video

                     for (let i = 0; i < o.length; i += 1) {
                       //set..
                       /*c.font = "16px Arial";
                       c.fillStyle = "blue";
                       c.fillText(o[i].label, o[i].x + 4, o[i].y + 16);
                       */
                       drawTextBG(c, o[i].label, "16px arial", 
                       o[i].x + 0, //4 
                       o[i].y + 0, //4
                       20);

                       
                       c.beginPath();
                       c.rect(o[i].x, o[i].y, o[i].width, o[i].height);
                       c.strokeStyle = "#009ddf"; //blue
                       c.stroke();
                       c.closePath();
                     }

                  };
                  mRndr(mCtx, mOW-50, mOH-50, mV, mDomE);


                  //log..
                  //console.log(mV);
                 }
               },
               "detect": () => {
                //set vars..
                let mDomE = mUtils["gVars"]["mDomE"];
                // Detect objects in the video element
                objectDetector.detect(mDomE, (err, results) => { //video
                  if (err) {
                    console.error(err);
                    return;
                  }
                  //console.log(results); // Will output bounding boxes of detected objects
                  //send cb..
                  mDtaStruct["cb"].onDetect(results);

                  //check & set..
                  if(results){
                    //draw..
                    mUtils.draw["1"](results);
                  }

                  
                  //check..
                  if (mDomE.nodeName.toLowerCase()!="video") {
                      return; //Stop..
                  } 
                  if (mUtils.isVideoPlaying(mDomE)==false) {
                      return; //Stop..
                  }
                  //all ok..
                  //reload..
                  mUtils.detect();   //NOTE: (use for only videos..)


                });
               }
            };
            //set vars..
            let mDtaStruct = {
              "cb": {
                 "onDetect": () => {}
              },
              "evnt": {
                  "setInput": (mDomE) => { //Video || Image
                    //store..
                    mUtils["gVars"]["mDomE"] = mDomE;
                    mUtils.canvas(mDomE.parentElement);
                    //set..
                    mUtils.detect();                     
                  }
              }
            };

            // When the model is loaded
            let modelLoaded = () => {
              //console.log('Model Loaded!');
              //send cb..
              mCb[k]({}, mDtaStruct["cb"], mDtaStruct["evnt"]);
            };
            // Create a ObjectDetector method
            const objectDetector = ml5.objectDetector('cocossd', {}, modelLoaded);

          }
        }
      };

      //import..
      import("./third-party/ml5js/ml5.min.js").then( () => {
        //loaded..
        console.log(`ml5.min.js [LOADED] [added by core_1mn]`);

        //set..
        let mSet = (mV) => {
          let a = Object.keys(mV);
          //gen..
          for (let i = 0; i < a.length; i++) {
            const e_k = a[i];
            //const e_v = a[e_k];
            //set..
            if (mDta["l"].hasOwnProperty(e_k)==true) {
                mDta["l"][e_k](e_k);
            }
          }
        };
        mSet(mCb);

      });


      /*
      --USAGE--


      */

    }

  },



  //table (lib)..
  "table": {
    //https://handsontable.com/docs/javascript-data-grid/
    //https://gridjs.io/docs/examples/hello-world
    //https://react-grid-layout.github.io/react-grid-layout/examples/0-showcase.html
    //http://dsmorse.github.io/gridster.js/
    //https://www.ag-grid.com/
    //https://bryntum.com/products/grid/examples/
    //https://tabulator.info/
    //https://nhn.github.io/tui.grid/latest/tutorial-example02-complex-columns
    //https://datatables.net/
    //https://www.w3schools.com/html/html_tables.asp
    //https://www.w3.org/WAI/tutorials/tables/irregular/#:~:text=A%20element%20identifies%20each,noted%20in%20the%20span%20attribute.
   

    //set..
    "set": (mP={
      "e": HTMLElement,
      "payload": {}, //payload [Your Table Data]
    }, cb={
      "onLoad": (mP={}, cb={}, 
      //Events..  
      mEvnt = {
        "add_row": (row) => {},
        "del_row": (cond) => {},
        "add_col": (col) => {},
        "del_col": (cond) => {},
        "get_cell": (cond, cb={onLoad:(mP={})=>{}}) => {},

      } ) => {}
    },) => {
      //set vars..
      let mE = mP["e"];
      //mPayload..
      let mGet_mPayload= (mV) => {
         return mV;  //comment this line..[to see demo]
         return {  //Sample payload..
          "row": {
            "l": [

              {
                "n": "31",
                "x": { //(x) custom properties can be assign by user
                  "key1": "val1",
                  "key2": "val2",
                  "id": 1,
                },
                "l": [

                  { //--Orientation--//
                    "orien": "h"  //[h => horizontal, v=> vertical]
                  },

                  
                  {
                    "n": "Mon Jul 31 2023", 
                    "l": [
                      {
                        "n": "event 1",
                        "l": [
                          {
                            "n": "my sample 1",
                          },

                          {
                            "n": "my sample 2",
                          },

                          {
                            "n": "my sample breakfast 3",
                          },
                          
                        ]
                      }, 
                      {
                        "n": "event 2",
                        "l": [
                          {
                            "n": "my sample 1.1",
                          },   
                          
                        ]
                      }, 
                    ]
                    
                  },

                  {
                    "n": "CM child",
                    "l": []
                  },


                  {
                    "n": "MC child",
                    "l": []
                  },

                  
                ]
              },

              {
                "n": "32",
                "l": [

                  { //--Orientation--//
                    "orien": "h"  //[h => horizontal, v=> vertical]
                  },

                  
                  {
                    "n": "Mon Jul 31 2023", 
                    "l": [
                      {
                        "n": "event 1",
                        "l": [
                          {
                            "n": "my sample 1",
                          },

                          {
                            "n": "my sample 2",
                          },

                          {
                            "n": "my sample breakfast 3",
                          },
                          
                        ]
                      }, 
                      {
                        "n": "event 2",
                        "l": [
                          {
                            "n": "my sample 1.1",
                          },   
                          
                        ]
                      }, 
                    ]
                    
                  },

                  {
                    "n": "CM child",
                    "l": []
                  },


                  {
                    "n": "MC child",
                    "l": []
                  },

                  
                ]
              },  

            ]
          },
          "col": {
            "l": [

              {
                "n": "WK",
                "l": [
                  /*{
                    "n": "child 1",
                  },
                  {
                    "n": "child 2",
                  },*/
                ]
              },

              {
                "n": "Date",
                "l": [
                  /*{
                    "n": "child 1",
                  },
                  {
                    "n": "child 2",
                  },*/
                ]
              },

              {
                "n": "Events",
                "l": [
                  /*{
                    "n": "child 1",
                  },
                  {
                    "n": "child 2",
                  },*/
                ]
              },

              {
                "n": "Breakfast",
                "l": [
                  /*{
                    "n": "child 1",
                  },
                  {
                    "n": "child 2",
                  },*/
                ]
              },

              {
                "n": "CM",
                "l": [
                  /*{
                    "n": "child 1",
                  },
                  {
                    "n": "child 2",
                  },*/
                ]
              },

              {
                "n": "MC",
                "l": [
                  /*{
                    "n": "child 1",
                  },
                  {
                    "n": "child 2",
                  },*/
                ]
              },


            ]
          }

          //abbreviations..
          /**
           * @row = rows
           * @l = list
           * @col = columns
           * @n = name          [string eg=> "Item" || object => { "t": 0 allowed=>[ String, RawHtmlCode, DOM[function(mP={})=>return DOM;] ] , "val": YOUR_VAL } ]
           * @t = type
           * @orien => Orientation   [Horizontal || Vertical]
           * @x = custom properties can be assign by user  {"key1":"val1","key2":"val2", "id": 1}
           * @idx = Index    can be added by auto..   [COL_IDX || ROW_IDX]
           * @ui_code = DOM        can be added by auto..
           * @cell_idx = Cell Index  can be added by auto..   [CELL_IDX]
           * @cell =     Cell Obj    can be added by auto..   [CELL] => { "ui_code": DOM }
          */

         };
      };
      let mPayload = mGet_mPayload(mP["payload"]);

      //set vars..
      let mGet_mDta_tbl = () => {
        return {
            "payload": {
              "row": {
                "l": []
              },
              "col": {
                "l": []
              }
            }
        };
      }; 
      //we will store data structure..
      let mDta_tbl = mGet_mDta_tbl(); 
      
      //set..
      let mRndr = {
        "gVars": {
          "cell": {
            "w": "10vw", //10vw
            "h": "", //5vh
            "br": "#000 solid 1px",
            "cell_idx": 0,
          },
        },
        "utils": {
          "txt": (mE, mT) => {
            core_1mn.mTxt.set({
              "0": mE,  //HTMLElement
              "1": `${mT}`,  //txt
              "2": "2vh",  //fontSize
              "3": "blue"  //color
            });
          },
          "box": (mE, mP={}) => {
            //set vars..
            let mH = mP.hasOwnProperty("h")?mP["h"]:mRndr["gVars"]["cell"]["h"];
            //set
            let mB = document.createElement("div");
            mB.style.width = mRndr["gVars"]["cell"]["w"];
            mB.style.height = mH;
            //mB.style.ma = mH;
            mB.style.minHeight = `3vh`;
            mB.style.outline = mRndr["gVars"]["cell"]["br"];
            mB.style.border = mRndr["gVars"]["cell"]["br"];

            mE.appendChild(mB);
            //events..
            mB.onclick = () => {
              //alert("");
            };
            return mB;
          },
          "add_typ_1": (mV, mE, mP={
            "k": ``
          }) => {
            let mHldr = null;

            //fmt..
            let mFmt1 = (a, k) => {
              let mNew = [];
              //gen..
              for (let i = 0; i < a.length; i++) {
                const e = a[i];
                //set..
                let mDtaStruct = e;

                //set vars..
                if (k==`col` && mHldr==null || k!=`col`) {
                mHldr = document.createElement("div");
                mE.appendChild(mHldr);
                }
                //check..
                if (k==`col`) {
                  mHldr.style.display = `flex`;
                }

                //add..
                mDtaStruct["idx"] = mRndr["l"][k]["gVars"]["idx"];
                //add..
                mDtaStruct["ui_code"] = mHldr;
                //store..
                //mNew.push(mDtaStruct);
                
                //inc..
                mRndr["l"][k]["gVars"]["idx"] += 1;

                
                //--------UI--------//
                //set-layout..
                let mRES = mRndr.l[k]["set"]({ "l": [mDtaStruct] }, mHldr, 
                mDtaStruct["idx"]);


                //store..
                mNew.push(...mRES["mDtaStruct"]);


              }

              return mNew;
            };
            //store..
            mDta_tbl["payload"][mP["k"]]["l"].push(...mFmt1(mV["l"], mP["k"]));

            //set-layout.. (direct)
            //mRndr.l[mP["k"]]["set"](mV, mE);

            //added..
            console.log(`-----${mP["k"]}(added)------`);
            console.log(mDta_tbl["payload"][mP["k"]]["l"]);

          },
          "add_typ_2": (mV, mE, mP={
            "k": ``
          }) => {
            //set vars..
            let mHldr = document.createElement("div");
            mHldr.style.display = `flex`;
            mE.appendChild(mHldr);

            //fmt..
            let mFmt1 = (a, k,) => {
              let mNew = [];

              //mSet..
              let mSet = (mDtaStruct, k, mHldr) => {
                //add..
                mDtaStruct["idx"] = mRndr["l"][k]["gVars"]["idx"];
                //add..
                mDtaStruct["ui_code"] = mHldr;
                //store..
                //mNew.push(mDtaStruct);

                //inc..
                mRndr["l"][k]["gVars"]["idx"] += 1;

                //--------UI--------//
                //set-layout..
                let mRES = mRndr.l[k]["set"]({ "l": [mDtaStruct] }, mHldr, 
                mDtaStruct["idx"]);


                //store..
                mNew.push(...mRES["mDtaStruct"]);


              };
              //gen..
              for (let i = 0; i < a.length; i++) {
                const e = a[i];
                //set..
                let mDtaStruct = e;

                //set..
                let mBox = document.createElement("div");
                mHldr.appendChild(mBox);
                mSet(mDtaStruct, k, mBox);

              }

              return mNew;
            };
            //store..
            mDta_tbl["payload"][mP["k"]]["l"].push(...mFmt1(mV["l"], mP["k"]));

            //set-layout.. (direct)
            //mRndr.l[mP["k"]]["set"](mV, mE);

            //added..
            console.log(`-----${mP["k"]}(added)------`);
            console.log(mDta_tbl["payload"][mP["k"]]["l"]);

          },
          "del_type_1": (mV, mP={
            "k": ``
          }) => {
              /* Expected input..
              {
                  //delete by (x) {Info: //(x) custom properties can be assign by user}
                  //"x": {
                      //"id": "my_id_1"
                  //}

                  // delete by (idx)  {Info: //(idx) Index can be added by auto..}
                  "idx": 1
              }
              */
              //set vars..
              let mArr1 = mDta_tbl["payload"][mP["k"]]["l"];//[];

              //mCheckAndDel..
              let mCheckAndDel = (a0, a1, i, k) => {
                if (a0.hasOwnProperty(k)==true) {
                  if (a1.hasOwnProperty(k)==true) {
                    //Index..
                    //check..
                    if (a0[k]==a1[k]) {
                       //matched..
                       let m_ui_code = mDta_tbl["payload"][mP["k"]]["l"][i]["ui_code"];
                       delete mDta_tbl["payload"][mP["k"]]["l"][i];
                       //--------UI--------//
                       m_ui_code.remove();

                    }
                  }
               }
              };

              //mProcess..
              let mProcess = (mV) => {
                //set vars..
                let a = mArr1;
                
                //gen..
                for (let i = 0; i < a.length; i++) {
                  const e = a[i];
                  //set..
                  //check..
                  mCheckAndDel(mV, e, i, `idx`);

                  //check..
                  let mObj = (aNs, aNs1, kNs) => {
                    if (aNs.hasOwnProperty(kNs)==false) {
                       return;
                    }
                    if (aNs1.hasOwnProperty(kNs)==false) {
                      return;
                    }
                    //gen..
                    for (let iNs = 0; iNs < Object.keys(aNs[kNs]).length; iNs++) {
                      const eNs_k = Object.keys(aNs[kNs])[iNs];
                      //check..
                      mCheckAndDel(mV[kNs], e[kNs], i, eNs_k);
                    }
                  };

                  //check..
                  mObj(mV, e, `x`);


                }
                //all ok..
                console.log(`-----${mP["k"]}(deleted)------`);
                console.log(mDta_tbl["payload"][mP["k"]]["l"]);
              };

              //set..
              mProcess(mV);

          },
          "n_typ": (mB, mV, mDtaStruct={}) => {
            //set vars..
            let mEvents = {
              "ui_code": null
            };
            //utils..
            let mSet = (mB, mV) => {
              //allowed=>[ String, RawHtmlCode, DOM[function()=>return DOM;] ]
              if (mV["t"]==0) {
                 mRndr.utils.txt(mB, `${mV["val"]}`);
              }
              if (mV["t"]==1) {
                let mDiv = document.createElement("div");
                mDiv.innerHTML = `${mV["val"]}`;
                mB.appendChild(mDiv);
              }
              if (mV["t"]==2) {
                //vali..
                if (typeof mV["val"]!==`function`) {
                  console.log(`"val" must be [function] that must retutn [DOM]`);
                  return;
                }
                //all ok..
                //add..
                mDtaStruct["cell"] = {
                  "ui_code": mB
                };
                //set..
                let mDOM = mV["val"](mDtaStruct);
                mB.appendChild(mDOM);
                //store..
                mEvents["ui_code"] = mDOM;

              }
            };
            //txt..
            if (typeof mV === `string`) {
              mRndr.utils.txt(mB, `${mV}`);
              return;
            }
            //obj..
            if (typeof mV === `object` && Array.isArray(mV)===false) {
              //vali..
              if (mV.hasOwnProperty("t")==false) {
                console.error(`err: @req "t" is missing`);
                return;
              }
              if (mV.hasOwnProperty("val")==false) {
                console.error(`err: @req "val" is missing`);
                return;
              }
              //all ok..
              mSet(mB, mV);

            }

            //return..
            return mEvents;

          }
        },
        "l": {
          "col": {
            "gVars": {
              "idx": 0, //Index
            },
            "set": (mV, mE, mIDX) => {

              //set..
              let mSet_OLD = (v, mE) => {
                //box..
                let mB = mRndr.utils.box(mE);
                mRndr.utils.txt(mB, `${v}`);
              };
              let mSet = (v, mE, mCurrI) => {
                //box..
                let mB = mRndr.utils.box(mE, {
                  "h": "3vh"
                });
                //mRndr.utils.txt(mB, `${v}`);


                //add..
                mCurrI["cell_idx"] = mRndr["gVars"]["cell"]["cell_idx"];
                //console.log(mCurrI);
                //inc..
                mRndr["gVars"]["cell"]["cell_idx"]+=1;


                //set..
                let mRES = mRndr.utils.n_typ(mB, v, {
                  "idx": mIDX,
                  "cell_idx": mCurrI["cell_idx"],
                  //"mCurrI": mCurrI
                });


                //ui_code.. 
                if (mCurrI["n"].hasOwnProperty("val")) {
                  //add..
                  mCurrI["n"]["ui_code"] = mRES["ui_code"];
                }


                //store..
                gNewArr.push(mCurrI);


              };

              //set vars..
              let gNewArr = [];
 
              //mLoop..
              let mLoop = (a, mE) => {
                 let mL1 = document.createElement("div");
                 //mL1.style.display = "flex";
                 mE.appendChild(mL1);

                //utils..
                let mSet_orien = (mV) => {
                  if (mV=="h") {
                    mL1.style.display = "flex"; 
                    //mL1.setAttribute("orien", "h");
                  }
                };


                 //set..
                 let mL2 = null;
                 //gen..
                 for (let i = 0; i < a.length; i++) {
                  const e = a[i];

                  //check..
                  if (e.hasOwnProperty("orien")==true) {
                    //set..
                    mSet_orien(e["orien"]);
                  }

                  //console.log(e);
                  if (e.hasOwnProperty("n")==true) {
                    //set..
                    console.log(e);
                    mL2 = document.createElement("div");
                    mL1.appendChild(mL2);
                    mSet(e["n"], mL2, e);
                  }
                  //set..
                  if (e.hasOwnProperty("l")==true) {
                    mLoop(e["l"], mL2); //repeat 
                  }
                 
                 }
              };
              mLoop(mV["l"], mE);
              

              //return..
              return {
                "mDtaStruct": gNewArr
              }; 

  
            },
            "add": (mV, mE) => {
              //set..
              mRndr["utils"].add_typ_2(mV, mE, {
                "k": `col`
              });
            },
            "del": (mV) => {
              //set..
              mRndr["utils"].del_type_1(mV, {
                "k": `col`
              });
            }
          },
          "row": {
            "gVars": {
              "idx": 0, //Index
            },
            "set": (mV, mE, mIDX) => {
              //set..
              let mSet = (v, mE, mCurrI) => {
                //box..
                let mB = mRndr.utils.box(mE, {
                  //"h": "3vh"
                });
                //mRndr.utils.txt(mB, `${v}`);

                //add..
                mCurrI["cell_idx"] = mRndr["gVars"]["cell"]["cell_idx"];
                //console.log(mCurrI);
                //inc..
                mRndr["gVars"]["cell"]["cell_idx"]+=1;


                //set..
                let mRES = mRndr.utils.n_typ(mB, v, {
                  "idx": mIDX,
                  "cell_idx": mCurrI["cell_idx"],
                  //"mCurrI": mCurrI
                });


                //ui_code.. 
                if (mCurrI["n"].hasOwnProperty("val")) {
                  //add..
                  mCurrI["n"]["ui_code"] = mRES["ui_code"];
                }


                //store..
                gNewArr.push(mCurrI);


              };

              //set vars..
              let gNewArr = [];

              //mLoop..
              let mLoop = (a, mE) => {
                 let mL1 = document.createElement("div");
                 //mL1.style.display = "flex";
                 mE.appendChild(mL1); 
  
                 //utils..
                 let mSet_orien = (mV) => {
                    if (mV=="h") {
                      mL1.style.display = "flex";
                      //mL1.setAttribute("orien", "h");
                    }
                 };
  
                 //set..
                 let mL2 = null;
                 //gen..
                 for (let i = 0; i < a.length; i++) {
                  const e = a[i];
                  
                  //check..
                  if (e.hasOwnProperty("orien")==true) {
                     //set..
                     mSet_orien(e["orien"]);
                  }
  
                  //console.log(e);
                  if (e.hasOwnProperty("n")==true) {
                    //set..
                    console.log(e);
                    mL2 = document.createElement("div");
                    mL2.style.display = "flex";

                    mL1.appendChild(mL2);
                    //set txt..
                    mSet(e["n"], mL2, e); 
                  }
  
                    
  
                  //set..
                  if (e.hasOwnProperty("l")==true) {
                    mLoop(e["l"], mL2); //repeat 
                  }
  
                 
                 }

                  

              };
              mLoop(mV["l"], mE);

              //return..
              return {
                "mDtaStruct": gNewArr
              }; 
  
            },
            "add": (mV, mE) => {
              //set..
              mRndr["utils"].add_typ_1(mV, mE, {
                "k": `row`
              });
            },
            "del": (mV) => {
              //set..
              mRndr["utils"].del_type_1(mV, {
                "k": `row`
              });
            }
          },
          "cell": {
            "get": (mV) => {
              let mNew = {
                "l": []
              };

              //mStart..
              let mStart = (mP={
                "k": `col`
              }) => {
              //set vars..
              let mArr1 = mDta_tbl["payload"][mP["k"]]["l"];

              //mCheckAndGet..
              let mCheckAndGet = (a0, a1, i, k) => {
                if (a0.hasOwnProperty(k)==true) {
                  if (a1.hasOwnProperty(k)==true) {
                    //Index..
                    //check..
                    if (a0[k]==a1[k]) {
                      //matched..
                      //store..
                      mNew["l"].push(mDta_tbl["payload"][mP["k"]]["l"][i]);

                    }
                  }
               }
              };

              //mProcess..
              let mProcess = (mV) => {
                //set vars..
                let a = mArr1;
                
                //gen..
                for (let i = 0; i < a.length; i++) {
                  const e = a[i];
                  //set..
                  //check..
                  mCheckAndGet(mV, e, i, `cell_idx`);

                  //check..
                  let mObj = (aNs, aNs1, kNs) => {
                    if (aNs.hasOwnProperty(kNs)==false) {
                       return;
                    }
                    if (aNs1.hasOwnProperty(kNs)==false) {
                      return;
                    }
                    //gen..
                    for (let iNs = 0; iNs < Object.keys(aNs[kNs]).length; iNs++) {
                      const eNs_k = Object.keys(aNs[kNs])[iNs];
                      //check..
                      mCheckAndGet(mV[kNs], e[kNs], i, eNs_k);
                    }
                  };

                  //check..
                  mObj(mV, e, `x`);


                }
                //all ok..
                console.log(`-----${mP["k"]}(get cell)------`);
                console.log(mDta_tbl["payload"][mP["k"]]["l"]);
              };

              //set..
              mProcess(mV);


              };

              //set..
              mStart({
                "k": `col`
              });
              mStart({
                "k": `row`
              });


              //return..
              return mNew;

            }
          }
        }
      };

      //set vars..
      let mTbl = document.createElement("div");
      mTbl.style.width = "100%";
      mE.appendChild(mTbl);

      //col..
      let mCol = document.createElement("div");
      mCol.style.width = "100%";
      mTbl.appendChild(mCol);

      //row..
      let mRow = document.createElement("div");
      mRow.style.width = "100%";
      mTbl.appendChild(mRow);


      //set..
      let mBuild = () => {
        //set..
        mRndr.l.col["add"](mPayload["col"], mCol);
        mRndr.l.row["add"](mPayload["row"], mRow);
      };
      mBuild();


      //set..
      let mEvents = {
        "add_row": (row) => {
          mRndr.l.row["add"](row, mRow);
        },
        "del_row": (cond) => {
          mRndr.l.row["del"](cond);
        },
        "add_col": (col) => {
          mRndr.l.col["add"](col, mRow);
        },
        "del_col": (cond) => {
          mRndr.l.col["del"](cond);
        },
        "get_cell": (cond, cb={onLoad:(mP={})=>{}}) => {
          let mRES = mRndr.l.cell["get"](cond);
          //send cb..
          cb.onLoad(mRES);
        },

      };
      //send cb..
      cb.onLoad({}, {}, mEvents);



      //log..
      //mDta_tbl..
      console.log(`-----mDta_tbl------`);
      console.log(mDta_tbl);


      //--USAGE--//
      let mUSAGE = () => {
        let m1 = () => {
          //set.. //--table--//
          let mTbl_mEvnt = null;
          let mPayload = {
            "row": {
              "l": [

                {
                  "n": "31",
                  "x": { //(x) custom properties can be assign by user
                    "key1": "val1",
                    "key2": "val2",
                    "id": "my_id_1",
                  },

                  "l": [

                    { //--Orientation--//
                      "orien": "h"  //[h => horizontal, v=> vertical]
                    },


                    {
                      "n": "Mon Jul 31 2023",
                      "l": [
                        {
                          "n": "event 1",
                          "l": [
                            {
                              "n": "my sample 1",
                            },

                            {
                              "n": "my sample 2",
                            },

                            {
                              "n": "my sample breakfast 3",
                            },

                          ]
                        },
                        {
                          "n": "event 2",
                          "l": [
                            {
                              "n": {
                                "t": 1,
                                "val": `<div style="color:green;"> CM child </div>`
                              }, //"my sample 1.1",

                            },

                          ]
                        },
                      ]

                    },

                    {
                      "n": {
                        "t": 2,
                        "val": (mP = {}) => {
                          let mDOM = document.createElement("div");
                          mDOM.innerHTML = `Cell (click to info)`;
                          mDOM.style.color = `brown`;
                          //events..
                          mDOM.onclick = () => {
                            alert(JSON.stringify(mP, null, 2));

                            //cell row..
                            /*mEvnt = mTbl_mEvnt;
                            mEvnt.del_row({
                                //delete by (x) {Info: //(x) custom properties can be assign by user}
                                //"x": {
                                    //"id": "my_id_1",
                                //}
                                // delete by (idx)  {Info: //(idx) Index can be added by auto..}
                                "idx": mP["idx"] //0
                            });*/


                          };

                          return mDOM;
                        }
                      }, //"CM child"
                      "l": []
                    },


                    {
                      "n": "MC child",
                      "l": []
                    },


                  ]
                },

                {
                  "n": {
                    "t": 2,
                    "val": (mP = {}) => {
                      let mDOM = document.createElement("div");
                      mDOM.innerHTML = `Row (click to delete)`;
                      mDOM.style.color = `red`;
                      //events..
                      mDOM.onclick = () => {
                        //alert(JSON.stringify(mP, null, 2));

                        //delete row..
                        mEvnt = mTbl_mEvnt;
                        mEvnt.del_row({
                          //delete by (x) {Info: //(x) custom properties can be assign by user}
                          //"x": {
                          //"id": "my_id_1",
                          //}
                          // delete by (idx)  {Info: //(idx) Index can be added by auto..}
                          "idx": mP["idx"] //0
                        });


                      };

                      return mDOM;
                    }
                  },//"32",
                  "l": [

                    { //--Orientation--//
                      "orien": "h"  //[h => horizontal, v=> vertical]
                    },


                    {
                      "n": "Mon Jul 31 2023",
                      "l": [
                        {
                          "n": "event 1",
                          "l": [
                            {
                              "n": "my sample 1",
                            },

                            {
                              "n": "my sample 2",
                            },

                            {
                              "n": "my sample breakfast 3",
                            },

                          ]
                        },
                        {
                          "n": "event 2",
                          "l": [
                            {
                              "n": "my sample 1.1",
                            },

                          ]
                        },
                      ]

                    },

                    {
                      "n": "CM child",
                      "l": []
                    },


                    {
                      "n": "MC child",
                      "l": []
                    },


                  ]
                },

              ]
            },
            "col": {
              "l": [

                {
                  "n": "WK",
                  "l": [
                    /*{
                      "n": "child 1",
                    },
                    {
                      "n": "child 2",
                    },*/
                  ]
                },

                {
                  "n": {
                    "t": 1,
                    "val": `<div style="color:green;"> Date </div>`
                  }, //"Date",
                  "l": [
                    /*{
                      "n": "child 1",
                    },
                    {
                      "n": "child 2",
                    },*/
                  ]
                },

                {
                  "n": {
                    "t": 2,
                    "val": (mP = {}) => {
                      let mDOM = document.createElement("div");
                      mDOM.innerHTML = `Col (click to delete)`;
                      mDOM.style.color = `red`;
                      //events..
                      mDOM.onclick = () => {
                        //alert(JSON.stringify(mP, null, 2));

                        //delete col..
                        mEvnt = mTbl_mEvnt;
                        mEvnt.del_col({
                          //delete by (x) {Info: //(x) custom properties can be assign by user}
                          //"x": {
                          //"id": "my_id_1",
                          //}
                          // delete by (idx)  {Info: //(idx) Index can be added by auto..}
                          "idx": mP["idx"] //0
                        });


                      };

                      return mDOM;
                    }
                  },//"Events",
                  "l": [
                    /*{
                      "n": "child 1",
                    },
                    {
                      "n": "child 2",
                    },*/
                  ]
                },

                {
                  "n": "Breakfast",
                  "l": [
                    /*{
                      "n": "child 1",
                    },
                    {
                      "n": "child 2",
                    },*/
                  ]
                },



                {
                  "n": "CM",
                  "l": [
                    /*{
                      "n": "child 1",
                    },
                    {
                      "n": "child 2",
                    },*/
                  ]
                },

                {
                  "n": "MC",
                  "l": [
                    /*{
                      "n": "child 1",
                    },
                    {
                      "n": "child 2",
                    },*/
                  ]
                },


              ]
            }

            //abbreviations..
            /**
             * @row = rows
             * @l = list
             * @col = columns
             * @n = name
             * @t = type
             * @orien => Orientation   [Horizontal || Vertical]
            */

          };
          core_1mn.table.set({
            "e": mI,
            "payload": mPayload
          },
            {
              "onLoad": (mP = {}, cb = {}, mEvnt = {}) => {
                console.log(`table is ready..`);
                //store..
                mTbl_mEvnt = mEvnt;

                //--Events--//
                //--row--//
                /*mEvnt.add_row({
                    "l": [
        
                      {
                        "n": "31",
                        "l": [
        
                          { //--Orientation--//
                            "orien": "h"  //[h => horizontal, v=> vertical]
                          },
        
                          
                          {
                            "n": "Mon Jul 31 2023", 
                            "l": [
                              {
                                "n": "event 1",
                                "l": [

                                  {
                                    "n": "my sample 1",
                                  },
        
                                  {
                                    "n": "my sample 2",
                                  },
        
                                  {
                                    "n": "my sample breakfast 3",
                                  },
                                  
                                ]
                              }, 
                              {
                                "n": "event 2",
                                "l": [
                                  {
                                    "n": "my sample 1.1",
                                  },   
                                  
                                ]
                              }, 
                            ]
                            
                          },


        
                          {
                            "n": "CM child",
                            "l": []
                          },
        
        
                          {
                            "n": "MC child",
                            "l": []
                          },

        
                          
        
                          
                        ]
                      },  
        
                    ]
                });*/

                /*setTimeout(() => {
                //delete row..
                mEvnt.del_row({
                    //delete by (x) {Info: //(x) custom properties can be assign by user}
                    "x": {
                        "id": "my_id_1",
                    }
                    // delete by (idx)  {Info: //(idx) Index can be added by auto..}
                    //"idx": 1
                });
                }, 2000);*/

                //--col--//
                mEvnt.add_col({
                    "l": [
        
                      {
                        "n": "WK",
                        "x": {
                            "id": "my_id_1",
                        },
                        "l": [

                          { //--Orientation--//
                            "orien": "v"  //[h => horizontal, v=> vertical]
                          },
                            
                          {
                            "n": "Child 1"
                          },

                          {
                            "n": "Child 2"
                          },


                        ]
                      },
        
                      {
                        "n": {
                          "t": 2,
                          "val": (mP={}) => {
                            let mDOM = document.createElement("div");
                            //set..
                            mDOM.innerHTML = `Date`;

                            //set vars..
                            let mCell = mP["cell"]["ui_code"];

                            //merge..
                            mCell.style.width = ``;
                            mCell.style.display = `flex`;
                            mCell.style.justifyContent = `center`;
                            mCell.style.alignItems = `center`;
                            
                            //return..
                            return mDOM;
                          }
                        },
                        "l": [

                          { //--Orientation--//
                            "orien": "h"  //[h => horizontal, v=> vertical]
                          },
                            
                          {
                            "n": "Child 1"
                          },

                          {
                            "n": "Child 2",
                          },


                        ]
                      },
        
                      {
                        "n": "Events",
                        "l": [
                        ]
                      },
        
                      {
                        "n": "Breakfast",
                        "l": [
                        ]
                      },
        
        
        
                      {
                        "n": "CM",
                        "l": [
                        ]
                      },
        
        
        
                    ]
                });


                /*setTimeout(() => {
                //delete col..
                mEvnt.del_col({
                    //delete by (x) {Info: //(x) custom properties can be assign by user}
                    "x": {
                        "id": "my_id_1",
                    }
                    // delete by (idx)  {Info: //(idx) Index can be added by auto..}
                    //"idx": 0
                });
                }, 2000);*/


                //--cell--//
                /*setTimeout(() => {
                  //get cell..
                  mEvnt.get_cell({
                    //get by (x) {Info: //(x) custom properties can be assign by user}
                    //"x": {
                    //"id": "my_id_1",
                    //}
                    // get by (cell_idx)  {Info: //(cell_idx) Index can be added by auto..}
                    "cell_idx": 0
                  },
                    //cb..
                    {
                      "onLoad": (mP = {}) => {
                        alert(JSON.stringify(mP, null, 2));
                        //log..
                        console.log(mP);
                      }
                    });
                }, 2000);*/





              }
          });

        };
         

      };




    }

  },



  //qa (lib)..
  "qa": {

    //set..
    "set": (mP={
      //"e": HTMLElement,
      //"payload": {}, //payload [Your Table Data]
    }, 
    cb={
      "onLoad": (mP={}, cb={}, 
      //Events..  
      mEvnt = {
        "get_qa_list": (mP={},mCb={ "onLoad":()=>{} }) => {},

       //set_qa..
       "set_qa": (mP={
        "e": HTMLElement /*DOM elem*/, 
        "payload": { "data": {} /*data*/ }   /*payload*/}, 
        //cb..
        cb={},
       
       //events..
       mEnvt={
        "submit_qa": () => {}
       }
       ) => {},


       //build_qa..
       "build_qa": (mP={
       "e": HTMLElement /*DOM elem*/, 
       "payload": { "data": {} /*data*/ }   /*payload*/}, 
       cb={
        "onBuildDone": (v) => {}
       },
       
       //events..
       mEnvt={
        "event_1": () => {}
       }
       ) => {},



      } ) => {}
    },) => {
      
      //import..
      import("./libs/qa/qa.js").then( (mRes) => {
        //loaded..
        console.log(`qa.js [LOADED] [added by core_1mn]`);
        //set vars..
        let mn_qa_lib = mRes.mn_qa_lib();
        
        //send cb..
        cb.onLoad({}, {}, mn_qa_lib["mEvents"]);

      }); 

    }


  },



  //drag (lib)..
  "drag": {
    //https://web.dev/mobile-touch/
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    //https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection
    //https://gridstackjs.com/    
    //https://anseki.github.io/plain-draggable/

    //set..
    "set": (mP={
      "e": HTMLElement,
      "payload": {
        "l": [] //item-list
      }, //YOUR DATA
    },
    mCb={
      "onLoad": (mP={}, cb={}, mEvnt={
        "add_item": (data) => { }
      })
    }
    ) => {
      //set vars..
      let mE = mP["e"];

      //payload..
      let mGet_mPayload = (mV) => {
        return mV;
        return {
            "l": [
              {
                "n": {
                  "t": 2,   //[Dom]
                  "val": (mP={}) => {
                    let mDOM = document.createElement("div");
                    //set..
                    mDOM.innerHTML = `item 1`;

                    //mP["cell"]["ui_code"].style.margin = `0.5vh 0.5vw`;


                    return mDOM;
                  }
                },
                "x": {}
              },
              {
                "n": {
                  "t": 2,   //[Dom]
                  "val": (mP={}) => {
                    let mDOM = document.createElement("div");
                    //set..
                    mDOM.innerHTML = `item 2`;
                    return mDOM;
                  }
                }
              },
              {
                "n": {
                  "t": 2,   //[Dom]
                  "val": (mP={}) => {
                    let mDOM = document.createElement("div");
                    //set..
                    mDOM.innerHTML = `item 3`;
                    return mDOM;
                  }
                }
              },
              {
                "n": {
                  "t": 2,   //[Dom]
                  "val": (mP={}) => {
                    let mDOM = document.createElement("div");
                    //set..
                    mDOM.innerHTML = `item 4`;
                    return mDOM;
                  }
                }
              },
              {
                "n": {
                  "t": 2,   //[Dom]
                  "val": (mP={}) => {
                    let mDOM = document.createElement("div");
                    //set..
                    mDOM.innerHTML = `item 5`;
                    return mDOM;
                  }
                }
              },
              {
                "n": {
                  "t": 2,   //[Dom]
                  "val": (mP={}) => {
                    let mDOM = document.createElement("div");
                    //set..
                    mDOM.innerHTML = `item 6`;
                    return mDOM;
                  }
                }
              },
              {
                "n": {
                  "t": 2,   //[Dom]
                  "val": (mP={}) => {
                    let mDOM = document.createElement("div");
                    //set..
                    mDOM.innerHTML = `item 7`;
                    return mDOM;
                  }
                }
              },
              {
                "n": {
                  "t": 2,   //[Dom]
                  "val": (mP={}) => {
                    let mDOM = document.createElement("div");
                    //set..
                    mDOM.innerHTML = `item 8`;
                    return mDOM;
                  }
                }
              },
              {
                "n": {
                  "t": 2,   //[Dom]
                  "val": (mP={}) => {
                    let mDOM = document.createElement("div");
                    //set..
                    mDOM.innerHTML = `item 9`;
                    return mDOM;
                  }
                }
              },

            ]
        };

        /**
         * @n = name    [string => "" || object => { "t": 0 allowed=>[ String, RawHtmlCode, DOM[function(mP={})=>return DOM;] ] , "val": YOUR_VAL } ]
         * @t = type
         * @ui_code = DOM        can be added by auto..
         * @cell =     Cell Obj    can be added by auto..   [CELL] => { "ui_code": DOM }
         * @x = custom properties can be assign by user  {"key1":"val1","key2":"val2", "id": 1}

        */

      };
      let mPayload = mGet_mPayload(mP["payload"]);

      //data..
      let mGet_Dta_grid = () => {
        return {
          "payload": {
            "l": []
          }
        };
      };
      //we will store data structure..
      let mDta_grid = mGet_Dta_grid();
    

      //set..
      let mDta = { 
        "gVars": {
          "debug": false,
        },
        "rndr": {
          "gVars": { 
            "cell": {
              "w": "10vw", //10vw
              "h": "", //5vh
              "br": "#000 solid 1px",
              "cell_idx": 0,
            },
          },
          "utils":  {
            "txt": (mE, mT) => {
              core_1mn.mTxt.set({
                "0": mE,  //HTMLElement
                "1": `${mT}`,  //txt
                "2": "2vh",  //fontSize
                "3": "blue"  //color
              });
            },
            "box": (mE, mP={}) => {
              //set vars..
              let mH = mP.hasOwnProperty("h")?mP["h"]:mRndr["gVars"]["cell"]["h"];
              //set
              let mB = document.createElement("div");
              //mB.style.width = mRndr["gVars"]["cell"]["w"];
              //mB.style.height = mH;
              //mB.style.minHeight = `6vh`; //3vh
              //mB.style.outline = mRndr["gVars"]["cell"]["br"];
              //mB.style.border = mRndr["gVars"]["cell"]["br"];
              if (mDta["gVars"]["debug"]) {
              mB.style.backgroundColor = `red`; //3vh
              }
  
              mE.appendChild(mB);
              //events..
              //mB.onclick = () => {
                //alert("");
              //};
              return mB;
            },
            "n_typ": (mB, mV, mDtaStruct={}) => {
              //set vars..
              let mEvents = {
                "ui_code": null,
                "cell": null
              };
              //utils..
              let mSet = (mB, mV) => {
                //allowed=>[ String, RawHtmlCode, DOM[function()=>return DOM;] ]
                if (mV["t"]==0) {
                   mRndr.utils.txt(mB, `${mV["val"]}`);
                }
                if (mV["t"]==1) {
                  let mDiv = document.createElement("div");
                  mDiv.innerHTML = `${mV["val"]}`;
                  mB.appendChild(mDiv);
                }
                if (mV["t"]==2) {
                  //vali..
                  if (typeof mV["val"]!==`function`) {
                    console.log(`"val" must be [function] that must retutn [DOM]`);
                    return;
                  }
                  //all ok..
                  //add..
                  mDtaStruct["cell"] = {
                    "ui_code": mB
                  };
                  //set..
                  let mDOM = mV["val"](mDtaStruct);
                  mB.appendChild(mDOM);
                  //store..
                  mEvents["ui_code"] = mDOM;
                  //store..
                  mEvents["cell"] = mDtaStruct["cell"];
  
                }
              };
              //txt..
              if (typeof mV === `string`) {
                mRndr.utils.txt(mB, `${mV}`);
                return;
              }
              //obj..
              if (typeof mV === `object` && Array.isArray(mV)===false) {
                //vali..
                if (mV.hasOwnProperty("t")==false) {
                  console.error(`err: @req "t" is missing`);
                  return;
                }
                if (mV.hasOwnProperty("val")==false) {
                  console.error(`err: @req "val" is missing`);
                  return;
                }
                //all ok..
                mSet(mB, mV);
  
              }
  
              //return..
              return mEvents;
  
            },
            "drag1": (mE, mDOM) => {
              //log..
              //console.log(mDta_grid["payload"]["l"]);

              //data..
              let mUtils = {
                "gVars": {
                  "currX": mE.style.left,
                  "currY": mE.style.top,
                  "isMouseDown": false,

                  "wait1": null,

                  "item": {
                    "0": {
                      "idx": -1,
                      "e": null
                    },
                    "1": { //curr
                      "idx": -1,
                      "e": null
                    },
                  }

                },

                //move array item by index..
                "moveArrItemByIdx": (a = [], old_idx = -1, new_idx = -1) => {
                  //vali..
                  if (old_idx==-1 || new_idx==-1 || a.length==0) {
                     return; //stop..
                  }
                  let mNewItem = a[old_idx];
                  //console.log(a);
                  //delete old..
                  a.splice(old_idx, 1);
                  //move..
                  a.splice(new_idx, 0, mNewItem);
                  //console.log(a);

                  /*
                  --USAGE--
                  mUtils.moveArrItemByIdx([1, 2, 3, 4, 5], 2, 0);
                  */

                },

                //https://stackoverflow.com/questions/9768291/check-collision-between-certain-divs
                "overlaps": (a, b, mNegotiate=0) => {
                  const rect1 = a.getBoundingClientRect();
                  const rect2 = b.getBoundingClientRect();
                  const isInHoriztonalBounds =
                    rect1.x < rect2.x + rect2.width - mNegotiate && rect1.x + rect1.width > rect2.x;
                  const isInVerticalBounds =
                    rect1.y < rect2.y + rect2.height - mNegotiate && rect1.y + rect1.height > rect2.y;
                  const isOverlapping = isInHoriztonalBounds && isInVerticalBounds;
                  return isOverlapping;
                },

                "reset": () => {
                  //--reset--//
                  document.removeEventListener("mousemove", m_mousemove, false);
                  document.removeEventListener("mouseup", m_mouseup, false);

                  //set item..
                  let mSet_item = (mV) => {
                    let m0 = mV["0"];
                    let m1 = mV["1"]; //curr
                    //vali..
                    if (m0["idx"]==-1 || m1["idx"]==-1) {
                       return;
                    }
                    //all ok..
                    console.log(mV);

                    //set..
                    let ui_code_0 = m0["e"]["cell"]["ui_code"];
                    let ui_code_1 = m1["e"]["cell"]["ui_code"];
                    let mParent = ui_code_0.parentElement;
                    //console.log(mParent);
                    mParent.insertBefore(ui_code_1, ui_code_0);

                    //set..
                    mUtils.moveArrItemByIdx(mDta_grid["payload"]["l"], 
                    m1["idx"], m0["idx"]);
                    
                    //log..
                    //console.log(mDta_grid["payload"]["l"]);


                  };
                  mSet_item(mUtils["gVars"]["item"]);


                  //check..
                  let mCheck = (a) => {
                    //gen..
                    for (let i = 0; i < a.length; i++) {
                      const e = a[i];
                      //set..
                      e["cell"]["ui_code"].style.marginLeft = `0vw`;
                    } 
                  }; 
                  //set..  
                  mCheck(mDta_grid["payload"]["l"]);


                  //--reset--//
                  mE.style.position = `relative`;
                  mE.style.left = mUtils["gVars"]["currX"];
                  mE.style.top = mUtils["gVars"]["currY"];
                },
                "start": () => {
                  mE.style.position = `absolute`;
                },
                "move": (mX, mY) => {
                  //set vars..
                  let mBox = mE.getBoundingClientRect();
                  //console.log(mBox.width/2);
                  //console.log(mBox.height/2);

                  //set..
                  let mHldr = mDOM.getBoundingClientRect();
                  let mCurrX = (mX) - (mHldr.x);
                  let mCurrY = (mY) - (mHldr.y);

                  //set..
                  mE.style.left = ( mCurrX - (mBox.width/2) ) + 'px';
                  mE.style.top = ( mCurrY - (mBox.height/2) ) + 'px';


                  //----need to improve performance----//
                  //check..
                  let mCheck = (a) => {
                    //set vars..
                    let mCurrE = {
                      "idx": -1,
                      "e": null
                    };
                    //gen..
                    for (let i = 0; i < a.length; i++) {
                      const e = a[i];
                      //set..
                      e["cell"]["ui_code"].style.marginLeft = `0vw`; //reset..
                      //anim..
                      e["cell"]["ui_code"].style.transition = ``;
                      if (mE==e["cell"]["ui_code"]) {
                         //console.log(`-----same------`);
                         //store..
                         mUtils["gVars"]["item"]["1"] = {
                          "e": e,
                          "idx": i
                         };
                      }else {
                        console.log(`-----not same------`);
                        //anim..
                        e["cell"]["ui_code"].style.transition = `0.2s`;
                        if (mUtils.overlaps(mE, e["cell"]["ui_code"])) {
                          mCurrE = {
                            "e": e,
                            "idx": i
                          };
                        }else {
                          //e["cell"]["ui_code"].style.marginLeft = `0vw`;
                        }
                      }
                    }
                    //all ok..
                    if (mCurrE["idx"]!=-1) {
                      mCurrE["e"]["cell"]["ui_code"].style.marginLeft = `8vw`;
                      //store..
                      mUtils["gVars"]["item"]["0"] = mCurrE;
                    }

                  };
                  //clear out timeout..
                  if (mUtils["gVars"]["wait1"]!=null) {
                    //remove..
                    clearTimeout(mUtils["gVars"]["wait1"]);
                  }
                  //set..
                  mUtils["gVars"]["wait1"] = setTimeout(() => {
                    //remove..
                    clearTimeout(mUtils["gVars"]["wait1"]);
                    //set..
                    mCheck(mDta_grid["payload"]["l"]);
                  }, 5); //15


                },

                "get_touch_XY": (e) => {
                  let mX = null;
                  let mY = null;
                  try {
                    //https://web.dev/mobile-touch/
                    let touch = e.targetTouches[0];
                    mX = touch.pageX;
                    mY = touch.pageY;
                  } catch (e) {
                    //ignore..
                  }
                  try {
                    //https://developer.mozilla.org/en-US/docs/Web/API/Touch/clientX
                    mX = e.touches[0].clientX;
                    mY = e.touches[0].clientY;
                  } catch (e) {
                    //ignore..
                  }

                  //return..
                  return {
                    "x": mX,
                    "y": mY,
                  };

                }

              };

              //console.log(mUtils);
              //let mE1 = document.createElement("div");
              //log..
              //mUtils.moveArrItemByIdx([1, 2, 3, 4, 5], 2, 0);

              //events..
              //https://stackoverflow.com/questions/24050738/javascript-how-to-dynamically-move-div-by-clicking-and-dragging
              mE.onmousedown = (e) => {
                 //console.log(`onmousedown`);
                 //--add--//
                 document.addEventListener("mousemove", m_mousemove, false);
                 document.addEventListener("mouseup", m_mouseup, false);

                 //start..
                 mUtils.start();
                 //set..
                 mUtils["gVars"]["isMouseDown"]=true;

                 //move..
                 mUtils.move(e.clientX, e.clientY);

              };
              let m_mouseup = (e) => {
                //console.log(`m_mouseup`);
                //reset..
                mUtils.reset();
                //set..
                mUtils["gVars"]["isMouseDown"] = false;
              };
              let m_mousemove = (e) => {
                //console.log(`m_mousemove`);
                e.preventDefault();
                if (mUtils["gVars"]["isMouseDown"]) {
                  //set..
                  //move..
                  mUtils.move(e.clientX, e.clientY);

                }
              };


              //events..
              mE.ontouchstart = (e) => {
                //console.log(e.target);
                //start
                mUtils.start();

                //set vars..
                let mTouch = mUtils.get_touch_XY(e);
                //move..
                mUtils.move(mTouch["x"], mTouch["y"]);

                return false;
              };
              mE.ontouchend = (e) => {
                //console.log(e.target);
                //--reset--//
                mUtils.reset();
                return false;
              };
              mE.ontouchmove = (e) => {
                e.preventDefault(); //https://stackoverflow.com/questions/26478267/touch-move-getting-stuck-ignored-attempt-to-cancel-a-touchmove
                //set vars..
                let mTouch = mUtils.get_touch_XY(e);
                //move..
                mUtils.move(mTouch["x"], mTouch["y"]);
                return false;
              };


            }
          },
          "l": {
            "0": {
              "set": (v) => {
                //set vars..
                let mP = v["p"];
                let mE = mP["e"];
                let mL = mP["l"];
                //set..
                let mSet = (v, mE, mCurrI) => {
                  //box..
                  let mB = mRndr.utils.box(mE, {
                    "h": "" //3vh
                  });

                  //set..
                  let mRES = mRndr.utils.n_typ(mB, v, {
                    //"idx": mIDX,
                    //"cell_idx": mCurrI["cell_idx"],
                    //"mCurrI": mCurrI
                  });

                  //apply drag..
                  mRndr.utils.drag1(mB, mE);


                  //----store-----//

                  //ui_code.. 
                  if (mCurrI["n"].hasOwnProperty("val")) {
                    //add..
                    mCurrI["n"]["ui_code"] = mRES["ui_code"];
                  }

                  //cell..
                  if (mRES.hasOwnProperty("cell")) {
                    //add..
                    mCurrI["cell"] = mRES["cell"];
                  }

                  //store..
                  mDta_grid["payload"]["l"].push(mCurrI);
                  
                };

                //mBuild..
                let mBuild = (mE, a) => {
                  //gen..
                  for (let i = 0; i < a.length; i++) {
                    const e = a[i];
                    //set..
                    let mL2 = mE;
                    mSet(e["n"], mL2, e);

                  }
                   
                };
                mBuild(mE, mL);

                //log..
                //console.log(mDta_grid);


              },
              "add": (mV) => {
                //set..
                mDta["rndr"]["l"]['0'].set(mV);
              }
            }
          }
        }
      };
      let mRndr = mDta["rndr"];

      //set..
      let mB = document.createElement("div");
      mE.appendChild(mB);
      //mB.style.width = `100%`;
      //mB.style.height = `30vh`; //`100%`;
      mB.style.position = `relative`;
      mB.style.display = `flex`;
      mB.style.justifyContent = `start`;
      mB.style.flexWrap = `wrap`;
      if (mDta["gVars"]["debug"]) {
      mB.style.backgroundColor = `green`;
      }

      //set..
      mDta["rndr"]["l"]["0"].add({
        "p": {
          "e": mB,
          "l": mPayload["l"]
        }
      });


      //send cb..
      let mEvents = {
        "add_item": (data) => {
        }
      };

      mCb.onLoad({}, {}, mEvents);


      /*
      --USAGE--
      */
     let mUSAGE = () => {
         let mArr1 = [];
           //store.,
           mArr1.push({
            "n": {
              "t": 2,   //[Dom]
              "val": (mP = {}) => {
                let mDOM = document.createElement("div");
                //set..
                //mDOM.innerHTML = `item 1`;

                //set..
                //console.log(mP["cell"]["ui_code"]);
                mP["cell"]["ui_code"].style.margin = `0.9vh 1.5vw`;


                //txt..
                let mR_t = core_1mn.mTxt.set({
                  "0": mDOM,
                  "1": `${mV["n"]}`,
                  "2": "2.0vh",
                  "3": "#343434",
                  "5": 1  //[".innerHTML", ".innerText"]
                });
                //mR_t["e"].userSelect = "none";
                mR_t["e"].style.whiteSpace = `nowrap`;
                mR_t["e"].style.borderRadius = `0.5vh`;
                mR_t["e"].style.padding = `0.8vh 0.8vw`;
                mR_t["e"].style.backgroundColor = `transparent`;
                mR_t["e"].style.outline = `0.2vh dashed #343434`;
                mR_t["e"].style.margin = `0.2vh 0.3vw`;

                //return..
                return mDOM;
              }
            },
            "x": {}
          });
         //drag..
         core_1mn["drag"].set({
          "e": mDOM,
          "payload": {
            "l": mArr1 //[]
          }
        },
        //cb..
        {
          "onLoad": (mP={}, cb={}, mEvnt={}) => {
            //set..
            console.log(`drag is ready!`);
            //set..
            //mEvnt.add_item();

          }

        },
      );

     };

      


    }

  },




  //audio (lib)..
  "aud": {
    //http://alemangui.github.io/pizzicato/
    //https://tonejs.github.io/
    //https://howlerjs.com/
    //https://blog.logrocket.com/audio-visualizer-from-scratch-javascript/
    //https://metroui.org.ua/audio.html
    //https://github.com/sc0ttj/awesome-javascript-audio
    //https://wavesurfer-js.org/
    //https://wavesurfer-js.org/examples/#record.js
    //https://davidwalsh.name/wavesurfer

    //set..
    "set": (mP={
      //"e": HTMLElement,
    },
    mCb={
      "onLoad": (mP={}, cb={}, mEvnt={
        "add_speaker": (data) => { },
        "add_recorder": (data) => { }
      }
      )
    }
    ) => {
      //set vars..
      let mE = mP["e"];
      //data..
      let mGet_Dta_aud = () => {
        return {
          "payload": {
            "l": []
          }
        };
      };
      //we will store data structure..
      let mDta_aud = mGet_Dta_aud();

      //set..
      let mDta = { 
        "gVars": {
          "debug": false,
        },
        "rndr": {
          "utils": {
          },
          "l": {
            "speaker": {
              "utils": {
              },
              "typ": [
                {
                  "name": "Circle",
                  "key": [0],
                  "set": (mE, mV) => {
                    //mC..
                    let mC = document.createElement("div");
                    mE.appendChild(mC);
                    //set..
                    mC.style.width = mV.hasOwnProperty("w")?mV["w"]:`10vh`;
                    mC.style.height = mV.hasOwnProperty("h")?mV["h"]:`10vh`;
                    mC.style.borderRadius = `10vh`;
                    mC.style.backgroundColor = `#1681cc`;
                    mC.style.display = `flex`;
                    mC.style.justifyContent = `center`;
                    mC.style.alignItems = `center`;

                    //set..
                    let mSet_svg = (mE, m0=``) => {
                      let mSvgCov = document.createElement("div");
                      mE.appendChild(mSvgCov);
                      let mSet = (mW) => {
                        core_1mn['mSvg'].set({
                          "0": `${core_1mn["gVars"]["asset_path"]}svg/${m0}`,  //svg file name --OR-- <svg></svg>   --OR-- "my_folder/my_file.svg"
                          "2": mW,//"4vh",
                          "3": mW,//"4vh",
                          "4": "rgba(255,255,255, 1.0)",
                          "5": mSvgCov,
                          //you can set and (reload) FIELD by (assigning) this func..
                          //"reload": () => {},
                         });
                      };
                       core_1mn["mCnv"].unit.set(mC.style.width, {
                        "onLoad": (v) => {
                          //console.log(v);
                          mSet(v);
                        }, 
                       },
                       {
                        "divide": 2.2
                       });
                       return mSvgCov;
                    }; 
                    let mIco1 = mSet_svg(mC, `volume-mute-0.svg`);
                    let mIco2 =mSet_svg(mC, `volume-high-0.svg`);
                    mIco2.style.display = `none`;

                    //set..
                    core_1mn["mUtils"]["aud"].set(mC,
                      {
                        "media": mV["media"]
                      },
                       { 
                        "onLoad": (mP={}, mCb={}, mEnvt={}) => {
                          //cb..
                          mCb.onPlay = () => {
                            mIco1.style.display = `none`;
                            mIco2.style.display = `block`;
                          };
                          mCb.onEnd = () => {
                            mIco2.style.display = `none`;
                            mIco1.style.display = `block`;
                          };
                          
                          //mC..
                          mC.onclick = () => {
                            //check..(m_ware)
                            if (mV.hasOwnProperty("m_ware")) {
                            if (mV["m_ware"].hasOwnProperty("on_play")) {
                               if (mV["m_ware"].on_play()==false) {
                                console.log(`play stopped by [m_ware.on_play]`);
                                return; //Stop
                               }
                            }
                            }
                            //all ok..
                            mEnvt.play();

                          };

                        }

                    });

                  }
                }
              ],
              "set": (mV) => {
                //set vars..
                let mP = mV["p"];
                let mE = mP["e"];
                let mPayload = mP["payload"];
                //console.log(mPayload);
                //set..
                let mBuild = (mE) => {
                  let mI = document.createElement("div");
                  mE.appendChild(mI);

                  //check..
                  let mIdx = mRndr["l"]["speaker"]["typ"].findIndex(eF => eF["key"].indexOf(mPayload["typ"])!==-1);
                  if (mIdx===-1) {
                    let msg = `err: invalid [typ=${mPayload["typ"]}]`;
                    console.error(msg);
                    return;
                  }
                  //all ok..
                  //set..
                  mRndr["l"]["speaker"]["typ"][mIdx].set(mI, mPayload);

                };
                mBuild(mE);

 
              },
              "add": (mV) => {
                mRndr.l.speaker.set(mV);
              },
            },

            "recorder": {
              "utils": {
              },
              "typ": [
                {
                  "name": "Box",
                  "key": [0],
                  "set": (mE, mV) => {
                    //mL..
                    let mL = document.createElement("div");
                    mE.appendChild(mL);
                    mL.style.userSelect = `none`; 
                    mL.style.display = `flex`;
                    mL.style.justifyContent = `center`;
                    mL.style.alignItems = `center`;
                    mL.style.borderRadius = `1.5vh`;
                    mL.style.padding = `1.0vh 2vw`;
                    mL.style.backgroundColor = `rgba(34,34,34, 0.1)`;

                    mL.style.width = mV.hasOwnProperty("w")?mV["w"]:`10vh`;
                    mL.style.height = mV.hasOwnProperty("h")?mV["h"]:`10vw`;

                    //set vars..
                    let mVal = {
                      "txt1": null,
                      "btn1": null,
                      "reset": null,
                      "play": null,
                    };
                    //add ui..
                    let mAdd_UI = (mEvnt, mCb) => {
                      let mRecStatus = 0;
                      mVal["btn1"].onclick = () => {
                        if (mRecStatus==0) {
                          mEvnt.start_record();
                          mRecStatus=1;
                          return;
                        }
                        if (mRecStatus==1) {
                          mEvnt.pause_record();
                          mRecStatus=2;
                          return;
                        }
                        if (mRecStatus==2) {
                          mEvnt.resume_record();
                          mRecStatus=1;
                          return;
                        }
                      };
                      mVal["reset"]["cb"]["onClick"] = () => {
                        mEvnt.reset_record();
                      };
                      mVal["play"]["cb"]["onClick"] = () => {
                        //--cb--//
                        mCb["onRecOut"] = (mP={}) => {
                          console.log(mP);
                        };
                        //set..
                        mEvnt.out_record();
                      };


                    };


                    //svg..
                    let mSet_svg1 = (mE, m0, mW) => {
                      let mConf = {
                        "0": `${core_1mn["gVars"]["asset_path"]}svg/${m0}`,  //svg file name --OR-- <svg></svg>   --OR-- "my_folder/my_file.svg"
                        "2": mW,//"4vh",
                        "3": mW,//"4vh",
                        "4": "red",
                        "5": mE,
                        "cb": {
                          "onClick": () => {}
                        }
                        //you can set and (reload) FIELD by (assigning) this func..
                        //"reload": () => {},
                       };
                      core_1mn['mSvg'].set(mConf);
                      return mConf;
                    };
                    core_1mn["mCnv"].unit.set(mL.style.height, {
                      "onLoad": (v) => {
                        let Res = mSet_svg1(mL, `arrow-clockwise_0.svg`, v);
                        mVal["reset"]=Res; 
                      }, 
                     },
                     {
                      "divide": 4.0
                     });


                     //Space..
                    core_1mn["space"].set({
                      "e1": mL,
                      "w": "1.5vw"
                    });


                    core_1mn["mCnv"].unit.set(mL.style.height, {
                      "onLoad": (v) => {
                        let Res = mSet_svg1(mL, `play-0.svg`, v);
                        mVal["play"]=Res; 
                      }, 
                     },
                     {
                      "divide": 3.5
                     });



                     //Space..
                    core_1mn["space"].set({
                      "e1": mL,
                      "w": "2vw"
                    });


                    //mBtn1..
                    let mBtn1 = (mE, mW) => {
                    //mC..
                    let mC = document.createElement("div");
                    mE.appendChild(mC);
                    //set..
                    mC.style.width = `${mW}`;
                    mC.style.height = `${mW}`;
                    mC.style.borderRadius = `50%`;
                    mC.style.backgroundColor = `#ee432e`;
                    mC.style.display = `flex`;
                    mC.style.justifyContent = `center`;
                    mC.style.alignItems = `center`;
                    //store..
                    mVal["btn1"] = mC;

                    //set..
                    let mSet_svg = (mE, m0=``) => {
                      let mSvgCov = document.createElement("div");
                      mSvgCov.style.display = `flex`;
                      mSvgCov.style.alignItems = `center`;
                      mE.appendChild(mSvgCov);
                      let mSet = (mW) => {
                        if (m0!=``) {
                        core_1mn['mSvg'].set({
                          "0": `${core_1mn["gVars"]["asset_path"]}svg/${m0}`,  //svg file name --OR-- <svg></svg>   --OR-- "my_folder/my_file.svg"
                          "2": mW,//"4vh",
                          "3": mW,//"4vh",
                          "4": "rgba(255,255,255, 1.0)",
                          "5": mSvgCov,
                          //you can set and (reload) FIELD by (assigning) this func..
                          //"reload": () => {},
                         });
                        }
                         if (m0==``) {
                         core_1mn.mTxt.set({
                          "0": mSvgCov,  //HTMLElement
                          "1": `&#9673; Rec`,  //txt
                          "2": mW,  //fontSize
                          "3": "rgba(255,255,255, 1.0)",  //color
                          "4": 0  //pos hori [left, center, right]
                         });
                        }

                      };
                      core_1mn["mCnv"].unit.set(mC.style.width, {
                        "onLoad": (v) => {
                          //console.log(v);
                          mSet(v);
                        }, 
                       },
                       {
                        "divide": m0==``?4.5:2.5
                       });

                       return mSvgCov;
                    }; 
                    let mIco1 = mSet_svg(mC, ``);  //record-0.svg
                    let mIco2 = mSet_svg(mC, `pause-fill_0.svg`); 
                    mIco2.style.display = `none`;
 

                    //mStream_RES..
                    let mStream_RES = {
                      "p": {
                        "conf": {
                          "audio": true
                        },
                        "rec": {
                          "out": {
                            "typ": `audio/ogg; codecs=opus` //audio/ogg; codecs=opus
                          }
                        }
                      },
                      "cb": {
                        "onLoad": (mP={}, mCb={}, mEvnt={}) => {
                           console.log(mP);
                           console.log(`stream is ready!`);
                           //cb..
                           mCb["onRecStop"] = (mP={}) => {
                            console.log(mP);
                            mIco2.style.display = `none`;
                            mIco1.style.display = `block`;
                           };
                           mCb["onRecStart"] = (mP={}) => {
                            //console.log(mP);
                            mIco1.style.display = `none`;
                            mIco2.style.display = `block`;
                           };
                           mCb["onRecPause"] = (mP={}) => {
                            //console.log(mP);
                            mIco2.style.display = `none`;
                            mIco1.style.display = `block`;
                          };
                           mCb["onRecResume"] = (mP={}) => {
                             //console.log(mP);
                             mIco1.style.display = `none`;
                             mIco2.style.display = `block`;
                           }; 
                           mCb["onRecDur"] = (mP={}) => {
                            let mTime = mP["0"];
                            //console.log(mTime);
                            mVal["txt1"].innerText = mTime;
                           };
                           //events..
                           /*mEvnt.start_record();
                           setTimeout(() => {
                           //mEvnt.stop_record();
                           mEvnt.pause_record();
                           }, 4000);
                           setTimeout(() => {
                            mEvnt.resume_record();
                          }, 6000);*/

                          //add ui..
                          mAdd_UI(mEvnt, mCb);

                        }
                      }
                    };
                    //stream..
                    core_1mn["mUtils"]["media"]["stream"].set(
                    mStream_RES["p"],
                    mStream_RES["cb"]);

                    
                    };
                    core_1mn["mCnv"].unit.set(mL.style.height, {
                      "onLoad": (v) => {
                        mBtn1(mL, v);
                      }, 
                     },
                     {
                      "divide": 1.2
                     });


                    //Space..
                    core_1mn["space"].set({
                      "e1": mL,
                      "w": "2vw"
                    });


                    //mSet_txt1..
                    let mSet_txt1 = (mE, mW) => {
                      //txt..
                      let mRes = core_1mn.mTxt.set({
                      "0": mE,  //HTMLElement
                      "1": `00:00:00`,  //txt
                      "2": `${mW}`,  //fontSize
                      "3": "#ee432e",  //color
                      "4": 0  //pos hori [left, center, right]
                     });
                     mVal["txt1"]=mRes["e"];

                    };
                    core_1mn["mCnv"].unit.set(mL.style.height, {
                      "onLoad": (v) => {
                        mSet_txt1(mL, v);
                      }, 
                     },
                     {
                      "divide": 3.5
                     });



                  }
                }
              ],
              "set": (mV) => {
                //set vars..
                let mP = mV["p"];
                let mE = mP["e"];
                let mPayload = mP["payload"];
                //console.log(mPayload);
                //set..
                let mBuild = (mE) => {
                  let mI = document.createElement("div");
                  mE.appendChild(mI);

                  //check..
                  let mIdx = mRndr["l"]["recorder"]["typ"].findIndex(eF => eF["key"].indexOf(mPayload["typ"])!==-1);
                  if (mIdx===-1) {
                    let msg = `err: invalid [typ=${mPayload["typ"]}]`;
                    console.error(msg);
                    return;
                  }
                  //all ok..
                  //set..
                  mRndr["l"]["recorder"]["typ"][mIdx].set(mI, mPayload);

                };
                mBuild(mE);

 
              },
              "add": (mV) => {
                mRndr.l.recorder.set(mV);
              },
            },

           }
        }
      };
      let mRndr = mDta["rndr"];


      //send cb..
      let mEvents = {
        "add_speaker": (data={
          "e": HTMLElement,
          "typ": 0, 
          "w": ``,
          "h": ``,
          "media": {
            "val": null,
            "typ": 0,   //[src, srcObject]
          },
          "m_ware": { //middleware..
            "on_play": () => {return true;}
          }
        },
        ) => {
          mDta["rndr"]["l"]["speaker"].add({
            "p": {
              "e": data["e"],
              "payload": data
            }
          });
        },

        "add_recorder": (data={
          "e": HTMLElement,
          "typ": 0, 
          "w": ``,
          "h": ``,
        },
        ) => {
          mDta["rndr"]["l"]["recorder"].add({
            "p": {
              "e": data["e"],
              "payload": data
            }
          });
        },


      };

      mCb.onLoad({}, {}, mEvents);


      /*
      --USAGE--
      */
     let mUSAGE = () => {
          //aud..
          core_1mn["aud"].set({},
            {
              "onLoad": (mP={}, cb={}, mEvnt={}) => {
                console.log(`aud is ready!`);
                //set..

                //add_speaker
                /*mEvnt.add_speaker({
                  "e": mB,
                  "typ": 0, 
                  "w": "8vh",
                  "h": "8vh",
                  "media": {
                    "val": `https://www2.cs.uic.edu/~i101/SoundFiles/StarWars3.wav`,
                    "typ": 0,   //[src, srcObject]
                  },
                  //"m_ware": { //middleware..
                    //"on_play": () => {return true;}
                  //}
                },);*/


                //add_recorder
                /*mEvnt.add_recorder({
                  "e": mB,
                  "typ": 0, 
                  "w": "20vw",
                  "h": "7vh",
                },);*/



              }
            });

     };

      


    }

  },


  //video (lib)..
  "vid": {
    //https://videojs.com/advanced/?video=disneys-oceans
    //https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content

    //set..
    "set": (mP={
      //"e": HTMLElement,
    },
    mCb={
      "onLoad": (mP={}, cb={}, mEvnt={
        "add_player": (data, cb) => { }
      }
      )
    }
    ) => {
      //set vars..
      let mE = mP["e"];
      //data..
      let mGet_Dta_main = () => {
        return {
          "payload": {
            "l": []
          }
        };
      };
      //we will store data structure..
      let mDta_main = mGet_Dta_main();

      //set..
      let mDta = { 
        "gVars": {
          "debug": false,
        },
        "rndr": {
          "utils": {
          },
          "l": {

            "player": {
              "utils": {
              },
              "typ": [
                {
                  "name": "Default",
                  "key": [0],
                  "set": (mE, mV) => {
                    //mC..
                    let mC = document.createElement("div");
                    mE.appendChild(mC);
                    //set..
                    mC.style.width = mV.hasOwnProperty("w")?mV["w"]:`20vh`;
                    mC.style.height = mV.hasOwnProperty("h")?mV["h"]:`15vh`;
                    mC.style.borderRadius = `0.5vh`;
                    mC.style.backgroundColor = `#e6e6e6`;
                    mC.style.display = `flex`;
                    mC.style.justifyContent = `center`;
                    mC.style.alignItems = `center`;
                    if (mV.hasOwnProperty("margin")) {
                    mC.style.margin = mV["margin"]; //`0 auto`
                    }
 

                    //dta_curr..
                    let dta_curr = {
                      "autoplay": false,
                      "isEnd": false
                    };

                    //set..
                    let mSet = (mE,v) => {
                      let mV = document.createElement("video");
                      mE.appendChild(mV);
                      //set..
                      mV.id = core_1mn.mUniqueId.mGenerate(14);

                      mV.classList.add("video-js");
                      mV.classList.add("vjs-tech");

                      if (v.hasOwnProperty("controls")) {
                      mV.controls = v["controls"];
                      }

                      mV.preload = "auto";
                      mV.width = ``;
                      mV.height = ``;
                      mV.poster = ``;
                      mV.setAttribute("data-setup", 
                      JSON.stringify({ "fluid" : true }) );
                      mV.crossOrigin = `anonymous`;

                      

                      //set..
                      let mS = document.createElement("source");
                      mV.appendChild(mS);
                      //set..
                      if (v["media"]["typ"]==0) {
                      mS.src = v["media"]["val"];
                      }
                      if (v["media"]["typ"]==1) {
                      mS.srcObject = v["media"]["val"];
                      }
                      //set..
                      let mOpt = { //https://videojs.com/guides/options/
                      }; 

                      //autoplay..
                      if (v.hasOwnProperty("autoplay")) {
                        mV.autoplay = v["autoplay"];
                        if (v["autoplay"]==true) {
                        mV.muted = true;
                        //mOpt["autoplay"] = "play";
                        dta_curr["autoplay"]=true;
                        }
                      }

                      //muted..
                      if (v.hasOwnProperty("muted")) {
                        mV.muted = v["muted"];
                      }

                      let player = videojs(mV.id, mOpt);

                     
                      //mAutoPlay..
                      let mAutoPlay = () => {
                        if (dta_curr["autoplay"]==true) {
                          player.play();
                          if (v.hasOwnProperty("muted")) {
                            if (v["muted"]==true) {
                              return; //Stop..
                            }
                          }
                          //all ok..
                          mV.muted = false;                            
                        }
                      };

                      //cb..
                      let mOnEnd = () => {
                        if (v.hasOwnProperty("cb")) {
                          if (v["cb"].hasOwnProperty("onended")) {
                           v["cb"].onended();
                          }
                        }
                      };

                      //events..
                      //console.log(player); 
                      mV.onloadeddata = () => {
                        mAutoPlay();
                        //send cb..
                        if (v.hasOwnProperty("cb")) {
                          if (v["cb"].hasOwnProperty("onloadeddata")) {
                           v["cb"].onloadeddata({
                            "e": mV
                           });
                          }
                        }

                        //startDur..
                        if (v.hasOwnProperty("startDur")) {
                          mV.currentTime = v["startDur"];
                        }

                      };
                      mV.onended = () => {
                        if (dta_curr["isEnd"]==true) {
                          return; //Stop..
                        }
                        dta_curr["isEnd"]=true;
                        //send cb..
                        mOnEnd();
                      };
                      mV.ontimeupdate = () => {
                        //console.log(mV.currentTime);
                        //endDur..
                        if (v.hasOwnProperty("endDur")) {
                          if(mV.currentTime >= v["endDur"]){
                            mV.pause(); 
                            mV.onended();
                          }
                        }
                      };


                     };

                    //load req libs..
                    core_1mn['mLoadReqLibs'].set(
                      {
                          "mCss": [
                            core_1mn.gVars.core_1mn_path + 
                            `third-party/videojs/video-js.css`, 
                          ],
                          "mJS": [
                            //https://videojs.com/getting-started
                            core_1mn.gVars.core_1mn_path + 
                            `third-party/videojs/video.min.js`, 
                          ],
                          "mAllLibsCallback": {
                            "onLoad": () => {
                              console.log("-----videojs---------");
                              mSet(mC,mV);
                           },
                           "onError": () => { }
                          }
                      }
                    );


                  }
                }
              ],
              "set": (mV) => {
                //set vars..
                let mP = mV["p"];
                let mE = mP["e"];
                let mPayload = mP["payload"];
                //console.log(mPayload);
                //set..
                let mBuild = (mE) => {
                  let mI = document.createElement("div");
                  mE.appendChild(mI);

                  //check..
                  let mIdx = mRndr["l"]["player"]["typ"].findIndex(eF => eF["key"].indexOf(mPayload["typ"])!==-1);
                  if (mIdx===-1) {
                    let msg = `err: invalid [typ=${mPayload["typ"]}]`;
                    console.error(msg);
                    return;
                  }
                  //all ok..
                  //set..
                  mRndr["l"]["player"]["typ"][mIdx].set(mI, mPayload);

                };
                mBuild(mE);

 
              },
              "add": (mV) => {
                mRndr.l.player.set(mV);
              },
            },

           }
        }
      };
      let mRndr = mDta["rndr"];


      //send cb..
      let mEvents = {
        "add_player": (
          data={
          "e": HTMLElement,
          "typ": 0, 
          "w": ``,
          "h": ``,
          "controls": true,
          "autoplay": false,
          "muted": true,
          "margin": `0 auto`,

          "startDur": 0, //start-duration
          "endDur": 0,   //end-duration

          "media": {
            "val": null,
            "typ": 0,   //[src, srcObject]
          },
          "m_ware": { //middleware..
            "on_play": () => {return true;}
          },
          "cb": {
            "onended": () => {},
            "onloadeddata": (mP={"e":HTMLElement}) => {}
          }
        }
        ) => {
          mDta["rndr"]["l"]["player"].add({
            "p": {
              "e": data["e"],
              "payload": data
            }
          });
        },


      };

      mCb.onLoad({}, {}, mEvents);


      /*
      --USAGE--
      */
     let mUSAGE = () => {
          //vid..
          core_1mn["vid"].set({},
            {
              "onLoad": (mP={}, cb={}, mEvnt={}) => {
                console.log(`vid is ready!`);
                //set..

                 //add_player
                 mEvnt.add_player({
                  "e": mB,
                  "typ": 0, 
                  //"w": "8vh",
                  //"h": "8vh",
                  "controls": true,
                  "autoplay": false, 
                  "muted": true,
                  "margin": `0 auto`,
                  "startDur": 0, //start-duration
                  "endDur": 0,   //end-duration
                  "media": {
                    "val": 
                    /*`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`, */
                    `https://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8`,

                    "typ": 0,   //[src, srcObject]
                  },
                  //"m_ware": { //middleware..
                    //"on_play": () => {return true;}
                  //}
                  "cb": {
                    "onended": () => {},
                    "onloadeddata": (mP={"e":HTMLElement}) => {}
                  }
                },);

              }
            });

     };

      


    }

  },




  //tts (lib).. [text to speech]
  "tts": {
    //https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/
    //https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API
    //https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
    //https://developer.mozilla.org/en-US/docs/Web/API/Window/speechSynthesis

    "set": (mP={
      "e":null,
      "lang":[], //lang-code  eg => ["en", "en-GB"] 
      "flag": "",  //ui => [If you want to visualize]
    },cb={
      "onLoad": (mP={}, 
        mEvnt={
        "speak": (mP={"txt":``},
        
        ) => {}
      },
      mCb={
        "onend": () => {}
      }
      
      ) => {}
    }) => {
      //mFmt0..
      let mFmt0 = (a) => {
        let mN = [];
        for (let i = 0; i < a.length; i++) {
        const e = a[i];
        mN.push(e.trim().toLowerCase());
        }
        return mN;
      };
      //set..
      mP["lang"] = mFmt0(mP["lang"]);
      let mFlag = [];
      if (mP.hasOwnProperty("flag")) {
      mFlag = mP["flag"].trim().split(" ");
      }

      //mE..
      let mE = document.createElement("div");
      mP["e"].appendChild(mE);
      //check..
      if (mFlag.indexOf("ui")==-1) {
        mE.style.display = "none";
      }

      //set..
      const synth = window.speechSynthesis;

      //speak..
      let mSpeak = (mTxt) => {
        const utterThis = new SpeechSynthesisUtterance(mTxt);
        const selectedOption =
          voiceSelect.selectedOptions[0].getAttribute("data-name");
        utterThis.voice = voices.find((v) => v.name === selectedOption);
        synth.speak(utterThis);
        inputTxt.blur();


        //events..
        //https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/end_event
        utterThis.onend = () => {
          //send cb..
          if (mRes.cb.hasOwnProperty("onend")) {
            mRes.cb.onend();
          }
        };


      };

      //set..
      let mRes = {
        "p": {},
        "event": {
          "speak": (mP={"txt":``}) => {
            setTimeout(() => {
              mSpeak(mP["txt"]);
            }, 200);
          }
        },
        "cb": {
          "onend": () => {}
        }
      };
      
      //set..
      const inputBtn = document.createElement("button");
      inputBtn.innerHTML = `Speak`;
      const inputTxt = document.createElement("input");
      const voiceSelect = document.createElement("select");
      //set.. 
      mE.appendChild(inputBtn);
      mE.appendChild(inputTxt);
      mE.appendChild(voiceSelect);
      //set..
      let voices = [];
      function populateVoiceList() {
        voices = synth.getVoices();

        for (const voice of voices) {
          const option = document.createElement("option");
          option.textContent = `${voice.name} (${voice.lang})`;

          if (voice.default) {
            option.textContent += " — DEFAULT";
          }

          option.setAttribute("data-lang", voice.lang);
          option.setAttribute("data-name", voice.name);
          voiceSelect.appendChild(option);

          //auto-sel..
          if (mP["lang"].indexOf(voice.lang.toLowerCase())!==-1) {
            //found..
            option.selected = true;
          }

        }
        //all ok..
        

      }
      populateVoiceList();
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
      }
      inputBtn.onclick = (event) => {
        event.preventDefault();
        mSpeak(inputTxt.value);
      };  
      


      //send cb..
      cb.onLoad(mRes["p"],mRes["event"],mRes["cb"]); 
      


    }


    /*
    --USAGE--
     mBtn.onclick = () => {  //We wrapped with [Button] because user-interaction is required..
                    //set..
                    core_1mn.tts.set({
                      "e": mB,
                      "lang": ["en", "en-GB"],
                      "flag": "" //ui
                    },
                    {
                      "onLoad": (mP={}, mEvnt={}, mCb={}) => {
                        mEvnt.speak({
                          "txt": `Hello`
                        });

                        //cb..
                        mCb.onend = () => {
                          alert(`onend`);
                        };

                      }
                    });

                    };

    */
  
  
  },



  //doc..(lib) [It will be like window.document]
  "doc": {
    //eventListener..
    "eventListener": mLIB["mUtils"].eventListener.set(), //[ "onAdd" ]
    "add": (mP={
      "child": document.body,  //document.body || `` (HTML_TAG => 'div', 'p')
      "parent": document.body  //document.body || `` (HTML_TAG => 'div', 'p')
    }) => {
      let mA = mP["child"];
      let mB = mP["parent"];
      if (typeof mP["child"] === "string") {
        mA = document.createElement(mP["child"]);
      }
      if (typeof mP["parent"] === "string") {
        mB = document.createElement(mP["parent"]);
      }
      //set..
      mB.appendChild(mA);

      //send cb..
      core_1mn.doc.eventListener.exec({"name":`onAdd`}, {});

      //return..
      return {
        "child": mA,
        "parent": mB
      };
    }
    /*
    --USAGE--
    //event..
    core_1mn.doc.eventListener.add({"name":`onAdd`}, () => {
      alert(`onAdd`);
    });

    //set..
    let mElem = core_1mn.doc.add({
      "child": `div`,
      "parent": mItem
    });

    */
  },



  //auth..(lib) [Authentication & Authorization]
  "auth": {
    "set": (lib=import("./libs/auth/index.js")) => {
      return lib;
      /*
      --USAGE--
      core_1mn.auth.set().then((lib) => {
      //lib loaded..
      });
      */
    }
  }







};
core_1mn['init'].set(); //load in-build features....

//return..
return core_1mn;

};
let core_1mn = core_1mn_LIB();


//**********Deprecated Variable***************//
var mGlobalVariables = core_1mn;


//*********Notes*******//
//*****Response Codes..........
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
//HTTP response status codes
/*1 - Informational responses (100–199)
2 - Successful responses (200–299)
3 - Redirection messages (300–399)
4 - Client error responses (400–499)
5 - Server error responses (500–599)*/



//payload..
var core_skle_en = {
   //here we add version info
   "mLibInfo": {
    "version": "1.0",
    "code": "1",
    "createdBy": "1MN.IO"
   },

    //here add all global variables..
  "gVars": {
  },


  "init": {
    "isInit": false,
    "set": function(){
       

    }
  },

  //add reloadable functions.. trigger when given [HTML, CSS, JS] is loaded
  "reload": {
    "set": function(){
      //change site language..
      core_skle_en['changeSiteLang']['set'](); 

    }
  },

  //change site language..
  "changeSiteLang": {
    "set": function(){
      //(ip_info)....get ip information..
      core_1mn['ip_info']['set']({
        "cb": {
          "onLoad": function(data){
            //console.log(data);
            var ip_info = data;
            //continue to language code..
            mLangCode(ip_info);
          },
          "onErr": function(data){ 
            //error..
            console.log(data);
          },
        }
      });
      //load lang codes..
      function mLangCode(ip_info) {
         //(mLangCode)....set
       core_1mn['mLangCodes']['set']({
        "cb": {
          "onLoad": function(data){
            var mLangArr = data['0'];
            //console.log(mLangArr); 
            //return; 
             //set..
            //"countryCode": ["IN", "PK"],
            //"region": ["UP", "DL"]
            var mSel_lang_code = "en"; //default
            try {
              const array1 = mLangArr; 
              const found = array1.find( function(element){
                try {
                  if(element['countryCode'].indexOf(ip_info['countryCode'])!==-1 &&
                  element['region'].indexOf(ip_info['region'])!==-1
                   ){
                    return element;
                  }
                } catch (error) {
                  //console.log("IGNORE");
                  //IGNORE.....
                }
              });
              //console.log(found);
              if(found!=undefined){
                if(found['lang_code']!=undefined){
                  //set relevant language code....
                  mSel_lang_code=found['lang_code'];
                }
              }
              //now....we continue to set lang..
              mSet_lang(mSel_lang_code);
            } catch (error) {
              //error..
              console.log(`Error: not find language sugg.. in [mLangCodes]`);
              return;
            }

          },
          "onErr": function(data){
            //error..
            console.log(data);
          },
        }
      });
      }

      //set language here..
      function mSet_lang(lang_code) {
        console.log(`SITE LANGUAGE: Site is running in: ${lang_code}`);
        //(trans_1)....set language..
        core_1mn['trans']['1']['set']({"lc": lang_code}); //lc=>"hi"
      }

     

    }
  }
 


};
//core_skle_en['init'].set(); //load in-build features....

 

//make global..
window.core_1mn = core_1mn;
//window.mGlobalVariables = mGlobalVariables;
//export..
export {core_1mn};
