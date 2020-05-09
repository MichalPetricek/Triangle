const init = function(){
let form = document.getElementById("triangleForm");
let alpha = document.getElementById("alpha");
let beta = document.getElementById("beta");
let gamma = document.getElementById("gamma");
let obvod = document.getElementById("perimeter");
let obsah = document.getElementById("content");
let x = window.location.search;
let search = new URLSearchParams(x);
let aa = search.get("a");
let bb = search.get("b");
let cc = search.get("c");
let t = new triangle(aa,bb,cc);
console.log(t);

if(t.Constructable == true){
    alpha.value = t.Alpha;
    beta.value = t.Beta;
    gamma.value = t.Gamma;
    obvod.value = t.Perimeter;
    obsah.value = t.Content;
    let triangleE = document.getElementById("scheme")
    triangleE.points.clear();
    let point1 = triangleE.parentElement.createSVGPoint();
    point1.x = t.CoordA.x;
    point1.y = t.CoordA.y;
    let point2 = triangleE.parentElement.createSVGPoint();
    point2.x = t.CoordB.x;
    point2.y = t.CoordB.y;
    let point3 = triangleE.parentElement.createSVGPoint();
    point3.x = t.CoordC.x;
    point3.y = t.CoordC.y;
    triangleE.points.appendItem(point1);
    triangleE.points.appendItem(point2);
    triangleE.points.appendItem(point3);  
    document.getElementById("view").setAttribute("viewBox", "0 0 " + t.a + " "  + t.HeightA);
}
else{
    alpha.value = "Nelze";
    beta.value = "Nelze";
    gamma.value = "Nelze";
    obvod.value = "Nelze";
    obsah.value = "Nelze";
}
}

document.addEventListener("DOMContentLoaded", init);

