const http = require('http');

http.createServer((req, res) => {
    let txt = ""
    if(req.url === "/login"){
        txt = 'Đăng nhập thành công';
    } else {
        txt = 'Đăng nhập thất bại';
    }
    res.end(txt);
}).listen(8080, 'localhost', ()=>{
    console.log('Sever đang chạy');
})