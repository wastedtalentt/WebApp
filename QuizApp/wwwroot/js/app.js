const navbarToggler = document.querySelector('.navbar-toggler');
const navbarBrand = document.getElementById('navbarBrand');

navbarToggler.addEventListener('click', () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 2000) {
        navbarBrand.classList.toggle('d-block');
        navbarBrand.classList.toggle('d-none');
    }
});


let score = 0;

const correctAnswers = {
    'test-test1': 0,
    'test-test2': 1,
    'test-test3': 2,
    'test-test4': 3,
    'test-test5': 1,
    'test-test6': 2,
    'test-test7': 1,
    'test-test8': 1,
    'test-test9': 0,
    'test-test10': 2,

    'test-test11': 0,
    'test-test12': 0,
    'test-test13': 2,
    'test-test14': 0,
    'test-test15': 2,
    'test-test16': 2,
    'test-test17': 0,
    'test-test18': 1,
    'test-test19': 2,
    'test-test20': 2,

    'test-test31': 0,
    'test-test32': 2,
    'test-test33': 2,
    'test-test34': 0,
    'test-test35': 1,
    'test-test36': 0,
    'test-test37': 1,
    'test-test38': 3,
    'test-test39': 3,
    'test-test40': 0,

    'test-test41': 0,
    'test-test42': 2,
    'test-test43': 1,
    'test-test44': 1,
    'test-test45': 0,
    'test-test46': 3,
    'test-test47': 3,
    'test-test48': 1,
    'test-test49': 1,
    'test-test50': 0,

    'test-test51': 0,
    'test-test52': 3,
    'test-test53': 2,
    'test-test54': 3,
    'test-test55': 2,
    'test-test56': 0,
    'test-test57': 1,
    'test-test58': 3,
    'test-test59': 0,
    'test-test60': 3,

    'test-test61': 3,
    'test-test62': 3,
    'test-test63': 1,
    'test-test64': 0,
    'test-test65': 0,
    'test-test66': 2,
    'test-test67': 1,
    'test-test68': 0,
    'test-test69': 3,
    'test-test70': 3,

    'test-test71': 0,
    'test-test72': 3,
    'test-test73': 1,
    'test-test74': 0,
    'test-test75': 2,
    'test-test76': 0,
    'test-test77': 2,
    'test-test78': 3,
    'test-test79': 0,
    'test-test80': 3,

    'test-test81': 3,
    'test-test82': 1,
    'test-test83': 1,
    'test-test84': 2,
    'test-test85': 2,
    'test-test86': 3,
    'test-test87': 2,
    'test-test88': 2,
    'test-test89': 0,
    'test-test90': 1,

    'test-test91': 0,
    'test-test92': 2,
    'test-test93': 3,
    'test-test94': 1,
    'test-test95': 2,
    'test-test96': 0,
    'test-test97': 1,
    'test-test98': 0,
    'test-test99': 3,
    'test-test100': 1,

    'test-test101': 0,
    'test-test102': 0,
    'test-test103': 1,
    'test-test104': 0,
    'test-test105': 3,
    'test-test106': 1,
    'test-test107': 3,
    'test-test108': 1,
    'test-test109': 1,
    'test-test110': 1,

    'test-test111': 2,
    'test-test112': 2,
    'test-test113': 1,
    'test-test114': 3,
    'test-test115': 3,
    'test-test116': 0,
    'test-test117': 1,
    'test-test118': 0,
    'test-test119': 3,
    'test-test120': 0,

    'test-test121': 1,
    'test-test122': 0,
    'test-test123': 3,
    'test-test124': 2,
    'test-test125': 0,
    'test-test126': 2,
    'test-test127': 3,
    'test-test128': 2,
    'test-test129': 0,
    'test-test130': 1,

    'test-test131': 1,
    'test-test132': 3,
    'test-test133': 1,
    'test-test134': 3,
    'test-test135': 1,
    'test-test136': 0,
    'test-test137': 3,
    'test-test138': 0,
    'test-test139': 1,
    'test-test140': 2,

    'test-test141': 0,
    'test-test142': 3,
    'test-test143': 3,
    'test-test144': 3,
    'test-test145': 1,
    'test-test146': 2,
    'test-test147': 0,
    'test-test148': 2,
    'test-test149': 1,
    'test-test150': 1,

    'test-test151': 3,
    'test-test152': 2,
    'test-test153': 0,
    'test-test154': 0,
    'test-test155': 3,
    'test-test156': 1,
    'test-test157': 1,
    'test-test158': 2,
    'test-test159': 0,
    'test-test160': 3,

    'test-test161': 3,
    'test-test162': 1,
    'test-test163': 0,
    'test-test164': 1,
    'test-test165': 2,
    'test-test166': 0,
    'test-test167': 2,
    'test-test168': 3,
    'test-test169': 0,
    'test-test170': 3,

    'test-test171': 3,
    'test-test172': 3,
    'test-test173': 1,
    'test-test174': 0,
    'test-test175': 1,
    'test-test176': 2,
    'test-test177': 3,
    'test-test178': 1,
    'test-test179': 0,
    'test-test180': 3,

    'test-test181': 0,
    'test-test182': 1,
    'test-test183': 3,
    'test-test184': 0,
    'test-test185': 1,
    'test-test186': 2,
    'test-test187': 1,
    'test-test188': 3,
    'test-test189': 1,
    'test-test190': 3,

    'test-test191': 0,
    'test-test192': 1,
    'test-test193': 3,
    'test-test194': 1,
    'test-test195': 0,
    'test-test196': 3,
    'test-test197': 1,
    'test-test198': 3,
    'test-test199': 0,
    'test-test200': 2,

    'test-test201': 0,
    'test-test202': 2,
    'test-test203': 3,
    'test-test204': 0,
    'test-test205': 3,
    'test-test206': 1,
    'test-test207': 1,
    'test-test208': 1,
    'test-test209': 3,
    'test-test210': 0,

    'test-test211': 3,
    'test-test212': 2,
    'test-test213': 0,
    'test-test214': 1,
    'test-test215': 3,
    'test-test216': 1,
    'test-test217': 0,
    'test-test218': 1,
    'test-test219': 1,
    'test-test220': 0,

    'test-test221': 1,
    'test-test222': 3,
    'test-test223': 0,
    'test-test224': 2,
    'test-test225': 0,
    'test-test226': 2,
    'test-test227': 1,
    'test-test228': 1,
    'test-test229': 3,
    'test-test230': 0,

    'test-test231': 3,
    'test-test232': 0,
    'test-test233': 2,
    'test-test234': 1,
    'test-test235': 3,
    'test-test236': 0,
    'test-test237': 2,
    'test-test238': 0,
    'test-test239': 1,
    'test-test240': 3,

    'test-test241': 2,
    'test-test242': 1,
    'test-test243': 0,
    'test-test244': 0,
    'test-test245': 3,
    'test-test246': 0,
    'test-test247': 2,
    'test-test248': 3,
    'test-test249': 0,
    'test-test250': 3,

    'test-test251': 3,
    'test-test252': 0,
    'test-test253': 2,
    'test-test254': 1,
    'test-test255': 0,
    'test-test256': 1,
    'test-test257': 0,
    'test-test258': 2,
    'test-test259': 3,
    'test-test260': 2,

    'test-test261': 1,
    'test-test262': 0,
    'test-test263': 1,
    'test-test264': 2,
    'test-test265': 3,
    'test-test266': 0,
    'test-test267': 1,
    'test-test268': 2,
    'test-test269': 1,
    'test-test270': 2,

    'test-test271': 1,
    'test-test272': 2,
    'test-test273': 0,
    'test-test274': 0,
    'test-test275': 2,
    'test-test276': 0,
    'test-test277': 1,
    'test-test278': 3,
    'test-test279': 1,
    'test-test280': 3,

    'test-test281': 3,
    'test-test282': 0,
    'test-test283': 0,
    'test-test284': 2,
    'test-test285': 1,
    'test-test286': 1,
    'test-test287': 1,
    'test-test288': 0,
    'test-test289': 3,
    'test-test290': 3,

    'test-test291': 1,
    'test-test292': 2,
    'test-test293': 1,
    'test-test294': 2,
    'test-test295': 0,
    'test-test296': 0,
    'test-test297': 3,
    'test-test298': 0,
    'test-test299': 2,
    'test-test300': 3,

    'test-test301': 0,
    'test-test302': 1,
    'test-test303': 3,
    'test-test304': 2,
    'test-test305': 1,
    'test-test306': 0,
    'test-test307': 2,
    'test-test308': 0,
    'test-test309': 1,
    'test-test310': 1,

    'test-test311': 1,
    'test-test312': 0,
    'test-test313': 3,
    'test-test314': 0,
    'test-test315': 2,
    'test-test316': 1,
    'test-test317': 1,
    'test-test318': 0,
    'test-test319': 1,
    'test-test320': 3,

    'test-test321': 0,
    'test-test322': 1,
    'test-test323': 0,
    'test-test324': 3,
    'test-test325': 2,
    'test-test326': 2,
    'test-test327': 1,
    'test-test328': 1,
    'test-test329': 0,
    'test-test330': 3,

    'test-test331': 1,
    'test-test332': 0,
    'test-test333': 3,
    'test-test334': 0,
    'test-test335': 2,
    'test-test336': 1,
    'test-test337': 0,
    'test-test338': 0,
    'test-test339': 2,
    'test-test340': 1,

    'test-test341': 1,
    'test-test342': 0,
    'test-test343': 1,
    'test-test344': 0,
    'test-test345': 0,
    'test-test346': 1,
    'test-test347': 3,
    'test-test348': 1,
    'test-test349': 0,
    'test-test350': 2
};

