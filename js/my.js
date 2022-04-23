let ctr = 0;
window.addEventListener("load", function () {
  let block = document.getElementById("block");

  // for y axis
  let posy = document.getElementById("pos-y");
  posy.addEventListener("input", function () {
    block.style.top = posy.value + "px";
  });
  let posx = document.getElementById("pos-x");
  posx.addEventListener("input", function () {
    block.style.left = posx.value + "px";
  });
  let size = document.getElementById("Size");
  size.addEventListener("input", function () {
    block.style.transform = `scale(${size.value})`;
  });
  let opacity = document.getElementById("Opacity");
  opacity.addEventListener("input", function () {
    block.style.opacity = opacity.value;
    op.value = opacity.value;
    a.value = opacity.value;
  });
  let but = document.getElementById("but");
  but.addEventListener("click", function () {
    ctr++;
    console.log(ctr);
    let shape = document.getElementById("shape-selector");

    if (shape.value == 1 && ctr == 1) {
      // do nothing
      ctr--;
      size.value = 1;
      block.style.borderRadius = "0";
      block.style.transform = "rotate(0)";
      block.style.transform = `scale(${1})`;
    }
    if (shape.value == 2 && ctr == 1) {
      block.style.borderRadius = "50%";
      ctr--;
      size.value = 1;
      block.style.transform = `scale(${1})`;
    }
    if (shape.value == 3 && ctr == 1) {
      // do nothing
      size.value = 1;
      block.style.borderRadius = "0";

      block.style.transform = `scale(${1})`;

      block.style.transform = "rotate(45deg)";
      ctr--;
    }
  });
  //   block.addEventListener("mouseover", function () {
  //     block.textContent = "Hello";
  //   });
  //   let holyf = document.querySelector(".su");
  //   holyf.addEventListener("mouseover", function () {
  //     block.textContent = " ";
  //     console.log("hello");
  //   });

  let HEXx = document.getElementById("HEX");
  HEXx.addEventListener("keyup", function (event) {
    console.log("hi");
    if (event.key == "Enter") {
      block.style.background = `#${HEXx.value}`;
    }
  });
  // last part god
  let r = document.getElementById("rgba-r");
  let g = document.getElementById("rgba-g");
  let b = document.getElementById("rgba-b");
  let a = document.getElementById("rgba-a");
  let red = 0,
    green = 0,
    blue = 0,
    op = opacity.value;
  a.value = opacity.value;
  r.addEventListener("input", function () {
    red = r.value;
    console.log(`rgba(${red},${green},${blue},${op})`);
    block.style.background = `rgba(${red},${green},${blue},${op})`;
  });
  g.addEventListener("input", function () {
    green = g.value;
    console.log(`rgba(${red},${green},${blue},${op})`);
    block.style.background = `rgba(${red},${green},${blue},${op})`;
  });
  b.addEventListener("input", function () {
    blue = b.value;
    console.log(`rgba(${red},${green},${blue},${op})`);
    block.style.background = `rgba(${red},${green},${blue},${op})`;
  });
  a.addEventListener("input", function () {
    op = a.value;
    console.log(`rgba(${red},${green},${blue},${op})`);
    block.style.background = `rgba(${red},${green},${blue},${op})`;
    opacity.value = op;
  });
});
