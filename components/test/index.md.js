webpackJsonp([10,12],{

/***/ 226:
/***/ function(module, exports) {

	module.exports = {
	  "content": [
	    "section",
	    [
	      "p",
	      "从左侧滑出的模态，包含各种导航分类。"
	    ],
	    [
	      "h3",
	      "规则"
	    ],
	    [
	      "ul",
	      [
	        "li",
	        [
	          "p",
	          "是 Android 推荐的导航方式，常见于该平台应用。"
	        ]
	      ]
	    ]
	  ],
	  "meta": {
	    "category": "Components",
	    "type": "Navigation",
	    "chinese": "测试",
	    "english": "Drawer",
	    "filename": "components/test/index.md"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "href": "#API-(-适用平台：WEB、React-Native-)"
	        },
	        "API ( 适用平台：WEB、React-Native )"
	      ]
	    ]
	  ],
	  "api": [
	    "section",
	    [
	      "h2",
	      "API ( 适用平台：WEB、React-Native )"
	    ],
	    [
	      "table",
	      [
	        "thead",
	        [
	          "tr",
	          [
	            "th",
	            "成员"
	          ],
	          [
	            "th",
	            "说明"
	          ],
	          [
	            "th",
	            "类型"
	          ],
	          [
	            "th",
	            "默认值"
	          ]
	        ]
	      ],
	      [
	        "tbody",
	        [
	          "tr",
	          [
	            "td",
	            "children"
	          ],
	          [
	            "td",
	            "主要内容"
	          ],
	          [
	            "td",
	            "any"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "sidebar"
	          ],
	          [
	            "td",
	            "抽屉里的内容"
	          ],
	          [
	            "td",
	            "any"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "onOpenChange"
	          ],
	          [
	            "td",
	            "open 状态切换时调用"
	          ],
	          [
	            "td",
	            "(open: bool): void"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "position"
	          ],
	          [
	            "td",
	            "抽屉所在位置"
	          ],
	          [
	            "td",
	            "String"
	          ],
	          [
	            "td",
	            "'left', enum{'left', 'right', 'top'(",
	            [
	              "code",
	              "web only"
	            ],
	            "), 'bottom'(",
	            [
	              "code",
	              "web only"
	            ],
	            ")}"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "sidebarStyle (",
	            [
	              "code",
	              "web only"
	            ],
	            ")"
	          ],
	          [
	            "td",
	            "-"
	          ],
	          [
	            "td",
	            "Object"
	          ],
	          [
	            "td",
	            "{}"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "contentStyle (",
	            [
	              "code",
	              "web only"
	            ],
	            ")"
	          ],
	          [
	            "td",
	            "-"
	          ],
	          [
	            "td",
	            "Object"
	          ],
	          [
	            "td",
	            "{}"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "overlayStyle(",
	            [
	              "code",
	              "web only"
	            ],
	            ")"
	          ],
	          [
	            "td",
	            "-"
	          ],
	          [
	            "td",
	            "Object"
	          ],
	          [
	            "td",
	            "{}"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "dragHandleStyle(",
	            [
	              "code",
	              "web only"
	            ],
	            ")"
	          ],
	          [
	            "td",
	            "-"
	          ],
	          [
	            "td",
	            "Object"
	          ],
	          [
	            "td",
	            "{}"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "touch(",
	            [
	              "code",
	              "web only"
	            ],
	            ")"
	          ],
	          [
	            "td",
	            "是否开启触摸手势"
	          ],
	          [
	            "td",
	            "Boolean"
	          ],
	          [
	            "td",
	            "true"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "transitions(",
	            [
	              "code",
	              "web only"
	            ],
	            ")"
	          ],
	          [
	            "td",
	            "是否开启动画"
	          ],
	          [
	            "td",
	            "Boolean"
	          ],
	          [
	            "td",
	            "true"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "docked(",
	            [
	              "code",
	              "web only"
	            ],
	            ")"
	          ],
	          [
	            "td",
	            "是否嵌入到正常文档流里"
	          ],
	          [
	            "td",
	            "Boolean"
	          ],
	          [
	            "td",
	            "false"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "dragToggleDistance(",
	            [
	              "code",
	              "web only"
	            ],
	            ")"
	          ],
	          [
	            "td",
	            "打开关闭抽屉时距 sidebar 的拖动距离"
	          ],
	          [
	            "td",
	            "Number"
	          ],
	          [
	            "td",
	            "30"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "open(",
	            [
	              "code",
	              "web only"
	            ],
	            ")"
	          ],
	          [
	            "td",
	            "开关状态"
	          ],
	          [
	            "td",
	            "Boolean"
	          ],
	          [
	            "td",
	            "false"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "drawerWidth (",
	            [
	              "code",
	              "rn only"
	            ],
	            ")"
	          ],
	          [
	            "td",
	            "抽屉宽度"
	          ],
	          [
	            "td",
	            "Number"
	          ],
	          [
	            "td",
	            "300"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "drawerBackgroundColor (",
	            [
	              "code",
	              "rn only"
	            ],
	            ")"
	          ],
	          [
	            "td",
	            "指定抽屉背景色"
	          ],
	          [
	            "td",
	            "String"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "openDrawer (",
	            [
	              "code",
	              "rn only"
	            ],
	            ")"
	          ],
	          [
	            "td",
	            "打开函数"
	          ],
	          [
	            "td",
	            "(): void"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ],
	        [
	          "tr",
	          [
	            "td",
	            "closeDrawer (",
	            [
	              "code",
	              "rn only"
	            ],
	            ")"
	          ],
	          [
	            "td",
	            "关闭函数"
	          ],
	          [
	            "td",
	            "(): void"
	          ],
	          [
	            "td",
	            "-"
	          ]
	        ]
	      ]
	    ]
	  ]
	};

/***/ }

});