const root = document.querySelector(':root');
const blobcon = document.querySelector('.relablob');
const themecon = document.querySelector('#theme-change');
const themeIcon = document.querySelector('.theme-icon');
const theme = document.querySelector('.theme');
const blobs = document.querySelectorAll('.blob');
const clickme = document.querySelector('p.clickme');
const profilePic = document.querySelector('img#portraitpic');

root.classList = 'cold';

theme.addEventListener('click', toggleTheme);
themecon.addEventListener('mouseover', toggleblob);
themecon.addEventListener('mouseout', toggleblob);
themecon.addEventListener('click', function() {
    toggleTheme();
    var classArray = Array.from(clickme.classList);
    if (!classArray.includes('disappear')){
        clickme.classList.toggle('disappear');
        setTimeout( ()=>{clickme.classList.toggle('disappear')}, 10000);
    }
});

function toggleblob(){
    blobs.forEach(blob => {
        blob.classList.toggle('blobglow');
    })
    clickme.classList.toggle('fade');
}

function toggleTheme(){
    root.classList.toggle('warm');
    themeIcon.src = (themeIcon.src.includes('snowflake.svg'))? './assets/images/fire.svg': './assets/images/snowflake.svg';
    theme.src = (theme.src.includes('snowflake.svg'))? './assets/images/fire.svg': './assets/images/snowflake.svg'
    profilePic.src = (profilePic.src.includes('coldportrait.png'))? './assets/images/warmportrait.png': './assets/images/coldportrait.png';
}

