class triangle {
    // a,b,c jsou délky stran
    constructor(a,b,c) {
        this.a = Number(a);
        this.b = Number(b);
        this.c = Number(c);
    }
    // Délka strany A
    get A() {
        return this.a;
    }
    // Délka strany B
    get B() {
        return this.b;
    }
    // Délka strany C
    get C() {
        return this.c;
    }
    // Nastavení délky strany A
    set A(value) {
        this.a = Number(value);
    }
    // Nastavení délka strany B
    set B(value) {
        this.b = Number(value);
    }
    // Nastavení délky strany C
    set C(value) {
        this.c = Number(value);
    }
    // Délka nejdelší stranky
    get LongestSide() {
        return Math.max(this.a,this.b,this.c);
    }
    // Lze trojúhelník sestrojit?
    get Constructable() {
        if ((this.Perimeter - this.LongestSide) > this.LongestSide) return true; else return false; 
    }
    // Obvod trojúhelníka
    get Perimeter() {
        return this.a + this.b + this.c;
    }
    // Polovina obvodu (vhodná pro další výpočty)
    get halfPerimeter() {
        return (this.Perimeter / 2);
    }
    // Velikost úhlu alfa v radiánech
    get Alpha() {
        return 2 * Math.asin(Math.sqrt(((this.halfPerimeter - this.b)*(this.halfPerimeter - this.c)) / (this.b * this.c)));
    } 
    // Velikost úhlu beta v radiánech
    get Beta() {
        return 2 * Math.asin(Math.sqrt(((this.halfPerimeter - this.c)*(this.halfPerimeter - this.a)) / (this.a * this.c)));
    }
    // Velikost úhlu gama v radiánech
    get Gamma() {
        return 2 * Math.asin(Math.sqrt(((this.halfPerimeter - this.a)*(this.halfPerimeter - this.b)) / (this.a * this.b)));
    }
    // Poloměr kružnice opsané
    get CircumscribedCircle() {
        return this.a / (2 * Math.sin(this.Alpha));
    }
    // Obsah trojúhelníka
    get Content() {
        return Math.sqrt(this.halfPerimeter * (this.halfPerimeter - this.a) * (this.halfPerimeter - this.b) * (this.halfPerimeter - this.c));
    }
    // Výška nad stranou a
    get HeightA() {
        return this.b * Math.sin(this.Gamma);
    }
    // Výška nad stranou b
    get HeightB() {
        return this.c * Math.sin(this.Alpha);
    }
    // Výška nad stranou c
    get HeightC() {
        return this.a * Math.sin(this.Beta);
    }
    // Pata výšky na straně a
    get FootA() {
        return this.b * Math.cos(this.Gamma);
    }
    // Pata výšky na straně b
    get FootB() {
        return this.c * Math.cos(this.Alpha);
    }
    // Pata výšky na straně c
    get FootC() {
        return this.a * Math.cos(this.Beta);
    }
    // Vypočítané souřadnice bodu A [x,y]
    get CoordA() {
        return {x: 0, y: 0};
    }
    // Vypočítané souřadnice bodu B [x,y]
    get CoordB() {
        return {x: this.a, y: 0};
    }
    // Vypočítané souřadnice bodu C [x,y]
    get CoordC() {
        return {x: this.A - this.FootA, y: this.HeightA};
    }
}