const videos = []

const videoIds = [
    "A1Nou3hvQyA",
    "BpiRMVV_WhE",
    "a5H2hhsGHyg",
    "GSGdOJJFSys",
    "f6W8ugtiFMM",
    "22FfQHW_YFE",
    "z1ohw4LMlfk",
    "qKsCD5WkjnA",
    "6cDoLQyvIQs",
    "HkmHF2B9Pho",
    "YHVQGaYfVBc",
    "DXH9Kvhr2jE",
    "QySLm-nWr-k",
    "9WvaFL_DWjM",
    "-jroZNhDX6A",
    "ZfnP-vce0sk",
    "_GqHZRO8Tn0",
    "hEL0NPy2VRA",
    "3ETrHiAtAxA",
    "Mc5rmaosXfo",
    "Br_FiluQLk8",
    "xNFf240jxYc",
    "Tnzdi1qvVR0",
    "zJh9Vl4fsT4",
    "KND1JtSK-sE",
    "6KfBmjuHNbc",
    "ndaYg6y8A8g",
    "_6BlVSG8TaA",
    "ium7A8cdSo4",
    "prNnu8B4u-8",
    "cjemcMezpyo",
    "Fbf0-1jqI0c",
    "EzIrU-Yp4ew",
    "dEEF-M2_8xg",
    "HKifxO8lJCU",
    "o5NTt2Z3_Zc",
    "TGMlUEE79mk",
    "Cw7-ISdYPlI",
    "8w_kf_0V6Z8",
    "YvsLUD5g_wQ",
    "tqObV_rYNsw",
    "j-RxwQF59FY",
    "5BF2CJZwjxQ",
    "vrnzZMMrblQ",
    "V3x3TgSyfOI",
    "HLea64e_NCU",
    "OO2UrxWCfJg",
    "dbKUy9yBV64",
    "Ugd4US1UBhM",
    "zecUX175Q0A",
    "DAQQKnxnzR8",
    "-i9VG39LV6w",
    "wmLsH-TEu88",
    "38HXLiocHmM",
    "W0-XIOMXOPc",
    "lx1aNSMs9CY",
    "swqoR5kxLrs",
    "gKTtKhaQAOM",
    "bk31otEQfiw",
    "6WWQXoY6cf0",
    "OIB-b6Y39ts",
    "c9fNmTpLFFM",
    "jnbPJG1UYfI",
    "lc3GDKbyjDs",
    "8CpFXiiPGyk",
    "5n2WP8RSayY",
    "TuxOU5gdN0c",
    "ULn1FZSMXr0",
    "QTvi9haD33k",
    "BYrHpJ0ZoIk",
    "t914GqDdIbM",
    "zsO-jkEgP5U",
    "AJ2yZtbdB0M",
    "8JfmDmCGgKU",
    "wUUAmUhv4vo",
    "XWhO-LkCXc8",
    "F4fc-wiWQ3M",
    "l_oBUiXLA5Y",
    "LMduUdJDrEQ",
    "CLRtFgfYXPc",
    "tHPsIKQJzek",
    "Qop9BuspudY",
    "tx7uUBkNMMs",
    "NCSX5BLLneE",
    "SuPxkg2cDSE",
    "T9jvmJCmLLw",
    "dx_BMQdOitg",
    "ZBmF75uagVQ",
    "jjsax61aFVc",
    "dSPUlJLpnvg",
    "vkjkohT-e2Y",
    "SUYWoUy0Sz4",
    "HDWJGkQ9cdk",
    "xjzCFV44a-0"
]

let key = 1
videoIds.map(video_id => {
    videos.push({key, videoId: video_id})
    key++
})

export {
    videos
}