
function main () {
    const region1 = [1540, 1130, 1580, 1105];
    const region2 = [2010, 1168, 2305, 4102];
    const region3 = [2450, 1847, 2710, 2391];
    const region4 = [1845, 1491, 1284, 1575];
    const region5 = [2120, 1767, 1599, 3888];

    let quarter1 = 0;
    let quarter2 = 0;
    let quarter3 = 0;
    let quarter4 = 0;
    let regionOne = 0;
    let regionTwo = 0;
    let regionThree = 0;
    let regionFour = 0;
    let regionFive = 0;
    let str1      = "";
    let str2      = "";

    quarter1 = region1[0] + region2[0] + region3[0] + region4[0] + region5[0];
    quarter2 = region1[1] + region2[1] + region3[1] + region4[1] + region5[1];
    quarter3 = region1[2] + region2[2] + region3[2] + region4[2] + region5[2];
    quarter4 = region1[3] + region2[3] + region3[3] + region4[3] + region5[3];
    
    str1    = "Sales by Quarter \n";
    str1 += "\nQ1: " + quarter1;
    str1 += "\nQ2: " + quarter2;
    str1 += "\nQ3: " + quarter3;
    str1 += "\nQ4: " + quarter4;
    
    for (let lcv = 0; lcv < region1.length; ++ lcv) {
        regionOne += region1[lcv];
        regionTwo += region2[lcv];
        regionThree += region3[lcv];
        regionFour += region4[lcv];
        regionFive += region5[lcv];
    }

    str2    = "Sales by Quarter \n";
    str2 += "\nRegion1: " + regionOne;
    str2 += "\nRegion2: " + regionTwo;
    str2 += "\nRegion3: " + regionThree;
    str2 += "\nRegion4: " + regionFour;
    str2 += "\nRegion5: " + regionFive;
    alert(str);
}