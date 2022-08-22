// run `node index.js` in the terminal

console.info('Buku Tamu');

// function isi buku tamu
const isiBukuTamu = () => {
  // tangkap elemet tbody
  let tbody = document.getElementById('tbody');

  // input data tamu
  let namaLengkap = prompt('Masukan Nama Lengkap : ');
  let alamat = prompt('Masukan Alamat :');
  let keterangan = prompt('Masukan Keterangan : ');

  //console.log(namaLengkap, alamat, keterangan);

  // dapatkan total dari child tbody
  let totalData = tbody.childElementCount;

  // render string to html

  tbody.innerHTML += `
  <tr>
    <td> ${totalData + 1} </td>
    <td> ${namaLengkap} </td>
    <td> ${alamat} </td>
    <td style="text-align:center;"> ${keterangan} </td>
  </tr>
  `;
};
