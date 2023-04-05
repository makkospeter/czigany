function szamolj() {
    const pizzaPrice = 1300;
    const cheesePrice = document.getElementsByName('sajt')[0].checked ? 300 : 0;
    const szanamiPrice = document.getElementsByName('szanami')[0].checked ? 500 : 0;
    const mushroomPrice = document.getElementsByName('gombesz')[0].checked ? 400 : 0;
    const hamPrice = document.getElementsByName('sonka')[0].checked ? 600 : 0;
    const tomatoPrice = document.getElementsByName('paradicksom')[0].checked ? 200 : 0;
    const chickenPrice = document.getElementsByName('csirkehus')[0].checked ? 600 : 0;
    const baconPrice = document.getElementsByName('baconszanonna')[0].checked ? 500 : 0;
    const csulokPrice = document.getElementsByName('csulok')[0].checked ? 500 : 0;
    const tomatosaucePrice = document.getElementsByName('paradicsomszosz')[0].checked ? 0 : 0;
    const sourcreamPrice = document.getElementsByName('tenyfolos fokis szosz')[0].checked ? 0 : 0;
    const totalPrice = pizzaPrice + cheesePrice + szanamiPrice + mushroomPrice + hamPrice + tomatoPrice + chickenPrice + baconPrice + csulokPrice;
    document.getElementById('vegosszeg').innerHTML = `Végösszeg: ${totalPrice} Ft`;
}