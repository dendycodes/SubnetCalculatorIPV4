function calc() {
  var a = parseInt(document.getElementById("prx").value);
  var ip = document.getElementById("inpip").value + ".";
  var h = document.getElementById("nh");
  var z = document.getElementById("sub");
  var n = document.getElementById("number");
  var network = document.getElementById("network");
  var broatcastt = document.getElementById("broatcast");
  var firstadress = document.getElementById("first");
  var lastadress = document.getElementById("last");
  var usableadress = document.getElementById("usable");
  n.innerHTML = "All Hosts:   ";
  z.innerHTML = "Subnet Mask:   ";
  h.innerHTML = "Network/Host:   ";
  network.innerHTML = "Network Address:   ";
  broatcastt.innerHTML = "Broatcast Address:   ";
  firstadress.innerHTML = "First Address:   ";
  lastadress.innerHTML = "Last Address:   ";
  usableadress.innerHTML = "Usable Hosts:   ";
  let mask = [];
  let subnetmask = [];
  var string3 = "";
  var string4 = "";
  var ipadress = [];

  if (a > 0 && a < 33) {
    for (var i = 0; i < 33; i++) {
      if (i === 8 || i === 16 || i === 24 || i === 32) {
        mask.push(string3);
        string3 = "";
        if (i === 33) break;
      }
      if (i < a) {
        string3 += "1";
      } else {
        string3 += "0";
      }
    }

    for (var i = 0; i < mask.length; i++) {
      let result = 0;
      var b = mask[i].split("");
      for (let index = 0; index < b.length; index++) {
        result += Number(b[index]) * Math.pow(2, b.length - 1 - index);
      }
      subnetmask.push(result);
    }
    for (var i = 0; i < subnetmask.length; i++) {
      if (i < subnetmask.length - 1) {
        z.innerHTML += subnetmask[i] + ".";
      } else z.innerHTML += subnetmask[i];
    }

    for (var i = 0; i < mask.length; i++) {
      if (i < mask.length - 1) {
        h.innerHTML += mask[i] + ".";
      } else h.innerHTML += mask[i];
    }

    var hosts;
    hosts = Math.pow(2, 32 - a);
    n.innerHTML += hosts;
    var hosts2;
    hosts2 = Math.pow(2, 32 - a) - 2;
    usableadress.innerHTML += hosts2;
  } else alert("Prefix is not valid ");
  let counter = 0;

  let numbers = "";
  for (let index = 0; index < ip.length; index++) {
    if (
      ip[index] == "." &&
      parseInt(numbers) <= 255 &&
      parseInt(numbers) >= 0
    ) {
      ipadress.push(numbers);
      numbers = "";
    } else if (ip[index] != ".") {
      numbers += ip[index];
    } else {
      network.innerHTML = "Network Address: Invalid IP Address";
      broatcast.innerHTML = "Broatcast Address: Invalid IP Address";
      firstadress.innerHTML = "First Address:  Invalid IP Address";
      lastadress.innerHTML = "Last Address:  Invalid IP Address";
      alert("IP Address is not valid ");
      break;
    }
  }

  var binary = [],
    bin = [],
    bin2 = [],
    bin3 = [],
    networkadress = [],
    i = "",
    i2 = "",
    m = "";
  for (let index = 0; index < ipadress.length; index++) {
    var num = Number(ipadress[index]);
    binary.push(num.toString(2));
  }
  for (let index = 0; index < binary.length; index++) {
    if (binary[index].length < 8) {
      let v = 8 - binary[index].length;
      for (let n = 0; n < v; n++) {
        binary[index] = "0" + binary[index];
      }
    }
  }

  for (let index = 0; index < binary.length; index++) {
    i += binary[index];
    m += mask[index];
  }
  for (let index = 0; index < i.length; index++) {
    bin.push(i[index]);
    bin2.push(m[index]);
  }
  for (let index = 0; index <= bin.length; index++) {
    if (index === 8 || index === 16 || index === 24 || index === 32) {
      bin3.push(string4);
      string4 = "";
    }
    string4 += Number(bin[index]) && Number(bin2[index]);
  }

  for (var i = 0; i < bin3.length; i++) {
    let result = 0;
    var b = bin3[i].split("");
    for (let index = 0; index < b.length; index++) {
      result += Number(b[index]) * Math.pow(2, b.length - 1 - index);
    }
    networkadress.push(result);
  }
  for (var i = 0; i < networkadress.length; i++) {
    if (i < networkadress.length - 1) {
      network.innerHTML += networkadress[i] + ".";
    } else network.innerHTML += networkadress[i];
  }
  var broatcast = [];
  var broatcastadress = [];
  var btcst = 0;
  var btc = "";
  var broatdeci = [];

  for (let index = 0; index < bin.length; index++) {
    if (bin2[index] == 1) {
      broatcast.push(bin[index]);
    } else if (bin2[index] == 0) {
      broatcast.push("1");
    }
  }

  for (let index = 0; index <= broatcast.length; index++) {
    if ((index === 8) | (index === 16) || index === 24 || index === 32) {
      broatdeci.push(btc);
      btc = "";
    }
    btc += broatcast[index];
  }

  for (var i = 0; i < broatdeci.length; i++) {
    let btcst = 0;
    var b = broatdeci[i].split("");
    for (let index = 0; index < b.length; index++) {
      btcst += Number(b[index]) * Math.pow(2, b.length - 1 - index);
    }
    broatcastadress.push(btcst);
  }
  for (var i = 0; i < broatcastadress.length; i++) {
    if (i < broatcastadress.length - 1) {
      broatcastt.innerHTML += broatcastadress[i] + ".";
    } else broatcastt.innerHTML += broatcastadress[i];
  }
  firstadress.innerHTML +=
    networkadress[0] +
    "." +
    networkadress[1] +
    "." +
    networkadress[2] +
    "." +
    parseInt(networkadress[3] + 1);
  lastadress.innerHTML +=
    broatcastadress[0] +
    "." +
    broatcastadress[1] +
    "." +
    broatcastadress[2] +
    "." +
    parseInt(broatcastadress[3] - 1);
  console.log("Subnet Mask:      " + mask);
  console.log("Ip Address:        " + binary);
  console.log("Networkaddress:    " + bin3);
  console.log("Broatcastaddress:  " + broatdeci);
}
