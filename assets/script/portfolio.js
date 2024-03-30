const root = document.querySelector(':root');
const blobcon = document.querySelector('.relablob');
const themecon = document.querySelector('#theme-change')
const themeIcon = document.querySelector('.theme-icon')
const theme = document.querySelector('.theme')

root.classList = 'cold';

themecon.addEventListener('click', toggleTheme);
theme.addEventListener('click', toggleTheme);
themecon.addEventListener('mouseover', toggleIcon);
themecon.addEventListener('mouseout', toggleIcon);


function toggleIcon(){
    themeIcon.classList.toggle('darken')
}


function toggleTheme(){
    root.classList.toggle('warm');
    themeIcon.src = (themeIcon.src.includes('snowflake.svg'))? './assets/images/fire.svg': './assets/images/snowflake.svg';
    theme.src = (theme.src.includes('snowflake.svg'))? './assets/images/fire.svg': './assets/images/snowflake.svg'
}