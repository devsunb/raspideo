module.exports = [{
    file: "./rasp",
    path: "/rasps",
    method: "add",
    type: "POST"
}, {
    file: "./rasp",
    path: "/rasps",
    method: "list",
    type: "GET"
}, {
    file: "./rasp",
    path: "/rasps/video",
    method: "changeVideo",
    upload: "video",
    type: "POST"
}, {
    file: "./rasp",
    path: "/rasps/:id",
    method: "get",
    type: "GET"
}, {
    file: "./rasp",
    path: "/rasps/:id",
    method: "delete",
    type: "DELETE"
}, {
    file: "./rasp",
    path: "/rasps/:id/rename",
    method: "rename",
    type: "PUT"
}, {
    file: "./rasp",
    path: "/rasps/:id/update",
    method: "update",
    type: "POST"
}, ];