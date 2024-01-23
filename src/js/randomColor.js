const arrColors = [
    'rgba(228, 145, 251, 0.8)',
    'rgba(13, 227, 246, 0.8)',
    'rgba(13, 246, 13, 0.8)',
    'rgba(93, 16, 147, 0.8)',
    'rgba(208, 240, 26, 0.8)',
    'rgba(255, 221, 68, 0.8)',
    'rgba(243, 30, 30, 0.8)', 
    "blue", 'rgb(108, 31, 88)','rgb(26, 7, 50)'

];
export const randomColor = () => arrColors[parseInt(Math.random() * arrColors.length)]

