import { css } from 'styled-components';

const sizes = {
    desktop: 1910,
    small: 900,
};

const Media = Object.keys(sizes).reduce((acc,label) => {
    acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16 }em) {
        ${css(...args)};
    }
    `;
    
    return acc;
}, {});

export default Media;

