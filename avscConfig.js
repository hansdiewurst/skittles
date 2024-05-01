const types = {
    0: avsc.Type.forSchema({
        name: 'confirmTeleport',
        type: 'record',
        fields: [
            {
                name: 'id',
                type: 'int'
            },
            {
                name: 'type',
                type: 'int'
            }
        ]
    }),
    1: avsc.Type.forSchema({
        name: 'touchscreenActionButtonPress',
        type: 'boolean'
    }),
    2: null,
    3: avsc.Type.forSchema({
        name: 'finishChargingHeldItem',
        type: 'record',
        fields: [
            {
                name: 'used',
                type: 'boolean'
            },
            {
                name: 'duration',
                type: 'long'
            }
        ]
    }),
    4: avsc.Type.forSchema({
        name: 'move',
        type: 'record',
        fields: [
            {
                name: 'x',
                type: 'double'
            },
            {
                name: 'y',
                type: 'double'
            },
            {
                name: 'z',
                type: 'double'
            },
            {
                name: 'heading',
                type: 'float'
            },
            {
                name: 'speed',
                type: 'float'
            },
            {
                name: 'jumping',
                type: 'boolean'
            },
            {
                name: 'crouching',
                type: 'boolean'
            },
            {
                name: 'pitch',
                type: 'float'
            },
            {
                name: 'armSwinging',
                type: 'boolean'
            },
            {
                name: 'useDir',
                type: {
                    type: "array",
                    items: "float"
                }
            }
        ]
    }),
    5: avsc.Type.forSchema({
        name: 'chat',
        type: 'record',
        fields: [
            {
                name: 'msg',
                type: 'string'
            },
            {
                name: 'channelName',
                type: [
                'null',
                'string'
                ]
            }
        ]
    }),
    6: avsc.Type.forSchema({
        name: 'keydown',
        type: 'string'
    }),
    7: avsc.Type.forSchema({
        name: 'keydown',
        type: 'int'
    }),
    8: avsc.Type.forSchema({
        name: 'keyup',
        type: 'string'
    }),
    9: avsc.Type.forSchema({
        name: 'changeBlock',
        type: 'record',
        fields: [
            {
                name: 'pos',
                type: {
                    type: "array",
                    items: "int"
                }
            },
            {
                name: 'toBlock',
                type: 'int'
            },
            {
                name: 'checker',
                type: 'boolean'
            }
        ]
    }),
    10: avsc.Type.forSchema({
        name: 'dropItem',
        type: 'record',
        fields: [
            {
                name: 'idx',
                type: 'int'
            },
            {
                name: 'id',
                type: 'int'
            },
            {
                name: 'amount',
                type: 'int'
            }
        ]
    }),
    11: avsc.Type.forSchema({
        name: 'moveItemIntoIdxs',
        type: 'record',
        fields: [
            {
                name: 'start',
                type: 'int'
            },
            {
                name: 'end',
                type: 'int'
            },
            {
                name: 'moveIdx',
                type: 'int'
            },
            {
                name: 'itemAmount',
                type: [
                    'null',
                    'int'
                ]
            }
        ]
    }),
    12: avsc.Type.forSchema({
        name: 'updateMyCosmetic',
        type: 'record',
        fields: [
            {
                name: 'partType',
                type: 'string'
            },
            {
                name: 'selected',
                type: 'string'
            }
        ]
    }),
    13: avsc.Type.forSchema({
        name: 'swapInvenSlots',
        type: 'record',
        fields: [
            {
                name: 'i',
                type: 'int'
            },
            {
                name: 'j',
                type: 'int'
            }
        ]
    }),
    14: avsc.Type.forSchema({
        name: 'moveInvenItemWithAmt',
        type: 'record',
        fields: [
            {
                name: 'i',
                type: 'int'
            },
            {
                name: 'j',
                type: 'int'
            },
            {
                name: 'amt',
                type: 'int'
            }
        ]
    }),
    15: avsc.Type.forSchema({
        name: 'needChunk',
        type: 'record',
        fields: [
            {
                name: 'id',
                type: 'string'
            },
            {
                name: 'lastSeen',
                type: [
                    'null',
                    'long'
                ]
            },
            {
                name: 'hash',
                type: [
                    'null',
                    'string'
                ]
            }
        ]
    }),
    16: null,
    17: avsc.Type.forSchema({
        name: 'itemPickedUp',
        type: 'record',
        fields: [
            {
                name: 'itemEId',
                type: 'string'
            },
            {
                name: 'itemAmt',
                type: 'int'
            },
            {
                name: 'sendInfo',
                type: 'boolean'
            }
        ]
    }),
    18: avsc.Type.forSchema({
        name: 'completeTask',
        type: 'string'
    }),
    19: avsc.Type.forSchema({
        name: 'generalCookieSet',
        type: 'record',
        fields: [
            {
                name: 'cookie',
                type: 'string'
            },
            {
                name: 'value',
                type: 'string'
            }
        ]
    }),
    20: avsc.Type.forSchema({
        name: 'phys',
        type: 'record',
        fields: [
            {
                name: 'dmmg',
                type: 'double'
            },
            {
                name: 'multt',
                type: 'double'
            },
            {
                name: 'crchSpd',
                type: 'double'
            },
            {
                name: 'wlkSpd',
                type: 'double'
            },
            {
                name: 'runSpd',
                type: 'double'
            },
            {
                name: 'time',
                type: 'double'
            },
            {
                name: 'amount',
                type: 'double'
            },
            {
                name: 'dimWidth',
                type: 'double'
            },
            {
                name: 'dimHeight',
                type: 'double'
            },
            {
                name: 'mass',
                type: 'double'
            }
        ]
    }),
    21: avsc.Type.forSchema({
        name: 'newSelectedInventorySlotI',
        type: 'int'
    }),
    22: avsc.Type.forSchema({
        name: 'shot',
        type: 'record',
        fields: [
            {
                name: 'origin',
                type: {
                    type: "array",
                    items: "double"
                }
            },
            {
                name: 'shots',
                type: {
                    type: 'array',
                    items: {
                        name: 'singleShotInfo',
                        type: 'record',
                        fields: [
                            {
                                name: 'entityId',
                                type: [
                                    'null',
                                    'string'
                                ]
                            },
                            {
                                name: 'dir',
                                type: {
                                    type: "array",
                                    items: "float"
                                }
                            },
                            {
                                name: 'dist',
                                type: 'double'
                            },
                            {
                                name: 'bodyPartHit',
                                type: [
                                    'null',
                                    'string'
                                ]
                            }
                        ]
                    }
                }
            }
        ]
    }),
    23: null,
    24: null,
    25: null,
    26: avsc.Type.forSchema({
        name: 'craftItem',
        type: 'array',
        items: {
            type: 'record',
            fields: [
                {
                    name: 'itemName',
                    type: 'string'
                },
                {
                    name: 'craftingIdx',
                    type: 'int'
                }
            ]
        }
    }),
    27: null,
    28: avsc.Type.forSchema({
        name: 'altAction',
        type: 'record',
        fields: [
            {
                name: 'targetPos',
                type: [
                    'null',
                    {
                        type: "array",
                        items: "int"
                    }
                ]
            },
            {
                name: 'targetEId',
                type: [
                    'null',
                    'string'
                ]
            },
            {
                name: 'dirFacing',
                type: {
                    type: "array",
                    items: "float"
                }
            },
            {
                name: 'heldId',
                type: 'int'
            },
            {
                name: 'complete',
                type: 'boolean'
            }
        ]
    }),
    29: avsc.Type.forSchema({
        name: 'chestConf',
        type: 'double'
    }),
    30: avsc.Type.forSchema({
        name: 'altActionWater',
        type: 'record',
        fields: [
            {
                name: 'pos',
                type: {
                    type: "array",
                    items: "int"
                }
            },
            {
                name: 'toBlock',
                type: [
                    'null',
                    'int'
                ]
            },
            {
                name: 'toSlot',
                type: [
                    'null',
                    'int'
                ]
            }
        ]
    }),
    31: avsc.Type.forSchema({
        name: 'putdownBucket',
        type: 'record',
        fields: [
            {
                name: 'pos',
                type: {
                    type: "array",
                    items: "int"
                }
            }
        ]
    }),
    32: null,
    33: avsc.Type.forSchema({
        name: 'hitEntity',
        type: 'record',
        fields: [
            {
                name: 'eId',
                type: 'string'
            },
            {
                name: 'bodyPartHit',
                type: [
                    'null',
                    'string'
                ]
            },
            {
                name: 'dirFacing',
                type: {
                    type: "array",
                    items: "float"
                }
            },
            {
                name: 'heldName',
                type: [
                    'null',
                    'string'
                ]
            },
            {
                name: 'v',
                type: 'int'
            }
        ]
    }),
    34: avsc.Type.forSchema({
        name: 'xclick',
        type: 'double'
    }),
    35: avsc.Type.forSchema({
        name: 'ingameClick',
        type: 'record',
        fields: [
            {
                name: 'type',
                type: 'int'
            },
            {
                name: 'doubleClick',
                type: 'boolean'
            }
        ]
    }),
    36: avsc.Type.forSchema({
        name: 'subTick',
        type: 'int'
    }),
    37: avsc.Type.forSchema({
        name: 'UiRequestResp',
        type: 'record',
        fields: [
            {
                name: 'id',
                type: 'int'
            },
            {
                name: 'response',
                type: 'boolean'
            }
        ]
    }),
    38: avsc.Type.forSchema({
        name: 'updateBoard',
        type: 'record',
        fields: [
            {
                name: 'pos',
                type: {
                    type: "array",
                    items: "int"
                }
            },
            {
                name: 'newText',
                type: 'string'
            },
            {
                name: 'textSize',
                type: 'int'
            }
        ]
    }),
    39: avsc.Type.forSchema({
        name: 'keepAlive',
        type: 'record',
        fields: [
            {
                name: 'a',
                type: 'string'
            },
            {
                name: 'b',
                type: [
                    'null',
                    'string'
                ]
            },
            {
                name: 'c',
                type: 'string'
            },
            {
                name: 'd',
                type: 'double'
            },
            {
                name: 'e',
                type: 'double'
            },
            {
                name: 'f',
                type: 'double'
            },
            {
                name: 'g',
                type: 'double'
            },
            {
                name: 'h',
                type: 'double'
            },
            {
                name: 'i',
                type: 'double'
            },
            {
                name: 'j',
                type: 'double'
            },
            {
                name: 'k',
                type: 'double'
            },
            {
                name: 'l',
                type: 'double'
            },
            {
                name: 'm',
                type: 'double'
            },
            {
                name: 'n',
                type: 'double'
            }
        ]
    }),
    40: null,
    41: avsc.Type.forSchema({
        name: 'updateBook',
        type: 'record',
        fields: [
            {
                name: 'pages',
                type: {
                    type: "array",
                    items: "double"
                }
            },
            {
                name: 'title',
                type: 'string'
            },
            {
                name: 'hasPublished',
                type: 'boolean'
            }
        ]
    }),
    42: avsc.Type.forSchema({
        name: 'removeItemFromInven',
        type: 'record',
        fields: [
            {
                name: 'idx',
                type: 'int'
            },
            {
                name: 'id',
                type: 'int'
            },
            {
                name: 'amount',
                type: 'int'
            }
        ]
    }),
    43: avsc.Type.forSchema({
        name: 'userReport',
        type: 'record',
        fields: [
            {
                name: 'player',
                type: 'string'
            },
            {
                name: 'msg',
                type: [
                    'null',
                    'string'
                ]
            },
            {
                name: 'policy',
                type: 'string'
            },
            {
                name: 'details',
                type: [
                'null',
                'string'
                ]
            }
        ]
    }),
    44: avsc.Type.forSchema({
        name: 'ignoreUser',
        type: 'record',
        fields: [
            {
                name: 'player',
                type: 'string'
            }
        ]
    }),
    45: avsc.Type.forSchema({
        name: 'harvestToBowl',
        type: 'record',
        fields: [
            {
                name: 'pos',
                type: {
                    type: "array",
                    items: "int"
                }
            },
            {
                name: 'toBlock',
                type: 'int'
            },
            {
                name: 'toSlot',
                type: 'int'
            }
        ]
    }),
    46: avsc.Type.forSchema({
        name: 'reportedEId',
        type: 'string'
    }),
    47: avsc.Type.forSchema({
        name: 'breakEntityAction',
        type: 'record',
        fields: [
            {
                name: 'eId',
                type: 'string'
            },
            {
                name: 'dirFacing',
                type: {
                    type: "array",
                    items: "float"
                }
            },
            {
                name: 'heldName',
                type: [
                'null',
                'string'
                ]
            }
        ]
    })
};