function checkAnswer(element, selectedIndex, nextTestId) {
    const currentTestId = element.closest('.container').parentElement.id;

    if (selectedIndex === correctAnswers[currentTestId]) {
        element.style.border = "2px solid rgb(112, 148, 112)";
        element.style.background = "rgb(242, 252, 242)";
        score++;
    } else {
        element.style.border = "2px solid rgb(206, 107, 107)";
        element.style.background = "rgb(245, 232, 232)";
    }

    const options = document.querySelectorAll(`#${currentTestId} .option`);
    options.forEach(option => option.onclick = null);

    if (nextTestId) {
        setTimeout(() => {

            element.closest('.container').parentElement.style.display = 'none';

            const nextTestElement = document.getElementById(nextTestId);
            nextTestElement.style.display = 'block';
            const nextTestElement1 = document.getElementById('facebook-share');

            if (nextTestId === 'test-result') {
                let resultMessage = '';
                let gifUrl = '';

                if (score <= 3) {
                    const gifs = [
                        'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExczY2dmR4MmF0aTA0bW1yeWpsM2puNGhheGRuMnFsc2dwendtMHdlZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/li0dswKqIZNpm/giphy.webp',
                        'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHMyNXE5dm00c21tYjRiODRoN2p6Mmc2dmlxeHRxdm11eDFuM2JiMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6wrtF81uczxbHtn2/giphy.webp',
                        'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHl1YnBva3p3NWdoZWpkaDRiYmN4em5hdGFmMmgzdWlhazZpeWc1MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EXHHMS9caoxAA/giphy.webp',
                        'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjNzemVqb3FtMWI3ZG0ycjVlMnl0MzlpOHMxdXJrZWU4aGk1MHdjayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lb95bHRxh1Ze0/200.webp',
                        'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDRuaDRscnd0N2xnN2h6bnVpcmFqaWZ2M2cxM2JkeWR0YjIxdTY0MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mJzayaTmOLKaQ/giphy.webp'
                    ];
                    gifUrl = gifs[Math.floor(Math.random() * gifs.length)];
                    resultMessage = `🤦‍♂️ შედეგი: ${score} / 10`;
                } else if (score < 7) {
                    const gifs = [
                        'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpzNmY3ZGdqNzdvdDkwNmc1bXh4aHRvY3JsNDhpemsxbGJ2a29mMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HTYZXzUFHYE6n6w/giphy.webp',
                        'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDR0aGJ6OTN0MDFhdWdyMG9rN2R2ajFheW5xcGlwcXJhNWdncmd3ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1l4TrFpL5G9ZS/giphy.webp',
                        'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXp4dHBydWZ4ZjFleDQzeGNtN3Ixb3d5OHYzaGxsYWdnOTFtNzFqMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUNd9G6KgAoXeWcMJq/giphy.webp',
                        'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzJldmFrcjR6cWFyNzY2cWU3dTc0dTNveTJtNTE1aWhwMG55eGxoYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cRLflRucEd6l6D11z3/giphy.webp',
                        'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2JrazVncDN4cm5namtzdDhqOTk0dXQ1NTU2bG96dmtmaDJvYTRnMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3vUenF6L6TTXViOguQ/giphy.webp'
                    ];
                    gifUrl = gifs[Math.floor(Math.random() * gifs.length)];
                    resultMessage = `🤔 შედეგი: ${score} / 10`;
                } else if (score < 10) {
                    const gifs = [
                        'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNngyejk1c2RzMXN2cGY1ZmZwMDBjdjJ5a3VzYnY4eWI0cDRkMXluNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/r2WoFd4k7F9BAVboF5/giphy.webp',
                        'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGx4NnVhd2NkZ3lpd2xvYm81ZzVuYXl5ZTJtM2RxbzAxZW5nODZkZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WmkqburJqXziM/200.webp',
                        'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdW9idnMwbnd0d21lMXdlMm9hZ3VkcDU5OGE2cmwyYzMxNHd2MzVxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d2Z4rTi11c9LRita/giphy.webp',
                        'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXMwZDY3NnRvcGtqajBodDZ1cHJ4cmlkY3E4NHIxeTU4dTgzYTN0ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XI1txPqfUN5fOLrPh2/giphy.webp',
                        'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWVlczFiN3V3Ym45eTNmdno5dDBhNDBuNXF1N2JtaGQ3ZnIxbDg0aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2JIdnF6aJnAqzDgY/giphy.webp'
                    ];
                    gifUrl = gifs[Math.floor(Math.random() * gifs.length)];
                    resultMessage = `🏆 შედეგი: ${score} / 10`;
                } else {
                    const gifs = [
                        'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnhyaTJ2azV0dXdhZjcyaXFmMWlieXkzMGt4N3M2ZWt5amtqOXlrZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0EwYc29XZnLR2pB6/giphy.webp',
                        'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTEzdzRtOG1ub3BndmVuNTI3Y3M1d28wMXZvbnRnYWx0bm4xMHliNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/f3jaUOPTe53Ah0VzZ3/giphy.webp',
                        'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWRlbDVlOWltbGV3OHBpcWl6ZmYzbzhhMWt0OWM3YXhzOGlvbmJ1dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WsEyXaONfWeX8YgWIB/giphy.webp',
                        'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3M2N2E1cWhydHp6bHBzdmp3djFkdXppd2pkazBibWx3d2IwejZ4byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Rs2pwsyyPkqSUYUzyV/giphy.webp',
                        'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDJkcHZvbm9rNHM5ZHEyZDB2cWV5cjJ3MnVxaDh5d3g4aWV3ejE3NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kiRg2bh0wZ8Lxex5zx/giphy.webp'
                    ];
                    gifUrl = gifs[Math.floor(Math.random() * gifs.length)];
                    resultMessage = `🚀 შედეგი: ${score} / 10`;
                }

                nextTestElement.innerHTML = `
        <div class="container" style="text-align: center;">
            <img class="container" id="Gif" src="${gifUrl}">
            <p class="container" id="Gif-p">${resultMessage}</p>
            <div id="facebook-share" class="facebook-share">
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://known.ge/index.html"
                    target="_blank"
                    class="btn btn-primary" id = "facButton">
                    <i class="fab fa-facebook"></i>Share on Facebook
                </a>
            </div>
        </div>
    `;
            }
        }, 600);
    }
}

