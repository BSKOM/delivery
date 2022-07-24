const state = {
    shop: [
        {
            "name": "Good1",
            "price": "1500",
            "ids": 1,
            "id": 1001,
        },
        {
            "name": "Good2",
            "price": "830",
            "ids": 1,
            "id": 1002,
        },
        {
            "name": "Good3",
            "price": "2999",
            "ids": 1,
            "id": 1003,
        },
        {
            "name": "Good4",
            "price": "3999",
            "ids": 1,
            "id": 1004,
        },

    ],
    carts: [
        {
            "user": 1001,
            "date": Date.now(),
            "cart": [
                [
                    {
                        "name": "Good1",
                        "price": "1500",
                        "ids": 1,
                        "id": 1001,
                    },
                    3
                ],
                [            
                    {
                        "name": "Good2",
                        "price": "830",
                        "ids": 1,
                        "id": 1002,
                    },
                    1
                ]
            ],
        }
    ]
};

export default state;

