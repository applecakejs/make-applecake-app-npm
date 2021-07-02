const fs = require("fs");
const h1 = "`<h1>Welcome to applecake<h1>`";
const p = "`<p>edit Render.js to start</p>`";
let id = "`${id}`";
const mkfile = () => {
  fs.writeFileSync(
    "./components/component1.js",
    `
const h1 = () =>{
    return (
        ${h1}
        )
}
`
  );

  fs.writeFileSync(
    "./components/component2.js",
    `
const p = () =>{
    return (
        ${p}
    )
}
`
  );
  fs.writeFileSync(
    "./css/style.css",
    `
h1 {
    font : arial
}
p{
    font : arial
}
`
  );
  fs.writeFileSync(
    "./dist/applecake-1.0.1.js",
    `
    var IdManager = {
        edit: function (oldid, newid) {
            var select = document.getElementById("" + oldid);
            select.id = newid;
        },
        "delete": function (oldid) {
            var select = document.getElementById("" + oldid);
            select.id = "";
        },
        "switch": function (id1, id2) {
            var id1select = document.getElementById(id1);
            var id2select = document.getElementById(id2);
            id1select.id = "" + id2;
            id2select.id = "" + id1;
        }
    };
    function Insert(id, html) {
        var selection = document.getElementById("" + id);
        selection.innerHTML = html;
    }
    function Render(id, html) {
        var selection = document.getElementById("" + id);
        selection.innerHTML += html;
    }
    function CLASSselector(classname) {
        return document.getElementsByClassName(classname);
    }
    function IDselector(id) {
        return document.getElementById(id);
    }
    //# sourceMappingURL=applecake.js.map
`
  );
  fs.writeFileSync(
    "./Render.js",
    `
  Render(
      "main",
      h1()
  )
  Render(
      "main",
      p()
  )
  `
  );
  fs.writeFileSync(
    "index.html",
    `
      
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" href="./css/style.css">
  </head>
  <body>
      <div id="main"></div>
  </body>
  <script src="./dist/applecake-1.0.1.min.js"></script>
  <!-- components-->
  <script src="./components/component1.js"></script>
  <script src="./components/component2.js"></script>
  <script src="Render.js"></script>
  </html>
      `
  );
  fs.writeFileSync(
      "./dist/applecake-1.0.1.min.js" ,
      `
      var IdManager={edit:function(e,n){document.getElementById(""+e).id=n},delete:function(e){document.getElementById(""+e).id=""},switch:function(e,n){var t=document.getElementById(e),d=document.getElementById(n);t.id=""+n,d.id=""+e}};function Insert(e,n){document.getElementById(""+e).innerHTML=n}function Render(e,n){document.getElementById(""+e).innerHTML+=n}function CLASSselector(e){return document.getElementsByClassName(e)}function IDselector(e){return document.getElementById(e)}
      `
  )
fs.writeFileSync(
    "./dist/applecake-1.0.1.map.js" , 
    `
    {"version":3,"file":"applecake.js","sourceRoot":"","sources":["../lib/Idmanager/idmanager.ts","../lib/Insert/insert.ts","../lib/Render/render.ts","../lib/Select/classselector.ts","../lib/Select/idselector.ts"],"names":[],"mappings":"AAAA,IAAM,SAAS,GAAG;IAChB,IAAI,EAAE,UAAC,KAAY,EAAE,KAAY;QAE/B,IAAI,MAAM,GAAG,QAAQ,CAAC,cAAc,CAAC,KAAG,KAAO,CAAC,CAAC;QACjD,MAAM,CAAC,EAAE,GAAG,KAAK,CAAC;IACpB,CAAC;IACD,QAAM,EAAE,UAAC,KAAY;QAEnB,IAAI,MAAM,GAAG,QAAQ,CAAC,cAAc,CAAC,KAAG,KAAO,CAAC,CAAC;QACjD,MAAM,CAAC,EAAE,GAAG,EAAE,CAAC;IACjB,CAAC;IACD,QAAM,EAAE,UAAC,GAAU,EAAE,GAAU;QAE7B,IAAI,SAAS,GAAG,QAAQ,CAAC,cAAc,CAAC,GAAG,CAAC,CAAC;QAC7C,IAAI,SAAS,GAAG,QAAQ,CAAC,cAAc,CAAC,GAAG,CAAC,CAAC;QAC7C,SAAS,CAAC,EAAE,GAAG,KAAG,GAAK,CAAA;QACvB,SAAS,CAAC,EAAE,GAAG,KAAG,GAAK,CAAA;IAEzB,CAAC;CACF,CAAC;ACnBF,SAAS,MAAM,CAAC,EAAW,EAAE,IAAY;IAKpC,IAAI,SAAS,GAAG,QAAQ,CAAC,cAAc,CAAC,KAAG,EAAI,CAAC,CAAA;IAChD,SAAS,CAAC,SAAS,GAAG,IAAI,CAAA;AAE/B,CAAC;ACRD,SAAS,MAAM,CAAC,EAAW,EAAE,IAAa;IAKtC,IAAI,SAAS,GAAG,QAAQ,CAAC,cAAc,CAAC,KAAG,EAAI,CAAC,CAAA;IAChD,SAAS,CAAC,SAAS,IAAI,IAAI,CAAA;AAC/B,CAAC;ACPD,SAAS,aAAa,CAAC,SAAgB;IAEnC,OAAO,QAAQ,CAAC,sBAAsB,CAAC,SAAS,CAAC,CAAA;AACrD,CAAC;ACHD,SAAS,UAAU,CAAE,EAAS;IAC1B,OAAO,QAAQ,CAAC,cAAc,CAAC,EAAE,CAAC,CAAA;AACtC,CAAC"}
    `
)
};

module.exports = {
  mkfile,
};
