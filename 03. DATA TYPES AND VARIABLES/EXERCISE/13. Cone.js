function cone (radius, height, volume, area) {
    
    volume = 1/3*Math.PI*radius*radius*height;

    let slantHeight = Math.sqrt(radius*radius + height*height);
    area = (Math.PI*radius*slantHeight) + (Math.PI*radius*radius);
    
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);

}

cone(3, 5);