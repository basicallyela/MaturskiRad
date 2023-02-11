Array.prototype.parse2D = function(){
    const rows = [];
    for( let i = 0; i < this.length; i+=15){
        rows.push(this.slice(i, i+15));
    }

    return rows;

}


Array.prototype.createObjectsFrom2D = function () {
    const objects = [];
    this.forEach((row, y) => {
    row.forEach((symbol, x) => {
        if(symbol === 1){
            objects.push(
                new CollidedBlock({
                position: {
                    x: x * 64,
                    y: y * 64,
                },
            }));
        }
        if(symbol === 2){
            objects.push(
                new CollidedLine({
                position: {
                    x: x * 64,
                    y: y * 64,
                },
            }));
        }
    });
});
return objects;
}