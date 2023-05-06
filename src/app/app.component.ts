import { Component  } from '@angular/core';
import { VideoJsOptions } from "src/models/videojs-options"; 

declare var require: any;
import 'videojs-contrib-quality-levels';
import  videojs from 'video.js';
require('videojs-hls-quality-selector');

require('@silvermine/videojs-quality-selector')(videojs);



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent   {

  
  videoJsOptions: VideoJsOptions = {
    
    
   poster: "../../assets/2c377df2-e67b-4923-b2b9-a716485f3bf9/Basic_Business_FinanceP2.jpg" ,

   playbackRates: [0.5, 1, 1.5, 2],
   QualitySelector:true,
 
  // autoplay: 'muted',
 //qualitySelector:true,
    controls: true,
     loadingSpinner: true,
    height: "480",
    width: "640",
    sources: [
       {
       src: '../assets/2c377df2-e67b-4923-b2b9-a716485f3bf9/index.m3u8',
     type: 'application/x-mpegURL'
       }
       
      // {
      // src: 'https://storage.googleapis.com/hubert-raymond-webpage/The_Hustler(1961)---H264.mp4',
      // type: 'video/mp4'
      // },
    
   ],
   
    
   
    plugins: {
      // videoJsResolutionSwitcher: {
      //   default: 'low', // Default resolution [{Number}, 'low', 'high'],
      //   dynamicLabel: true
      // },
      seekButtons: {
        forward: 10,
        back: 10
      }
    },


    inactivityTimeout: 0,
    userActions: {
     doubleClick: true, // to toggle full screen on double click
      hotkeys: function (event: any) {

        // `up arrow` key = forward 10 sec
        if (event.which === 38) {
          this.volume(this.volume() + 0.2);
        }

        // `up arrow` key = forward 10 sec
        if (event.which === 40) {
          this.volume(this.volume() - 0.2);
        }

        // `right arrow` key = forward 10 sec
        if (event.which === 39) {
          this.currentTime(this.currentTime() + 10);
        }

        // `left arrow` key = backward 10 sec
        if (event.which === 37) {
          this.currentTime(this.currentTime() - 10);
        }

        // `f` key = toggle full screen
        if (event.which === 70) {
          if (!this.isFullscreen()) {
            this.enterFullWindow();
          } else {
            this.exitFullWindow();
          }
        }

        // `m` key = toggle mute
        if (event.which === 77) {
          if (this.muted()) {
            this.muted(false);
          } else {
            this.muted(true);
          }
        }

        // ` `(space) key = play/pause
        if (event.which === 32) {
          if (this.paused()) {
            this.play();
          } else {
            this.pause();
          }
        }

      }
    }
    
 
  };
  // function(){
  //   var player = videojs('video-player');
  //   window.player = player
  //   player.updateSrc([
  //     {
  //       src: 'https://vjs.zencdn.net/v/oceans.mp4?SD',
  //       type: 'video/mp4',
  //       label: 'SD',
  //       res: 360
  //     },
  //     {
  //       src: 'https://vjs.zencdn.net/v/oceans.mp4?HD',
  //       type: 'video/mp4',
  //       label: 'HD',
  //       res: 720
  //     }
  //   ])
  //   player.on('resolutionchange', function(){
  //     console.info('Source changed to %s', player.src())
  //   })
  // }
}
