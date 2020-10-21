function triangleArea(a, b, c, s, area) {
    
    s = (a + b + c) / 2;

    area = Math.sqrt(s * ((s - a) * ( s - b) * (s - c)));

    console.log(area);
}

triangleArea(2, 5, 4);
