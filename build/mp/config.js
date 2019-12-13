module.exports = {
	"origin": "https://test.miniprogram.com",
	"entry": "/index",
	"router": {
		"index": [
			{
				"regexp": "^\\/index(?:\\/)?$",
				"options": "i"
			}
		],
		"log": [
			{
				"regexp": "^\\/log(?:\\/)?$",
				"options": "i"
			}
		],
		"memory": [
			{
				"regexp": "^\\/memory(?:\\/)?$",
				"options": "i"
			}
		]
	},
	"runtime": {
		"subpackagesMap": {},
		"tabBarMap": {},
		"usingComponents": {}
	},
	"pages": {
		"index": {
			"rem": true,
			"pageStyle": true
		},
		"log": {
			"rem": true,
			"pageStyle": true
		},
		"memory": {
			"rem": true,
			"pageStyle": true
		}
	},
	"redirect": {
		"notFound": "index",
		"accessDenied": "index"
	},
	"optimization": {
		"domSubTreeLevel": 5,
		"elementMultiplexing": true,
		"textMultiplexing": true,
		"commentMultiplexing": true,
		"domExtendMultiplexing": true,
		"styleValueReduce": 5000,
		"attrValueReduce": 5000
	}
}