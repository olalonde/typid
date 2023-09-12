import assert from "node:assert";
import typid from "../index.js";

function testTypid() {
  const iters = 50;
  for (let i = 0; i < iters; i++) {
    const id = typid("user");
    const len = id.length - "user_".length;
    assert.ok(len >= 12);
    assert.ok(len <= 14);
    console.log(id);
  }
}

function testTypidNBits() {
  const id = typid("pk", 128);
  console.log(id);
  assert.equal(id.length, `pk_`.length + 22);
}

testTypid();
testTypidNBits();
