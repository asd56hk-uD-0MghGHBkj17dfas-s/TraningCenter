/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)
// Custom TS Julia main map
    // WA.room.onEnterLayer("floor").subscribe(() => {
    //     WA.room.hideLayer("roof");
    //     WA.room.hideLayer("wall-stripe-front");
    //     WA.room.hideLayer("sign");
    //   });
      
    // WA.room.onLeaveLayer("floor").subscribe(() => {
    //     WA.room.showLayer("roof");
    //     WA.room.showLayer("wall-stripe-front");
    //     WA.room.showLayer("sign");
      // });
// Custom TS Julia main map
// WA.room.onEnterLayer("floor").subscribe(() => {
//     WA.room.hideLayer("roof");
//     WA.room.hideLayer("walls-bg-front");
//   });
  
// WA.room.onLeaveLayer("floor").subscribe(() => {
//     WA.room.showLayer("roof");
//     WA.room.showLayer("walls-bg-front");
  // });
  // Custom TS Julia Orientation

// WA.room.onEnterLayer("floor_orientation").subscribe(() => {
//     WA.room.hideLayer("roof_orientation");
//     WA.room.hideLayer("walls-bg-front_orientation");
//     WA.room.hideLayer("sign_orientation");
//   });
  
// WA.room.onLeaveLayer("floor_orientation").subscribe(() => {
//     WA.room.showLayer("roof_orientation");
//     WA.room.showLayer("walls-bg-front_orientation");
//     WA.room.showLayer("sign_orientation");
//   });
//   WA.room.onEnterLayer("office_floor_orientation").subscribe(() => {
//     WA.room.hideLayer("facade_orientation");
//     WA.room.hideLayer("facade-furniture-fg_orientation");
//     WA.room.hideLayer("facade-furniture-bg_orientation");
//   });
  
// WA.room.onLeaveLayer("office_floor_orientation").subscribe(() => {
//     WA.room.showLayer("facade_orientation");
//     WA.room.showLayer("facade-furniture-fg_orientation");
//     WA.room.showLayer("facade-furniture-bg_orientation");
//   });


  WA.room.onEnterLayer("floor").subscribe(() => {
    WA.room.hideLayer("roof");
    WA.room.hideLayer("walls-bg-front");
    WA.room.hideLayer("sign");
  });
  
WA.room.onLeaveLayer("floor").subscribe(() => {
    WA.room.showLayer("roof");
    WA.room.showLayer("walls-bg-front");
    WA.room.showLayer("sign");
  });

  WA.room.onEnterLayer("rooms_floor").subscribe(() => {
    WA.room.hideLayer("facade");
    WA.room.hideLayer("facade-furniture-fg");
    WA.room.hideLayer("facade-furniture-bg");
  });
  
WA.room.onLeaveLayer("rooms_floor").subscribe(() => {
    WA.room.showLayer("facade");
    WA.room.showLayer("facade-furniture-fg");
    WA.room.showLayer("facade-furniture-bg");
  });

// WA.room.onEnterLayer("x_ray_area").subscribe(() => {
//     WA.room.showLayer("x-ray");
//     console.log('THIS IS X_RAY');
//   });
  
// WA.room.onLeaveLayer("x_ray_area").subscribe(() => {
//     WA.room.hideLayer("x-ray");
//   });


    WA.room.onEnterLayer('massage-orientation-to-colearning').subscribe(() => {
        
      currentPopup = WA.ui.openPopup("ColerningPopup","Orientation to Colearning",[]);
  })

  WA.room.onLeaveLayer('massage-orientation-to-colearning').subscribe(closePopUp)

  WA.room.onEnterLayer('massage-library').subscribe(() => {
        
    currentPopup = WA.ui.openPopup("LibraryPop","Library",[]);
})

WA.room.onLeaveLayer('massage-library').subscribe(closePopUp)

WA.room.onEnterLayer('massage-ocean').subscribe(() => {
        
  currentPopup = WA.ui.openPopup("OceanPop","Ocean",[]);
})

WA.room.onLeaveLayer('massage-ocean').subscribe(closePopUp)

WA.room.onEnterLayer('massage-training1').subscribe(() => {
        
  currentPopup = WA.ui.openPopup("TrainingCenterPop1","Training Center",[]);
})

WA.room.onLeaveLayer('massage-training1').subscribe(closePopUp)

WA.room.onEnterLayer('massage-training2').subscribe(() => {
        
  currentPopup = WA.ui.openPopup("TrainingCenterPop2","Training Center",[]);
})

WA.room.onLeaveLayer('massage-training2').subscribe(closePopUp)

WA.room.onEnterLayer('massage-training3').subscribe(() => {
        
  currentPopup = WA.ui.openPopup("TrainingCenterPop3","Training Center",[]);
})

WA.room.onLeaveLayer('massage-training3').subscribe(closePopUp)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
