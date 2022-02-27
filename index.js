const yep = [
	{
        "check": "should be in the middle",
		"created_at": "2022-02-16T11:16:04Z",
		"published_at": "2022-01-16T11:17:07Z"
	},
	{
        "check": "should be first",
		"created_at": "2022-02-16T08:55:24Z",
		"published_at": "2022-01-17T08:55:44Z"
	},
	{
        "check": "should be last",
		"created_at": "2022-02-14T11:43:00Z",
		"published_at": "2021-02-14T11:45:24Z"
	}
]

yep.sort((a, b) => new Date(b.published_at) - new Date(a.published_at))
console.log(yep)
console.log("main")