const actionToType = {
    "confirmTeleport": 0,
    "touchscreenActionButtonPress": 1,
    "finishChargingHeldItem": 3,
    "move": 4,
    "chat": 5,
    "keydown": 6,
    "ping": 7,
    "keyup": 8,
    "changeBlock": 9,
    "dropItem": 10,
    "moveItemIntoIdxs": 11,
    "updateMyCosmetic": 12,
    "swapInvenSlots": 13,
    "moveInvenItemWithAmt": 14,
    "needChunk": 15,
    "itemPickedUp": 17,
    "completeTask": 18,
    "generalCookieSet": 19,
    "phys": 20,
    "newSelectedInventorySlotI": 21,
    "shot": 22,
    "craftItem": 26,
    "altAction": 28,
    "chestConf": 29,
    "altActionWater": 30,
    "putdownBucket": 31,
    "hitEntity": 33,
    "xclick": 34,
    "ingameClick": 35,
    "subTick": 36,
    "UiRequestResp": 37,
    "updateBoard": 38,
    "keepAlive": 39,
    "updateBook": 41,
    "removeItemFromInven": 42,
    "userReport": 43,
    "ignoreUser": 44,
    "harvestToBowl": 45,
    "reqDiscordReportKey": 46,
    "breakEntityAction": 47,
    "LENGTH": 48
  };
window.actionToType = actionToType;
console.log("asdhgiopsdkfjwsdlfumsofnkjnkjnsakjao");
