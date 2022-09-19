/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)
// Custom TS Julia main map
    WA.room.onEnterLayer("floor").subscribe(() => {
        WA.room.hideLayer("roof");
        WA.room.hideLayer("wall-stripe-front");
        WA.room.hideLayer("sign");
      });
      
    WA.room.onLeaveLayer("floor").subscribe(() => {
        WA.room.showLayer("roof");
        WA.room.showLayer("wall-stripe-front");
        WA.room.showLayer("sign");
      });
// Custom TS Julia main map
WA.room.onEnterLayer("floor_liberary").subscribe(() => {
    WA.room.hideLayer("roof_liberary");
    WA.room.hideLayer("walls-bg-front_liberary");
  });
  
WA.room.onLeaveLayer("floor_liberary").subscribe(() => {
    WA.room.showLayer("roof_liberary");
    WA.room.showLayer("walls-bg-front_liberary");
  });
  // Custom TS Julia Orientation

WA.room.onEnterLayer("floor_orientation").subscribe(() => {
    WA.room.hideLayer("roof_orientation");
    WA.room.hideLayer("walls-bg-front_orientation");
    WA.room.hideLayer("sign_orientation");
  });
  
WA.room.onLeaveLayer("floor_orientation").subscribe(() => {
    WA.room.showLayer("roof_orientation");
    WA.room.showLayer("walls-bg-front_orientation");
    WA.room.showLayer("sign_orientation");
  });
  WA.room.onEnterLayer("office_floor_orientation").subscribe(() => {
    WA.room.hideLayer("facade_orientation");
    WA.room.hideLayer("facade-furniture-fg_orientation");
    WA.room.hideLayer("facade-furniture-bg_orientation");
  });
  
WA.room.onLeaveLayer("office_floor_orientation").subscribe(() => {
    WA.room.showLayer("facade_orientation");
    WA.room.showLayer("facade-furniture-fg_orientation");
    WA.room.showLayer("facade-furniture-bg_orientation");
  });

    WA.room.onEnterLayer('clockZone').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup","It's " + time,[]);
    })

    WA.room.onLeaveLayer('clockZone').subscribe(closePopUp)

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
