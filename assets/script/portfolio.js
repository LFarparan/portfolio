const root = document.querySelector(':root');
const blobcon = document.querySelector('.relablob');
const themecon = document.querySelector('#theme-change');
const themeIcon = document.querySelector('.theme-icon');
const theme = document.querySelector('.theme');
const blobs = document.querySelectorAll('.blob');
const clickme = document.querySelector('p.clickme');

root.classList = 'cold';

themecon.addEventListener('click', toggleTheme);
theme.addEventListener('click', toggleTheme);
themecon.addEventListener('mouseover', toggleblob);
themecon.addEventListener('mouseout', toggleblob);

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
}