export const COMPANY_STANDS_TYPE = {
  // Oro 1
  'modelo_1': {
    'imageStandsSize': 8,
    'height': 447,
    'width': 854,
    'drawOrder': [
      { type: 'rectangle', alias: 'bottom' },
      { type: 'image', alias: 'amphitryon' },
      { type: 'image', alias: 'imageBase' },
      { type: 'rectangle', alias: 'top' },
      { type: 'rectangle', alias: 'pole' },
      { type: 'image', alias: 'top' },
      { type: 'image', alias: 'banderole_1' },
      { type: 'image', alias: 'banderole_2' },
      { type: 'image', alias: 'monitor' },
      { type: 'image', alias: 'counter' },
      { type: 'image', alias: 'totem' }
    ],
    'imageStands': {
      'imageBase': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/oro1.png?v=11',
        'position_x': 0,
        'position_y': 0,
        'size_width': 1,
        'size_height': 1
      },
      'amphitryon': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/anfitriona4.png',
        'position_x': 478,
        'position_y': 120,
        'size_width': 0.18,
        'size_height': 0.70
      },
      'top': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_logo_top.jpg',
        'position_x': 98,
        'position_y': 5,
        'size_width': 0.705,
        'size_height': 0.118
      },
      'banderole_1': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_banderole_1.jpg',
        'position_x': 9,
        'position_y': 168.5,
        'size_width': 0.070,
        'size_height': 0.403
      },
      'banderole_2': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_banderole_1.jpg',
        'position_x': 793.5,
        'position_y': 168.5,
        'size_width': 0.070,
        'size_height': 0.403
      },
      'monitor': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_monitor.jpg',
        'position_x': 229,
        'position_y': 146,
        'size_width': 0.235,
        'size_height': 0.260
      },
      'counter': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_counter.jpg',
        'position_x': 517,
        'position_y': 301,
        'size_width': 0.139,
        'size_height': 0.167
      },
      'totem': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_totem.jpg',
        'position_x': 120.3,
        'position_y': 174.5,
        'size_width': 0.108,
        'size_height': 0.404
      }
    },
    'pathsStands': {
      'top': {
        width: 670,
        height: 65,
        posX: 90,
        posY: 0,
        type: 'color_1',
        color: 'rgba(122,24,10,1)'
      },
      'pole': {
        width: 52,
        height: 336.5,
        posX: 708,
        posY: 64,
        type: 'color_1',
        color: 'rgba(122,24,10,1)'
      },
      'bottom': {
        width: 537,
        height: 276,
        posX: 156,
        posY: 119,
        type: 'color_2',
        color: 'rgba(125,44,210,1)'
      }
    }
  },
  // Oro 2
  'modelo_2': {
    'imageStandsSize': 8,
    'height': 457,
    'width': 850,
    'drawOrder': [
      { type: 'rectangle', alias: 'bottom' },
      { type: 'rectangle', alias: 'top' },
      { type: 'image', alias: 'top' },
      { type: 'image', alias: 'amphitryon' },
      { type: 'image', alias: 'imageBase' },
      { type: 'image', alias: 'banderole_1' },
      { type: 'image', alias: 'banderole_2' },
      { type: 'image', alias: 'monitor' },
      { type: 'image', alias: 'counter' },
      { type: 'image', alias: 'totem' }
    ],
    'imageStands': {
      'imageBase': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/oro2.png?v=11',
        'position_x': 0,
        'position_y': 0,
        'size_width': 1,
        'size_height': 1
      },
      'amphitryon': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/anfitriona2.png',
        'position_x': 170,
        'position_y': 120,
        'size_width': 0.18,
        'size_height': 0.65
      },
      'top': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_logo_top.jpg',
        'position_x': 124,
        'position_y': 42,
        'size_width': 0.708,
        'size_height': 0.118
      },
      'banderole_1': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_banderole_1.jpg',
        'position_x': 30,
        'position_y': 179,
        'size_width': 0.070,
        'size_height': 0.393
      },
      'banderole_2': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_banderole_1.jpg',
        'position_x': 761,
        'position_y': 179,
        'size_width': 0.070,
        'size_height': 0.393
      },
      'monitor': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_monitor.jpg',
        'position_x': 387,
        'position_y': 144,
        'size_width': 0.236,
        'size_height': 0.254
      },
      'counter': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_counter.jpg',
        'position_x': 238,
        'position_y': 318,
        'size_width': 0.140,
        'size_height': 0.160
      },
      'totem': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_totem.jpg',
        'position_x': 610,
        'position_y': 194,
        'size_width': 0.106,
        'size_height': 0.404
      }
    },
    'pathsStands': {
      'top': {
        width: 620,
        height: 77,
        posX: 115,
        posY: 30,
        type: 'color_1',
        color: 'rgba(122,24,10,1)'
      },
      'bottom': {
        width: 531,
        height: 275,
        posX: 158.5,
        posY: 107,
        type: 'color_2',
        color: 'rgba(125,44,210,1)'
      }
    }
  },
  // Oro 3
  'modelo_3': {
    'imageStandsSize': 8,
    'height': 440,
    'width': 774,
    'drawOrder': [
      { type: 'rectangle', alias: 'bottom' },
      { type: 'rectangle', alias: 'top' },
      { type: 'image', alias: 'top' },
      { type: 'image', alias: 'imageBase' },
      { type: 'diagonal', alias: 'diagonal_top_1' },
      { type: 'diagonal', alias: 'diagonal_top_2' },
      { type: 'diagonal', alias: 'pole_1' },
      { type: 'diagonal', alias: 'pole_2' },
      { type: 'image', alias: 'amphitryon' },
      { type: 'image', alias: 'banderole_1' },
      { type: 'image', alias: 'banderole_2' },
      { type: 'image', alias: 'monitor' },
      { type: 'image', alias: 'counter' },
      { type: 'image', alias: 'totem' }
    ],
    'imageStands': {
      'imageBase': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/oro3.png?v=11',
        'position_x': 0,
        'position_y': 0,
        'size_width': 1,
        'size_height': 1
      },
      'amphitryon': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/anfitriona3.png',
        'position_x': 516,
        'position_y': 120,
        'size_width': 0.18,
        'size_height': 0.65
      },
      'top': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_logo_top.jpg',
        'position_x': 87,
        'position_y': 18,
        'size_width': 0.777,
        'size_height': 0.117
      },
      'banderole_1': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_banderole_1.jpg',
        'position_x': 1,
        'position_y': 161,
        'size_width': 0.0771,
        'size_height': 0.410
      },
      'banderole_2': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_banderole_1.jpg',
        'position_x': 714,
        'position_y': 161,
        'size_width': 0.0771,
        'size_height': 0.410
      },
      'monitor': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_monitor.jpg',
        'position_x': 288,
        'position_y': 115,
        'size_width': 0.259,
        'size_height': 0.265
      },
      'counter': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_counter.jpg',
        'position_x': 330,
        'position_y': 294,
        'size_width': 0.156,
        'size_height': 0.168
      },
      'totem': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_totem.jpg',
        'position_x': 133,
        'position_y': 175.5,
        'size_width': 0.116,
        'size_height': 0.410
      }
    },
    'pathsStands': {
      'top': {
        width: 623,
        height: 64,
        posX: 76,
        posY: 12,
        type: 'color_1',
        color: 'rgba(122,24,10,1)'
      },
      'bottom': {
        width: 442,
        height: 274,
        posX: 164,
        posY: 90,
        type: 'color_2',
        color: 'rgba(125,44,210,1)'
      },
      'diagonal_top_1': {
        pos1: [84, 77],
        pos2: [150, 77],
        pos3: [164, 89],
        pos4: [164, 150],
        type: 'color_1',
        color: 'rgba(32,88,31,1)'
      },
      'diagonal_top_2': {
        pos1: [611, 90],
        pos2: [628, 77],
        pos3: [692, 77],
        pos4: [611, 150],
        type: 'color_1',
        color: 'rgba(32,88,31,1)'
      },
      'pole_1': {
        pos1: [76, 11.9],
        pos2: [85, 11.9],
        pos3: [85, 402],
        pos4: [76, 402],
        type: 'color_1',
        color: 'rgba(32,88,31,1)'
      },
      'pole_2': {
        pos1: [690, 11.9],
        pos2: [699, 11.9],
        pos3: [699, 402],
        pos4: [690, 402],
        type: 'color_1',
        color: 'rgba(32,88,31,1)'
      }
    }
  },
  // Oro 4
  'modelo_4': {
    'imageStandsSize': 8,
    'height': 438,
    'width': 850,
    'drawOrder': [
      { type: 'rectangle', alias: 'bottom' },
      { type: 'image', alias: 'imageBase' },
      { type: 'rectangle', alias: 'top_bar' },
      { type: 'diagonal', alias: 'diagonal_top_1' },
      { type: 'image', alias: 'amphitryon' },
      { type: 'rectangle', alias: 'top' },
      { type: 'image', alias: 'top' },
      { type: 'image', alias: 'banderole_1' },
      { type: 'image', alias: 'banderole_2' },
      { type: 'image', alias: 'monitor' },
      { type: 'image', alias: 'counter' },
      { type: 'image', alias: 'totem' }
    ],
    'imageStands': {
      'imageBase': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/oro4.png?v=11',
        'position_x': 0,
        'position_y': 0,
        'size_width': 1,
        'size_height': 1
      },
      'amphitryon': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/anfitriona1.png',
        'position_x': 140,
        'position_y': 125,
        'size_width': 0.16,
        'size_height': 0.65
      },
      'top': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_logo_top.jpg',
        'position_x': 136,
        'position_y': 22,
        'size_width': 0.708,
        'size_height': 0.117
      },
      'banderole_1': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_banderole_1.jpg',
        'position_x': 68,
        'position_y': 159,
        'size_width': 0.0697,
        'size_height': 0.411
      },
      'banderole_2': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_banderole_1.jpg',
        'position_x': 749,
        'position_y': 159,
        'size_width': 0.0697,
        'size_height': 0.411
      },
      'monitor': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_monitor.jpg',
        'position_x': 342,
        'position_y': 113,
        'size_width': 0.236,
        'size_height': 0.265
      },
      'counter': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_counter.jpg',
        'position_x': 380,
        'position_y': 301,
        'size_width': 0.143,
        'size_height': 0.170
      },
      'totem': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_totem.jpg',
        'position_x': 604,
        'position_y': 164,
        'size_width': 0.105,
        'size_height': 0.409
      }
    },
    'pathsStands': {
      'top_bar': {
        width: 754,
        height: 10,
        posX: 60,
        posY: 0,
        type: 'color_1',
        color: 'rgba(49,145,45,1)'
      },
      'top': {
        width: 621,
        height: 62,
        posX: 125,
        posY: 17,
        type: 'color_1',
        color: 'rgba(122,24,10,1)'
      },
      'bottom': {
        width: 427,
        height: 287,
        posX: 224,
        posY: 80,
        type: 'color_2',
        color: 'rgba(125,44,210,1)'
      },
      'diagonal_top_1': {
        pos1: [60.7, 9.9],
        pos2: [814, 9.9],
        pos3: [746.7, 31.5],
        pos4: [126.2, 31.5],
        type: 'color_1',
        color: 'rgba(32,88,31,1)'
      }
    }
  },
  // Oro 5
  'modelo_5': {
    'imageStandsSize': 8,
    'height': 433,
    'width': 850,
    'drawOrder': [
      { type: 'rectangle', alias: 'bottom' },
      { type: 'rectangle', alias: 'top' },
      { type: 'image', alias: 'top' },
      { type: 'image', alias: 'imageBase' },
      { type: 'diagonal', alias: 'diagonal_top_1' },
      { type: 'diagonal', alias: 'diagonal_top_2' },
      { type: 'diagonal', alias: 'pole_1' },
      { type: 'diagonal', alias: 'pole_2' },
      { type: 'image', alias: 'amphitryon' },
      { type: 'image', alias: 'banderole_1' },
      { type: 'image', alias: 'banderole_2' },
      { type: 'image', alias: 'monitor' },
      { type: 'image', alias: 'counter' },
      { type: 'image', alias: 'totem' }
    ],
    'imageStands': {
      'imageBase': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/oro5.png?v=111',
        'position_x': 0,
        'position_y': 0,
        'size_width': 1,
        'size_height': 1
      },
      'amphitryon': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/anfitriona4.png?v=11',
        'position_x': 590,
        'position_y': 125,
        'size_width': 0.16,
        'size_height': 0.65
      },
      'top': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_logo_top.jpg',
        'position_x': 121,
        'position_y': 16,
        'size_width': 0.716,
        'size_height': 0.118
      },
      'banderole_1': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_banderole_1.jpg',
        'position_x': 24,
        'position_y': 154,
        'size_width': 0.071,
        'size_height': 0.417
      },
      'banderole_2': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_banderole_1.jpg',
        'position_x': 774,
        'position_y': 154,
        'size_width': 0.071,
        'size_height': 0.417
      },
      'monitor': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_monitor.jpg',
        'position_x': 371,
        'position_y': 111,
        'size_width': 0.237,
        'size_height': 0.265
      },
      'counter': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_counter.jpg',
        'position_x': 416,
        'position_y': 296,
        'size_width': 0.143,
        'size_height': 0.17
      },
      'totem': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_totem.jpg',
        'position_x': 180,
        'position_y': 172,
        'size_width': 0.106,
        'size_height': 0.415
      }
    },
    'pathsStands': {
      'top': {
        width: 640,
        height: 62,
        posX: 105,
        posY: 12,
        type: 'color_1',
        color: 'rgba(122,24,10,1)'
      },
      'bottom': {
        width: 539,
        height: 285,
        posX: 156,
        posY: 73,
        type: 'color_2',
        color: 'rgba(125,44,210,1)'
      },
      'diagonal_top_1': {
        pos1: [112, 73],
        pos2: [155, 73],
        pos3: [155, 108],
        pos4: [112, 73],
        type: 'color_1',
        color: 'rgba(32,88,31,1)'
      },
      'diagonal_top_2': {
        pos1: [696, 73],
        pos2: [739, 73],
        pos3: [739, 73],
        pos4: [696, 108],
        type: 'color_1',
        color: 'rgba(32,88,31,1)'
      },
      'pole_1': {
        pos1: [106, 73],
        pos2: [115, 73],
        pos3: [115, 370],
        pos4: [106, 372],
        type: 'color_1',
        color: 'rgba(32,88,31,1)'
      },
      'pole_2': {
        pos1: [736, 73],
        pos2: [745, 73],
        pos3: [745, 372],
        pos4: [736, 370],
        type: 'color_1',
        color: 'rgba(32,88,31,1)'
      }
    }
  },
  // Plata 1
  'modelo_6': {
    'imageStandsSize': 8,
    'height': 454,
    'width': 850,
    'drawOrder': [
      { type: 'rectangle', alias: 'top' },
      { type: 'image', alias: 'top' },
      { type: 'rectangle', alias: 'bottom' },
      { type: 'image', alias: 'amphitryon' },
      { type: 'image', alias: 'imageBase' },
      { type: 'image', alias: 'poster_1' },
      { type: 'image', alias: 'poster_2' },
      { type: 'image', alias: 'monitor' },
      { type: 'image', alias: 'counter' },
      { type: 'image', alias: 'totem' }
    ],
    'imageStands': {
      'imageBase': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/plata1.png?v=11',
        'position_x': 0,
        'position_y': 0,
        'size_width': 1,
        'size_height': 1
      },
      'amphitryon': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/anfitriona6.png',
        'position_x': 422,
        'position_y': 125,
        'size_width': 0.185,
        'size_height': 0.66
      },
      'top': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_logo_top.jpg',
        'position_x': 126,
        'position_y': 43.5,
        'size_width': 0.705,
        'size_height': 0.11
      },
      'poster_1': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_poster_1.jpg',
        'position_x': 37.5,
        'position_y': 173,
        'size_width': 0.111,
        'size_height': 0.19
      },
      'poster_2': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_poster_1.jpg',
        'position_x': 37.5,
        'position_y': 279,
        'size_width': 0.111,
        'size_height': 0.19
      },
      'monitor': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_monitor.jpg',
        'position_x': 184.5,
        'position_y': 144,
        'size_width': 0.236,
        'size_height': 0.265
      },
      'counter': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_counter.jpg',
        'position_x': 478.4,
        'position_y': 318.5,
        'size_width': 0.142,
        'size_height': 0.164
      },
      'totem': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_totem.jpg',
        'position_x': 736,
        'position_y': 244,
        'size_width': 0.107,
        'size_height': 0.396
      }
    },
    'pathsStands': {
      'top': {
        width: 620,
        height: 76,
        posX: 115,
        posY: 31,
        type: 'color_1',
        color: 'rgba(122,24,10,1)'
      },
      'bottom': {
        width: 531,
        height: 276,
        posX: 158.5,
        posY: 107,
        type: 'color_2',
        color: 'rgba(122,24,10,1)'
      }
    }
  },
  // Plata 2
  'modelo_7': {
    'imageStandsSize': 8,
    'height': 436,
    'width': 705,
    'drawOrder': [
      { type: 'rectangle', alias: 'top' },
      { type: 'image', alias: 'top' },
      { type: 'rectangle', alias: 'bottom' },
      { type: 'image', alias: 'imageBase' },
      { type: 'diagonal', alias: 'diagonal_top_1' },
      { type: 'diagonal', alias: 'diagonal_top_2' },
      { type: 'rectangle', alias: 'pole_1' },
      { type: 'rectangle', alias: 'pole_2' },
      { type: 'image', alias: 'poster_1' },
      { type: 'image', alias: 'poster_2' },
      { type: 'image', alias: 'monitor' },
      { type: 'image', alias: 'counter' },
      { type: 'image', alias: 'totem' },
      { type: 'image', alias: 'amphitryon' }
    ],
    'imageStands': {
      'imageBase': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/plata2.png?v=11',
        'position_x': 0,
        'position_y': 0,
        'size_width': 1,
        'size_height': 1
      },
      'amphitryon': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/anfitriona4.png?v=11',
        'position_x': 193,
        'position_y': 139,
        'size_width': 0.20,
        'size_height': 0.627,
        'flip': true
      },
      'top': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_logo_top.jpg',
        'position_x': 55,
        'position_y': 19.5,
        'size_width': 0.847,
        'size_height': 0.113
      },
      'poster_1': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_poster_1.jpg',
        'position_x': 143.9,
        'position_y': 112.4,
        'size_width': 0.134,
        'size_height': 0.194
      },
      'poster_2': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_poster_1.jpg',
        'position_x': 468.3,
        'position_y': 112.4,
        'size_width': 0.135,
        'size_height': 0.194
      },
      'monitor': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_monitor.jpg',
        'position_x': 253,
        'position_y': 115,
        'size_width': 0.285,
        'size_height': 0.269
      },
      'counter': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_counter.jpg',
        'position_x': 295,
        'position_y': 294,
        'size_width': 0.173,
        'size_height': 0.17
      },
      'totem': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_totem.jpg',
        'position_x': 600.2,
        'position_y': 226.1,
        'size_width': 0.127,
        'size_height': 0.413
      }
    },
    'pathsStands': {
      'top': {
        width: 623,
        height: 64.4,
        posX: 41.7,
        posY: 12.1,
        type: 'color_1',
        color: 'rgba(122,24,10,1)'
      },
      'pole_1': {
        width: 8.1,
        height: 326,
        posX: 41.7,
        posY: 76.5,
        type: 'color_1',
        color: 'rgba(122,24,10,1)'
      },
      'pole_2': {
        width: 8.1,
        height: 146.5,
        posX: 656.6,
        posY: 76.5,
        type: 'color_1',
        color: 'rgba(122,24,10,1)'
      },
      'bottom': {
        width: 446,
        height: 272.35,
        posX: 129,
        posY: 89.9,
        type: 'color_2',
        color: 'rgba(125,44,210,1)'
      },
      'diagonal_top_1': {
        pos1: [47, 76.5],
        pos2: [114, 76.5],
        pos3: [129.5, 90],
        pos4: [129.5, 145.5],
        type: 'color_1',
        color: 'rgba(122,24,10,1)'
      },
      'diagonal_top_2': {
        pos1: [592.7, 76.5],
        pos2: [659.7, 76.5],
        pos3: [577.2, 145.5],
        pos4: [577.2, 90],
        type: 'color_1',
        color: 'rgba(122,24,10,1)'
      }
    }
  },
  // Plata 3
  'modelo_8': {
    'imageStandsSize': 8,
    'height': 414,
    'width': 850,
    'drawOrder': [
      { type: 'rectangle', alias: 'bottom' },
      { type: 'diagonal', alias: 'diagonal_top_1' },
      { type: 'rectangle', alias: 'top_2' },
      { type: 'image', alias: 'top' },
      { type: 'image', alias: 'imageBase' },
      { type: 'rectangle', alias: 'top_1' },
      { type: 'image', alias: 'poster_1' },
      { type: 'image', alias: 'poster_2' },
      { type: 'image', alias: 'monitor' },
      { type: 'image', alias: 'counter' },
      { type: 'image', alias: 'totem' },
      { type: 'image', alias: 'amphitryon' }
    ],
    'imageStands': {
      'imageBase': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/plata3.png?v=sas',
        'position_x': 0,
        'position_y': 0,
        'size_width': 1,
        'size_height': 1
      },
      'amphitryon': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/anfitriona1.png?v=sas',
        'position_x': 142.2,
        'position_y': 139,
        'size_width': 0.16,
        'size_height': 0.648
      },
      'top': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_logo_top.jpg',
        'position_x': 137,
        'position_y': 23,
        'size_width': 0.705,
        'size_height': 0.118
      },
      'poster_1': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_poster_1.jpg',
        'position_x': 66,
        'position_y': 150.5,
        'size_width': 0.112,
        'size_height': 0.204
      },
      'poster_2': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_poster_1.jpg',
        'position_x': 66,
        'position_y': 256.8,
        'size_width': 0.112,
        'size_height': 0.204
      },
      'monitor': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_monitor.jpg',
        'position_x': 342,
        'position_y': 113,
        'size_width': 0.236,
        'size_height': 0.28
      },
      'counter': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_counter.jpg',
        'position_x': 380.5,
        'position_y': 301,
        'size_width': 0.142,
        'size_height': 0.177
      },
      'totem': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_totem.jpg',
        'position_x': 603.3,
        'position_y': 163,
        'size_width': 0.106,
        'size_height': 0.435
      }
    },
    'pathsStands': {
      'top_1': {
        width: 753.7,
        height: 9.8,
        posX: 60.7,
        posY: 0,
        type: 'color_1',
        color: 'rgba(122,24,10,1)'
      },
      'top_2': {
        width: 620.4,
        height: 60.5,
        posX: 126.2,
        posY: 17.5,
        type: 'color_1',
        color: 'rgba(122,24,10,1)'
      },
      'bottom': {
        width: 426,
        height: 285.7,
        posX: 222.9,
        posY: 78,
        type: 'color_2',
        color: 'rgba(125,44,210,1)'
      },
      'diagonal_top_1': {
        pos1: [60.7, 9.9],
        pos2: [814, 9.9],
        pos3: [746.7, 31.5],
        pos4: [126.2, 31.5],
        type: 'color_1',
        color: 'rgba(122,24,10,1)'
      }
    }
  },
  // Bronce 1
  'modelo_9': {
    'imageStandsSize': 7,
    'height': 415,
    'width': 850,
    'drawOrder': [
      { type: 'rectangle', alias: 'bottom' },
      { type: 'diagonal', alias: 'diagonal_top_1' },
      { type: 'rectangle', alias: 'top_2' },
      { type: 'image', alias: 'top' },
      { type: 'image', alias: 'imageBase' },
      { type: 'rectangle', alias: 'top_1' },
      { type: 'image', alias: 'poster_1' },
      { type: 'image', alias: 'banderole_1' },
      { type: 'image', alias: 'monitor' },
      { type: 'image', alias: 'counter' },
      { type: 'image', alias: 'amphitryon' }
    ],
    'imageStands': {
      'imageBase': {
        'source': 'https://dev.cds.expo.aptitus.g3c.pe/bronce1.png?v=11',
        'position_x': 0,
        'position_y': 0,
        'size_width': 1,
        'size_height': 1
      },
      'amphitryon': {
        'source': 'https://dev.cds.expo.aptitus.g3c.pe/anfitriona1.png?v=11',
        'position_x': 80,
        'position_y': 137.5,
        'size_width': 0.167,
        'size_height': 0.65
      },
      'top': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_logo_top.jpg',
        'position_x': 137,
        'position_y': 22.5,
        'size_width': 0.705,
        'size_height': 0.12
      },
      'poster_1': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_poster_1.jpg',
        'position_x': 304.5,
        'position_y': 108,
        'size_width': 0.112,
        'size_height': 0.215
      },
      'banderole_1': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_banderole_1.jpg',
        'position_x': 694.5,
        'position_y': 115.29,
        'size_width': 0.072,
        'size_height': 0.435
      },
      'monitor': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_monitor.jpg',
        'position_x': 415.5,
        'position_y': 109,
        'size_width': 0.181,
        'size_height': 0.216
      },
      'counter': {
        'source': 'https://s3.amazonaws.com/s3.aptitus.com/stands/image_counter.jpg',
        'position_x': 380,
        'position_y': 301.5,
        'size_width': 0.143,
        'size_height': 0.18
      }
    },
    'pathsStands': {
      'top_1': {
        width: 753.7,
        height: 9.8,
        posX: 60.7,
        posY: 0,
        type: 'color_1',
        color: 'rgba(122,24,10,1)'
      },
      'top_2': {
        width: 620.4,
        height: 61.8,
        posX: 126.2,
        posY: 17.5,
        type: 'color_1',
        color: 'rgba(122,24,10,1)'
      },
      'bottom': {
        width: 428,
        height: 285.7,
        posX: 222.9,
        posY: 78,
        type: 'color_2',
        color: 'rgba(125,44,210,1)'
      },
      'diagonal_top_1': {
        pos1: [60.7, 9.9],
        pos2: [814, 9.9],
        pos3: [746.7, 31.5],
        pos4: [126.2, 31.5],
        type: 'color_1',
        color: 'rgba(122,24,10,1)'
      }
    }
  }
};


export const COMPANY_STANDS_AMPHITRYON = {
  'amphitryon_1': 'https://s3.amazonaws.com/s3.aptitus.com/stands/anfitriona1.png?v=11',
  'amphitryon_2': 'https://s3.amazonaws.com/s3.aptitus.com/stands/anfitriona2.png?v=11',
  'amphitryon_3': 'https://s3.amazonaws.com/s3.aptitus.com/stands/anfitriona3.png?v=11',
  'amphitryon_4': 'https://s3.amazonaws.com/s3.aptitus.com/stands/anfitriona4.png?v=11',
  'amphitryon_5': 'https://s3.amazonaws.com/s3.aptitus.com/stands/anfitriona5.png?v=11',
  'amphitryon_6': 'https://s3.amazonaws.com/s3.aptitus.com/stands/anfitriona6.png?v=11'
};
