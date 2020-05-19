const bgColor = document.querySelector('.bg-color')
const hexConvert = document.querySelector('.hex-convert')

const hexValue = document.querySelector('.hex-value')

const bgHex = document.querySelectorAll('.bgHex')

//監聽hexConvert裡有mousemove的動作時
hexConvert.addEventListener('mousemove', function (e) {
    const target = e.target

    //取得target的value值(只有input才會有該值)
    let value = e.target.value
    value = Number(value)
    //當目前得到對象的標籤名為input時，數字區會顯示剛取得的value
    if (target.tagName === 'INPUT') {
        const bgNum = target.parentElement.nextElementSibling
        bgNum.textContent = value
    }

    let str = '#'

    //把RBG中每個值取出，透過迴圈加在憶起變成str
    bgHex.forEach(element => {
        let bgValue = element.textContent
        bgValue = Number(bgValue)
        console.log(bgValue)

        //將其變為16進位的字串
        //但在數值低於16時，16進位僅會顯示0-9或是a-f單一個值(如0,a,b,f)，為了顯示2位數，要在這些值前面加上'0'
        if (bgValue < 16) {
            bgValue = bgValue.toString(16)
            console.log(bgValue)
            bgValue = '0' + bgValue
            str += bgValue
        } else {
            bgValue = bgValue.toString(16)
            str += bgValue
        }
    })


    hexValue.textContent = str

    bgColor.style.backgroundColor = hexValue.textContent
})


//參考資料：
//RGB、HSL、Hex 網頁色彩碼，看完這篇全懂了 http://csscoke.com/2015/01/01/rgb-hsl-hex/
//十六進位 https://zh.wikipedia.org/wiki/%E5%8D%81%E5%85%AD%E8%BF%9B%E5%88%B6
//MDN https://www.w3schools.com/jsref/jsref_tostring_number.asp