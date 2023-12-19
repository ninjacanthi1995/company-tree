Query: {
  getTree {
    id
    cost
    parentId
    createdAt
    name
    children {
      id
      cost
      parentId
      createdAt
      name
      children {
        id
        cost
        name
        parentId
        createdAt
        children {
          id
          cost
          name
          parentId
          createdAt
          children {
            id
            cost
          }
        }
      }
    }
  }
}

Reponse: {
  "data": {
    "getTree": [
      {
        "id": "uuid-1",
        "cost": 52983,
        "parentId": "0",
        "createdAt": "2021-02-26T00:55:36.632Z",
        "name": "Webprovise Corp",
        "children": [
          {
            "id": "uuid-2",
            "cost": 5199,
            "parentId": "uuid-1",
            "createdAt": "2021-02-25T10:35:32.978Z",
            "name": "Stamm LLC",
            "children": [
              {
                "id": "uuid-4",
                "cost": 1340,
                "name": "Price and Sons",
                "parentId": "uuid-2",
                "createdAt": "2021-02-25T06:11:47.519Z",
                "children": []
              },
              {
                "id": "uuid-7",
                "cost": 1636,
                "name": "Zieme - Mills",
                "parentId": "uuid-2",
                "createdAt": "2021-02-25T07:56:32.335Z",
                "children": []
              },
              {
                "id": "uuid-19",
                "cost": 794,
                "name": "Schneider - Adams",
                "parentId": "uuid-2",
                "createdAt": "2021-02-25T21:06:18.777Z",
                "children": []
              }
            ]
          },
          {
            "id": "uuid-3",
            "cost": 15713,
            "parentId": "uuid-1",
            "createdAt": "2021-02-25T15:16:30.887Z",
            "name": "Blanda, Langosh and Barton",
            "children": [
              {
                "id": "uuid-5",
                "cost": 1288,
                "name": "Hane - Windler",
                "parentId": "uuid-3",
                "createdAt": "2021-02-25T13:35:57.923Z",
                "children": []
              },
              {
                "id": "uuid-6",
                "cost": 2512,
                "name": "Vandervort - Bechtelar",
                "parentId": "uuid-3",
                "createdAt": "2021-02-26T01:41:06.479Z",
                "children": []
              },
              {
                "id": "uuid-9",
                "cost": 3086,
                "name": "Kuhic - Swift",
                "parentId": "uuid-3",
                "createdAt": "2021-02-25T16:02:49.099Z",
                "children": []
              },
              {
                "id": "uuid-17",
                "cost": 4072,
                "name": "Rohan, Mayer and Haley",
                "parentId": "uuid-3",
                "createdAt": "2021-02-25T11:17:52.132Z",
                "children": []
              },
              {
                "id": "uuid-20",
                "cost": 908,
                "name": "Kunde, Armstrong and Hermann",
                "parentId": "uuid-3",
                "createdAt": "2021-02-26T01:51:25.421Z",
                "children": []
              }
            ]
          },
          {
            "id": "uuid-8",
            "cost": 28817,
            "parentId": "uuid-1",
            "createdAt": "2021-02-25T23:47:57.596Z",
            "name": "Bartell - Mosciski",
            "children": [
              {
                "id": "uuid-10",
                "cost": 4288,
                "name": "Lockman Inc",
                "parentId": "uuid-8",
                "createdAt": "2021-02-26T01:39:33.438Z",
                "children": []
              },
              {
                "id": "uuid-11",
                "cost": 12236,
                "name": "Parker - Shanahan",
                "parentId": "uuid-8",
                "createdAt": "2021-02-26T00:32:01.307Z",
                "children": [
                  {
                    "id": "uuid-12",
                    "cost": 2110,
                    "name": "Swaniawski Inc",
                    "parentId": "uuid-11",
                    "createdAt": "2021-02-25T06:44:56.245Z",
                    "children": []
                  },
                  {
                    "id": "uuid-14",
                    "cost": 7254,
                    "name": "Weimann, Runolfsson and Hand",
                    "parentId": "uuid-11",
                    "createdAt": "2021-02-25T15:22:08.098Z",
                    "children": []
                  }
                ]
              },
              {
                "id": "uuid-13",
                "cost": 1686,
                "name": "Balistreri - Bruen",
                "parentId": "uuid-8",
                "createdAt": "2021-02-25T20:45:53.518Z",
                "children": []
              },
              {
                "id": "uuid-15",
                "cost": 4725,
                "name": "Predovic and Sons",
                "parentId": "uuid-8",
                "createdAt": "2021-02-25T18:00:26.864Z",
                "children": []
              },
              {
                "id": "uuid-16",
                "cost": 3277,
                "name": "Weissnat - Murazik",
                "parentId": "uuid-8",
                "createdAt": "2021-02-26T01:50:50.354Z",
                "children": []
              }
            ]
          },
          {
            "id": "uuid-18",
            "cost": 2033,
            "parentId": "uuid-1",
            "createdAt": "2021-02-26T02:31:22.154Z",
            "name": "Walter, Schmidt and Osinski",
            "children": []
          }
        ]
      }
    ]
  }
}