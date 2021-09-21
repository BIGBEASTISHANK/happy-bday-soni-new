var i = 0; // Start Point
var images = []; // Images Array
var time = 2000; // Time Between Switch

// Image List
images[0] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210807_223508.jpg";
images[1] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210812_193938_049.jpg";
images[2] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210813_193523_612.jpg";
images[3] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210817_190121_021.jpg";
images[4] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210818_173819.jpg";
images[5] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210818_181339.jpg";
images[6] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210818_181758.jpg";
images[7] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210820_193436.jpg";
images[8] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210820_193446.jpg";
images[9] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210823_093952.jpg";
images[10] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210823_094233.jpg";
images[11] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210823_095118.jpg";
images[12] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210823_095146.jpg";
images[13] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210823_095245.jpg";
images[14] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210825_152446.jpg";
images[15] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210827_161857.jpg";
images[16] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210830_133142.jpg";
images[17] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210830_133530.jpg";
images[18] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210830_160519.jpg";
images[19] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210830_160530.jpg";
images[20] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210830_160603.jpg";
images[21] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210830_161152.jpg";
images[22] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210901_125154.jpg";
images[23] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210902_161711.jpg";
images[24] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210903_144654.jpg";
images[25] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210903_154936.jpg";
images[26] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210904_161430.jpg";
images[27] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210905_113747.jpg";
images[28] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210906_094207.jpg";
images[29] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210906_094718.jpg";
images[30] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210906_163737.jpg";
images[31] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210908_093209.jpg";
images[32] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210908_094148.jpg";
images[33] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210908_094848.jpg";
images[34] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210908_094921.jpg";
images[35] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210908_172546.jpg";
images[36] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210909_120006.jpg";
images[37] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210911_102618.jpg";
images[38] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210911_174421.jpg";
images[39] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210913_132027_497.jpg";
images[40] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/IMG_20210913_132153.jpg";
images[41] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/Snapchat-105858876.jpg";
images[42] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/Snapchat-1254964513.jpg";
images[43] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/Snapchat-1378229065.jpg";
images[44] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/Snapchat-1777169944.jpg";
images[45] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/Snapchat-1840404447.jpg";
images[46] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/Snapchat-1904829889.jpg";
images[47] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/Snapchat-1969463197.jpg";
images[4] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/Snapchat-1976875447.jpg";
images[46] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/Snapchat-399508501.jpg";
images[49] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/Snapchat-662819233.jpg";
images[50] = "https://bigbeastishank.github.io/happy-bday-soni-old/img/temp/Snapchat-973648453.jpg";


// Change Image
function changeImg() {
    document.slide.src = images[i];

    // Check If Index Is Under Max
    if (i < images.length - 1) {
        // Add 1 to Index
        i++;
    } else {
        // Reset Back To O
        i = 0;
    }

    // Run function every x seconds
    setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload = changeImg;