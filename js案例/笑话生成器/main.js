const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const am = document.getElementById('american');

function getRandomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

let storyText = '今天气温 34 摄氏度，:inserta:出去遛弯。当走到:insertb:门前时，突然就:insertc:。人们都惊呆了，李雷全程目睹但并没有慌，因为:inserta:是一个 130 公斤的胖子，天气又辣么热。';
const insertX = ['怪兽威利', '大老爹', '圣诞老人'];
const insertY = ['白宫', '迪士尼乐园', '肯德基'];
const insertZ = ['自燃了', '在人行道化成了一坨泥', '变成一条鼻涕虫爬走了'];

randomize.addEventListener('click', result);
function result() {
    if (customName != '') {
        let uname = customName.value;
        storyText = storyText.replace('李雷', uname);
    }

    if (am.checked) {
        let weight = Math.round(300);
        let temperature = Math.round(94);

    }

    // 替换故事文本中的占位符

    let finalStory = storyText
        .replace(':inserta:', getRandomFromArray(insertX))
        .replace(':insertb:', getRandomFromArray(insertY))
        .replace(':insertc:', getRandomFromArray(insertZ))
        .replace(':inserta:', getRandomFromArray(insertX)) // 再次替换，因为有两个 :inserta:;

    // 设置故事文本并显示
    story.textContent = finalStory;
    story.style.visibility = 'visible';

}











