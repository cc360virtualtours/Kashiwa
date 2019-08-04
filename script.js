TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "adjacentPanoramas": [
   {
    "panorama": {
     "adjacentPanoramas": [
      {
       "panorama": {
        "adjacentPanoramas": [
         {
          "panorama": {
           "adjacentPanoramas": [
            {
             "panorama": {
              "adjacentPanoramas": [
               {
                "panorama": {
                 "adjacentPanoramas": [
                  {
                   "panorama": {
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31",
                      "backwardYaw": 167.62,
                      "class": "AdjacentPanorama",
                      "yaw": -89.29,
                      "distance": 1
                     },
                     {
                      "panorama": {
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_520CED68_5501_91C4_41D0_F2742460DC21",
                         "backwardYaw": 2.88,
                         "class": "AdjacentPanorama",
                         "yaw": -174.44,
                         "distance": 1
                        }
                       ],
                       "label": "IMG_20190802_092628",
                       "hfovMax": 130,
                       "partial": false,
                       "class": "Panorama",
                       "hfov": 360,
                       "vfov": 180,
                       "frames": [
                        {
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_5A5990E0_5500_90C4_41B8_7465409402E8",
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_520CED68_5501_91C4_41D0_F2742460DC21, this.camera_52B7C438_5E0E_9B6F_41A6_646806A595AA); this.mainPlayList.set('selectedIndex', 20)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_529653F6_5501_90CC_4189_DE8B26A5C623_0_HS_0_0.png",
                                "height": 211,
                                "class": "ImageResourceLevel",
                                "width": 189
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": -174.44,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -21.07,
                             "hfov": 10.6
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_529653F6_5501_90CC_4189_DE8B26A5C623_0_HS_0_0_0_map.gif",
                                "height": 105,
                                "class": "ImageResourceLevel",
                                "width": 94
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -21.07,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -174.44,
                             "hfov": 10.6
                            }
                           ],
                           "enabledInCardboard": true
                          },
                          {
                           "image": {
                            "levels": [
                             {
                              "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                              "height": 900,
                              "class": "ImageResourceLevel",
                              "width": 900
                             }
                            ],
                            "class": "ImageResource"
                           },
                           "id": "panorama_529653F6_5501_90CC_4189_DE8B26A5C623_tcap0",
                           "class": "TripodCapPanoramaOverlay",
                           "rotate": false,
                           "angle": 0,
                           "inertia": false,
                           "hfov": 36
                          }
                         ],
                         "right": {
                          "levels": [
                           {
                            "url": "media/panorama_529653F6_5501_90CC_4189_DE8B26A5C623_r_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_529653F6_5501_90CC_4189_DE8B26A5C623_r.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "front": {
                          "levels": [
                           {
                            "url": "media/panorama_529653F6_5501_90CC_4189_DE8B26A5C623_f_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_529653F6_5501_90CC_4189_DE8B26A5C623_f.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "class": "CubicPanoramaFrame",
                         "back": {
                          "levels": [
                           {
                            "url": "media/panorama_529653F6_5501_90CC_4189_DE8B26A5C623_b_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_529653F6_5501_90CC_4189_DE8B26A5C623_b.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "top": {
                          "levels": [
                           {
                            "url": "media/panorama_529653F6_5501_90CC_4189_DE8B26A5C623_u_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_529653F6_5501_90CC_4189_DE8B26A5C623_u.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "bottom": {
                          "levels": [
                           {
                            "url": "media/panorama_529653F6_5501_90CC_4189_DE8B26A5C623_d_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_529653F6_5501_90CC_4189_DE8B26A5C623_d.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "left": {
                          "levels": [
                           {
                            "url": "media/panorama_529653F6_5501_90CC_4189_DE8B26A5C623_l_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_529653F6_5501_90CC_4189_DE8B26A5C623_l.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "thumbnailUrl": "media/panorama_529653F6_5501_90CC_4189_DE8B26A5C623_t.jpg"
                        }
                       ],
                       "thumbnailUrl": "media/panorama_529653F6_5501_90CC_4189_DE8B26A5C623_t.jpg",
                       "hfovMin": 60,
                       "pitch": 0,
                       "id": "panorama_529653F6_5501_90CC_4189_DE8B26A5C623"
                      },
                      "backwardYaw": -174.44,
                      "class": "AdjacentPanorama",
                      "yaw": 2.88,
                      "distance": 1
                     },
                     {
                      "panorama": {
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_520CED68_5501_91C4_41D0_F2742460DC21",
                         "backwardYaw": -172.46,
                         "class": "AdjacentPanorama",
                         "yaw": -3.24,
                         "distance": 1
                        },
                        {
                         "panorama": {
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_5203758A_5501_7144_41D1_C6467856BAA8",
                            "backwardYaw": -97.59,
                            "class": "AdjacentPanorama",
                            "yaw": -13.43,
                            "distance": 1
                           }
                          ],
                          "label": "IMG_20190802_092724",
                          "hfovMax": 130,
                          "partial": false,
                          "class": "Panorama",
                          "hfov": 360,
                          "vfov": 180,
                          "frames": [
                           {
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_5A90CE97_5503_B34C_41CF_F58839FCEE90",
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.mainPlayList.set('selectedIndex', 3)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_52035D8B_5501_7144_4177_120F595D4D5E_0_HS_1_0.png",
                                   "height": 175,
                                   "class": "ImageResourceLevel",
                                   "width": 162
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "yaw": -99.37,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -21.35,
                                "hfov": 9.1
                               }
                              ],
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_52035D8B_5501_7144_4177_120F595D4D5E_0_HS_1_0_0_map.gif",
                                   "height": 87,
                                   "class": "ImageResourceLevel",
                                   "width": 81
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -21.35,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -99.37,
                                "hfov": 9.1
                               }
                              ],
                              "enabledInCardboard": true
                             },
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_454BFC5B_5503_77C4_41C5_D86F816CEE30",
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_5203758A_5501_7144_41D1_C6467856BAA8, this.camera_55A0F637_5E0E_8762_41CD_B483374017F2); this.mainPlayList.set('selectedIndex', 21)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_52035D8B_5501_7144_4177_120F595D4D5E_0_HS_0_0.png",
                                   "height": 214,
                                   "class": "ImageResourceLevel",
                                   "width": 258
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "yaw": -13.43,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -23.75,
                                "hfov": 14.21
                               }
                              ],
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_52035D8B_5501_7144_4177_120F595D4D5E_0_HS_0_0_0_map.gif",
                                   "height": 107,
                                   "class": "ImageResourceLevel",
                                   "width": 129
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -23.75,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -13.43,
                                "hfov": 14.21
                               }
                              ],
                              "enabledInCardboard": true
                             },
                             {
                              "image": {
                               "levels": [
                                {
                                 "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                                 "height": 900,
                                 "class": "ImageResourceLevel",
                                 "width": 900
                                }
                               ],
                               "class": "ImageResource"
                              },
                              "id": "panorama_52035D8B_5501_7144_4177_120F595D4D5E_tcap0",
                              "class": "TripodCapPanoramaOverlay",
                              "rotate": false,
                              "angle": 0,
                              "inertia": false,
                              "hfov": 36
                             }
                            ],
                            "right": {
                             "levels": [
                              {
                               "url": "media/panorama_52035D8B_5501_7144_4177_120F595D4D5E_r_hq.jpeg",
                               "height": 1904,
                               "class": "ImageResourceLevel",
                               "width": 1904
                              },
                              {
                               "url": "media/panorama_52035D8B_5501_7144_4177_120F595D4D5E_r.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "front": {
                             "levels": [
                              {
                               "url": "media/panorama_52035D8B_5501_7144_4177_120F595D4D5E_f_hq.jpeg",
                               "height": 1904,
                               "class": "ImageResourceLevel",
                               "width": 1904
                              },
                              {
                               "url": "media/panorama_52035D8B_5501_7144_4177_120F595D4D5E_f.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "class": "CubicPanoramaFrame",
                            "back": {
                             "levels": [
                              {
                               "url": "media/panorama_52035D8B_5501_7144_4177_120F595D4D5E_b_hq.jpeg",
                               "height": 1904,
                               "class": "ImageResourceLevel",
                               "width": 1904
                              },
                              {
                               "url": "media/panorama_52035D8B_5501_7144_4177_120F595D4D5E_b.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "top": {
                             "levels": [
                              {
                               "url": "media/panorama_52035D8B_5501_7144_4177_120F595D4D5E_u_hq.jpeg",
                               "height": 1904,
                               "class": "ImageResourceLevel",
                               "width": 1904
                              },
                              {
                               "url": "media/panorama_52035D8B_5501_7144_4177_120F595D4D5E_u.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "bottom": {
                             "levels": [
                              {
                               "url": "media/panorama_52035D8B_5501_7144_4177_120F595D4D5E_d_hq.jpeg",
                               "height": 1904,
                               "class": "ImageResourceLevel",
                               "width": 1904
                              },
                              {
                               "url": "media/panorama_52035D8B_5501_7144_4177_120F595D4D5E_d.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "left": {
                             "levels": [
                              {
                               "url": "media/panorama_52035D8B_5501_7144_4177_120F595D4D5E_l_hq.jpeg",
                               "height": 1904,
                               "class": "ImageResourceLevel",
                               "width": 1904
                              },
                              {
                               "url": "media/panorama_52035D8B_5501_7144_4177_120F595D4D5E_l.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "thumbnailUrl": "media/panorama_52035D8B_5501_7144_4177_120F595D4D5E_t.jpg"
                           }
                          ],
                          "thumbnailUrl": "media/panorama_52035D8B_5501_7144_4177_120F595D4D5E_t.jpg",
                          "hfovMin": 60,
                          "pitch": 0,
                          "id": "panorama_52035D8B_5501_7144_4177_120F595D4D5E"
                         },
                         "backwardYaw": -13.43,
                         "class": "AdjacentPanorama",
                         "yaw": -97.59,
                         "distance": 1
                        }
                       ],
                       "label": "IMG_20190802_092706",
                       "hfovMax": 130,
                       "partial": false,
                       "class": "Panorama",
                       "hfov": 360,
                       "vfov": 180,
                       "frames": [
                        {
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_5A719282_5501_F344_41B6_0675387C1AB3",
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_52035D8B_5501_7144_4177_120F595D4D5E, this.camera_55C802B0_5E0E_9F7F_41C9_AD14FEE4D292); this.mainPlayList.set('selectedIndex', 22)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_5203758A_5501_7144_41D1_C6467856BAA8_0_HS_2_0.png",
                                "height": 175,
                                "class": "ImageResourceLevel",
                                "width": 212
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": -97.59,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -23.56,
                             "hfov": 11.68
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_5203758A_5501_7144_41D1_C6467856BAA8_0_HS_2_0_0_map.gif",
                                "height": 87,
                                "class": "ImageResourceLevel",
                                "width": 106
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -23.56,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -97.59,
                             "hfov": 11.68
                            }
                           ],
                           "enabledInCardboard": true
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_5AC07197_5500_914C_41C0_E6D95665ABC7",
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_520CED68_5501_91C4_41D0_F2742460DC21, this.camera_55B7F2A6_5E0E_9F63_41D0_74D0C6298B3C); this.mainPlayList.set('selectedIndex', 20)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_5203758A_5501_7144_41D1_C6467856BAA8_0_HS_1_0.png",
                                "height": 207,
                                "class": "ImageResourceLevel",
                                "width": 195
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": -3.24,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -17.88,
                             "hfov": 11.18
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_5203758A_5501_7144_41D1_C6467856BAA8_0_HS_1_0_0_map.gif",
                                "height": 103,
                                "class": "ImageResourceLevel",
                                "width": 97
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -17.88,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -3.24,
                             "hfov": 11.18
                            }
                           ],
                           "enabledInCardboard": true
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_5AF21B1F_5500_917B_41C2_C4CB8A9F01D9",
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.mainPlayList.set('selectedIndex', 3)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_5203758A_5501_7144_41D1_C6467856BAA8_0_HS_0_0.png",
                                "height": 171,
                                "class": "ImageResourceLevel",
                                "width": 176
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": -44.82,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -16.74,
                             "hfov": 10.13
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_5203758A_5501_7144_41D1_C6467856BAA8_0_HS_0_0_0_map.gif",
                                "height": 85,
                                "class": "ImageResourceLevel",
                                "width": 88
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -16.74,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -44.82,
                             "hfov": 10.13
                            }
                           ],
                           "enabledInCardboard": true
                          },
                          {
                           "image": {
                            "levels": [
                             {
                              "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                              "height": 900,
                              "class": "ImageResourceLevel",
                              "width": 900
                             }
                            ],
                            "class": "ImageResource"
                           },
                           "id": "panorama_5203758A_5501_7144_41D1_C6467856BAA8_tcap0",
                           "class": "TripodCapPanoramaOverlay",
                           "rotate": false,
                           "angle": 0,
                           "inertia": false,
                           "hfov": 36
                          }
                         ],
                         "right": {
                          "levels": [
                           {
                            "url": "media/panorama_5203758A_5501_7144_41D1_C6467856BAA8_r_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_5203758A_5501_7144_41D1_C6467856BAA8_r.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "front": {
                          "levels": [
                           {
                            "url": "media/panorama_5203758A_5501_7144_41D1_C6467856BAA8_f_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_5203758A_5501_7144_41D1_C6467856BAA8_f.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "class": "CubicPanoramaFrame",
                         "back": {
                          "levels": [
                           {
                            "url": "media/panorama_5203758A_5501_7144_41D1_C6467856BAA8_b_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_5203758A_5501_7144_41D1_C6467856BAA8_b.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "top": {
                          "levels": [
                           {
                            "url": "media/panorama_5203758A_5501_7144_41D1_C6467856BAA8_u_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_5203758A_5501_7144_41D1_C6467856BAA8_u.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "bottom": {
                          "levels": [
                           {
                            "url": "media/panorama_5203758A_5501_7144_41D1_C6467856BAA8_d_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_5203758A_5501_7144_41D1_C6467856BAA8_d.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "left": {
                          "levels": [
                           {
                            "url": "media/panorama_5203758A_5501_7144_41D1_C6467856BAA8_l_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_5203758A_5501_7144_41D1_C6467856BAA8_l.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "thumbnailUrl": "media/panorama_5203758A_5501_7144_41D1_C6467856BAA8_t.jpg"
                        }
                       ],
                       "thumbnailUrl": "media/panorama_5203758A_5501_7144_41D1_C6467856BAA8_t.jpg",
                       "hfovMin": 60,
                       "pitch": 0,
                       "id": "panorama_5203758A_5501_7144_41D1_C6467856BAA8"
                      },
                      "backwardYaw": -3.24,
                      "class": "AdjacentPanorama",
                      "yaw": -172.46,
                      "distance": 1
                     }
                    ],
                    "label": "IMG_20190802_092647",
                    "hfovMax": 130,
                    "partial": false,
                    "class": "Panorama",
                    "hfov": 360,
                    "vfov": 180,
                    "frames": [
                     {
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_5BDAE493_5501_7744_41D0_4A9FC6599DF6",
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31, this.camera_528773F1_5E0E_9CFE_41B4_B1DC8B69973C); this.mainPlayList.set('selectedIndex', 18)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_520CED68_5501_91C4_41D0_F2742460DC21_0_HS_2_0.png",
                             "height": 194,
                             "class": "ImageResourceLevel",
                             "width": 314
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": -89.29,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -21.76,
                          "hfov": 17.55
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_520CED68_5501_91C4_41D0_F2742460DC21_0_HS_2_0_0_map.gif",
                             "height": 97,
                             "class": "ImageResourceLevel",
                             "width": 157
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -21.76,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -89.29,
                          "hfov": 17.55
                         }
                        ],
                        "enabledInCardboard": true
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_5BF86EF9_5501_F0C4_41BA_27FC38EBF011",
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_529653F6_5501_90CC_4189_DE8B26A5C623, this.camera_529EF400_5E0E_9B1E_41D6_CDEC10E1ED3A); this.mainPlayList.set('selectedIndex', 19)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_520CED68_5501_91C4_41D0_F2742460DC21_0_HS_1_0.png",
                             "height": 191,
                             "class": "ImageResourceLevel",
                             "width": 295
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": 2.88,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -20.18,
                          "hfov": 16.62
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_520CED68_5501_91C4_41D0_F2742460DC21_0_HS_1_0_0_map.gif",
                             "height": 95,
                             "class": "ImageResourceLevel",
                             "width": 147
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -20.18,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 2.88,
                          "hfov": 16.62
                         }
                        ],
                        "enabledInCardboard": true
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_5A557368_5500_91C4_41CC_2211DD6A8638",
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_5203758A_5501_7144_41D1_C6467856BAA8, this.camera_5296E40B_5E0E_9B22_41C7_3348A6584531); this.mainPlayList.set('selectedIndex', 21)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_520CED68_5501_91C4_41D0_F2742460DC21_0_HS_0_0.png",
                             "height": 191,
                             "class": "ImageResourceLevel",
                             "width": 179
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": -172.46,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -20.65,
                          "hfov": 10.08
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_520CED68_5501_91C4_41D0_F2742460DC21_0_HS_0_0_0_map.gif",
                             "height": 95,
                             "class": "ImageResourceLevel",
                             "width": 89
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -20.65,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -172.46,
                          "hfov": 10.08
                         }
                        ],
                        "enabledInCardboard": true
                       },
                       {
                        "image": {
                         "levels": [
                          {
                           "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                           "height": 900,
                           "class": "ImageResourceLevel",
                           "width": 900
                          }
                         ],
                         "class": "ImageResource"
                        },
                        "id": "panorama_520CED68_5501_91C4_41D0_F2742460DC21_tcap0",
                        "class": "TripodCapPanoramaOverlay",
                        "rotate": false,
                        "angle": 0,
                        "inertia": false,
                        "hfov": 36
                       }
                      ],
                      "right": {
                       "levels": [
                        {
                         "url": "media/panorama_520CED68_5501_91C4_41D0_F2742460DC21_r_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_520CED68_5501_91C4_41D0_F2742460DC21_r.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "front": {
                       "levels": [
                        {
                         "url": "media/panorama_520CED68_5501_91C4_41D0_F2742460DC21_f_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_520CED68_5501_91C4_41D0_F2742460DC21_f.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "class": "CubicPanoramaFrame",
                      "back": {
                       "levels": [
                        {
                         "url": "media/panorama_520CED68_5501_91C4_41D0_F2742460DC21_b_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_520CED68_5501_91C4_41D0_F2742460DC21_b.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "top": {
                       "levels": [
                        {
                         "url": "media/panorama_520CED68_5501_91C4_41D0_F2742460DC21_u_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_520CED68_5501_91C4_41D0_F2742460DC21_u.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "bottom": {
                       "levels": [
                        {
                         "url": "media/panorama_520CED68_5501_91C4_41D0_F2742460DC21_d_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_520CED68_5501_91C4_41D0_F2742460DC21_d.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "left": {
                       "levels": [
                        {
                         "url": "media/panorama_520CED68_5501_91C4_41D0_F2742460DC21_l_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_520CED68_5501_91C4_41D0_F2742460DC21_l.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "thumbnailUrl": "media/panorama_520CED68_5501_91C4_41D0_F2742460DC21_t.jpg"
                     }
                    ],
                    "thumbnailUrl": "media/panorama_520CED68_5501_91C4_41D0_F2742460DC21_t.jpg",
                    "hfovMin": 60,
                    "pitch": 0,
                    "id": "panorama_520CED68_5501_91C4_41D0_F2742460DC21"
                   },
                   "backwardYaw": -89.29,
                   "class": "AdjacentPanorama",
                   "yaw": 167.62,
                   "distance": 1
                  },
                  {
                   "panorama": {
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31",
                      "backwardYaw": 134.58,
                      "class": "AdjacentPanorama",
                      "yaw": 34.39,
                      "distance": 1
                     },
                     {
                      "panorama": {
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440",
                         "backwardYaw": 2.91,
                         "class": "AdjacentPanorama",
                         "yaw": -174.71,
                         "distance": 1
                        },
                        {
                         "panorama": "this.panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA",
                         "backwardYaw": 86.67,
                         "class": "AdjacentPanorama",
                         "yaw": 2.9,
                         "distance": 1
                        }
                       ],
                       "label": "IMG_20190802_092808",
                       "hfovMax": 130,
                       "partial": false,
                       "class": "Panorama",
                       "hfov": 360,
                       "vfov": 180,
                       "frames": [
                        {
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_7D6AC07E_5500_8FBC_41A8_15B8579A7745",
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA, this.camera_5505F537_5E0E_8562_41B4_8F5196FAB650); this.mainPlayList.set('selectedIndex', 3)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_53EFE11F_5501_717C_41BC_62660AE64D50_0_HS_1_0.png",
                                "height": 207,
                                "class": "ImageResourceLevel",
                                "width": 202
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": 2.9,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -37.41,
                             "hfov": 9.65
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_53EFE11F_5501_717C_41BC_62660AE64D50_0_HS_1_0_0_map.gif",
                                "height": 103,
                                "class": "ImageResourceLevel",
                                "width": 101
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -37.41,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 2.9,
                             "hfov": 9.65
                            }
                           ],
                           "enabledInCardboard": true
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_7CEE42D6_5500_F0CC_41C2_441D6885B45A",
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440, this.camera_5502052E_5E0E_8562_41D4_EBF49AD78652); this.mainPlayList.set('selectedIndex', 5)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_53EFE11F_5501_717C_41BC_62660AE64D50_0_HS_0_0.png",
                                "height": 201,
                                "class": "ImageResourceLevel",
                                "width": 186
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": -174.71,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -35.12,
                             "hfov": 9.14
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_53EFE11F_5501_717C_41BC_62660AE64D50_0_HS_0_0_0_map.gif",
                                "height": 100,
                                "class": "ImageResourceLevel",
                                "width": 93
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -35.12,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -174.71,
                             "hfov": 9.14
                            }
                           ],
                           "enabledInCardboard": true
                          },
                          {
                           "image": {
                            "levels": [
                             {
                              "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                              "height": 900,
                              "class": "ImageResourceLevel",
                              "width": 900
                             }
                            ],
                            "class": "ImageResource"
                           },
                           "id": "panorama_53EFE11F_5501_717C_41BC_62660AE64D50_tcap0",
                           "class": "TripodCapPanoramaOverlay",
                           "rotate": false,
                           "angle": 0,
                           "inertia": false,
                           "hfov": 36
                          }
                         ],
                         "right": {
                          "levels": [
                           {
                            "url": "media/panorama_53EFE11F_5501_717C_41BC_62660AE64D50_r_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_53EFE11F_5501_717C_41BC_62660AE64D50_r.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "front": {
                          "levels": [
                           {
                            "url": "media/panorama_53EFE11F_5501_717C_41BC_62660AE64D50_f_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_53EFE11F_5501_717C_41BC_62660AE64D50_f.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "class": "CubicPanoramaFrame",
                         "back": {
                          "levels": [
                           {
                            "url": "media/panorama_53EFE11F_5501_717C_41BC_62660AE64D50_b_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_53EFE11F_5501_717C_41BC_62660AE64D50_b.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "top": {
                          "levels": [
                           {
                            "url": "media/panorama_53EFE11F_5501_717C_41BC_62660AE64D50_u_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_53EFE11F_5501_717C_41BC_62660AE64D50_u.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "bottom": {
                          "levels": [
                           {
                            "url": "media/panorama_53EFE11F_5501_717C_41BC_62660AE64D50_d_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_53EFE11F_5501_717C_41BC_62660AE64D50_d.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "left": {
                          "levels": [
                           {
                            "url": "media/panorama_53EFE11F_5501_717C_41BC_62660AE64D50_l_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_53EFE11F_5501_717C_41BC_62660AE64D50_l.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "thumbnailUrl": "media/panorama_53EFE11F_5501_717C_41BC_62660AE64D50_t.jpg"
                        }
                       ],
                       "thumbnailUrl": "media/panorama_53EFE11F_5501_717C_41BC_62660AE64D50_t.jpg",
                       "hfovMin": 60,
                       "pitch": 0,
                       "id": "panorama_53EFE11F_5501_717C_41BC_62660AE64D50"
                      },
                      "backwardYaw": 2.9,
                      "class": "AdjacentPanorama",
                      "yaw": 86.67,
                      "distance": 1
                     },
                     {
                      "panorama": {
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA",
                         "backwardYaw": 172.24,
                         "class": "AdjacentPanorama",
                         "yaw": -170.37,
                         "distance": 1
                        },
                        {
                         "panorama": {
                          "adjacentPanoramas": [
                           {
                            "panorama": {
                             "adjacentPanoramas": [
                              {
                               "panorama": {
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_47F5C037_5501_8F4C_41CF_949094A4F368",
                                  "backwardYaw": 174.06,
                                  "class": "AdjacentPanorama",
                                  "yaw": 5.39,
                                  "distance": 1
                                 }
                                ],
                                "label": "IMG_20190802_093902",
                                "hfovMax": 150,
                                "partial": false,
                                "class": "Panorama",
                                "hfov": 360,
                                "vfov": 180,
                                "frames": [
                                 {
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
                                    "id": "overlay_4E475F88_5500_B144_41CD_DE9D109CBFB5",
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_47F5C037_5501_8F4C_41CF_949094A4F368, this.camera_5562022C_5E0E_9F67_41BC_EBD76B09370C); this.mainPlayList.set('selectedIndex', 46)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_47F40739_5501_F144_4152_5EE069A98D16_0_HS_0_0.png",
                                         "height": 234,
                                         "class": "ImageResourceLevel",
                                         "width": 219
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "yaw": 5.39,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -42.07,
                                      "hfov": 9.76
                                     }
                                    ],
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_47F40739_5501_F144_4152_5EE069A98D16_0_HS_0_0_0_map.gif",
                                         "height": 117,
                                         "class": "ImageResourceLevel",
                                         "width": 109
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -42.07,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 5.39,
                                      "hfov": 9.76
                                     }
                                    ],
                                    "enabledInCardboard": true
                                   },
                                   {
                                    "image": {
                                     "levels": [
                                      {
                                       "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                                       "height": 900,
                                       "class": "ImageResourceLevel",
                                       "width": 900
                                      }
                                     ],
                                     "class": "ImageResource"
                                    },
                                    "id": "panorama_47F40739_5501_F144_4152_5EE069A98D16_tcap0",
                                    "class": "TripodCapPanoramaOverlay",
                                    "rotate": false,
                                    "angle": 0,
                                    "inertia": false,
                                    "hfov": 36
                                   }
                                  ],
                                  "right": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_47F40739_5501_F144_4152_5EE069A98D16_r_hq.jpeg",
                                     "height": 1904,
                                     "class": "ImageResourceLevel",
                                     "width": 1904
                                    },
                                    {
                                     "url": "media/panorama_47F40739_5501_F144_4152_5EE069A98D16_r.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "front": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_47F40739_5501_F144_4152_5EE069A98D16_f_hq.jpeg",
                                     "height": 1904,
                                     "class": "ImageResourceLevel",
                                     "width": 1904
                                    },
                                    {
                                     "url": "media/panorama_47F40739_5501_F144_4152_5EE069A98D16_f.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "class": "CubicPanoramaFrame",
                                  "back": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_47F40739_5501_F144_4152_5EE069A98D16_b_hq.jpeg",
                                     "height": 1904,
                                     "class": "ImageResourceLevel",
                                     "width": 1904
                                    },
                                    {
                                     "url": "media/panorama_47F40739_5501_F144_4152_5EE069A98D16_b.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "top": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_47F40739_5501_F144_4152_5EE069A98D16_u_hq.jpeg",
                                     "height": 1904,
                                     "class": "ImageResourceLevel",
                                     "width": 1904
                                    },
                                    {
                                     "url": "media/panorama_47F40739_5501_F144_4152_5EE069A98D16_u.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "bottom": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_47F40739_5501_F144_4152_5EE069A98D16_d_hq.jpeg",
                                     "height": 1904,
                                     "class": "ImageResourceLevel",
                                     "width": 1904
                                    },
                                    {
                                     "url": "media/panorama_47F40739_5501_F144_4152_5EE069A98D16_d.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "left": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_47F40739_5501_F144_4152_5EE069A98D16_l_hq.jpeg",
                                     "height": 1904,
                                     "class": "ImageResourceLevel",
                                     "width": 1904
                                    },
                                    {
                                     "url": "media/panorama_47F40739_5501_F144_4152_5EE069A98D16_l.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "thumbnailUrl": "media/panorama_47F40739_5501_F144_4152_5EE069A98D16_t.jpg"
                                 }
                                ],
                                "thumbnailUrl": "media/panorama_47F40739_5501_F144_4152_5EE069A98D16_t.jpg",
                                "hfovMin": 60,
                                "pitch": 0,
                                "id": "panorama_47F40739_5501_F144_4152_5EE069A98D16"
                               },
                               "backwardYaw": 5.39,
                               "class": "AdjacentPanorama",
                               "yaw": 174.06,
                               "distance": 1
                              },
                              {
                               "panorama": {
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_47F5C037_5501_8F4C_41CF_949094A4F368",
                                  "backwardYaw": -95.5,
                                  "class": "AdjacentPanorama",
                                  "yaw": 71.23,
                                  "distance": 1
                                 }
                                ],
                                "label": "IMG_20190802_093840",
                                "hfovMax": 150,
                                "partial": false,
                                "class": "Panorama",
                                "hfov": 360,
                                "vfov": 180,
                                "frames": [
                                 {
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
                                    "id": "overlay_4E3FEEC4_5500_90CC_41B3_83C6A494E26A",
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_47F5C037_5501_8F4C_41CF_949094A4F368, this.camera_5207032A_5E0E_9D63_41D2_36269F73D2C8); this.mainPlayList.set('selectedIndex', 46)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_47F5ADCB_5501_90C4_419E_AD0305F2D933_0_HS_0_0.png",
                                         "height": 211,
                                         "class": "ImageResourceLevel",
                                         "width": 215
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "yaw": 71.23,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -34.15,
                                      "hfov": 10.72
                                     }
                                    ],
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_47F5ADCB_5501_90C4_419E_AD0305F2D933_0_HS_0_0_0_map.gif",
                                         "height": 105,
                                         "class": "ImageResourceLevel",
                                         "width": 107
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -34.15,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 71.23,
                                      "hfov": 10.72
                                     }
                                    ],
                                    "enabledInCardboard": true
                                   },
                                   {
                                    "image": {
                                     "levels": [
                                      {
                                       "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                                       "height": 900,
                                       "class": "ImageResourceLevel",
                                       "width": 900
                                      }
                                     ],
                                     "class": "ImageResource"
                                    },
                                    "id": "panorama_47F5ADCB_5501_90C4_419E_AD0305F2D933_tcap0",
                                    "class": "TripodCapPanoramaOverlay",
                                    "rotate": false,
                                    "angle": 0,
                                    "inertia": false,
                                    "hfov": 36
                                   }
                                  ],
                                  "right": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_47F5ADCB_5501_90C4_419E_AD0305F2D933_r_hq.jpeg",
                                     "height": 1904,
                                     "class": "ImageResourceLevel",
                                     "width": 1904
                                    },
                                    {
                                     "url": "media/panorama_47F5ADCB_5501_90C4_419E_AD0305F2D933_r.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "front": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_47F5ADCB_5501_90C4_419E_AD0305F2D933_f_hq.jpeg",
                                     "height": 1904,
                                     "class": "ImageResourceLevel",
                                     "width": 1904
                                    },
                                    {
                                     "url": "media/panorama_47F5ADCB_5501_90C4_419E_AD0305F2D933_f.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "class": "CubicPanoramaFrame",
                                  "back": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_47F5ADCB_5501_90C4_419E_AD0305F2D933_b_hq.jpeg",
                                     "height": 1904,
                                     "class": "ImageResourceLevel",
                                     "width": 1904
                                    },
                                    {
                                     "url": "media/panorama_47F5ADCB_5501_90C4_419E_AD0305F2D933_b.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "top": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_47F5ADCB_5501_90C4_419E_AD0305F2D933_u_hq.jpeg",
                                     "height": 1904,
                                     "class": "ImageResourceLevel",
                                     "width": 1904
                                    },
                                    {
                                     "url": "media/panorama_47F5ADCB_5501_90C4_419E_AD0305F2D933_u.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "bottom": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_47F5ADCB_5501_90C4_419E_AD0305F2D933_d_hq.jpeg",
                                     "height": 1904,
                                     "class": "ImageResourceLevel",
                                     "width": 1904
                                    },
                                    {
                                     "url": "media/panorama_47F5ADCB_5501_90C4_419E_AD0305F2D933_d.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "left": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_47F5ADCB_5501_90C4_419E_AD0305F2D933_l_hq.jpeg",
                                     "height": 1904,
                                     "class": "ImageResourceLevel",
                                     "width": 1904
                                    },
                                    {
                                     "url": "media/panorama_47F5ADCB_5501_90C4_419E_AD0305F2D933_l.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "thumbnailUrl": "media/panorama_47F5ADCB_5501_90C4_419E_AD0305F2D933_t.jpg"
                                 }
                                ],
                                "thumbnailUrl": "media/panorama_47F5ADCB_5501_90C4_419E_AD0305F2D933_t.jpg",
                                "hfovMin": 60,
                                "pitch": 0,
                                "id": "panorama_47F5ADCB_5501_90C4_419E_AD0305F2D933"
                               },
                               "backwardYaw": 71.23,
                               "class": "AdjacentPanorama",
                               "yaw": -95.5,
                               "distance": 1
                              },
                              {
                               "panorama": {
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_47F5C037_5501_8F4C_41CF_949094A4F368",
                                  "backwardYaw": 104.89,
                                  "class": "AdjacentPanorama",
                                  "yaw": -54.41,
                                  "distance": 1
                                 }
                                ],
                                "label": "IMG_20190802_093821",
                                "hfovMax": 150,
                                "partial": false,
                                "class": "Panorama",
                                "hfov": 360,
                                "vfov": 180,
                                "frames": [
                                 {
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
                                    "id": "overlay_4EE41FE0_5501_90C4_41B4_5B56E15E311F",
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_47F5C037_5501_8F4C_41CF_949094A4F368, this.camera_528F03E8_5E0E_9CEE_41A8_CF7E3EC928DC); this.mainPlayList.set('selectedIndex', 46)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_41FA432B_5501_9144_41D3_97E675198BFE_0_HS_0_0.png",
                                         "height": 214,
                                         "class": "ImageResourceLevel",
                                         "width": 196
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "yaw": -54.41,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -52.17,
                                      "hfov": 7.22
                                     }
                                    ],
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_41FA432B_5501_9144_41D3_97E675198BFE_0_HS_0_0_0_map.gif",
                                         "height": 107,
                                         "class": "ImageResourceLevel",
                                         "width": 98
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -52.17,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -54.41,
                                      "hfov": 7.22
                                     }
                                    ],
                                    "enabledInCardboard": true
                                   },
                                   {
                                    "image": {
                                     "levels": [
                                      {
                                       "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                                       "height": 900,
                                       "class": "ImageResourceLevel",
                                       "width": 900
                                      }
                                     ],
                                     "class": "ImageResource"
                                    },
                                    "id": "panorama_41FA432B_5501_9144_41D3_97E675198BFE_tcap0",
                                    "class": "TripodCapPanoramaOverlay",
                                    "rotate": false,
                                    "angle": 0,
                                    "inertia": false,
                                    "hfov": 36
                                   }
                                  ],
                                  "right": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_41FA432B_5501_9144_41D3_97E675198BFE_r_hq.jpeg",
                                     "height": 1904,
                                     "class": "ImageResourceLevel",
                                     "width": 1904
                                    },
                                    {
                                     "url": "media/panorama_41FA432B_5501_9144_41D3_97E675198BFE_r.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "front": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_41FA432B_5501_9144_41D3_97E675198BFE_f_hq.jpeg",
                                     "height": 1904,
                                     "class": "ImageResourceLevel",
                                     "width": 1904
                                    },
                                    {
                                     "url": "media/panorama_41FA432B_5501_9144_41D3_97E675198BFE_f.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "class": "CubicPanoramaFrame",
                                  "back": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_41FA432B_5501_9144_41D3_97E675198BFE_b_hq.jpeg",
                                     "height": 1904,
                                     "class": "ImageResourceLevel",
                                     "width": 1904
                                    },
                                    {
                                     "url": "media/panorama_41FA432B_5501_9144_41D3_97E675198BFE_b.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "top": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_41FA432B_5501_9144_41D3_97E675198BFE_u_hq.jpeg",
                                     "height": 1904,
                                     "class": "ImageResourceLevel",
                                     "width": 1904
                                    },
                                    {
                                     "url": "media/panorama_41FA432B_5501_9144_41D3_97E675198BFE_u.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "bottom": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_41FA432B_5501_9144_41D3_97E675198BFE_d_hq.jpeg",
                                     "height": 1904,
                                     "class": "ImageResourceLevel",
                                     "width": 1904
                                    },
                                    {
                                     "url": "media/panorama_41FA432B_5501_9144_41D3_97E675198BFE_d.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "left": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_41FA432B_5501_9144_41D3_97E675198BFE_l_hq.jpeg",
                                     "height": 1904,
                                     "class": "ImageResourceLevel",
                                     "width": 1904
                                    },
                                    {
                                     "url": "media/panorama_41FA432B_5501_9144_41D3_97E675198BFE_l.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "thumbnailUrl": "media/panorama_41FA432B_5501_9144_41D3_97E675198BFE_t.jpg"
                                 }
                                ],
                                "thumbnailUrl": "media/panorama_41FA432B_5501_9144_41D3_97E675198BFE_t.jpg",
                                "hfovMin": 60,
                                "pitch": 0,
                                "id": "panorama_41FA432B_5501_9144_41D3_97E675198BFE"
                               },
                               "backwardYaw": -54.41,
                               "class": "AdjacentPanorama",
                               "yaw": 104.89,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358",
                               "backwardYaw": -118.28,
                               "class": "AdjacentPanorama",
                               "yaw": 1.72,
                               "distance": 1
                              }
                             ],
                             "label": "IMG_20190802_093919",
                             "hfovMax": 150,
                             "partial": false,
                             "class": "Panorama",
                             "hfov": 360,
                             "vfov": 180,
                             "frames": [
                              {
                               "overlays": [
                                {
                                 "rollOverDisplay": false,
                                 "id": "overlay_4F2A3386_5500_914C_4191_D70ADB4AB136",
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_41FA432B_5501_9144_41D3_97E675198BFE, this.camera_5549C5A0_5E0E_851F_41CD_0D65D3B5ACF7); this.mainPlayList.set('selectedIndex', 43)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_47F5C037_5501_8F4C_41CF_949094A4F368_0_HS_3_0.png",
                                      "height": 148,
                                      "class": "ImageResourceLevel",
                                      "width": 149
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "yaw": 104.89,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -34.35,
                                   "hfov": 7.42
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_47F5C037_5501_8F4C_41CF_949094A4F368_0_HS_3_0_0_map.gif",
                                      "height": 74,
                                      "class": "ImageResourceLevel",
                                      "width": 74
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -34.35,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 104.89,
                                   "hfov": 7.42
                                  }
                                 ],
                                 "enabledInCardboard": true
                                },
                                {
                                 "rollOverDisplay": false,
                                 "id": "overlay_4F4060A5_5500_8F4C_4186_B14CA5720F74",
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_47F40739_5501_F144_4152_5EE069A98D16, this.camera_553EE58D_5E0E_8521_4192_8D319116E6A8); this.mainPlayList.set('selectedIndex', 45)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_47F5C037_5501_8F4C_41CF_949094A4F368_0_HS_2_0.png",
                                      "height": 137,
                                      "class": "ImageResourceLevel",
                                      "width": 138
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "yaw": 174.06,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -47.09,
                                   "hfov": 5.66
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_47F5C037_5501_8F4C_41CF_949094A4F368_0_HS_2_0_0_map.gif",
                                      "height": 68,
                                      "class": "ImageResourceLevel",
                                      "width": 69
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -47.09,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 174.06,
                                   "hfov": 5.66
                                  }
                                 ],
                                 "enabledInCardboard": true
                                },
                                {
                                 "rollOverDisplay": false,
                                 "id": "overlay_4E87C391_5501_B147_41B1_0E816E71342E",
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_47F5ADCB_5501_90C4_419E_AD0305F2D933, this.camera_55305597_5E0E_8522_41CB_D80F1EF9CC93); this.mainPlayList.set('selectedIndex', 44)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_47F5C037_5501_8F4C_41CF_949094A4F368_0_HS_1_0.png",
                                      "height": 214,
                                      "class": "ImageResourceLevel",
                                      "width": 202
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "yaw": -95.5,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -42.36,
                                   "hfov": 8.99
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_47F5C037_5501_8F4C_41CF_949094A4F368_0_HS_1_0_0_map.gif",
                                      "height": 107,
                                      "class": "ImageResourceLevel",
                                      "width": 101
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -42.36,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -95.5,
                                   "hfov": 8.99
                                  }
                                 ],
                                 "enabledInCardboard": true
                                },
                                {
                                 "rollOverDisplay": false,
                                 "id": "overlay_4EC9BDAF_5500_915C_41B5_D4E0910E7518",
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358, this.camera_5543A5A9_5E0E_8561_41C1_EB853B4427CA); this.mainPlayList.set('selectedIndex', 13)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_47F5C037_5501_8F4C_41CF_949094A4F368_0_HS_0_0.png",
                                      "height": 230,
                                      "class": "ImageResourceLevel",
                                      "width": 235
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "yaw": 1.72,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -67.31,
                                   "hfov": 5.45
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_47F5C037_5501_8F4C_41CF_949094A4F368_0_HS_0_0_0_map.gif",
                                      "height": 115,
                                      "class": "ImageResourceLevel",
                                      "width": 117
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -67.31,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 1.72,
                                   "hfov": 5.45
                                  }
                                 ],
                                 "enabledInCardboard": true
                                },
                                {
                                 "image": {
                                  "levels": [
                                   {
                                    "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                                    "height": 900,
                                    "class": "ImageResourceLevel",
                                    "width": 900
                                   }
                                  ],
                                  "class": "ImageResource"
                                 },
                                 "id": "panorama_47F5C037_5501_8F4C_41CF_949094A4F368_tcap0",
                                 "class": "TripodCapPanoramaOverlay",
                                 "rotate": false,
                                 "angle": 0,
                                 "inertia": false,
                                 "hfov": 36
                                }
                               ],
                               "right": {
                                "levels": [
                                 {
                                  "url": "media/panorama_47F5C037_5501_8F4C_41CF_949094A4F368_r_hq.jpeg",
                                  "height": 1904,
                                  "class": "ImageResourceLevel",
                                  "width": 1904
                                 },
                                 {
                                  "url": "media/panorama_47F5C037_5501_8F4C_41CF_949094A4F368_r.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "front": {
                                "levels": [
                                 {
                                  "url": "media/panorama_47F5C037_5501_8F4C_41CF_949094A4F368_f_hq.jpeg",
                                  "height": 1904,
                                  "class": "ImageResourceLevel",
                                  "width": 1904
                                 },
                                 {
                                  "url": "media/panorama_47F5C037_5501_8F4C_41CF_949094A4F368_f.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "class": "CubicPanoramaFrame",
                               "back": {
                                "levels": [
                                 {
                                  "url": "media/panorama_47F5C037_5501_8F4C_41CF_949094A4F368_b_hq.jpeg",
                                  "height": 1904,
                                  "class": "ImageResourceLevel",
                                  "width": 1904
                                 },
                                 {
                                  "url": "media/panorama_47F5C037_5501_8F4C_41CF_949094A4F368_b.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "top": {
                                "levels": [
                                 {
                                  "url": "media/panorama_47F5C037_5501_8F4C_41CF_949094A4F368_u_hq.jpeg",
                                  "height": 1904,
                                  "class": "ImageResourceLevel",
                                  "width": 1904
                                 },
                                 {
                                  "url": "media/panorama_47F5C037_5501_8F4C_41CF_949094A4F368_u.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "bottom": {
                                "levels": [
                                 {
                                  "url": "media/panorama_47F5C037_5501_8F4C_41CF_949094A4F368_d_hq.jpeg",
                                  "height": 1904,
                                  "class": "ImageResourceLevel",
                                  "width": 1904
                                 },
                                 {
                                  "url": "media/panorama_47F5C037_5501_8F4C_41CF_949094A4F368_d.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "left": {
                                "levels": [
                                 {
                                  "url": "media/panorama_47F5C037_5501_8F4C_41CF_949094A4F368_l_hq.jpeg",
                                  "height": 1904,
                                  "class": "ImageResourceLevel",
                                  "width": 1904
                                 },
                                 {
                                  "url": "media/panorama_47F5C037_5501_8F4C_41CF_949094A4F368_l.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "thumbnailUrl": "media/panorama_47F5C037_5501_8F4C_41CF_949094A4F368_t.jpg"
                              }
                             ],
                             "thumbnailUrl": "media/panorama_47F5C037_5501_8F4C_41CF_949094A4F368_t.jpg",
                             "hfovMin": 60,
                             "pitch": 0,
                             "id": "panorama_47F5C037_5501_8F4C_41CF_949094A4F368"
                            },
                            "backwardYaw": 1.72,
                            "class": "AdjacentPanorama",
                            "yaw": -118.28,
                            "distance": 1
                           },
                           {
                            "panorama": {
                             "adjacentPanoramas": [
                              {
                               "panorama": {
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE",
                                  "backwardYaw": -175.13,
                                  "class": "AdjacentPanorama",
                                  "yaw": 84.78,
                                  "distance": 1
                                 },
                                 {
                                  "panorama": {
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": "this.panorama_53EE3898_5500_9F44_41B4_46403FBF33EE",
                                     "backwardYaw": -171.55,
                                     "class": "AdjacentPanorama",
                                     "yaw": 152.8,
                                     "distance": 1
                                    },
                                    {
                                     "panorama": {
                                      "vfov": 180,
                                      "label": "IMG_20190802_093440",
                                      "hfov": 360,
                                      "frames": [
                                       {
                                        "overlays": [
                                         {
                                          "rollOverDisplay": false,
                                          "id": "overlay_42BE3D50_550F_B1C4_41D1_4040A7A6857D",
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true,
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4, this.camera_551DF18B_5E0E_9D21_41D0_67DFB8AA1599); this.mainPlayList.set('selectedIndex', 34)",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "url": "media/panorama_47FAD277_5503_B3CC_415F_3731B40A5465_0_HS_1_0.png",
                                               "height": 171,
                                               "class": "ImageResourceLevel",
                                               "width": 172
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "yaw": -0.67,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": -19.29,
                                            "hfov": 9.79
                                           }
                                          ],
                                          "maps": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "url": "media/panorama_47FAD277_5503_B3CC_415F_3731B40A5465_0_HS_1_0_0_map.gif",
                                               "height": 85,
                                               "class": "ImageResourceLevel",
                                               "width": 86
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -19.29,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -0.67,
                                            "hfov": 9.79
                                           }
                                          ],
                                          "enabledInCardboard": true
                                         },
                                         {
                                          "rollOverDisplay": false,
                                          "id": "overlay_42E2D494_5500_974C_41BE_91C39227B0D7",
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true,
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_47FA2495_5503_974C_41CC_9F969CC7EE77, this.camera_55114195_5E0E_9D21_41AD_1A1A0B8781E1); this.mainPlayList.set('selectedIndex', 38)",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "url": "media/panorama_47FAD277_5503_B3CC_415F_3731B40A5465_0_HS_0_0.png",
                                               "height": 191,
                                               "class": "ImageResourceLevel",
                                               "width": 205
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "yaw": -161.55,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": -25.32,
                                            "hfov": 11.17
                                           }
                                          ],
                                          "maps": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "url": "media/panorama_47FAD277_5503_B3CC_415F_3731B40A5465_0_HS_0_0_0_map.gif",
                                               "height": 95,
                                               "class": "ImageResourceLevel",
                                               "width": 102
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -25.32,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -161.55,
                                            "hfov": 11.17
                                           }
                                          ],
                                          "enabledInCardboard": true
                                         },
                                         {
                                          "image": {
                                           "levels": [
                                            {
                                             "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                                             "height": 900,
                                             "class": "ImageResourceLevel",
                                             "width": 900
                                            }
                                           ],
                                           "class": "ImageResource"
                                          },
                                          "id": "panorama_47FAD277_5503_B3CC_415F_3731B40A5465_tcap0",
                                          "class": "TripodCapPanoramaOverlay",
                                          "rotate": false,
                                          "angle": 0,
                                          "inertia": false,
                                          "hfov": 36
                                         }
                                        ],
                                        "right": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_47FAD277_5503_B3CC_415F_3731B40A5465_r_hq.jpeg",
                                           "height": 1904,
                                           "class": "ImageResourceLevel",
                                           "width": 1904
                                          },
                                          {
                                           "url": "media/panorama_47FAD277_5503_B3CC_415F_3731B40A5465_r.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "front": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_47FAD277_5503_B3CC_415F_3731B40A5465_f_hq.jpeg",
                                           "height": 1904,
                                           "class": "ImageResourceLevel",
                                           "width": 1904
                                          },
                                          {
                                           "url": "media/panorama_47FAD277_5503_B3CC_415F_3731B40A5465_f.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "class": "CubicPanoramaFrame",
                                        "back": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_47FAD277_5503_B3CC_415F_3731B40A5465_b_hq.jpeg",
                                           "height": 1904,
                                           "class": "ImageResourceLevel",
                                           "width": 1904
                                          },
                                          {
                                           "url": "media/panorama_47FAD277_5503_B3CC_415F_3731B40A5465_b.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "top": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_47FAD277_5503_B3CC_415F_3731B40A5465_u_hq.jpeg",
                                           "height": 1904,
                                           "class": "ImageResourceLevel",
                                           "width": 1904
                                          },
                                          {
                                           "url": "media/panorama_47FAD277_5503_B3CC_415F_3731B40A5465_u.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "bottom": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_47FAD277_5503_B3CC_415F_3731B40A5465_d_hq.jpeg",
                                           "height": 1904,
                                           "class": "ImageResourceLevel",
                                           "width": 1904
                                          },
                                          {
                                           "url": "media/panorama_47FAD277_5503_B3CC_415F_3731B40A5465_d.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "left": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_47FAD277_5503_B3CC_415F_3731B40A5465_l_hq.jpeg",
                                           "height": 1904,
                                           "class": "ImageResourceLevel",
                                           "width": 1904
                                          },
                                          {
                                           "url": "media/panorama_47FAD277_5503_B3CC_415F_3731B40A5465_l.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "thumbnailUrl": "media/panorama_47FAD277_5503_B3CC_415F_3731B40A5465_t.jpg"
                                       }
                                      ],
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": {
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": {
                                            "adjacentPanoramas": [
                                             {
                                              "panorama": {
                                               "adjacentPanoramas": [
                                                {
                                                 "panorama": {
                                                  "adjacentPanoramas": [
                                                   {
                                                    "panorama": "this.panorama_40492156_5501_71CC_41D5_01C63B4ADFE3",
                                                    "backwardYaw": -13.24,
                                                    "class": "AdjacentPanorama",
                                                    "yaw": 82.11,
                                                    "distance": 1
                                                   },
                                                   {
                                                    "panorama": "this.panorama_41290414_5503_774C_41B0_543B0B17685E",
                                                    "backwardYaw": -154.12,
                                                    "class": "AdjacentPanorama",
                                                    "yaw": 40.32,
                                                    "distance": 1
                                                   },
                                                   {
                                                    "panorama": {
                                                     "adjacentPanoramas": [
                                                      {
                                                       "panorama": "this.panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A",
                                                       "backwardYaw": 170.89,
                                                       "class": "AdjacentPanorama",
                                                       "yaw": -169.08,
                                                       "distance": 1
                                                      }
                                                     ],
                                                     "label": "IMG_20190802_093305",
                                                     "hfovMax": 130,
                                                     "partial": false,
                                                     "class": "Panorama",
                                                     "hfov": 360,
                                                     "vfov": 180,
                                                     "frames": [
                                                      {
                                                       "overlays": [
                                                        {
                                                         "rollOverDisplay": false,
                                                         "id": "overlay_40B1AC13_5500_B744_41C5_7DED37B4CE1D",
                                                         "class": "HotspotPanoramaOverlay",
                                                         "useHandCursor": true,
                                                         "areas": [
                                                          {
                                                           "mapColor": "#FF0000",
                                                           "click": "this.startPanoramaWithCamera(this.panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A, this.camera_55A8462D_5E0E_8766_41D3_6AE1DD065361); this.mainPlayList.set('selectedIndex', 32)",
                                                           "class": "HotspotPanoramaOverlayArea"
                                                          }
                                                         ],
                                                         "items": [
                                                          {
                                                           "image": {
                                                            "levels": [
                                                             {
                                                              "url": "media/panorama_47FBCB05_5501_714C_41CB_49290184E117_0_HS_0_0.png",
                                                              "height": 168,
                                                              "class": "ImageResourceLevel",
                                                              "width": 265
                                                             }
                                                            ],
                                                            "class": "ImageResource"
                                                           },
                                                           "yaw": -169.08,
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "pitch": -24.24,
                                                           "hfov": 14.51
                                                          }
                                                         ],
                                                         "maps": [
                                                          {
                                                           "image": {
                                                            "levels": [
                                                             {
                                                              "url": "media/panorama_47FBCB05_5501_714C_41CB_49290184E117_0_HS_0_0_0_map.gif",
                                                              "height": 84,
                                                              "class": "ImageResourceLevel",
                                                              "width": 132
                                                             }
                                                            ],
                                                            "class": "ImageResource"
                                                           },
                                                           "pitch": -24.24,
                                                           "class": "HotspotPanoramaOverlayMap",
                                                           "yaw": -169.08,
                                                           "hfov": 14.51
                                                          }
                                                         ],
                                                         "enabledInCardboard": true
                                                        },
                                                        {
                                                         "image": {
                                                          "levels": [
                                                           {
                                                            "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                                                            "height": 900,
                                                            "class": "ImageResourceLevel",
                                                            "width": 900
                                                           }
                                                          ],
                                                          "class": "ImageResource"
                                                         },
                                                         "id": "panorama_47FBCB05_5501_714C_41CB_49290184E117_tcap0",
                                                         "class": "TripodCapPanoramaOverlay",
                                                         "rotate": false,
                                                         "angle": 0,
                                                         "inertia": false,
                                                         "hfov": 36
                                                        }
                                                       ],
                                                       "right": {
                                                        "levels": [
                                                         {
                                                          "url": "media/panorama_47FBCB05_5501_714C_41CB_49290184E117_r_hq.jpeg",
                                                          "height": 1904,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1904
                                                         },
                                                         {
                                                          "url": "media/panorama_47FBCB05_5501_714C_41CB_49290184E117_r.jpeg",
                                                          "height": 1024,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1024
                                                         }
                                                        ],
                                                        "class": "ImageResource"
                                                       },
                                                       "front": {
                                                        "levels": [
                                                         {
                                                          "url": "media/panorama_47FBCB05_5501_714C_41CB_49290184E117_f_hq.jpeg",
                                                          "height": 1904,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1904
                                                         },
                                                         {
                                                          "url": "media/panorama_47FBCB05_5501_714C_41CB_49290184E117_f.jpeg",
                                                          "height": 1024,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1024
                                                         }
                                                        ],
                                                        "class": "ImageResource"
                                                       },
                                                       "class": "CubicPanoramaFrame",
                                                       "back": {
                                                        "levels": [
                                                         {
                                                          "url": "media/panorama_47FBCB05_5501_714C_41CB_49290184E117_b_hq.jpeg",
                                                          "height": 1904,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1904
                                                         },
                                                         {
                                                          "url": "media/panorama_47FBCB05_5501_714C_41CB_49290184E117_b.jpeg",
                                                          "height": 1024,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1024
                                                         }
                                                        ],
                                                        "class": "ImageResource"
                                                       },
                                                       "top": {
                                                        "levels": [
                                                         {
                                                          "url": "media/panorama_47FBCB05_5501_714C_41CB_49290184E117_u_hq.jpeg",
                                                          "height": 1904,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1904
                                                         },
                                                         {
                                                          "url": "media/panorama_47FBCB05_5501_714C_41CB_49290184E117_u.jpeg",
                                                          "height": 1024,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1024
                                                         }
                                                        ],
                                                        "class": "ImageResource"
                                                       },
                                                       "bottom": {
                                                        "levels": [
                                                         {
                                                          "url": "media/panorama_47FBCB05_5501_714C_41CB_49290184E117_d_hq.jpeg",
                                                          "height": 1904,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1904
                                                         },
                                                         {
                                                          "url": "media/panorama_47FBCB05_5501_714C_41CB_49290184E117_d.jpeg",
                                                          "height": 1024,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1024
                                                         }
                                                        ],
                                                        "class": "ImageResource"
                                                       },
                                                       "left": {
                                                        "levels": [
                                                         {
                                                          "url": "media/panorama_47FBCB05_5501_714C_41CB_49290184E117_l_hq.jpeg",
                                                          "height": 1904,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1904
                                                         },
                                                         {
                                                          "url": "media/panorama_47FBCB05_5501_714C_41CB_49290184E117_l.jpeg",
                                                          "height": 1024,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1024
                                                         }
                                                        ],
                                                        "class": "ImageResource"
                                                       },
                                                       "thumbnailUrl": "media/panorama_47FBCB05_5501_714C_41CB_49290184E117_t.jpg"
                                                      }
                                                     ],
                                                     "thumbnailUrl": "media/panorama_47FBCB05_5501_714C_41CB_49290184E117_t.jpg",
                                                     "hfovMin": 60,
                                                     "pitch": 0,
                                                     "id": "panorama_47FBCB05_5501_714C_41CB_49290184E117"
                                                    },
                                                    "backwardYaw": -169.08,
                                                    "class": "AdjacentPanorama",
                                                    "yaw": 170.89,
                                                    "distance": 1
                                                   }
                                                  ],
                                                  "label": "IMG_20190802_093320",
                                                  "hfovMax": 130,
                                                  "partial": false,
                                                  "class": "Panorama",
                                                  "hfov": 360,
                                                  "vfov": 180,
                                                  "frames": [
                                                   {
                                                    "overlays": [
                                                     {
                                                      "rollOverDisplay": false,
                                                      "id": "overlay_40C3AD83_5501_9144_41C7_332148878B8B",
                                                      "class": "HotspotPanoramaOverlay",
                                                      "useHandCursor": true,
                                                      "areas": [
                                                       {
                                                        "mapColor": "#FF0000",
                                                        "click": "this.startPanoramaWithCamera(this.panorama_41290414_5503_774C_41B0_543B0B17685E, this.camera_559E2267_5E0E_9FE1_41D5_0DA3ECAADE3E); this.mainPlayList.set('selectedIndex', 33)",
                                                        "class": "HotspotPanoramaOverlayArea"
                                                       }
                                                      ],
                                                      "items": [
                                                       {
                                                        "image": {
                                                         "levels": [
                                                          {
                                                           "url": "media/panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A_0_HS_2_0.png",
                                                           "height": 198,
                                                           "class": "ImageResourceLevel",
                                                           "width": 172
                                                          }
                                                         ],
                                                         "class": "ImageResource"
                                                        },
                                                        "yaw": 40.32,
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "pitch": -20.5,
                                                        "hfov": 9.71
                                                       }
                                                      ],
                                                      "maps": [
                                                       {
                                                        "image": {
                                                         "levels": [
                                                          {
                                                           "url": "media/panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A_0_HS_2_0_0_map.gif",
                                                           "height": 99,
                                                           "class": "ImageResourceLevel",
                                                           "width": 86
                                                          }
                                                         ],
                                                         "class": "ImageResource"
                                                        },
                                                        "pitch": -20.5,
                                                        "class": "HotspotPanoramaOverlayMap",
                                                        "yaw": 40.32,
                                                        "hfov": 9.71
                                                       }
                                                      ],
                                                      "enabledInCardboard": true
                                                     },
                                                     {
                                                      "rollOverDisplay": false,
                                                      "id": "overlay_40F96D8C_5507_B15C_41B5_389AC9CE3870",
                                                      "class": "HotspotPanoramaOverlay",
                                                      "useHandCursor": true,
                                                      "areas": [
                                                       {
                                                        "mapColor": "#FF0000",
                                                        "click": "this.startPanoramaWithCamera(this.panorama_40492156_5501_71CC_41D5_01C63B4ADFE3, this.camera_5585125D_5E0E_9F21_41CE_08768B692A7B); this.mainPlayList.set('selectedIndex', 30)",
                                                        "class": "HotspotPanoramaOverlayArea"
                                                       }
                                                      ],
                                                      "items": [
                                                       {
                                                        "image": {
                                                         "levels": [
                                                          {
                                                           "url": "media/panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A_0_HS_1_0.png",
                                                           "height": 148,
                                                           "class": "ImageResourceLevel",
                                                           "width": 149
                                                          }
                                                         ],
                                                         "class": "ImageResource"
                                                        },
                                                        "yaw": 82.11,
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "pitch": -19.01,
                                                        "hfov": 8.5
                                                       }
                                                      ],
                                                      "maps": [
                                                       {
                                                        "image": {
                                                         "levels": [
                                                          {
                                                           "url": "media/panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A_0_HS_1_0_0_map.gif",
                                                           "height": 74,
                                                           "class": "ImageResourceLevel",
                                                           "width": 74
                                                          }
                                                         ],
                                                         "class": "ImageResource"
                                                        },
                                                        "pitch": -19.01,
                                                        "class": "HotspotPanoramaOverlayMap",
                                                        "yaw": 82.11,
                                                        "hfov": 8.5
                                                       }
                                                      ],
                                                      "enabledInCardboard": true
                                                     },
                                                     {
                                                      "rollOverDisplay": false,
                                                      "id": "overlay_40259962_5500_91C4_41C9_AD82EA19B935",
                                                      "class": "HotspotPanoramaOverlay",
                                                      "useHandCursor": true,
                                                      "areas": [
                                                       {
                                                        "mapColor": "#FF0000",
                                                        "click": "this.startPanoramaWithCamera(this.panorama_47FBCB05_5501_714C_41CB_49290184E117, this.camera_55969270_5E0E_9FFF_41A8_DCC37147146C); this.mainPlayList.set('selectedIndex', 31)",
                                                        "class": "HotspotPanoramaOverlayArea"
                                                       }
                                                      ],
                                                      "items": [
                                                       {
                                                        "image": {
                                                         "levels": [
                                                          {
                                                           "url": "media/panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A_0_HS_0_0.png",
                                                           "height": 157,
                                                           "class": "ImageResourceLevel",
                                                           "width": 184
                                                          }
                                                         ],
                                                         "class": "ImageResource"
                                                        },
                                                        "yaw": 170.89,
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "pitch": -38.27,
                                                        "hfov": 8.71
                                                       }
                                                      ],
                                                      "maps": [
                                                       {
                                                        "image": {
                                                         "levels": [
                                                          {
                                                           "url": "media/panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A_0_HS_0_0_0_map.gif",
                                                           "height": 78,
                                                           "class": "ImageResourceLevel",
                                                           "width": 92
                                                          }
                                                         ],
                                                         "class": "ImageResource"
                                                        },
                                                        "pitch": -38.27,
                                                        "class": "HotspotPanoramaOverlayMap",
                                                        "yaw": 170.89,
                                                        "hfov": 8.71
                                                       }
                                                      ],
                                                      "enabledInCardboard": true
                                                     },
                                                     {
                                                      "image": {
                                                       "levels": [
                                                        {
                                                         "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                                                         "height": 900,
                                                         "class": "ImageResourceLevel",
                                                         "width": 900
                                                        }
                                                       ],
                                                       "class": "ImageResource"
                                                      },
                                                      "id": "panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A_tcap0",
                                                      "class": "TripodCapPanoramaOverlay",
                                                      "rotate": false,
                                                      "angle": 0,
                                                      "inertia": false,
                                                      "hfov": 36
                                                     }
                                                    ],
                                                    "right": {
                                                     "levels": [
                                                      {
                                                       "url": "media/panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A_r_hq.jpeg",
                                                       "height": 1904,
                                                       "class": "ImageResourceLevel",
                                                       "width": 1904
                                                      },
                                                      {
                                                       "url": "media/panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A_r.jpeg",
                                                       "height": 1024,
                                                       "class": "ImageResourceLevel",
                                                       "width": 1024
                                                      }
                                                     ],
                                                     "class": "ImageResource"
                                                    },
                                                    "front": {
                                                     "levels": [
                                                      {
                                                       "url": "media/panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A_f_hq.jpeg",
                                                       "height": 1904,
                                                       "class": "ImageResourceLevel",
                                                       "width": 1904
                                                      },
                                                      {
                                                       "url": "media/panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A_f.jpeg",
                                                       "height": 1024,
                                                       "class": "ImageResourceLevel",
                                                       "width": 1024
                                                      }
                                                     ],
                                                     "class": "ImageResource"
                                                    },
                                                    "class": "CubicPanoramaFrame",
                                                    "back": {
                                                     "levels": [
                                                      {
                                                       "url": "media/panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A_b_hq.jpeg",
                                                       "height": 1904,
                                                       "class": "ImageResourceLevel",
                                                       "width": 1904
                                                      },
                                                      {
                                                       "url": "media/panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A_b.jpeg",
                                                       "height": 1024,
                                                       "class": "ImageResourceLevel",
                                                       "width": 1024
                                                      }
                                                     ],
                                                     "class": "ImageResource"
                                                    },
                                                    "top": {
                                                     "levels": [
                                                      {
                                                       "url": "media/panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A_u_hq.jpeg",
                                                       "height": 1904,
                                                       "class": "ImageResourceLevel",
                                                       "width": 1904
                                                      },
                                                      {
                                                       "url": "media/panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A_u.jpeg",
                                                       "height": 1024,
                                                       "class": "ImageResourceLevel",
                                                       "width": 1024
                                                      }
                                                     ],
                                                     "class": "ImageResource"
                                                    },
                                                    "bottom": {
                                                     "levels": [
                                                      {
                                                       "url": "media/panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A_d_hq.jpeg",
                                                       "height": 1904,
                                                       "class": "ImageResourceLevel",
                                                       "width": 1904
                                                      },
                                                      {
                                                       "url": "media/panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A_d.jpeg",
                                                       "height": 1024,
                                                       "class": "ImageResourceLevel",
                                                       "width": 1024
                                                      }
                                                     ],
                                                     "class": "ImageResource"
                                                    },
                                                    "left": {
                                                     "levels": [
                                                      {
                                                       "url": "media/panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A_l_hq.jpeg",
                                                       "height": 1904,
                                                       "class": "ImageResourceLevel",
                                                       "width": 1904
                                                      },
                                                      {
                                                       "url": "media/panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A_l.jpeg",
                                                       "height": 1024,
                                                       "class": "ImageResourceLevel",
                                                       "width": 1024
                                                      }
                                                     ],
                                                     "class": "ImageResource"
                                                    },
                                                    "thumbnailUrl": "media/panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A_t.jpg"
                                                   }
                                                  ],
                                                  "thumbnailUrl": "media/panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A_t.jpg",
                                                  "hfovMin": 60,
                                                  "pitch": 0,
                                                  "id": "panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A"
                                                 },
                                                 "backwardYaw": 82.11,
                                                 "class": "AdjacentPanorama",
                                                 "yaw": -13.24,
                                                 "distance": 1
                                                },
                                                {
                                                 "panorama": "this.panorama_41290414_5503_774C_41B0_543B0B17685E",
                                                 "backwardYaw": 130.52,
                                                 "class": "AdjacentPanorama",
                                                 "yaw": 50.24,
                                                 "distance": 1
                                                },
                                                {
                                                 "panorama": {
                                                  "adjacentPanoramas": [
                                                   {
                                                    "panorama": "this.panorama_40492156_5501_71CC_41D5_01C63B4ADFE3",
                                                    "backwardYaw": -132.83,
                                                    "class": "AdjacentPanorama",
                                                    "yaw": 93.6,
                                                    "distance": 1
                                                   },
                                                   {
                                                    "panorama": {
                                                     "adjacentPanoramas": [
                                                      {
                                                       "panorama": {
                                                        "adjacentPanoramas": [
                                                         {
                                                          "panorama": "this.panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF",
                                                          "backwardYaw": -31.75,
                                                          "class": "AdjacentPanorama",
                                                          "yaw": -140.76,
                                                          "distance": 1
                                                         }
                                                        ],
                                                        "label": "IMG_20190802_093045",
                                                        "hfovMax": 150,
                                                        "partial": false,
                                                        "class": "Panorama",
                                                        "hfov": 360,
                                                        "vfov": 180,
                                                        "frames": [
                                                         {
                                                          "overlays": [
                                                           {
                                                            "rollOverDisplay": false,
                                                            "id": "overlay_46CC98C2_5501_90C4_41B7_40B6578BD867",
                                                            "class": "HotspotPanoramaOverlay",
                                                            "useHandCursor": true,
                                                            "areas": [
                                                             {
                                                              "mapColor": "#FF0000",
                                                              "click": "this.startPanoramaWithCamera(this.panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF, this.camera_5570B5F5_5E0E_84E6_41BF_502018D4045C); this.mainPlayList.set('selectedIndex', 26)",
                                                              "class": "HotspotPanoramaOverlayArea"
                                                             }
                                                            ],
                                                            "items": [
                                                             {
                                                              "image": {
                                                               "levels": [
                                                                {
                                                                 "url": "media/panorama_47FDC4F9_5501_B0C4_41C9_05A774018B90_0_HS_0_0.png",
                                                                 "height": 201,
                                                                 "class": "ImageResourceLevel",
                                                                 "width": 202
                                                                }
                                                               ],
                                                               "class": "ImageResource"
                                                              },
                                                              "yaw": -140.76,
                                                              "class": "HotspotPanoramaOverlayImage",
                                                              "pitch": -44.15,
                                                              "hfov": 8.72
                                                             }
                                                            ],
                                                            "maps": [
                                                             {
                                                              "image": {
                                                               "levels": [
                                                                {
                                                                 "url": "media/panorama_47FDC4F9_5501_B0C4_41C9_05A774018B90_0_HS_0_0_0_map.gif",
                                                                 "height": 100,
                                                                 "class": "ImageResourceLevel",
                                                                 "width": 101
                                                                }
                                                               ],
                                                               "class": "ImageResource"
                                                              },
                                                              "pitch": -44.15,
                                                              "class": "HotspotPanoramaOverlayMap",
                                                              "yaw": -140.76,
                                                              "hfov": 8.72
                                                             }
                                                            ],
                                                            "enabledInCardboard": true
                                                           },
                                                           {
                                                            "image": {
                                                             "levels": [
                                                              {
                                                               "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                                                               "height": 900,
                                                               "class": "ImageResourceLevel",
                                                               "width": 900
                                                              }
                                                             ],
                                                             "class": "ImageResource"
                                                            },
                                                            "id": "panorama_47FDC4F9_5501_B0C4_41C9_05A774018B90_tcap0",
                                                            "class": "TripodCapPanoramaOverlay",
                                                            "rotate": false,
                                                            "angle": 0,
                                                            "inertia": false,
                                                            "hfov": 36
                                                           }
                                                          ],
                                                          "right": {
                                                           "levels": [
                                                            {
                                                             "url": "media/panorama_47FDC4F9_5501_B0C4_41C9_05A774018B90_r_hq.jpeg",
                                                             "height": 1904,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1904
                                                            },
                                                            {
                                                             "url": "media/panorama_47FDC4F9_5501_B0C4_41C9_05A774018B90_r.jpeg",
                                                             "height": 1024,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1024
                                                            }
                                                           ],
                                                           "class": "ImageResource"
                                                          },
                                                          "front": {
                                                           "levels": [
                                                            {
                                                             "url": "media/panorama_47FDC4F9_5501_B0C4_41C9_05A774018B90_f_hq.jpeg",
                                                             "height": 1904,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1904
                                                            },
                                                            {
                                                             "url": "media/panorama_47FDC4F9_5501_B0C4_41C9_05A774018B90_f.jpeg",
                                                             "height": 1024,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1024
                                                            }
                                                           ],
                                                           "class": "ImageResource"
                                                          },
                                                          "class": "CubicPanoramaFrame",
                                                          "back": {
                                                           "levels": [
                                                            {
                                                             "url": "media/panorama_47FDC4F9_5501_B0C4_41C9_05A774018B90_b_hq.jpeg",
                                                             "height": 1904,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1904
                                                            },
                                                            {
                                                             "url": "media/panorama_47FDC4F9_5501_B0C4_41C9_05A774018B90_b.jpeg",
                                                             "height": 1024,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1024
                                                            }
                                                           ],
                                                           "class": "ImageResource"
                                                          },
                                                          "top": {
                                                           "levels": [
                                                            {
                                                             "url": "media/panorama_47FDC4F9_5501_B0C4_41C9_05A774018B90_u_hq.jpeg",
                                                             "height": 1904,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1904
                                                            },
                                                            {
                                                             "url": "media/panorama_47FDC4F9_5501_B0C4_41C9_05A774018B90_u.jpeg",
                                                             "height": 1024,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1024
                                                            }
                                                           ],
                                                           "class": "ImageResource"
                                                          },
                                                          "bottom": {
                                                           "levels": [
                                                            {
                                                             "url": "media/panorama_47FDC4F9_5501_B0C4_41C9_05A774018B90_d_hq.jpeg",
                                                             "height": 1904,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1904
                                                            },
                                                            {
                                                             "url": "media/panorama_47FDC4F9_5501_B0C4_41C9_05A774018B90_d.jpeg",
                                                             "height": 1024,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1024
                                                            }
                                                           ],
                                                           "class": "ImageResource"
                                                          },
                                                          "left": {
                                                           "levels": [
                                                            {
                                                             "url": "media/panorama_47FDC4F9_5501_B0C4_41C9_05A774018B90_l_hq.jpeg",
                                                             "height": 1904,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1904
                                                            },
                                                            {
                                                             "url": "media/panorama_47FDC4F9_5501_B0C4_41C9_05A774018B90_l.jpeg",
                                                             "height": 1024,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1024
                                                            }
                                                           ],
                                                           "class": "ImageResource"
                                                          },
                                                          "thumbnailUrl": "media/panorama_47FDC4F9_5501_B0C4_41C9_05A774018B90_t.jpg"
                                                         }
                                                        ],
                                                        "thumbnailUrl": "media/panorama_47FDC4F9_5501_B0C4_41C9_05A774018B90_t.jpg",
                                                        "hfovMin": 60,
                                                        "pitch": 0,
                                                        "id": "panorama_47FDC4F9_5501_B0C4_41C9_05A774018B90"
                                                       },
                                                       "backwardYaw": -140.76,
                                                       "class": "AdjacentPanorama",
                                                       "yaw": -31.75,
                                                       "distance": 1
                                                      },
                                                      {
                                                       "panorama": "this.panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF",
                                                       "backwardYaw": -36.41,
                                                       "class": "AdjacentPanorama",
                                                       "yaw": 91.12,
                                                       "distance": 1
                                                      },
                                                      {
                                                       "panorama": {
                                                        "adjacentPanoramas": [
                                                         {
                                                          "panorama": "this.panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF",
                                                          "backwardYaw": -171.15,
                                                          "class": "AdjacentPanorama",
                                                          "yaw": 129.24,
                                                          "distance": 1
                                                         }
                                                        ],
                                                        "label": "IMG_20190802_093028",
                                                        "hfovMax": 150,
                                                        "partial": false,
                                                        "class": "Panorama",
                                                        "hfov": 360,
                                                        "vfov": 180,
                                                        "frames": [
                                                         {
                                                          "overlays": [
                                                           {
                                                            "rollOverDisplay": false,
                                                            "id": "overlay_46FE65F1_5501_B0C4_41CC_310A3E370114",
                                                            "class": "HotspotPanoramaOverlay",
                                                            "useHandCursor": true,
                                                            "areas": [
                                                             {
                                                              "mapColor": "#FF0000",
                                                              "click": "this.startPanoramaWithCamera(this.panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF, this.camera_52BEA42E_5E0E_9B63_41BC_B73706DAC8D7); this.mainPlayList.set('selectedIndex', 26)",
                                                              "class": "HotspotPanoramaOverlayArea"
                                                             }
                                                            ],
                                                            "items": [
                                                             {
                                                              "image": {
                                                               "levels": [
                                                                {
                                                                 "url": "media/panorama_47FDCC27_5501_974C_41D4_4D629DDEDFE3_0_HS_0_0.png",
                                                                 "height": 214,
                                                                 "class": "ImageResourceLevel",
                                                                 "width": 215
                                                                }
                                                               ],
                                                               "class": "ImageResource"
                                                              },
                                                              "yaw": 129.24,
                                                              "class": "HotspotPanoramaOverlayImage",
                                                              "pitch": -33.85,
                                                              "hfov": 10.76
                                                             }
                                                            ],
                                                            "maps": [
                                                             {
                                                              "image": {
                                                               "levels": [
                                                                {
                                                                 "url": "media/panorama_47FDCC27_5501_974C_41D4_4D629DDEDFE3_0_HS_0_0_0_map.gif",
                                                                 "height": 107,
                                                                 "class": "ImageResourceLevel",
                                                                 "width": 107
                                                                }
                                                               ],
                                                               "class": "ImageResource"
                                                              },
                                                              "pitch": -33.85,
                                                              "class": "HotspotPanoramaOverlayMap",
                                                              "yaw": 129.24,
                                                              "hfov": 10.76
                                                             }
                                                            ],
                                                            "enabledInCardboard": true
                                                           },
                                                           {
                                                            "image": {
                                                             "levels": [
                                                              {
                                                               "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                                                               "height": 900,
                                                               "class": "ImageResourceLevel",
                                                               "width": 900
                                                              }
                                                             ],
                                                             "class": "ImageResource"
                                                            },
                                                            "id": "panorama_47FDCC27_5501_974C_41D4_4D629DDEDFE3_tcap0",
                                                            "class": "TripodCapPanoramaOverlay",
                                                            "rotate": false,
                                                            "angle": 0,
                                                            "inertia": false,
                                                            "hfov": 36
                                                           }
                                                          ],
                                                          "right": {
                                                           "levels": [
                                                            {
                                                             "url": "media/panorama_47FDCC27_5501_974C_41D4_4D629DDEDFE3_r_hq.jpeg",
                                                             "height": 1904,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1904
                                                            },
                                                            {
                                                             "url": "media/panorama_47FDCC27_5501_974C_41D4_4D629DDEDFE3_r.jpeg",
                                                             "height": 1024,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1024
                                                            }
                                                           ],
                                                           "class": "ImageResource"
                                                          },
                                                          "front": {
                                                           "levels": [
                                                            {
                                                             "url": "media/panorama_47FDCC27_5501_974C_41D4_4D629DDEDFE3_f_hq.jpeg",
                                                             "height": 1904,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1904
                                                            },
                                                            {
                                                             "url": "media/panorama_47FDCC27_5501_974C_41D4_4D629DDEDFE3_f.jpeg",
                                                             "height": 1024,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1024
                                                            }
                                                           ],
                                                           "class": "ImageResource"
                                                          },
                                                          "class": "CubicPanoramaFrame",
                                                          "back": {
                                                           "levels": [
                                                            {
                                                             "url": "media/panorama_47FDCC27_5501_974C_41D4_4D629DDEDFE3_b_hq.jpeg",
                                                             "height": 1904,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1904
                                                            },
                                                            {
                                                             "url": "media/panorama_47FDCC27_5501_974C_41D4_4D629DDEDFE3_b.jpeg",
                                                             "height": 1024,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1024
                                                            }
                                                           ],
                                                           "class": "ImageResource"
                                                          },
                                                          "top": {
                                                           "levels": [
                                                            {
                                                             "url": "media/panorama_47FDCC27_5501_974C_41D4_4D629DDEDFE3_u_hq.jpeg",
                                                             "height": 1904,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1904
                                                            },
                                                            {
                                                             "url": "media/panorama_47FDCC27_5501_974C_41D4_4D629DDEDFE3_u.jpeg",
                                                             "height": 1024,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1024
                                                            }
                                                           ],
                                                           "class": "ImageResource"
                                                          },
                                                          "bottom": {
                                                           "levels": [
                                                            {
                                                             "url": "media/panorama_47FDCC27_5501_974C_41D4_4D629DDEDFE3_d_hq.jpeg",
                                                             "height": 1904,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1904
                                                            },
                                                            {
                                                             "url": "media/panorama_47FDCC27_5501_974C_41D4_4D629DDEDFE3_d.jpeg",
                                                             "height": 1024,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1024
                                                            }
                                                           ],
                                                           "class": "ImageResource"
                                                          },
                                                          "left": {
                                                           "levels": [
                                                            {
                                                             "url": "media/panorama_47FDCC27_5501_974C_41D4_4D629DDEDFE3_l_hq.jpeg",
                                                             "height": 1904,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1904
                                                            },
                                                            {
                                                             "url": "media/panorama_47FDCC27_5501_974C_41D4_4D629DDEDFE3_l.jpeg",
                                                             "height": 1024,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1024
                                                            }
                                                           ],
                                                           "class": "ImageResource"
                                                          },
                                                          "thumbnailUrl": "media/panorama_47FDCC27_5501_974C_41D4_4D629DDEDFE3_t.jpg"
                                                         }
                                                        ],
                                                        "thumbnailUrl": "media/panorama_47FDCC27_5501_974C_41D4_4D629DDEDFE3_t.jpg",
                                                        "hfovMin": 60,
                                                        "pitch": 0,
                                                        "id": "panorama_47FDCC27_5501_974C_41D4_4D629DDEDFE3"
                                                       },
                                                       "backwardYaw": 129.24,
                                                       "class": "AdjacentPanorama",
                                                       "yaw": -171.15,
                                                       "distance": 1
                                                      },
                                                      {
                                                       "panorama": {
                                                        "adjacentPanoramas": [
                                                         {
                                                          "panorama": "this.panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF",
                                                          "backwardYaw": -98.49,
                                                          "class": "AdjacentPanorama",
                                                          "yaw": -168.18,
                                                          "distance": 1
                                                         }
                                                        ],
                                                        "label": "IMG_20190802_093102",
                                                        "hfovMax": 150,
                                                        "partial": false,
                                                        "class": "Panorama",
                                                        "hfov": 360,
                                                        "vfov": 180,
                                                        "frames": [
                                                         {
                                                          "overlays": [
                                                           {
                                                            "rollOverDisplay": false,
                                                            "id": "overlay_46A0620D_550F_B35C_41D3_FEDC81234BA5",
                                                            "class": "HotspotPanoramaOverlay",
                                                            "useHandCursor": true,
                                                            "areas": [
                                                             {
                                                              "mapColor": "#FF0000",
                                                              "click": "this.startPanoramaWithCamera(this.panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF, this.camera_55192540_5E0E_851E_41C5_7C7F2998D5C6); this.mainPlayList.set('selectedIndex', 26)",
                                                              "class": "HotspotPanoramaOverlayArea"
                                                             }
                                                            ],
                                                            "items": [
                                                             {
                                                              "image": {
                                                               "levels": [
                                                                {
                                                                 "url": "media/panorama_47FDFDE6_5501_B0CC_41D3_369494B67660_0_HS_0_0.png",
                                                                 "height": 198,
                                                                 "class": "ImageResourceLevel",
                                                                 "width": 275
                                                                }
                                                               ],
                                                               "class": "ImageResource"
                                                              },
                                                              "yaw": -168.18,
                                                              "class": "HotspotPanoramaOverlayImage",
                                                              "pitch": -51.48,
                                                              "hfov": 10.29
                                                             }
                                                            ],
                                                            "maps": [
                                                             {
                                                              "image": {
                                                               "levels": [
                                                                {
                                                                 "url": "media/panorama_47FDFDE6_5501_B0CC_41D3_369494B67660_0_HS_0_0_0_map.gif",
                                                                 "height": 99,
                                                                 "class": "ImageResourceLevel",
                                                                 "width": 137
                                                                }
                                                               ],
                                                               "class": "ImageResource"
                                                              },
                                                              "pitch": -51.48,
                                                              "class": "HotspotPanoramaOverlayMap",
                                                              "yaw": -168.18,
                                                              "hfov": 10.29
                                                             }
                                                            ],
                                                            "enabledInCardboard": true
                                                           },
                                                           {
                                                            "image": {
                                                             "levels": [
                                                              {
                                                               "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                                                               "height": 900,
                                                               "class": "ImageResourceLevel",
                                                               "width": 900
                                                              }
                                                             ],
                                                             "class": "ImageResource"
                                                            },
                                                            "id": "panorama_47FDFDE6_5501_B0CC_41D3_369494B67660_tcap0",
                                                            "class": "TripodCapPanoramaOverlay",
                                                            "rotate": false,
                                                            "angle": 0,
                                                            "inertia": false,
                                                            "hfov": 36
                                                           }
                                                          ],
                                                          "right": {
                                                           "levels": [
                                                            {
                                                             "url": "media/panorama_47FDFDE6_5501_B0CC_41D3_369494B67660_r_hq.jpeg",
                                                             "height": 1904,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1904
                                                            },
                                                            {
                                                             "url": "media/panorama_47FDFDE6_5501_B0CC_41D3_369494B67660_r.jpeg",
                                                             "height": 1024,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1024
                                                            }
                                                           ],
                                                           "class": "ImageResource"
                                                          },
                                                          "front": {
                                                           "levels": [
                                                            {
                                                             "url": "media/panorama_47FDFDE6_5501_B0CC_41D3_369494B67660_f_hq.jpeg",
                                                             "height": 1904,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1904
                                                            },
                                                            {
                                                             "url": "media/panorama_47FDFDE6_5501_B0CC_41D3_369494B67660_f.jpeg",
                                                             "height": 1024,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1024
                                                            }
                                                           ],
                                                           "class": "ImageResource"
                                                          },
                                                          "class": "CubicPanoramaFrame",
                                                          "back": {
                                                           "levels": [
                                                            {
                                                             "url": "media/panorama_47FDFDE6_5501_B0CC_41D3_369494B67660_b_hq.jpeg",
                                                             "height": 1904,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1904
                                                            },
                                                            {
                                                             "url": "media/panorama_47FDFDE6_5501_B0CC_41D3_369494B67660_b.jpeg",
                                                             "height": 1024,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1024
                                                            }
                                                           ],
                                                           "class": "ImageResource"
                                                          },
                                                          "top": {
                                                           "levels": [
                                                            {
                                                             "url": "media/panorama_47FDFDE6_5501_B0CC_41D3_369494B67660_u_hq.jpeg",
                                                             "height": 1904,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1904
                                                            },
                                                            {
                                                             "url": "media/panorama_47FDFDE6_5501_B0CC_41D3_369494B67660_u.jpeg",
                                                             "height": 1024,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1024
                                                            }
                                                           ],
                                                           "class": "ImageResource"
                                                          },
                                                          "bottom": {
                                                           "levels": [
                                                            {
                                                             "url": "media/panorama_47FDFDE6_5501_B0CC_41D3_369494B67660_d_hq.jpeg",
                                                             "height": 1904,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1904
                                                            },
                                                            {
                                                             "url": "media/panorama_47FDFDE6_5501_B0CC_41D3_369494B67660_d.jpeg",
                                                             "height": 1024,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1024
                                                            }
                                                           ],
                                                           "class": "ImageResource"
                                                          },
                                                          "left": {
                                                           "levels": [
                                                            {
                                                             "url": "media/panorama_47FDFDE6_5501_B0CC_41D3_369494B67660_l_hq.jpeg",
                                                             "height": 1904,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1904
                                                            },
                                                            {
                                                             "url": "media/panorama_47FDFDE6_5501_B0CC_41D3_369494B67660_l.jpeg",
                                                             "height": 1024,
                                                             "class": "ImageResourceLevel",
                                                             "width": 1024
                                                            }
                                                           ],
                                                           "class": "ImageResource"
                                                          },
                                                          "thumbnailUrl": "media/panorama_47FDFDE6_5501_B0CC_41D3_369494B67660_t.jpg"
                                                         }
                                                        ],
                                                        "thumbnailUrl": "media/panorama_47FDFDE6_5501_B0CC_41D3_369494B67660_t.jpg",
                                                        "hfovMin": 60,
                                                        "pitch": 0,
                                                        "id": "panorama_47FDFDE6_5501_B0CC_41D3_369494B67660"
                                                       },
                                                       "backwardYaw": -168.18,
                                                       "class": "AdjacentPanorama",
                                                       "yaw": -98.49,
                                                       "distance": 1
                                                      }
                                                     ],
                                                     "label": "IMG_20190802_093016",
                                                     "hfovMax": 150,
                                                     "partial": false,
                                                     "class": "Panorama",
                                                     "hfov": 360,
                                                     "vfov": 180,
                                                     "frames": [
                                                      {
                                                       "overlays": [
                                                        {
                                                         "rollOverDisplay": false,
                                                         "id": "overlay_47BE9036_5500_8F4C_4191_9DA5A72B555F",
                                                         "class": "HotspotPanoramaOverlay",
                                                         "useHandCursor": true,
                                                         "areas": [
                                                          {
                                                           "mapColor": "#FF0000",
                                                           "click": "this.startPanoramaWithCamera(this.panorama_47FDC4F9_5501_B0C4_41C9_05A774018B90, this.camera_55EB12DE_5E0E_9CDC_41C2_858AF417B18C); this.mainPlayList.set('selectedIndex', 28)",
                                                           "class": "HotspotPanoramaOverlayArea"
                                                          }
                                                         ],
                                                         "items": [
                                                          {
                                                           "image": {
                                                            "levels": [
                                                             {
                                                              "url": "media/panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF_0_HS_2_0.png",
                                                              "height": 207,
                                                              "class": "ImageResourceLevel",
                                                              "width": 196
                                                             }
                                                            ],
                                                            "class": "ImageResource"
                                                           },
                                                           "yaw": -31.75,
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "pitch": -37.36,
                                                           "hfov": 9.35
                                                          }
                                                         ],
                                                         "maps": [
                                                          {
                                                           "image": {
                                                            "levels": [
                                                             {
                                                              "url": "media/panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF_0_HS_2_0_0_map.gif",
                                                              "height": 103,
                                                              "class": "ImageResourceLevel",
                                                              "width": 98
                                                             }
                                                            ],
                                                            "class": "ImageResource"
                                                           },
                                                           "pitch": -37.36,
                                                           "class": "HotspotPanoramaOverlayMap",
                                                           "yaw": -31.75,
                                                           "hfov": 9.35
                                                          }
                                                         ],
                                                         "enabledInCardboard": true
                                                        },
                                                        {
                                                         "rollOverDisplay": false,
                                                         "id": "overlay_46627CDA_5500_90C4_41CB_7EB52B22C660",
                                                         "class": "HotspotPanoramaOverlay",
                                                         "useHandCursor": true,
                                                         "areas": [
                                                          {
                                                           "mapColor": "#FF0000",
                                                           "click": "this.startPanoramaWithCamera(this.panorama_47FDFDE6_5501_B0CC_41D3_369494B67660, this.camera_55FCF307_5E0E_9D21_41BE_B739D06B49FE); this.mainPlayList.set('selectedIndex', 29)",
                                                           "class": "HotspotPanoramaOverlayArea"
                                                          }
                                                         ],
                                                         "items": [
                                                          {
                                                           "image": {
                                                            "levels": [
                                                             {
                                                              "url": "media/panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF_0_HS_1_0.png",
                                                              "height": 204,
                                                              "class": "ImageResourceLevel",
                                                              "width": 209
                                                             }
                                                            ],
                                                            "class": "ImageResource"
                                                           },
                                                           "yaw": -98.49,
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "pitch": -63.93,
                                                           "hfov": 5.52
                                                          }
                                                         ],
                                                         "maps": [
                                                          {
                                                           "image": {
                                                            "levels": [
                                                             {
                                                              "url": "media/panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF_0_HS_1_0_0_map.gif",
                                                              "height": 102,
                                                              "class": "ImageResourceLevel",
                                                              "width": 104
                                                             }
                                                            ],
                                                            "class": "ImageResource"
                                                           },
                                                           "pitch": -63.93,
                                                           "class": "HotspotPanoramaOverlayMap",
                                                           "yaw": -98.49,
                                                           "hfov": 5.52
                                                          }
                                                         ],
                                                         "enabledInCardboard": true
                                                        },
                                                        {
                                                         "rollOverDisplay": false,
                                                         "id": "overlay_46222D1E_5501_917C_41B1_3267B1227D38",
                                                         "class": "HotspotPanoramaOverlay",
                                                         "useHandCursor": true,
                                                         "areas": [
                                                          {
                                                           "mapColor": "#FF0000",
                                                           "click": "this.startPanoramaWithCamera(this.panorama_47FDCC27_5501_974C_41D4_4D629DDEDFE3, this.camera_55E432F8_5E0E_9CEF_41CE_B8664DAB4AE0); this.mainPlayList.set('selectedIndex', 27)",
                                                           "class": "HotspotPanoramaOverlayArea"
                                                          }
                                                         ],
                                                         "items": [
                                                          {
                                                           "image": {
                                                            "levels": [
                                                             {
                                                              "url": "media/panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF_0_HS_0_0.png",
                                                              "height": 184,
                                                              "class": "ImageResourceLevel",
                                                              "width": 245
                                                             }
                                                            ],
                                                            "class": "ImageResource"
                                                           },
                                                           "yaw": -171.15,
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "pitch": -40.39,
                                                           "hfov": 11.22
                                                          }
                                                         ],
                                                         "maps": [
                                                          {
                                                           "image": {
                                                            "levels": [
                                                             {
                                                              "url": "media/panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF_0_HS_0_0_0_map.gif",
                                                              "height": 92,
                                                              "class": "ImageResourceLevel",
                                                              "width": 122
                                                             }
                                                            ],
                                                            "class": "ImageResource"
                                                           },
                                                           "pitch": -40.39,
                                                           "class": "HotspotPanoramaOverlayMap",
                                                           "yaw": -171.15,
                                                           "hfov": 11.22
                                                          }
                                                         ],
                                                         "enabledInCardboard": true
                                                        },
                                                        {
                                                         "rollOverDisplay": false,
                                                         "id": "overlay_5D67241E_57EF_C83D_419B_DCEA687C7258",
                                                         "class": "HotspotPanoramaOverlay",
                                                         "useHandCursor": true,
                                                         "areas": [
                                                          {
                                                           "mapColor": "#FF0000",
                                                           "click": "this.startPanoramaWithCamera(this.panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF, this.camera_55E3B2EE_5E0E_9CE3_41D4_5EEC628991ED); this.mainPlayList.set('selectedIndex', 8)",
                                                           "class": "HotspotPanoramaOverlayArea"
                                                          }
                                                         ],
                                                         "items": [
                                                          {
                                                           "image": {
                                                            "levels": [
                                                             {
                                                              "url": "media/panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF_0_HS_3_0.png",
                                                              "height": 250,
                                                              "class": "ImageResourceLevel",
                                                              "width": 248
                                                             }
                                                            ],
                                                            "class": "ImageResource"
                                                           },
                                                           "yaw": 91.12,
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "pitch": -59.21,
                                                           "hfov": 7.64
                                                          }
                                                         ],
                                                         "maps": [
                                                          {
                                                           "image": {
                                                            "levels": [
                                                             {
                                                              "url": "media/panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF_0_HS_3_0_0_map.gif",
                                                              "height": 125,
                                                              "class": "ImageResourceLevel",
                                                              "width": 124
                                                             }
                                                            ],
                                                            "class": "ImageResource"
                                                           },
                                                           "pitch": -59.21,
                                                           "class": "HotspotPanoramaOverlayMap",
                                                           "yaw": 91.12,
                                                           "hfov": 7.64
                                                          }
                                                         ],
                                                         "enabledInCardboard": true
                                                        },
                                                        {
                                                         "image": {
                                                          "levels": [
                                                           {
                                                            "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                                                            "height": 900,
                                                            "class": "ImageResourceLevel",
                                                            "width": 900
                                                           }
                                                          ],
                                                          "class": "ImageResource"
                                                         },
                                                         "id": "panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF_tcap0",
                                                         "class": "TripodCapPanoramaOverlay",
                                                         "rotate": false,
                                                         "angle": 0,
                                                         "inertia": false,
                                                         "hfov": 36
                                                        }
                                                       ],
                                                       "right": {
                                                        "levels": [
                                                         {
                                                          "url": "media/panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF_r_hq.jpeg",
                                                          "height": 1904,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1904
                                                         },
                                                         {
                                                          "url": "media/panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF_r.jpeg",
                                                          "height": 1024,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1024
                                                         }
                                                        ],
                                                        "class": "ImageResource"
                                                       },
                                                       "front": {
                                                        "levels": [
                                                         {
                                                          "url": "media/panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF_f_hq.jpeg",
                                                          "height": 1904,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1904
                                                         },
                                                         {
                                                          "url": "media/panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF_f.jpeg",
                                                          "height": 1024,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1024
                                                         }
                                                        ],
                                                        "class": "ImageResource"
                                                       },
                                                       "class": "CubicPanoramaFrame",
                                                       "back": {
                                                        "levels": [
                                                         {
                                                          "url": "media/panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF_b_hq.jpeg",
                                                          "height": 1904,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1904
                                                         },
                                                         {
                                                          "url": "media/panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF_b.jpeg",
                                                          "height": 1024,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1024
                                                         }
                                                        ],
                                                        "class": "ImageResource"
                                                       },
                                                       "top": {
                                                        "levels": [
                                                         {
                                                          "url": "media/panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF_u_hq.jpeg",
                                                          "height": 1904,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1904
                                                         },
                                                         {
                                                          "url": "media/panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF_u.jpeg",
                                                          "height": 1024,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1024
                                                         }
                                                        ],
                                                        "class": "ImageResource"
                                                       },
                                                       "bottom": {
                                                        "levels": [
                                                         {
                                                          "url": "media/panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF_d_hq.jpeg",
                                                          "height": 1904,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1904
                                                         },
                                                         {
                                                          "url": "media/panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF_d.jpeg",
                                                          "height": 1024,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1024
                                                         }
                                                        ],
                                                        "class": "ImageResource"
                                                       },
                                                       "left": {
                                                        "levels": [
                                                         {
                                                          "url": "media/panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF_l_hq.jpeg",
                                                          "height": 1904,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1904
                                                         },
                                                         {
                                                          "url": "media/panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF_l.jpeg",
                                                          "height": 1024,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1024
                                                         }
                                                        ],
                                                        "class": "ImageResource"
                                                       },
                                                       "thumbnailUrl": "media/panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF_t.jpg"
                                                      }
                                                     ],
                                                     "thumbnailUrl": "media/panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF_t.jpg",
                                                     "hfovMin": 60,
                                                     "pitch": 0,
                                                     "id": "panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF"
                                                    },
                                                    "backwardYaw": 91.12,
                                                    "class": "AdjacentPanorama",
                                                    "yaw": -36.41,
                                                    "distance": 1
                                                   },
                                                   {
                                                    "panorama": {
                                                     "adjacentPanoramas": [
                                                      {
                                                       "panorama": "this.panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF",
                                                       "backwardYaw": -0.35,
                                                       "class": "AdjacentPanorama",
                                                       "yaw": 173.93,
                                                       "distance": 1
                                                      },
                                                      {
                                                       "panorama": "this.panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F",
                                                       "backwardYaw": -94.33,
                                                       "class": "AdjacentPanorama",
                                                       "yaw": 3.2,
                                                       "distance": 1
                                                      }
                                                     ],
                                                     "label": "IMG_20190802_092927",
                                                     "hfovMax": 130,
                                                     "partial": false,
                                                     "class": "Panorama",
                                                     "hfov": 360,
                                                     "vfov": 180,
                                                     "frames": [
                                                      {
                                                       "overlays": [
                                                        {
                                                         "rollOverDisplay": false,
                                                         "id": "overlay_5E96C054_5501_8FCC_41C4_7E91720A3FE9",
                                                         "class": "HotspotPanoramaOverlay",
                                                         "useHandCursor": true,
                                                         "areas": [
                                                          {
                                                           "mapColor": "#FF0000",
                                                           "click": "this.startPanoramaWithCamera(this.panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F, this.camera_526E63BB_5E0E_9D61_41A4_3503ACAA7497); this.mainPlayList.set('selectedIndex', 6)",
                                                           "class": "HotspotPanoramaOverlayArea"
                                                          }
                                                         ],
                                                         "items": [
                                                          {
                                                           "image": {
                                                            "levels": [
                                                             {
                                                              "url": "media/panorama_53EE18E4_5500_90CC_41D3_5B2CF61F7EDF_0_HS_2_0.png",
                                                              "height": 306,
                                                              "class": "ImageResourceLevel",
                                                              "width": 288
                                                             }
                                                            ],
                                                            "class": "ImageResource"
                                                           },
                                                           "yaw": 3.2,
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "pitch": -34.44,
                                                           "hfov": 14.27
                                                          }
                                                         ],
                                                         "maps": [
                                                          {
                                                           "image": {
                                                            "levels": [
                                                             {
                                                              "url": "media/panorama_53EE18E4_5500_90CC_41D3_5B2CF61F7EDF_0_HS_2_0_0_map.gif",
                                                              "height": 153,
                                                              "class": "ImageResourceLevel",
                                                              "width": 144
                                                             }
                                                            ],
                                                            "class": "ImageResource"
                                                           },
                                                           "pitch": -34.44,
                                                           "class": "HotspotPanoramaOverlayMap",
                                                           "yaw": 3.2,
                                                           "hfov": 14.27
                                                          }
                                                         ],
                                                         "enabledInCardboard": true
                                                        },
                                                        {
                                                         "rollOverDisplay": false,
                                                         "id": "overlay_5EDAC248_5500_93C4_41BF_9C53FACD6F24",
                                                         "class": "HotspotPanoramaOverlay",
                                                         "useHandCursor": true,
                                                         "areas": [
                                                          {
                                                           "mapColor": "#FF0000",
                                                           "click": "this.startPanoramaWithCamera(this.panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF, this.camera_525583AC_5E0E_9D67_41AA_EF3A0AE05A89); this.mainPlayList.set('selectedIndex', 8)",
                                                           "class": "HotspotPanoramaOverlayArea"
                                                          }
                                                         ],
                                                         "items": [
                                                          {
                                                           "image": {
                                                            "levels": [
                                                             {
                                                              "url": "media/panorama_53EE18E4_5500_90CC_41D3_5B2CF61F7EDF_0_HS_1_0.png",
                                                              "height": 240,
                                                              "class": "ImageResourceLevel",
                                                              "width": 300
                                                             }
                                                            ],
                                                            "class": "ImageResource"
                                                           },
                                                           "yaw": 173.93,
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "pitch": -29.28,
                                                           "hfov": 15.73
                                                          }
                                                         ],
                                                         "maps": [
                                                          {
                                                           "image": {
                                                            "levels": [
                                                             {
                                                              "url": "media/panorama_53EE18E4_5500_90CC_41D3_5B2CF61F7EDF_0_HS_1_0_0_map.gif",
                                                              "height": 120,
                                                              "class": "ImageResourceLevel",
                                                              "width": 150
                                                             }
                                                            ],
                                                            "class": "ImageResource"
                                                           },
                                                           "pitch": -29.28,
                                                           "class": "HotspotPanoramaOverlayMap",
                                                           "yaw": 173.93,
                                                           "hfov": 15.73
                                                          }
                                                         ],
                                                         "enabledInCardboard": true
                                                        },
                                                        {
                                                         "rollOverDisplay": false,
                                                         "id": "overlay_5901D992_5507_9144_41C1_6C6354E2C519",
                                                         "class": "HotspotPanoramaOverlay",
                                                         "useHandCursor": true,
                                                         "areas": [
                                                          {
                                                           "mapColor": "#FF0000",
                                                           "click": "this.mainPlayList.set('selectedIndex', 26)",
                                                           "class": "HotspotPanoramaOverlayArea"
                                                          }
                                                         ],
                                                         "items": [
                                                          {
                                                           "image": {
                                                            "levels": [
                                                             {
                                                              "url": "media/panorama_53EE18E4_5500_90CC_41D3_5B2CF61F7EDF_0_HS_0_0.png",
                                                              "height": 194,
                                                              "class": "ImageResourceLevel",
                                                              "width": 212
                                                             }
                                                            ],
                                                            "class": "ImageResource"
                                                           },
                                                           "yaw": -151.07,
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "pitch": -43.66,
                                                           "hfov": 9.22
                                                          }
                                                         ],
                                                         "maps": [
                                                          {
                                                           "image": {
                                                            "levels": [
                                                             {
                                                              "url": "media/panorama_53EE18E4_5500_90CC_41D3_5B2CF61F7EDF_0_HS_0_0_0_map.gif",
                                                              "height": 97,
                                                              "class": "ImageResourceLevel",
                                                              "width": 106
                                                             }
                                                            ],
                                                            "class": "ImageResource"
                                                           },
                                                           "pitch": -43.66,
                                                           "class": "HotspotPanoramaOverlayMap",
                                                           "yaw": -151.07,
                                                           "hfov": 9.22
                                                          }
                                                         ],
                                                         "enabledInCardboard": true
                                                        },
                                                        {
                                                         "image": {
                                                          "levels": [
                                                           {
                                                            "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                                                            "height": 900,
                                                            "class": "ImageResourceLevel",
                                                            "width": 900
                                                           }
                                                          ],
                                                          "class": "ImageResource"
                                                         },
                                                         "id": "panorama_53EE18E4_5500_90CC_41D3_5B2CF61F7EDF_tcap0",
                                                         "class": "TripodCapPanoramaOverlay",
                                                         "rotate": false,
                                                         "angle": 0,
                                                         "inertia": false,
                                                         "hfov": 36
                                                        }
                                                       ],
                                                       "right": {
                                                        "levels": [
                                                         {
                                                          "url": "media/panorama_53EE18E4_5500_90CC_41D3_5B2CF61F7EDF_r_hq.jpeg",
                                                          "height": 1904,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1904
                                                         },
                                                         {
                                                          "url": "media/panorama_53EE18E4_5500_90CC_41D3_5B2CF61F7EDF_r.jpeg",
                                                          "height": 1024,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1024
                                                         }
                                                        ],
                                                        "class": "ImageResource"
                                                       },
                                                       "front": {
                                                        "levels": [
                                                         {
                                                          "url": "media/panorama_53EE18E4_5500_90CC_41D3_5B2CF61F7EDF_f_hq.jpeg",
                                                          "height": 1904,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1904
                                                         },
                                                         {
                                                          "url": "media/panorama_53EE18E4_5500_90CC_41D3_5B2CF61F7EDF_f.jpeg",
                                                          "height": 1024,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1024
                                                         }
                                                        ],
                                                        "class": "ImageResource"
                                                       },
                                                       "class": "CubicPanoramaFrame",
                                                       "back": {
                                                        "levels": [
                                                         {
                                                          "url": "media/panorama_53EE18E4_5500_90CC_41D3_5B2CF61F7EDF_b_hq.jpeg",
                                                          "height": 1904,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1904
                                                         },
                                                         {
                                                          "url": "media/panorama_53EE18E4_5500_90CC_41D3_5B2CF61F7EDF_b.jpeg",
                                                          "height": 1024,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1024
                                                         }
                                                        ],
                                                        "class": "ImageResource"
                                                       },
                                                       "top": {
                                                        "levels": [
                                                         {
                                                          "url": "media/panorama_53EE18E4_5500_90CC_41D3_5B2CF61F7EDF_u_hq.jpeg",
                                                          "height": 1904,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1904
                                                         },
                                                         {
                                                          "url": "media/panorama_53EE18E4_5500_90CC_41D3_5B2CF61F7EDF_u.jpeg",
                                                          "height": 1024,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1024
                                                         }
                                                        ],
                                                        "class": "ImageResource"
                                                       },
                                                       "bottom": {
                                                        "levels": [
                                                         {
                                                          "url": "media/panorama_53EE18E4_5500_90CC_41D3_5B2CF61F7EDF_d_hq.jpeg",
                                                          "height": 1904,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1904
                                                         },
                                                         {
                                                          "url": "media/panorama_53EE18E4_5500_90CC_41D3_5B2CF61F7EDF_d.jpeg",
                                                          "height": 1024,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1024
                                                         }
                                                        ],
                                                        "class": "ImageResource"
                                                       },
                                                       "left": {
                                                        "levels": [
                                                         {
                                                          "url": "media/panorama_53EE18E4_5500_90CC_41D3_5B2CF61F7EDF_l_hq.jpeg",
                                                          "height": 1904,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1904
                                                         },
                                                         {
                                                          "url": "media/panorama_53EE18E4_5500_90CC_41D3_5B2CF61F7EDF_l.jpeg",
                                                          "height": 1024,
                                                          "class": "ImageResourceLevel",
                                                          "width": 1024
                                                         }
                                                        ],
                                                        "class": "ImageResource"
                                                       },
                                                       "thumbnailUrl": "media/panorama_53EE18E4_5500_90CC_41D3_5B2CF61F7EDF_t.jpg"
                                                      }
                                                     ],
                                                     "thumbnailUrl": "media/panorama_53EE18E4_5500_90CC_41D3_5B2CF61F7EDF_t.jpg",
                                                     "hfovMin": 60,
                                                     "pitch": 0,
                                                     "id": "panorama_53EE18E4_5500_90CC_41D3_5B2CF61F7EDF"
                                                    },
                                                    "backwardYaw": 173.93,
                                                    "class": "AdjacentPanorama",
                                                    "yaw": -0.35,
                                                    "distance": 1
                                                   }
                                                  ],
                                                  "label": "IMG_20190802_092943",
                                                  "hfovMax": 130,
                                                  "partial": false,
                                                  "class": "Panorama",
                                                  "hfov": 360,
                                                  "vfov": 180,
                                                  "frames": [
                                                   {
                                                    "overlays": [
                                                     {
                                                      "rollOverDisplay": false,
                                                      "id": "overlay_5EF67CB3_5500_9744_419C_0B1B62349356",
                                                      "class": "HotspotPanoramaOverlay",
                                                      "useHandCursor": true,
                                                      "areas": [
                                                       {
                                                        "mapColor": "#FF0000",
                                                        "click": "this.startPanoramaWithCamera(this.panorama_53EE18E4_5500_90CC_41D3_5B2CF61F7EDF, this.camera_555BB204_5E0E_9F27_41AB_65180D0B68EB); this.mainPlayList.set('selectedIndex', 7)",
                                                        "class": "HotspotPanoramaOverlayArea"
                                                       }
                                                      ],
                                                      "items": [
                                                       {
                                                        "image": {
                                                         "levels": [
                                                          {
                                                           "url": "media/panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF_0_HS_1_0.png",
                                                           "height": 283,
                                                           "class": "ImageResourceLevel",
                                                           "width": 413
                                                          }
                                                         ],
                                                         "class": "ImageResource"
                                                        },
                                                        "yaw": -0.35,
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "pitch": -21.97,
                                                        "hfov": 23.03
                                                       }
                                                      ],
                                                      "maps": [
                                                       {
                                                        "image": {
                                                         "levels": [
                                                          {
                                                           "url": "media/panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF_0_HS_1_0_0_map.gif",
                                                           "height": 136,
                                                           "class": "ImageResourceLevel",
                                                           "width": 200
                                                          }
                                                         ],
                                                         "class": "ImageResource"
                                                        },
                                                        "pitch": -21.97,
                                                        "class": "HotspotPanoramaOverlayMap",
                                                        "yaw": -0.35,
                                                        "hfov": 23.03
                                                       }
                                                      ],
                                                      "enabledInCardboard": true
                                                     },
                                                     {
                                                      "rollOverDisplay": false,
                                                      "id": "overlay_592B2CA2_5500_9744_41BC_FB43411B17D7",
                                                      "class": "HotspotPanoramaOverlay",
                                                      "useHandCursor": true,
                                                      "areas": [
                                                       {
                                                        "mapColor": "#FF0000",
                                                        "click": "this.startPanoramaWithCamera(this.panorama_40492156_5501_71CC_41D5_01C63B4ADFE3, this.camera_5548E1EF_5E0E_9CE1_41B2_060F3ED4B0AD); this.mainPlayList.set('selectedIndex', 30)",
                                                        "class": "HotspotPanoramaOverlayArea"
                                                       }
                                                      ],
                                                      "items": [
                                                       {
                                                        "image": {
                                                         "levels": [
                                                          {
                                                           "url": "media/panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF_0_HS_0_0.png",
                                                           "height": 267,
                                                           "class": "ImageResourceLevel",
                                                           "width": 281
                                                          }
                                                         ],
                                                         "class": "ImageResource"
                                                        },
                                                        "yaw": 93.6,
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "pitch": -26.91,
                                                        "hfov": 15.07
                                                       }
                                                      ],
                                                      "maps": [
                                                       {
                                                        "image": {
                                                         "levels": [
                                                          {
                                                           "url": "media/panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF_0_HS_0_0_0_map.gif",
                                                           "height": 133,
                                                           "class": "ImageResourceLevel",
                                                           "width": 140
                                                          }
                                                         ],
                                                         "class": "ImageResource"
                                                        },
                                                        "pitch": -26.91,
                                                        "class": "HotspotPanoramaOverlayMap",
                                                        "yaw": 93.6,
                                                        "hfov": 15.07
                                                       }
                                                      ],
                                                      "enabledInCardboard": true
                                                     },
                                                     {
                                                      "rollOverDisplay": false,
                                                      "id": "overlay_7FA489FD_5500_F0BC_41CD_9CF4F021763F",
                                                      "class": "HotspotPanoramaOverlay",
                                                      "useHandCursor": true,
                                                      "areas": [
                                                       {
                                                        "mapColor": "#FF0000",
                                                        "click": "this.startPanoramaWithCamera(this.panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF, this.camera_554261FA_5E0E_9CE3_41BE_744624F2D52C); this.mainPlayList.set('selectedIndex', 26)",
                                                        "class": "HotspotPanoramaOverlayArea"
                                                       }
                                                      ],
                                                      "items": [
                                                       {
                                                        "image": {
                                                         "levels": [
                                                          {
                                                           "url": "media/panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF_0_HS_2_0.png",
                                                           "height": 178,
                                                           "class": "ImageResourceLevel",
                                                           "width": 179
                                                          }
                                                         ],
                                                         "class": "ImageResource"
                                                        },
                                                        "yaw": -36.41,
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "pitch": -46.34,
                                                        "hfov": 7.44
                                                       }
                                                      ],
                                                      "maps": [
                                                       {
                                                        "image": {
                                                         "levels": [
                                                          {
                                                           "url": "media/panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF_0_HS_2_0_0_map.gif",
                                                           "height": 89,
                                                           "class": "ImageResourceLevel",
                                                           "width": 89
                                                          }
                                                         ],
                                                         "class": "ImageResource"
                                                        },
                                                        "pitch": -46.34,
                                                        "class": "HotspotPanoramaOverlayMap",
                                                        "yaw": -36.41,
                                                        "hfov": 7.44
                                                       }
                                                      ],
                                                      "enabledInCardboard": true
                                                     },
                                                     {
                                                      "image": {
                                                       "levels": [
                                                        {
                                                         "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                                                         "height": 900,
                                                         "class": "ImageResourceLevel",
                                                         "width": 900
                                                        }
                                                       ],
                                                       "class": "ImageResource"
                                                      },
                                                      "id": "panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF_tcap0",
                                                      "class": "TripodCapPanoramaOverlay",
                                                      "rotate": false,
                                                      "angle": 0,
                                                      "inertia": false,
                                                      "hfov": 36
                                                     }
                                                    ],
                                                    "right": {
                                                     "levels": [
                                                      {
                                                       "url": "media/panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF_r_hq.jpeg",
                                                       "height": 1904,
                                                       "class": "ImageResourceLevel",
                                                       "width": 1904
                                                      },
                                                      {
                                                       "url": "media/panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF_r.jpeg",
                                                       "height": 1024,
                                                       "class": "ImageResourceLevel",
                                                       "width": 1024
                                                      }
                                                     ],
                                                     "class": "ImageResource"
                                                    },
                                                    "front": {
                                                     "levels": [
                                                      {
                                                       "url": "media/panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF_f_hq.jpeg",
                                                       "height": 1904,
                                                       "class": "ImageResourceLevel",
                                                       "width": 1904
                                                      },
                                                      {
                                                       "url": "media/panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF_f.jpeg",
                                                       "height": 1024,
                                                       "class": "ImageResourceLevel",
                                                       "width": 1024
                                                      }
                                                     ],
                                                     "class": "ImageResource"
                                                    },
                                                    "class": "CubicPanoramaFrame",
                                                    "back": {
                                                     "levels": [
                                                      {
                                                       "url": "media/panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF_b_hq.jpeg",
                                                       "height": 1904,
                                                       "class": "ImageResourceLevel",
                                                       "width": 1904
                                                      },
                                                      {
                                                       "url": "media/panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF_b.jpeg",
                                                       "height": 1024,
                                                       "class": "ImageResourceLevel",
                                                       "width": 1024
                                                      }
                                                     ],
                                                     "class": "ImageResource"
                                                    },
                                                    "top": {
                                                     "levels": [
                                                      {
                                                       "url": "media/panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF_u_hq.jpeg",
                                                       "height": 1904,
                                                       "class": "ImageResourceLevel",
                                                       "width": 1904
                                                      },
                                                      {
                                                       "url": "media/panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF_u.jpeg",
                                                       "height": 1024,
                                                       "class": "ImageResourceLevel",
                                                       "width": 1024
                                                      }
                                                     ],
                                                     "class": "ImageResource"
                                                    },
                                                    "bottom": {
                                                     "levels": [
                                                      {
                                                       "url": "media/panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF_d_hq.jpeg",
                                                       "height": 1904,
                                                       "class": "ImageResourceLevel",
                                                       "width": 1904
                                                      },
                                                      {
                                                       "url": "media/panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF_d.jpeg",
                                                       "height": 1024,
                                                       "class": "ImageResourceLevel",
                                                       "width": 1024
                                                      }
                                                     ],
                                                     "class": "ImageResource"
                                                    },
                                                    "left": {
                                                     "levels": [
                                                      {
                                                       "url": "media/panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF_l_hq.jpeg",
                                                       "height": 1904,
                                                       "class": "ImageResourceLevel",
                                                       "width": 1904
                                                      },
                                                      {
                                                       "url": "media/panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF_l.jpeg",
                                                       "height": 1024,
                                                       "class": "ImageResourceLevel",
                                                       "width": 1024
                                                      }
                                                     ],
                                                     "class": "ImageResource"
                                                    },
                                                    "thumbnailUrl": "media/panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF_t.jpg"
                                                   }
                                                  ],
                                                  "thumbnailUrl": "media/panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF_t.jpg",
                                                  "hfovMin": 60,
                                                  "pitch": 0,
                                                  "id": "panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF"
                                                 },
                                                 "backwardYaw": 93.6,
                                                 "class": "AdjacentPanorama",
                                                 "yaw": -132.83,
                                                 "distance": 1
                                                }
                                               ],
                                               "label": "IMG_20190802_093247",
                                               "hfovMax": 130,
                                               "partial": false,
                                               "class": "Panorama",
                                               "hfov": 360,
                                               "vfov": 180,
                                               "frames": [
                                                {
                                                 "overlays": [
                                                  {
                                                   "rollOverDisplay": false,
                                                   "id": "overlay_4165ABB5_5500_914C_41B1_47DA00437CFE",
                                                   "class": "HotspotPanoramaOverlay",
                                                   "useHandCursor": true,
                                                   "areas": [
                                                    {
                                                     "mapColor": "#FF0000",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A, this.camera_553E31CF_5E0E_9D21_41C1_F345856118C2); this.mainPlayList.set('selectedIndex', 32)",
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    }
                                                   ],
                                                   "items": [
                                                    {
                                                     "image": {
                                                      "levels": [
                                                       {
                                                        "url": "media/panorama_40492156_5501_71CC_41D5_01C63B4ADFE3_0_HS_2_0.png",
                                                        "height": 188,
                                                        "class": "ImageResourceLevel",
                                                        "width": 278
                                                       }
                                                      ],
                                                      "class": "ImageResource"
                                                     },
                                                     "yaw": -13.24,
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "pitch": -36.13,
                                                     "hfov": 13.5
                                                    }
                                                   ],
                                                   "maps": [
                                                    {
                                                     "image": {
                                                      "levels": [
                                                       {
                                                        "url": "media/panorama_40492156_5501_71CC_41D5_01C63B4ADFE3_0_HS_2_0_0_map.gif",
                                                        "height": 94,
                                                        "class": "ImageResourceLevel",
                                                        "width": 139
                                                       }
                                                      ],
                                                      "class": "ImageResource"
                                                     },
                                                     "pitch": -36.13,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "yaw": -13.24,
                                                     "hfov": 13.5
                                                    }
                                                   ],
                                                   "enabledInCardboard": true
                                                  },
                                                  {
                                                   "rollOverDisplay": false,
                                                   "id": "overlay_410F5119_5500_9144_41D3_DC944C62D550",
                                                   "class": "HotspotPanoramaOverlay",
                                                   "useHandCursor": true,
                                                   "areas": [
                                                    {
                                                     "mapColor": "#FF0000",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF, this.camera_553661E4_5E0E_9CE7_41D0_A15E27D73F49); this.mainPlayList.set('selectedIndex', 8)",
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    }
                                                   ],
                                                   "items": [
                                                    {
                                                     "image": {
                                                      "levels": [
                                                       {
                                                        "url": "media/panorama_40492156_5501_71CC_41D5_01C63B4ADFE3_0_HS_1_0.png",
                                                        "height": 230,
                                                        "class": "ImageResourceLevel",
                                                        "width": 205
                                                       }
                                                      ],
                                                      "class": "ImageResource"
                                                     },
                                                     "yaw": -132.83,
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "pitch": -53.56,
                                                     "hfov": 7.34
                                                    }
                                                   ],
                                                   "maps": [
                                                    {
                                                     "image": {
                                                      "levels": [
                                                       {
                                                        "url": "media/panorama_40492156_5501_71CC_41D5_01C63B4ADFE3_0_HS_1_0_0_map.gif",
                                                        "height": 115,
                                                        "class": "ImageResourceLevel",
                                                        "width": 102
                                                       }
                                                      ],
                                                      "class": "ImageResource"
                                                     },
                                                     "pitch": -53.56,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "yaw": -132.83,
                                                     "hfov": 7.34
                                                    }
                                                   ],
                                                   "enabledInCardboard": true
                                                  },
                                                  {
                                                   "rollOverDisplay": false,
                                                   "id": "overlay_41A6DC88_5501_9744_41B6_32441AB240B8",
                                                   "class": "HotspotPanoramaOverlay",
                                                   "useHandCursor": true,
                                                   "areas": [
                                                    {
                                                     "mapColor": "#FF0000",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_41290414_5503_774C_41B0_543B0B17685E, this.camera_5531B1D9_5E0E_9D21_41C8_30CDE98945F2); this.mainPlayList.set('selectedIndex', 33)",
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    }
                                                   ],
                                                   "items": [
                                                    {
                                                     "image": {
                                                      "levels": [
                                                       {
                                                        "url": "media/panorama_40492156_5501_71CC_41D5_01C63B4ADFE3_0_HS_0_0.png",
                                                        "height": 148,
                                                        "class": "ImageResourceLevel",
                                                        "width": 149
                                                       }
                                                      ],
                                                      "class": "ImageResource"
                                                     },
                                                     "yaw": 50.24,
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "pitch": -31.28,
                                                     "hfov": 7.68
                                                    }
                                                   ],
                                                   "maps": [
                                                    {
                                                     "image": {
                                                      "levels": [
                                                       {
                                                        "url": "media/panorama_40492156_5501_71CC_41D5_01C63B4ADFE3_0_HS_0_0_0_map.gif",
                                                        "height": 74,
                                                        "class": "ImageResourceLevel",
                                                        "width": 74
                                                       }
                                                      ],
                                                      "class": "ImageResource"
                                                     },
                                                     "pitch": -31.28,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "yaw": 50.24,
                                                     "hfov": 7.68
                                                    }
                                                   ],
                                                   "enabledInCardboard": true
                                                  },
                                                  {
                                                   "image": {
                                                    "levels": [
                                                     {
                                                      "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                                                      "height": 900,
                                                      "class": "ImageResourceLevel",
                                                      "width": 900
                                                     }
                                                    ],
                                                    "class": "ImageResource"
                                                   },
                                                   "id": "panorama_40492156_5501_71CC_41D5_01C63B4ADFE3_tcap0",
                                                   "class": "TripodCapPanoramaOverlay",
                                                   "rotate": false,
                                                   "angle": 0,
                                                   "inertia": false,
                                                   "hfov": 36
                                                  }
                                                 ],
                                                 "right": {
                                                  "levels": [
                                                   {
                                                    "url": "media/panorama_40492156_5501_71CC_41D5_01C63B4ADFE3_r_hq.jpeg",
                                                    "height": 1904,
                                                    "class": "ImageResourceLevel",
                                                    "width": 1904
                                                   },
                                                   {
                                                    "url": "media/panorama_40492156_5501_71CC_41D5_01C63B4ADFE3_r.jpeg",
                                                    "height": 1024,
                                                    "class": "ImageResourceLevel",
                                                    "width": 1024
                                                   }
                                                  ],
                                                  "class": "ImageResource"
                                                 },
                                                 "front": {
                                                  "levels": [
                                                   {
                                                    "url": "media/panorama_40492156_5501_71CC_41D5_01C63B4ADFE3_f_hq.jpeg",
                                                    "height": 1904,
                                                    "class": "ImageResourceLevel",
                                                    "width": 1904
                                                   },
                                                   {
                                                    "url": "media/panorama_40492156_5501_71CC_41D5_01C63B4ADFE3_f.jpeg",
                                                    "height": 1024,
                                                    "class": "ImageResourceLevel",
                                                    "width": 1024
                                                   }
                                                  ],
                                                  "class": "ImageResource"
                                                 },
                                                 "class": "CubicPanoramaFrame",
                                                 "back": {
                                                  "levels": [
                                                   {
                                                    "url": "media/panorama_40492156_5501_71CC_41D5_01C63B4ADFE3_b_hq.jpeg",
                                                    "height": 1904,
                                                    "class": "ImageResourceLevel",
                                                    "width": 1904
                                                   },
                                                   {
                                                    "url": "media/panorama_40492156_5501_71CC_41D5_01C63B4ADFE3_b.jpeg",
                                                    "height": 1024,
                                                    "class": "ImageResourceLevel",
                                                    "width": 1024
                                                   }
                                                  ],
                                                  "class": "ImageResource"
                                                 },
                                                 "top": {
                                                  "levels": [
                                                   {
                                                    "url": "media/panorama_40492156_5501_71CC_41D5_01C63B4ADFE3_u_hq.jpeg",
                                                    "height": 1904,
                                                    "class": "ImageResourceLevel",
                                                    "width": 1904
                                                   },
                                                   {
                                                    "url": "media/panorama_40492156_5501_71CC_41D5_01C63B4ADFE3_u.jpeg",
                                                    "height": 1024,
                                                    "class": "ImageResourceLevel",
                                                    "width": 1024
                                                   }
                                                  ],
                                                  "class": "ImageResource"
                                                 },
                                                 "bottom": {
                                                  "levels": [
                                                   {
                                                    "url": "media/panorama_40492156_5501_71CC_41D5_01C63B4ADFE3_d_hq.jpeg",
                                                    "height": 1904,
                                                    "class": "ImageResourceLevel",
                                                    "width": 1904
                                                   },
                                                   {
                                                    "url": "media/panorama_40492156_5501_71CC_41D5_01C63B4ADFE3_d.jpeg",
                                                    "height": 1024,
                                                    "class": "ImageResourceLevel",
                                                    "width": 1024
                                                   }
                                                  ],
                                                  "class": "ImageResource"
                                                 },
                                                 "left": {
                                                  "levels": [
                                                   {
                                                    "url": "media/panorama_40492156_5501_71CC_41D5_01C63B4ADFE3_l_hq.jpeg",
                                                    "height": 1904,
                                                    "class": "ImageResourceLevel",
                                                    "width": 1904
                                                   },
                                                   {
                                                    "url": "media/panorama_40492156_5501_71CC_41D5_01C63B4ADFE3_l.jpeg",
                                                    "height": 1024,
                                                    "class": "ImageResourceLevel",
                                                    "width": 1024
                                                   }
                                                  ],
                                                  "class": "ImageResource"
                                                 },
                                                 "thumbnailUrl": "media/panorama_40492156_5501_71CC_41D5_01C63B4ADFE3_t.jpg"
                                                }
                                               ],
                                               "thumbnailUrl": "media/panorama_40492156_5501_71CC_41D5_01C63B4ADFE3_t.jpg",
                                               "hfovMin": 60,
                                               "pitch": 0,
                                               "id": "panorama_40492156_5501_71CC_41D5_01C63B4ADFE3"
                                              },
                                              "backwardYaw": 50.24,
                                              "class": "AdjacentPanorama",
                                              "yaw": 130.52,
                                              "distance": 1
                                             },
                                             {
                                              "panorama": "this.panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A",
                                              "backwardYaw": 40.32,
                                              "class": "AdjacentPanorama",
                                              "yaw": -154.12,
                                              "distance": 1
                                             },
                                             {
                                              "panorama": "this.panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4",
                                              "backwardYaw": -173.95,
                                              "class": "AdjacentPanorama",
                                              "yaw": 0.24,
                                              "distance": 1
                                             }
                                            ],
                                            "label": "IMG_20190802_093335",
                                            "hfovMax": 130,
                                            "partial": false,
                                            "class": "Panorama",
                                            "hfov": 360,
                                            "vfov": 180,
                                            "frames": [
                                             {
                                              "overlays": [
                                               {
                                                "rollOverDisplay": false,
                                                "id": "overlay_4024572E_5500_915C_4199_8C0997813200",
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4, this.camera_52322373_5E0E_9DE2_41D6_5EFFDC5AF17D); this.mainPlayList.set('selectedIndex', 34)",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_41290414_5503_774C_41B0_543B0B17685E_0_HS_2_0.png",
                                                     "height": 207,
                                                     "class": "ImageResourceLevel",
                                                     "width": 205
                                                    }
                                                   ],
                                                   "class": "ImageResource"
                                                  },
                                                  "yaw": 0.24,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "pitch": -27.88,
                                                  "hfov": 10.93
                                                 }
                                                ],
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_41290414_5503_774C_41B0_543B0B17685E_0_HS_2_0_0_map.gif",
                                                     "height": 103,
                                                     "class": "ImageResourceLevel",
                                                     "width": 102
                                                    }
                                                   ],
                                                   "class": "ImageResource"
                                                  },
                                                  "pitch": -27.88,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": 0.24,
                                                  "hfov": 10.93
                                                 }
                                                ],
                                                "enabledInCardboard": true
                                               },
                                               {
                                                "rollOverDisplay": false,
                                                "id": "overlay_438900C7_5500_90CC_41D0_39CEA5ECB1E9",
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_40492156_5501_71CC_41D5_01C63B4ADFE3, this.camera_52216358_5E0E_9D2F_41BF_D736A8DCA4B8); this.mainPlayList.set('selectedIndex', 30)",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_41290414_5503_774C_41B0_543B0B17685E_0_HS_1_0.png",
                                                     "height": 211,
                                                     "class": "ImageResourceLevel",
                                                     "width": 169
                                                    }
                                                   ],
                                                   "class": "ImageResource"
                                                  },
                                                  "yaw": 130.52,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "pitch": -26.4,
                                                  "hfov": 9.12
                                                 }
                                                ],
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_41290414_5503_774C_41B0_543B0B17685E_0_HS_1_0_0_map.gif",
                                                     "height": 105,
                                                     "class": "ImageResourceLevel",
                                                     "width": 84
                                                    }
                                                   ],
                                                   "class": "ImageResource"
                                                  },
                                                  "pitch": -26.4,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": 130.52,
                                                  "hfov": 9.12
                                                 }
                                                ],
                                                "enabledInCardboard": true
                                               },
                                               {
                                                "rollOverDisplay": false,
                                                "id": "overlay_43A9030C_5503_715C_4195_053C68E09029",
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A, this.camera_52399363_5E0E_9DE1_41BC_0FC0F6856B80); this.mainPlayList.set('selectedIndex', 32)",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_41290414_5503_774C_41B0_543B0B17685E_0_HS_0_0.png",
                                                     "height": 188,
                                                     "class": "ImageResourceLevel",
                                                     "width": 199
                                                    }
                                                   ],
                                                   "class": "ImageResource"
                                                  },
                                                  "yaw": -154.12,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "pitch": -30.98,
                                                  "hfov": 10.25
                                                 }
                                                ],
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_41290414_5503_774C_41B0_543B0B17685E_0_HS_0_0_0_map.gif",
                                                     "height": 94,
                                                     "class": "ImageResourceLevel",
                                                     "width": 99
                                                    }
                                                   ],
                                                   "class": "ImageResource"
                                                  },
                                                  "pitch": -30.98,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -154.12,
                                                  "hfov": 10.25
                                                 }
                                                ],
                                                "enabledInCardboard": true
                                               },
                                               {
                                                "image": {
                                                 "levels": [
                                                  {
                                                   "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                                                   "height": 900,
                                                   "class": "ImageResourceLevel",
                                                   "width": 900
                                                  }
                                                 ],
                                                 "class": "ImageResource"
                                                },
                                                "id": "panorama_41290414_5503_774C_41B0_543B0B17685E_tcap0",
                                                "class": "TripodCapPanoramaOverlay",
                                                "rotate": false,
                                                "angle": 0,
                                                "inertia": false,
                                                "hfov": 36
                                               }
                                              ],
                                              "right": {
                                               "levels": [
                                                {
                                                 "url": "media/panorama_41290414_5503_774C_41B0_543B0B17685E_r_hq.jpeg",
                                                 "height": 1904,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1904
                                                },
                                                {
                                                 "url": "media/panorama_41290414_5503_774C_41B0_543B0B17685E_r.jpeg",
                                                 "height": 1024,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1024
                                                }
                                               ],
                                               "class": "ImageResource"
                                              },
                                              "front": {
                                               "levels": [
                                                {
                                                 "url": "media/panorama_41290414_5503_774C_41B0_543B0B17685E_f_hq.jpeg",
                                                 "height": 1904,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1904
                                                },
                                                {
                                                 "url": "media/panorama_41290414_5503_774C_41B0_543B0B17685E_f.jpeg",
                                                 "height": 1024,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1024
                                                }
                                               ],
                                               "class": "ImageResource"
                                              },
                                              "class": "CubicPanoramaFrame",
                                              "back": {
                                               "levels": [
                                                {
                                                 "url": "media/panorama_41290414_5503_774C_41B0_543B0B17685E_b_hq.jpeg",
                                                 "height": 1904,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1904
                                                },
                                                {
                                                 "url": "media/panorama_41290414_5503_774C_41B0_543B0B17685E_b.jpeg",
                                                 "height": 1024,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1024
                                                }
                                               ],
                                               "class": "ImageResource"
                                              },
                                              "top": {
                                               "levels": [
                                                {
                                                 "url": "media/panorama_41290414_5503_774C_41B0_543B0B17685E_u_hq.jpeg",
                                                 "height": 1904,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1904
                                                },
                                                {
                                                 "url": "media/panorama_41290414_5503_774C_41B0_543B0B17685E_u.jpeg",
                                                 "height": 1024,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1024
                                                }
                                               ],
                                               "class": "ImageResource"
                                              },
                                              "bottom": {
                                               "levels": [
                                                {
                                                 "url": "media/panorama_41290414_5503_774C_41B0_543B0B17685E_d_hq.jpeg",
                                                 "height": 1904,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1904
                                                },
                                                {
                                                 "url": "media/panorama_41290414_5503_774C_41B0_543B0B17685E_d.jpeg",
                                                 "height": 1024,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1024
                                                }
                                               ],
                                               "class": "ImageResource"
                                              },
                                              "left": {
                                               "levels": [
                                                {
                                                 "url": "media/panorama_41290414_5503_774C_41B0_543B0B17685E_l_hq.jpeg",
                                                 "height": 1904,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1904
                                                },
                                                {
                                                 "url": "media/panorama_41290414_5503_774C_41B0_543B0B17685E_l.jpeg",
                                                 "height": 1024,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1024
                                                }
                                               ],
                                               "class": "ImageResource"
                                              },
                                              "thumbnailUrl": "media/panorama_41290414_5503_774C_41B0_543B0B17685E_t.jpg"
                                             }
                                            ],
                                            "thumbnailUrl": "media/panorama_41290414_5503_774C_41B0_543B0B17685E_t.jpg",
                                            "hfovMin": 60,
                                            "pitch": 0,
                                            "id": "panorama_41290414_5503_774C_41B0_543B0B17685E"
                                           },
                                           "backwardYaw": 0.24,
                                           "class": "AdjacentPanorama",
                                           "yaw": -173.95,
                                           "distance": 1
                                          },
                                          {
                                           "panorama": {
                                            "adjacentPanoramas": [
                                             {
                                              "panorama": "this.panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4",
                                              "backwardYaw": -4.62,
                                              "class": "AdjacentPanorama",
                                              "yaw": -167.39,
                                              "distance": 1
                                             }
                                            ],
                                            "label": "IMG_20190802_093421",
                                            "hfovMax": 130,
                                            "partial": false,
                                            "class": "Panorama",
                                            "hfov": 360,
                                            "vfov": 180,
                                            "frames": [
                                             {
                                              "overlays": [
                                               {
                                                "rollOverDisplay": false,
                                                "id": "overlay_49F3D91C_5500_B17C_41A9_C1BC73B6C16E",
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4, this.camera_556555E2_5E0E_84E2_4199_345394E87F79); this.mainPlayList.set('selectedIndex', 34)",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_47FAA959_5503_91C4_41CB_3D2C35DE3D90_0_HS_2_0.png",
                                                     "height": 274,
                                                     "class": "ImageResourceLevel",
                                                     "width": 275
                                                    }
                                                   ],
                                                   "class": "ImageResource"
                                                  },
                                                  "yaw": -167.39,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "pitch": -49.2,
                                                  "hfov": 10.79
                                                 }
                                                ],
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_47FAA959_5503_91C4_41CB_3D2C35DE3D90_0_HS_2_0_0_map.gif",
                                                     "height": 137,
                                                     "class": "ImageResourceLevel",
                                                     "width": 137
                                                    }
                                                   ],
                                                   "class": "ImageResource"
                                                  },
                                                  "pitch": -49.2,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -167.39,
                                                  "hfov": 10.79
                                                 }
                                                ],
                                                "enabledInCardboard": true
                                               },
                                               {
                                                "rollOverDisplay": false,
                                                "id": "overlay_49C46FCB_5503_F0C4_41D3_62305DFB2709",
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "click": "this.mainPlayList.set('selectedIndex', 36)",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_47FAA959_5503_91C4_41CB_3D2C35DE3D90_0_HS_1_0.png",
                                                     "height": 244,
                                                     "class": "ImageResourceLevel",
                                                     "width": 232
                                                    }
                                                   ],
                                                   "class": "ImageResource"
                                                  },
                                                  "yaw": 123.4,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "pitch": -21.27,
                                                  "hfov": 12.98
                                                 }
                                                ],
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_47FAA959_5503_91C4_41CB_3D2C35DE3D90_0_HS_1_0_0_map.gif",
                                                     "height": 122,
                                                     "class": "ImageResourceLevel",
                                                     "width": 116
                                                    }
                                                   ],
                                                   "class": "ImageResource"
                                                  },
                                                  "pitch": -21.27,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": 123.4,
                                                  "hfov": 12.98
                                                 }
                                                ],
                                                "enabledInCardboard": true
                                               },
                                               {
                                                "rollOverDisplay": false,
                                                "id": "overlay_49727ACF_5500_F0DC_41B5_334C8AC5952A",
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true,
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "click": "this.mainPlayList.set('selectedIndex', 56)",
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_47FAA959_5503_91C4_41CB_3D2C35DE3D90_0_HS_0_0.png",
                                                     "height": 211,
                                                     "class": "ImageResourceLevel",
                                                     "width": 235
                                                    }
                                                   ],
                                                   "class": "ImageResource"
                                                  },
                                                  "yaw": -0.06,
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "pitch": -27.59,
                                                  "hfov": 12.53
                                                 }
                                                ],
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "url": "media/panorama_47FAA959_5503_91C4_41CB_3D2C35DE3D90_0_HS_0_0_0_map.gif",
                                                     "height": 105,
                                                     "class": "ImageResourceLevel",
                                                     "width": 117
                                                    }
                                                   ],
                                                   "class": "ImageResource"
                                                  },
                                                  "pitch": -27.59,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -0.06,
                                                  "hfov": 12.53
                                                 }
                                                ],
                                                "enabledInCardboard": true
                                               },
                                               {
                                                "image": {
                                                 "levels": [
                                                  {
                                                   "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                                                   "height": 900,
                                                   "class": "ImageResourceLevel",
                                                   "width": 900
                                                  }
                                                 ],
                                                 "class": "ImageResource"
                                                },
                                                "id": "panorama_47FAA959_5503_91C4_41CB_3D2C35DE3D90_tcap0",
                                                "class": "TripodCapPanoramaOverlay",
                                                "rotate": false,
                                                "angle": 0,
                                                "inertia": false,
                                                "hfov": 36
                                               }
                                              ],
                                              "right": {
                                               "levels": [
                                                {
                                                 "url": "media/panorama_47FAA959_5503_91C4_41CB_3D2C35DE3D90_r_hq.jpeg",
                                                 "height": 1904,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1904
                                                },
                                                {
                                                 "url": "media/panorama_47FAA959_5503_91C4_41CB_3D2C35DE3D90_r.jpeg",
                                                 "height": 1024,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1024
                                                }
                                               ],
                                               "class": "ImageResource"
                                              },
                                              "front": {
                                               "levels": [
                                                {
                                                 "url": "media/panorama_47FAA959_5503_91C4_41CB_3D2C35DE3D90_f_hq.jpeg",
                                                 "height": 1904,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1904
                                                },
                                                {
                                                 "url": "media/panorama_47FAA959_5503_91C4_41CB_3D2C35DE3D90_f.jpeg",
                                                 "height": 1024,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1024
                                                }
                                               ],
                                               "class": "ImageResource"
                                              },
                                              "class": "CubicPanoramaFrame",
                                              "back": {
                                               "levels": [
                                                {
                                                 "url": "media/panorama_47FAA959_5503_91C4_41CB_3D2C35DE3D90_b_hq.jpeg",
                                                 "height": 1904,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1904
                                                },
                                                {
                                                 "url": "media/panorama_47FAA959_5503_91C4_41CB_3D2C35DE3D90_b.jpeg",
                                                 "height": 1024,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1024
                                                }
                                               ],
                                               "class": "ImageResource"
                                              },
                                              "top": {
                                               "levels": [
                                                {
                                                 "url": "media/panorama_47FAA959_5503_91C4_41CB_3D2C35DE3D90_u_hq.jpeg",
                                                 "height": 1904,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1904
                                                },
                                                {
                                                 "url": "media/panorama_47FAA959_5503_91C4_41CB_3D2C35DE3D90_u.jpeg",
                                                 "height": 1024,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1024
                                                }
                                               ],
                                               "class": "ImageResource"
                                              },
                                              "bottom": {
                                               "levels": [
                                                {
                                                 "url": "media/panorama_47FAA959_5503_91C4_41CB_3D2C35DE3D90_d_hq.jpeg",
                                                 "height": 1904,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1904
                                                },
                                                {
                                                 "url": "media/panorama_47FAA959_5503_91C4_41CB_3D2C35DE3D90_d.jpeg",
                                                 "height": 1024,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1024
                                                }
                                               ],
                                               "class": "ImageResource"
                                              },
                                              "left": {
                                               "levels": [
                                                {
                                                 "url": "media/panorama_47FAA959_5503_91C4_41CB_3D2C35DE3D90_l_hq.jpeg",
                                                 "height": 1904,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1904
                                                },
                                                {
                                                 "url": "media/panorama_47FAA959_5503_91C4_41CB_3D2C35DE3D90_l.jpeg",
                                                 "height": 1024,
                                                 "class": "ImageResourceLevel",
                                                 "width": 1024
                                                }
                                               ],
                                               "class": "ImageResource"
                                              },
                                              "thumbnailUrl": "media/panorama_47FAA959_5503_91C4_41CB_3D2C35DE3D90_t.jpg"
                                             }
                                            ],
                                            "thumbnailUrl": "media/panorama_47FAA959_5503_91C4_41CB_3D2C35DE3D90_t.jpg",
                                            "hfovMin": 60,
                                            "pitch": 0,
                                            "id": "panorama_47FAA959_5503_91C4_41CB_3D2C35DE3D90"
                                           },
                                           "backwardYaw": -167.39,
                                           "class": "AdjacentPanorama",
                                           "yaw": -4.62,
                                           "distance": 1
                                          },
                                          {
                                           "panorama": "this.panorama_47FAD277_5503_B3CC_415F_3731B40A5465",
                                           "backwardYaw": -0.67,
                                           "class": "AdjacentPanorama",
                                           "yaw": 78.25,
                                           "distance": 1
                                          }
                                         ],
                                         "label": "IMG_20190802_093351",
                                         "hfovMax": 130,
                                         "partial": false,
                                         "class": "Panorama",
                                         "hfov": 360,
                                         "vfov": 180,
                                         "frames": [
                                          {
                                           "overlays": [
                                            {
                                             "rollOverDisplay": false,
                                             "id": "overlay_431F91B9_5501_B147_41D2_46E39B6265EF",
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_47FAA959_5503_91C4_41CB_3D2C35DE3D90, this.camera_5527D57A_5E0E_85E2_41CE_3EDE39BEC227); this.mainPlayList.set('selectedIndex', 35)",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4_0_HS_2_0.png",
                                                  "height": 224,
                                                  "class": "ImageResourceLevel",
                                                  "width": 186
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "yaw": -4.62,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -23.06,
                                               "hfov": 10.28
                                              }
                                             ],
                                             "maps": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4_0_HS_2_0_0_map.gif",
                                                  "height": 112,
                                                  "class": "ImageResourceLevel",
                                                  "width": 93
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "pitch": -23.06,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -4.62,
                                               "hfov": 10.28
                                              }
                                             ],
                                             "enabledInCardboard": true
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "id": "overlay_43793018_5500_8F44_41B9_A979FBA7346A",
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_41290414_5503_774C_41B0_543B0B17685E, this.camera_552CB570_5E0E_85FF_41B4_1E17133F3DE4); this.mainPlayList.set('selectedIndex', 33)",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4_0_HS_1_0.png",
                                                  "height": 211,
                                                  "class": "ImageResourceLevel",
                                                  "width": 189
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "yaw": -173.95,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -30.1,
                                               "hfov": 9.83
                                              }
                                             ],
                                             "maps": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4_0_HS_1_0_0_map.gif",
                                                  "height": 105,
                                                  "class": "ImageResourceLevel",
                                                  "width": 94
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "pitch": -30.1,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -173.95,
                                               "hfov": 9.83
                                              }
                                             ],
                                             "enabledInCardboard": true
                                            },
                                            {
                                             "rollOverDisplay": false,
                                             "id": "overlay_4287162C_5507_935C_41D4_119D00550623",
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true,
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "click": "this.startPanoramaWithCamera(this.panorama_47FAD277_5503_B3CC_415F_3731B40A5465, this.camera_553B8583_5E0E_8521_41C5_526F84E561E0); this.mainPlayList.set('selectedIndex', 36)",
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "items": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4_0_HS_0_0.png",
                                                  "height": 148,
                                                  "class": "ImageResourceLevel",
                                                  "width": 149
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "yaw": 78.25,
                                               "class": "HotspotPanoramaOverlayImage",
                                               "pitch": -15.04,
                                               "hfov": 8.68
                                              }
                                             ],
                                             "maps": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "url": "media/panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4_0_HS_0_0_0_map.gif",
                                                  "height": 74,
                                                  "class": "ImageResourceLevel",
                                                  "width": 74
                                                 }
                                                ],
                                                "class": "ImageResource"
                                               },
                                               "pitch": -15.04,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 78.25,
                                               "hfov": 8.68
                                              }
                                             ],
                                             "enabledInCardboard": true
                                            },
                                            {
                                             "image": {
                                              "levels": [
                                               {
                                                "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                                                "height": 900,
                                                "class": "ImageResourceLevel",
                                                "width": 900
                                               }
                                              ],
                                              "class": "ImageResource"
                                             },
                                             "id": "panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4_tcap0",
                                             "class": "TripodCapPanoramaOverlay",
                                             "rotate": false,
                                             "angle": 0,
                                             "inertia": false,
                                             "hfov": 36
                                            }
                                           ],
                                           "right": {
                                            "levels": [
                                             {
                                              "url": "media/panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4_r_hq.jpeg",
                                              "height": 1904,
                                              "class": "ImageResourceLevel",
                                              "width": 1904
                                             },
                                             {
                                              "url": "media/panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4_r.jpeg",
                                              "height": 1024,
                                              "class": "ImageResourceLevel",
                                              "width": 1024
                                             }
                                            ],
                                            "class": "ImageResource"
                                           },
                                           "front": {
                                            "levels": [
                                             {
                                              "url": "media/panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4_f_hq.jpeg",
                                              "height": 1904,
                                              "class": "ImageResourceLevel",
                                              "width": 1904
                                             },
                                             {
                                              "url": "media/panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4_f.jpeg",
                                              "height": 1024,
                                              "class": "ImageResourceLevel",
                                              "width": 1024
                                             }
                                            ],
                                            "class": "ImageResource"
                                           },
                                           "class": "CubicPanoramaFrame",
                                           "back": {
                                            "levels": [
                                             {
                                              "url": "media/panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4_b_hq.jpeg",
                                              "height": 1904,
                                              "class": "ImageResourceLevel",
                                              "width": 1904
                                             },
                                             {
                                              "url": "media/panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4_b.jpeg",
                                              "height": 1024,
                                              "class": "ImageResourceLevel",
                                              "width": 1024
                                             }
                                            ],
                                            "class": "ImageResource"
                                           },
                                           "top": {
                                            "levels": [
                                             {
                                              "url": "media/panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4_u_hq.jpeg",
                                              "height": 1904,
                                              "class": "ImageResourceLevel",
                                              "width": 1904
                                             },
                                             {
                                              "url": "media/panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4_u.jpeg",
                                              "height": 1024,
                                              "class": "ImageResourceLevel",
                                              "width": 1024
                                             }
                                            ],
                                            "class": "ImageResource"
                                           },
                                           "bottom": {
                                            "levels": [
                                             {
                                              "url": "media/panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4_d_hq.jpeg",
                                              "height": 1904,
                                              "class": "ImageResourceLevel",
                                              "width": 1904
                                             },
                                             {
                                              "url": "media/panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4_d.jpeg",
                                              "height": 1024,
                                              "class": "ImageResourceLevel",
                                              "width": 1024
                                             }
                                            ],
                                            "class": "ImageResource"
                                           },
                                           "left": {
                                            "levels": [
                                             {
                                              "url": "media/panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4_l_hq.jpeg",
                                              "height": 1904,
                                              "class": "ImageResourceLevel",
                                              "width": 1904
                                             },
                                             {
                                              "url": "media/panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4_l.jpeg",
                                              "height": 1024,
                                              "class": "ImageResourceLevel",
                                              "width": 1024
                                             }
                                            ],
                                            "class": "ImageResource"
                                           },
                                           "thumbnailUrl": "media/panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4_t.jpg"
                                          }
                                         ],
                                         "thumbnailUrl": "media/panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4_t.jpg",
                                         "hfovMin": 60,
                                         "pitch": 0,
                                         "id": "panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4"
                                        },
                                        "backwardYaw": 78.25,
                                        "class": "AdjacentPanorama",
                                        "yaw": -0.67,
                                        "distance": 1
                                       },
                                       {
                                        "panorama": "this.panorama_47FA2495_5503_974C_41CC_9F969CC7EE77",
                                        "backwardYaw": 14.19,
                                        "class": "AdjacentPanorama",
                                        "yaw": -161.55,
                                        "distance": 1
                                       }
                                      ],
                                      "hfovMax": 120,
                                      "partial": false,
                                      "id": "panorama_47FAD277_5503_B3CC_415F_3731B40A5465",
                                      "class": "Panorama",
                                      "hfovMin": 60,
                                      "pitch": 0,
                                      "thumbnailUrl": "media/panorama_47FAD277_5503_B3CC_415F_3731B40A5465_t.jpg"
                                     },
                                     "backwardYaw": -161.55,
                                     "class": "AdjacentPanorama",
                                     "yaw": 14.19,
                                     "distance": 1
                                    }
                                   ],
                                   "label": "IMG_20190802_093512",
                                   "hfovMax": 130,
                                   "partial": false,
                                   "class": "Panorama",
                                   "hfov": 360,
                                   "vfov": 180,
                                   "frames": [
                                    {
                                     "overlays": [
                                      {
                                       "rollOverDisplay": false,
                                       "id": "overlay_42F2E003_5501_8F44_41D3_1A03C1DDB95B",
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_47FAD277_5503_B3CC_415F_3731B40A5465, this.camera_558C0253_5E0E_9F21_41CA_F04C1BE97AAA); this.mainPlayList.set('selectedIndex', 36)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_47FA2495_5503_974C_41CC_9F969CC7EE77_0_HS_1_0.png",
                                            "height": 148,
                                            "class": "ImageResourceLevel",
                                            "width": 149
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "yaw": 14.19,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -22.37,
                                         "hfov": 8.31
                                        }
                                       ],
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_47FA2495_5503_974C_41CC_9F969CC7EE77_0_HS_1_0_0_map.gif",
                                            "height": 74,
                                            "class": "ImageResourceLevel",
                                            "width": 74
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -22.37,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 14.19,
                                         "hfov": 8.31
                                        }
                                       ],
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "id": "overlay_424F7C11_5500_9744_41CC_1F7826EF6C21",
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_53EE3898_5500_9F44_41B4_46403FBF33EE, this.camera_558B8249_5E0E_9F21_41D1_DB06D7B861FB); this.mainPlayList.set('selectedIndex', 11)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_47FA2495_5503_974C_41CC_9F969CC7EE77_0_HS_0_0.png",
                                            "height": 204,
                                            "class": "ImageResourceLevel",
                                            "width": 209
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "yaw": 152.8,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -57.02,
                                         "hfov": 6.83
                                        }
                                       ],
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_47FA2495_5503_974C_41CC_9F969CC7EE77_0_HS_0_0_0_map.gif",
                                            "height": 102,
                                            "class": "ImageResourceLevel",
                                            "width": 104
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -57.02,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 152.8,
                                         "hfov": 6.83
                                        }
                                       ],
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "image": {
                                        "levels": [
                                         {
                                          "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                                          "height": 900,
                                          "class": "ImageResourceLevel",
                                          "width": 900
                                         }
                                        ],
                                        "class": "ImageResource"
                                       },
                                       "id": "panorama_47FA2495_5503_974C_41CC_9F969CC7EE77_tcap0",
                                       "class": "TripodCapPanoramaOverlay",
                                       "rotate": false,
                                       "angle": 0,
                                       "inertia": false,
                                       "hfov": 36
                                      }
                                     ],
                                     "right": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_47FA2495_5503_974C_41CC_9F969CC7EE77_r_hq.jpeg",
                                        "height": 1904,
                                        "class": "ImageResourceLevel",
                                        "width": 1904
                                       },
                                       {
                                        "url": "media/panorama_47FA2495_5503_974C_41CC_9F969CC7EE77_r.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "front": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_47FA2495_5503_974C_41CC_9F969CC7EE77_f_hq.jpeg",
                                        "height": 1904,
                                        "class": "ImageResourceLevel",
                                        "width": 1904
                                       },
                                       {
                                        "url": "media/panorama_47FA2495_5503_974C_41CC_9F969CC7EE77_f.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "class": "CubicPanoramaFrame",
                                     "back": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_47FA2495_5503_974C_41CC_9F969CC7EE77_b_hq.jpeg",
                                        "height": 1904,
                                        "class": "ImageResourceLevel",
                                        "width": 1904
                                       },
                                       {
                                        "url": "media/panorama_47FA2495_5503_974C_41CC_9F969CC7EE77_b.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "top": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_47FA2495_5503_974C_41CC_9F969CC7EE77_u_hq.jpeg",
                                        "height": 1904,
                                        "class": "ImageResourceLevel",
                                        "width": 1904
                                       },
                                       {
                                        "url": "media/panorama_47FA2495_5503_974C_41CC_9F969CC7EE77_u.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "bottom": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_47FA2495_5503_974C_41CC_9F969CC7EE77_d_hq.jpeg",
                                        "height": 1904,
                                        "class": "ImageResourceLevel",
                                        "width": 1904
                                       },
                                       {
                                        "url": "media/panorama_47FA2495_5503_974C_41CC_9F969CC7EE77_d.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "left": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_47FA2495_5503_974C_41CC_9F969CC7EE77_l_hq.jpeg",
                                        "height": 1904,
                                        "class": "ImageResourceLevel",
                                        "width": 1904
                                       },
                                       {
                                        "url": "media/panorama_47FA2495_5503_974C_41CC_9F969CC7EE77_l.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "thumbnailUrl": "media/panorama_47FA2495_5503_974C_41CC_9F969CC7EE77_t.jpg"
                                    }
                                   ],
                                   "thumbnailUrl": "media/panorama_47FA2495_5503_974C_41CC_9F969CC7EE77_t.jpg",
                                   "hfovMin": 60,
                                   "pitch": 0,
                                   "id": "panorama_47FA2495_5503_974C_41CC_9F969CC7EE77"
                                  },
                                  "backwardYaw": 152.8,
                                  "class": "AdjacentPanorama",
                                  "yaw": -171.55,
                                  "distance": 1
                                 }
                                ],
                                "label": "IMG_20190802_093558",
                                "hfovMax": 130,
                                "partial": false,
                                "class": "Panorama",
                                "hfov": 360,
                                "vfov": 180,
                                "frames": [
                                 {
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
                                    "id": "overlay_44CB13BE_553F_B0BC_41B2_7AEFDC1F9525",
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.mainPlayList.set('selectedIndex', 9)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_53EE3898_5500_9F44_41B4_46403FBF33EE_0_HS_2_0.png",
                                         "height": 148,
                                         "class": "ImageResourceLevel",
                                         "width": 149
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "yaw": -96.41,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -18.12,
                                      "hfov": 8.54
                                     }
                                    ],
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_53EE3898_5500_9F44_41B4_46403FBF33EE_0_HS_2_0_0_map.gif",
                                         "height": 74,
                                         "class": "ImageResourceLevel",
                                         "width": 74
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -18.12,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -96.41,
                                      "hfov": 8.54
                                     }
                                    ],
                                    "enabledInCardboard": true
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "id": "overlay_4483D1FE_5501_90BC_41D5_390E3B628DBF",
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_47FA2495_5503_974C_41CC_9F969CC7EE77, this.camera_5228E34E_5E0E_9D23_41D4_B4AF1B5DDA67); this.mainPlayList.set('selectedIndex', 38)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_53EE3898_5500_9F44_41B4_46403FBF33EE_0_HS_1_0.png",
                                         "height": 224,
                                         "class": "ImageResourceLevel",
                                         "width": 235
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "yaw": -171.55,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -48.01,
                                      "hfov": 9.46
                                     }
                                    ],
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_53EE3898_5500_9F44_41B4_46403FBF33EE_0_HS_1_0_0_map.gif",
                                         "height": 112,
                                         "class": "ImageResourceLevel",
                                         "width": 117
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -48.01,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -171.55,
                                      "hfov": 9.46
                                     }
                                    ],
                                    "enabledInCardboard": true
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "id": "overlay_4483F131_5500_9144_41C9_CE1F6CAE9797",
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE, this.camera_5210233E_5E0E_9D63_41B7_563C1C371610); this.mainPlayList.set('selectedIndex', 12)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_53EE3898_5500_9F44_41B4_46403FBF33EE_0_HS_0_0.png",
                                         "height": 194,
                                         "class": "ImageResourceLevel",
                                         "width": 258
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "yaw": 84.78,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -35.43,
                                      "hfov": 12.65
                                     }
                                    ],
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_53EE3898_5500_9F44_41B4_46403FBF33EE_0_HS_0_0_0_map.gif",
                                         "height": 97,
                                         "class": "ImageResourceLevel",
                                         "width": 129
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -35.43,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 84.78,
                                      "hfov": 12.65
                                     }
                                    ],
                                    "enabledInCardboard": true
                                   },
                                   {
                                    "image": {
                                     "levels": [
                                      {
                                       "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                                       "height": 900,
                                       "class": "ImageResourceLevel",
                                       "width": 900
                                      }
                                     ],
                                     "class": "ImageResource"
                                    },
                                    "id": "panorama_53EE3898_5500_9F44_41B4_46403FBF33EE_tcap0",
                                    "class": "TripodCapPanoramaOverlay",
                                    "rotate": false,
                                    "angle": 0,
                                    "inertia": false,
                                    "hfov": 36
                                   }
                                  ],
                                  "right": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_53EE3898_5500_9F44_41B4_46403FBF33EE_r_hq.jpeg",
                                     "height": 1904,
                                     "class": "ImageResourceLevel",
                                     "width": 1904
                                    },
                                    {
                                     "url": "media/panorama_53EE3898_5500_9F44_41B4_46403FBF33EE_r.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "front": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_53EE3898_5500_9F44_41B4_46403FBF33EE_f_hq.jpeg",
                                     "height": 1904,
                                     "class": "ImageResourceLevel",
                                     "width": 1904
                                    },
                                    {
                                     "url": "media/panorama_53EE3898_5500_9F44_41B4_46403FBF33EE_f.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "class": "CubicPanoramaFrame",
                                  "back": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_53EE3898_5500_9F44_41B4_46403FBF33EE_b_hq.jpeg",
                                     "height": 1904,
                                     "class": "ImageResourceLevel",
                                     "width": 1904
                                    },
                                    {
                                     "url": "media/panorama_53EE3898_5500_9F44_41B4_46403FBF33EE_b.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "top": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_53EE3898_5500_9F44_41B4_46403FBF33EE_u_hq.jpeg",
                                     "height": 1904,
                                     "class": "ImageResourceLevel",
                                     "width": 1904
                                    },
                                    {
                                     "url": "media/panorama_53EE3898_5500_9F44_41B4_46403FBF33EE_u.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "bottom": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_53EE3898_5500_9F44_41B4_46403FBF33EE_d_hq.jpeg",
                                     "height": 1904,
                                     "class": "ImageResourceLevel",
                                     "width": 1904
                                    },
                                    {
                                     "url": "media/panorama_53EE3898_5500_9F44_41B4_46403FBF33EE_d.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "left": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_53EE3898_5500_9F44_41B4_46403FBF33EE_l_hq.jpeg",
                                     "height": 1904,
                                     "class": "ImageResourceLevel",
                                     "width": 1904
                                    },
                                    {
                                     "url": "media/panorama_53EE3898_5500_9F44_41B4_46403FBF33EE_l.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "thumbnailUrl": "media/panorama_53EE3898_5500_9F44_41B4_46403FBF33EE_t.jpg"
                                 }
                                ],
                                "thumbnailUrl": "media/panorama_53EE3898_5500_9F44_41B4_46403FBF33EE_t.jpg",
                                "hfovMin": 60,
                                "pitch": 0,
                                "id": "panorama_53EE3898_5500_9F44_41B4_46403FBF33EE"
                               },
                               "backwardYaw": 84.78,
                               "class": "AdjacentPanorama",
                               "yaw": -175.13,
                               "distance": 1
                              },
                              {
                               "panorama": {
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE",
                                  "backwardYaw": -84.52,
                                  "class": "AdjacentPanorama",
                                  "yaw": 165.18,
                                  "distance": 1
                                 },
                                 {
                                  "panorama": {
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": "this.panorama_46E70666_5500_F3CC_41CC_30E950FF63EC",
                                     "backwardYaw": 3.21,
                                     "class": "AdjacentPanorama",
                                     "yaw": 69.44,
                                     "distance": 1
                                    },
                                    {
                                     "panorama": {
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": "this.panorama_47F459FC_5500_90BC_41D4_2A92C4DDAA79",
                                        "backwardYaw": -167.69,
                                        "class": "AdjacentPanorama",
                                        "yaw": -6,
                                        "distance": 1
                                       }
                                      ],
                                      "label": "IMG_20190802_093724",
                                      "hfovMax": 130,
                                      "partial": false,
                                      "class": "Panorama",
                                      "hfov": 360,
                                      "vfov": 180,
                                      "frames": [
                                       {
                                        "overlays": [
                                         {
                                          "rollOverDisplay": false,
                                          "id": "overlay_7F45BB66_5503_B1CC_41C7_32C034D5FA8E",
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true,
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "click": "this.startPanoramaWithCamera(this.panorama_47F459FC_5500_90BC_41D4_2A92C4DDAA79, this.camera_521FA334_5E0E_9D67_41C0_2FFD2554703F); this.mainPlayList.set('selectedIndex', 41)",
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "items": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "url": "media/panorama_47F46307_5500_B14C_41C5_BCD804291F33_0_HS_0_0.png",
                                               "height": 207,
                                               "class": "ImageResourceLevel",
                                               "width": 196
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "yaw": -6,
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": -24.24,
                                            "hfov": 10.73
                                           }
                                          ],
                                          "maps": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "url": "media/panorama_47F46307_5500_B14C_41C5_BCD804291F33_0_HS_0_0_0_map.gif",
                                               "height": 103,
                                               "class": "ImageResourceLevel",
                                               "width": 98
                                              }
                                             ],
                                             "class": "ImageResource"
                                            },
                                            "pitch": -24.24,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -6,
                                            "hfov": 10.73
                                           }
                                          ],
                                          "enabledInCardboard": true
                                         },
                                         {
                                          "image": {
                                           "levels": [
                                            {
                                             "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                                             "height": 900,
                                             "class": "ImageResourceLevel",
                                             "width": 900
                                            }
                                           ],
                                           "class": "ImageResource"
                                          },
                                          "id": "panorama_47F46307_5500_B14C_41C5_BCD804291F33_tcap0",
                                          "class": "TripodCapPanoramaOverlay",
                                          "rotate": false,
                                          "angle": 0,
                                          "inertia": false,
                                          "hfov": 36
                                         }
                                        ],
                                        "right": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_47F46307_5500_B14C_41C5_BCD804291F33_r_hq.jpeg",
                                           "height": 1904,
                                           "class": "ImageResourceLevel",
                                           "width": 1904
                                          },
                                          {
                                           "url": "media/panorama_47F46307_5500_B14C_41C5_BCD804291F33_r.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "front": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_47F46307_5500_B14C_41C5_BCD804291F33_f_hq.jpeg",
                                           "height": 1904,
                                           "class": "ImageResourceLevel",
                                           "width": 1904
                                          },
                                          {
                                           "url": "media/panorama_47F46307_5500_B14C_41C5_BCD804291F33_f.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "class": "CubicPanoramaFrame",
                                        "back": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_47F46307_5500_B14C_41C5_BCD804291F33_b_hq.jpeg",
                                           "height": 1904,
                                           "class": "ImageResourceLevel",
                                           "width": 1904
                                          },
                                          {
                                           "url": "media/panorama_47F46307_5500_B14C_41C5_BCD804291F33_b.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "top": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_47F46307_5500_B14C_41C5_BCD804291F33_u_hq.jpeg",
                                           "height": 1904,
                                           "class": "ImageResourceLevel",
                                           "width": 1904
                                          },
                                          {
                                           "url": "media/panorama_47F46307_5500_B14C_41C5_BCD804291F33_u.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "bottom": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_47F46307_5500_B14C_41C5_BCD804291F33_d_hq.jpeg",
                                           "height": 1904,
                                           "class": "ImageResourceLevel",
                                           "width": 1904
                                          },
                                          {
                                           "url": "media/panorama_47F46307_5500_B14C_41C5_BCD804291F33_d.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "left": {
                                         "levels": [
                                          {
                                           "url": "media/panorama_47F46307_5500_B14C_41C5_BCD804291F33_l_hq.jpeg",
                                           "height": 1904,
                                           "class": "ImageResourceLevel",
                                           "width": 1904
                                          },
                                          {
                                           "url": "media/panorama_47F46307_5500_B14C_41C5_BCD804291F33_l.jpeg",
                                           "height": 1024,
                                           "class": "ImageResourceLevel",
                                           "width": 1024
                                          }
                                         ],
                                         "class": "ImageResource"
                                        },
                                        "thumbnailUrl": "media/panorama_47F46307_5500_B14C_41C5_BCD804291F33_t.jpg"
                                       }
                                      ],
                                      "thumbnailUrl": "media/panorama_47F46307_5500_B14C_41C5_BCD804291F33_t.jpg",
                                      "hfovMin": 60,
                                      "pitch": 0,
                                      "id": "panorama_47F46307_5500_B14C_41C5_BCD804291F33"
                                     },
                                     "backwardYaw": -6,
                                     "class": "AdjacentPanorama",
                                     "yaw": -167.69,
                                     "distance": 1
                                    }
                                   ],
                                   "label": "IMG_20190802_093706",
                                   "hfovMax": 130,
                                   "partial": false,
                                   "class": "Panorama",
                                   "hfov": 360,
                                   "vfov": 180,
                                   "frames": [
                                    {
                                     "overlays": [
                                      {
                                       "rollOverDisplay": false,
                                       "id": "overlay_4DFEF28C_5501_735C_41D3_A086E16C32C0",
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.mainPlayList.set('selectedIndex', 40)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_47F459FC_5500_90BC_41D4_2A92C4DDAA79_0_HS_0_0.png",
                                            "height": 178,
                                            "class": "ImageResourceLevel",
                                            "width": 209
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "yaw": 10.23,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -20.89,
                                         "hfov": 11.73
                                        }
                                       ],
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_47F459FC_5500_90BC_41D4_2A92C4DDAA79_0_HS_0_0_0_map.gif",
                                            "height": 89,
                                            "class": "ImageResourceLevel",
                                            "width": 104
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -20.89,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 10.23,
                                         "hfov": 11.73
                                        }
                                       ],
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "id": "overlay_7F3471D4_5500_F0CC_4199_22008AAA0CF2",
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_47F46307_5500_B14C_41C5_BCD804291F33, this.camera_5523F1B2_5E0E_9D63_41B2_F7A7EE14E34E); this.mainPlayList.set('selectedIndex', 42)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_47F459FC_5500_90BC_41D4_2A92C4DDAA79_0_HS_2_0.png",
                                            "height": 168,
                                            "class": "ImageResourceLevel",
                                            "width": 166
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "yaw": -167.69,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -25.34,
                                         "hfov": 9.01
                                        }
                                       ],
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_47F459FC_5500_90BC_41D4_2A92C4DDAA79_0_HS_2_0_0_map.gif",
                                            "height": 84,
                                            "class": "ImageResourceLevel",
                                            "width": 83
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -25.34,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -167.69,
                                         "hfov": 9.01
                                        }
                                       ],
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "rollOverDisplay": false,
                                       "id": "overlay_7EC0C7E2_5501_90C4_41D2_B0CEE49B46D2",
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true,
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "click": "this.startPanoramaWithCamera(this.panorama_46E70666_5500_F3CC_41CC_30E950FF63EC, this.camera_552861A8_5E0E_9D6F_41CC_66E8F6EBB8CF); this.mainPlayList.set('selectedIndex', 39)",
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_47F459FC_5500_90BC_41D4_2A92C4DDAA79_0_HS_1_0.png",
                                            "height": 148,
                                            "class": "ImageResourceLevel",
                                            "width": 149
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "yaw": 69.44,
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -15.45,
                                         "hfov": 8.66
                                        }
                                       ],
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "url": "media/panorama_47F459FC_5500_90BC_41D4_2A92C4DDAA79_0_HS_1_0_0_map.gif",
                                            "height": 74,
                                            "class": "ImageResourceLevel",
                                            "width": 74
                                           }
                                          ],
                                          "class": "ImageResource"
                                         },
                                         "pitch": -15.45,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 69.44,
                                         "hfov": 8.66
                                        }
                                       ],
                                       "enabledInCardboard": true
                                      },
                                      {
                                       "image": {
                                        "levels": [
                                         {
                                          "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                                          "height": 900,
                                          "class": "ImageResourceLevel",
                                          "width": 900
                                         }
                                        ],
                                        "class": "ImageResource"
                                       },
                                       "id": "panorama_47F459FC_5500_90BC_41D4_2A92C4DDAA79_tcap0",
                                       "class": "TripodCapPanoramaOverlay",
                                       "rotate": false,
                                       "angle": 0,
                                       "inertia": false,
                                       "hfov": 36
                                      }
                                     ],
                                     "right": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_47F459FC_5500_90BC_41D4_2A92C4DDAA79_r_hq.jpeg",
                                        "height": 1904,
                                        "class": "ImageResourceLevel",
                                        "width": 1904
                                       },
                                       {
                                        "url": "media/panorama_47F459FC_5500_90BC_41D4_2A92C4DDAA79_r.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "front": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_47F459FC_5500_90BC_41D4_2A92C4DDAA79_f_hq.jpeg",
                                        "height": 1904,
                                        "class": "ImageResourceLevel",
                                        "width": 1904
                                       },
                                       {
                                        "url": "media/panorama_47F459FC_5500_90BC_41D4_2A92C4DDAA79_f.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "class": "CubicPanoramaFrame",
                                     "back": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_47F459FC_5500_90BC_41D4_2A92C4DDAA79_b_hq.jpeg",
                                        "height": 1904,
                                        "class": "ImageResourceLevel",
                                        "width": 1904
                                       },
                                       {
                                        "url": "media/panorama_47F459FC_5500_90BC_41D4_2A92C4DDAA79_b.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "top": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_47F459FC_5500_90BC_41D4_2A92C4DDAA79_u_hq.jpeg",
                                        "height": 1904,
                                        "class": "ImageResourceLevel",
                                        "width": 1904
                                       },
                                       {
                                        "url": "media/panorama_47F459FC_5500_90BC_41D4_2A92C4DDAA79_u.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "bottom": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_47F459FC_5500_90BC_41D4_2A92C4DDAA79_d_hq.jpeg",
                                        "height": 1904,
                                        "class": "ImageResourceLevel",
                                        "width": 1904
                                       },
                                       {
                                        "url": "media/panorama_47F459FC_5500_90BC_41D4_2A92C4DDAA79_d.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "left": {
                                      "levels": [
                                       {
                                        "url": "media/panorama_47F459FC_5500_90BC_41D4_2A92C4DDAA79_l_hq.jpeg",
                                        "height": 1904,
                                        "class": "ImageResourceLevel",
                                        "width": 1904
                                       },
                                       {
                                        "url": "media/panorama_47F459FC_5500_90BC_41D4_2A92C4DDAA79_l.jpeg",
                                        "height": 1024,
                                        "class": "ImageResourceLevel",
                                        "width": 1024
                                       }
                                      ],
                                      "class": "ImageResource"
                                     },
                                     "thumbnailUrl": "media/panorama_47F459FC_5500_90BC_41D4_2A92C4DDAA79_t.jpg"
                                    }
                                   ],
                                   "thumbnailUrl": "media/panorama_47F459FC_5500_90BC_41D4_2A92C4DDAA79_t.jpg",
                                   "hfovMin": 60,
                                   "pitch": 0,
                                   "id": "panorama_47F459FC_5500_90BC_41D4_2A92C4DDAA79"
                                  },
                                  "backwardYaw": 69.44,
                                  "class": "AdjacentPanorama",
                                  "yaw": 3.21,
                                  "distance": 1
                                 }
                                ],
                                "label": "IMG_20190802_093628",
                                "hfovMax": 130,
                                "partial": false,
                                "class": "Panorama",
                                "hfov": 360,
                                "vfov": 180,
                                "frames": [
                                 {
                                  "overlays": [
                                   {
                                    "rollOverDisplay": false,
                                    "id": "overlay_42705C11_5500_9744_41C4_88A07CC5E5D1",
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_47F459FC_5500_90BC_41D4_2A92C4DDAA79, this.camera_5550C5C6_5E0E_8523_41CB_246648F4DE05); this.mainPlayList.set('selectedIndex', 41)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_46E70666_5500_F3CC_41CC_30E950FF63EC_0_HS_1_0.png",
                                         "height": 168,
                                         "class": "ImageResourceLevel",
                                         "width": 205
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "yaw": 3.21,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -32.66,
                                      "hfov": 10.41
                                     }
                                    ],
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_46E70666_5500_F3CC_41CC_30E950FF63EC_0_HS_1_0_0_map.gif",
                                         "height": 84,
                                         "class": "ImageResourceLevel",
                                         "width": 102
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -32.66,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 3.21,
                                      "hfov": 10.41
                                     }
                                    ],
                                    "enabledInCardboard": true
                                   },
                                   {
                                    "rollOverDisplay": false,
                                    "id": "overlay_4DD6449B_5500_9744_41B5_982370E5F752",
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true,
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "click": "this.startPanoramaWithCamera(this.panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE, this.camera_555F45BC_5E0E_8566_41C5_761F24EF9A5F); this.mainPlayList.set('selectedIndex', 12)",
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_46E70666_5500_F3CC_41CC_30E950FF63EC_0_HS_0_0.png",
                                         "height": 382,
                                         "class": "ImageResourceLevel",
                                         "width": 314
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "yaw": 165.18,
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -64.73,
                                      "hfov": 8.07
                                     }
                                    ],
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "url": "media/panorama_46E70666_5500_F3CC_41CC_30E950FF63EC_0_HS_0_0_0_map.gif",
                                         "height": 191,
                                         "class": "ImageResourceLevel",
                                         "width": 157
                                        }
                                       ],
                                       "class": "ImageResource"
                                      },
                                      "pitch": -64.73,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 165.18,
                                      "hfov": 8.07
                                     }
                                    ],
                                    "enabledInCardboard": true
                                   },
                                   {
                                    "image": {
                                     "levels": [
                                      {
                                       "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                                       "height": 900,
                                       "class": "ImageResourceLevel",
                                       "width": 900
                                      }
                                     ],
                                     "class": "ImageResource"
                                    },
                                    "id": "panorama_46E70666_5500_F3CC_41CC_30E950FF63EC_tcap0",
                                    "class": "TripodCapPanoramaOverlay",
                                    "rotate": false,
                                    "angle": 0,
                                    "inertia": false,
                                    "hfov": 36
                                   }
                                  ],
                                  "right": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_46E70666_5500_F3CC_41CC_30E950FF63EC_r_hq.jpeg",
                                     "height": 1904,
                                     "class": "ImageResourceLevel",
                                     "width": 1904
                                    },
                                    {
                                     "url": "media/panorama_46E70666_5500_F3CC_41CC_30E950FF63EC_r.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "front": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_46E70666_5500_F3CC_41CC_30E950FF63EC_f_hq.jpeg",
                                     "height": 1904,
                                     "class": "ImageResourceLevel",
                                     "width": 1904
                                    },
                                    {
                                     "url": "media/panorama_46E70666_5500_F3CC_41CC_30E950FF63EC_f.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "class": "CubicPanoramaFrame",
                                  "back": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_46E70666_5500_F3CC_41CC_30E950FF63EC_b_hq.jpeg",
                                     "height": 1904,
                                     "class": "ImageResourceLevel",
                                     "width": 1904
                                    },
                                    {
                                     "url": "media/panorama_46E70666_5500_F3CC_41CC_30E950FF63EC_b.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "top": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_46E70666_5500_F3CC_41CC_30E950FF63EC_u_hq.jpeg",
                                     "height": 1904,
                                     "class": "ImageResourceLevel",
                                     "width": 1904
                                    },
                                    {
                                     "url": "media/panorama_46E70666_5500_F3CC_41CC_30E950FF63EC_u.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "bottom": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_46E70666_5500_F3CC_41CC_30E950FF63EC_d_hq.jpeg",
                                     "height": 1904,
                                     "class": "ImageResourceLevel",
                                     "width": 1904
                                    },
                                    {
                                     "url": "media/panorama_46E70666_5500_F3CC_41CC_30E950FF63EC_d.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "left": {
                                   "levels": [
                                    {
                                     "url": "media/panorama_46E70666_5500_F3CC_41CC_30E950FF63EC_l_hq.jpeg",
                                     "height": 1904,
                                     "class": "ImageResourceLevel",
                                     "width": 1904
                                    },
                                    {
                                     "url": "media/panorama_46E70666_5500_F3CC_41CC_30E950FF63EC_l.jpeg",
                                     "height": 1024,
                                     "class": "ImageResourceLevel",
                                     "width": 1024
                                    }
                                   ],
                                   "class": "ImageResource"
                                  },
                                  "thumbnailUrl": "media/panorama_46E70666_5500_F3CC_41CC_30E950FF63EC_t.jpg"
                                 }
                                ],
                                "thumbnailUrl": "media/panorama_46E70666_5500_F3CC_41CC_30E950FF63EC_t.jpg",
                                "hfovMin": 60,
                                "pitch": 0,
                                "id": "panorama_46E70666_5500_F3CC_41CC_30E950FF63EC"
                               },
                               "backwardYaw": 165.18,
                               "class": "AdjacentPanorama",
                               "yaw": -84.52,
                               "distance": 1
                              },
                              {
                               "panorama": "this.panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358",
                               "backwardYaw": 6.87,
                               "class": "AdjacentPanorama",
                               "yaw": 6.57,
                               "distance": 1
                              }
                             ],
                             "label": "IMG_20190802_093612",
                             "hfovMax": 130,
                             "partial": false,
                             "class": "Panorama",
                             "hfov": 360,
                             "vfov": 180,
                             "frames": [
                              {
                               "overlays": [
                                {
                                 "rollOverDisplay": false,
                                 "id": "overlay_4431AC1E_5500_B77C_41CA_EB7C7994E7E1",
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_46E70666_5500_F3CC_41CC_30E950FF63EC, this.camera_5510A554_5E0E_8526_41CA_7BBF97A3F39B); this.mainPlayList.set('selectedIndex', 39)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE_0_HS_2_0.png",
                                      "height": 174,
                                      "class": "ImageResourceLevel",
                                      "width": 235
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "yaw": -84.52,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -48.9,
                                   "hfov": 9.3
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE_0_HS_2_0_0_map.gif",
                                      "height": 87,
                                      "class": "ImageResourceLevel",
                                      "width": 117
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -48.9,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -84.52,
                                   "hfov": 9.3
                                  }
                                 ],
                                 "enabledInCardboard": true
                                },
                                {
                                 "rollOverDisplay": false,
                                 "id": "overlay_443E56F2_5503_F0C4_41CB_2D5E0D312DA0",
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358, this.camera_552BD55E_5E0E_8522_41AE_27FC6C623758); this.mainPlayList.set('selectedIndex', 13)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE_0_HS_1_0.png",
                                      "height": 171,
                                      "class": "ImageResourceLevel",
                                      "width": 199
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "yaw": 6.57,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -37.91,
                                   "hfov": 9.44
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE_0_HS_1_0_0_map.gif",
                                      "height": 85,
                                      "class": "ImageResourceLevel",
                                      "width": 99
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -37.91,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 6.57,
                                   "hfov": 9.44
                                  }
                                 ],
                                 "enabledInCardboard": true
                                },
                                {
                                 "rollOverDisplay": false,
                                 "id": "overlay_44CB4090_5500_8F44_41B3_74BA9F668A2A",
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_53EE3898_5500_9F44_41B4_46403FBF33EE, this.camera_551CE54A_5E0E_8522_418D_B5B9DECE3D6C); this.mainPlayList.set('selectedIndex', 11)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE_0_HS_0_0.png",
                                      "height": 178,
                                      "class": "ImageResourceLevel",
                                      "width": 205
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "yaw": -175.13,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -17.12,
                                   "hfov": 11.81
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE_0_HS_0_0_0_map.gif",
                                      "height": 89,
                                      "class": "ImageResourceLevel",
                                      "width": 102
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -17.12,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -175.13,
                                   "hfov": 11.81
                                  }
                                 ],
                                 "enabledInCardboard": true
                                },
                                {
                                 "image": {
                                  "levels": [
                                   {
                                    "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                                    "height": 900,
                                    "class": "ImageResourceLevel",
                                    "width": 900
                                   }
                                  ],
                                  "class": "ImageResource"
                                 },
                                 "id": "panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE_tcap0",
                                 "class": "TripodCapPanoramaOverlay",
                                 "rotate": false,
                                 "angle": 0,
                                 "inertia": false,
                                 "hfov": 36
                                }
                               ],
                               "right": {
                                "levels": [
                                 {
                                  "url": "media/panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE_r_hq.jpeg",
                                  "height": 1904,
                                  "class": "ImageResourceLevel",
                                  "width": 1904
                                 },
                                 {
                                  "url": "media/panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE_r.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "front": {
                                "levels": [
                                 {
                                  "url": "media/panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE_f_hq.jpeg",
                                  "height": 1904,
                                  "class": "ImageResourceLevel",
                                  "width": 1904
                                 },
                                 {
                                  "url": "media/panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE_f.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "class": "CubicPanoramaFrame",
                               "back": {
                                "levels": [
                                 {
                                  "url": "media/panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE_b_hq.jpeg",
                                  "height": 1904,
                                  "class": "ImageResourceLevel",
                                  "width": 1904
                                 },
                                 {
                                  "url": "media/panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE_b.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "top": {
                                "levels": [
                                 {
                                  "url": "media/panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE_u_hq.jpeg",
                                  "height": 1904,
                                  "class": "ImageResourceLevel",
                                  "width": 1904
                                 },
                                 {
                                  "url": "media/panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE_u.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "bottom": {
                                "levels": [
                                 {
                                  "url": "media/panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE_d_hq.jpeg",
                                  "height": 1904,
                                  "class": "ImageResourceLevel",
                                  "width": 1904
                                 },
                                 {
                                  "url": "media/panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE_d.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "left": {
                                "levels": [
                                 {
                                  "url": "media/panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE_l_hq.jpeg",
                                  "height": 1904,
                                  "class": "ImageResourceLevel",
                                  "width": 1904
                                 },
                                 {
                                  "url": "media/panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE_l.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "thumbnailUrl": "media/panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE_t.jpg"
                              }
                             ],
                             "thumbnailUrl": "media/panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE_t.jpg",
                             "hfovMin": 60,
                             "pitch": 0,
                             "id": "panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE"
                            },
                            "backwardYaw": 6.57,
                            "class": "AdjacentPanorama",
                            "yaw": 6.87,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_53EE0FF8_5500_F0C4_41C2_E69C1D43B1E0",
                            "backwardYaw": -3.63,
                            "class": "AdjacentPanorama",
                            "yaw": -173.95,
                            "distance": 1
                           }
                          ],
                          "label": "IMG_20190802_093744",
                          "hfovMax": 130,
                          "partial": false,
                          "class": "Panorama",
                          "hfov": 360,
                          "vfov": 180,
                          "frames": [
                           {
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_45962713_5501_9144_41D4_9C47A3B38027",
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_47F5C037_5501_8F4C_41CF_949094A4F368, this.camera_54F9E4E2_5E0E_84E2_41D2_A612ABFE5ABE); this.mainPlayList.set('selectedIndex', 46)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358_0_HS_1_0.png",
                                   "height": 211,
                                   "class": "ImageResourceLevel",
                                   "width": 196
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "yaw": -118.28,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -56.52,
                                "hfov": 6.49
                               }
                              ],
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358_0_HS_1_0_0_map.gif",
                                   "height": 105,
                                   "class": "ImageResourceLevel",
                                   "width": 98
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -56.52,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -118.28,
                                "hfov": 6.49
                               }
                              ],
                              "enabledInCardboard": true
                             },
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_45A274DF_5501_90FC_41CE_8479FB373F63",
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE, this.camera_54FDD4EB_5E0E_84E1_41C4_7D802718A08F); this.mainPlayList.set('selectedIndex', 12)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358_0_HS_0_0.png",
                                   "height": 148,
                                   "class": "ImageResourceLevel",
                                   "width": 149
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "yaw": 6.87,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -40,
                                "hfov": 6.89
                               }
                              ],
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358_0_HS_0_0_0_map.gif",
                                   "height": 74,
                                   "class": "ImageResourceLevel",
                                   "width": 74
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -40,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 6.87,
                                "hfov": 6.89
                               }
                              ],
                              "enabledInCardboard": true
                             },
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_5DDB6015_57E5_480F_41C7_CBDEDEAB3C28",
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_53EE0FF8_5500_F0C4_41C2_E69C1D43B1E0, this.camera_54FB54F5_5E0E_84E1_41B7_B72277F1C59A); this.mainPlayList.set('selectedIndex', 14)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358_0_HS_2_0.png",
                                   "height": 148,
                                   "class": "ImageResourceLevel",
                                   "width": 149
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "yaw": -173.95,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -25.63,
                                "hfov": 8.1
                               }
                              ],
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358_0_HS_2_0_0_map.gif",
                                   "height": 74,
                                   "class": "ImageResourceLevel",
                                   "width": 74
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -25.63,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -173.95,
                                "hfov": 8.1
                               }
                              ],
                              "enabledInCardboard": true
                             },
                             {
                              "image": {
                               "levels": [
                                {
                                 "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                                 "height": 900,
                                 "class": "ImageResourceLevel",
                                 "width": 900
                                }
                               ],
                               "class": "ImageResource"
                              },
                              "id": "panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358_tcap0",
                              "class": "TripodCapPanoramaOverlay",
                              "rotate": false,
                              "angle": 0,
                              "inertia": false,
                              "hfov": 36
                             }
                            ],
                            "right": {
                             "levels": [
                              {
                               "url": "media/panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358_r_hq.jpeg",
                               "height": 1904,
                               "class": "ImageResourceLevel",
                               "width": 1904
                              },
                              {
                               "url": "media/panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358_r.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "front": {
                             "levels": [
                              {
                               "url": "media/panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358_f_hq.jpeg",
                               "height": 1904,
                               "class": "ImageResourceLevel",
                               "width": 1904
                              },
                              {
                               "url": "media/panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358_f.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "class": "CubicPanoramaFrame",
                            "back": {
                             "levels": [
                              {
                               "url": "media/panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358_b_hq.jpeg",
                               "height": 1904,
                               "class": "ImageResourceLevel",
                               "width": 1904
                              },
                              {
                               "url": "media/panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358_b.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "top": {
                             "levels": [
                              {
                               "url": "media/panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358_u_hq.jpeg",
                               "height": 1904,
                               "class": "ImageResourceLevel",
                               "width": 1904
                              },
                              {
                               "url": "media/panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358_u.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "bottom": {
                             "levels": [
                              {
                               "url": "media/panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358_d_hq.jpeg",
                               "height": 1904,
                               "class": "ImageResourceLevel",
                               "width": 1904
                              },
                              {
                               "url": "media/panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358_d.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "left": {
                             "levels": [
                              {
                               "url": "media/panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358_l_hq.jpeg",
                               "height": 1904,
                               "class": "ImageResourceLevel",
                               "width": 1904
                              },
                              {
                               "url": "media/panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358_l.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "thumbnailUrl": "media/panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358_t.jpg"
                           }
                          ],
                          "thumbnailUrl": "media/panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358_t.jpg",
                          "hfovMin": 60,
                          "pitch": 0,
                          "id": "panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358"
                         },
                         "backwardYaw": -173.95,
                         "class": "AdjacentPanorama",
                         "yaw": -3.63,
                         "distance": 1
                        }
                       ],
                       "label": "IMG_20190802_093800",
                       "hfovMax": 130,
                       "partial": false,
                       "class": "Panorama",
                       "hfov": 360,
                       "vfov": 180,
                       "frames": [
                        {
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_45E6EDDC_5501_70FC_4196_9BE6B46B23A6",
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.mainPlayList.set('selectedIndex', 46)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_53EE0FF8_5500_F0C4_41C2_E69C1D43B1E0_0_HS_1_0.png",
                                "height": 148,
                                "class": "ImageResourceLevel",
                                "width": 149
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": -25.02,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -31.38,
                             "hfov": 7.67
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_53EE0FF8_5500_F0C4_41C2_E69C1D43B1E0_0_HS_1_0_0_map.gif",
                                "height": 74,
                                "class": "ImageResourceLevel",
                                "width": 74
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -31.38,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -25.02,
                             "hfov": 7.67
                            }
                           ],
                           "enabledInCardboard": true
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_459FE335_5500_914C_419D_A01DA09BE0B2",
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358, this.camera_54F34508_5E0E_852E_4180_48722D449B56); this.mainPlayList.set('selectedIndex', 13)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_53EE0FF8_5500_F0C4_41C2_E69C1D43B1E0_0_HS_0_0.png",
                                "height": 224,
                                "class": "ImageResourceLevel",
                                "width": 222
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": -3.63,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -21.94,
                             "hfov": 12.39
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_53EE0FF8_5500_F0C4_41C2_E69C1D43B1E0_0_HS_0_0_0_map.gif",
                                "height": 112,
                                "class": "ImageResourceLevel",
                                "width": 111
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -21.94,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -3.63,
                             "hfov": 12.39
                            }
                           ],
                           "enabledInCardboard": true
                          },
                          {
                           "image": {
                            "levels": [
                             {
                              "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                              "height": 900,
                              "class": "ImageResourceLevel",
                              "width": 900
                             }
                            ],
                            "class": "ImageResource"
                           },
                           "id": "panorama_53EE0FF8_5500_F0C4_41C2_E69C1D43B1E0_tcap0",
                           "class": "TripodCapPanoramaOverlay",
                           "rotate": false,
                           "angle": 0,
                           "inertia": false,
                           "hfov": 36
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_574F7E09_5E06_872E_41D5_E4BAFDCECCC4",
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA, this.camera_54FFA4FE_5E0E_84E3_41B9_FBF9F7968860); this.mainPlayList.set('selectedIndex', 3)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_53EE0FF8_5500_F0C4_41C2_E69C1D43B1E0_0_HS_2_0.png",
                                "height": 148,
                                "class": "ImageResourceLevel",
                                "width": 149
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": -170.37,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -34.25,
                             "hfov": 7.43
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_53EE0FF8_5500_F0C4_41C2_E69C1D43B1E0_0_HS_2_0_0_map.gif",
                                "height": 74,
                                "class": "ImageResourceLevel",
                                "width": 74
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -34.25,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -170.37,
                             "hfov": 7.43
                            }
                           ],
                           "enabledInCardboard": true
                          }
                         ],
                         "right": {
                          "levels": [
                           {
                            "url": "media/panorama_53EE0FF8_5500_F0C4_41C2_E69C1D43B1E0_r_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_53EE0FF8_5500_F0C4_41C2_E69C1D43B1E0_r.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "front": {
                          "levels": [
                           {
                            "url": "media/panorama_53EE0FF8_5500_F0C4_41C2_E69C1D43B1E0_f_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_53EE0FF8_5500_F0C4_41C2_E69C1D43B1E0_f.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "class": "CubicPanoramaFrame",
                         "back": {
                          "levels": [
                           {
                            "url": "media/panorama_53EE0FF8_5500_F0C4_41C2_E69C1D43B1E0_b_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_53EE0FF8_5500_F0C4_41C2_E69C1D43B1E0_b.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "top": {
                          "levels": [
                           {
                            "url": "media/panorama_53EE0FF8_5500_F0C4_41C2_E69C1D43B1E0_u_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_53EE0FF8_5500_F0C4_41C2_E69C1D43B1E0_u.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "bottom": {
                          "levels": [
                           {
                            "url": "media/panorama_53EE0FF8_5500_F0C4_41C2_E69C1D43B1E0_d_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_53EE0FF8_5500_F0C4_41C2_E69C1D43B1E0_d.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "left": {
                          "levels": [
                           {
                            "url": "media/panorama_53EE0FF8_5500_F0C4_41C2_E69C1D43B1E0_l_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_53EE0FF8_5500_F0C4_41C2_E69C1D43B1E0_l.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "thumbnailUrl": "media/panorama_53EE0FF8_5500_F0C4_41C2_E69C1D43B1E0_t.jpg"
                        }
                       ],
                       "thumbnailUrl": "media/panorama_53EE0FF8_5500_F0C4_41C2_E69C1D43B1E0_t.jpg",
                       "hfovMin": 60,
                       "pitch": 0,
                       "id": "panorama_53EE0FF8_5500_F0C4_41C2_E69C1D43B1E0"
                      },
                      "backwardYaw": -170.37,
                      "class": "AdjacentPanorama",
                      "yaw": 172.24,
                      "distance": 1
                     }
                    ],
                    "label": "IMG_20190802_092744",
                    "hfovMax": 130,
                    "partial": false,
                    "class": "Panorama",
                    "hfov": 360,
                    "vfov": 180,
                    "frames": [
                     {
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_457045DF_5503_90FC_41D4_444EC2753607",
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_53EFE11F_5501_717C_41BC_62660AE64D50, this.camera_550B051B_5E0E_8522_41C3_9388F1D06A8B); this.mainPlayList.set('selectedIndex', 4)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA_0_HS_3_0.png",
                             "height": 184,
                             "class": "ImageResourceLevel",
                             "width": 232
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": 86.67,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -22.07,
                          "hfov": 12.93
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA_0_HS_3_0_0_map.gif",
                             "height": 92,
                             "class": "ImageResourceLevel",
                             "width": 116
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -22.07,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 86.67,
                          "hfov": 12.93
                         }
                        ],
                        "enabledInCardboard": true
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_45082C04_5500_974C_41CA_1BB5F3AA7856",
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31, this.camera_54F77511_5E0E_8521_41CE_8D8BB6CEE369); this.mainPlayList.set('selectedIndex', 18)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA_0_HS_2_0.png",
                             "height": 148,
                             "class": "ImageResourceLevel",
                             "width": 149
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": 34.39,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -25.25,
                          "hfov": 8.13
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA_0_HS_2_0_0_map.gif",
                             "height": 74,
                             "class": "ImageResourceLevel",
                             "width": 74
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -25.25,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 34.39,
                          "hfov": 8.13
                         }
                        ],
                        "enabledInCardboard": true
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_4525949F_5501_977C_41A1_4EABD0542421",
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.mainPlayList.set('selectedIndex', 20)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA_0_HS_1_0.png",
                             "height": 148,
                             "class": "ImageResourceLevel",
                             "width": 149
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": -43.33,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -22.47,
                          "hfov": 8.31
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA_0_HS_1_0_0_map.gif",
                             "height": 74,
                             "class": "ImageResourceLevel",
                             "width": 74
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -22.47,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -43.33,
                          "hfov": 8.31
                         }
                        ],
                        "enabledInCardboard": true
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_45FFAF97_5503_914C_41BE_8E54B8A73E58",
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_53EE0FF8_5500_F0C4_41C2_E69C1D43B1E0, this.camera_550EC524_5E0E_8567_41C7_AF3B8A1DB573); this.mainPlayList.set('selectedIndex', 14)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA_0_HS_0_0.png",
                             "height": 174,
                             "class": "ImageResourceLevel",
                             "width": 267
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": 172.24,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -32.44,
                          "hfov": 13.55
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA_0_HS_0_0_0_map.gif",
                             "height": 87,
                             "class": "ImageResourceLevel",
                             "width": 133
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -32.44,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 172.24,
                          "hfov": 13.55
                         }
                        ],
                        "enabledInCardboard": true
                       },
                       {
                        "image": {
                         "levels": [
                          {
                           "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                           "height": 900,
                           "class": "ImageResourceLevel",
                           "width": 900
                          }
                         ],
                         "class": "ImageResource"
                        },
                        "id": "panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA_tcap0",
                        "class": "TripodCapPanoramaOverlay",
                        "rotate": false,
                        "angle": 0,
                        "inertia": false,
                        "hfov": 36
                       }
                      ],
                      "right": {
                       "levels": [
                        {
                         "url": "media/panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA_r_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA_r.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "front": {
                       "levels": [
                        {
                         "url": "media/panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA_f_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA_f.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "class": "CubicPanoramaFrame",
                      "back": {
                       "levels": [
                        {
                         "url": "media/panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA_b_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA_b.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "top": {
                       "levels": [
                        {
                         "url": "media/panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA_u_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA_u.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "bottom": {
                       "levels": [
                        {
                         "url": "media/panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA_d_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA_d.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "left": {
                       "levels": [
                        {
                         "url": "media/panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA_l_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA_l.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "thumbnailUrl": "media/panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA_t.jpg"
                     }
                    ],
                    "thumbnailUrl": "media/panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA_t.jpg",
                    "hfovMin": 60,
                    "pitch": 0,
                    "id": "panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA"
                   },
                   "backwardYaw": 34.39,
                   "class": "AdjacentPanorama",
                   "yaw": 134.58,
                   "distance": 1
                  },
                  {
                   "panorama": {
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31",
                      "backwardYaw": -37.99,
                      "class": "AdjacentPanorama",
                      "yaw": -132.07,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67",
                      "backwardYaw": -98.78,
                      "class": "AdjacentPanorama",
                      "yaw": 125.27,
                      "distance": 1
                     },
                     {
                      "panorama": {
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_53FBAF87_5507_914C_41BC_FAAB0750D689",
                         "backwardYaw": -8.58,
                         "class": "AdjacentPanorama",
                         "yaw": -173.92,
                         "distance": 1
                        }
                       ],
                       "label": "IMG_20190802_092508",
                       "hfovMax": 130,
                       "partial": false,
                       "class": "Panorama",
                       "hfov": 360,
                       "vfov": 180,
                       "frames": [
                        {
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_58AD1007_5500_8F4C_417A_7499D3AE5ACF",
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_53FBAF87_5507_914C_41BC_FAAB0750D689, this.camera_5545D5B2_5E0E_8563_41D4_50A23FBCA559); this.mainPlayList.set('selectedIndex', 16)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_524D76EF_5507_90DC_41D3_AC4B066D4C11_0_HS_0_0.png",
                                "height": 181,
                                "class": "ImageResourceLevel",
                                "width": 252
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": -173.92,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -23.95,
                             "hfov": 13.83
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_524D76EF_5507_90DC_41D3_AC4B066D4C11_0_HS_0_0_0_map.gif",
                                "height": 90,
                                "class": "ImageResourceLevel",
                                "width": 126
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -23.95,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -173.92,
                             "hfov": 13.83
                            }
                           ],
                           "enabledInCardboard": true
                          },
                          {
                           "image": {
                            "levels": [
                             {
                              "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                              "height": 900,
                              "class": "ImageResourceLevel",
                              "width": 900
                             }
                            ],
                            "class": "ImageResource"
                           },
                           "id": "panorama_524D76EF_5507_90DC_41D3_AC4B066D4C11_tcap0",
                           "class": "TripodCapPanoramaOverlay",
                           "rotate": false,
                           "angle": 0,
                           "inertia": false,
                           "hfov": 36
                          }
                         ],
                         "right": {
                          "levels": [
                           {
                            "url": "media/panorama_524D76EF_5507_90DC_41D3_AC4B066D4C11_r_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_524D76EF_5507_90DC_41D3_AC4B066D4C11_r.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "front": {
                          "levels": [
                           {
                            "url": "media/panorama_524D76EF_5507_90DC_41D3_AC4B066D4C11_f_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_524D76EF_5507_90DC_41D3_AC4B066D4C11_f.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "class": "CubicPanoramaFrame",
                         "back": {
                          "levels": [
                           {
                            "url": "media/panorama_524D76EF_5507_90DC_41D3_AC4B066D4C11_b_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_524D76EF_5507_90DC_41D3_AC4B066D4C11_b.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "top": {
                          "levels": [
                           {
                            "url": "media/panorama_524D76EF_5507_90DC_41D3_AC4B066D4C11_u_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_524D76EF_5507_90DC_41D3_AC4B066D4C11_u.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "bottom": {
                          "levels": [
                           {
                            "url": "media/panorama_524D76EF_5507_90DC_41D3_AC4B066D4C11_d_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_524D76EF_5507_90DC_41D3_AC4B066D4C11_d.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "left": {
                          "levels": [
                           {
                            "url": "media/panorama_524D76EF_5507_90DC_41D3_AC4B066D4C11_l_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_524D76EF_5507_90DC_41D3_AC4B066D4C11_l.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "thumbnailUrl": "media/panorama_524D76EF_5507_90DC_41D3_AC4B066D4C11_t.jpg"
                        }
                       ],
                       "thumbnailUrl": "media/panorama_524D76EF_5507_90DC_41D3_AC4B066D4C11_t.jpg",
                       "hfovMin": 60,
                       "pitch": 0,
                       "id": "panorama_524D76EF_5507_90DC_41D3_AC4B066D4C11"
                      },
                      "backwardYaw": -173.92,
                      "class": "AdjacentPanorama",
                      "yaw": -8.58,
                      "distance": 1
                     }
                    ],
                    "label": "IMG_20190802_092527",
                    "hfovMax": 130,
                    "partial": false,
                    "class": "Panorama",
                    "hfov": 360,
                    "vfov": 180,
                    "frames": [
                     {
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_581B5041_5503_8FC4_41B5_54D7B3BC009C",
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_524D76EF_5507_90DC_41D3_AC4B066D4C11, this.camera_55863610_5E0E_873F_41AE_30C4A2895B94); this.mainPlayList.set('selectedIndex', 15)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_53FBAF87_5507_914C_41BC_FAAB0750D689_0_HS_2_0.png",
                             "height": 230,
                             "class": "ImageResourceLevel",
                             "width": 295
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": -8.58,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -26.83,
                          "hfov": 15.8
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_53FBAF87_5507_914C_41BC_FAAB0750D689_0_HS_2_0_0_map.gif",
                             "height": 115,
                             "class": "ImageResourceLevel",
                             "width": 147
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -26.83,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -8.58,
                          "hfov": 15.8
                         }
                        ],
                        "enabledInCardboard": true
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_5859A9D7_5501_B0CC_41B5_07316C1A51DC",
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67, this.camera_558C9607_5E0E_8721_41C6_D43E2F4D6015); this.mainPlayList.set('selectedIndex', 17)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_53FBAF87_5507_914C_41BC_FAAB0750D689_0_HS_1_0.png",
                             "height": 217,
                             "class": "ImageResourceLevel",
                             "width": 294
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": 125.27,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -26.81,
                          "hfov": 15.79
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_53FBAF87_5507_914C_41BC_FAAB0750D689_0_HS_1_0_0_map.gif",
                             "height": 108,
                             "class": "ImageResourceLevel",
                             "width": 147
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -26.81,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 125.27,
                          "hfov": 15.79
                         }
                        ],
                        "enabledInCardboard": true
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_5843D0B6_5500_8F4C_41CD_27C9E78AD4BF",
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31, this.camera_558B25FE_5E0E_84E2_41D0_683C06D3F65F); this.mainPlayList.set('selectedIndex', 18)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_53FBAF87_5507_914C_41BC_FAAB0750D689_0_HS_0_0.png",
                             "height": 204,
                             "class": "ImageResourceLevel",
                             "width": 278
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": -132.07,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -29.8,
                          "hfov": 14.5
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_53FBAF87_5507_914C_41BC_FAAB0750D689_0_HS_0_0_0_map.gif",
                             "height": 102,
                             "class": "ImageResourceLevel",
                             "width": 139
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -29.8,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -132.07,
                          "hfov": 14.5
                         }
                        ],
                        "enabledInCardboard": true
                       },
                       {
                        "image": {
                         "levels": [
                          {
                           "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                           "height": 900,
                           "class": "ImageResourceLevel",
                           "width": 900
                          }
                         ],
                         "class": "ImageResource"
                        },
                        "id": "panorama_53FBAF87_5507_914C_41BC_FAAB0750D689_tcap0",
                        "class": "TripodCapPanoramaOverlay",
                        "rotate": false,
                        "angle": 0,
                        "inertia": false,
                        "hfov": 36
                       }
                      ],
                      "right": {
                       "levels": [
                        {
                         "url": "media/panorama_53FBAF87_5507_914C_41BC_FAAB0750D689_r_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_53FBAF87_5507_914C_41BC_FAAB0750D689_r.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "front": {
                       "levels": [
                        {
                         "url": "media/panorama_53FBAF87_5507_914C_41BC_FAAB0750D689_f_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_53FBAF87_5507_914C_41BC_FAAB0750D689_f.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "class": "CubicPanoramaFrame",
                      "back": {
                       "levels": [
                        {
                         "url": "media/panorama_53FBAF87_5507_914C_41BC_FAAB0750D689_b_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_53FBAF87_5507_914C_41BC_FAAB0750D689_b.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "top": {
                       "levels": [
                        {
                         "url": "media/panorama_53FBAF87_5507_914C_41BC_FAAB0750D689_u_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_53FBAF87_5507_914C_41BC_FAAB0750D689_u.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "bottom": {
                       "levels": [
                        {
                         "url": "media/panorama_53FBAF87_5507_914C_41BC_FAAB0750D689_d_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_53FBAF87_5507_914C_41BC_FAAB0750D689_d.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "left": {
                       "levels": [
                        {
                         "url": "media/panorama_53FBAF87_5507_914C_41BC_FAAB0750D689_l_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_53FBAF87_5507_914C_41BC_FAAB0750D689_l.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "thumbnailUrl": "media/panorama_53FBAF87_5507_914C_41BC_FAAB0750D689_t.jpg"
                     }
                    ],
                    "thumbnailUrl": "media/panorama_53FBAF87_5507_914C_41BC_FAAB0750D689_t.jpg",
                    "hfovMin": 60,
                    "pitch": 0,
                    "id": "panorama_53FBAF87_5507_914C_41BC_FAAB0750D689"
                   },
                   "backwardYaw": -132.07,
                   "class": "AdjacentPanorama",
                   "yaw": -37.99,
                   "distance": 1
                  },
                  {
                   "panorama": "this.panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67",
                   "backwardYaw": -165.84,
                   "class": "AdjacentPanorama",
                   "yaw": -1.85,
                   "distance": 1
                  }
                 ],
                 "label": "IMG_20190802_092605",
                 "hfovMax": 130,
                 "partial": false,
                 "class": "Panorama",
                 "hfov": 360,
                 "vfov": 180,
                 "frames": [
                  {
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_58A7A298_5501_B344_41C7_CFC51CDB185F",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67, this.camera_54E904B9_5E0E_9B61_41B8_37353827419D); this.mainPlayList.set('selectedIndex', 17)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31_0_HS_3_0.png",
                          "height": 184,
                          "class": "ImageResourceLevel",
                          "width": 334
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": -1.85,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -22.04,
                       "hfov": 18.6
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31_0_HS_3_0_0_map.gif",
                          "height": 92,
                          "class": "ImageResourceLevel",
                          "width": 167
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -22.04,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -1.85,
                       "hfov": 18.6
                      }
                     ],
                     "enabledInCardboard": true
                    },
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_58DAF0D4_5500_90CC_41C9_A1A455791556",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.mainPlayList.set('selectedIndex', 15)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31_0_HS_2_0.png",
                          "height": 184,
                          "class": "ImageResourceLevel",
                          "width": 291
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": -70.1,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -21.88,
                       "hfov": 16.24
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31_0_HS_2_0_0_map.gif",
                          "height": 92,
                          "class": "ImageResourceLevel",
                          "width": 145
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -21.88,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -70.1,
                       "hfov": 16.24
                      }
                     ],
                     "enabledInCardboard": true
                    },
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_5B48C57C_5500_B1BC_4172_78CE781B1E52",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_53FBAF87_5507_914C_41BC_FAAB0750D689, this.camera_54D454AF_5E0E_9B61_41C8_5B4803CBAA18); this.mainPlayList.set('selectedIndex', 16)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31_0_HS_1_0.png",
                          "height": 204,
                          "class": "ImageResourceLevel",
                          "width": 196
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": -37.99,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -32.77,
                       "hfov": 9.89
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31_0_HS_1_0_0_map.gif",
                          "height": 102,
                          "class": "ImageResourceLevel",
                          "width": 98
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -32.77,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -37.99,
                       "hfov": 9.89
                      }
                     ],
                     "enabledInCardboard": true
                    },
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_5B6AA458_5501_97C4_41C7_C6E4518A16A6",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_520CED68_5501_91C4_41D0_F2742460DC21, this.camera_54D2049C_5E0E_9B26_4198_DF027726B4BA); this.mainPlayList.set('selectedIndex', 20)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31_0_HS_0_0.png",
                          "height": 214,
                          "class": "ImageResourceLevel",
                          "width": 301
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": 167.62,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -38.41,
                       "hfov": 14.19
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31_0_HS_0_0_0_map.gif",
                          "height": 107,
                          "class": "ImageResourceLevel",
                          "width": 150
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -38.41,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 167.62,
                       "hfov": 14.19
                      }
                     ],
                     "enabledInCardboard": true
                    },
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_7867A8D6_5503_70CC_4196_1080D0A0805E",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA, this.camera_54D744A5_5E0E_9B61_41B5_6EFC5DBD6DB0); this.mainPlayList.set('selectedIndex', 3)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31_0_HS_4_0.png",
                          "height": 198,
                          "class": "ImageResourceLevel",
                          "width": 176
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": 134.58,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -33.86,
                       "hfov": 8.77
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31_0_HS_4_0_0_map.gif",
                          "height": 99,
                          "class": "ImageResourceLevel",
                          "width": 88
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -33.86,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 134.58,
                       "hfov": 8.77
                      }
                     ],
                     "enabledInCardboard": true
                    },
                    {
                     "image": {
                      "levels": [
                       {
                        "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                        "height": 900,
                        "class": "ImageResourceLevel",
                        "width": 900
                       }
                      ],
                      "class": "ImageResource"
                     },
                     "id": "panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31_tcap0",
                     "class": "TripodCapPanoramaOverlay",
                     "rotate": false,
                     "angle": 0,
                     "inertia": false,
                     "hfov": 36
                    }
                   ],
                   "right": {
                    "levels": [
                     {
                      "url": "media/panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31_r_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31_r.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "front": {
                    "levels": [
                     {
                      "url": "media/panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31_f_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31_f.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "class": "CubicPanoramaFrame",
                   "back": {
                    "levels": [
                     {
                      "url": "media/panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31_b_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31_b.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "top": {
                    "levels": [
                     {
                      "url": "media/panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31_u_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31_u.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "bottom": {
                    "levels": [
                     {
                      "url": "media/panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31_d_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31_d.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "left": {
                    "levels": [
                     {
                      "url": "media/panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31_l_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31_l.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31_t.jpg"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31_t.jpg",
                 "hfovMin": 60,
                 "pitch": 0,
                 "id": "panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31"
                },
                "backwardYaw": -1.85,
                "class": "AdjacentPanorama",
                "yaw": -165.84,
                "distance": 1
               },
               {
                "panorama": "this.panorama_53FBAF87_5507_914C_41BC_FAAB0750D689",
                "backwardYaw": 125.27,
                "class": "AdjacentPanorama",
                "yaw": -98.78,
                "distance": 1
               },
               {
                "panorama": "this.panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440",
                "backwardYaw": 82.01,
                "class": "AdjacentPanorama",
                "yaw": 87.16,
                "distance": 1
               }
              ],
              "label": "IMG_20190802_092546",
              "hfovMax": 130,
              "partial": false,
              "class": "Panorama",
              "hfov": 360,
              "vfov": 180,
              "frames": [
               {
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_59A75186_5500_914C_41D4_F2D5BD33D441",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440, this.camera_550F3162_5E0E_9DE3_41D0_78A35F05A4AB); this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67_0_HS_2_0.png",
                       "height": 287,
                       "class": "ImageResourceLevel",
                       "width": 423
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 87.16,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -42.36,
                    "hfov": 18.79
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67_0_HS_2_0_0_map.gif",
                       "height": 135,
                       "class": "ImageResourceLevel",
                       "width": 200
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -42.36,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 87.16,
                    "hfov": 18.79
                   }
                  ],
                  "enabledInCardboard": true
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_59F473E6_5500_90CC_41C5_13649E987219",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_53FBAF87_5507_914C_41BC_FAAB0750D689, this.camera_550B7159_5E0E_9D21_41C5_7FC1284969EB); this.mainPlayList.set('selectedIndex', 16)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67_0_HS_1_0.png",
                       "height": 290,
                       "class": "ImageResourceLevel",
                       "width": 268
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -98.78,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -29.7,
                    "hfov": 14
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67_0_HS_1_0_0_map.gif",
                       "height": 145,
                       "class": "ImageResourceLevel",
                       "width": 134
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -29.7,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -98.78,
                    "hfov": 14
                   }
                  ],
                  "enabledInCardboard": true
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_59CC3929_5500_9144_41BD_1AAB0A85C0F6",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31, this.camera_54F79150_5E0E_9D3F_41D2_B9AE61B69F81); this.mainPlayList.set('selectedIndex', 18)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67_0_HS_0_0.png",
                       "height": 227,
                       "class": "ImageResourceLevel",
                       "width": 305
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -165.84,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -22.93,
                    "hfov": 16.85
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67_0_HS_0_0_0_map.gif",
                       "height": 113,
                       "class": "ImageResourceLevel",
                       "width": 152
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -22.93,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -165.84,
                    "hfov": 16.85
                   }
                  ],
                  "enabledInCardboard": true
                 },
                 {
                  "image": {
                   "levels": [
                    {
                     "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                     "height": 900,
                     "class": "ImageResourceLevel",
                     "width": 900
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "id": "panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67_tcap0",
                  "class": "TripodCapPanoramaOverlay",
                  "rotate": false,
                  "angle": 0,
                  "inertia": false,
                  "hfov": 36
                 }
                ],
                "right": {
                 "levels": [
                  {
                   "url": "media/panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67_r_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67_r.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "front": {
                 "levels": [
                  {
                   "url": "media/panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67_f_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67_f.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "CubicPanoramaFrame",
                "back": {
                 "levels": [
                  {
                   "url": "media/panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67_b_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67_b.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "top": {
                 "levels": [
                  {
                   "url": "media/panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67_u_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67_u.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "bottom": {
                 "levels": [
                  {
                   "url": "media/panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67_d_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67_d.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "left": {
                 "levels": [
                  {
                   "url": "media/panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67_l_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67_l.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67_t.jpg"
               }
              ],
              "thumbnailUrl": "media/panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67_t.jpg",
              "hfovMin": 60,
              "pitch": 0,
              "id": "panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67"
             },
             "backwardYaw": 87.16,
             "class": "AdjacentPanorama",
             "yaw": 82.01,
             "distance": 1
            },
            {
             "panorama": "this.panorama_53EFE11F_5501_717C_41BC_62660AE64D50",
             "backwardYaw": -174.71,
             "class": "AdjacentPanorama",
             "yaw": 2.91,
             "distance": 1
            },
            {
             "panorama": "this.panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F",
             "backwardYaw": -0.68,
             "class": "AdjacentPanorama",
             "yaw": 174.82,
             "distance": 1
            }
           ],
           "label": "IMG_20190802_092824",
           "hfovMax": 130,
           "partial": false,
           "class": "Panorama",
           "hfov": 360,
           "vfov": 180,
           "frames": [
            {
             "overlays": [
              {
               "rollOverDisplay": false,
               "id": "overlay_590BB80B_5503_FF44_41B0_DDC03D7BEE14",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67, this.camera_555D820E_5E0E_9F23_41CC_75FF20E7B40D); this.mainPlayList.set('selectedIndex', 17)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440_0_HS_3_0.png",
                    "height": 264,
                    "class": "ImageResourceLevel",
                    "width": 245
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 82.01,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -37.39,
                 "hfov": 11.71
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440_0_HS_3_0_0_map.gif",
                    "height": 132,
                    "class": "ImageResourceLevel",
                    "width": 122
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -37.39,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 82.01,
                 "hfov": 11.71
                }
               ],
               "enabledInCardboard": true
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_59774E64_5503_73CC_41C9_6CD6F9C3FC8D",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_53EFE11F_5501_717C_41BC_62660AE64D50, this.camera_55576218_5E0E_9F2F_4178_3DA7DD276B53); this.mainPlayList.set('selectedIndex', 4)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440_0_HS_2_0.png",
                    "height": 257,
                    "class": "ImageResourceLevel",
                    "width": 222
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 2.91,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -19.9,
                 "hfov": 12.54
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440_0_HS_2_0_0_map.gif",
                    "height": 128,
                    "class": "ImageResourceLevel",
                    "width": 111
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -19.9,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 2.91,
                 "hfov": 12.54
                }
               ],
               "enabledInCardboard": true
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_5966343E_5501_77BC_41C7_FE1030AD4047",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.mainPlayList.set('selectedIndex', 1)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440_0_HS_1_0.png",
                    "height": 217,
                    "class": "ImageResourceLevel",
                    "width": 255
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 139.72,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -27.42,
                 "hfov": 13.6
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440_0_HS_1_0_0_map.gif",
                    "height": 108,
                    "class": "ImageResourceLevel",
                    "width": 127
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -27.42,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 139.72,
                 "hfov": 13.6
                }
               ],
               "enabledInCardboard": true
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_59509797_5507_914C_41AA_38FE9F23D7E5",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F, this.camera_55688222_5E0E_9F63_41C9_FFBA253CA9C8); this.mainPlayList.set('selectedIndex', 6)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440_0_HS_0_0.png",
                    "height": 207,
                    "class": "ImageResourceLevel",
                    "width": 270
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 174.82,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -25.98,
                 "hfov": 14.61
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440_0_HS_0_0_0_map.gif",
                    "height": 103,
                    "class": "ImageResourceLevel",
                    "width": 135
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -25.98,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 174.82,
                 "hfov": 14.61
                }
               ],
               "enabledInCardboard": true
              },
              {
               "image": {
                "levels": [
                 {
                  "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                  "height": 900,
                  "class": "ImageResourceLevel",
                  "width": 900
                 }
                ],
                "class": "ImageResource"
               },
               "id": "panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440_tcap0",
               "class": "TripodCapPanoramaOverlay",
               "rotate": false,
               "angle": 0,
               "inertia": false,
               "hfov": 36
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "front": {
              "levels": [
               {
                "url": "media/panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "levels": [
               {
                "url": "media/panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "top": {
              "levels": [
               {
                "url": "media/panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "bottom": {
              "levels": [
               {
                "url": "media/panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "left": {
              "levels": [
               {
                "url": "media/panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440_t.jpg",
           "hfovMin": 60,
           "pitch": 0,
           "id": "panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440"
          },
          "backwardYaw": 174.82,
          "class": "AdjacentPanorama",
          "yaw": -0.68,
          "distance": 1
         },
         {
          "panorama": {
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F",
             "backwardYaw": 173.17,
             "class": "AdjacentPanorama",
             "yaw": -172.73,
             "distance": 1
            },
            {
             "panorama": {
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_5202A9E2_5500_90C4_41CB_3F44F94DDAF8",
                "backwardYaw": -50.86,
                "class": "AdjacentPanorama",
                "yaw": -131.15,
                "distance": 1
               }
              ],
              "label": "IMG_20190802_093152",
              "hfovMax": 130,
              "partial": false,
              "class": "Panorama",
              "hfov": 360,
              "vfov": 180,
              "frames": [
               {
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_65EA1050_5500_8FC4_4172_DE5AC07AC578",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.mainPlayList.set('selectedIndex', 23)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_520D61BF_5500_90BC_41D1_F071697540EF_0_HS_1_0.png",
                       "height": 198,
                       "class": "ImageResourceLevel",
                       "width": 248
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -6.79,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -27.09,
                    "hfov": 13.29
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_520D61BF_5500_90BC_41D1_F071697540EF_0_HS_1_0_0_map.gif",
                       "height": 99,
                       "class": "ImageResourceLevel",
                       "width": 124
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -27.09,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -6.79,
                    "hfov": 13.29
                   }
                  ],
                  "enabledInCardboard": true
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_6591F1ED_550F_90DC_41C8_D85CED9B617F",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_5202A9E2_5500_90C4_41CB_3F44F94DDAF8, this.camera_5528F567_5E0E_85E2_41BE_1058EA5667AD); this.mainPlayList.set('selectedIndex', 25)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_520D61BF_5500_90BC_41D1_F071697540EF_0_HS_0_0.png",
                       "height": 234,
                       "class": "ImageResourceLevel",
                       "width": 215
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -131.15,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -29.6,
                    "hfov": 11.26
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_520D61BF_5500_90BC_41D1_F071697540EF_0_HS_0_0_0_map.gif",
                       "height": 117,
                       "class": "ImageResourceLevel",
                       "width": 107
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -29.6,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -131.15,
                    "hfov": 11.26
                   }
                  ],
                  "enabledInCardboard": true
                 },
                 {
                  "image": {
                   "levels": [
                    {
                     "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                     "height": 900,
                     "class": "ImageResourceLevel",
                     "width": 900
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "id": "panorama_520D61BF_5500_90BC_41D1_F071697540EF_tcap0",
                  "class": "TripodCapPanoramaOverlay",
                  "rotate": false,
                  "angle": 0,
                  "inertia": false,
                  "hfov": 36
                 }
                ],
                "right": {
                 "levels": [
                  {
                   "url": "media/panorama_520D61BF_5500_90BC_41D1_F071697540EF_r_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_520D61BF_5500_90BC_41D1_F071697540EF_r.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "front": {
                 "levels": [
                  {
                   "url": "media/panorama_520D61BF_5500_90BC_41D1_F071697540EF_f_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_520D61BF_5500_90BC_41D1_F071697540EF_f.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "CubicPanoramaFrame",
                "back": {
                 "levels": [
                  {
                   "url": "media/panorama_520D61BF_5500_90BC_41D1_F071697540EF_b_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_520D61BF_5500_90BC_41D1_F071697540EF_b.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "top": {
                 "levels": [
                  {
                   "url": "media/panorama_520D61BF_5500_90BC_41D1_F071697540EF_u_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_520D61BF_5500_90BC_41D1_F071697540EF_u.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "bottom": {
                 "levels": [
                  {
                   "url": "media/panorama_520D61BF_5500_90BC_41D1_F071697540EF_d_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_520D61BF_5500_90BC_41D1_F071697540EF_d.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "left": {
                 "levels": [
                  {
                   "url": "media/panorama_520D61BF_5500_90BC_41D1_F071697540EF_l_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_520D61BF_5500_90BC_41D1_F071697540EF_l.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_520D61BF_5500_90BC_41D1_F071697540EF_t.jpg"
               }
              ],
              "thumbnailUrl": "media/panorama_520D61BF_5500_90BC_41D1_F071697540EF_t.jpg",
              "hfovMin": 60,
              "pitch": 0,
              "id": "panorama_520D61BF_5500_90BC_41D1_F071697540EF"
             },
             "backwardYaw": -131.15,
             "class": "AdjacentPanorama",
             "yaw": -50.86,
             "distance": 1
            }
           ],
           "label": "IMG_20190802_093208",
           "hfovMax": 130,
           "partial": false,
           "class": "Panorama",
           "hfov": 360,
           "vfov": 180,
           "frames": [
            {
             "overlays": [
              {
               "rollOverDisplay": false,
               "id": "overlay_477E15C4_550F_70CC_41CB_3D32E782971D",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_520D61BF_5500_90BC_41D1_F071697540EF, this.camera_55B8028F_5E0E_9F21_41D0_DC5D7A73D712); this.mainPlayList.set('selectedIndex', 24)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_5202A9E2_5500_90C4_41CB_3F44F94DDAF8_0_HS_1_0.png",
                    "height": 181,
                    "class": "ImageResourceLevel",
                    "width": 199
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -50.86,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -31.68,
                 "hfov": 10.18
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_5202A9E2_5500_90C4_41CB_3F44F94DDAF8_0_HS_1_0_0_map.gif",
                    "height": 90,
                    "class": "ImageResourceLevel",
                    "width": 99
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -31.68,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -50.86,
                 "hfov": 10.18
                }
               ],
               "enabledInCardboard": true
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_47016359_5501_71C4_41C1_A0542CECC415",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F, this.camera_55A75285_5E0E_9F20_41B0_3C805FD2E5C2); this.mainPlayList.set('selectedIndex', 6)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_5202A9E2_5500_90C4_41CB_3F44F94DDAF8_0_HS_0_0.png",
                    "height": 224,
                    "class": "ImageResourceLevel",
                    "width": 202
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -172.73,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -34.24,
                 "hfov": 10.06
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_5202A9E2_5500_90C4_41CB_3F44F94DDAF8_0_HS_0_0_0_map.gif",
                    "height": 112,
                    "class": "ImageResourceLevel",
                    "width": 101
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -34.24,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -172.73,
                 "hfov": 10.06
                }
               ],
               "enabledInCardboard": true
              },
              {
               "image": {
                "levels": [
                 {
                  "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                  "height": 900,
                  "class": "ImageResourceLevel",
                  "width": 900
                 }
                ],
                "class": "ImageResource"
               },
               "id": "panorama_5202A9E2_5500_90C4_41CB_3F44F94DDAF8_tcap0",
               "class": "TripodCapPanoramaOverlay",
               "rotate": false,
               "angle": 0,
               "inertia": false,
               "hfov": 36
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_5202A9E2_5500_90C4_41CB_3F44F94DDAF8_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_5202A9E2_5500_90C4_41CB_3F44F94DDAF8_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "front": {
              "levels": [
               {
                "url": "media/panorama_5202A9E2_5500_90C4_41CB_3F44F94DDAF8_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_5202A9E2_5500_90C4_41CB_3F44F94DDAF8_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "levels": [
               {
                "url": "media/panorama_5202A9E2_5500_90C4_41CB_3F44F94DDAF8_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_5202A9E2_5500_90C4_41CB_3F44F94DDAF8_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "top": {
              "levels": [
               {
                "url": "media/panorama_5202A9E2_5500_90C4_41CB_3F44F94DDAF8_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_5202A9E2_5500_90C4_41CB_3F44F94DDAF8_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "bottom": {
              "levels": [
               {
                "url": "media/panorama_5202A9E2_5500_90C4_41CB_3F44F94DDAF8_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_5202A9E2_5500_90C4_41CB_3F44F94DDAF8_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "left": {
              "levels": [
               {
                "url": "media/panorama_5202A9E2_5500_90C4_41CB_3F44F94DDAF8_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_5202A9E2_5500_90C4_41CB_3F44F94DDAF8_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_5202A9E2_5500_90C4_41CB_3F44F94DDAF8_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_5202A9E2_5500_90C4_41CB_3F44F94DDAF8_t.jpg",
           "hfovMin": 60,
           "pitch": 0,
           "id": "panorama_5202A9E2_5500_90C4_41CB_3F44F94DDAF8"
          },
          "backwardYaw": -172.73,
          "class": "AdjacentPanorama",
          "yaw": 173.17,
          "distance": 1
         },
         {
          "panorama": "this.panorama_53EE18E4_5500_90CC_41D3_5B2CF61F7EDF",
          "backwardYaw": 3.2,
          "class": "AdjacentPanorama",
          "yaw": -94.33,
          "distance": 1
         },
         {
          "panorama": "this.panorama_52650C80_5500_B744_41D2_7C4C8DBBF4E5",
          "backwardYaw": -3.04,
          "class": "AdjacentPanorama",
          "yaw": 52.71,
          "distance": 1
         }
        ],
        "label": "IMG_20190802_092910",
        "hfovMax": 130,
        "partial": false,
        "class": "Panorama",
        "hfov": 360,
        "vfov": 180,
        "frames": [
         {
          "overlays": [
           {
            "rollOverDisplay": false,
            "id": "overlay_5E758AE2_5500_F0C4_41C1_5CD2DC1F5997",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440, this.camera_524A937C_5E0E_9DE7_41C7_F1FB2DF79D35); this.mainPlayList.set('selectedIndex', 5)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F_0_HS_1_0.png",
                 "height": 224,
                 "class": "ImageResourceLevel",
                 "width": 341
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -0.68,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -17.06,
              "hfov": 19.57
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F_0_HS_1_0_0_map.gif",
                 "height": 112,
                 "class": "ImageResourceLevel",
                 "width": 170
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -17.06,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -0.68,
              "hfov": 19.57
             }
            ],
            "enabledInCardboard": true
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_5E96D44B_5503_77C4_41D1_239E1BC03D70",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_53EE18E4_5500_90CC_41D3_5B2CF61F7EDF, this.camera_52449396_5E0E_9D23_41AC_79F155F52903); this.mainPlayList.set('selectedIndex', 7)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F_0_HS_0_0.png",
                 "height": 214,
                 "class": "ImageResourceLevel",
                 "width": 354
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -94.33,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -32.75,
              "hfov": 17.88
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F_0_HS_0_0_0_map.gif",
                 "height": 107,
                 "class": "ImageResourceLevel",
                 "width": 177
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -32.75,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -94.33,
              "hfov": 17.88
             }
            ],
            "enabledInCardboard": true
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_729ACFB1_5500_9144_41B9_5E975AB2003B",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_5202A9E2_5500_90C4_41CB_3F44F94DDAF8, this.camera_52436386_5E0E_9D22_41D5_A62AE4416A3D); this.mainPlayList.set('selectedIndex', 25)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F_0_HS_4_0.png",
                 "height": 164,
                 "class": "ImageResourceLevel",
                 "width": 168
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 173.17,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -25.09,
              "hfov": 9.15
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F_0_HS_4_0_0_map.gif",
                 "height": 82,
                 "class": "ImageResourceLevel",
                 "width": 84
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -25.09,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 173.17,
              "hfov": 9.15
             }
            ],
            "enabledInCardboard": true
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_79E031D3_5500_F0C4_4191_7A97E03385BA",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_52650C80_5500_B744_41D2_7C4C8DBBF4E5, this.camera_525D63A2_5E0E_9D62_41B7_A3C44AA5AAD6); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F_0_HS_3_0.png",
                 "height": 211,
                 "class": "ImageResourceLevel",
                 "width": 205
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 52.71,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -35.13,
              "hfov": 10.11
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F_0_HS_3_0_0_map.gif",
                 "height": 105,
                 "class": "ImageResourceLevel",
                 "width": 102
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -35.13,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 52.71,
              "hfov": 10.11
             }
            ],
            "enabledInCardboard": true
           },
           {
            "image": {
             "levels": [
              {
               "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
               "height": 900,
               "class": "ImageResourceLevel",
               "width": 900
              }
             ],
             "class": "ImageResource"
            },
            "id": "panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F_tcap0",
            "class": "TripodCapPanoramaOverlay",
            "rotate": false,
            "angle": 0,
            "inertia": false,
            "hfov": 36
           }
          ],
          "right": {
           "levels": [
            {
             "url": "media/panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F_r_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F_r.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F_f_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F_f.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "levels": [
            {
             "url": "media/panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F_b_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F_b.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "top": {
           "levels": [
            {
             "url": "media/panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F_u_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F_d_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F_d.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "left": {
           "levels": [
            {
             "url": "media/panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F_l_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F_t.jpg"
         }
        ],
        "thumbnailUrl": "media/panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F_t.jpg",
        "hfovMin": 60,
        "pitch": 0,
        "id": "panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F"
       },
       "backwardYaw": 52.71,
       "class": "AdjacentPanorama",
       "yaw": -3.04,
       "distance": 1
      },
      {
       "panorama": "this.panorama_53E31709_5500_9144_41A5_09BBD7671127",
       "backwardYaw": 41.72,
       "class": "AdjacentPanorama",
       "yaw": -152.64,
       "distance": 1
      }
     ],
     "label": "IMG_20190802_092837",
     "hfovMax": 120,
     "partial": false,
     "class": "Panorama",
     "hfov": 360,
     "vfov": 180,
     "frames": [
      {
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_5FD646D1_5500_B0C4_41CF_4F2A8BF28536",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F, this.camera_52AEF415_5E0E_9B21_41D0_60B319B81308); this.mainPlayList.set('selectedIndex', 6)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_52650C80_5500_B744_41D2_7C4C8DBBF4E5_0_HS_0_0.png",
              "height": 336,
              "class": "ImageResourceLevel",
              "width": 387
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -3.04,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -47.52,
           "hfov": 15.7
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_52650C80_5500_B744_41D2_7C4C8DBBF4E5_0_HS_0_0_0_map.gif",
              "height": 168,
              "class": "ImageResourceLevel",
              "width": 193
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -47.52,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -3.04,
           "hfov": 15.7
          }
         ],
         "enabledInCardboard": true
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_736DD21C_5501_937C_41C2_71F9AAA4EBBF",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_53E31709_5500_9144_41A5_09BBD7671127, this.camera_52A68424_5E0E_9B67_41C9_1472E9618CAB); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_52650C80_5500_B744_41D2_7C4C8DBBF4E5_0_HS_1_0.png",
              "height": 181,
              "class": "ImageResourceLevel",
              "width": 192
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -152.64,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -29.59,
           "hfov": 10.05
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_52650C80_5500_B744_41D2_7C4C8DBBF4E5_0_HS_1_0_0_map.gif",
              "height": 90,
              "class": "ImageResourceLevel",
              "width": 96
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -29.59,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -152.64,
           "hfov": 10.05
          }
         ],
         "enabledInCardboard": true
        },
        {
         "image": {
          "levels": [
           {
            "url": "media/panorama_52650C80_5500_B744_41D2_7C4C8DBBF4E5_tcap0.png",
            "height": 900,
            "class": "ImageResourceLevel",
            "width": 900
           }
          ],
          "class": "ImageResource"
         },
         "id": "panorama_52650C80_5500_B744_41D2_7C4C8DBBF4E5_tcap0",
         "class": "TripodCapPanoramaOverlay",
         "rotate": false,
         "angle": 0,
         "inertia": false,
         "hfov": 36
        }
       ],
       "right": {
        "levels": [
         {
          "url": "media/panorama_52650C80_5500_B744_41D2_7C4C8DBBF4E5_r_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_52650C80_5500_B744_41D2_7C4C8DBBF4E5_r.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_52650C80_5500_B744_41D2_7C4C8DBBF4E5_f_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_52650C80_5500_B744_41D2_7C4C8DBBF4E5_f.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "class": "CubicPanoramaFrame",
       "back": {
        "levels": [
         {
          "url": "media/panorama_52650C80_5500_B744_41D2_7C4C8DBBF4E5_b_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_52650C80_5500_B744_41D2_7C4C8DBBF4E5_b.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "url": "media/panorama_52650C80_5500_B744_41D2_7C4C8DBBF4E5_u_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_52650C80_5500_B744_41D2_7C4C8DBBF4E5_u.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_52650C80_5500_B744_41D2_7C4C8DBBF4E5_d_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_52650C80_5500_B744_41D2_7C4C8DBBF4E5_d.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "left": {
        "levels": [
         {
          "url": "media/panorama_52650C80_5500_B744_41D2_7C4C8DBBF4E5_l_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_52650C80_5500_B744_41D2_7C4C8DBBF4E5_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_52650C80_5500_B744_41D2_7C4C8DBBF4E5_t.jpg"
      }
     ],
     "thumbnailUrl": "media/panorama_52650C80_5500_B744_41D2_7C4C8DBBF4E5_t.jpg",
     "hfovMin": 60,
     "pitch": 0,
     "id": "panorama_52650C80_5500_B744_41D2_7C4C8DBBF4E5"
    },
    "backwardYaw": -152.64,
    "class": "AdjacentPanorama",
    "yaw": 41.72,
    "distance": 1
   }
  ],
  "label": "IMG_20190802_092852",
  "hfovMax": 130,
  "partial": false,
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_5C55519D_5501_B17C_41D2_38158DB0A51A",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_52650C80_5500_B744_41D2_7C4C8DBBF4E5, this.camera_557E95EB_5E0E_84E1_41D0_36C04FBCED42); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_0_HS_0_0.png",
           "height": 293,
           "class": "ImageResourceLevel",
           "width": 275
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 41.72,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -27.62,
        "hfov": 14.64
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_0_HS_0_0_0_map.gif",
           "height": 146,
           "class": "ImageResourceLevel",
           "width": 137
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -27.62,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 41.72,
        "hfov": 14.64
       }
      ],
      "enabledInCardboard": true
     },
     {
      "image": {
       "levels": [
        {
         "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
         "height": 900,
         "class": "ImageResourceLevel",
         "width": 900
        }
       ],
       "class": "ImageResource"
      },
      "id": "panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0",
      "class": "TripodCapPanoramaOverlay",
      "rotate": false,
      "angle": 0,
      "inertia": false,
      "hfov": 36
     }
    ],
    "right": {
     "levels": [
      {
       "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_t.jpg"
   }
  ],
  "thumbnailUrl": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_t.jpg",
  "hfovMin": 60,
  "pitch": 0,
  "id": "panorama_53E31709_5500_9144_41A5_09BBD7671127"
 },
 {
  "buttonRestart": {
   "height": 40,
   "paddingRight": 0,
   "transparencyActive": false,
   "borderRadius": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "mode": "push",
   "minHeight": 0,
   "verticalAlign": "middle",
   "shadow": false,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D1_62725E030F65_rollover.png",
   "class": "IconButton",
   "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D1_62725E030F65.png",
   "cursor": "hand",
   "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D1_62725E030F65_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "width": 40,
   "borderSize": 0,
   "horizontalAlign": "center",
   "id": "IconButton_55DC4FA8_5E27_15CF_41D1_62725E030F65"
  },
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "buttonZoomOut": "this.IconButton_55DC4FA8_5E27_15CF_41CE_E0BE2C156B35",
  "displayPlaybackBar": true,
  "buttonMoveRight": {
   "height": 40,
   "paddingRight": 0,
   "transparencyActive": false,
   "borderRadius": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "mode": "push",
   "minHeight": 0,
   "verticalAlign": "middle",
   "shadow": false,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41BD_DE68C880FC1E_rollover.png",
   "class": "IconButton",
   "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41BD_DE68C880FC1E.png",
   "cursor": "hand",
   "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41BD_DE68C880FC1E_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "width": 40,
   "borderSize": 0,
   "horizontalAlign": "center",
   "id": "IconButton_55DC4FA8_5E27_15CF_41BD_DE68C880FC1E"
  },
  "buttonPause": {
   "height": 40,
   "paddingRight": 0,
   "transparencyActive": false,
   "borderRadius": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "mode": "toggle",
   "minHeight": 0,
   "verticalAlign": "middle",
   "shadow": false,
   "paddingTop": 0,
   "class": "IconButton",
   "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41C8_9487966219ED.png",
   "cursor": "hand",
   "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41C8_9487966219ED_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "width": 40,
   "borderSize": 0,
   "horizontalAlign": "center",
   "id": "IconButton_55DC4FA8_5E27_15CF_41C8_9487966219ED"
  },
  "buttonMoveUp": {
   "height": 40,
   "paddingRight": 0,
   "transparencyActive": false,
   "borderRadius": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "mode": "push",
   "minHeight": 0,
   "verticalAlign": "middle",
   "shadow": false,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41B5_0CA08581B09B_rollover.png",
   "class": "IconButton",
   "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41B5_0CA08581B09B.png",
   "cursor": "hand",
   "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41B5_0CA08581B09B_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "width": 40,
   "borderSize": 0,
   "horizontalAlign": "center",
   "id": "IconButton_55DC4FA8_5E27_15CF_41B5_0CA08581B09B"
  },
  "buttonPlayLeft": {
   "height": 40,
   "paddingRight": 0,
   "transparencyActive": false,
   "borderRadius": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "mode": "push",
   "minHeight": 0,
   "verticalAlign": "middle",
   "shadow": false,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D3_547F7647C674_rollover.png",
   "class": "IconButton",
   "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D3_547F7647C674.png",
   "cursor": "hand",
   "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D3_547F7647C674_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "width": 40,
   "borderSize": 0,
   "horizontalAlign": "center",
   "id": "IconButton_55DC4FA8_5E27_15CF_41D3_547F7647C674"
  },
  "touchControlMode": "drag_acceleration",
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonPlayRight": {
   "height": 40,
   "paddingRight": 0,
   "transparencyActive": false,
   "borderRadius": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "mode": "push",
   "minHeight": 0,
   "verticalAlign": "middle",
   "shadow": false,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D0_E8AB54929A60_rollover.png",
   "class": "IconButton",
   "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D0_E8AB54929A60.png",
   "cursor": "hand",
   "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D0_E8AB54929A60_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "width": 40,
   "borderSize": 0,
   "horizontalAlign": "center",
   "id": "IconButton_55DC4FA8_5E27_15CF_41D0_E8AB54929A60"
  },
  "buttonZoomIn": "this.IconButton_55DC4FA8_5E27_15CF_41A4_95868C6A0842",
  "buttonMoveDown": {
   "height": 40,
   "paddingRight": 0,
   "transparencyActive": false,
   "borderRadius": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "mode": "push",
   "minHeight": 0,
   "verticalAlign": "middle",
   "shadow": false,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41CC_17B487E3D0C5_rollover.png",
   "class": "IconButton",
   "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41CC_17B487E3D0C5.png",
   "cursor": "hand",
   "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41CC_17B487E3D0C5_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "width": 40,
   "borderSize": 0,
   "horizontalAlign": "center",
   "id": "IconButton_55DC4FA8_5E27_15CF_41CC_17B487E3D0C5"
  },
  "buttonMoveLeft": {
   "height": 40,
   "paddingRight": 0,
   "transparencyActive": false,
   "borderRadius": 0,
   "paddingLeft": 0,
   "minWidth": 0,
   "mode": "push",
   "minHeight": 0,
   "verticalAlign": "middle",
   "shadow": false,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D5_532104041B82_rollover.png",
   "class": "IconButton",
   "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D5_532104041B82.png",
   "cursor": "hand",
   "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D5_532104041B82_pressed.png",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "width": 40,
   "borderSize": 0,
   "horizontalAlign": "center",
   "id": "IconButton_55DC4FA8_5E27_15CF_41D5_532104041B82"
  }
 },
 {
  "id": "panorama_53E31709_5500_9144_41A5_09BBD7671127_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 4.38,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -2.47
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_52650C80_5500_B744_41D2_7C4C8DBBF4E5",
 {
  "id": "panorama_52650C80_5500_B744_41D2_7C4C8DBBF4E5_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": -2.4,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -5.72
  },
  "automaticZoomSpeed": 10
 },
 {
  "vfov": 180,
  "label": "IMG_20190802_092737",
  "hfov": 360,
  "frames": [
   {
    "right": {
     "levels": [
      {
       "url": "media/panorama_524B00CA_5501_90C4_41D4_CD5CFBD024F8_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_524B00CA_5501_90C4_41D4_CD5CFBD024F8_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_524B00CA_5501_90C4_41D4_CD5CFBD024F8_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_524B00CA_5501_90C4_41D4_CD5CFBD024F8_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "url": "media/panorama_524B00CA_5501_90C4_41D4_CD5CFBD024F8_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_524B00CA_5501_90C4_41D4_CD5CFBD024F8_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_524B00CA_5501_90C4_41D4_CD5CFBD024F8_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_524B00CA_5501_90C4_41D4_CD5CFBD024F8_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_524B00CA_5501_90C4_41D4_CD5CFBD024F8_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_524B00CA_5501_90C4_41D4_CD5CFBD024F8_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_524B00CA_5501_90C4_41D4_CD5CFBD024F8_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_524B00CA_5501_90C4_41D4_CD5CFBD024F8_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_524B00CA_5501_90C4_41D4_CD5CFBD024F8_t.jpg"
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "id": "panorama_524B00CA_5501_90C4_41D4_CD5CFBD024F8",
  "class": "Panorama",
  "hfovMin": 60,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_524B00CA_5501_90C4_41D4_CD5CFBD024F8_t.jpg"
 },
 {
  "id": "panorama_524B00CA_5501_90C4_41D4_CD5CFBD024F8_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA",
 {
  "id": "panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -5.8,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -5.68
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_53EFE11F_5501_717C_41BC_62660AE64D50",
 {
  "id": "panorama_53EFE11F_5501_717C_41BC_62660AE64D50_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440",
 {
  "id": "panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F",
 {
  "id": "panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -5.77,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -95.27
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_53EE18E4_5500_90CC_41D3_5B2CF61F7EDF",
 {
  "id": "panorama_53EE18E4_5500_90CC_41D3_5B2CF61F7EDF_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": -0.98,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -179.79
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF",
 {
  "id": "panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 3.4,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 88.7
  },
  "automaticZoomSpeed": 10
 },
 {
  "adjacentPanoramas": [
   {
    "panorama": {
     "vfov": 180,
     "label": "IMG_20190802_093545",
     "hfov": 360,
     "frames": [
      {
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_79C71583_5501_9144_4192_2F5F3E80C0E9",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_53EE08F7_5500_B0CC_41B5_93024F30C090, this.camera_5514C19F_5E0E_9D21_41D1_27628478186B); this.mainPlayList.set('selectedIndex', 9)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_53EE00EB_5500_90C4_41CD_7F89353EC4CC_0_HS_1_0.png",
              "height": 267,
              "class": "ImageResourceLevel",
              "width": 199
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 0.83,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -31.25,
           "hfov": 10.22
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_53EE00EB_5500_90C4_41CD_7F89353EC4CC_0_HS_1_0_0_map.gif",
              "height": 133,
              "class": "ImageResourceLevel",
              "width": 99
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -31.25,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 0.83,
           "hfov": 10.22
          }
         ],
         "enabledInCardboard": true
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_79B2B4AD_5500_975C_4188_C2A69B70E66A",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.mainPlayList.set('selectedIndex', 11)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_53EE00EB_5500_90C4_41CD_7F89353EC4CC_0_HS_0_0.png",
              "height": 201,
              "class": "ImageResourceLevel",
              "width": 225
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -173.15,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -36.82,
           "hfov": 10.84
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_53EE00EB_5500_90C4_41CD_7F89353EC4CC_0_HS_0_0_0_map.gif",
              "height": 100,
              "class": "ImageResourceLevel",
              "width": 112
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -36.82,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -173.15,
           "hfov": 10.84
          }
         ],
         "enabledInCardboard": true
        },
        {
         "image": {
          "levels": [
           {
            "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
            "height": 900,
            "class": "ImageResourceLevel",
            "width": 900
           }
          ],
          "class": "ImageResource"
         },
         "id": "panorama_53EE00EB_5500_90C4_41CD_7F89353EC4CC_tcap0",
         "class": "TripodCapPanoramaOverlay",
         "rotate": false,
         "angle": 0,
         "inertia": false,
         "hfov": 36
        }
       ],
       "right": {
        "levels": [
         {
          "url": "media/panorama_53EE00EB_5500_90C4_41CD_7F89353EC4CC_r_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_53EE00EB_5500_90C4_41CD_7F89353EC4CC_r.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_53EE00EB_5500_90C4_41CD_7F89353EC4CC_f_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_53EE00EB_5500_90C4_41CD_7F89353EC4CC_f.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "class": "CubicPanoramaFrame",
       "back": {
        "levels": [
         {
          "url": "media/panorama_53EE00EB_5500_90C4_41CD_7F89353EC4CC_b_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_53EE00EB_5500_90C4_41CD_7F89353EC4CC_b.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "url": "media/panorama_53EE00EB_5500_90C4_41CD_7F89353EC4CC_u_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_53EE00EB_5500_90C4_41CD_7F89353EC4CC_u.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_53EE00EB_5500_90C4_41CD_7F89353EC4CC_d_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_53EE00EB_5500_90C4_41CD_7F89353EC4CC_d.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "left": {
        "levels": [
         {
          "url": "media/panorama_53EE00EB_5500_90C4_41CD_7F89353EC4CC_l_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_53EE00EB_5500_90C4_41CD_7F89353EC4CC_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_53EE00EB_5500_90C4_41CD_7F89353EC4CC_t.jpg"
      }
     ],
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_53EE08F7_5500_B0CC_41B5_93024F30C090",
       "backwardYaw": -174.34,
       "class": "AdjacentPanorama",
       "yaw": 0.83,
       "distance": 1
      }
     ],
     "hfovMax": 120,
     "partial": false,
     "id": "panorama_53EE00EB_5500_90C4_41CD_7F89353EC4CC",
     "class": "Panorama",
     "hfovMin": 60,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_53EE00EB_5500_90C4_41CD_7F89353EC4CC_t.jpg"
    },
    "backwardYaw": 0.83,
    "class": "AdjacentPanorama",
    "yaw": -174.34,
    "distance": 1
   },
   {
    "panorama": {
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_53EE08F7_5500_B0CC_41B5_93024F30C090",
       "backwardYaw": 55.58,
       "class": "AdjacentPanorama",
       "yaw": -147.2,
       "distance": 1
      },
      {
       "panorama": {
        "adjacentPanoramas": [
         {
          "panorama": {
           "adjacentPanoramas": [
            {
             "panorama": {
              "adjacentPanoramas": [
               {
                "panorama": {
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_47F210A2_5500_8F44_41C0_FAC4E8133026",
                   "backwardYaw": -172.55,
                   "class": "AdjacentPanorama",
                   "yaw": -146.49,
                   "distance": 1
                  },
                  {
                   "panorama": {
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A",
                      "backwardYaw": -90.36,
                      "class": "AdjacentPanorama",
                      "yaw": 90.82,
                      "distance": 1
                     },
                     {
                      "panorama": "this.panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7",
                      "backwardYaw": 11.62,
                      "class": "AdjacentPanorama",
                      "yaw": -113.72,
                      "distance": 1
                     }
                    ],
                    "label": "IMG_20190802_094331",
                    "hfovMax": 130,
                    "partial": false,
                    "class": "Panorama",
                    "hfov": 360,
                    "vfov": 180,
                    "frames": [
                     {
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_495E9BF7_5501_F0CC_41D4_2497C77117F4",
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A, this.camera_527F73CF_5E0E_9D21_41D5_EC605DCB8AD2); this.mainPlayList.set('selectedIndex', 57)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_47F237F5_551F_90CC_41CF_F8F3B8183CED_0_HS_2_0.png",
                             "height": 221,
                             "class": "ImageResourceLevel",
                             "width": 242
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": 90.82,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -14.15,
                          "hfov": 14.09
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_47F237F5_551F_90CC_41CF_F8F3B8183CED_0_HS_2_0_0_map.gif",
                             "height": 110,
                             "class": "ImageResourceLevel",
                             "width": 121
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -14.15,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 90.82,
                          "hfov": 14.09
                         }
                        ],
                        "enabledInCardboard": true
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_48117D1F_5500_F17C_41D5_0A7FA08F6883",
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.mainPlayList.set('selectedIndex', 47)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_47F237F5_551F_90CC_41CF_F8F3B8183CED_0_HS_1_0.png",
                             "height": 171,
                             "class": "ImageResourceLevel",
                             "width": 189
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": -14.13,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -7.83,
                          "hfov": 11.26
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_47F237F5_551F_90CC_41CF_F8F3B8183CED_0_HS_1_0_0_map.gif",
                             "height": 85,
                             "class": "ImageResourceLevel",
                             "width": 94
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -7.83,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -14.13,
                          "hfov": 11.26
                         }
                        ],
                        "enabledInCardboard": true
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_4B9D918D_5507_B15C_41BF_3E100F3DE88B",
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7, this.camera_527773DE_5E0E_9D22_41B7_C73C86439A06); this.mainPlayList.set('selectedIndex', 51)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_47F237F5_551F_90CC_41CF_F8F3B8183CED_0_HS_0_0.png",
                             "height": 247,
                             "class": "ImageResourceLevel",
                             "width": 199
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": -113.72,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -19.8,
                          "hfov": 11.25
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_47F237F5_551F_90CC_41CF_F8F3B8183CED_0_HS_0_0_0_map.gif",
                             "height": 123,
                             "class": "ImageResourceLevel",
                             "width": 99
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -19.8,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -113.72,
                          "hfov": 11.25
                         }
                        ],
                        "enabledInCardboard": true
                       },
                       {
                        "image": {
                         "levels": [
                          {
                           "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                           "height": 900,
                           "class": "ImageResourceLevel",
                           "width": 900
                          }
                         ],
                         "class": "ImageResource"
                        },
                        "id": "panorama_47F237F5_551F_90CC_41CF_F8F3B8183CED_tcap0",
                        "class": "TripodCapPanoramaOverlay",
                        "rotate": false,
                        "angle": 0,
                        "inertia": false,
                        "hfov": 36
                       }
                      ],
                      "right": {
                       "levels": [
                        {
                         "url": "media/panorama_47F237F5_551F_90CC_41CF_F8F3B8183CED_r_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_47F237F5_551F_90CC_41CF_F8F3B8183CED_r.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "front": {
                       "levels": [
                        {
                         "url": "media/panorama_47F237F5_551F_90CC_41CF_F8F3B8183CED_f_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_47F237F5_551F_90CC_41CF_F8F3B8183CED_f.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "class": "CubicPanoramaFrame",
                      "back": {
                       "levels": [
                        {
                         "url": "media/panorama_47F237F5_551F_90CC_41CF_F8F3B8183CED_b_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_47F237F5_551F_90CC_41CF_F8F3B8183CED_b.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "top": {
                       "levels": [
                        {
                         "url": "media/panorama_47F237F5_551F_90CC_41CF_F8F3B8183CED_u_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_47F237F5_551F_90CC_41CF_F8F3B8183CED_u.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "bottom": {
                       "levels": [
                        {
                         "url": "media/panorama_47F237F5_551F_90CC_41CF_F8F3B8183CED_d_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_47F237F5_551F_90CC_41CF_F8F3B8183CED_d.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "left": {
                       "levels": [
                        {
                         "url": "media/panorama_47F237F5_551F_90CC_41CF_F8F3B8183CED_l_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_47F237F5_551F_90CC_41CF_F8F3B8183CED_l.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "thumbnailUrl": "media/panorama_47F237F5_551F_90CC_41CF_F8F3B8183CED_t.jpg"
                     }
                    ],
                    "thumbnailUrl": "media/panorama_47F237F5_551F_90CC_41CF_F8F3B8183CED_t.jpg",
                    "hfovMin": 60,
                    "pitch": 0,
                    "id": "panorama_47F237F5_551F_90CC_41CF_F8F3B8183CED"
                   },
                   "backwardYaw": -113.72,
                   "class": "AdjacentPanorama",
                   "yaw": 11.62,
                   "distance": 1
                  },
                  {
                   "panorama": {
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7",
                      "backwardYaw": 84.48,
                      "class": "AdjacentPanorama",
                      "yaw": -159.27,
                      "distance": 1
                     },
                     {
                      "panorama": {
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_47F2DE99_551F_7344_41A2_ECC38631CA9D",
                         "backwardYaw": 7.76,
                         "class": "AdjacentPanorama",
                         "yaw": -3.44,
                         "distance": 1
                        },
                        {
                         "panorama": {
                          "adjacentPanoramas": [
                           {
                            "panorama": {
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_47F2FC80_5500_9744_41C1_B8876DF32F1B",
                               "backwardYaw": -79.86,
                               "class": "AdjacentPanorama",
                               "yaw": 171.19,
                               "distance": 1
                              }
                             ],
                             "label": "IMG_20190802_094215",
                             "hfovMax": 130,
                             "partial": false,
                             "class": "Panorama",
                             "hfov": 360,
                             "vfov": 180,
                             "frames": [
                              {
                               "overlays": [
                                {
                                 "rollOverDisplay": false,
                                 "id": "overlay_751DA798_5500_9144_41C0_217702610631",
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "click": "this.startPanoramaWithCamera(this.panorama_47F2FC80_5500_9744_41C1_B8876DF32F1B, this.camera_526683C5_5E0E_9D21_41B6_3F91B4E71825); this.mainPlayList.set('selectedIndex', 53)",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_47F212D7_5500_90CC_41C0_AF1BB2D3430B_0_HS_0_0.png",
                                      "height": 216,
                                      "class": "ImageResourceLevel",
                                      "width": 254
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "yaw": 171.19,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": -35.3,
                                   "hfov": 12.45
                                  }
                                 ],
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "url": "media/panorama_47F212D7_5500_90CC_41C0_AF1BB2D3430B_0_HS_0_0_0_map.gif",
                                      "height": 108,
                                      "class": "ImageResourceLevel",
                                      "width": 127
                                     }
                                    ],
                                    "class": "ImageResource"
                                   },
                                   "pitch": -35.3,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 171.19,
                                   "hfov": 12.45
                                  }
                                 ],
                                 "enabledInCardboard": true
                                },
                                {
                                 "image": {
                                  "levels": [
                                   {
                                    "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                                    "height": 900,
                                    "class": "ImageResourceLevel",
                                    "width": 900
                                   }
                                  ],
                                  "class": "ImageResource"
                                 },
                                 "id": "panorama_47F212D7_5500_90CC_41C0_AF1BB2D3430B_tcap0",
                                 "class": "TripodCapPanoramaOverlay",
                                 "rotate": false,
                                 "angle": 0,
                                 "inertia": false,
                                 "hfov": 36
                                }
                               ],
                               "right": {
                                "levels": [
                                 {
                                  "url": "media/panorama_47F212D7_5500_90CC_41C0_AF1BB2D3430B_r_hq.jpeg",
                                  "height": 1904,
                                  "class": "ImageResourceLevel",
                                  "width": 1904
                                 },
                                 {
                                  "url": "media/panorama_47F212D7_5500_90CC_41C0_AF1BB2D3430B_r.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "front": {
                                "levels": [
                                 {
                                  "url": "media/panorama_47F212D7_5500_90CC_41C0_AF1BB2D3430B_f_hq.jpeg",
                                  "height": 1904,
                                  "class": "ImageResourceLevel",
                                  "width": 1904
                                 },
                                 {
                                  "url": "media/panorama_47F212D7_5500_90CC_41C0_AF1BB2D3430B_f.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "class": "CubicPanoramaFrame",
                               "back": {
                                "levels": [
                                 {
                                  "url": "media/panorama_47F212D7_5500_90CC_41C0_AF1BB2D3430B_b_hq.jpeg",
                                  "height": 1904,
                                  "class": "ImageResourceLevel",
                                  "width": 1904
                                 },
                                 {
                                  "url": "media/panorama_47F212D7_5500_90CC_41C0_AF1BB2D3430B_b.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "top": {
                                "levels": [
                                 {
                                  "url": "media/panorama_47F212D7_5500_90CC_41C0_AF1BB2D3430B_u_hq.jpeg",
                                  "height": 1904,
                                  "class": "ImageResourceLevel",
                                  "width": 1904
                                 },
                                 {
                                  "url": "media/panorama_47F212D7_5500_90CC_41C0_AF1BB2D3430B_u.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "bottom": {
                                "levels": [
                                 {
                                  "url": "media/panorama_47F212D7_5500_90CC_41C0_AF1BB2D3430B_d_hq.jpeg",
                                  "height": 1904,
                                  "class": "ImageResourceLevel",
                                  "width": 1904
                                 },
                                 {
                                  "url": "media/panorama_47F212D7_5500_90CC_41C0_AF1BB2D3430B_d.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "left": {
                                "levels": [
                                 {
                                  "url": "media/panorama_47F212D7_5500_90CC_41C0_AF1BB2D3430B_l_hq.jpeg",
                                  "height": 1904,
                                  "class": "ImageResourceLevel",
                                  "width": 1904
                                 },
                                 {
                                  "url": "media/panorama_47F212D7_5500_90CC_41C0_AF1BB2D3430B_l.jpeg",
                                  "height": 1024,
                                  "class": "ImageResourceLevel",
                                  "width": 1024
                                 }
                                ],
                                "class": "ImageResource"
                               },
                               "thumbnailUrl": "media/panorama_47F212D7_5500_90CC_41C0_AF1BB2D3430B_t.jpg"
                              }
                             ],
                             "thumbnailUrl": "media/panorama_47F212D7_5500_90CC_41C0_AF1BB2D3430B_t.jpg",
                             "hfovMin": 60,
                             "pitch": 0,
                             "id": "panorama_47F212D7_5500_90CC_41C0_AF1BB2D3430B"
                            },
                            "backwardYaw": 171.19,
                            "class": "AdjacentPanorama",
                            "yaw": -79.86,
                            "distance": 1
                           },
                           {
                            "panorama": "this.panorama_47F2D5BD_551F_70BC_41C8_F1CA9A7ADDD1",
                            "backwardYaw": -173.23,
                            "class": "AdjacentPanorama",
                            "yaw": 89.93,
                            "distance": 1
                           }
                          ],
                          "label": "IMG_20190802_094231",
                          "hfovMax": 130,
                          "partial": false,
                          "class": "Panorama",
                          "hfov": 360,
                          "vfov": 180,
                          "frames": [
                           {
                            "overlays": [
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_7583EE0C_5500_F35C_41C5_72408A42DC4D",
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_47F212D7_5500_90CC_41C0_AF1BB2D3430B, this.camera_55F54311_5E0E_9D21_41CA_BC0AFA312276); this.mainPlayList.set('selectedIndex', 52)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_47F2FC80_5500_9744_41C1_B8876DF32F1B_0_HS_1_0.png",
                                   "height": 211,
                                   "class": "ImageResourceLevel",
                                   "width": 209
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "yaw": -79.86,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -28.91,
                                "hfov": 10.99
                               }
                              ],
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_47F2FC80_5500_9744_41C1_B8876DF32F1B_0_HS_1_0_0_map.gif",
                                   "height": 105,
                                   "class": "ImageResourceLevel",
                                   "width": 104
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -28.91,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -79.86,
                                "hfov": 10.99
                               }
                              ],
                              "enabledInCardboard": true
                             },
                             {
                              "rollOverDisplay": false,
                              "id": "overlay_756FA414_5500_974C_41A4_5FC380332D7A",
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "click": "this.startPanoramaWithCamera(this.panorama_47F2D5BD_551F_70BC_41C8_F1CA9A7ADDD1, this.camera_520E531B_5E0E_9D21_41BB_68035914010F); this.mainPlayList.set('selectedIndex', 54)",
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_47F2FC80_5500_9744_41C1_B8876DF32F1B_0_HS_0_0.png",
                                   "height": 148,
                                   "class": "ImageResourceLevel",
                                   "width": 149
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "yaw": 89.93,
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -24.55,
                                "hfov": 8.18
                               }
                              ],
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "url": "media/panorama_47F2FC80_5500_9744_41C1_B8876DF32F1B_0_HS_0_0_0_map.gif",
                                   "height": 74,
                                   "class": "ImageResourceLevel",
                                   "width": 74
                                  }
                                 ],
                                 "class": "ImageResource"
                                },
                                "pitch": -24.55,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 89.93,
                                "hfov": 8.18
                               }
                              ],
                              "enabledInCardboard": true
                             },
                             {
                              "image": {
                               "levels": [
                                {
                                 "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                                 "height": 900,
                                 "class": "ImageResourceLevel",
                                 "width": 900
                                }
                               ],
                               "class": "ImageResource"
                              },
                              "id": "panorama_47F2FC80_5500_9744_41C1_B8876DF32F1B_tcap0",
                              "class": "TripodCapPanoramaOverlay",
                              "rotate": false,
                              "angle": 0,
                              "inertia": false,
                              "hfov": 36
                             }
                            ],
                            "right": {
                             "levels": [
                              {
                               "url": "media/panorama_47F2FC80_5500_9744_41C1_B8876DF32F1B_r_hq.jpeg",
                               "height": 1904,
                               "class": "ImageResourceLevel",
                               "width": 1904
                              },
                              {
                               "url": "media/panorama_47F2FC80_5500_9744_41C1_B8876DF32F1B_r.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "front": {
                             "levels": [
                              {
                               "url": "media/panorama_47F2FC80_5500_9744_41C1_B8876DF32F1B_f_hq.jpeg",
                               "height": 1904,
                               "class": "ImageResourceLevel",
                               "width": 1904
                              },
                              {
                               "url": "media/panorama_47F2FC80_5500_9744_41C1_B8876DF32F1B_f.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "class": "CubicPanoramaFrame",
                            "back": {
                             "levels": [
                              {
                               "url": "media/panorama_47F2FC80_5500_9744_41C1_B8876DF32F1B_b_hq.jpeg",
                               "height": 1904,
                               "class": "ImageResourceLevel",
                               "width": 1904
                              },
                              {
                               "url": "media/panorama_47F2FC80_5500_9744_41C1_B8876DF32F1B_b.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "top": {
                             "levels": [
                              {
                               "url": "media/panorama_47F2FC80_5500_9744_41C1_B8876DF32F1B_u_hq.jpeg",
                               "height": 1904,
                               "class": "ImageResourceLevel",
                               "width": 1904
                              },
                              {
                               "url": "media/panorama_47F2FC80_5500_9744_41C1_B8876DF32F1B_u.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "bottom": {
                             "levels": [
                              {
                               "url": "media/panorama_47F2FC80_5500_9744_41C1_B8876DF32F1B_d_hq.jpeg",
                               "height": 1904,
                               "class": "ImageResourceLevel",
                               "width": 1904
                              },
                              {
                               "url": "media/panorama_47F2FC80_5500_9744_41C1_B8876DF32F1B_d.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "left": {
                             "levels": [
                              {
                               "url": "media/panorama_47F2FC80_5500_9744_41C1_B8876DF32F1B_l_hq.jpeg",
                               "height": 1904,
                               "class": "ImageResourceLevel",
                               "width": 1904
                              },
                              {
                               "url": "media/panorama_47F2FC80_5500_9744_41C1_B8876DF32F1B_l.jpeg",
                               "height": 1024,
                               "class": "ImageResourceLevel",
                               "width": 1024
                              }
                             ],
                             "class": "ImageResource"
                            },
                            "thumbnailUrl": "media/panorama_47F2FC80_5500_9744_41C1_B8876DF32F1B_t.jpg"
                           }
                          ],
                          "thumbnailUrl": "media/panorama_47F2FC80_5500_9744_41C1_B8876DF32F1B_t.jpg",
                          "hfovMin": 60,
                          "pitch": 0,
                          "id": "panorama_47F2FC80_5500_9744_41C1_B8876DF32F1B"
                         },
                         "backwardYaw": 89.93,
                         "class": "AdjacentPanorama",
                         "yaw": -173.23,
                         "distance": 1
                        }
                       ],
                       "label": "IMG_20190802_094248",
                       "hfovMax": 130,
                       "partial": false,
                       "class": "Panorama",
                       "hfov": 360,
                       "vfov": 180,
                       "frames": [
                        {
                         "overlays": [
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_4A5E4CCA_5500_F0C4_41BF_DDA65FDB1060",
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_47F2FC80_5500_9744_41C1_B8876DF32F1B, this.camera_553AF1C6_5E0E_9D23_41D7_525D559019A6); this.mainPlayList.set('selectedIndex', 53)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_47F2D5BD_551F_70BC_41C8_F1CA9A7ADDD1_0_HS_1_0.png",
                                "height": 181,
                                "class": "ImageResourceLevel",
                                "width": 196
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": -173.23,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -28.69,
                             "hfov": 10.32
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_47F2D5BD_551F_70BC_41C8_F1CA9A7ADDD1_0_HS_1_0_0_map.gif",
                                "height": 90,
                                "class": "ImageResourceLevel",
                                "width": 98
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -28.69,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -173.23,
                             "hfov": 10.32
                            }
                           ],
                           "enabledInCardboard": true
                          },
                          {
                           "rollOverDisplay": false,
                           "id": "overlay_4A3E1040_5503_8FC4_41B5_76E34DB5EAB4",
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "click": "this.startPanoramaWithCamera(this.panorama_47F2DE99_551F_7344_41A2_ECC38631CA9D, this.camera_5527B1BC_5E0E_9D67_41D2_8E98EB788032); this.mainPlayList.set('selectedIndex', 55)",
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_47F2D5BD_551F_70BC_41C8_F1CA9A7ADDD1_0_HS_0_0.png",
                                "height": 194,
                                "class": "ImageResourceLevel",
                                "width": 199
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "yaw": -3.44,
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -26.73,
                             "hfov": 10.68
                            }
                           ],
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "url": "media/panorama_47F2D5BD_551F_70BC_41C8_F1CA9A7ADDD1_0_HS_0_0_0_map.gif",
                                "height": 97,
                                "class": "ImageResourceLevel",
                                "width": 99
                               }
                              ],
                              "class": "ImageResource"
                             },
                             "pitch": -26.73,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -3.44,
                             "hfov": 10.68
                            }
                           ],
                           "enabledInCardboard": true
                          },
                          {
                           "image": {
                            "levels": [
                             {
                              "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                              "height": 900,
                              "class": "ImageResourceLevel",
                              "width": 900
                             }
                            ],
                            "class": "ImageResource"
                           },
                           "id": "panorama_47F2D5BD_551F_70BC_41C8_F1CA9A7ADDD1_tcap0",
                           "class": "TripodCapPanoramaOverlay",
                           "rotate": false,
                           "angle": 0,
                           "inertia": false,
                           "hfov": 36
                          }
                         ],
                         "right": {
                          "levels": [
                           {
                            "url": "media/panorama_47F2D5BD_551F_70BC_41C8_F1CA9A7ADDD1_r_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_47F2D5BD_551F_70BC_41C8_F1CA9A7ADDD1_r.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "front": {
                          "levels": [
                           {
                            "url": "media/panorama_47F2D5BD_551F_70BC_41C8_F1CA9A7ADDD1_f_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_47F2D5BD_551F_70BC_41C8_F1CA9A7ADDD1_f.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "class": "CubicPanoramaFrame",
                         "back": {
                          "levels": [
                           {
                            "url": "media/panorama_47F2D5BD_551F_70BC_41C8_F1CA9A7ADDD1_b_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_47F2D5BD_551F_70BC_41C8_F1CA9A7ADDD1_b.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "top": {
                          "levels": [
                           {
                            "url": "media/panorama_47F2D5BD_551F_70BC_41C8_F1CA9A7ADDD1_u_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_47F2D5BD_551F_70BC_41C8_F1CA9A7ADDD1_u.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "bottom": {
                          "levels": [
                           {
                            "url": "media/panorama_47F2D5BD_551F_70BC_41C8_F1CA9A7ADDD1_d_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_47F2D5BD_551F_70BC_41C8_F1CA9A7ADDD1_d.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "left": {
                          "levels": [
                           {
                            "url": "media/panorama_47F2D5BD_551F_70BC_41C8_F1CA9A7ADDD1_l_hq.jpeg",
                            "height": 1904,
                            "class": "ImageResourceLevel",
                            "width": 1904
                           },
                           {
                            "url": "media/panorama_47F2D5BD_551F_70BC_41C8_F1CA9A7ADDD1_l.jpeg",
                            "height": 1024,
                            "class": "ImageResourceLevel",
                            "width": 1024
                           }
                          ],
                          "class": "ImageResource"
                         },
                         "thumbnailUrl": "media/panorama_47F2D5BD_551F_70BC_41C8_F1CA9A7ADDD1_t.jpg"
                        }
                       ],
                       "thumbnailUrl": "media/panorama_47F2D5BD_551F_70BC_41C8_F1CA9A7ADDD1_t.jpg",
                       "hfovMin": 60,
                       "pitch": 0,
                       "id": "panorama_47F2D5BD_551F_70BC_41C8_F1CA9A7ADDD1"
                      },
                      "backwardYaw": -3.44,
                      "class": "AdjacentPanorama",
                      "yaw": 7.76,
                      "distance": 1
                     }
                    ],
                    "label": "IMG_20190802_094302",
                    "hfovMax": 130,
                    "partial": false,
                    "class": "Panorama",
                    "hfov": 360,
                    "vfov": 180,
                    "frames": [
                     {
                      "overlays": [
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_4B4CA23D_5500_B3BC_4191_7B9009DF1949",
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_47F2D5BD_551F_70BC_41C8_F1CA9A7ADDD1, this.camera_5597C623_5E0E_8762_41D7_8266AEE86485); this.mainPlayList.set('selectedIndex', 54)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_47F2DE99_551F_7344_41A2_ECC38631CA9D_0_HS_1_0.png",
                             "height": 198,
                             "class": "ImageResourceLevel",
                             "width": 189
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": 7.76,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -22.47,
                          "hfov": 10.5
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_47F2DE99_551F_7344_41A2_ECC38631CA9D_0_HS_1_0_0_map.gif",
                             "height": 99,
                             "class": "ImageResourceLevel",
                             "width": 94
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -22.47,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 7.76,
                          "hfov": 10.5
                         }
                        ],
                        "enabledInCardboard": true
                       },
                       {
                        "rollOverDisplay": false,
                        "id": "overlay_4AD4894C_557F_F1DC_41C8_07E6E2D059FC",
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "click": "this.startPanoramaWithCamera(this.panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7, this.camera_559FA61A_5E0E_8722_41BC_D7D81326B331); this.mainPlayList.set('selectedIndex', 51)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_47F2DE99_551F_7344_41A2_ECC38631CA9D_0_HS_0_0.png",
                             "height": 230,
                             "class": "ImageResourceLevel",
                             "width": 209
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "yaw": -159.27,
                          "class": "HotspotPanoramaOverlayImage",
                          "pitch": -34.85,
                          "hfov": 10.3
                         }
                        ],
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "url": "media/panorama_47F2DE99_551F_7344_41A2_ECC38631CA9D_0_HS_0_0_0_map.gif",
                             "height": 115,
                             "class": "ImageResourceLevel",
                             "width": 104
                            }
                           ],
                           "class": "ImageResource"
                          },
                          "pitch": -34.85,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -159.27,
                          "hfov": 10.3
                         }
                        ],
                        "enabledInCardboard": true
                       },
                       {
                        "image": {
                         "levels": [
                          {
                           "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                           "height": 900,
                           "class": "ImageResourceLevel",
                           "width": 900
                          }
                         ],
                         "class": "ImageResource"
                        },
                        "id": "panorama_47F2DE99_551F_7344_41A2_ECC38631CA9D_tcap0",
                        "class": "TripodCapPanoramaOverlay",
                        "rotate": false,
                        "angle": 0,
                        "inertia": false,
                        "hfov": 36
                       }
                      ],
                      "right": {
                       "levels": [
                        {
                         "url": "media/panorama_47F2DE99_551F_7344_41A2_ECC38631CA9D_r_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_47F2DE99_551F_7344_41A2_ECC38631CA9D_r.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "front": {
                       "levels": [
                        {
                         "url": "media/panorama_47F2DE99_551F_7344_41A2_ECC38631CA9D_f_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_47F2DE99_551F_7344_41A2_ECC38631CA9D_f.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "class": "CubicPanoramaFrame",
                      "back": {
                       "levels": [
                        {
                         "url": "media/panorama_47F2DE99_551F_7344_41A2_ECC38631CA9D_b_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_47F2DE99_551F_7344_41A2_ECC38631CA9D_b.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "top": {
                       "levels": [
                        {
                         "url": "media/panorama_47F2DE99_551F_7344_41A2_ECC38631CA9D_u_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_47F2DE99_551F_7344_41A2_ECC38631CA9D_u.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "bottom": {
                       "levels": [
                        {
                         "url": "media/panorama_47F2DE99_551F_7344_41A2_ECC38631CA9D_d_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_47F2DE99_551F_7344_41A2_ECC38631CA9D_d.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "left": {
                       "levels": [
                        {
                         "url": "media/panorama_47F2DE99_551F_7344_41A2_ECC38631CA9D_l_hq.jpeg",
                         "height": 1904,
                         "class": "ImageResourceLevel",
                         "width": 1904
                        },
                        {
                         "url": "media/panorama_47F2DE99_551F_7344_41A2_ECC38631CA9D_l.jpeg",
                         "height": 1024,
                         "class": "ImageResourceLevel",
                         "width": 1024
                        }
                       ],
                       "class": "ImageResource"
                      },
                      "thumbnailUrl": "media/panorama_47F2DE99_551F_7344_41A2_ECC38631CA9D_t.jpg"
                     }
                    ],
                    "thumbnailUrl": "media/panorama_47F2DE99_551F_7344_41A2_ECC38631CA9D_t.jpg",
                    "hfovMin": 60,
                    "pitch": 0,
                    "id": "panorama_47F2DE99_551F_7344_41A2_ECC38631CA9D"
                   },
                   "backwardYaw": -159.27,
                   "class": "AdjacentPanorama",
                   "yaw": 84.48,
                   "distance": 1
                  }
                 ],
                 "label": "IMG_20190802_094144",
                 "hfovMax": 130,
                 "partial": false,
                 "class": "Panorama",
                 "hfov": 360,
                 "vfov": 180,
                 "frames": [
                  {
                   "overlays": [
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_4B90B081_5501_8F44_41C3_7C7350ABE158",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_47F2DE99_551F_7344_41A2_ECC38631CA9D, this.camera_54E5C4D8_5E0E_9B2E_41B1_97AABFA6B471); this.mainPlayList.set('selectedIndex', 55)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7_0_HS_2_0.png",
                          "height": 191,
                          "class": "ImageResourceLevel",
                          "width": 189
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": 84.48,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -16.89,
                       "hfov": 10.87
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7_0_HS_2_0_0_map.gif",
                          "height": 95,
                          "class": "ImageResourceLevel",
                          "width": 94
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -16.89,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 84.48,
                       "hfov": 10.87
                      }
                     ],
                     "enabledInCardboard": true
                    },
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_4B19EA05_5503_734C_41B0_81D0A81D07C1",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_47F210A2_5500_8F44_41C0_FAC4E8133026, this.camera_54EDE4C4_5E0E_9B26_41B5_09C8C6D544D1); this.mainPlayList.set('selectedIndex', 50)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7_0_HS_1_0.png",
                          "height": 191,
                          "class": "ImageResourceLevel",
                          "width": 205
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": -146.49,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -26.4,
                       "hfov": 11.07
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7_0_HS_1_0_0_map.gif",
                          "height": 95,
                          "class": "ImageResourceLevel",
                          "width": 102
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -26.4,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -146.49,
                       "hfov": 11.07
                      }
                     ],
                     "enabledInCardboard": true
                    },
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_4B69DEFB_5500_B0C4_41AE_99370DCADAE3",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.startPanoramaWithCamera(this.panorama_47F237F5_551F_90CC_41CF_F8F3B8183CED, this.camera_54E1D4CD_5E0E_9B21_41C2_D3B730EF10EF); this.mainPlayList.set('selectedIndex', 56)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7_0_HS_0_0.png",
                          "height": 184,
                          "class": "ImageResourceLevel",
                          "width": 222
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": 11.62,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -16.42,
                       "hfov": 12.8
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7_0_HS_0_0_0_map.gif",
                          "height": 92,
                          "class": "ImageResourceLevel",
                          "width": 111
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -16.42,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 11.62,
                       "hfov": 12.8
                      }
                     ],
                     "enabledInCardboard": true
                    },
                    {
                     "rollOverDisplay": false,
                     "id": "overlay_5CD08744_57E4_C80E_41C5_2C5C2EECD067",
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "click": "this.mainPlayList.set('selectedIndex', 35)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7_0_HS_3_0.png",
                          "height": 148,
                          "class": "ImageResourceLevel",
                          "width": 149
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": 55.67,
                       "class": "HotspotPanoramaOverlayImage",
                       "pitch": -10.89,
                       "hfov": 8.83
                      }
                     ],
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "url": "media/panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7_0_HS_3_0_0_map.gif",
                          "height": 74,
                          "class": "ImageResourceLevel",
                          "width": 74
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": -10.89,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 55.67,
                       "hfov": 8.83
                      }
                     ],
                     "enabledInCardboard": true
                    },
                    {
                     "image": {
                      "levels": [
                       {
                        "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                        "height": 900,
                        "class": "ImageResourceLevel",
                        "width": 900
                       }
                      ],
                      "class": "ImageResource"
                     },
                     "id": "panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7_tcap0",
                     "class": "TripodCapPanoramaOverlay",
                     "rotate": false,
                     "angle": 0,
                     "inertia": false,
                     "hfov": 36
                    }
                   ],
                   "right": {
                    "levels": [
                     {
                      "url": "media/panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7_r_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7_r.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "front": {
                    "levels": [
                     {
                      "url": "media/panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7_f_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7_f.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "class": "CubicPanoramaFrame",
                   "back": {
                    "levels": [
                     {
                      "url": "media/panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7_b_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7_b.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "top": {
                    "levels": [
                     {
                      "url": "media/panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7_u_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7_u.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "bottom": {
                    "levels": [
                     {
                      "url": "media/panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7_d_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7_d.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "left": {
                    "levels": [
                     {
                      "url": "media/panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7_l_hq.jpeg",
                      "height": 1904,
                      "class": "ImageResourceLevel",
                      "width": 1904
                     },
                     {
                      "url": "media/panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7_l.jpeg",
                      "height": 1024,
                      "class": "ImageResourceLevel",
                      "width": 1024
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "thumbnailUrl": "media/panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7_t.jpg"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7_t.jpg",
                 "hfovMin": 60,
                 "pitch": 0,
                 "id": "panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7"
                },
                "backwardYaw": -146.49,
                "class": "AdjacentPanorama",
                "yaw": -172.55,
                "distance": 1
               },
               {
                "panorama": "this.panorama_47F24E32_5500_F344_4189_5266BE09934D",
                "backwardYaw": -163.54,
                "class": "AdjacentPanorama",
                "yaw": 108.05,
                "distance": 1
               }
              ],
              "label": "IMG_20190802_094125",
              "hfovMax": 130,
              "partial": false,
              "class": "Panorama",
              "hfov": 360,
              "vfov": 180,
              "frames": [
               {
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_74CB9D2E_5501_915C_41D1_7A7972B0B5FF",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_47F24E32_5500_F344_4189_5266BE09934D, this.camera_556C35D8_5E0E_852F_41BC_30769609538E); this.mainPlayList.set('selectedIndex', 48)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_47F210A2_5500_8F44_41C0_FAC4E8133026_0_HS_1_0.png",
                       "height": 194,
                       "class": "ImageResourceLevel",
                       "width": 238
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 108.05,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -9.19,
                    "hfov": 14.15
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_47F210A2_5500_8F44_41C0_FAC4E8133026_0_HS_1_0_0_map.gif",
                       "height": 97,
                       "class": "ImageResourceLevel",
                       "width": 119
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -9.19,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 108.05,
                    "hfov": 14.15
                   }
                  ],
                  "enabledInCardboard": true
                 },
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_7441F821_5500_9F44_41D4_C06CDFC76B80",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7, this.camera_556A55CF_5E0E_8521_41A0_EE2552C2B47D); this.mainPlayList.set('selectedIndex', 51)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_47F210A2_5500_8F44_41C0_FAC4E8133026_0_HS_0_0.png",
                       "height": 214,
                       "class": "ImageResourceLevel",
                       "width": 215
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -172.55,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -17.51,
                    "hfov": 12.34
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_47F210A2_5500_8F44_41C0_FAC4E8133026_0_HS_0_0_0_map.gif",
                       "height": 107,
                       "class": "ImageResourceLevel",
                       "width": 107
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -17.51,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -172.55,
                    "hfov": 12.34
                   }
                  ],
                  "enabledInCardboard": true
                 },
                 {
                  "image": {
                   "levels": [
                    {
                     "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                     "height": 900,
                     "class": "ImageResourceLevel",
                     "width": 900
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "id": "panorama_47F210A2_5500_8F44_41C0_FAC4E8133026_tcap0",
                  "class": "TripodCapPanoramaOverlay",
                  "rotate": false,
                  "angle": 0,
                  "inertia": false,
                  "hfov": 36
                 }
                ],
                "right": {
                 "levels": [
                  {
                   "url": "media/panorama_47F210A2_5500_8F44_41C0_FAC4E8133026_r_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_47F210A2_5500_8F44_41C0_FAC4E8133026_r.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "front": {
                 "levels": [
                  {
                   "url": "media/panorama_47F210A2_5500_8F44_41C0_FAC4E8133026_f_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_47F210A2_5500_8F44_41C0_FAC4E8133026_f.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "CubicPanoramaFrame",
                "back": {
                 "levels": [
                  {
                   "url": "media/panorama_47F210A2_5500_8F44_41C0_FAC4E8133026_b_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_47F210A2_5500_8F44_41C0_FAC4E8133026_b.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "top": {
                 "levels": [
                  {
                   "url": "media/panorama_47F210A2_5500_8F44_41C0_FAC4E8133026_u_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_47F210A2_5500_8F44_41C0_FAC4E8133026_u.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "bottom": {
                 "levels": [
                  {
                   "url": "media/panorama_47F210A2_5500_8F44_41C0_FAC4E8133026_d_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_47F210A2_5500_8F44_41C0_FAC4E8133026_d.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "left": {
                 "levels": [
                  {
                   "url": "media/panorama_47F210A2_5500_8F44_41C0_FAC4E8133026_l_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_47F210A2_5500_8F44_41C0_FAC4E8133026_l.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_47F210A2_5500_8F44_41C0_FAC4E8133026_t.jpg"
               }
              ],
              "thumbnailUrl": "media/panorama_47F210A2_5500_8F44_41C0_FAC4E8133026_t.jpg",
              "hfovMin": 60,
              "pitch": 0,
              "id": "panorama_47F210A2_5500_8F44_41C0_FAC4E8133026"
             },
             "backwardYaw": 108.05,
             "class": "AdjacentPanorama",
             "yaw": -163.54,
             "distance": 1
            },
            {
             "panorama": "this.panorama_410952A7_5500_F34C_41AC_2B0DFF3422BF",
             "backwardYaw": -88.98,
             "class": "AdjacentPanorama",
             "yaw": 87.75,
             "distance": 1
            },
            {
             "panorama": {
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_47F24E32_5500_F344_4189_5266BE09934D",
                "backwardYaw": 0.72,
                "class": "AdjacentPanorama",
                "yaw": -169.37,
                "distance": 1
               }
              ],
              "label": "IMG_20190802_094056",
              "hfovMax": 130,
              "partial": false,
              "class": "Panorama",
              "hfov": 360,
              "vfov": 180,
              "frames": [
               {
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "id": "overlay_771A66CF_5500_90DC_41CE_A176CA1F519F",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_47F24E32_5500_F344_4189_5266BE09934D, this.camera_55AED27A_5E0E_9FE3_41C8_A1264645B1E0); this.mainPlayList.set('selectedIndex', 48)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_47F2775A_5500_91C4_41D4_7E64660C4F89_0_HS_0_0.png",
                       "height": 231,
                       "class": "ImageResourceLevel",
                       "width": 222
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -169.37,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -38.81,
                    "hfov": 10.41
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_47F2775A_5500_91C4_41D4_7E64660C4F89_0_HS_0_0_0_map.gif",
                       "height": 115,
                       "class": "ImageResourceLevel",
                       "width": 111
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -38.81,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -169.37,
                    "hfov": 10.41
                   }
                  ],
                  "enabledInCardboard": true
                 },
                 {
                  "image": {
                   "levels": [
                    {
                     "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                     "height": 900,
                     "class": "ImageResourceLevel",
                     "width": 900
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "id": "panorama_47F2775A_5500_91C4_41D4_7E64660C4F89_tcap0",
                  "class": "TripodCapPanoramaOverlay",
                  "rotate": false,
                  "angle": 0,
                  "inertia": false,
                  "hfov": 36
                 }
                ],
                "right": {
                 "levels": [
                  {
                   "url": "media/panorama_47F2775A_5500_91C4_41D4_7E64660C4F89_r_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_47F2775A_5500_91C4_41D4_7E64660C4F89_r.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "front": {
                 "levels": [
                  {
                   "url": "media/panorama_47F2775A_5500_91C4_41D4_7E64660C4F89_f_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_47F2775A_5500_91C4_41D4_7E64660C4F89_f.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "CubicPanoramaFrame",
                "back": {
                 "levels": [
                  {
                   "url": "media/panorama_47F2775A_5500_91C4_41D4_7E64660C4F89_b_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_47F2775A_5500_91C4_41D4_7E64660C4F89_b.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "top": {
                 "levels": [
                  {
                   "url": "media/panorama_47F2775A_5500_91C4_41D4_7E64660C4F89_u_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_47F2775A_5500_91C4_41D4_7E64660C4F89_u.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "bottom": {
                 "levels": [
                  {
                   "url": "media/panorama_47F2775A_5500_91C4_41D4_7E64660C4F89_d_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_47F2775A_5500_91C4_41D4_7E64660C4F89_d.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "left": {
                 "levels": [
                  {
                   "url": "media/panorama_47F2775A_5500_91C4_41D4_7E64660C4F89_l_hq.jpeg",
                   "height": 1904,
                   "class": "ImageResourceLevel",
                   "width": 1904
                  },
                  {
                   "url": "media/panorama_47F2775A_5500_91C4_41D4_7E64660C4F89_l.jpeg",
                   "height": 1024,
                   "class": "ImageResourceLevel",
                   "width": 1024
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_47F2775A_5500_91C4_41D4_7E64660C4F89_t.jpg"
               }
              ],
              "thumbnailUrl": "media/panorama_47F2775A_5500_91C4_41D4_7E64660C4F89_t.jpg",
              "hfovMin": 60,
              "pitch": 0,
              "id": "panorama_47F2775A_5500_91C4_41D4_7E64660C4F89"
             },
             "backwardYaw": -169.37,
             "class": "AdjacentPanorama",
             "yaw": 0.72,
             "distance": 1
            }
           ],
           "label": "IMG_20190802_094036",
           "hfovMax": 130,
           "partial": false,
           "class": "Panorama",
           "hfov": 360,
           "vfov": 180,
           "frames": [
            {
             "overlays": [
              {
               "rollOverDisplay": false,
               "id": "overlay_77831F15_5500_F14C_41D4_B6EAFB3BC00C",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_47F2775A_5500_91C4_41D4_7E64660C4F89, this.camera_551A6182_5E0E_9D23_41CA_A680D10DD3BA); this.mainPlayList.set('selectedIndex', 49)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_47F24E32_5500_F344_4189_5266BE09934D_0_HS_1_0.png",
                    "height": 148,
                    "class": "ImageResourceLevel",
                    "width": 149
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 0.72,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -13.56,
                 "hfov": 8.74
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_47F24E32_5500_F344_4189_5266BE09934D_0_HS_1_0_0_map.gif",
                    "height": 74,
                    "class": "ImageResourceLevel",
                    "width": 74
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -13.56,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 0.72,
                 "hfov": 8.74
                }
               ],
               "enabledInCardboard": true
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_772ADEED_5501_90DC_41D4_BA0186FD92AE",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_410952A7_5500_F34C_41AC_2B0DFF3422BF, this.camera_5506F177_5E0E_9DE1_41CA_39ABCD3D7789); this.mainPlayList.set('selectedIndex', 47)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_47F24E32_5500_F344_4189_5266BE09934D_0_HS_0_0.png",
                    "height": 148,
                    "class": "ImageResourceLevel",
                    "width": 149
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 87.75,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -6.13,
                 "hfov": 8.94
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_47F24E32_5500_F344_4189_5266BE09934D_0_HS_0_0_0_map.gif",
                    "height": 74,
                    "class": "ImageResourceLevel",
                    "width": 74
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -6.13,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 87.75,
                 "hfov": 8.94
                }
               ],
               "enabledInCardboard": true
              },
              {
               "rollOverDisplay": false,
               "id": "overlay_5D2B1B14_57E5_F80D_41CE_80DBE78D7D52",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_47F210A2_5500_8F44_41C0_FAC4E8133026, this.camera_5502B16C_5E0E_9DE7_41A9_C252716F17DF); this.mainPlayList.set('selectedIndex', 50)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_47F24E32_5500_F344_4189_5266BE09934D_0_HS_2_0.png",
                    "height": 148,
                    "class": "ImageResourceLevel",
                    "width": 149
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -163.54,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -11.29,
                 "hfov": 8.81
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_47F24E32_5500_F344_4189_5266BE09934D_0_HS_2_0_0_map.gif",
                    "height": 74,
                    "class": "ImageResourceLevel",
                    "width": 74
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -11.29,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -163.54,
                 "hfov": 8.81
                }
               ],
               "enabledInCardboard": true
              },
              {
               "image": {
                "levels": [
                 {
                  "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
                  "height": 900,
                  "class": "ImageResourceLevel",
                  "width": 900
                 }
                ],
                "class": "ImageResource"
               },
               "id": "panorama_47F24E32_5500_F344_4189_5266BE09934D_tcap0",
               "class": "TripodCapPanoramaOverlay",
               "rotate": false,
               "angle": 0,
               "inertia": false,
               "hfov": 36
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_47F24E32_5500_F344_4189_5266BE09934D_r_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_47F24E32_5500_F344_4189_5266BE09934D_r.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "front": {
              "levels": [
               {
                "url": "media/panorama_47F24E32_5500_F344_4189_5266BE09934D_f_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_47F24E32_5500_F344_4189_5266BE09934D_f.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "levels": [
               {
                "url": "media/panorama_47F24E32_5500_F344_4189_5266BE09934D_b_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_47F24E32_5500_F344_4189_5266BE09934D_b.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "top": {
              "levels": [
               {
                "url": "media/panorama_47F24E32_5500_F344_4189_5266BE09934D_u_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_47F24E32_5500_F344_4189_5266BE09934D_u.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "bottom": {
              "levels": [
               {
                "url": "media/panorama_47F24E32_5500_F344_4189_5266BE09934D_d_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_47F24E32_5500_F344_4189_5266BE09934D_d.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "left": {
              "levels": [
               {
                "url": "media/panorama_47F24E32_5500_F344_4189_5266BE09934D_l_hq.jpeg",
                "height": 1904,
                "class": "ImageResourceLevel",
                "width": 1904
               },
               {
                "url": "media/panorama_47F24E32_5500_F344_4189_5266BE09934D_l.jpeg",
                "height": 1024,
                "class": "ImageResourceLevel",
                "width": 1024
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_47F24E32_5500_F344_4189_5266BE09934D_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_47F24E32_5500_F344_4189_5266BE09934D_t.jpg",
           "hfovMin": 60,
           "pitch": 0,
           "id": "panorama_47F24E32_5500_F344_4189_5266BE09934D"
          },
          "backwardYaw": 87.75,
          "class": "AdjacentPanorama",
          "yaw": -88.98,
          "distance": 1
         },
         {
          "panorama": "this.panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A",
          "backwardYaw": -39.08,
          "class": "AdjacentPanorama",
          "yaw": 159.14,
          "distance": 1
         }
        ],
        "label": "IMG_20190802_094000",
        "hfovMax": 130,
        "partial": false,
        "class": "Panorama",
        "hfov": 360,
        "vfov": 180,
        "frames": [
         {
          "overlays": [
           {
            "rollOverDisplay": false,
            "id": "overlay_769503F3_5500_B0C4_4189_7158452AFC3D",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_47F24E32_5500_F344_4189_5266BE09934D, this.camera_557B3236_5E0E_9F63_41D4_F1A0A3650353); this.mainPlayList.set('selectedIndex', 48)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_410952A7_5500_F34C_41AC_2B0DFF3422BF_0_HS_0_0.png",
                 "height": 148,
                 "class": "ImageResourceLevel",
                 "width": 149
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -88.98,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -14.05,
              "hfov": 8.72
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_410952A7_5500_F34C_41AC_2B0DFF3422BF_0_HS_0_0_0_map.gif",
                 "height": 74,
                 "class": "ImageResourceLevel",
                 "width": 74
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -14.05,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -88.98,
              "hfov": 8.72
             }
            ],
            "enabledInCardboard": true
           },
           {
            "rollOverDisplay": false,
            "id": "overlay_5490E9C5_5823_D80F_41CE_4E3FBF853787",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A, this.camera_55731240_5E0E_9F1F_41C4_B3CFC451B906); this.mainPlayList.set('selectedIndex', 57)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_410952A7_5500_F34C_41AC_2B0DFF3422BF_0_HS_1_0.png",
                 "height": 148,
                 "class": "ImageResourceLevel",
                 "width": 149
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 159.14,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -9.89,
              "hfov": 8.85
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_410952A7_5500_F34C_41AC_2B0DFF3422BF_0_HS_1_0_0_map.gif",
                 "height": 74,
                 "class": "ImageResourceLevel",
                 "width": 74
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -9.89,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 159.14,
              "hfov": 8.85
             }
            ],
            "enabledInCardboard": true
           },
           {
            "image": {
             "levels": [
              {
               "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
               "height": 900,
               "class": "ImageResourceLevel",
               "width": 900
              }
             ],
             "class": "ImageResource"
            },
            "id": "panorama_410952A7_5500_F34C_41AC_2B0DFF3422BF_tcap0",
            "class": "TripodCapPanoramaOverlay",
            "rotate": false,
            "angle": 0,
            "inertia": false,
            "hfov": 36
           }
          ],
          "right": {
           "levels": [
            {
             "url": "media/panorama_410952A7_5500_F34C_41AC_2B0DFF3422BF_r_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_410952A7_5500_F34C_41AC_2B0DFF3422BF_r.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_410952A7_5500_F34C_41AC_2B0DFF3422BF_f_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_410952A7_5500_F34C_41AC_2B0DFF3422BF_f.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "levels": [
            {
             "url": "media/panorama_410952A7_5500_F34C_41AC_2B0DFF3422BF_b_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_410952A7_5500_F34C_41AC_2B0DFF3422BF_b.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "top": {
           "levels": [
            {
             "url": "media/panorama_410952A7_5500_F34C_41AC_2B0DFF3422BF_u_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_410952A7_5500_F34C_41AC_2B0DFF3422BF_u.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_410952A7_5500_F34C_41AC_2B0DFF3422BF_d_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_410952A7_5500_F34C_41AC_2B0DFF3422BF_d.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "left": {
           "levels": [
            {
             "url": "media/panorama_410952A7_5500_F34C_41AC_2B0DFF3422BF_l_hq.jpeg",
             "height": 1904,
             "class": "ImageResourceLevel",
             "width": 1904
            },
            {
             "url": "media/panorama_410952A7_5500_F34C_41AC_2B0DFF3422BF_l.jpeg",
             "height": 1024,
             "class": "ImageResourceLevel",
             "width": 1024
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_410952A7_5500_F34C_41AC_2B0DFF3422BF_t.jpg"
         }
        ],
        "thumbnailUrl": "media/panorama_410952A7_5500_F34C_41AC_2B0DFF3422BF_t.jpg",
        "hfovMin": 60,
        "pitch": 0,
        "id": "panorama_410952A7_5500_F34C_41AC_2B0DFF3422BF"
       },
       "backwardYaw": 159.14,
       "class": "AdjacentPanorama",
       "yaw": -39.08,
       "distance": 1
      },
      {
       "panorama": "this.panorama_47F237F5_551F_90CC_41CF_F8F3B8183CED",
       "backwardYaw": 90.82,
       "class": "AdjacentPanorama",
       "yaw": -90.36,
       "distance": 1
      }
     ],
     "label": "IMG_20190802_094351",
     "hfovMax": 130,
     "partial": false,
     "class": "Panorama",
     "hfov": 360,
     "vfov": 180,
     "frames": [
      {
       "overlays": [
        {
         "rollOverDisplay": false,
         "id": "overlay_48F5C896_5500_FF4C_41AD_5B4A42026C42",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_47F237F5_551F_90CC_41CF_F8F3B8183CED, this.camera_55D252D4_5E0E_9F27_41B6_977B122289E8); this.mainPlayList.set('selectedIndex', 56)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A_0_HS_0_0.png",
              "height": 181,
              "class": "ImageResourceLevel",
              "width": 229
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -90.36,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -25.23,
           "hfov": 12.43
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A_0_HS_0_0_0_map.gif",
              "height": 90,
              "class": "ImageResourceLevel",
              "width": 114
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -25.23,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -90.36,
           "hfov": 12.43
          }
         ],
         "enabledInCardboard": true
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_53EFFC06_5824_B80D_41AE_59063CA043D5",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_53EE08F7_5500_B0CC_41B5_93024F30C090, this.camera_55C082BA_5E0E_9F63_41D2_CB2E93EC3EC5); this.mainPlayList.set('selectedIndex', 9)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A_0_HS_2_0.png",
              "height": 148,
              "class": "ImageResourceLevel",
              "width": 149
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -147.2,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -15.34,
           "hfov": 8.67
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A_0_HS_2_0_0_map.gif",
              "height": 74,
              "class": "ImageResourceLevel",
              "width": 74
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -15.34,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -147.2,
           "hfov": 8.67
          }
         ],
         "enabledInCardboard": true
        },
        {
         "rollOverDisplay": false,
         "id": "overlay_5480E896_5825_D80D_41CC_961A0CCC1B98",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_410952A7_5500_F34C_41AC_2B0DFF3422BF, this.camera_55DA62CB_5E0E_9F21_41C5_91489F6CF338); this.mainPlayList.set('selectedIndex', 47)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A_0_HS_1_0.png",
              "height": 148,
              "class": "ImageResourceLevel",
              "width": 149
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -39.08,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -9.5,
           "hfov": 8.86
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A_0_HS_1_0_0_map.gif",
              "height": 74,
              "class": "ImageResourceLevel",
              "width": 74
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -9.5,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -39.08,
           "hfov": 8.86
          }
         ],
         "enabledInCardboard": true
        },
        {
         "image": {
          "levels": [
           {
            "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
            "height": 900,
            "class": "ImageResourceLevel",
            "width": 900
           }
          ],
          "class": "ImageResource"
         },
         "id": "panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A_tcap0",
         "class": "TripodCapPanoramaOverlay",
         "rotate": false,
         "angle": 0,
         "inertia": false,
         "hfov": 36
        }
       ],
       "right": {
        "levels": [
         {
          "url": "media/panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A_r_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A_r.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A_f_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A_f.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "class": "CubicPanoramaFrame",
       "back": {
        "levels": [
         {
          "url": "media/panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A_b_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A_b.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "url": "media/panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A_u_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A_u.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A_d_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A_d.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "left": {
        "levels": [
         {
          "url": "media/panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A_l_hq.jpeg",
          "height": 1904,
          "class": "ImageResourceLevel",
          "width": 1904
         },
         {
          "url": "media/panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A_l.jpeg",
          "height": 1024,
          "class": "ImageResourceLevel",
          "width": 1024
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A_t.jpg"
      }
     ],
     "thumbnailUrl": "media/panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A_t.jpg",
     "hfovMin": 60,
     "pitch": 0,
     "id": "panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A"
    },
    "backwardYaw": -147.2,
    "class": "AdjacentPanorama",
    "yaw": 55.58,
    "distance": 1
   }
  ],
  "label": "IMG_20190802_093529",
  "hfovMax": 130,
  "partial": false,
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_449B9414_5500_974C_41C1_FC09C9028346",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_53EE00EB_5500_90C4_41CD_7F89353EC4CC, this.camera_54F8A13B_5E0E_9D61_41B8_1C6628BB3281); this.mainPlayList.set('selectedIndex', 10)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_53EE08F7_5500_B0CC_41B5_93024F30C090_0_HS_0_0.png",
           "height": 211,
           "class": "ImageResourceLevel",
           "width": 196
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -174.34,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -28.91,
        "hfov": 10.3
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_53EE08F7_5500_B0CC_41B5_93024F30C090_0_HS_0_0_0_map.gif",
           "height": 105,
           "class": "ImageResourceLevel",
           "width": 98
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -28.91,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -174.34,
        "hfov": 10.3
       }
      ],
      "enabledInCardboard": true
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_7D1F0877_5500_9FCC_41C5_3CBC0F2EEDFF",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A, this.camera_54FC0145_5E0E_9D21_41D3_34677F357FC3); this.mainPlayList.set('selectedIndex', 57)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_53EE08F7_5500_B0CC_41B5_93024F30C090_0_HS_1_0.png",
           "height": 194,
           "class": "ImageResourceLevel",
           "width": 261
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 55.58,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -28.2,
        "hfov": 13.85
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_53EE08F7_5500_B0CC_41B5_93024F30C090_0_HS_1_0_0_map.gif",
           "height": 97,
           "class": "ImageResourceLevel",
           "width": 130
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -28.2,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 55.58,
        "hfov": 13.85
       }
      ],
      "enabledInCardboard": true
     },
     {
      "image": {
       "levels": [
        {
         "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
         "height": 900,
         "class": "ImageResourceLevel",
         "width": 900
        }
       ],
       "class": "ImageResource"
      },
      "id": "panorama_53EE08F7_5500_B0CC_41B5_93024F30C090_tcap0",
      "class": "TripodCapPanoramaOverlay",
      "rotate": false,
      "angle": 0,
      "inertia": false,
      "hfov": 36
     }
    ],
    "right": {
     "levels": [
      {
       "url": "media/panorama_53EE08F7_5500_B0CC_41B5_93024F30C090_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_53EE08F7_5500_B0CC_41B5_93024F30C090_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_53EE08F7_5500_B0CC_41B5_93024F30C090_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_53EE08F7_5500_B0CC_41B5_93024F30C090_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "url": "media/panorama_53EE08F7_5500_B0CC_41B5_93024F30C090_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_53EE08F7_5500_B0CC_41B5_93024F30C090_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_53EE08F7_5500_B0CC_41B5_93024F30C090_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_53EE08F7_5500_B0CC_41B5_93024F30C090_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_53EE08F7_5500_B0CC_41B5_93024F30C090_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_53EE08F7_5500_B0CC_41B5_93024F30C090_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_53EE08F7_5500_B0CC_41B5_93024F30C090_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_53EE08F7_5500_B0CC_41B5_93024F30C090_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_53EE08F7_5500_B0CC_41B5_93024F30C090_t.jpg"
   }
  ],
  "thumbnailUrl": "media/panorama_53EE08F7_5500_B0CC_41B5_93024F30C090_t.jpg",
  "hfovMin": 60,
  "pitch": 0,
  "id": "panorama_53EE08F7_5500_B0CC_41B5_93024F30C090"
 },
 {
  "id": "panorama_53EE08F7_5500_B0CC_41B5_93024F30C090_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_53EE00EB_5500_90C4_41CD_7F89353EC4CC",
 {
  "id": "panorama_53EE00EB_5500_90C4_41CD_7F89353EC4CC_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_53EE3898_5500_9F44_41B4_46403FBF33EE",
 {
  "id": "panorama_53EE3898_5500_9F44_41B4_46403FBF33EE_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0.49,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -99.5
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE",
 {
  "id": "panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 2.74,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -171.8
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358",
 {
  "id": "panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0.85,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 0.42
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_53EE0FF8_5500_F0C4_41C2_E69C1D43B1E0",
 {
  "id": "panorama_53EE0FF8_5500_F0C4_41C2_E69C1D43B1E0_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 3.28,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -8.69
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_524D76EF_5507_90DC_41D3_AC4B066D4C11",
 {
  "id": "panorama_524D76EF_5507_90DC_41D3_AC4B066D4C11_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 6.45,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 174.26
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_53FBAF87_5507_914C_41BC_FAAB0750D689",
 {
  "id": "panorama_53FBAF87_5507_914C_41BC_FAAB0750D689_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 3.94,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -10.89
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67",
 {
  "id": "panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -9.97,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -112.87
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31",
 {
  "id": "panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -3.45,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 165.47
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_529653F6_5501_90CC_4189_DE8B26A5C623",
 {
  "id": "panorama_529653F6_5501_90CC_4189_DE8B26A5C623_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 1.45,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 177.75
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_520CED68_5501_91C4_41D0_F2742460DC21",
 {
  "id": "panorama_520CED68_5501_91C4_41D0_F2742460DC21_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -1.62,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -92.01
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_5203758A_5501_7144_41D1_C6467856BAA8",
 {
  "id": "panorama_5203758A_5501_7144_41D1_C6467856BAA8_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 4.34,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -27.78
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_52035D8B_5501_7144_4177_120F595D4D5E",
 {
  "id": "panorama_52035D8B_5501_7144_4177_120F595D4D5E_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 10.5,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 166.77
  },
  "automaticZoomSpeed": 10
 },
 {
  "vfov": 180,
  "label": "IMG_20190802_093134",
  "hfov": 360,
  "frames": [
   {
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_7B3D3F9F_5500_F17C_41C9_B234F516D33B",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 25)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_52539927_5500_B14C_41BE_BCAAFC8A5434_0_HS_0_0.png",
           "height": 241,
           "class": "ImageResourceLevel",
           "width": 318
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -163.92,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -33.33,
        "hfov": 15.95
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_52539927_5500_B14C_41BE_BCAAFC8A5434_0_HS_0_0_0_map.gif",
           "height": 120,
           "class": "ImageResourceLevel",
           "width": 159
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -33.33,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -163.92,
        "hfov": 15.95
       }
      ],
      "enabledInCardboard": true
     },
     {
      "image": {
       "levels": [
        {
         "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
         "height": 900,
         "class": "ImageResourceLevel",
         "width": 900
        }
       ],
       "class": "ImageResource"
      },
      "id": "panorama_52539927_5500_B14C_41BE_BCAAFC8A5434_tcap0",
      "class": "TripodCapPanoramaOverlay",
      "rotate": false,
      "angle": 0,
      "inertia": false,
      "hfov": 36
     }
    ],
    "right": {
     "levels": [
      {
       "url": "media/panorama_52539927_5500_B14C_41BE_BCAAFC8A5434_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_52539927_5500_B14C_41BE_BCAAFC8A5434_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_52539927_5500_B14C_41BE_BCAAFC8A5434_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_52539927_5500_B14C_41BE_BCAAFC8A5434_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "url": "media/panorama_52539927_5500_B14C_41BE_BCAAFC8A5434_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_52539927_5500_B14C_41BE_BCAAFC8A5434_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_52539927_5500_B14C_41BE_BCAAFC8A5434_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_52539927_5500_B14C_41BE_BCAAFC8A5434_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_52539927_5500_B14C_41BE_BCAAFC8A5434_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_52539927_5500_B14C_41BE_BCAAFC8A5434_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_52539927_5500_B14C_41BE_BCAAFC8A5434_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_52539927_5500_B14C_41BE_BCAAFC8A5434_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_52539927_5500_B14C_41BE_BCAAFC8A5434_t.jpg"
   }
  ],
  "partial": false,
  "hfovMax": 130,
  "id": "panorama_52539927_5500_B14C_41BE_BCAAFC8A5434",
  "class": "Panorama",
  "hfovMin": 60,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_52539927_5500_B14C_41BE_BCAAFC8A5434_t.jpg"
 },
 {
  "id": "panorama_52539927_5500_B14C_41BE_BCAAFC8A5434_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0.56,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 175.55
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_520D61BF_5500_90BC_41D1_F071697540EF",
 {
  "id": "panorama_520D61BF_5500_90BC_41D1_F071697540EF_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 5.08,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -11.58
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_5202A9E2_5500_90C4_41CB_3F44F94DDAF8",
 {
  "id": "panorama_5202A9E2_5500_90C4_41CB_3F44F94DDAF8_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 4.59,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -44.78
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF",
 {
  "id": "panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -1.42,
   "class": "PanoramaCameraPosition",
   "hfov": 140,
   "yaw": 2.71
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_47FDCC27_5501_974C_41D4_4D629DDEDFE3",
 {
  "id": "panorama_47FDCC27_5501_974C_41D4_4D629DDEDFE3_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -7.31,
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 37.96
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_47FDC4F9_5501_B0C4_41C9_05A774018B90",
 {
  "id": "panorama_47FDC4F9_5501_B0C4_41C9_05A774018B90_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 8.68,
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 52.79
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_47FDFDE6_5501_B0CC_41D3_369494B67660",
 {
  "id": "panorama_47FDFDE6_5501_B0CC_41D3_369494B67660_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 11.73,
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -1.95
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_40492156_5501_71CC_41D5_01C63B4ADFE3",
 {
  "id": "panorama_40492156_5501_71CC_41D5_01C63B4ADFE3_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -1.29,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -24.76
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_47FBCB05_5501_714C_41CB_49290184E117",
 {
  "id": "panorama_47FBCB05_5501_714C_41CB_49290184E117_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 1.11,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -177.44
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A",
 {
  "id": "panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 7.52,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -170.95
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_41290414_5503_774C_41B0_543B0B17685E",
 {
  "id": "panorama_41290414_5503_774C_41B0_543B0B17685E_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": -1.59,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 0.3
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4",
 {
  "id": "panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_47FAA959_5503_91C4_41CB_3D2C35DE3D90",
 {
  "id": "panorama_47FAA959_5503_91C4_41CB_3D2C35DE3D90_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 3.59,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 3.29
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_47FAD277_5503_B3CC_415F_3731B40A5465",
 {
  "id": "panorama_47FAD277_5503_B3CC_415F_3731B40A5465_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "vfov": 180,
  "label": "IMG_20190802_093449",
  "hfov": 360,
  "frames": [
   {
    "right": {
     "levels": [
      {
       "url": "media/panorama_47FACBAE_5503_B15C_41BE_408EFBEB8D4A_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_47FACBAE_5503_B15C_41BE_408EFBEB8D4A_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_47FACBAE_5503_B15C_41BE_408EFBEB8D4A_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_47FACBAE_5503_B15C_41BE_408EFBEB8D4A_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "url": "media/panorama_47FACBAE_5503_B15C_41BE_408EFBEB8D4A_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_47FACBAE_5503_B15C_41BE_408EFBEB8D4A_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_47FACBAE_5503_B15C_41BE_408EFBEB8D4A_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_47FACBAE_5503_B15C_41BE_408EFBEB8D4A_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_47FACBAE_5503_B15C_41BE_408EFBEB8D4A_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_47FACBAE_5503_B15C_41BE_408EFBEB8D4A_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_47FACBAE_5503_B15C_41BE_408EFBEB8D4A_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_47FACBAE_5503_B15C_41BE_408EFBEB8D4A_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_47FACBAE_5503_B15C_41BE_408EFBEB8D4A_t.jpg"
   }
  ],
  "hfovMax": 120,
  "partial": false,
  "id": "panorama_47FACBAE_5503_B15C_41BE_408EFBEB8D4A",
  "class": "Panorama",
  "hfovMin": 60,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_47FACBAE_5503_B15C_41BE_408EFBEB8D4A_t.jpg"
 },
 {
  "id": "panorama_47FACBAE_5503_B15C_41BE_408EFBEB8D4A_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_47FA2495_5503_974C_41CC_9F969CC7EE77",
 {
  "id": "panorama_47FA2495_5503_974C_41CC_9F969CC7EE77_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_46E70666_5500_F3CC_41CC_30E950FF63EC",
 {
  "id": "panorama_46E70666_5500_F3CC_41CC_30E950FF63EC_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "vfov": 180,
  "label": "IMG_20190802_093649",
  "hfov": 360,
  "frames": [
   {
    "overlays": [
     {
      "rollOverDisplay": false,
      "id": "overlay_4C9FBA58_5501_B3C4_41B8_26CBCFC3B30E",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 42)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_47F4A0D3_5500_90C4_41B8_31095869D147_0_HS_1_0.png",
           "height": 188,
           "class": "ImageResourceLevel",
           "width": 172
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -174.82,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -22.53,
        "hfov": 9.58
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_47F4A0D3_5500_90C4_41B8_31095869D147_0_HS_1_0_0_map.gif",
           "height": 94,
           "class": "ImageResourceLevel",
           "width": 86
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -22.53,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -174.82,
        "hfov": 9.58
       }
      ],
      "enabledInCardboard": true
     },
     {
      "rollOverDisplay": false,
      "id": "overlay_4C3A12BA_550F_B344_419E_ABB4DCAA05CF",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 39)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_47F4A0D3_5500_90C4_41B8_31095869D147_0_HS_0_0.png",
           "height": 148,
           "class": "ImageResourceLevel",
           "width": 149
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 113.8,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -19.8,
        "hfov": 8.46
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_47F4A0D3_5500_90C4_41B8_31095869D147_0_HS_0_0_0_map.gif",
           "height": 74,
           "class": "ImageResourceLevel",
           "width": 74
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -19.8,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 113.8,
        "hfov": 8.46
       }
      ],
      "enabledInCardboard": true
     },
     {
      "image": {
       "levels": [
        {
         "url": "media/panorama_53E31709_5500_9144_41A5_09BBD7671127_tcap0.png",
         "height": 900,
         "class": "ImageResourceLevel",
         "width": 900
        }
       ],
       "class": "ImageResource"
      },
      "id": "panorama_47F4A0D3_5500_90C4_41B8_31095869D147_tcap0",
      "class": "TripodCapPanoramaOverlay",
      "rotate": false,
      "angle": 0,
      "inertia": false,
      "hfov": 36
     }
    ],
    "right": {
     "levels": [
      {
       "url": "media/panorama_47F4A0D3_5500_90C4_41B8_31095869D147_r_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_47F4A0D3_5500_90C4_41B8_31095869D147_r.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_47F4A0D3_5500_90C4_41B8_31095869D147_f_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_47F4A0D3_5500_90C4_41B8_31095869D147_f.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "url": "media/panorama_47F4A0D3_5500_90C4_41B8_31095869D147_b_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_47F4A0D3_5500_90C4_41B8_31095869D147_b.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_47F4A0D3_5500_90C4_41B8_31095869D147_u_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_47F4A0D3_5500_90C4_41B8_31095869D147_u.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_47F4A0D3_5500_90C4_41B8_31095869D147_d_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_47F4A0D3_5500_90C4_41B8_31095869D147_d.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_47F4A0D3_5500_90C4_41B8_31095869D147_l_hq.jpeg",
       "height": 1904,
       "class": "ImageResourceLevel",
       "width": 1904
      },
      {
       "url": "media/panorama_47F4A0D3_5500_90C4_41B8_31095869D147_l.jpeg",
       "height": 1024,
       "class": "ImageResourceLevel",
       "width": 1024
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_47F4A0D3_5500_90C4_41B8_31095869D147_t.jpg"
   }
  ],
  "partial": false,
  "hfovMax": 130,
  "id": "panorama_47F4A0D3_5500_90C4_41B8_31095869D147",
  "class": "Panorama",
  "hfovMin": 60,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_47F4A0D3_5500_90C4_41B8_31095869D147_t.jpg"
 },
 {
  "id": "panorama_47F4A0D3_5500_90C4_41B8_31095869D147_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0.81,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 140.79
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_47F459FC_5500_90BC_41D4_2A92C4DDAA79",
 {
  "id": "panorama_47F459FC_5500_90BC_41D4_2A92C4DDAA79_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 13.08,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 61.33
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_47F46307_5500_B14C_41C5_BCD804291F33",
 {
  "id": "panorama_47F46307_5500_B14C_41C5_BCD804291F33_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 12.7,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 161.66
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_41FA432B_5501_9144_41D3_97E675198BFE",
 {
  "id": "panorama_41FA432B_5501_9144_41D3_97E675198BFE_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 5.3,
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -150.21
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_47F5ADCB_5501_90C4_419E_AD0305F2D933",
 {
  "id": "panorama_47F5ADCB_5501_90C4_419E_AD0305F2D933_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 7.17,
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 87.62
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_47F40739_5501_F144_4152_5EE069A98D16",
 {
  "id": "panorama_47F40739_5501_F144_4152_5EE069A98D16_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 15.9,
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 176.85
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_47F5C037_5501_8F4C_41CF_949094A4F368",
 {
  "id": "panorama_47F5C037_5501_8F4C_41CF_949094A4F368_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 1.18,
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 107.45
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_410952A7_5500_F34C_41AC_2B0DFF3422BF",
 {
  "id": "panorama_410952A7_5500_F34C_41AC_2B0DFF3422BF_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 2.46,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 11.81
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_47F24E32_5500_F344_4189_5266BE09934D",
 {
  "id": "panorama_47F24E32_5500_F344_4189_5266BE09934D_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_47F2775A_5500_91C4_41D4_7E64660C4F89",
 {
  "id": "panorama_47F2775A_5500_91C4_41D4_7E64660C4F89_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 14.64,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -7.77
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_47F210A2_5500_8F44_41C0_FAC4E8133026",
 {
  "id": "panorama_47F210A2_5500_8F44_41C0_FAC4E8133026_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7",
 {
  "id": "panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 14.61,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 41.51
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_47F212D7_5500_90CC_41C0_AF1BB2D3430B",
 {
  "id": "panorama_47F212D7_5500_90CC_41C0_AF1BB2D3430B_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 3.46,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -178.33
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_47F2FC80_5500_9744_41C1_B8876DF32F1B",
 {
  "id": "panorama_47F2FC80_5500_9744_41C1_B8876DF32F1B_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 1.78,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -85.36
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_47F2D5BD_551F_70BC_41C8_F1CA9A7ADDD1",
 {
  "id": "panorama_47F2D5BD_551F_70BC_41C8_F1CA9A7ADDD1_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 4.63,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 169.82
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_47F2DE99_551F_7344_41A2_ECC38631CA9D",
 {
  "id": "panorama_47F2DE99_551F_7344_41A2_ECC38631CA9D_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_47F237F5_551F_90CC_41CF_F8F3B8183CED",
 {
  "id": "panorama_47F237F5_551F_90CC_41CF_F8F3B8183CED_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0.07,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -106.69
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A",
 {
  "id": "panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A_camera",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 20.44,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -145.84
  },
  "automaticZoomSpeed": 10
 },
 {
  "items": [
   {
    "media": "this.panorama_53E31709_5500_9144_41A5_09BBD7671127",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_53E31709_5500_9144_41A5_09BBD7671127_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "media": "this.panorama_52650C80_5500_B744_41D2_7C4C8DBBF4E5",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_52650C80_5500_B744_41D2_7C4C8DBBF4E5_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "media": "this.panorama_524B00CA_5501_90C4_41D4_CD5CFBD024F8",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_524B00CA_5501_90C4_41D4_CD5CFBD024F8_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "media": "this.panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_53EFB981_5501_9144_41D4_8DB5938CA5FA_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "media": "this.panorama_53EFE11F_5501_717C_41BC_62660AE64D50",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_53EFE11F_5501_717C_41BC_62660AE64D50_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "media": "this.panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_53EFE8EF_5501_70DC_41D1_F8DB3ED4A440_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "media": "this.panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_53EE20E2_5500_90C4_41D4_5DCFF0B2278F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "media": "this.panorama_53EE18E4_5500_90CC_41D3_5B2CF61F7EDF",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_53EE18E4_5500_90CC_41D3_5B2CF61F7EDF_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "media": "this.panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_53EE3149_5500_B1C4_41A1_D56ECE6467FF_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "media": "this.panorama_53EE08F7_5500_B0CC_41B5_93024F30C090",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_53EE08F7_5500_B0CC_41B5_93024F30C090_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "media": "this.panorama_53EE00EB_5500_90C4_41CD_7F89353EC4CC",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_53EE00EB_5500_90C4_41CD_7F89353EC4CC_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "media": "this.panorama_53EE3898_5500_9F44_41B4_46403FBF33EE",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_53EE3898_5500_9F44_41B4_46403FBF33EE_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "media": "this.panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_53EE1067_5500_8FCC_41CF_3E4E3105B1DE_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "media": "this.panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_53EE285A_5500_FFC4_41D2_DB7BFC940358_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "media": "this.panorama_53EE0FF8_5500_F0C4_41C2_E69C1D43B1E0",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_53EE0FF8_5500_F0C4_41C2_E69C1D43B1E0_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "media": "this.panorama_524D76EF_5507_90DC_41D3_AC4B066D4C11",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_524D76EF_5507_90DC_41D3_AC4B066D4C11_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "media": "this.panorama_53FBAF87_5507_914C_41BC_FAAB0750D689",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_53FBAF87_5507_914C_41BC_FAAB0750D689_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "media": "this.panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_53FBD7DC_5507_B0FC_41D1_A67D4F541D67_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "media": "this.panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_53FBCFBC_5507_B0BC_41B6_67A52EEAAB31_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)"
   },
   {
    "media": "this.panorama_529653F6_5501_90CC_4189_DE8B26A5C623",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_529653F6_5501_90CC_4189_DE8B26A5C623_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)"
   },
   {
    "media": "this.panorama_520CED68_5501_91C4_41D0_F2742460DC21",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_520CED68_5501_91C4_41D0_F2742460DC21_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)"
   },
   {
    "media": "this.panorama_5203758A_5501_7144_41D1_C6467856BAA8",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5203758A_5501_7144_41D1_C6467856BAA8_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)"
   },
   {
    "media": "this.panorama_52035D8B_5501_7144_4177_120F595D4D5E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_52035D8B_5501_7144_4177_120F595D4D5E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)"
   },
   {
    "media": "this.panorama_52539927_5500_B14C_41BE_BCAAFC8A5434",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_52539927_5500_B14C_41BE_BCAAFC8A5434_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)"
   },
   {
    "media": "this.panorama_520D61BF_5500_90BC_41D1_F071697540EF",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_520D61BF_5500_90BC_41D1_F071697540EF_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)"
   },
   {
    "media": "this.panorama_5202A9E2_5500_90C4_41CB_3F44F94DDAF8",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_5202A9E2_5500_90C4_41CB_3F44F94DDAF8_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)"
   },
   {
    "media": "this.panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_40F7A19E_5501_917C_41BC_8D87C3165AAF_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)"
   },
   {
    "media": "this.panorama_47FDCC27_5501_974C_41D4_4D629DDEDFE3",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47FDCC27_5501_974C_41D4_4D629DDEDFE3_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)"
   },
   {
    "media": "this.panorama_47FDC4F9_5501_B0C4_41C9_05A774018B90",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47FDC4F9_5501_B0C4_41C9_05A774018B90_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)"
   },
   {
    "media": "this.panorama_47FDFDE6_5501_B0CC_41D3_369494B67660",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47FDFDE6_5501_B0CC_41D3_369494B67660_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)"
   },
   {
    "media": "this.panorama_40492156_5501_71CC_41D5_01C63B4ADFE3",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_40492156_5501_71CC_41D5_01C63B4ADFE3_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)"
   },
   {
    "media": "this.panorama_47FBCB05_5501_714C_41CB_49290184E117",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47FBCB05_5501_714C_41CB_49290184E117_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)"
   },
   {
    "media": "this.panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47FA23E4_5500_90CC_41C0_F4F13181F13A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)"
   },
   {
    "media": "this.panorama_41290414_5503_774C_41B0_543B0B17685E",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_41290414_5503_774C_41B0_543B0B17685E_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)"
   },
   {
    "media": "this.panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47FAC059_5503_8FC4_41D4_7DC1F1A69DB4_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)"
   },
   {
    "media": "this.panorama_47FAA959_5503_91C4_41CB_3D2C35DE3D90",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47FAA959_5503_91C4_41CB_3D2C35DE3D90_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)"
   },
   {
    "media": "this.panorama_47FAD277_5503_B3CC_415F_3731B40A5465",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47FAD277_5503_B3CC_415F_3731B40A5465_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)"
   },
   {
    "media": "this.panorama_47FACBAE_5503_B15C_41BE_408EFBEB8D4A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47FACBAE_5503_B15C_41BE_408EFBEB8D4A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)"
   },
   {
    "media": "this.panorama_47FA2495_5503_974C_41CC_9F969CC7EE77",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47FA2495_5503_974C_41CC_9F969CC7EE77_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)"
   },
   {
    "media": "this.panorama_46E70666_5500_F3CC_41CC_30E950FF63EC",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_46E70666_5500_F3CC_41CC_30E950FF63EC_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)"
   },
   {
    "media": "this.panorama_47F4A0D3_5500_90C4_41B8_31095869D147",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47F4A0D3_5500_90C4_41B8_31095869D147_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)"
   },
   {
    "media": "this.panorama_47F459FC_5500_90BC_41D4_2A92C4DDAA79",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47F459FC_5500_90BC_41D4_2A92C4DDAA79_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)"
   },
   {
    "media": "this.panorama_47F46307_5500_B14C_41C5_BCD804291F33",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47F46307_5500_B14C_41C5_BCD804291F33_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)"
   },
   {
    "media": "this.panorama_41FA432B_5501_9144_41D3_97E675198BFE",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_41FA432B_5501_9144_41D3_97E675198BFE_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)"
   },
   {
    "media": "this.panorama_47F5ADCB_5501_90C4_419E_AD0305F2D933",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47F5ADCB_5501_90C4_419E_AD0305F2D933_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)"
   },
   {
    "media": "this.panorama_47F40739_5501_F144_4152_5EE069A98D16",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47F40739_5501_F144_4152_5EE069A98D16_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)"
   },
   {
    "media": "this.panorama_47F5C037_5501_8F4C_41CF_949094A4F368",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47F5C037_5501_8F4C_41CF_949094A4F368_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)"
   },
   {
    "media": "this.panorama_410952A7_5500_F34C_41AC_2B0DFF3422BF",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_410952A7_5500_F34C_41AC_2B0DFF3422BF_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 48)"
   },
   {
    "media": "this.panorama_47F24E32_5500_F344_4189_5266BE09934D",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47F24E32_5500_F344_4189_5266BE09934D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 48, 49)"
   },
   {
    "media": "this.panorama_47F2775A_5500_91C4_41D4_7E64660C4F89",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47F2775A_5500_91C4_41D4_7E64660C4F89_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 49, 50)"
   },
   {
    "media": "this.panorama_47F210A2_5500_8F44_41C0_FAC4E8133026",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47F210A2_5500_8F44_41C0_FAC4E8133026_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 50, 51)"
   },
   {
    "media": "this.panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47F219FA_5500_B0C4_41C8_C19DABC07AC7_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 51, 52)"
   },
   {
    "media": "this.panorama_47F212D7_5500_90CC_41C0_AF1BB2D3430B",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47F212D7_5500_90CC_41C0_AF1BB2D3430B_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 52, 53)"
   },
   {
    "media": "this.panorama_47F2FC80_5500_9744_41C1_B8876DF32F1B",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47F2FC80_5500_9744_41C1_B8876DF32F1B_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 53, 54)"
   },
   {
    "media": "this.panorama_47F2D5BD_551F_70BC_41C8_F1CA9A7ADDD1",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47F2D5BD_551F_70BC_41C8_F1CA9A7ADDD1_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 54, 55)"
   },
   {
    "media": "this.panorama_47F2DE99_551F_7344_41A2_ECC38631CA9D",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47F2DE99_551F_7344_41A2_ECC38631CA9D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 55, 56)"
   },
   {
    "media": "this.panorama_47F237F5_551F_90CC_41CF_F8F3B8183CED",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47F237F5_551F_90CC_41CF_F8F3B8183CED_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 56, 57)"
   },
   {
    "media": "this.panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_47F220EA_551F_B0C4_41C3_5A833CF5910A_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 57, 0)"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "id": "camera_54F8A13B_5E0E_9D61_41B8_1C6628BB3281",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": -179.17
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_54FC0145_5E0E_9D21_41D3_34677F357FC3",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 32.8
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_54F79150_5E0E_9D3F_41D2_B9AE61B69F81",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 178.15
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_550B7159_5E0E_9D21_41C5_7FC1284969EB",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -54.73
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_550F3162_5E0E_9DE3_41D0_78A35F05A4AB",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -97.99
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5502B16C_5E0E_9DE7_41A9_C252716F17DF",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -71.95
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5506F177_5E0E_9DE1_41CA_39ABCD3D7789",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 91.02
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_551A6182_5E0E_9D23_41CA_A680D10DD3BA",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 10.63
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_551DF18B_5E0E_9D21_41D0_67DFB8AA1599",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -101.75
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_55114195_5E0E_9D21_41AD_1A1A0B8781E1",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -165.81
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5514C19F_5E0E_9D21_41D1_27628478186B",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 5.66
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_552861A8_5E0E_9D6F_41CC_66E8F6EBB8CF",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -176.79
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5523F1B2_5E0E_9D63_41B2_F7A7EE14E34E",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 174
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5527B1BC_5E0E_9D67_41D2_8E98EB788032",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -172.24
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_553AF1C6_5E0E_9D23_41D7_525D559019A6",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -90.07
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_553E31CF_5E0E_9D21_41C1_F345856118C2",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -97.89
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5531B1D9_5E0E_9D21_41C8_30CDE98945F2",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -49.48
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_553661E4_5E0E_9CE7_41D0_A15E27D73F49",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -86.4
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5548E1EF_5E0E_9CE1_41B2_060F3ED4B0AD",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 47.17
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_554261FA_5E0E_9CE3_41BE_744624F2D52C",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 140,
   "yaw": -88.88
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_555BB204_5E0E_9F27_41AB_65180D0B68EB",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -6.07
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_555D820E_5E0E_9F23_41CC_75FF20E7B40D",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -92.84
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_55576218_5E0E_9F2F_4178_3DA7DD276B53",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 5.29
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_55688222_5E0E_9F63_41C9_FFBA253CA9C8",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 179.32
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5562022C_5E0E_9F67_41BC_EBD76B09370C",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -5.94
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_557B3236_5E0E_9F63_41D4_F1A0A3650353",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -92.25
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_55731240_5E0E_9F1F_41C4_B3CFC451B906",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 140.92
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_558B8249_5E0E_9F21_41D1_DB06D7B861FB",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 8.45
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_558C0253_5E0E_9F21_41CA_F04C1BE97AAA",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 18.45
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5585125D_5E0E_9F21_41CE_08768B692A7B",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 166.76
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_559E2267_5E0E_9FE1_41D5_0DA3ECAADE3E",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 25.88
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_55969270_5E0E_9FFF_41A8_DCC37147146C",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 10.92
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_55AED27A_5E0E_9FE3_41C8_A1264645B1E0",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -179.28
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_55A75285_5E0E_9F20_41B0_3C805FD2E5C2",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -6.83
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_55B8028F_5E0E_9F21_41D0_DC5D7A73D712",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 48.85
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_55B7F2A6_5E0E_9F63_41D0_74D0C6298B3C",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 7.54
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_55C802B0_5E0E_9F7F_41C9_AD14FEE4D292",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 166.57
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_55C082BA_5E0E_9F63_41D2_CB2E93EC3EC5",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -124.42
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_55DA62CB_5E0E_9F21_41C5_91489F6CF338",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -20.86
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_55D252D4_5E0E_9F27_41B6_977B122289E8",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -89.18
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_55EB12DE_5E0E_9CDC_41C2_858AF417B18C",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 39.24
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_55E3B2EE_5E0E_9CE3_41D4_5EEC628991ED",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 143.59
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_55E432F8_5E0E_9CEF_41CE_B8664DAB4AE0",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -50.76
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_55FCF307_5E0E_9D21_41BE_B739D06B49FE",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 11.82
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_55F54311_5E0E_9D21_41CA_BC0AFA312276",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -8.81
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_520E531B_5E0E_9D21_41BB_68035914010F",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 6.77
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5207032A_5E0E_9D63_41D2_36269F73D2C8",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 84.5
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_521FA334_5E0E_9D67_41C0_2FFD2554703F",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 12.31
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5210233E_5E0E_9D63_41B7_563C1C371610",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 4.87
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5228E34E_5E0E_9D23_41D4_B4AF1B5DDA67",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -27.2
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_52216358_5E0E_9D2F_41BF_D736A8DCA4B8",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -129.76
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_52399363_5E0E_9DE1_41BC_0FC0F6856B80",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -139.68
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_52322373_5E0E_9DE2_41D6_5EFFDC5AF17D",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 6.05
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_524A937C_5E0E_9DE7_41C7_F1FB2DF79D35",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -5.18
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_52436386_5E0E_9D22_41D5_A62AE4416A3D",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 7.27
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_52449396_5E0E_9D23_41AC_79F155F52903",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -176.8
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_525D63A2_5E0E_9D62_41B7_A3C44AA5AAD6",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 176.96
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_525583AC_5E0E_9D67_41AA_EF3A0AE05A89",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 179.65
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_526E63BB_5E0E_9D61_41A4_3503ACAA7497",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 85.67
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_526683C5_5E0E_9D21_41B6_3F91B4E71825",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 100.14
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_527F73CF_5E0E_9D21_41D5_EC605DCB8AD2",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 89.64
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_527773DE_5E0E_9D22_41B7_C73C86439A06",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -168.38
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_528F03E8_5E0E_9CEE_41A8_CF7E3EC928DC",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -75.11
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_528773F1_5E0E_9CFE_41B4_B1DC8B69973C",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -12.38
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_529EF400_5E0E_9B1E_41D6_CDEC10E1ED3A",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 5.56
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5296E40B_5E0E_9B22_41C7_3348A6584531",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 176.76
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_52AEF415_5E0E_9B21_41D0_60B319B81308",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -127.29
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_52A68424_5E0E_9B67_41C9_1472E9618CAB",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -138.28
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_52BEA42E_5E0E_9B63_41BC_B73706DAC8D7",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 140,
   "yaw": 8.85
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_52B7C438_5E0E_9B6F_41A6_646806A595AA",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -177.12
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_54D2049C_5E0E_9B26_4198_DF027726B4BA",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 90.71
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_54D744A5_5E0E_9B61_41B5_6EFC5DBD6DB0",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -145.61
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_54D454AF_5E0E_9B61_41C8_5B4803CBAA18",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 47.93
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_54E904B9_5E0E_9B61_41B8_37353827419D",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 14.16
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_54EDE4C4_5E0E_9B26_41B5_09C8C6D544D1",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 7.45
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_54E1D4CD_5E0E_9B21_41C2_D3B730EF10EF",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 66.28
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_54E5C4D8_5E0E_9B2E_41B1_97AABFA6B471",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 20.73
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_54F9E4E2_5E0E_84E2_41D2_A612ABFE5ABE",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -178.28
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_54FDD4EB_5E0E_84E1_41C4_7D802718A08F",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -173.43
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_54FB54F5_5E0E_84E1_41B7_B72277F1C59A",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 176.37
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_54FFA4FE_5E0E_84E3_41B9_FBF9F7968860",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -7.76
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_54F34508_5E0E_852E_4180_48722D449B56",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 6.05
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_54F77511_5E0E_8521_41CE_8D8BB6CEE369",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -45.42
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_550B051B_5E0E_8522_41C3_9388F1D06A8B",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -177.1
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_550EC524_5E0E_8567_41C7_AF3B8A1DB573",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 9.63
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5502052E_5E0E_8562_41D4_EBF49AD78652",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -177.09
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5505F537_5E0E_8562_41B4_8F5196FAB650",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -93.33
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_55192540_5E0E_851E_41C5_7C7F2998D5C6",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 140,
   "yaw": 81.51
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_551CE54A_5E0E_8522_418D_B5B9DECE3D6C",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -95.22
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5510A554_5E0E_8526_41CA_7BBF97A3F39B",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -14.82
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_552BD55E_5E0E_8522_41AE_27FC6C623758",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -173.13
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5528F567_5E0E_85E2_41BE_1058EA5667AD",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 129.14
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_552CB570_5E0E_85FF_41B4_1E17133F3DE4",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -179.76
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5527D57A_5E0E_85E2_41CE_3EDE39BEC227",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 12.61
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_553B8583_5E0E_8521_41C5_526F84E561E0",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 179.33
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_553EE58D_5E0E_8521_4192_8D319116E6A8",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -174.61
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_55305597_5E0E_8522_41CB_D80F1EF9CC93",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": -108.77
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5549C5A0_5E0E_851F_41CD_0D65D3B5ACF7",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 130,
   "yaw": 125.59
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5543A5A9_5E0E_8561_41C1_EB853B4427CA",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 61.72
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5545D5B2_5E0E_8563_41D4_50A23FBCA559",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 171.42
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_555F45BC_5E0E_8566_41C5_761F24EF9A5F",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 95.48
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5550C5C6_5E0E_8523_41CB_246648F4DE05",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -110.56
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_556A55CF_5E0E_8521_41A0_EE2552C2B47D",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 33.51
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_556C35D8_5E0E_852F_41BC_30769609538E",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 16.46
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_556555E2_5E0E_84E2_4199_345394E87F79",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 175.38
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_557E95EB_5E0E_84E1_41D0_36C04FBCED42",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 27.36
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5570B5F5_5E0E_84E6_41BF_502018D4045C",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 140,
   "yaw": 148.25
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_558B25FE_5E0E_84E2_41D0_683C06D3F65F",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 142.01
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_558C9607_5E0E_8721_41C6_D43E2F4D6015",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 81.22
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_55863610_5E0E_873F_41AE_30C4A2895B94",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 6.08
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_559FA61A_5E0E_8722_41BC_D7D81326B331",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -95.52
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_5597C623_5E0E_8762_41D7_8266AEE86485",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 176.56
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_55A8462D_5E0E_8766_41D3_6AE1DD065361",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": -9.11
  },
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_55A0F637_5E0E_8762_41CD_B483374017F2",
  "class": "PanoramaCamera",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 82.41
  },
  "automaticZoomSpeed": 10
 }
], "children": [
 {
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderRadius": 4,
  "progressBarBorderSize": 0,
  "top": 0,
  "bottom": "0%",
  "toolTipTextShadowOpacity": 0,
  "transitionMode": "blending",
  "toolTipShadowColor": "#333333",
  "borderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "paddingLeft": 0,
  "minWidth": 100,
  "toolTipFontFamily": "Arial",
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBorderRadius": 4,
  "toolTipFontWeight": "normal",
  "toolTipBorderRadius": 3,
  "minHeight": 50,
  "toolTipFontSize": 12,
  "toolTipTextShadowBlurRadius": 3,
  "shadow": false,
  "playbackBarHeadBorderRadius": 0,
  "class": "ViewerArea",
  "toolTipOpacity": 1,
  "toolTipPaddingRight": 6,
  "progressLeft": 10,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowOpacity": 1,
  "playbackBarProgressOpacity": 1,
  "paddingBottom": 0,
  "playbackBarBorderSize": 2,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarLeft": 0,
  "id": "MainViewer",
  "width": "100%",
  "playbackBarHeadHeight": 30,
  "borderSize": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadBorderSize": 0,
  "progressRight": 10,
  "toolTipShadowSpread": 0,
  "progressOpacity": 1,
  "paddingRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipPaddingLeft": 6,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadow": true,
  "toolTipFontColor": "#606060",
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadOpacity": 1,
  "progressBackgroundOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBarOpacity": 1,
  "playbackBarBottom": 10,
  "playbackBarHeadShadowColor": "#000000",
  "progressBorderColor": "#AAAAAA",
  "progressBottom": 1,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressHeight": 20,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressBorderSize": 2,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipFontStyle": "normal",
  "paddingTop": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipPaddingBottom": 4,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeight": 20,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "left": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 6,
  "playbackBarRight": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipShadowHorizontalLength": 0
 },
 {
  "scrollBarColor": "#000000",
  "gap": 1,
  "paddingRight": 0,
  "scrollBarOpacity": 0.5,
  "height": 185,
  "bottom": "0%",
  "borderRadius": 0,
  "contentOpaque": false,
  "paddingLeft": 0,
  "minWidth": 1,
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "scrollBarWidth": 10,
  "verticalAlign": "top",
  "shadow": false,
  "paddingTop": 0,
  "class": "Container",
  "left": "0%",
  "scrollBarMargin": 2,
  "layout": "horizontal",
  "backgroundOpacity": 0,
  "overflow": "scroll",
  "paddingBottom": 0,
  "width": "100%",
  "borderSize": 0,
  "horizontalAlign": "center",
  "children": [
   {
    "scrollBarColor": "#000000",
    "gap": 4,
    "scrollBarOpacity": 0.5,
    "height": 184.78,
    "paddingRight": 0,
    "borderRadius": 0,
    "contentOpaque": false,
    "paddingLeft": 0,
    "minWidth": 392,
    "minHeight": 20,
    "scrollBarVisible": "rollOver",
    "scrollBarWidth": 10,
    "verticalAlign": "middle",
    "shadow": false,
    "paddingTop": 0,
    "class": "Container",
    "layout": "horizontal",
    "backgroundOpacity": 0,
    "overflow": "hidden",
    "scrollBarMargin": 2,
    "paddingBottom": 0,
    "width": 392.01,
    "borderSize": 0,
    "horizontalAlign": "center",
    "id": "Container_55DC4FA8_5E27_15CF_419E_B6601832ABA2",
    "children": [
     "this.IconButton_55DC4FA8_5E27_15CF_41D1_62725E030F65",
     "this.IconButton_55DC4FA8_5E27_15CF_41D3_547F7647C674",
     "this.IconButton_55DC4FA8_5E27_15CF_41D5_532104041B82",
     {
      "scrollBarColor": "#000000",
      "gap": 4,
      "scrollBarOpacity": 0.5,
      "height": "100%",
      "paddingRight": 0,
      "borderRadius": 0,
      "contentOpaque": false,
      "paddingLeft": 0,
      "minWidth": 20,
      "minHeight": 20,
      "scrollBarVisible": "rollOver",
      "scrollBarWidth": 10,
      "verticalAlign": "middle",
      "shadow": false,
      "paddingTop": 0,
      "class": "Container",
      "layout": "vertical",
      "backgroundOpacity": 0,
      "overflow": "hidden",
      "scrollBarMargin": 2,
      "paddingBottom": 0,
      "width": 40,
      "borderSize": 0,
      "horizontalAlign": "center",
      "id": "Container_55DC4FA8_5E27_15CF_41BD_E12B3B6C43C0",
      "children": [
       "this.IconButton_55DC4FA8_5E27_15CF_41B5_0CA08581B09B",
       "this.IconButton_55DC4FA8_5E27_15CF_41C8_9487966219ED",
       "this.IconButton_55DC4FA8_5E27_15CF_41CC_17B487E3D0C5"
      ]
     },
     "this.IconButton_55DC4FA8_5E27_15CF_41BD_DE68C880FC1E",
     "this.IconButton_55DC4FA8_5E27_15CF_41D0_E8AB54929A60",
     {
      "visible": false,
      "height": 40,
      "paddingRight": 0,
      "transparencyActive": false,
      "borderRadius": 0,
      "paddingLeft": 0,
      "minWidth": 0,
      "mode": "toggle",
      "minHeight": 0,
      "verticalAlign": "middle",
      "shadow": false,
      "paddingTop": 0,
      "class": "IconButton",
      "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_4176_27D8664CB29D.png",
      "cursor": "hand",
      "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_4176_27D8664CB29D_pressed.png",
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "width": 40,
      "borderSize": 0,
      "horizontalAlign": "center",
      "id": "IconButton_55DC4FA8_5E27_15CF_4176_27D8664CB29D"
     }
    ]
   }
  ]
 },
 {
  "height": 40,
  "paddingRight": 0,
  "right": "37.73%",
  "transparencyActive": false,
  "bottom": "26.17%",
  "borderRadius": 0,
  "paddingLeft": 0,
  "minWidth": 0,
  "mode": "push",
  "minHeight": 0,
  "verticalAlign": "middle",
  "shadow": false,
  "paddingTop": 0,
  "rollOverIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41A4_95868C6A0842_rollover.png",
  "class": "IconButton",
  "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41A4_95868C6A0842.png",
  "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41A4_95868C6A0842_pressed.png",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "cursor": "hand",
  "width": 40,
  "borderSize": 0,
  "horizontalAlign": "center",
  "id": "IconButton_55DC4FA8_5E27_15CF_41A4_95868C6A0842"
 },
 {
  "height": 40,
  "paddingRight": 0,
  "right": "37.75%",
  "transparencyActive": false,
  "bottom": "19.33%",
  "borderRadius": 0,
  "paddingLeft": 0,
  "minWidth": 0,
  "mode": "push",
  "minHeight": 0,
  "verticalAlign": "middle",
  "shadow": false,
  "paddingTop": 0,
  "rollOverIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41CE_E0BE2C156B35_rollover.png",
  "class": "IconButton",
  "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41CE_E0BE2C156B35.png",
  "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41CE_E0BE2C156B35_pressed.png",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "cursor": "hand",
  "width": 40,
  "borderSize": 0,
  "horizontalAlign": "center",
  "id": "IconButton_55DC4FA8_5E27_15CF_41CE_E0BE2C156B35"
 }
], 
 "scrollBarColor": "#000000",
 "gap": 10,
 "buttonToggleMute": "this.IconButton_55DC4FA8_5E27_15CF_4176_27D8664CB29D",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "scripts": {
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "registerKey": function(key, value){    window[key] = value; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "unregisterKey": function(key){    delete window[key]; },
  "existsKey": function(key){    return key in window; },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getKey": function(key){    return window[key]; },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } }
 },
 "height": "100%",
 "borderRadius": 0,
 "contentOpaque": false,
 "paddingLeft": 0,
 "backgroundPreloadEnabled": true,
 "minWidth": 20,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "mouseWheelEnabled": true,
 "class": "Player",
 "layout": "absolute",
 "overflow": "visible",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "id": "rootPlayer"
})