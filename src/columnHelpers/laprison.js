const column = "percent Louisiana in prison";

const lambdaByLAPrison = function (d) {
    return 1 - d[column]
};

// const labelsLAPrison =
//     [
//         {
//             hashValue: 1,
//             meaning: "Not In Prison"
//         },
//         {
//             hashValue: 0,
//             meaning: "In Prison"
//         }
//     ];

const labelsLAPrison = [
    {
        hashValue: 0,
        meaning: "In Prison",
        color: "#1ec296"
    },
    {
        hashValue: 1,
        meaning: "Not In Prison",
        color: "#94386eff"
    }
];

const laPrisonMapFunc = function (d) {
    column_name = column
    const hashValue = lambdaByLAPrison(d);
    return labelsLAPrison[hashValue].meaning;
};

export {lambdaByLAPrison, labelsLAPrison, laPrisonMapFunc};