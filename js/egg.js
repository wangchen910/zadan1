window.onload=function () {
    var jd1 = document.querySelector('.box:nth-child(1)')
    var jd2 = document.querySelector('.box:nth-child(2)')
    var jd3 = document.querySelector('.box:nth-child(3)')
    var jd = document.querySelector('.jd_zong')
    var Openegg = document.querySelector('.openegg')
    var Jinghua = document.querySelector('.jinghua')
    var Guangxian = document.querySelector('.guangxian')
    var Caidai = document.querySelector('.caidai')
    var a = 0;
    setInterval(function () {
        a++;
        if (a == 1) {
            jd1.style.zIndex = "2"
            jd2.style.zIndex = "1"
            jd3.style.zIndex = "3"
        } else if (a == 2) {
            jd1.style.zIndex = "3"
            jd2.style.zIndex = "2"
            jd3.style.zIndex = "1"
        } else if (a == 3) {
            jd1.style.zIndex = "1"
            jd2.style.zIndex = "3"
            jd3.style.zIndex = "2"
            a = 0
        }
    }, 2000)
    jd1.style.animation="myfirst 6s infinite linear"
    jd2.style.animation="mytow 6s infinite linear"
    jd3.style.animation="mythree 6s infinite linear"
    function go() {
        location.href = "heci.html";
    }

    jd1.onclick = function () {
        setInterval(function () {
            jd.style.display = 'none';
            Openegg.style.display = 'block'
            Jinghua.style.display = 'block'
            Guangxian.style.display = 'block'
            Caidai.style.display = 'block'
            setInterval(go, 1000)
        }, 100)
    }

    jd2.onclick = function () {
        setInterval(function () {
            jd.style.display = 'none';
            Openegg.style.display = 'block'
            Jinghua.style.display = 'block'
            Guangxian.style.display = 'block'
            Caidai.style.display = 'block'
            setInterval(go, 1000)
        }, 100)
    }
    jd3.onclick = function () {
        setInterval(function () {
            jd.style.display = 'none';
            Openegg.style.display = 'block'
            Jinghua.style.display = 'block'
            Guangxian.style.display = 'block'
            Caidai.style.display = 'block'
            setInterval(go, 1000)
        }, 100)
    }
}