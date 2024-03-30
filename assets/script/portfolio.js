const root = document.querySelector(':root');
const theme = document.querySelector('.theme');
const blobcon = document.querySelector('.relablob');
root.classList = 'cold';

theme.addEventListener('click', toggleTheme);


function toggleTheme(){
    root.classList.toggle('warm');
    theme.src = (theme.src.includes('snowflake.svg'))? './assets/images/fire.svg': './assets/images/snowflake.svg'
    

}