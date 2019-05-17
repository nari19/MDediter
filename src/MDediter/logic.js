import html2canvas from "html2canvas";

export async function getDisplayImage() {
    //html2canvas実行
    html2canvas(document.getElementById("target")).then(function(canvas) {
        downloadImage(canvas.toDataURL());
    });
}

function downloadImage(data) {
    const fname ="download.png";
    const encdata= atob(data.replace(/^.*,/, ''));
    const outdata = new Uint8Array(encdata.length);

    for (let i = 0; i < encdata.length; i++) {
        outdata[i] = encdata.charCodeAt(i);
    }

    const blob = new Blob([outdata], ["image/png"]);
    if (window.navigator.msSaveBlob) {
        //IE用
        window.navigator.msSaveOrOpenBlob(blob, fname);
    } else {
        //それ以外？
        document.getElementById("getImage").href=data; //base64そのまま設定
        document.getElementById("getImage").download=fname; //ダウンロードファイル名設定
        document.getElementById("getImage").click(); //自動クリック
    }
}