// submit button stay 
function handleFormSubmit(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value;

    if (emailValue) {
        console.log('Email submitted:', emailValue);
        setTimeout(() => {
            emailInput.value = '';
        }, 500);
    } else {
        console.log('Email field is empty');
    }

    return false;
}

document.addEventListener("click", function (event) {
    const navbar = document.getElementById("navbarNav");
    const navbarToggle = document.querySelector(".navbar-toggler");

    if (
        navbar.classList.contains("show") &&
        !navbar.contains(event.target) &&
        !navbarToggle.contains(event.target)
    ) {
        navbarToggle.click();
    }
});

const loginForm = document.getElementById('login-main-form');
const registerForm = document.getElementById('register-main-form');

const tablogin = document.getElementById('tab-login');
const tablogin1 = document.getElementById('tab-login1');

const tabRegister = document.getElementById('tab-register');

const overlay = document.getElementById('login-overlay');
const closeButton = document.getElementById('close-login-form');
const closeRegisterButton = document.getElementById('close-register-form');

tabRegister.addEventListener('click', () => {
    setTimeout(() => {
        if (registerForm.style.display === 'none' || registerForm.style.display === '') {
            registerForm.style.display = 'block';
            overlay.style.display = 'block';
            document.body.classList.add('locked');
        } else {
            registerForm.style.display = 'none';
            overlay.style.display = 'none';
            document.body.classList.remove('locked');
        }
    }, 200);
});

