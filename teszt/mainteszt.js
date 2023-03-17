QUnit.module("leptetes metodus tesztelése", function () {
  QUnit.test("letezik e a leptetes fuggveny?", function (assert) {
    assert.ok(typeof leptetes === "function", "A léptetés függvény.");
  });
  QUnit.test("leptetes(1, 2)", function (assert) {
    assert.equal(leptetes(1, 2), 3);
  });
  QUnit.test("leptetes(1, 2)", function (assert) {
    assert.equal(leptetes(1, lista.length - 1), 0);
  });
  QUnit.test("leptetes(1, 2)", function (assert) {
    assert.equal(leptetes(-1, 2), 1);
  });
  QUnit.test("leptetes(1, 2)", function (assert) {
    assert.equal(leptetes(-1, 0), lista.length - 1);
  });
  QUnit.test("leptetes(1, 2)", function (assert) {
    assert.equal(leptetes(-1, lista.length - 1), lista.length - 2);
  });
});

QUnit.module("leptetes metodus tesztelése", function () {
  QUnit.test("letezik e a osszealit fuggveny?", function (assert) {
    assert.ok(typeof osszealit === "function", "Az osszealit függvény.");
  });
  QUnit.test("leptetes(1, 2)", function (assert) {
    lista = ["kepek/alszik.jpg"];
    assert.equal(osszealit(), `<div><img src="kepek/alszik.jpg" alt=""></div>`);
  });
});
