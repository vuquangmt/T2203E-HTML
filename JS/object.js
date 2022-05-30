var obj = {
    name: "Nguyen Van An",
    age: 18,
    telephone: ["112233", "334455"],
    run: function () {
        console.log(this.name + " running...");

        var sv = {
            name: "Nguyễn Văn An"
            age: 18,
            address: "8 Tôn Thất Thuyết",
            telephone: "0375035138",
            myClass: {
                className: "T2203E",
                room: "B16",
            },
            myGroup: {
                groupName: "Nhóm 1",
                members: [
                    {
                        name: "Nguyễn Văn B",
                        telephone: "0988777666",
                    },
                    {
                        name: "Nguyễn Văn C",
                        telephone: "0966777888",
                    }
                ]

            }
        };
        //console.log(sv.myGroup.members[0].name)
}
}      obj.name = "Nguyen Thi Ha";
        console.log(obj.name);
        obj.run();
        obj.name = "Nguyễn Đức Lân";
        obj.run();