closeRegisterButton.addEventListener('click', () => {
    registerForm.style.display = 'none';
    overlay.style.display = 'none';
    document.body.classList.remove('locked');
});


tablogin1.addEventListener('click', () => {
    setTimeout(() => {
        if (loginForm.style.display === 'none' || loginForm.style.display === '') {
            loginForm.style.display = 'block';
            overlay.style.display = 'block';
            document.body.classList.add('locked');
        } else {
            loginForm.style.display = 'none';
            overlay.style.display = 'none';
            document.body.classList.remove('locked');
        }
    }, 200);
});


tablogin.addEventListener('click', () => {
    setTimeout(() => {
        if (loginForm.style.display === 'none' || loginForm.style.display === '') {
            loginForm.style.display = 'block';
            overlay.style.display = 'block';
            document.body.classList.add('locked');
        } else {
            loginForm.style.display = 'none';
            overlay.style.display = 'none';
            document.body.classList.remove('locked');
        }
    }, 200);
});


closeButton.addEventListener('click', () => {
    loginForm.style.display = 'none';
    overlay.style.display = 'none';
    document.body.classList.remove('locked'); // Enable background interaction
});


// აქედან 583 ხაზამდე ავტორიზაციიდან რეგისტრაციაზე გადასვლა გადმოსვლის ფუნქციონალია.

// JavaScript to handle toggling between forms
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-main-form");
    const registerForm = document.getElementById("register-main-form");

    // Initially hide the registration form
    registerForm.style.display = "none";

    // Handle click to open the Registration form
    document.querySelector("#login-href a").addEventListener("click", function (event) {
        event.preventDefault();
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });

    // Handle click to open the Login form
    document.querySelector("#register-main-form #login-href a").addEventListener("click", function (event) {
        event.preventDefault();
        registerForm.style.display = "none";
        loginForm.style.display = "block";
    });

    // Optional: Close buttons to hide forms
    document.getElementById("close-login-form").addEventListener("click", function () {
        loginForm.style.display = "none";
    });

    document.getElementById("close-register-form").addEventListener("click", function () {
        registerForm.style.display = "none";
    });
});

