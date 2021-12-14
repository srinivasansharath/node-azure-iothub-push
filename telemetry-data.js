module.exports = {
    factroyId: "IndustryX",
    machineId: "IoT-Machine-1",
    partNumber: "ASIDFH09834",
    partDescription: "Steering Wheel",
    serialNumber: "238702348",
    overAllDecision: "OK",
    timeOfScan: 92873492734,
    images: [{
            angle: "left",
            imageDecision: "OK",
            imageSource: "/dev/usb1",
            imageFileName: "filename1.jpg",
            boundingBoxes: [{
                    componentDecision: "OK",
                    componentDescription: "Screw 1",
                    xTop: 298,
                    yTop: 763,
                    xBottom: 398,
                    yBottom: 687
                },
                {
                    componentDecision: "OK",
                    componentDescription: "Screw 2",
                    xTop: 298,
                    yTop: 763,
                    xBottom: 398,
                    yBottom: 687
                }
            ],
        },
        {
            angle: "right",
            imageDecision: "OK",
            imageSource: "/dev/usb2",
            imageFileName: "filename2.jpg",
            boundingBoxes: [{
                    componentDecision: "OK",
                    componentDescription: "Screw 1",
                    xTop: 298,
                    yTop: 763,
                    xBottom: 398,
                    yBottom: 687
                },
                {
                    componentDecision: "OK",
                    componentDescription: "Screw 2",
                    xTop: 298,
                    yTop: 763,
                    xBottom: 398,
                    yBottom: 687
                }
            ],
        },
        {
            angle: "center",
            imageDecision: "OK",
            imageSource: "/dev/usb3",
            imageFileName: "filename3.jpg",
            boundingBoxes: [{
                    componentDecision: "OK",
                    componentDescription: "Screw 1",
                    xTop: 298,
                    yTop: 763,
                    xBottom: 398,
                    yBottom: 687
                },
                {
                    componentDecision: "OK",
                    componentDescription: "Screw 2",
                    xTop: 298,
                    yTop: 763,
                    xBottom: 398,
                    yBottom: 687
                }
            ],
        }
    ]
};