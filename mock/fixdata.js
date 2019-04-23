import { Mock, Constant, qs, randomAvatar } from './_utils'

const { ApiPrefix } = Constant

let database = [
    {
        "id": 1,
        "date": "2016.12.21",
        "address": "卧牛南村远江超市南边巷内公共厕所跟前",
        "fixContent":"自然爆管",
        "fixPeople": 39,
        "startTime": "12:37",
        "breakContent": 9,
        "fixOther": "",
        "reasonContent": 6,
        "materialContent": 8,
        "caliber": 28,
        "depth": 27,
        "endTime": "17:00",
        "longitude": "117.087037",
        "latitude": "34.256437",
        "flag": null
    },
    {
        "id": 2,
        "date": "2016.12.21",
        "address": "春华园1期A2-3-701",
        "fixContent":"拆表测压",
        "fixPeople": 39,
        "startTime": "16:37",
        "breakContent": 1,
        "fixOther": "测压1.7",
        "reasonContent": 1,
        "materialContent": 1,
        "caliber": 1,
        "depth": 1,
        "endTime": "18:00",
        "longitude": "117.191269",
        "latitude": "34.286740",
        "flag": null
    },
    {
        "id": 3,
        "date": "2016.12.21",
        "address": "万悦城一期5-1-302",
        "fixContent": "修换表节",
        "fixPeople": 39,
        "startTime": "13:30",
        "breakContent": 1,
        "fixOther": "",
        "reasonContent": 1,
        "materialContent": 1,
        "caliber": 2,
        "depth": 1,
        "endTime": "15:19",
        "longitude": "117.125888",
        "latitude": "34.231953",
        "flag": null
    },
    {
        "id": 4,
        "date": "2016.12.21",
        "address": "开元四季F区1-1-802",
        "fixContent": 3,
        "fixPeople": 39,
        "startTime": "09:07",
        "breakContent": 1,
        "fixOther": "冲水",
        "reasonContent": 1,
        "materialContent": 1,
        "caliber": 1,
        "depth": 1,
        "endTime": "11:10",
        "longitude": "117.120161",
        "latitude": "34.242129",
        "flag": null
    },
    {
        "id": 5,
        "date": "2016.12.21",
        "address": "新河矿2号楼1单元",
        "fixContent": 3,
        "fixPeople": 39,
        "startTime": "09:07",
        "breakContent": 1,
        "fixOther": "冲水",
        "reasonContent": 1,
        "materialContent": 1,
        "caliber": 1,
        "depth": 1,
        "endTime": "12:09",
        "longitude": "117.102920",
        "latitude": "34.230174",
        "flag": null
    },
    {
        "id": 6,
        "date": "2016.12.21",
        "address": "开元四季一期C11-2-502",
        "fixContent": 4,
        "fixPeople": 39,
        "startTime": "12:03",
        "breakContent": 1,
        "fixOther": "不漏，未发现漏水现象",
        "reasonContent": 1,
        "materialContent": 1,
        "caliber": 1,
        "depth": 1,
        "endTime": "16:22",
        "longitude": "117.121764",
        "latitude": "34.242569",
        "flag": null
    },
    {
        "id": 7,
        "date": "2016.12.21",
        "address": "二轻路东侧宝寿司店门口",
        "fixContent": 5,
        "fixPeople": 39,
        "startTime": "16:10",
        "breakContent": 1,
        "fixOther": "卡小盖",
        "reasonContent": 1,
        "materialContent": 1,
        "caliber": 1,
        "depth": 1,
        "endTime": "17:22",
        "longitude": "117.147123",
        "latitude": "34.260459",
        "flag": null
    },
    {
        "id": 8,
        "date": "2016.12.21",
        "address": "开元四季一期C11-2-402",
        "fixContent":"拆表测压",
        "fixPeople": 39,
        "startTime": "05:41",
        "breakContent": 1,
        "fixOther": "测压2.4",
        "reasonContent": 1,
        "materialContent": 1,
        "caliber": 1,
        "depth": 1,
        "endTime": "09:45",
        "longitude": "117.121764",
        "latitude": "34.242569",
        "flag": null
    },
    {
        "id": 9,
        "date": "2016.12.21",
        "address": "夹河35-2-401",
        "fixContent":"自然爆管",
        "fixPeople": 1,
        "startTime": "09:26",
        "breakContent": 9,
        "fixOther": "",
        "reasonContent": 6,
        "materialContent": 8,
        "caliber": 2,
        "depth": 27,
        "endTime": "11:13",
        "longitude": "116.672534",
        "latitude": "34.551446",
        "flag": null
    },
    {
        "id": 10,
        "date": "2016.12.21",
        "address": "黄河北村4号楼2单元102",
        "fixContent": 6,
        "fixPeople": 1,
        "startTime": "10:26",
        "breakContent": 1,
        "fixOther": "",
        "reasonContent": 1,
        "materialContent": 1,
        "caliber": 2,
        "depth": 1,
        "endTime": "12:12",
        "longitude": "117.166684",
        "latitude": "34.276987",
        "flag": null
    },
    {
        "id": 11,
        "date": "2016.12.21",
        "address": "郡望花园C3-4楼-3单元201",
        "fixContent": 6,
        "fixPeople": 1,
        "startTime": "11:39",
        "breakContent": 1,
        "fixOther": "",
        "reasonContent": 1,
        "materialContent": 1,
        "caliber": 2,
        "depth": 1,
        "endTime": "15:15",
        "longitude": "117.181237",
        "latitude": "34.298966",
        "flag": null
    },
    {
        "id": 12,
        "date": "2016.12.21",
        "address": "黄河北路37-4-203",
        "fixContent": 4,
        "fixPeople": 1,
        "startTime": "10:41",
        "breakContent": 1,
        "fixOther": "电话无人接听，未找到",
        "reasonContent": 1,
        "materialContent": 1,
        "caliber": 1,
        "depth": 1,
        "endTime": "12:35",
        "longitude": "117.171288",
        "latitude": "34.274850",
        "flag": null
    },
    {
        "id": 13,
        "date": "2016.12.21",
        "address": "鼓楼花园8-3-401",
        "fixContent": 4,
        "fixPeople": 1,
        "startTime": "10:41",
        "breakContent": 1,
        "fixOther": "压力正常，前后闸正常",
        "reasonContent": 1,
        "materialContent": 1,
        "caliber": 1,
        "depth": 1,
        "endTime": "12:35",
        "longitude": "117.194296",
        "latitude": "34.301233",
        "flag": null
    },
    {
        "id": 14,
        "date": "2016.12.21",
        "address": "民富大道交通银行的主要路面上",
        "fixContent":"自然爆管",
        "fixPeople": 2,
        "startTime": "12:07",
        "breakContent": 9,
        "fixOther": "",
        "reasonContent": 6,
        "materialContent": 2,
        "caliber": 3,
        "depth": 2,
        "endTime": "18:00",
        "longitude": "117.244287",
        "latitude": "34.246321",
        "flag": null
    },
    {
        "id": 15,
        "date": "2016.12.21",
        "address": "黄山新村东43号楼1-401",
        "fixContent": 6,
        "fixPeople": 2,
        "startTime": "16:07",
        "breakContent": 1,
        "fixOther": "",
        "reasonContent": 1,
        "materialContent": 1,
        "caliber": 2,
        "depth": 1,
        "endTime": "18:00",
        "longitude": "117.242706",
        "latitude": "34.255905",
        "flag": null
    },
    {
        "id": 16,
        "date": "2016.12.21",
        "address": "万达广场3幢1单元1202",
        "fixContent":"拆表测压",
        "fixPeople": 2,
        "startTime": "16:07",
        "breakContent": 1,
        "fixOther": "测压2.0",
        "reasonContent": 1,
        "materialContent": 1,
        "caliber": 1,
        "depth": 1,
        "endTime": "18:00",
        "longitude": "117.244827",
        "latitude": "34.253214",
        "flag": null
    },
    {
        "id": 17,
        "date": "2016.12.21",
        "address": "郭庄路东方明珠9-1-301",
        "fixContent":"自然爆管",
        "fixPeople": 2,
        "startTime": "16:07",
        "breakContent": 9,
        "fixOther": "",
        "reasonContent": 6,
        "materialContent": 8,
        "caliber": 2,
        "depth": 27,
        "endTime": "18:00",
        "longitude": "117.242333",
        "latitude": "34.242861",
        "flag": null
    },
    {
        "id": 18,
        "date": "2016.12.21",
        "address": "铜山路建新小区11号楼3单元门前",
        "fixContent":"自然爆管",
        "fixPeople": 2,
        "startTime": "09:35",
        "breakContent": 9,
        "fixOther": "",
        "reasonContent": 2,
        "materialContent": 8,
        "caliber": 28,
        "depth": 27,
        "endTime": "14:00",
        "longitude": "117.219117",
        "latitude": "34.261581",
        "flag": null
    },
    {
        "id": 19,
        "date": "2016.12.21",
        "address": "煤建西路8号院4号楼1单元",
        "fixContent":"自然爆管",
        "fixPeople": 3,
        "startTime": "09:35",
        "breakContent": 9,
        "fixOther": "",
        "reasonContent": 2,
        "materialContent": 3,
        "caliber": 4,
        "depth": 2,
        "endTime": "14:00",
        "longitude": "117.162996",
        "latitude": "34.256342",
        "flag": null
    },
    {
        "id": 20,
        "date": "2016.12.21",
        "address": "煤建西路8号院4号楼1单元",
        "fixContent":"自然爆管",
        "fixPeople": 3,
        "startTime": "16:45",
        "breakContent": 9,
        "fixOther": "2处",
        "reasonContent": 2,
        "materialContent": 8,
        "caliber": 28,
        "depth": 27,
        "endTime": "18:00",
        "longitude": "117.162996",
        "latitude": "34.256342",
        "flag": null
    }
]

module.exports = {
    [`GET ${ApiPrefix}/fixdatas`](req, res) {
        const { query } = req
        let { pageSize, page, ...other } = query
        pageSize = pageSize || 10
        page = page || 1
        return res.status(200).json({
            data: database.slice((page - 1) * pageSize, page * pageSize),
            total: 20,
        })
    }
}